import * as trpc from '@trpc/server';
import { Context } from 'src/context'
import { z } from 'zod'

export const appRouter = trpc.router<Context>().query('getNotes', {
  async resolve({ ctx }) {
    return ctx.prisma.note.findMany();
  }
}).mutation('createNote', {
  input: z.object({
    text: z.string().min(3).max(245),
  }),
  async resolve({ ctx, input }) {
    return ctx.prisma.note.create({
      data: {
        text: input.text
      }
    })
  }
}).mutation('deleteNote', {
  input: z.object({
    id: z.number(),
  }),
  async resolve({ ctx, input }) {
    return ctx.prisma.note.delete({
      where: { id: input.id }
    })
  }
})

export type AppRouter = typeof appRouter;