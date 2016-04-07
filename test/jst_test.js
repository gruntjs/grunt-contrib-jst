var grunt = require('grunt');

exports['jst'] = {
  main: function(test) {
    'use strict';

    var expect, result;

    test.expect(13);

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
    
    expect = grunt.file.read("test/expected/amd_wrapper_no_ns.js");
    result = grunt.file.read("tmp/amd_wrapper_no_ns.js");
    test.equal(expect, result, "should wrap the template with define for AMD pattern and return the function itself with no namespace");
    
    expect = grunt.file.read("test/expected/pretty_amd.js"); 
    result = grunt.file.read("tmp/pretty_amd.js");
    test.equal(expect, result, "should make the AMD wrapper output pretty");
    
    expect = grunt.file.read("test/expected/process_content.js");
    result = grunt.file.read("tmp/process_content.js");
    test.equal(expect, result, "should convert file content");

    expect = grunt.file.read("test/expected/local_scope.js");
    result = grunt.file.read("tmp/local_scope.js");
    test.equal(expect, result, "should add `with` block when templateSettings.variable is undefined");

    expect = grunt.file.read("test/expected/commonjs_wrapper.js"); 
    result = grunt.file.read("tmp/commonjs_wrapper.js");
    test.equal(expect, result, "should export the templates using the CommonJS pattern");
    
    expect = grunt.file.read("test/expected/commonjs_wrapper_no_ns.js");
    result = grunt.file.read("tmp/commonjs_wrapper_no_ns.js");
    test.equal(expect, result, "should export the templates using the CommonJS pattern and return the function itself with no namespace");

    expect = grunt.file.read("test/expected/pretty_commonjs.js");
    result = grunt.file.read("tmp/pretty_commonjs.js");
    test.equal(expect, result, "should make the CommonJS wrapper output pretty");

    test.done();
  }
};
