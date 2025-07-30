export * from '@mytake2/context-logger/core';

// use winston implementation by default.
// can be swapped for other implementations (console, pino, log4js, console)
// but would warrant a major version bump due to options model change.
export { createLogger, logger } from '@mytake2/context-logger/winston';

// // to use winston implementation:
// export { createLogger, logger } from '@mytake2/context-logger/winston';
