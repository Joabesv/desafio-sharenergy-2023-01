import type { inferAsyncReturnType } from '@trpc/server';
import { CreateFastifyContextOptions } from '@trpc/server/adapters/fastify'
import { prisma } from '../database/connection'

export const createContext = ({ req, res }: CreateFastifyContextOptions) => ({ req, res, prisma })

export type Context = inferAsyncReturnType<typeof createContext>;