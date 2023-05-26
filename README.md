# zalgo-generator

<p align="center">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascriptLogo" style="height:50px;">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescriptLogo" style="height:50px;">
</p>

This is a zalgo text generator. It will generate zalgo text from the input text.

This package can be used for javascript and typescript.

## 🚀🚀🚀 [The package is published on npm](https://www.npmjs.com/package/video-stream-ascii) 🚀🚀🚀

The source code is available on 🚀🚀 [GitHub](https://github.com/Im-Rises/zalgo-generator) 🚀🚀

You can find an online demo at this address :

## 🚀🚀 [zalgo-generator-website](https://github.com/Im-Rises/zalgo-generator-website) 🚀🚀

## Usage

There is different functions to use which take an input string and return a zalgo text string.

You can find examples in the `index.ts` file.

```ts
import {zalgoGeneration, zalgoRandomGeneration, unzalgoText} from './zalgo-generator';

console.log('Zalgo hello world! : ', zalgoGeneration('Zalgo hello world!', 1, 1, 1), '\n');

const zalgoText = zalgoRandomGeneration('Zalgo text!', 3);

console.log('Random zalgo text : ', zalgoText, '\n');

console.log('Unzalgo Zalgo text! : ', unzalgoText(zalgoText), '\n');
```

## GitHub Actions

[![Node.js CI](https://github.com/Im-Rises/zalgo-generator/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Im-Rises/zalgo-generator/actions/workflows/node.js.yml)
[![ESLint](https://github.com/Im-Rises/zalgo-generator/actions/workflows/eslint.yml/badge.svg?branch=main)](https://github.com/Im-Rises/zalgo-generator/actions/workflows/eslint.yml)
[![CodeQL](https://github.com/Im-Rises/zalgo-generator/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/Im-Rises/zalgo-generator/actions/workflows/codeql.yml)
[![Node.js Package](https://github.com/Im-Rises/zalgo-generator/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/Im-Rises/zalgo-generator/actions/workflows/npm-publish.yml)

The project is set up to run the following actions:

- node.js.yml : Runs the tests for the Node.js project.
- eslint.yml : Runs the ESLint linter on the project.
- codeql.yml : Runs the CodeQL linter on the project.
- npm-publish.yml : Publishes the package to the npm registry.

## Documentations

Xo:  
<https://github.com/xojs/xo>

ESLint:  
<https://eslint.org/docs/latest/user-guide/getting-started>

## Links

Check the source code
on [![github](https://user-images.githubusercontent.com/59691442/223556058-6244e346-8117-43cd-97c6-bf68611bf286.svg)](https://github.com/im-rises/zalgo-generator)

Check the package
on [![npm](https://user-images.githubusercontent.com/59691442/223556055-4e9ef014-79d4-4136-ac07-b837b49066c8.svg)](https://www.npmjs.com/package/zalgo-generator)

## Contributors

Quentin MOREL :

- @Im-Rises
- <https://github.com/Im-Rises>

[![GitHub contributors](https://contrib.rocks/image?repo=Im-Rises/zalgo-generator)](https://github.com/Im-Rises/zalgo-generator/graphs/contributors)
