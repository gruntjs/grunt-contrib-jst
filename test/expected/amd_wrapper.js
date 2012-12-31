define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["test/fixtures/template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __d = obj.obj || obj;
__p += '<head><title>' +
((__t = ( obj.title )) == null ? '' : __t) +
'</title></head>';
return __p
};

  return this["JST"];
});