# **DO NOT USE THIS EXTENSION**
Get the official version from
- [Accenture SFMC DevTools](https://github.com/Accenture/sfmc-devtools)

## Build

Use the following scripts to build the extension bundle in the `/dist` directory:

1. Install dependencies: `npm ci`
2. Production build (minified, with hidden source maps): `npm run build`
3. Development build (unminified, single run): `npm run build:dev`
4. Development build with watch mode: `npm run build:watch`

The production build is also executed automatically before packaging (`vscode:prepublish`).

Latest verification: `npm run build` completes successfully and outputs the bundled extension to `dist/extension.bundle.js`.

### Copyright

The majority of this extension's code is Copyright (c) 2024 Accenture. [MIT licensed](https://github.com/Accenture/sfmc-devtools-vscode/blob/main/LICENSE).
