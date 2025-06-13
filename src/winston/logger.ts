import { IContextLogger } from '@mytake2/context-logger/core';
import { createLogger } from './createLogger';

const globalSymbol = Symbol.for('@mytake2/context-logger/winston/singleton');

const g = globalThis as any;

if (!g[globalSymbol]) {
  g[globalSymbol] = createLogger();
}

export const logger: IContextLogger = g[globalSymbol];
