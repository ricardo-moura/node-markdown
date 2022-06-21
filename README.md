# node-markdown

## Overview
This project aims to:
- Putting the knowledge of the course into practice "[NodeJS: criando sua primeira biblioteca](https://www.alura.com.br/conteudo/nodejs-criando-biblioteca)".
- Read markdown files;
- Check if there are links in the file and if they are valid (HTTP status code 200 ok).

## Technologies
- NodeJS;
- NPM.

## Project structure
```tree
├── arquivos #markdown files that will be read
├── src
│   └── test #jest unit test files.
│   └── cli.js #script responsible to execute markdown reading.
│   └── http-validation.js #script responsible to check if the links are valid.
│   └── index.js #script responsible for opening the file and extracting the links (if there are links in it).
│   └── practicalCli.js and practicalExercise.js #practicing variations of what was learned.
│
├── .gitignore #ignoring unnecessary files
├── package.json #npm project dependencies
```

## Prerequisites
- NodeJS v16;
- NPM v8.5.

## Installation:
1. Clone the repository `git clone https://github.com/ricardo-moura/node-markdown.git`;
2. In the terminal run the command `npm install`;
3. In the terminal run the command `npm run cli`.
4. If everything was successful, you will see the following output in the terminal:
```bash
process finished
links validados [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList',
    status: 200
  },
  {
    '<input>': 'https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input',
    status: 200
  },
  {
    DataTransfer: 'https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer',
    status: 200
  },
  {
    HTMLCanvasElement: 'https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement',
    status: 200
  },
  {
    'Implementation notes': 'https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes',
    status: 200
  }
]
```

## Automated tests:
This project is covered by automated tests.

### How to run the automated tests:
1. Execute the following commands in your terminal:
```bash
    npm run test
```
2. The tests results should be displayed like that:
```bash
PASS  src/test/index.test.js
readFile::
    ✓ should be a function (2 ms)
    ✓ should return an array with results (35 ms)
    ✓ should return there are no links in the file (5 ms)
    ✓ should throw an exception when file does not exist (14 ms)
    ✓ should resolve the function with success (6 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.451 s
Ran all test suites matching /src\/test/i.
```
