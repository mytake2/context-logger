# @mytake2/context-logger

[![NPM Version](https://img.shields.io/npm/v/@mytake2/context-logger)](https://npmjs.com/package/@mytake2/context-logger) [![NPM Version](https://img.shields.io/npm/dw/@mytake2/context-logger)](https://npmjs.com/package/@mytake2/context-logger) [![NPM Version](https://img.shields.io/bundlephobia/min/@mytake2/context-logger)](https://npmjs.com/package/@mytake2/context-logger)

A TypeScript native context capturing logger.

License: [MIT](https://opensource.org/licenses/MIT)

## Installation

```bash
    npm install @mytake2/context-logger
```

## Quick Start

```TypeScript
import { createLogger, IContextLogger } from '@mytake2/context-logger';

const logger: IContextLogger = createLogger({ level: 'debug' });

await logger.addContext({ traceId: 1234 }, async context => {
  logger.info("log will contain traceId in log's json");
});

```

## Metadata

```TypeScript
import { createLogger, IContextLogger } from '@mytake2/context-logger';

const logger: IContextLogger = createLogger({ level: 'debug' });

await logger.addContext({ traceId: 1234 }, async context => {
  logger.info("log will contain traceId and metadata". { metadata: "test", other: 1234 });
});

```

## Errors

```TypeScript
import { createLogger, IContextLogger } from '@mytake2/context-logger';

const logger: IContextLogger = createLogger({ level: 'debug' });

await logger.addContext({ traceId: 1234 }, async context => {
  try {
    throw new Error("test error 123");
  } catch (error) {
    logger.error(error, { additionalInfo: "error thrown in method X" }); // log will contain traceId
  }
});

```

## Contributing

To contribute, all PRs should target the `mytake2` branch. Feature branches must be rebased onto the latest `mytake2` commit before merging to keep a linear git history.

## Publishing

Package releases are started by manually triggering the [Bump Version](https://github.com/mytake2/context-logger/actions/workflows/bump-version.yml) GitHub Action. The Bump Version action will create a release commit with the version bump and an associated git tag, and automatically start the [Build and Publish](https://github.com/mytake2/context-logger/actions/workflows/build-and-publish.yml) GitHub Action. The Build and Publish action requires a manual approval step from a repository admin. Once approved, the package will be published to the NPM registry.

## Support

Please create a PR if you find any missing functionality that you's like to add. For bugs, please use the [issues tracker](https://github.com/mytake2/context-logger/issues). I'd be happy to help you!
