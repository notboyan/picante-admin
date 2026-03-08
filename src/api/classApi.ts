import { useCollection } from "./redisClient";

const useClasses = () => useCollection('class')

export const { getAll, add, edit, remove } = useClasses()

