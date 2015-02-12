/*
 * Resin Plugin Hello
 *
 * Hey there, welcome to the Resin CLI plugin hello example.
 *
 * This plugin will be commented explaining everything in detail.
 *
 * Notice that this example is not exhaustive and there are plenty
 * more powerful options and ways to build even more powerful plugins.
 *
 * We will focus on the most important stuff in this tutorial,
 * but head over to the documentation if you're hungry for more!
 */

/* 
 * (1) Exporting commands
 *
 * - To export a single command, assign that command object
 *   directly to module.exports.
 *
 * - To export multiple commands, assign an array of command
 *   objects to module.exports.
 */
module.exports = {

  /*
   * (2) Command signatures
   *
   * This is the signature of your command, omitting "resin"
   * of course.
   *
   * The signature describes how to call your command, as well
   * as the parameters it accepts, if any.
   *
   * In this case, we are saying that our command is called "hello",
   * and it accepts a *required* parameter that we will call "name".
   *
   * To call this command, the user will have to do:
   *
   *   $ resin hello Juan
   *
   * Of course replacing Juan with your own name!
   *  
   * The Resin CLI uses [Capitano](https://github.com/resin-io/capitano)
   * for it's command parsing capabilities, and this signature is just
   * a Capitano signature.
   * Head over to Capitano's documentation to learn more about the
   * powerful syntax that it provides.
   */
  signature: 'hello <name>',

  /*
   * (3) Command description
   *
   * The command description consist in a very short line describing
   * what the command does. 
   *
   * The description is printed at the right of the command signature
   * when Resin CLI general help is shown (resin help).
   *
   * Try to be as brief as possible here, and take a look at "resin help"
   * for some inspiration.
   *
   * The command help is the place to write extensive documentation!
   */
  description: 'get a nice greeting',

  /*
   * (4) Command help
   *
   * The command help consists in extensive help for your command,
   * and will be shown when calling "resin help <command>".
   *
   * You can write very detailed help in this section. Multi-line
   * JavaScript strings are allowed.
   *
   * Notice that you don't need to document the command options
   * manually. Capitano automatically appends them to your help section.
   *
   * Check out "resin help <command>" for some of the built in
   * commands for examples.
   */
  help: 'A command that greets you nicely',

  /*
   * (5) Command permission
   *
   * A command permission imposes certain restrictions for running
   * your command.
   *
   * For now, we only expose the "user" permission, which means
   * that you have to login (resin login) before running the command,
   * otherwise you'll get a friendly error message asking the user to do so.
   *
   * If you want anyone to call your command, even if they are not logged in,
   * just omit the permission option altogether.
   *
   * Notice that if your plugin makes calls to the Resin API, or
   * makes any action that requires a valid authentication token,
   * this option is highly recommended, in order to prevent your users
   * to get more scary error messages at runtime.
   */
  permission: 'user',

  /*
   * (6) Command options
   *
   * The options field consists of an array of options object definitions.
   * 
   * Notice this options are scoped to the particular command, and thus
   * are not available from other commands, even from within the same plugin!
   */
  options: [

    /*
     * (6.1) Boolean option
     *
     * A boolean option is an option that doesn't require a parameter,
     * and it's evaluated to true depending on it's existence.
     *
     * In this case we're defining an "exclamation" boolean option.
     *
     * This means it will be used as:
     *
     *   $ resin hello Juan --exclamation
     */
    {
      boolean: true,

      /*
       * In this case we're defining an "exclamation" boolean option.
       *
       * This means it will be used as:
       *
       *   $ resin hello Juan --exclamation
       */
      signature: 'exclamation',

      /*
       * The option description, as the command description, is supposed
       * to be a brief overview of what the option does, and it's shown
       * when doing "resin help <command>".
       */
      description: 'greet efusively',

      /*
       * You can specify an alias, or a set of aliases for your signature.
       * Just make sure it doesn't conflict with any other option!
       *
       * In this case, having "x" and "e" as aliases means we can use
       * our option like:
       *
       *   $ resin hello Juan --exclamation
       *   $ resin hello Juan -x
       *   $ resin hello Juan -e
       *
       * And they will all lead to the same result.
       *
       * Notice that the aliases don't have to consist of only one letter.
       * For example, we could alias our command to "surprise" as well.
       *
       * Also notice that aliases are optional, and you can just omit
       * this field.
       */
      alias: [ 'x', 'e' ]
    },

    /*
     * (6.2) Parameter options
     *
     * A parameter option in an option is an option that requires a parameter.
     *
     * We already introduced most of the concepts in the Boolean Option section,
     * so we will only describe what's new here.
     *
     * In this case we're defining a "greet" option that takes a "greeting"
     * parameter.
     *
     * You can think of this as equivalent to "--greet [greeting]".
     *
     * That means we can pass a custom greeting like this:
     *
     *   $ resin hello Juan --greet "Howdy"
     *
     * Or using our alias:
     *
     *   $ resin hello Juan -g "Howdy"
     */
    {
      signature: 'greet',
      parameter: 'greeting',
      description: 'custom greeting',
      alias: 'g',
    }
  ],

  /*
   * (7) Command action
   *
   * The command action is probably the most important part of your
   * plugin, and where the fun goes.
   *
   * The action function provides 3 parameters:
   *
   * - "params": An object containing all signature parameters.
   *
   *   In this case, "params" will contain a "name" string containing
   *   the name that the user passed to our command.
   *   Notice that as we called our parameter "<name>" in the signature,
   *   we can access it as "params.name".
   *   If called our parameter "<foo>" instead, we will be able to get
   *   it's value as "params.foo".
   *
   * - "options": An object containing all passed command options (and globals too).
   *
   *   As the "params" object, the "options" object will consists of keys
   *   named after the option definition signature.
   *
   *   If we pass our "exclamation" option (with the full signature or with one of the aliases),
   *   the "options" object will contain an "exclamation" field equal to "true".
   *
   *   If we pass a custom greeting with "greet", we will find the custom greet in
   *   "options.greet".
   *
   * - "done": A callback meant to be called when your command finished.
   *
   *   If your command returns an error, call done() with a JavaScript
   *   Error instance describing the issue.
   *
   *   It's preferable that you call done() with an error instead of
   *   throwing it directly so the Resin CLI can use its built-in
   *   command handling mechanism.
   *
   *   If your command finishes gracefully, just call done() with no
   *   arguments.
   */
  action: function(params, options, done) {
    var greet = options.greet || 'Hey there';
    var result = greet + ', ' + params.name;

    if(options.exclamation) {
      result += '!!!';
    }

    console.log(result);
    done();
  }
};
