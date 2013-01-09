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

_This task is a [multi task][] so any targets, files and options should be specified according to the [multi task][] documentation._
[multi task]: https://github.com/gruntjs/grunt/wiki/Configuring-tasks


_Version `0.4.x` of this plugin is compatible with Grunt `0.4.x`. Version `0.3.x` of this plugin is compatible with Grunt `0.3.x`._

### Options

#### namespace
Type: `String`
Default: 'JST'

The namespace in which the precompiled templates will be asssigned.  *Use dot notation (e.g. App.Templates) for nested namespaces.*

#### processName
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

#### templateSettings
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

#### prettify
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

#### amdWrapper
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

#### processContent
Type: ```function```

This option accepts a function which takes one argument (the file content) and
returns a string which will be used as template string.
The example below strips whitespace characters from the beginning and the end of
each line.

```javascript
options: {
  processContent: function(src) {
    return src.replace(/(^\s+|\s+$)/gm, '');
  }
}
```

### Usage Examples

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

 * 2013-01-08   v0.4.0rc5   Updating to work with grunt v0.4.0rc5. Switching to this.filesSrc api.
 * 2012-10-11   v0.3.1   Rename grunt-contrib-lib dep to grunt-lib-contrib.
 * 2012-08-22   v0.3.0   Options no longer accepted from global config key.
 * 2012-08-15   v0.2.3   Support for nested namespaces.
 * 2012-08-11   v0.2.2   Added processName functionality & escaping single quotes in filenames.
 * 2012-08-09   v0.2.0   Refactored from grunt-contrib into individual repo.

---

Task submitted by [Tim Branyen](http://tbranyen.com)

*This file was generated on Wed Jan 09 2013 14:42:32.*
