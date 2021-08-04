## Getting started with webdriverio cucumber framework
1. npm init to create the package.json
2. npm i @wdio/cli
3. Setup: 
```
npx wdio config
```
Ask a series of questions/options to config the webdriverio

4. To run
```
npx wdio run ./wdio.conf.js
```
it will install the dependencies and create the wdio.conf.ts

5. create a file tsconfig.json with the content copied
```
{
  "compilerOptions": {
    "types": ["node", "webdriverio/async", "@wdio/cucumber-framework", "expect-webdriverio"]
  }
}
```

6. run the test using the command:
```
npx wdio wdio.conf.ts
```