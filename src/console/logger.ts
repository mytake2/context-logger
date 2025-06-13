import { IContextLogger } from '../core/index.js';
import { createLogger } from './createLogger.js';

const globalSymbol = Symbol.for('@mytake2/context-logger/console/singleton');

const g = globalThis as any;

if (!g[globalSymbol]) {
  g[globalSymbol] = createLogger();
}

export const logger: IContextLogger = g[globalSymbol];
