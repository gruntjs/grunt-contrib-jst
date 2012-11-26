# grunt-contrib-jst [![Build Status](https://secure.travis-ci.org/gruntjs/grunt-contrib-jst.png?branch=master)](http://travis-ci.org/gruntjs/grunt-contrib-jst)

> Precompile Underscore templates to JST file.


## Getting Started
If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```shell
npm install grunt-contrib-jst --save-dev
```

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md


## Jst task
_Run this task with the `grunt jst` command._

### Overview

In your project's Gruntfile, add a section named `jst` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  jst: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```
### Options

#### files
Type: `Object`

This defines what files this task will process and should contain key:value pairs.

The key (destination) should be an unique filepath (supports [grunt.template](https://github.com/gruntjs/grunt/blob/master/docs/api_template.md)) and the value (source) should be a filepath or an array of filepaths (supports [minimatch](https://github.com/isaacs/minimatch)).

Note: Values are precompiled to the namespaced JST array in the order passed.

#### options.namespace
Type: `String`
Default: 'JST'

The namespace in which the precompiled templates will be asssigned.  *Use dot notation (e.g. App.Templates) for nested namespaces.*

#### options.processName
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

#### options.templateSettings
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
##### options.prettify
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

##### options.amdWrapper
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
### Examples

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

## Release History

 * 2012-10-11   v0.3.1   Rename grunt-contrib-lib dep to grunt-lib-contrib.
 * 2012-08-22   v0.3.0   Options no longer accepted from global config key.
 * 2012-08-15   v0.2.3   Support for nested namespaces.
 * 2012-08-11   v0.2.2   Added processName functionality & escaping single quotes in filenames.
 * 2012-08-09   v0.2.0   Refactored from grunt-contrib into individual repo.

---

Task submitted by [Tim Branyen](http://tbranyen.com)

*This file was generated on Tue Nov 13 2012 16:12:13.*
