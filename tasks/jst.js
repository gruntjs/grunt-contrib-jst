/*
 * grunt-contrib-jst
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 Tim Branyen, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-contrib-jst/blob/master/LICENSE-MIT
 */

module.exports = function(grunt) {
  "use strict";

  var _ = require("underscore");
  var helpers = require("grunt-contrib-lib").init(grunt);

  var jst = function(source, filepath, namespace, templateSettings) {
    try {
      return namespace + "['" + filepath + "'] = " + _.template(source, false, templateSettings).source + ";";
    } catch (e) {
      grunt.log.error(e);
      grunt.fail.warn("JST failed to compile.");
    }
  };

  grunt.registerMultiTask("jst", "Compile underscore templates to JST file", function() {
    var options = helpers.options(this, {namespace: "JST", templateSettings: {}});

    grunt.verbose.writeflags(options, "Options");

    // TODO: ditch this when grunt v0.4 is released
    this.files = this.files || helpers.normalizeMultiTaskFiles(this.data, this.target);

    var srcFiles;
    var taskOutput;
    var sourceCode;
    var sourceCompiled;

    var helperNamespace = "this['" + options.namespace + "']";

    this.files.forEach(function(file) {
      srcFiles = grunt.file.expandFiles(file.src);

      taskOutput = [];
      taskOutput.push(helperNamespace + " = " + helperNamespace + " || {};");

      srcFiles.forEach(function(srcFile) {
        sourceCode = grunt.file.read(srcFile);

        sourceCompiled = jst(sourceCode, srcFile, helperNamespace, options.templateSettings);

        taskOutput.push(sourceCompiled);
      });

      if (taskOutput.length > 0) {
        grunt.file.write(file.dest, taskOutput.join("\n\n"));
        grunt.log.writeln("File '" + file.dest + "' created.");
      }
    });
  });

};
