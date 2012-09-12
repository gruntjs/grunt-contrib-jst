var grunt = require('grunt');

exports['jst'] = {
  main: function(test) {
    'use strict';

    var expect, result;

    test.expect(2);

    expect = 'this[\'JST\'] = this[\'JST\'] || {};\n\nthis[\'JST\'][\'test/fixtures/it\\\'s-a-bad-filename.html\'] = function(obj){\nvar __p=\'\';var print=function(){__p+=Array.prototype.join.call(arguments, \'\')};\nwith(obj||{}){\n__p+=\'never name your file like this.\';\n}\nreturn __p;\n};\n\nthis[\'JST\'][\'test/fixtures/template.html\'] = function(obj){\nvar __p=\'\';var print=function(){__p+=Array.prototype.join.call(arguments, \'\')};\nwith(obj||{}){\n__p+=\'<head><title>\'+\n( title )+\n\'</title></head>\';\n}\nreturn __p;\n};';
    result = grunt.file.read("tmp/jst.js");
    test.equal(expect, result, "should compile underscore templates into JST");

    expect = 'this[\'JST\'] = this[\'JST\'] || {};\n\nthis[\'JST\'][\'test/fixtures/it\\\'s-a-bad-filename.html\'] = function(obj){\nvar __p=\'\';var print=function(){__p+=Array.prototype.join.call(arguments, \'\')};\nwith(obj||{}){\n__p+=\'never name your file like this.\';\n}\nreturn __p;\n};';
    result = grunt.file.read("tmp/uglyfile.js");
    test.equal(expect, result, "should escape single quotes in filenames");

    test.done();
  }
};