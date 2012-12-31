this["JST"] = this["JST"] || {};

this["JST"]["test/fixtures/indent_template.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __d = obj.obj || obj;
__p += '<div>\n<div>\n<div>\n' +
((__t = ( obj.name )) == null ? '' : __t) +
'\n</div>\n</div>\n</div>';
return __p
};