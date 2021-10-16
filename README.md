# NPM Package Template

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

Create NPM Packages instantly with this open-source template repo.

# Get Started

To use this repo template properly, _please make sure you update the following files in your repo._

```
./
  AUTHORS
  MAINTAINERS

  lib/
    index.js    // Your NPM Package Code
```

### **Step 1** - Login to NPM

To get started, you must have an account with [npmjs.com](https://www.npmjs.com/). If you don't have an account, you can sign up for one here: [https://www.npmjs.com/signup](https://www.npmjs.com/signup). Then, login into your npm account using CLI.

```shell
npm login
```

### **Step 2** - Update `package.json`

Update `package.json` with your NPM package information. Please make sure to update the following fields:

File: `package.json`

```json
{
  "name": "unique-pkg-name",
  "author": "ranajahanzaib",
  "version": "1.0.0"
}
```

**Tip:** _[Do a Quick Search](https://www.npmjs.com/search?q=isMyUniquePkgNameAvailable) to find a package name that's unique and available._

### **Step 3** - Deploy

Once, you have made the required changes, you can deploy your package to [NPM Registry](https://www.npmjs.com/) by running the following command in CLI.

```shell
npm publish
```

### **Step 4** - Update

To update the NPM Package, increase the version number in `package.json`.

```json
{
  "version": "1.0.1"
}
```

And run the following command in CLI to publish an update for your NPM package.

```shell
npm publish
```

### **Step 5** - Install & Use the new NPM Package.

Once, the package is published, you can run the following command in CLI to install the package to any Nodejs project:

```shell
npm i npm-pkg

 - OR -

yarn add npm-pkg
```

Replace `npm-pkg` with the name of your NPM package.

# Contributing

We'd love to accept your patches and contributions to this project. There are just a few guidelines you need to follow.

### [Code of Conduct](./CODE_OF_CONDUCT.md)

This project follows [Contributor Covenant](https://www.contributor-covenant.org/)
as it's Code of Conduct, and we expect all project participants to adhere to it.
Please read the [full guide](./CODE_OF_CONDUCT.md) so that you can understand
what actions will not be tolerated.

### [Contributing Guide](./CONTRIBUTING.md)

Read our [contributing guide](./CONTRIBUTING.md) to learn about our development process, how to propose bugfixes and improvements, and how to build and test your changes to project.

### [LICENSE](./LICENSE)

This project is licensed under the [MIT License](./LICENSE), meaning that you're free to modify, distribute, and / or use it for any commercial or private project.
