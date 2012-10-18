# Overview

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