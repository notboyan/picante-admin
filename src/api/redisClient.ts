import { Redis } from '@upstash/redis'
const redis = new Redis({
    url: 'https://internal-wasp-37153.upstash.io',
    token: import.meta.env.VITE_UPSTASH_REDIS_TOKEN
});

export const getClient = () => {
    return redis;
}