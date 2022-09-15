# Hermes monorepo application

This is an application that has been made with Turborepo

---

**IMPORTANT: This app is still being developed.**

**The progress can be seen in the [Roadmap](https://github.com/Krindendo/Hermes/blob/main/Roadmap.md) folder.**

---

## Apps and Packages

- [native](https://github.com/Krindendo/Hermes/blob/main/apps/native/README.md): a [React Native](https://reactnative.dev) built with expo
- [server](https://github.com/Krindendo/Hermes/blob/main/apps/server/README.md): a [Express.js](https://expressjs.com) server
- [web](https://github.com/Krindendo/Hermes/blob/main/apps/web/README.md): a [Next.js](https://nextjs.org) app
- [logger](https://github.com/Krindendo/Hermes/blob/main/packages/logger/README.md): package for record events
- [config](https://github.com/Krindendo/Hermes/blob/main/packages/config/README.md): Jest and eslint configurations
- [tsconfig](https://github.com/Krindendo/Hermes/blob/main/packages/tsconfig/README.md): `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## Utilities

- [TypeScript](https://www.typescriptlang.org) for static type checking
- [ESLint](https://eslint.org) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Jest](https://jestjs.io) for testring javascript code
- [Cypress](https://www.cypress.io/) for end to end testing
- [Storybook](https://storybook.js.org) for test react components

## How to start application

Minimum requirements is

- [yarn](https://yarnpkg.com/getting-started/install): 1.22.0
- [nodejs](https://nodejs.org/en): 14.0.0

and you can't use npm in this app. You can, but you need to remove one line of code in package.json.

### How to start native application

If you want to open app in your mobile, you only need to install app on your phone called [Expo](https://expo.dev/client), connect mobile with computer and start this app from console.

But if you want to test an app on a virtual machine, you will have to do a few things first:

1. Enable Virtualization Technology in BIOS. If your PC doesn't support virualization, then press F to pay respects for your computer. If you succesfuly enabled virtualization then you can continue reading. If not, you can only test app in your mobile.
2. In Windows features enable Hyper-V and restart computer.
3. Install [Android Studio](https://developer.android.com/studio/index.html)
4. **Open Androdi Strudio as Administrator**
5. Launch SDK Manager and install Android 12.0(S) in SDK Platforms,
6. In SDK Tools install Android SDK Build-Tools, Android Emulator, Android Emulator Hypervisor or Intel x86 Emulator and Android SDK Platform and Android SDK Tools
7. Set the ANDROID_HOME environment variable (detailed instructions are available at https://reactnative.dev/docs/environment-setup and click React Native CLI Quickstart).
8. Also update the Path environment variable
9. In this case, your phone must not be connected to the computer.
10. Start a virtual machine, then launch the app from the console and type `yarn dev:native`.

### How to start server application

1. Create .env.development file with variables:

- SECRET="ABC"

### How to start web application

You don't need to add config to the application.

Open root of project and type in console: `yarn dev:web`

---

## Tips for yarn

yarn workspace server add express-jwt

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

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/core-concepts/pipelines)
- [Caching](https://turborepo.org/docs/core-concepts/caching)
- [Remote Caching](https://turborepo.org/docs/core-concepts/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/core-concepts/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
