# Options

## files
Type: `Object`

This defines what files this task will process and should contain key:value pairs.

The key (destination) should be an unique filepath (supports [grunt.template](https://github.com/gruntjs/grunt/blob/master/docs/api_template.md)) and the value (source) should be a filepath or an array of filepaths (supports [minimatch](https://github.com/isaacs/minimatch)).

Note: Values are precompiled to the namespaced JST array in the order passed.

## options.namespace
Type: `String`
Default: 'JST'

The namespace in which the precompiled templates will be asssigned.  *Use dot notation (e.g. App.Templates) for nested namespaces.*

## options.processName
Type: ```function```
Default: null

This option accepts a function which takes one argument (the template filepath) and returns a string which will be used as the key for the precompiled template object.  The example below stores all templates on the default JST namespace in capital letters.

```js
options: {
  processName: function(filename) {
    return filename.toUpperCase();
  }
}
```

## options.templateSettings
Type: ```Object```
Default: null

The settings passed to underscore when compiling templates.

```js
jst: {
  compile: {
    options: {
      templateSettings: {
        interpolate : /\{\{(.+?)\}\}/g
      }
    },
    files: {
      "path/to/compiled/templates.js": ["path/to/source/**/*.html"]
    }
  }
}
```

## options.prettify
Type: ```boolean```
Default: false

When doing a quick once-over of your compiled template file, it's nice to see
an easy-to-read format that has one line per template. This will accomplish
that.

```javascript
options: {
  prettify: true
}
```

## options.amdWrapper
Type: ```boolean```
Default: false

With Require.js and a pre-compiled template.js you want the templates to be
wrapped in a define. This will wrap the output in:

``` javascript
define(function() {
  //Templates
  return this["NAMESPACE"];
});
```

Example:
``` javascript
options: {
  amdWrapper: true
}
```
