# Options

## separator
Type: `String`
Default: linefeed + linefeed

Concatenated files will be joined on this string.

## namespace
Type: `String`
Default: 'JST'

The namespace in which the precompiled templates will be assigned. Use dot notation (e.g. App.Templates) for nested namespaces or false for no namespace wrapping. When false and formatting to amd or cjs module, templates will be returned directly from the AMD wrapper.

## processName
Type: `function`
Default: null

This option accepts a function which takes one argument (the template filepath) and returns a string which will be used as the key for the precompiled template object.  The example below stores all templates on the default JST namespace in capital letters.

```js
options: {
  processName: function(filename) {
    return filename.toUpperCase();
  }
}
```

## templateSettings
Type: `Object`
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

## prettify
Type: `boolean`
Default: false

When doing a quick once-over of your compiled template file, it's nice to see
an easy-to-read format that has one line per template. This will accomplish
that.

```js
options: {
  prettify: true
}
```

## format
Type: `Object`
Default: {}

Supported keys:
* `type`: `'amd'|'cjs'`
* `deps`: `{ depVar: depname }`

Converts the output file to a specified module format (amd or cjs).  The compiled template namespace will be exported unless `namespace` has been explicitly set to false, in which case the template function will be returned directly.  If a `deps` object has been defined, the dependencies will be included in-line.

```js
define(function() {
  //...//
  return this['[template namespace]'];
});
```


## processContent
Type: `function`

This option accepts a function which takes one argument (the file content) and
returns a string which will be used as template string.
The example below strips whitespace characters from the beginning and the end of
each line.

```js
options: {
  processContent: function(src) {
    return src.replace(/(^\s+|\s+$)/gm, '');
  }
}
```
