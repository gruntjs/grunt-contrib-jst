/*
 * grunt-contrib-jst
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tim Branyen, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var _ = require('lodash');

  // filename conversion for templates
  var defaultProcessName = function(name) { return name; };

  grunt.registerMultiTask('jst', 'Compile underscore templates to JST file', function() {

    var helpers = require('grunt-lib-contrib').init(grunt);
    var options = this.options({
      namespace: 'JST',
      templateSettings: {},
      processContent: function (src) { return src; }
    });

    // assign filename transformation functions
    var processName = options.processName || defaultProcessName;

    grunt.verbose.writeflags(options, 'Options');

    var compiled, src, filename;
    var nsInfo = helpers.getNamespaceDeclaration(options.namespace);

    var files = this.file.src;
    var output = files.map(function(file) {
      var src = options.processContent(grunt.file.read(file));

      try {
        compiled = _.template(src, false, options.templateSettings).source;
      } catch (e) {
        grunt.log.error(e);
        grunt.fail.warn('JST failed to compile.');
      }

      if (options.prettify) {
        compiled = compiled.replace(/\n+/g, '');
      }
      filename = processName(file);

      return nsInfo.namespace+'['+JSON.stringify(filename)+'] = '+compiled+';';
    });

    if(output.length > 0) {
      output.unshift(nsInfo.declaration);
      if (options.amdWrapper) {
        if (options.prettify) {
          output.forEach(function(line, index) {
            output[index] = "  " + line;
          });
        }
        output.unshift("define(function(){");
        output.push("  return " + nsInfo.namespace + ";\n});");
      }
      grunt.file.write(this.file.dest, output.join('\n\n'));
      grunt.log.writeln('File "' + this.file.dest + '" created.');
    }

  });
};
