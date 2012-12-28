this["JST"] = this["JST"] || {};

this["JST"]["test/fixtures/indented_template.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div><div><div><div>'+
( name )+
'</div></div></div></div>';
}
return __p;
};