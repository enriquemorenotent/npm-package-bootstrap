# NPM Package Bootstrap Framework

This is a bootstrap framework for creating and publishing NPM packages with ease. It comes pre-configured with ES Modules support, Webpack, Babel, and Jest for testing. This allows you to focus on writing your package code without worrying about the initial setup.

## Features

* ES Modules support
* Optimized build process using Webpack and Babel
* Jest for unit testing
* Exhaustive .gitignore file
* Pre-configured scripts for testing and building

## Available Scripts

In the package.json file, several pre-configured scripts are available:

* npm run test: Run the Jest test suite.
* npm run test:watch: Run the Jest test suite in watch mode, re-running tests when source files change.
* npm run build: Build your package for production, creating an optimized bundle in the dist folder.
* npm run build:watch: Build your package in development mode and watch for changes in source files, rebuilding when changes are detected.

## Publishing

When you're ready to publish your package to NPM, follow these steps:

1. Update the name, version, description, author, and license fields in the package.json file.

2. Build your package for production.

```
npm run build
```

3. Log in to your NPM account using the command line, or create a new account if you don't have one.

```
npm login
```

4. Publish your package to the NPM registry.

```
npm publish
```

## Contributing

If you have suggestions for how the Foo framework can be improved, please open an issue or submit a pull request. We'd love to hear your ideas!

## License

This project is licensed under the MIT License. See the LICENSE file for more information.