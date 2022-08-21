# Turborepo starter

This is an official Yarn v1 starter turborepo.

## What's inside?

This turborepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org) app
- `web`: another [Next.js](https://nextjs.org) app
- `ui`: a stub React component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)

## Tips for yarn

yarn workspace server add express-jwt

yarn dev --scope server

## Playlist

https://www.youtube.com/watch?v=QXUifHrXctQ

https://www.youtube.com/watch?v=YJhlm2aTS0M

https://www.youtube.com/watch?v=TO-_3tck2tg

## Commit enums

build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)

ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)

docs: Documentation only changes

feat: A new feature

fix: A bug fix

perf: A code change that improves performance

refactor: A code change that neither fixes a bug nor adds a feature

style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)

test: Adding missing tests or correcting existing tests
