var grunt = require('grunt');

exports['jst'] = {
  main: function(test) {
    'use strict';

    var expect, result;

    test.expect(8);

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
    
    expect = grunt.file.read("test/expected/pretty.js"); 
    result = grunt.file.read("tmp/pretty.js");
    test.equal(expect, result, "should make the output be 1 line per template, making the output less ugly");
    
    expect = grunt.file.read("test/expected/amd_wrapper.js"); 
    result = grunt.file.read("tmp/amd_wrapper.js");
    test.equal(expect, result, "should wrap the template with define for AMD pattern");
    
    expect = grunt.file.read("test/expected/pretty_amd.js"); 
    result = grunt.file.read("tmp/pretty_amd.js");
    test.equal(expect, result, "should make the AMD wrapper output pretty");

    expect = grunt.file.read("test/expected/strip.js");
    result = grunt.file.read("tmp/strip.js");
    test.equal(expect, result, "should strip surrounding whitespace characters from each line");

    test.done();
  }
};
