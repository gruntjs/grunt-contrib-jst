'use strict';

var grunt = require('grunt');

function readFile(file) {
  var contents = grunt.file.read(file);
  if (process.platform === 'win32') {
    contents = contents.replace(/\r\n/g, '\n');
  }
  return contents;
}

exports.jst = {
  main: function(test) {

    var expect, result;

    test.expect(10);

    expect = readFile('test/expected/jst.js');
    result = readFile('tmp/jst.js');
    test.equal(expect, result, 'should compile underscore templates into JST');

    expect = readFile('test/expected/uglyfile.js');
    result = readFile('tmp/uglyfile.js');
    test.equal(expect, result, 'should escape single quotes in filenames');

    expect = readFile('test/expected/ns_nested.js');
    result = readFile('tmp/ns_nested.js');
    test.equal(expect, result, 'should define parts of nested namespaces');

    expect = readFile('test/expected/ns_nested.js'); // same as previous test
    result = readFile('tmp/ns_nested_this.js');
    test.equal(expect, result, 'should define parts of nested namespaces, ignoring this.');

    expect = readFile('test/expected/pretty.js');
    result = readFile('tmp/pretty.js');
    test.equal(expect, result, 'should make the output be 1 line per template, making the output less ugly');

    expect = readFile('test/expected/amd_wrapper.js');
    result = readFile('tmp/amd_wrapper.js');
    test.equal(expect, result, 'should wrap the template with define for AMD pattern');

    expect = readFile('test/expected/amd_wrapper_no_ns.js');
    result = readFile('tmp/amd_wrapper_no_ns.js');
    test.equal(expect, result, 'should wrap the template with define for AMD pattern and return the function itself with no namespace');

    expect = readFile('test/expected/pretty_amd.js');
    result = readFile('tmp/pretty_amd.js');
    test.equal(expect, result, 'should make the AMD wrapper output pretty');

    expect = readFile('test/expected/process_content.js');
    result = readFile('tmp/process_content.js');
    test.equal(expect, result, 'should convert file content');

    expect = readFile('test/expected/local_scope.js');
    result = readFile('tmp/local_scope.js');
    test.equal(expect, result, 'should add `with` block when templateSettings.variable is undefined');

    test.done();
  }
};
