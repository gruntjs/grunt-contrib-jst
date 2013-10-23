# Usage Examples

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
Note that the `interpolate: /\{\{(.+?)\}\}/g` setting above is simply an example of overwriting lodash's default interpolation. If you want to parse templates with the default `_.template` behavior (i.e. using `<div><%= this.id %></div>`), there's no need to overwrite `templateSettings.interpolate`.
