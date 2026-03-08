import { Redis } from "@upstash/redis"

const redisUrl = import.meta.env.VITE_UPSTASH_REDIS_URL
const redisToken = import.meta.env.VITE_UPSTASH_REDIS_TOKEN

export const redis = new Redis({
    url: redisUrl,
    token: redisToken
})

const uid = () => Math.random().toString(36).slice(2, 9)

export function useCollection(prefix) {
    const indexKey = `${prefix}:ids`
    const itemKey = (id: string) => `${prefix}:${id}`

    const getAll = async () => {
        try {
            const ids = await redis.smembers(indexKey)
            if (!ids.length) return []
            // fetch all hashes in one round-trip using a pipeline
            const pipeline = redis.pipeline()
            ids.forEach((id: string) => pipeline.hgetall(itemKey(id)))
            const results = await pipeline.exec()
            return results.map((fields, i) => ({ id: ids[i], ...fields }))
        } catch (error) {
            // console.error(error)
            return []
        }
    }

    const add = async (fields: any) => {
        const id = uid()
        await redis.sadd(indexKey, id)
        await redis.hset(itemKey(id), fields)
        return id
    }

    const edit = (id: string, fields: any) => {
        return redis.hset(itemKey(id), fields)
    }

    const remove = async (id: string) => {
        await redis.srem(indexKey, id)
        await redis.del(itemKey(id))
    }

    return { getAll, add, edit, remove }
}