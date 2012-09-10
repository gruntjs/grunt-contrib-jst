var grunt = require('grunt');

exports['jst'] = {
  main: function(test) {
    'use strict';

    test.expect(1);

    var expect = "this['JST'] = this['JST'] || {};\n\nthis['JST']['test/fixtures/template.html'] = function(obj){\nvar __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\nwith(obj||{}){\n__p+='<head><title>'+\n( title )+\n'</title></head>';\n}\nreturn __p;\n};";
    var result = grunt.file.read("tmp/jst.js");
    test.equal(expect, result, "should compile underscore templates into JST");

    test.done();
  }
};