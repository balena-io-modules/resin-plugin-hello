resin-plugin-hello
------------------

[![npm version](https://badge.fury.io/js/resin-plugin-hello.svg)](http://badge.fury.io/js/resin-plugin-hello)

Hey there, welcome to the Resin CLI hello plugin!

This plugin serves many purposes:

- As a Resin CLI plugin example.
- As a tutorial, in order to learn the basics of Resin CLI plugin development.
- As a boilerplate to build your own plugin.

## Tutorial

The [index.js](https://github.com/resin-io/resin-plugin-hello/blob/master/index.js) file contains annotations that serve as a basic Resin CLI plugin development tutorial. Check this file if you want to learn how to develop your first Resin CLI plugin.

## Package.json

Make sure that you name your plugin as `resin-plugin-<plugin-name>` in your `package.json` **otherwise the CLI will not load it**.

Examples of well-formed plugin names:

- `resin-plugin-hey-there`
- `resin-plugin-my-kickass-plugin`

Examples of ill-formed plugin names:

- `resin-hey-there`
- `my-resin-cli-plugin`

## Installing

If you install a Resin CLI plugin as a global module, it will be loaded by the Resin CLI automagically.

### From NPM

```sh
$ npm install -g resin-plugin-hello
```

### From git

```sh
$ npm install -g git+https://git@github.com/resin-io/resin-plugin-hello.git
```

## Developing

A nice trick to ease your development workflow is [npm link](https://docs.npmjs.com/cli/link). This command creates a symbolic link from your local plugin source directory to the global module location in your system, causing changes to your plugin to be reflected on the fly by the Resin CLI.

Example:

```sh
$ cd resin-plugin-hello
$ npm link
$ resin hello Juan --exclamate
Hey there Juan!!!
```

## Learn more

We're working hard to provide more extensive documentation. In the midtime, take a look at [Capitano](https://github.com/resin-io/capitano) as most of the most powerful features come from it.

## CoffeeScript

You can develop your plugins with CoffeeScript. Just make sure you compile to JavaScript and point the `main` field in your package.json to your compiled JavaScript file.

## Support

If you're having any problem, please [raise an issue](https://github.com/resin-io/resin-plugin-hello/issues) on GitHub.

License
-------

The project is licensed under the MIT license.

