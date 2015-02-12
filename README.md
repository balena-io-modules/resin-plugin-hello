resin-plugin-hello
------------------

[![npm version](https://badge.fury.io/js/resin-plugin-hello.svg)](http://badge.fury.io/js/resin-plugin-hello)

Hey there, welcome to the Resin CLI hello plugin!

This plugin serves many purposes:

- As an example of how Resin CLI plugins are made.
- As a tutorial, in order to learn the basics of Resin CLI plugins development.
- As a boilerplate to build your own plugin.

## Tutorial

The [index.js](https://github.com/resin-io/resin-plugin-hello/blob/master/index.js) file is fully commented as a basic Resin CLI plugin development tutorial. Checkout this file if you want to learn to developer your first Resin CLI plugin.

## Package.json

Make sure that you name your plugin as *resin-plugin-[pluginName]* in your `package.json` **otherwise the CLI will not load it**.

Examples of well formed plugin names:

- `resin-plugin-hey-there`
- `resin-plugin-my-kickass-plugin`

Examples of ill formed plugin names:

- `resin-hey-there`
- `my-resin-cli-plugin`.

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

When developing you own plugin, a nice trick is to use [npm link](https://docs.npmjs.com/cli/link), to link your plugin as a global module, in order for the Resin CLI to detect it, and in order to make changes and see their results on the fly.

Example:

```sh
$ cd resin-plugin-hello
$ npm link
$ resin hello Juan --exclamate
Hey there Juan!!!
```

## Learn more

We're working hard to bring extensive documentation of plugin development to you.

In the midtime, take a look at [Capitano](https://github.com/resin-io/capitano) as most of the most powerful features come from it.

## CoffeeScript

You can develop your plugins with CoffeeScript. Just make sure you point to your `coffee` file from `package.json` `main` field.

## Support

If you're having any problem, please [raise an issue](https://github.com/resin-io/resin-plugin-hello/issues) on GitHub.

License
-------

The project is licensed under the MIT license.

