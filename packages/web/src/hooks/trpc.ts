import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from '@challenge/api';

export const trpc = createReactQueryHooks<AppRouter>();