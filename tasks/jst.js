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
  var helpers = require('grunt-lib-contrib').init(grunt);
  var lf = grunt.util.linefeed;
  var defaults = {
    namespace: 'JST',
    templateSettings: {},
    processContent: function (src) { return src; },
    processName: function(name) { return name; },
    separator: lf + lf
  };

  function processFile(f, options, nsInfo) {
    var output = f.src.filter(function(filepath) {
      // Warn on and remove invalid source files (if nonull was set).
      if (!grunt.file.exists(filepath)) {
        grunt.log.warn('Source file "' + filepath + '" not found.');
        return false;
      } else {
        return true;
      }
    })
    .map(function(filepath) {
      return compileTemplate(filepath, options, nsInfo);
    });

    if (output.length < 1) {
      grunt.log.warn('Destination ' + f.dest + ' not written because compiled files were empty.');
      return;
    }

    output.unshift(nsInfo.declaration);

    if (!!options.amdWrapper) {
      wrapForAmd(output, options, nsInfo);
    }

    grunt.file.write(f.dest, output.join(grunt.util.normalizelf(options.separator)));
    grunt.log.writeln('File "' + f.dest + '" created.');
  }

  function compileTemplate(filepath, options, nsInfo) {
    var compiled, filename;
    var src = options.processContent(grunt.file.read(filepath));
    
    try {
      compiled = _.template(src, false, options.templateSettings).source;
    } catch (e) {
      grunt.log.error(e);
      grunt.fail.warn('JST failed to compile.');
    }

    if (options.prettify) {
      compiled = compiled.replace(new RegExp('\n', 'g'), '');
    }

    filename = options.processName(filepath);

    return nsInfo.namespace+'['+JSON.stringify(filename)+'] = '+compiled+';';
  }

  function wrapForAmd(output, options, nsInfo) {
    var pathToUnderscore = options.amdWrapper.pathToUnderscore || 'underscore';

    if (options.prettify) {
      output.forEach(function(line, index) {
        output[index] = "  " + line;
      });
    }

    output.unshift("define(['" + pathToUnderscore + "'], function(_) {");
    output.push("  return " + nsInfo.namespace + ";" + lf + "});");
  }

  grunt.registerMultiTask('jst', 'Compile underscore templates to JST file', function() {
    var options = this.options(defaults);
    var nsInfo = helpers.getNamespaceDeclaration(options.namespace);

    grunt.verbose.writeflags(options, 'Options');
    
    this.files.forEach(function(f) {
      processFile(f, options, nsInfo);
    });
  });
};
