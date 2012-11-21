var grunt = require('grunt');

exports['jst'] = {
  main: function(test) {
    'use strict';

    var expect, result;

    test.expect(6);

    expect = grunt.file.read("test/expected/jst.js");
    result = grunt.file.read("tmp/jst.js");
    test.equal(expect, result, "should compile underscore templates into JST");

    expect = grunt.file.read("test/expected/uglyfile.js");
    result = grunt.file.read("tmp/uglyfile.js");
    test.equal(expect, result, "should escape single quotes in filenames");

    expect = grunt.file.read("test/expected/ns_nested.js");
    result = grunt.file.read("tmp/ns_nested.js");
    test.equal(expect, result, "should define parts of nested namespaces");
    
    expect = grunt.file.read("test/expected/ns_nested.js"); // same as previous test
    result = grunt.file.read("tmp/ns_nested_this.js");
    test.equal(expect, result, "should define parts of nested namespaces, ignoring this.");

    expect = grunt.file.read("test/expected/pretty.js"); // same as previous test
    result = grunt.file.read("tmp/pretty.js");
    test.equal(expect, result, "should make the output be 1 line per template, making the output less ugly");
    
    expect = grunt.file.read("test/expected/self_exe.js"); // same as previous test
    result = grunt.file.read("tmp/self_exe.js");
    test.equal(expect, result, "should wrap the template as a self-executing function");
    
    test.done();
  }
};
