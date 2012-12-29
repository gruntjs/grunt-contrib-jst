this["JST"] = this["JST"] || {};

this["JST"]["test/fixtures/indent_template.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div>\n<div>\n<div>\n'+
( name )+
'\n</div>\n</div>\n</div>';
}
return __p;
};