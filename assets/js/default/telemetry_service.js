/* ajv 6.5.0: Another JSON Schema Validator */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Ajv=e()}}(function(){return function o(i,n,l){function u(r,e){if(!n[r]){if(!i[r]){var t="function"==typeof require&&require;if(!e&&t)return t(r,!0);if(c)return c(r,!0);var a=new Error("Cannot find module '"+r+"'");throw a.code="MODULE_NOT_FOUND",a}var s=n[r]={exports:{}};i[r][0].call(s.exports,function(e){return u(i[r][1][e]||e)},s,s.exports,o,i,n,l)}return n[r].exports}for(var c="function"==typeof require&&require,e=0;e<l.length;e++)u(l[e]);return u}({1:[function(e,r,t){"use strict";var a=r.exports=function(){this._cache={}};a.prototype.put=function(e,r){this._cache[e]=r},a.prototype.get=function(e){return this._cache[e]},a.prototype.del=function(e){delete this._cache[e]},a.prototype.clear=function(){this._cache={}}},{}],2:[function(e,r,t){"use strict";var s=e("./error_classes").MissingRef;r.exports=function t(r,i,a){var n=this;if("function"!=typeof this._opts.loadSchema)throw new Error("options.loadSchema should be a function");"function"==typeof i&&(a=i,i=void 0);var e=l(r).then(function(){var e=n._addSchema(r,void 0,i);return e.validate||function(o){try{return n._compile(o)}catch(e){if(e instanceof s)return function(e){var r=e.missingSchema;if(s(r))throw new Error("Schema "+r+" is loaded but "+e.missingRef+" cannot be resolved");var t=n._loadingSchemas[r];t||(t=n._loadingSchemas[r]=n._opts.loadSchema(r)).then(a,a);return t.then(function(e){if(!s(r))return l(e).then(function(){s(r)||n.addSchema(e,r,void 0,i)})}).then(function(){return u(o)});function a(){delete n._loadingSchemas[r]}function s(e){return n._refs[e]||n._schemas[e]}}(e);throw e}}(e)});a&&e.then(function(e){a(null,e)},a);return e;function l(e){var r=e.$schema;return r&&!n.getSchema(r)?t.call(n,{$ref:r},!0):Promise.resolve()}function u(o){try{return n._compile(o)}catch(e){if(e instanceof s)return function(e){var r=e.missingSchema;if(s(r))throw new Error("Schema "+r+" is loaded but "+e.missingRef+" cannot be resolved");var t=n._loadingSchemas[r];t||(t=n._loadingSchemas[r]=n._opts.loadSchema(r)).then(a,a);return t.then(function(e){if(!s(r))return l(e).then(function(){s(r)||n.addSchema(e,r,void 0,i)})}).then(function(){return u(o)});function a(){delete n._loadingSchemas[r]}function s(e){return n._refs[e]||n._schemas[e]}}(e);throw e}}}},{"./error_classes":3}],3:[function(e,r,t){"use strict";var a=e("./resolve");function s(e,r,t){this.message=t||s.message(e,r),this.missingRef=a.url(e,r),this.missingSchema=a.normalizeId(a.fullPath(this.missingRef))}function o(e){return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e}r.exports={Validation:o(function(e){this.message="validation failed",this.errors=e,this.ajv=this.validation=!0}),MissingRef:o(s)},s.message=function(e,r){return"can't resolve reference "+r+" from id "+e}},{"./resolve":6}],4:[function(e,r,t){"use strict";var a=e("./util"),o=/^(\d\d\d\d)-(\d\d)-(\d\d)$/,i=[0,31,28,31,30,31,30,31,31,30,31,30,31],n=/^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i,s=/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i,l=/^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,u=/^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,c=/^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,h=/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,d=/^(?:\/(?:[^~/]|~0|~1)*)*$/,f=/^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,p=/^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;function m(e){return a.copy(m[e="full"==e?"full":"fast"])}function v(e){var r=e.match(o);if(!r)return!1;var t,a=+r[2],s=+r[3];return 1<=a&&a<=12&&1<=s&&s<=(2!=a||((t=+r[1])%4!=0||t%100==0&&t%400!=0)?i[a]:29)}function g(e,r){var t=e.match(n);if(!t)return!1;var a=t[1],s=t[2],o=t[3];return(a<=23&&s<=59&&o<=59||23==a&&59==s&&60==o)&&(!r||t[5])}(r.exports=m).fast={date:/^\d\d\d\d-[0-1]\d-[0-3]\d$/,time:/^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,"date-time":/^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,uri:/^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,"uri-reference":/^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,"uri-template":u,url:c,email:/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,hostname:s,ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:w,uuid:h,"json-pointer":d,"json-pointer-uri-fragment":f,"relative-json-pointer":p},m.full={date:v,time:g,"date-time":function(e){var r=e.split(y);return 2==r.length&&v(r[0])&&g(r[1],!0)},uri:function(e){return P.test(e)&&l.test(e)},"uri-reference":/^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,"uri-template":u,url:c,email:/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,hostname:function(e){return e.length<=255&&s.test(e)},ipv4:/^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,ipv6:/^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,regex:w,uuid:h,"json-pointer":d,"json-pointer-uri-fragment":f,"relative-json-pointer":p};var y=/t|\s/i;var P=/\/|:/;var E=/[^\\]\\Z/;function w(e){if(E.test(e))return!1;try{return new RegExp(e),!0}catch(e){return!1}}},{"./util":10}],5:[function(e,r,t){"use strict";var $=e("./resolve"),D=e("./util"),j=e("./error_classes"),l=e("fast-json-stable-stringify"),I=e("../dotjs/validate"),O=D.ucs2length,A=e("fast-deep-equal"),C=j.Validation;function k(e,r,t){for(var a=0;a<this._compilations.length;a++){var s=this._compilations[a];if(s.schema==e&&s.root==r&&s.baseId==t)return a}return-1}function L(e,r){return"var pattern"+e+" = new RegExp("+D.toQuotedString(r[e])+");"}function z(e){return"var default"+e+" = defaults["+e+"];"}function T(e,r){return void 0===r[e]?"":"var refVal"+e+" = refVal["+e+"];"}function N(e){return"var customRule"+e+" = customRules["+e+"];"}function q(e,r){if(!e.length)return"";for(var t="",a=0;a<e.length;a++)t+=r(a,e);return t}r.exports=function u(e,c,h,r){var d=this,f=this._opts,p=[void 0],m={},v=[],t={},g=[],a={},y=[];c=c||{schema:e,refVal:p,refs:m};var s=function(e,r,t){var a=k.call(this,e,r,t);return 0<=a?{index:a,compiling:!0}:{index:a=this._compilations.length,compiling:(this._compilations[a]={schema:e,root:r,baseId:t},!1)}}.call(this,e,c,r);var o=this._compilations[s.index];if(s.compiling)return o.callValidate=function e(){var r=o.validate;var t=r.apply(this,arguments);e.errors=r.errors;return t};var P=this._formats;var E=this.RULES;try{var i=w(e,c,h,r);o.validate=i;var n=o.callValidate;return n&&(n.schema=i.schema,n.errors=null,n.refs=i.refs,n.refVal=i.refVal,n.root=i.root,n.$async=i.$async,f.sourceCode&&(n.source=i.source)),i}finally{(function(e,r,t){var a=k.call(this,e,r,t);0<=a&&this._compilations.splice(a,1)}).call(this,e,c,r)}function w(e,r,t,a){var s=!r||r&&r.schema==e;if(r.schema!=c.schema)return u.call(d,e,r,t,a);var o,i=!0===e.$async,n=I({isTop:!0,schema:e,isRoot:s,baseId:a,root:r,schemaPath:"",errSchemaPath:"#",errorPath:'""',MissingRefError:j.MissingRef,RULES:E,validate:I,util:D,resolve:$,resolveRef:S,usePattern:F,useDefault:x,useCustomRule:R,opts:f,formats:P,logger:d.logger,self:d});n=q(p,T)+q(v,L)+q(g,z)+q(y,N)+n,f.processCode&&(n=f.processCode(n));try{var l=new Function("self","RULES","formats","root","refVal","defaults","customRules","equal","ucs2length","ValidationError",n);o=l(d,E,P,c,p,g,y,A,O,C),p[0]=o}catch(e){throw d.logger.error("Error compiling schema, function code:",n),e}return o.schema=e,o.errors=null,o.refs=m,o.refVal=p,o.root=s?o:r,i&&(o.$async=!0),!0===f.sourceCode&&(o.source={code:n,patterns:v,defaults:g}),o}function S(e,r,t){r=$.url(e,r);var a,s,o=m[r];if(void 0!==o)return _(a=p[o],s="refVal["+o+"]");if(!t&&c.refs){var i=c.refs[r];if(void 0!==i)return s=b(r,a=c.refVal[i]),_(a,s)}s=b(r);var n=$.call(d,w,c,r);if(void 0===n){var l=h&&h[r];l&&(n=$.inlineRef(l,f.inlineRefs)?l:u.call(d,l,c,h,e))}if(void 0!==n)return p[m[r]]=n,_(n,s);delete m[r]}function b(e,r){var t=p.length;return p[t]=r,"refVal"+(m[e]=t)}function _(e,r){return"object"==typeof e||"boolean"==typeof e?{code:r,schema:e,inline:!0}:{code:r,$async:e&&!!e.$async}}function F(e){var r=t[e];return void 0===r&&(r=t[e]=v.length,v[r]=e),"pattern"+r}function x(e){switch(typeof e){case"boolean":case"number":return""+e;case"string":return D.toQuotedString(e);case"object":if(null===e)return"null";var r=l(e),t=a[r];return void 0===t&&(t=a[r]=g.length,g[t]=e),"default"+t}}function R(e,r,t,a){var s=e.definition.validateSchema;if(s&&!1!==d._opts.validateSchema){var o=s(r);if(!o){var i="keyword schema is invalid: "+d.errorsText(s.errors);if("log"!=d._opts.validateSchema)throw new Error(i);d.logger.error(i)}}var n,l=e.definition.compile,u=e.definition.inline,c=e.definition.macro;if(l)n=l.call(d,r,t,a);else if(c)n=c.call(d,r,t,a),!1!==f.validateSchema&&d.validateSchema(n,!0);else if(u)n=u.call(d,a,e.keyword,r,t);else if(!(n=e.definition.validate))return;if(void 0===n)throw new Error('custom keyword "'+e.keyword+'"failed to compile');var h=y.length;return{code:"customRule"+h,validate:y[h]=n}}}},{"../dotjs/validate":37,"./error_classes":3,"./resolve":6,"./util":10,"fast-deep-equal":41,"fast-json-stable-stringify":42}],6:[function(e,r,t){"use strict";var m=e("uri-js"),v=e("fast-deep-equal"),g=e("./util"),l=e("./schema_obj"),a=e("json-schema-traverse");function u(e,r,t){var a=this._refs[t];if("string"==typeof a){if(!this._refs[a])return u.call(this,e,r,a);a=this._refs[a]}if((a=a||this._schemas[t])instanceof l)return d(a.schema,this._opts.inlineRefs)?a.schema:a.validate||this._compile(a);var s,o,i,n=c.call(this,r,t);return n&&(s=n.schema,r=n.root,i=n.baseId),s instanceof l?o=s.validate||e.call(this,s.schema,r,void 0,i):void 0!==s&&(o=d(s,this._opts.inlineRefs)?s:e.call(this,s,r,void 0,i)),o}function c(e,r){var t=m.parse(r),a=f(t),s=y(this._getId(e.schema));if(a!==s){var o=P(a),i=this._refs[o];if("string"==typeof i)return function(e,r,t){var a=c.call(this,e,r);if(a){var s=a.schema,o=a.baseId;e=a.root;var i=this._getId(s);return i&&(o=p(o,i)),n.call(this,t,o,s,e)}}.call(this,e,i,t);if(i instanceof l)i.validate||this._compile(i),e=i;else{if(!((i=this._schemas[o])instanceof l))return;if(i.validate||this._compile(i),o==P(r))return{schema:i,root:e,baseId:s};e=i}if(!e.schema)return;s=y(this._getId(e.schema))}return n.call(this,t,s,e.schema,e)}(r.exports=u).normalizeId=P,u.fullPath=y,u.url=p,u.ids=function(e){var r=P(this._getId(e)),h={"":r},d={"":y(r,!1)},f={},p=this;return a(e,{allKeys:!0},function(e,r,t,a,s,o,i){if(""!==r){var n=p._getId(e),l=h[a],u=d[a]+"/"+s;if(void 0!==i&&(u+="/"+("number"==typeof i?i:g.escapeFragment(i))),"string"==typeof n){n=l=P(l?m.resolve(l,n):n);var c=p._refs[n];if("string"==typeof c&&(c=p._refs[c]),c&&c.schema){if(!v(e,c.schema))throw new Error('id "'+n+'" resolves to more than one schema')}else if(n!=P(u))if("#"==n[0]){if(f[n]&&!v(e,f[n]))throw new Error('id "'+n+'" resolves to more than one schema');f[n]=e}else p._refs[n]=u}h[r]=l,d[r]=u}}),f},u.inlineRef=d,u.schema=c;var h=g.toHash(["properties","patternProperties","enum","dependencies","definitions"]);function n(e,r,t,a){if(e.fragment=e.fragment||"","/"==e.fragment.slice(0,1)){for(var s=e.fragment.split("/"),o=1;o<s.length;o++){var i=s[o];if(i){if(void 0===(t=t[i=g.unescapeFragment(i)]))break;var n;if(!h[i]&&((n=this._getId(t))&&(r=p(r,n)),t.$ref)){var l=p(r,t.$ref),u=c.call(this,a,l);u&&(t=u.schema,a=u.root,r=u.baseId)}}}return void 0!==t&&t!==a.schema?{schema:t,root:a,baseId:r}:void 0}}var i=g.toHash(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum"]);function d(e,r){return!1!==r&&(void 0===r||!0===r?function e(r){var t;if(Array.isArray(r)){for(var a=0;a<r.length;a++)if("object"==typeof(t=r[a])&&!e(t))return!1}else for(var s in r){if("$ref"==s)return!1;if("object"==typeof(t=r[s])&&!e(t))return!1}return!0}(e):r?function e(r){var t,a=0;if(Array.isArray(r)){for(var s=0;s<r.length;s++)if("object"==typeof(t=r[s])&&(a+=e(t)),a==1/0)return 1/0}else for(var o in r){if("$ref"==o)return 1/0;if(i[o])a++;else if("object"==typeof(t=r[o])&&(a+=e(t)+1),a==1/0)return 1/0}return a}(e)<=r:void 0)}function y(e,r){return!1!==r&&(e=P(e)),f(m.parse(e))}function f(e){return m.serialize(e).split("#")[0]+"#"}var s=/#\/?$/;function P(e){return e?e.replace(s,""):""}function p(e,r){return r=P(r),m.resolve(e,r)}},{"./schema_obj":8,"./util":10,"fast-deep-equal":41,"json-schema-traverse":43,"uri-js":44}],7:[function(e,r,t){"use strict";var o=e("../dotjs"),i=e("./util").toHash;r.exports=function(){var a=[{type:"number",rules:[{maximum:["exclusiveMaximum"]},{minimum:["exclusiveMinimum"]},"multipleOf","format"]},{type:"string",rules:["maxLength","minLength","pattern","format"]},{type:"array",rules:["maxItems","minItems","items","contains","uniqueItems"]},{type:"object",rules:["maxProperties","minProperties","required","dependencies","propertyNames",{properties:["additionalProperties","patternProperties"]}]},{rules:["$ref","const","enum","not","anyOf","oneOf","allOf","if"]}],s=["type","$comment"];return a.all=i(s),a.types=i(["number","integer","string","array","object","boolean","null"]),a.forEach(function(e){e.rules=e.rules.map(function(e){var r;if("object"==typeof e){var t=Object.keys(e)[0];r=e[t],e=t,r.forEach(function(e){s.push(e),a.all[e]=!0})}return s.push(e),a.all[e]={keyword:e,code:o[e],implements:r}}),a.all.$comment={keyword:"$comment",code:o.$comment},e.type&&(a.types[e.type]=e)}),a.keywords=i(s.concat(["$schema","$id","id","$data","title","description","default","definitions","examples","readOnly","writeOnly","contentMediaType","contentEncoding","additionalItems","then","else"])),a.custom={},a}},{"../dotjs":26,"./util":10}],8:[function(e,r,t){"use strict";var a=e("./util");r.exports=function(e){a.copy(e,this)}},{"./util":10}],9:[function(e,r,t){"use strict";r.exports=function(e){for(var r,t=0,a=e.length,s=0;s<a;)t++,55296<=(r=e.charCodeAt(s++))&&r<=56319&&s<a&&56320==(64512&(r=e.charCodeAt(s)))&&s++;return t}},{}],10:[function(e,r,t){"use strict";function o(e,r,t){var a=t?" !== ":" === ",s=t?" || ":" && ",o=t?"!":"",i=t?"":"!";switch(e){case"null":return r+a+"null";case"array":return o+"Array.isArray("+r+")";case"object":return"("+o+r+s+"typeof "+r+a+'"object"'+s+i+"Array.isArray("+r+"))";case"integer":return"(typeof "+r+a+'"number"'+s+i+"("+r+" % 1)"+s+r+a+r+")";default:return"typeof "+r+a+'"'+e+'"'}}r.exports={copy:function(e,r){for(var t in r=r||{},e)r[t]=e[t];return r},checkDataType:o,checkDataTypes:function(e,r){switch(e.length){case 1:return o(e[0],r,!0);default:var t="",a=n(e);for(var s in a.array&&a.object&&(t=a.null?"(":"(!"+r+" || ",t+="typeof "+r+' !== "object")',delete a.null,delete a.array,delete a.object),a.number&&delete a.integer,a)t+=(t?" && ":"")+o(s,r,!0);return t}},coerceToTypes:function(e,r){if(Array.isArray(r)){for(var t=[],a=0;a<r.length;a++){var s=r[a];i[s]?t[t.length]=s:"array"===e&&"array"===s&&(t[t.length]=s)}if(t.length)return t}else{if(i[r])return[r];if("array"===e&&"array"===r)return["array"]}},toHash:n,getProperty:h,escapeQuotes:l,equal:e("fast-deep-equal"),ucs2length:e("./ucs2length"),varOccurences:function(e,r){var t=e.match(new RegExp(r+="[^0-9]","g"));return t?t.length:0},varReplace:function(e,r,t){return r+="([^0-9])",t=t.replace(/\$/g,"$$$$"),e.replace(new RegExp(r,"g"),t+"$1")},cleanUpCode:function(e){return e.replace(u,"").replace(c,"").replace(d,"if (!($1))")},finalCleanUpCode:function(e,r){var t=e.match(f);t&&2==t.length&&(e=r?e.replace(m,"").replace(y,P):e.replace(p,"").replace(v,g));return(t=e.match(E))&&3===t.length?e.replace(w,""):e},schemaHasRules:function(e,r){if("boolean"==typeof e)return!e;for(var t in e)if(r[t])return!0},schemaHasRulesExcept:function(e,r,t){if("boolean"==typeof e)return!e&&"not"!=t;for(var a in e)if(a!=t&&r[a])return!0},toQuotedString:S,getPathExpr:function(e,r,t,a){return F(e,t?"'/' + "+r+(a?"":".replace(/~/g, '~0').replace(/\\//g, '~1')"):a?"'[' + "+r+" + ']'":"'[\\'' + "+r+" + '\\']'")},getPath:function(e,r,t){var a=S(t?"/"+x(r):h(r));return F(e,a)},getData:function(e,r,t){var a,s,o,i;if(""===e)return"rootData";if("/"==e[0]){if(!b.test(e))throw new Error("Invalid JSON-pointer: "+e);s=e,o="rootData"}else{if(!(i=e.match(_)))throw new Error("Invalid JSON-pointer: "+e);if(a=+i[1],"#"==(s=i[2])){if(r<=a)throw new Error("Cannot access property/index "+a+" levels up, current level is "+r);return t[r-a]}if(r<a)throw new Error("Cannot access data "+a+" levels up, current level is "+r);if(o="data"+(r-a||""),!s)return o}for(var n=o,l=s.split("/"),u=0;u<l.length;u++){var c=l[u];c&&(o+=h(R(c)),n+=" && "+o)}return n},unescapeFragment:function(e){return R(decodeURIComponent(e))},unescapeJsonPointer:R,escapeFragment:function(e){return encodeURIComponent(x(e))},escapeJsonPointer:x};var i=n(["string","number","integer","boolean","null"]);function n(e){for(var r={},t=0;t<e.length;t++)r[e[t]]=!0;return r}var a=/^[a-z$_][a-z$_0-9]*$/i,s=/'|\\/g;function h(e){return"number"==typeof e?"["+e+"]":a.test(e)?"."+e:"['"+l(e)+"']"}function l(e){return e.replace(s,"\\$&").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\f/g,"\\f").replace(/\t/g,"\\t")}var u=/else\s*{\s*}/g,c=/if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g,d=/if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;var f=/[^v.]errors/g,p=/var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g,m=/var errors = 0;|var vErrors = null;/g,v="return errors === 0;",g="validate.errors = null; return true;",y=/if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/,P="return data;",E=/[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g,w=/if \(rootData === undefined\) rootData = data;/;function S(e){return"'"+l(e)+"'"}var b=/^\/(?:[^~]|~0|~1)*$/,_=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function F(e,r){return'""'==e?r:(e+" + "+r).replace(/' \+ '/g,"")}function x(e){return e.replace(/~/g,"~0").replace(/\//g,"~1")}function R(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}},{"./ucs2length":9,"fast-deep-equal":41}],11:[function(e,r,t){"use strict";var l=["multipleOf","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","additionalItems","maxItems","minItems","uniqueItems","maxProperties","minProperties","required","additionalProperties","enum","format","const"];r.exports=function(e,r){for(var t=0;t<r.length;t++){e=JSON.parse(JSON.stringify(e));var a,s=r[t].split("/"),o=e;for(a=1;a<s.length;a++)o=o[s[a]];for(a=0;a<l.length;a++){var i=l[a],n=o[i];n&&(o[i]={anyOf:[n,{$ref:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"}]})}}return e}},{}],12:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n;var f="maximum"==r,p=f?"exclusiveMaximum":"exclusiveMinimum",m=e.schema[p],v=e.opts.$data&&m&&m.$data,g=f?"<":">",y=f?">":"<",P=void 0;if(v){var E=e.util.getData(m.$data,i,e.dataPathArr),w="exclusive"+o,S="exclType"+o,b="exclIsNumber"+o,_="' + "+(R="op"+o)+" + '";s+=" var schemaExcl"+o+" = "+E+"; ";var F;P=p;(F=F||[]).push(s+=" var "+w+"; var "+S+" = typeof "+(E="schemaExcl"+o)+"; if ("+S+" != 'boolean' && "+S+" != 'undefined' && "+S+" != 'number') { "),s="",!1!==e.createErrors?(s+=" { keyword: '"+(P||"_exclusiveLimit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: {} ",!1!==e.opts.messages&&(s+=" , message: '"+p+" should be boolean' "),e.opts.verbose&&(s+=" , schema: validate.schema"+l+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var x=s;s=F.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+x+"]); ":" validate.errors = ["+x+"]; return false; ":" var err = "+x+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } else if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" "+S+" == 'number' ? ( ("+w+" = "+a+" === undefined || "+E+" "+g+"= "+a+") ? "+h+" "+y+"= "+E+" : "+h+" "+y+" "+a+" ) : ( ("+w+" = "+E+" === true) ? "+h+" "+y+"= "+a+" : "+h+" "+y+" "+a+" ) || "+h+" !== "+h+") { var op"+o+" = "+w+" ? '"+g+"' : '"+g+"='; ",void 0===n&&(u=e.errSchemaPath+"/"+(P=p),a=E,d=v)}else{_=g;if((b="number"==typeof m)&&d){var R="'"+_+"'";s+=" if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" ( "+a+" === undefined || "+m+" "+g+"= "+a+" ? "+h+" "+y+"= "+m+" : "+h+" "+y+" "+a+" ) || "+h+" !== "+h+") { "}else{b&&void 0===n?(w=!0,u=e.errSchemaPath+"/"+(P=p),a=m,y+="="):(b&&(a=Math[f?"min":"max"](m,n)),m===(!b||a)?(w=!0,u=e.errSchemaPath+"/"+(P=p),y+="="):(w=!1,_+="="));R="'"+_+"'";s+=" if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=" "+h+" "+y+" "+a+" || "+h+" !== "+h+") { "}}P=P||r,(F=F||[]).push(s),s="",!1!==e.createErrors?(s+=" { keyword: '"+(P||"_limit")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { comparison: "+R+", limit: "+a+", exclusive: "+w+" } ",!1!==e.opts.messages&&(s+=" , message: 'should be "+_+" ",s+=d?"' + "+a:a+"'"),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";x=s;return s=F.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+x+"]); ":" validate.errors = ["+x+"]; return false; ":" var err = "+x+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } ",c&&(s+=" else { "),s}},{}],13:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n,s+="if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || ");var f=r,p=p||[];p.push(s+=" "+h+".length "+("maxItems"==r?">":"<")+" "+a+") { "),s="",!1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitItems")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have ",s+="maxItems"==r?"more":"less",s+=" than ",s+=d?"' + "+a+" + '":""+n,s+=" items' "),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",c&&(s+=" else { "),s}},{}],14:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n,s+="if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || "),s+=!1===e.opts.unicode?" "+h+".length ":" ucs2length("+h+") ";var f=r,p=p||[];p.push(s+=" "+("maxLength"==r?">":"<")+" "+a+") { "),s="",!1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitLength")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT be ",s+="maxLength"==r?"longer":"shorter",s+=" than ",s+=d?"' + "+a+" + '":""+n,s+=" characters' "),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",c&&(s+=" else { "),s}},{}],15:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n,s+="if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'number') || ");var f=r,p=p||[];p.push(s+=" Object.keys("+h+").length "+("maxProperties"==r?">":"<")+" "+a+") { "),s="",!1!==e.createErrors?(s+=" { keyword: '"+(f||"_limitProperties")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { limit: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have ",s+="maxProperties"==r?"more":"less",s+=" than ",s+=d?"' + "+a+" + '":""+n,s+=" properties' "),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",c&&(s+=" else { "),s}},{}],16:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.schema[r],o=e.schemaPath+e.util.getProperty(r),i=e.errSchemaPath+"/"+r,n=!e.opts.allErrors,l=e.util.copy(e),u="";l.level++;var c="valid"+l.level,h=l.baseId,d=!0,f=s;if(f)for(var p,m=-1,v=f.length-1;m<v;)p=f[m+=1],e.util.schemaHasRules(p,e.RULES.all)&&(d=!1,l.schema=p,l.schemaPath=o+"["+m+"]",l.errSchemaPath=i+"/"+m,a+="  "+e.validate(l)+" ",l.baseId=h,n&&(a+=" if ("+c+") { ",u+="}"));return n&&(a+=d?" if (true) { ":" "+u.slice(0,-1)+" "),a=e.util.cleanUpCode(a)}},{}],17:[function(e,r,t){"use strict";r.exports=function(r,e,t){var a=" ",s=r.level,o=r.dataLevel,i=r.schema[e],n=r.schemaPath+r.util.getProperty(e),l=r.errSchemaPath+"/"+e,u=!r.opts.allErrors,c="data"+(o||""),h="valid"+s,d="errs__"+s,f=r.util.copy(r),p="";f.level++;var m="valid"+f.level;if(i.every(function(e){return r.util.schemaHasRules(e,r.RULES.all)})){var v=f.baseId;a+=" var "+d+" = errors; var "+h+" = false;  ";var g=r.compositeRule;r.compositeRule=f.compositeRule=!0;var y=i;if(y)for(var P,E=-1,w=y.length-1;E<w;)P=y[E+=1],f.schema=P,f.schemaPath=n+"["+E+"]",f.errSchemaPath=l+"/"+E,a+="  "+r.validate(f)+" ",f.baseId=v,a+=" "+h+" = "+h+" || "+m+"; if (!"+h+") { ",p+="}";r.compositeRule=f.compositeRule=g,a+=" "+p+" if (!"+h+") {   var err =   ",!1!==r.createErrors?(a+=" { keyword: 'anyOf' , dataPath: (dataPath || '') + "+r.errorPath+" , schemaPath: "+r.util.toQuotedString(l)+" , params: {} ",!1!==r.opts.messages&&(a+=" , message: 'should match some schema in anyOf' "),r.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+r.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!r.compositeRule&&u&&(a+=r.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "),a+=" } else {  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; } ",r.opts.allErrors&&(a+=" } "),a=r.util.cleanUpCode(a)}else u&&(a+=" if (true) { ");return a}},{}],18:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.errSchemaPath+"/"+r,o=e.util.toQuotedString(e.schema[r]);return!0===e.opts.$comment?a+=" console.log("+o+");":"function"==typeof e.opts.$comment&&(a+=" self._opts.$comment("+o+", "+e.util.toQuotedString(s)+", validate.root.schema);"),a}},{}],19:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d=e.opts.$data&&i&&i.$data;d&&(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; "),d||(a+=" var schema"+s+" = validate.schema"+n+";");var f=f||[];f.push(a+="var "+h+" = equal("+c+", schema"+s+"); if (!"+h+") {   "),a="",!1!==e.createErrors?(a+=" { keyword: 'const' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { allowedValue: schema"+s+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be equal to constant' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var p=a;return a=f.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }",u&&(a+=" else { "),a}},{}],20:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d="errs__"+s,f=e.util.copy(e);f.level++;var p="valid"+f.level,m="i"+s,v=f.dataLevel=e.dataLevel+1,g="data"+v,y=e.baseId,P=e.util.schemaHasRules(i,e.RULES.all);if(a+="var "+d+" = errors;var "+h+";",P){var E=e.compositeRule;e.compositeRule=f.compositeRule=!0,f.schema=i,f.schemaPath=n,f.errSchemaPath=l,a+=" var "+p+" = false; for (var "+m+" = 0; "+m+" < "+c+".length; "+m+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers,!0);var w=c+"["+m+"]";f.dataPathArr[v]=m;var S=e.validate(f);f.baseId=y,e.util.varOccurences(S,g)<2?a+=" "+e.util.varReplace(S,g,w)+" ":a+=" var "+g+" = "+w+"; "+S+" ",a+=" if ("+p+") break; }  ",e.compositeRule=f.compositeRule=E,a+="  if (!"+p+") {"}else a+=" if ("+c+".length == 0) {";var b=b||[];b.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'contains' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should contain a valid item' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var _=a;return a=b.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { ",P&&(a+="  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; } "),e.opts.allErrors&&(a+=" } "),a=e.util.cleanUpCode(a)}},{}],21:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s,o=" ",i=e.level,n=e.dataLevel,l=e.schema[r],u=e.schemaPath+e.util.getProperty(r),c=e.errSchemaPath+"/"+r,h=!e.opts.allErrors,d="data"+(n||""),f="valid"+i,p="errs__"+i,m=e.opts.$data&&l&&l.$data;m?(o+=" var schema"+i+" = "+e.util.getData(l.$data,n,e.dataPathArr)+"; ",s="schema"+i):s=l;var v,g,y,P,E,w=this,S="definition"+i,b=w.definition,_="";if(m&&b.$data){var F=b.validateSchema;o+=" var "+S+" = RULES.custom['"+r+"'].definition; var "+(E="keywordValidate"+i)+" = "+S+".validate;"}else{if(!(P=e.useCustomRule(w,l,e.schema,e)))return;s="validate.schema"+u,E=P.code,v=b.compile,g=b.inline,y=b.macro}var x=E+".errors",R="i"+i,$="ruleErr"+i,D=b.async;if(D&&!e.async)throw new Error("async keyword in sync schema");if(g||y||(o+=x+" = null;"),o+="var "+p+" = errors;var "+f+";",m&&b.$data&&(_+="}",o+=" if ("+s+" === undefined) { "+f+" = true; } else { ",F&&(_+="}",o+=" "+f+" = "+S+".validateSchema("+s+"); if ("+f+") { ")),g)o+=b.statements?" "+P.validate+" ":" "+f+" = "+P.validate+"; ";else if(y){var j=e.util.copy(e);_="";j.level++;var I="valid"+j.level;j.schema=P.validate,j.schemaPath="";var O=e.compositeRule;e.compositeRule=j.compositeRule=!0;var A=e.validate(j).replace(/validate\.schema/g,E);e.compositeRule=j.compositeRule=O,o+=" "+A}else{(z=z||[]).push(o),o="",o+="  "+E+".call( ",o+=e.opts.passContext?"this":"self",o+=v||!1===b.schema?" , "+d+" ":" , "+s+" , "+d+" , validate.schema"+e.schemaPath+" ",o+=" , (dataPath || '')",'""'!=e.errorPath&&(o+=" + "+e.errorPath);var C=n?"data"+(n-1||""):"parentData",k=n?e.dataPathArr[n]:"parentDataProperty",L=o+=" , "+C+" , "+k+" , rootData )  ";o=z.pop(),!1===b.errors?(o+=" "+f+" = ",D&&(o+="await "),o+=L+"; "):o+=D?" var "+(x="customErrors"+i)+" = null; try { "+f+" = await "+L+"; } catch (e) { "+f+" = false; if (e instanceof ValidationError) "+x+" = e.errors; else throw e; } ":" "+x+" = null; "+f+" = "+L+"; "}if(b.modifying&&(o+=" if ("+C+") "+d+" = "+C+"["+k+"];"),o+=""+_,b.valid)h&&(o+=" if (true) { ");else{var z;o+=" if ( ",void 0===b.valid?(o+=" !",o+=y?""+I:""+f):o+=" "+!b.valid+" ",a=w.keyword,(z=z||[]).push(o+=") { "),(z=z||[]).push(o=""),o="",!1!==e.createErrors?(o+=" { keyword: '"+(a||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { keyword: '"+w.keyword+"' } ",!1!==e.opts.messages&&(o+=" , message: 'should pass \""+w.keyword+"\" keyword validation' "),e.opts.verbose&&(o+=" , schema: validate.schema"+u+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ";var T=o;o=z.pop();var N=o+=!e.compositeRule&&h?e.async?" throw new ValidationError(["+T+"]); ":" validate.errors = ["+T+"]; return false; ":" var err = "+T+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ";o=z.pop(),g?b.errors?"full"!=b.errors&&(o+="  for (var "+R+"="+p+"; "+R+"<errors; "+R+"++) { var "+$+" = vErrors["+R+"]; if ("+$+".dataPath === undefined) "+$+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+$+".schemaPath === undefined) { "+$+'.schemaPath = "'+c+'"; } ',e.opts.verbose&&(o+=" "+$+".schema = "+s+"; "+$+".data = "+d+"; "),o+=" } "):!1===b.errors?o+=" "+N+" ":(o+=" if ("+p+" == errors) { "+N+" } else {  for (var "+R+"="+p+"; "+R+"<errors; "+R+"++) { var "+$+" = vErrors["+R+"]; if ("+$+".dataPath === undefined) "+$+".dataPath = (dataPath || '') + "+e.errorPath+"; if ("+$+".schemaPath === undefined) { "+$+'.schemaPath = "'+c+'"; } ',e.opts.verbose&&(o+=" "+$+".schema = "+s+"; "+$+".data = "+d+"; "),o+=" } } "):y?(o+="   var err =   ",!1!==e.createErrors?(o+=" { keyword: '"+(a||"custom")+"' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(c)+" , params: { keyword: '"+w.keyword+"' } ",!1!==e.opts.messages&&(o+=" , message: 'should pass \""+w.keyword+"\" keyword validation' "),e.opts.verbose&&(o+=" , schema: validate.schema"+u+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+d+" "),o+=" } "):o+=" {} ",o+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&h&&(o+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; ")):!1===b.errors?o+=" "+N+" ":(o+=" if (Array.isArray("+x+")) { if (vErrors === null) vErrors = "+x+"; else vErrors = vErrors.concat("+x+"); errors = vErrors.length;  for (var "+R+"="+p+"; "+R+"<errors; "+R+"++) { var "+$+" = vErrors["+R+"]; if ("+$+".dataPath === undefined) "+$+".dataPath = (dataPath || '') + "+e.errorPath+";  "+$+'.schemaPath = "'+c+'";  ',e.opts.verbose&&(o+=" "+$+".schema = "+s+"; "+$+".data = "+d+"; "),o+=" } } else { "+N+" } "),o+=" } ",h&&(o+=" else { ")}return o}},{}],22:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="errs__"+s,d=e.util.copy(e),f="";d.level++;var p="valid"+d.level,m={},v={},g=e.opts.ownProperties;for(w in i){var y=i[w],P=Array.isArray(y)?v:m;P[w]=y}a+="var "+h+" = errors;";var E=e.errorPath;for(var w in a+="var missing"+s+";",v)if((P=v[w]).length){if(a+=" if ( "+c+e.util.getProperty(w)+" !== undefined ",g&&(a+=" && Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(w)+"') "),u){a+=" && ( ";var S=P;if(S)for(var b=-1,_=S.length-1;b<_;){j=S[b+=1],b&&(a+=" || "),a+=" ( ( "+(C=c+(A=e.util.getProperty(j)))+" === undefined ",g&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(j)+"') "),a+=") && (missing"+s+" = "+e.util.toQuotedString(e.opts.jsonPointers?j:A)+") ) "}a+=")) {  ";var F="missing"+s,x="' + "+F+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(E,F,!0):E+" + "+F);var R=R||[];R.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+x+"', depsCount: "+P.length+", deps: '"+e.util.escapeQuotes(1==P.length?P[0]:P.join(", "))+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should have ",a+=1==P.length?"property "+e.util.escapeQuotes(P[0]):"properties "+e.util.escapeQuotes(P.join(", ")),a+=" when property "+e.util.escapeQuotes(w)+" is present' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var $=a;a=R.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+$+"]); ":" validate.errors = ["+$+"]; return false; ":" var err = "+$+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}else{a+=" ) { ";var D=P;if(D)for(var j,I=-1,O=D.length-1;I<O;){j=D[I+=1];var A=e.util.getProperty(j),C=(x=e.util.escapeQuotes(j),c+A);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(E,j,e.opts.jsonPointers)),a+=" if ( "+C+" === undefined ",g&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(j)+"') "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'dependencies' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { property: '"+e.util.escapeQuotes(w)+"', missingProperty: '"+x+"', depsCount: "+P.length+", deps: '"+e.util.escapeQuotes(1==P.length?P[0]:P.join(", "))+"' } ",!1!==e.opts.messages&&(a+=" , message: 'should have ",a+=1==P.length?"property "+e.util.escapeQuotes(P[0]):"properties "+e.util.escapeQuotes(P.join(", ")),a+=" when property "+e.util.escapeQuotes(w)+" is present' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "}}a+=" }   ",u&&(f+="}",a+=" else { ")}e.errorPath=E;var k=d.baseId;for(var w in m){e.util.schemaHasRules(y=m[w],e.RULES.all)&&(a+=" "+p+" = true; if ( "+c+e.util.getProperty(w)+" !== undefined ",g&&(a+=" && Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(w)+"') "),a+=") { ",d.schema=y,d.schemaPath=n+e.util.getProperty(w),d.errSchemaPath=l+"/"+e.util.escapeFragment(w),a+="  "+e.validate(d)+" ",d.baseId=k,a+=" }  ",u&&(a+=" if ("+p+") { ",f+="}"))}return u&&(a+="   "+f+" if ("+h+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],23:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d=e.opts.$data&&i&&i.$data;d&&(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ");var f="i"+s,p="schema"+s;d||(a+=" var "+p+" = validate.schema"+n+";"),a+="var "+h+";",d&&(a+=" if (schema"+s+" === undefined) "+h+" = true; else if (!Array.isArray(schema"+s+")) "+h+" = false; else {"),a+=h+" = false;for (var "+f+"=0; "+f+"<"+p+".length; "+f+"++) if (equal("+c+", "+p+"["+f+"])) { "+h+" = true; break; }",d&&(a+="  }  ");var m=m||[];m.push(a+=" if (!"+h+") {   "),a="",!1!==e.createErrors?(a+=" { keyword: 'enum' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { allowedValues: schema"+s+" } ",!1!==e.opts.messages&&(a+=" , message: 'should be equal to one of the allowed values' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var v=a;return a=m.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+v+"]); ":" validate.errors = ["+v+"]; return false; ":" var err = "+v+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" }",u&&(a+=" else { "),a}},{}],24:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||"");if(!1===e.opts.format)return u&&(a+=" if (true) { "),a;var h,d=e.opts.$data&&i&&i.$data;d?(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ",h="schema"+s):h=i;var f=e.opts.unknownFormats,p=Array.isArray(f);if(d){a+=" var "+(m="format"+s)+" = formats["+h+"]; var "+(v="isObject"+s)+" = typeof "+m+" == 'object' && !("+m+" instanceof RegExp) && "+m+".validate; var "+(g="formatType"+s)+" = "+v+" && "+m+".type || 'string'; if ("+v+") { ",e.async&&(a+=" var async"+s+" = "+m+".async; "),a+=" "+m+" = "+m+".validate; } if (  ",d&&(a+=" ("+h+" !== undefined && typeof "+h+" != 'string') || "),a+=" (","ignore"!=f&&(a+=" ("+h+" && !"+m+" ",p&&(a+=" && self._opts.unknownFormats.indexOf("+h+") == -1 "),a+=") || "),a+=" ("+m+" && "+g+" == '"+t+"' && !(typeof "+m+" == 'function' ? ",a+=e.async?" (async"+s+" ? await "+m+"("+c+") : "+m+"("+c+")) ":" "+m+"("+c+") ",a+=" : "+m+".test("+c+"))))) {"}else{var m;if(!(m=e.formats[i])){if("ignore"==f)return e.logger.warn('unknown format "'+i+'" ignored in schema at path "'+e.errSchemaPath+'"'),u&&(a+=" if (true) { "),a;if(p&&0<=f.indexOf(i))return u&&(a+=" if (true) { "),a;throw new Error('unknown format "'+i+'" is used in schema at path "'+e.errSchemaPath+'"')}var v,g=(v="object"==typeof m&&!(m instanceof RegExp)&&m.validate)&&m.type||"string";if(v){var y=!0===m.async;m=m.validate}if(g!=t)return u&&(a+=" if (true) { "),a;if(y){if(!e.async)throw new Error("async format in sync schema");a+=" if (!(await "+(P="formats"+e.util.getProperty(i)+".validate")+"("+c+"))) { "}else{a+=" if (! ";var P="formats"+e.util.getProperty(i);v&&(P+=".validate"),a+="function"==typeof m?" "+P+"("+c+") ":" "+P+".test("+c+") ",a+=") { "}}var E=E||[];E.push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'format' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { format:  ",a+=d?""+h:""+e.util.toQuotedString(i),a+="  } ",!1!==e.opts.messages&&(a+=" , message: 'should match format \"",a+=d?"' + "+h+" + '":""+e.util.escapeQuotes(i),a+="\"' "),e.opts.verbose&&(a+=" , schema:  ",a+=d?"validate.schema"+n:""+e.util.toQuotedString(i),a+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var w=a;return a=E.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+w+"]); ":" validate.errors = ["+w+"]; return false; ":" var err = "+w+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",u&&(a+=" else { "),a}},{}],25:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d="errs__"+s,f=e.util.copy(e);f.level++;var p="valid"+f.level,m=e.schema.then,v=e.schema.else,g=void 0!==m&&e.util.schemaHasRules(m,e.RULES.all),y=void 0!==v&&e.util.schemaHasRules(v,e.RULES.all),P=f.baseId;if(g||y){var E;f.createErrors=!1,f.schema=i,f.schemaPath=n,f.errSchemaPath=l,a+=" var "+d+" = errors; var "+h+" = true;  ";var w=e.compositeRule;e.compositeRule=f.compositeRule=!0,a+="  "+e.validate(f)+" ",f.baseId=P,f.createErrors=!0,a+="  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; }  ",e.compositeRule=f.compositeRule=w,g?(a+=" if ("+p+") {  ",f.schema=e.schema.then,f.schemaPath=e.schemaPath+".then",f.errSchemaPath=e.errSchemaPath+"/then",a+="  "+e.validate(f)+" ",f.baseId=P,a+=" "+h+" = "+p+"; ",g&&y?a+=" var "+(E="ifClause"+s)+" = 'then'; ":E="'then'",a+=" } ",y&&(a+=" else { ")):a+=" if (!"+p+") { ",y&&(f.schema=e.schema.else,f.schemaPath=e.schemaPath+".else",f.errSchemaPath=e.errSchemaPath+"/else",a+="  "+e.validate(f)+" ",f.baseId=P,a+=" "+h+" = "+p+"; ",g&&y?a+=" var "+(E="ifClause"+s)+" = 'else'; ":E="'else'",a+=" } "),a+=" if (!"+h+") {   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'if' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { failingKeyword: "+E+" } ",!1!==e.opts.messages&&(a+=" , message: 'should match \"' + "+E+" + '\" schema' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&u&&(a+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "),a+=" }   ",u&&(a+=" else { "),a=e.util.cleanUpCode(a)}else u&&(a+=" if (true) { ");return a}},{}],26:[function(e,r,t){"use strict";r.exports={$ref:e("./ref"),allOf:e("./allOf"),anyOf:e("./anyOf"),$comment:e("./comment"),const:e("./const"),contains:e("./contains"),dependencies:e("./dependencies"),enum:e("./enum"),format:e("./format"),if:e("./if"),items:e("./items"),maximum:e("./_limit"),minimum:e("./_limit"),maxItems:e("./_limitItems"),minItems:e("./_limitItems"),maxLength:e("./_limitLength"),minLength:e("./_limitLength"),maxProperties:e("./_limitProperties"),minProperties:e("./_limitProperties"),multipleOf:e("./multipleOf"),not:e("./not"),oneOf:e("./oneOf"),pattern:e("./pattern"),properties:e("./properties"),propertyNames:e("./propertyNames"),required:e("./required"),uniqueItems:e("./uniqueItems"),validate:e("./validate")}},{"./_limit":12,"./_limitItems":13,"./_limitLength":14,"./_limitProperties":15,"./allOf":16,"./anyOf":17,"./comment":18,"./const":19,"./contains":20,"./dependencies":22,"./enum":23,"./format":24,"./if":25,"./items":27,"./multipleOf":28,"./not":29,"./oneOf":30,"./pattern":31,"./properties":32,"./propertyNames":33,"./ref":34,"./required":35,"./uniqueItems":36,"./validate":37}],27:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d="errs__"+s,f=e.util.copy(e),p="";f.level++;var m="valid"+f.level,v="i"+s,g=f.dataLevel=e.dataLevel+1,y="data"+g,P=e.baseId;if(a+="var "+d+" = errors;var "+h+";",Array.isArray(i)){var E=e.schema.additionalItems;if(!1===E){a+=" "+h+" = "+c+".length <= "+i.length+"; ";var w=l;l=e.errSchemaPath+"/additionalItems";var S=S||[];S.push(a+="  if (!"+h+") {   "),a="",!1!==e.createErrors?(a+=" { keyword: 'additionalItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { limit: "+i.length+" } ",!1!==e.opts.messages&&(a+=" , message: 'should NOT have more than "+i.length+" items' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var b=a;a=S.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+b+"]); ":" validate.errors = ["+b+"]; return false; ":" var err = "+b+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } ",l=w,u&&(p+="}",a+=" else { ")}var _=i;if(_)for(var F,x=-1,R=_.length-1;x<R;)if(F=_[x+=1],e.util.schemaHasRules(F,e.RULES.all)){a+=" "+m+" = true; if ("+c+".length > "+x+") { ";var $=c+"["+x+"]";f.schema=F,f.schemaPath=n+"["+x+"]",f.errSchemaPath=l+"/"+x,f.errorPath=e.util.getPathExpr(e.errorPath,x,e.opts.jsonPointers,!0),f.dataPathArr[g]=x;var D=e.validate(f);f.baseId=P,e.util.varOccurences(D,y)<2?a+=" "+e.util.varReplace(D,y,$)+" ":a+=" var "+y+" = "+$+"; "+D+" ",a+=" }  ",u&&(a+=" if ("+m+") { ",p+="}")}if("object"==typeof E&&e.util.schemaHasRules(E,e.RULES.all)){f.schema=E,f.schemaPath=e.schemaPath+".additionalItems",f.errSchemaPath=e.errSchemaPath+"/additionalItems",a+=" "+m+" = true; if ("+c+".length > "+i.length+") {  for (var "+v+" = "+i.length+"; "+v+" < "+c+".length; "+v+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers,!0);$=c+"["+v+"]";f.dataPathArr[g]=v;D=e.validate(f);f.baseId=P,e.util.varOccurences(D,y)<2?a+=" "+e.util.varReplace(D,y,$)+" ":a+=" var "+y+" = "+$+"; "+D+" ",u&&(a+=" if (!"+m+") break; "),a+=" } }  ",u&&(a+=" if ("+m+") { ",p+="}")}}else if(e.util.schemaHasRules(i,e.RULES.all)){f.schema=i,f.schemaPath=n,f.errSchemaPath=l,a+="  for (var "+v+" = 0; "+v+" < "+c+".length; "+v+"++) { ",f.errorPath=e.util.getPathExpr(e.errorPath,v,e.opts.jsonPointers,!0);$=c+"["+v+"]";f.dataPathArr[g]=v;D=e.validate(f);f.baseId=P,e.util.varOccurences(D,y)<2?a+=" "+e.util.varReplace(D,y,$)+" ":a+=" var "+y+" = "+$+"; "+D+" ",u&&(a+=" if (!"+m+") break; "),a+=" }"}return u&&(a+=" "+p+" if ("+d+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],28:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n,s+="var division"+o+";if (",d&&(s+=" "+a+" !== undefined && ( typeof "+a+" != 'number' || "),s+=" (division"+o+" = "+h+" / "+a+", ",s+=e.opts.multipleOfPrecision?" Math.abs(Math.round(division"+o+") - division"+o+") > 1e-"+e.opts.multipleOfPrecision+" ":" division"+o+" !== parseInt(division"+o+") ",s+=" ) ",d&&(s+="  )  ");var f=f||[];f.push(s+=" ) {   "),s="",!1!==e.createErrors?(s+=" { keyword: 'multipleOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { multipleOf: "+a+" } ",!1!==e.opts.messages&&(s+=" , message: 'should be multiple of ",s+=d?"' + "+a:a+"'"),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var p=s;return s=f.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",c&&(s+=" else { "),s}},{}],29:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="errs__"+s,d=e.util.copy(e);d.level++;var f="valid"+d.level;if(e.util.schemaHasRules(i,e.RULES.all)){d.schema=i,d.schemaPath=n,d.errSchemaPath=l,a+=" var "+h+" = errors;  ";var p,m=e.compositeRule;e.compositeRule=d.compositeRule=!0,d.createErrors=!1,d.opts.allErrors&&(p=d.opts.allErrors,d.opts.allErrors=!1),a+=" "+e.validate(d)+" ",d.createErrors=!0,p&&(d.opts.allErrors=p),e.compositeRule=d.compositeRule=m;var v=v||[];v.push(a+=" if ("+f+") {   "),a="",!1!==e.createErrors?(a+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should NOT be valid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var g=a;a=v.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+g+"]); ":" validate.errors = ["+g+"]; return false; ":" var err = "+g+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else {  errors = "+h+"; if (vErrors !== null) { if ("+h+") vErrors.length = "+h+"; else vErrors = null; } ",e.opts.allErrors&&(a+=" } ")}else a+="  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'not' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: {} ",!1!==e.opts.messages&&(a+=" , message: 'should NOT be valid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",u&&(a+=" if (false) { ");return a}},{}],30:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d="errs__"+s,f=e.util.copy(e),p="";f.level++;var m="valid"+f.level,v=f.baseId,g="prevValid"+s,y="passingSchemas"+s;a+="var "+d+" = errors , "+g+" = false , "+h+" = false , "+y+" = null; ";var P=e.compositeRule;e.compositeRule=f.compositeRule=!0;var E=i;if(E)for(var w,S=-1,b=E.length-1;S<b;)w=E[S+=1],e.util.schemaHasRules(w,e.RULES.all)?(f.schema=w,f.schemaPath=n+"["+S+"]",f.errSchemaPath=l+"/"+S,a+="  "+e.validate(f)+" ",f.baseId=v):a+=" var "+m+" = true; ",S&&(a+=" if ("+m+" && "+g+") { "+h+" = false; "+y+" = ["+y+", "+S+"]; } else { ",p+="}"),a+=" if ("+m+") { "+h+" = "+g+" = true; "+y+" = "+S+"; }";return e.compositeRule=f.compositeRule=P,a+=p+"if (!"+h+") {   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'oneOf' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { passingSchemas: "+y+" } ",!1!==e.opts.messages&&(a+=" , message: 'should match exactly one schema in oneOf' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&u&&(a+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "),a+="} else {  errors = "+d+"; if (vErrors !== null) { if ("+d+") vErrors.length = "+d+"; else vErrors = null; }",e.opts.allErrors&&(a+=" } "),a}},{}],31:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d=e.opts.$data&&n&&n.$data;d?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n;var f=d?"(new RegExp("+a+"))":e.usePattern(n);s+="if ( ",d&&(s+=" ("+a+" !== undefined && typeof "+a+" != 'string') || ");var p=p||[];p.push(s+=" !"+f+".test("+h+") ) {   "),s="",!1!==e.createErrors?(s+=" { keyword: 'pattern' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { pattern:  ",s+=d?""+a:""+e.util.toQuotedString(n),s+="  } ",!1!==e.opts.messages&&(s+=" , message: 'should match pattern \"",s+=d?"' + "+a+" + '":""+e.util.escapeQuotes(n),s+="\"' "),e.opts.verbose&&(s+=" , schema:  ",s+=d?"validate.schema"+l:""+e.util.toQuotedString(n),s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var m=s;return s=p.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+="} ",c&&(s+=" else { "),s}},{}],32:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="errs__"+s,d=e.util.copy(e),f="";d.level++;var p="valid"+d.level,m="key"+s,v="idx"+s,g=d.dataLevel=e.dataLevel+1,y="data"+g,P="dataProperties"+s,E=Object.keys(i||{}),w=e.schema.patternProperties||{},S=Object.keys(w),b=e.schema.additionalProperties,_=E.length||S.length,F=!1===b,x="object"==typeof b&&Object.keys(b).length,R=e.opts.removeAdditional,$=F||x||R,D=e.opts.ownProperties,j=e.baseId,I=e.schema.required;if(I&&(!e.opts.$data||!I.$data)&&I.length<e.opts.loopRequired)var O=e.util.toHash(I);if(a+="var "+h+" = errors;var "+p+" = true;",D&&(a+=" var "+P+" = undefined;"),$){if(a+=D?" "+P+" = "+P+" || Object.keys("+c+"); for (var "+v+"=0; "+v+"<"+P+".length; "+v+"++) { var "+m+" = "+P+"["+v+"]; ":" for (var "+m+" in "+c+") { ",_){if(a+=" var isAdditional"+s+" = !(false ",E.length)if(8<E.length)a+=" || validate.schema"+n+".hasOwnProperty("+m+") ";else{var A=E;if(A)for(var C=-1,k=A.length-1;C<k;)J=A[C+=1],a+=" || "+m+" == "+e.util.toQuotedString(J)+" "}if(S.length){var L=S;if(L)for(var z=-1,T=L.length-1;z<T;)ae=L[z+=1],a+=" || "+e.usePattern(ae)+".test("+m+") "}a+=" ); if (isAdditional"+s+") { "}if("all"==R)a+=" delete "+c+"["+m+"]; ";else{var N=e.errorPath,q="' + "+m+" + '";if(e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers)),F)if(R)a+=" delete "+c+"["+m+"]; ";else{var U=l;l=e.errSchemaPath+"/additionalProperties",(ee=ee||[]).push(a+=" "+p+" = false; "),a="",!1!==e.createErrors?(a+=" { keyword: 'additionalProperties' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { additionalProperty: '"+q+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is an invalid additional property":"should NOT have additional properties",a+="' "),e.opts.verbose&&(a+=" , schema: false , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var Q=a;a=ee.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+Q+"]); ":" validate.errors = ["+Q+"]; return false; ":" var err = "+Q+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l=U,u&&(a+=" break; ")}else if(x)if("failing"==R){a+=" var "+h+" = errors;  ";var V=e.compositeRule;e.compositeRule=d.compositeRule=!0,d.schema=b,d.schemaPath=e.schemaPath+".additionalProperties",d.errSchemaPath=e.errSchemaPath+"/additionalProperties",d.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);var H=c+"["+m+"]";d.dataPathArr[g]=m;var M=e.validate(d);d.baseId=j,e.util.varOccurences(M,y)<2?a+=" "+e.util.varReplace(M,y,H)+" ":a+=" var "+y+" = "+H+"; "+M+" ",a+=" if (!"+p+") { errors = "+h+"; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete "+c+"["+m+"]; }  ",e.compositeRule=d.compositeRule=V}else{d.schema=b,d.schemaPath=e.schemaPath+".additionalProperties",d.errSchemaPath=e.errSchemaPath+"/additionalProperties",d.errorPath=e.opts._errorDataPathProperty?e.errorPath:e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);H=c+"["+m+"]";d.dataPathArr[g]=m;M=e.validate(d);d.baseId=j,e.util.varOccurences(M,y)<2?a+=" "+e.util.varReplace(M,y,H)+" ":a+=" var "+y+" = "+H+"; "+M+" ",u&&(a+=" if (!"+p+") break; ")}e.errorPath=N}_&&(a+=" } "),a+=" }  ",u&&(a+=" if ("+p+") { ",f+="}")}var B=e.opts.useDefaults&&!e.compositeRule;if(E.length){var K=E;if(K)for(var J,Z=-1,G=K.length-1;Z<G;){if(J=K[Z+=1],e.util.schemaHasRules(ie=i[J],e.RULES.all)){var Y=e.util.getProperty(J),W=(H=c+Y,B&&void 0!==ie.default);d.schema=ie,d.schemaPath=n+Y,d.errSchemaPath=l+"/"+e.util.escapeFragment(J),d.errorPath=e.util.getPath(e.errorPath,J,e.opts.jsonPointers),d.dataPathArr[g]=e.util.toQuotedString(J);M=e.validate(d);if(d.baseId=j,e.util.varOccurences(M,y)<2){M=e.util.varReplace(M,y,H);var X=H}else{X=y;a+=" var "+y+" = "+H+"; "}if(W)a+=" "+M+" ";else{if(O&&O[J]){a+=" if ( "+X+" === undefined ",D&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(J)+"') "),a+=") { "+p+" = false; ";N=e.errorPath,U=l;var ee,re=e.util.escapeQuotes(J);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(N,J,e.opts.jsonPointers)),l=e.errSchemaPath+"/required",(ee=ee||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+re+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+re+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";Q=a;a=ee.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+Q+"]); ":" validate.errors = ["+Q+"]; return false; ":" var err = "+Q+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",l=U,e.errorPath=N,a+=" } else { "}else u?(a+=" if ( "+X+" === undefined ",D&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(J)+"') "),a+=") { "+p+" = true; } else { "):(a+=" if ("+X+" !== undefined ",D&&(a+=" &&   Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(J)+"') "),a+=" ) { ");a+=" "+M+" } "}}u&&(a+=" if ("+p+") { ",f+="}")}}if(S.length){var te=S;if(te)for(var ae,se=-1,oe=te.length-1;se<oe;){var ie;if(ae=te[se+=1],e.util.schemaHasRules(ie=w[ae],e.RULES.all)){d.schema=ie,d.schemaPath=e.schemaPath+".patternProperties"+e.util.getProperty(ae),d.errSchemaPath=e.errSchemaPath+"/patternProperties/"+e.util.escapeFragment(ae),a+=D?" "+P+" = "+P+" || Object.keys("+c+"); for (var "+v+"=0; "+v+"<"+P+".length; "+v+"++) { var "+m+" = "+P+"["+v+"]; ":" for (var "+m+" in "+c+") { ",a+=" if ("+e.usePattern(ae)+".test("+m+")) { ",d.errorPath=e.util.getPathExpr(e.errorPath,m,e.opts.jsonPointers);H=c+"["+m+"]";d.dataPathArr[g]=m;M=e.validate(d);d.baseId=j,e.util.varOccurences(M,y)<2?a+=" "+e.util.varReplace(M,y,H)+" ":a+=" var "+y+" = "+H+"; "+M+" ",u&&(a+=" if (!"+p+") break; "),a+=" } ",u&&(a+=" else "+p+" = true; "),a+=" }  ",u&&(a+=" if ("+p+") { ",f+="}")}}}return u&&(a+=" "+f+" if ("+h+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],33:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="errs__"+s,d=e.util.copy(e);d.level++;var f="valid"+d.level;if(e.util.schemaHasRules(i,e.RULES.all)){d.schema=i,d.schemaPath=n,d.errSchemaPath=l;var p="key"+s,m="idx"+s,v="i"+s,g="' + "+p+" + '",y="data"+(d.dataLevel=e.dataLevel+1),P="dataProperties"+s,E=e.opts.ownProperties,w=e.baseId;a+=" var "+h+" = errors; ",E&&(a+=" var "+P+" = undefined; "),a+=E?" "+P+" = "+P+" || Object.keys("+c+"); for (var "+m+"=0; "+m+"<"+P+".length; "+m+"++) { var "+p+" = "+P+"["+m+"]; ":" for (var "+p+" in "+c+") { ",a+=" var startErrs"+s+" = errors; ";var S=p,b=e.compositeRule;e.compositeRule=d.compositeRule=!0;var _=e.validate(d);d.baseId=w,e.util.varOccurences(_,y)<2?a+=" "+e.util.varReplace(_,y,S)+" ":a+=" var "+y+" = "+S+"; "+_+" ",e.compositeRule=d.compositeRule=b,a+=" if (!"+f+") { for (var "+v+"=startErrs"+s+"; "+v+"<errors; "+v+"++) { vErrors["+v+"].propertyName = "+p+"; }   var err =   ",!1!==e.createErrors?(a+=" { keyword: 'propertyNames' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { propertyName: '"+g+"' } ",!1!==e.opts.messages&&(a+=" , message: 'property name \\'"+g+"\\' is invalid' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",!e.compositeRule&&u&&(a+=e.async?" throw new ValidationError(vErrors); ":" validate.errors = vErrors; return false; "),u&&(a+=" break; "),a+=" } }"}return u&&(a+="  if ("+h+" == errors) {"),a=e.util.cleanUpCode(a)}},{}],34:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s,o=" ",i=e.dataLevel,n=e.schema[r],l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(i||""),h="valid"+e.level;if("#"==n||"#/"==n)e.isRoot?(a=e.async,s="validate"):(a=!0===e.root.schema.$async,s="root.refVal[0]");else{var d=e.resolveRef(e.baseId,n,e.isRoot);if(void 0===d){var f=e.MissingRefError.message(e.baseId,n);if("fail"==e.opts.missingRefs){e.logger.error(f),(g=g||[]).push(o),o="",!1!==e.createErrors?(o+=" { keyword: '$ref' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { ref: '"+e.util.escapeQuotes(n)+"' } ",!1!==e.opts.messages&&(o+=" , message: 'can\\'t resolve reference "+e.util.escapeQuotes(n)+"' "),e.opts.verbose&&(o+=" , schema: "+e.util.toQuotedString(n)+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),o+=" } "):o+=" {} ";var p=o;o=g.pop(),o+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+p+"]); ":" validate.errors = ["+p+"]; return false; ":" var err = "+p+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",u&&(o+=" if (false) { ")}else{if("ignore"!=e.opts.missingRefs)throw new e.MissingRefError(e.baseId,n,f);e.logger.warn(f),u&&(o+=" if (true) { ")}}else if(d.inline){var m=e.util.copy(e);m.level++;var v="valid"+m.level;m.schema=d.schema,m.schemaPath="",m.errSchemaPath=n,o+=" "+e.validate(m).replace(/validate\.schema/g,d.code)+" ",u&&(o+=" if ("+v+") { ")}else a=!0===d.$async||e.async&&!1!==d.$async,s=d.code}if(s){var g;(g=g||[]).push(o),o="",o+=e.opts.passContext?" "+s+".call(this, ":" "+s+"( ",o+=" "+c+", (dataPath || '')",'""'!=e.errorPath&&(o+=" + "+e.errorPath);var y=o+=" , "+(i?"data"+(i-1||""):"parentData")+" , "+(i?e.dataPathArr[i]:"parentDataProperty")+", rootData)  ";if(o=g.pop(),a){if(!e.async)throw new Error("async schema referenced by sync schema");u&&(o+=" var "+h+"; "),o+=" try { await "+y+"; ",u&&(o+=" "+h+" = true; "),o+=" } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ",u&&(o+=" "+h+" = false; "),o+=" } ",u&&(o+=" if ("+h+") { ")}else o+=" if (!"+y+") { if (vErrors === null) vErrors = "+s+".errors; else vErrors = vErrors.concat("+s+".errors); errors = vErrors.length; } ",u&&(o+=" else { ")}return o}},{}],35:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a=" ",s=e.level,o=e.dataLevel,i=e.schema[r],n=e.schemaPath+e.util.getProperty(r),l=e.errSchemaPath+"/"+r,u=!e.opts.allErrors,c="data"+(o||""),h="valid"+s,d=e.opts.$data&&i&&i.$data;d&&(a+=" var schema"+s+" = "+e.util.getData(i.$data,o,e.dataPathArr)+"; ");var f="schema"+s;if(!d)if(i.length<e.opts.loopRequired&&e.schema.properties&&Object.keys(e.schema.properties).length){var p=[],m=i;if(m)for(var v,g=-1,y=m.length-1;g<y;){v=m[g+=1];var P=e.schema.properties[v];P&&e.util.schemaHasRules(P,e.RULES.all)||(p[p.length]=v)}}else p=i;if(d||p.length){var E=e.errorPath,w=d||e.opts.loopRequired<=p.length,S=e.opts.ownProperties;if(u)if(a+=" var missing"+s+"; ",w){d||(a+=" var "+f+" = validate.schema"+n+"; ");var b="' + "+(D="schema"+s+"["+(x="i"+s)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(E,D,e.opts.jsonPointers)),a+=" var "+h+" = true; ",d&&(a+=" if (schema"+s+" === undefined) "+h+" = true; else if (!Array.isArray(schema"+s+")) "+h+" = false; else {"),a+=" for (var "+x+" = 0; "+x+" < "+f+".length; "+x+"++) { "+h+" = "+c+"["+f+"["+x+"]] !== undefined ",S&&(a+=" &&   Object.prototype.hasOwnProperty.call("+c+", "+f+"["+x+"]) "),a+="; if (!"+h+") break; } ",d&&(a+="  }  "),($=$||[]).push(a+="  if (!"+h+") {   "),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+b+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+b+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";var _=a;a=$.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { "}else{a+=" if ( ";var F=p;if(F)for(var x=-1,R=F.length-1;x<R;){I=F[x+=1],x&&(a+=" || "),a+=" ( ( "+(k=c+(C=e.util.getProperty(I)))+" === undefined ",S&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(I)+"') "),a+=") && (missing"+s+" = "+e.util.toQuotedString(e.opts.jsonPointers?I:C)+") ) "}a+=") {  ";var $;b="' + "+(D="missing"+s)+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.opts.jsonPointers?e.util.getPathExpr(E,D,!0):E+" + "+D),($=$||[]).push(a),a="",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+b+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+b+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ";_=a;a=$.pop(),a+=!e.compositeRule&&u?e.async?" throw new ValidationError(["+_+"]); ":" validate.errors = ["+_+"]; return false; ":" var err = "+_+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",a+=" } else { "}else if(w){d||(a+=" var "+f+" = validate.schema"+n+"; ");var D;b="' + "+(D="schema"+s+"["+(x="i"+s)+"]")+" + '";e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPathExpr(E,D,e.opts.jsonPointers)),d&&(a+=" if ("+f+" && !Array.isArray("+f+")) {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+b+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+b+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if ("+f+" !== undefined) { "),a+=" for (var "+x+" = 0; "+x+" < "+f+".length; "+x+"++) { if ("+c+"["+f+"["+x+"]] === undefined ",S&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", "+f+"["+x+"]) "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+b+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+b+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ",d&&(a+="  }  ")}else{var j=p;if(j)for(var I,O=-1,A=j.length-1;O<A;){I=j[O+=1];var C=e.util.getProperty(I),k=(b=e.util.escapeQuotes(I),c+C);e.opts._errorDataPathProperty&&(e.errorPath=e.util.getPath(E,I,e.opts.jsonPointers)),a+=" if ( "+k+" === undefined ",S&&(a+=" || ! Object.prototype.hasOwnProperty.call("+c+", '"+e.util.escapeQuotes(I)+"') "),a+=") {  var err =   ",!1!==e.createErrors?(a+=" { keyword: 'required' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(l)+" , params: { missingProperty: '"+b+"' } ",!1!==e.opts.messages&&(a+=" , message: '",a+=e.opts._errorDataPathProperty?"is a required property":"should have required property \\'"+b+"\\'",a+="' "),e.opts.verbose&&(a+=" , schema: validate.schema"+n+" , parentSchema: validate.schema"+e.schemaPath+" , data: "+c+" "),a+=" } "):a+=" {} ",a+=";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } "}}e.errorPath=E}else u&&(a+=" if (true) {");return a}},{}],36:[function(e,r,t){"use strict";r.exports=function(e,r,t){var a,s=" ",o=e.level,i=e.dataLevel,n=e.schema[r],l=e.schemaPath+e.util.getProperty(r),u=e.errSchemaPath+"/"+r,c=!e.opts.allErrors,h="data"+(i||""),d="valid"+o,f=e.opts.$data&&n&&n.$data;if(f?(s+=" var schema"+o+" = "+e.util.getData(n.$data,i,e.dataPathArr)+"; ",a="schema"+o):a=n,(n||f)&&!1!==e.opts.uniqueItems){f&&(s+=" var "+d+"; if ("+a+" === false || "+a+" === undefined) "+d+" = true; else if (typeof "+a+" != 'boolean') "+d+" = false; else { "),s+=" var i = "+h+".length , "+d+" = true , j; if (i > 1) { ";var p=e.schema.items&&e.schema.items.type,m=Array.isArray(p);if(!p||"object"==p||"array"==p||m&&(0<=p.indexOf("object")||0<=p.indexOf("array")))s+=" outer: for (;i--;) { for (j = i; j--;) { if (equal("+h+"[i], "+h+"[j])) { "+d+" = false; break outer; } } } ";else s+=" var itemIndices = {}, item; for (;i--;) { var item = "+h+"[i]; ",s+=" if ("+e.util["checkDataType"+(m?"s":"")](p,"item",!0)+") continue; ",m&&(s+=" if (typeof item == 'string') item = '\"' + item; "),s+=" if (typeof itemIndices[item] == 'number') { "+d+" = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ";s+=" } ",f&&(s+="  }  ");var v=v||[];v.push(s+=" if (!"+d+") {   "),s="",!1!==e.createErrors?(s+=" { keyword: 'uniqueItems' , dataPath: (dataPath || '') + "+e.errorPath+" , schemaPath: "+e.util.toQuotedString(u)+" , params: { i: i, j: j } ",!1!==e.opts.messages&&(s+=" , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),e.opts.verbose&&(s+=" , schema:  ",s+=f?"validate.schema"+l:""+n,s+="         , parentSchema: validate.schema"+e.schemaPath+" , data: "+h+" "),s+=" } "):s+=" {} ";var g=s;s=v.pop(),s+=!e.compositeRule&&c?e.async?" throw new ValidationError(["+g+"]); ":" validate.errors = ["+g+"]; return false; ":" var err = "+g+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",s+=" } ",c&&(s+=" else { ")}else c&&(s+=" if (true) { ");return s}},{}],37:[function(e,r,t){"use strict";r.exports=function(a,e,r){var t="",s=!0===a.schema.$async,o=a.util.schemaHasRulesExcept(a.schema,a.RULES.all,"$ref"),i=a.self._getId(a.schema);if(a.isTop&&(t+=" var validate = ",s&&(a.async=!0,t+="async "),t+="function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; ",i&&(a.opts.sourceCode||a.opts.processCode)&&(t+=" /*# sourceURL="+i+" */ ")),"boolean"==typeof a.schema||!o&&!a.schema.$ref){var n=a.level,l=a.dataLevel,u=a.schema[e="false schema"],c=a.schemaPath+a.util.getProperty(e),h=a.errSchemaPath+"/"+e,d=!a.opts.allErrors,f="data"+(l||""),p="valid"+n;if(!1===a.schema){a.isTop?d=!0:t+=" var "+p+" = false; ",(K=K||[]).push(t),t="",!1!==a.createErrors?(t+=" { keyword: 'false schema' , dataPath: (dataPath || '') + "+a.errorPath+" , schemaPath: "+a.util.toQuotedString(h)+" , params: {} ",!1!==a.opts.messages&&(t+=" , message: 'boolean schema is false' "),a.opts.verbose&&(t+=" , schema: false , parentSchema: validate.schema"+a.schemaPath+" , data: "+f+" "),t+=" } "):t+=" {} ";var m=t;t=K.pop(),t+=!a.compositeRule&&d?a.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}else t+=a.isTop?s?" return data; ":" validate.errors = null; return true; ":" var "+p+" = true; ";return a.isTop&&(t+=" }; return validate; "),t}if(a.isTop){var v=a.isTop;n=a.level=0,l=a.dataLevel=0,f="data";a.rootId=a.resolve.fullPath(a.self._getId(a.root.schema)),a.baseId=a.baseId||a.rootId,delete a.isTop,a.dataPathArr=[void 0],t+=" var vErrors = null; ",t+=" var errors = 0;     ",t+=" if (rootData === undefined) rootData = data; "}else{n=a.level,f="data"+((l=a.dataLevel)||"");if(i&&(a.baseId=a.resolve.url(a.baseId,i)),s&&!a.async)throw new Error("async schema in sync schema");t+=" var errs_"+n+" = errors;"}p="valid"+n,d=!a.opts.allErrors;var g="",y="",P=a.schema.type,E=Array.isArray(P);if(E&&1==P.length&&(P=P[0],E=!1),a.schema.$ref&&o){if("fail"==a.opts.extendRefs)throw new Error('$ref: validation keywords used in schema at path "'+a.errSchemaPath+'" (see option extendRefs)');!0!==a.opts.extendRefs&&(o=!1,a.logger.warn('$ref: keywords ignored in schema at path "'+a.errSchemaPath+'"'))}if(a.schema.$comment&&a.opts.$comment&&(t+=" "+a.RULES.all.$comment.code(a,"$comment")),P){if(a.opts.coerceTypes)var w=a.util.coerceToTypes(a.opts.coerceTypes,P);var S=a.RULES.types[P];if(w||E||!0===S||S&&!J(S)){c=a.schemaPath+".type",h=a.errSchemaPath+"/type",c=a.schemaPath+".type",h=a.errSchemaPath+"/type";if(t+=" if ("+a.util[E?"checkDataTypes":"checkDataType"](P,f,!0)+") { ",w){var b="dataType"+n,_="coerced"+n;t+=" var "+b+" = typeof "+f+"; ","array"==a.opts.coerceTypes&&(t+=" if ("+b+" == 'object' && Array.isArray("+f+")) "+b+" = 'array'; "),t+=" var "+_+" = undefined; ";var F="",x=w;if(x)for(var R,$=-1,D=x.length-1;$<D;)R=x[$+=1],$&&(t+=" if ("+_+" === undefined) { ",F+="}"),"array"==a.opts.coerceTypes&&"array"!=R&&(t+=" if ("+b+" == 'array' && "+f+".length == 1) { "+_+" = "+f+" = "+f+"[0]; "+b+" = typeof "+f+";  } "),"string"==R?t+=" if ("+b+" == 'number' || "+b+" == 'boolean') "+_+" = '' + "+f+"; else if ("+f+" === null) "+_+" = ''; ":"number"==R||"integer"==R?(t+=" if ("+b+" == 'boolean' || "+f+" === null || ("+b+" == 'string' && "+f+" && "+f+" == +"+f+" ","integer"==R&&(t+=" && !("+f+" % 1)"),t+=")) "+_+" = +"+f+"; "):"boolean"==R?t+=" if ("+f+" === 'false' || "+f+" === 0 || "+f+" === null) "+_+" = false; else if ("+f+" === 'true' || "+f+" === 1) "+_+" = true; ":"null"==R?t+=" if ("+f+" === '' || "+f+" === 0 || "+f+" === false) "+_+" = null; ":"array"==a.opts.coerceTypes&&"array"==R&&(t+=" if ("+b+" == 'string' || "+b+" == 'number' || "+b+" == 'boolean' || "+f+" == null) "+_+" = ["+f+"]; ");(K=K||[]).push(t+=" "+F+" if ("+_+" === undefined) {   "),t="",!1!==a.createErrors?(t+=" { keyword: 'type' , dataPath: (dataPath || '') + "+a.errorPath+" , schemaPath: "+a.util.toQuotedString(h)+" , params: { type: '",t+=E?""+P.join(","):""+P,t+="' } ",!1!==a.opts.messages&&(t+=" , message: 'should be ",t+=E?""+P.join(","):""+P,t+="' "),a.opts.verbose&&(t+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+a.schemaPath+" , data: "+f+" "),t+=" } "):t+=" {} ";m=t;t=K.pop(),t+=!a.compositeRule&&d?a.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } else {  ";var j=l?"data"+(l-1||""):"parentData";t+=" "+f+" = "+_+"; ",l||(t+="if ("+j+" !== undefined)"),t+=" "+j+"["+(l?a.dataPathArr[l]:"parentDataProperty")+"] = "+_+"; } "}else{(K=K||[]).push(t),t="",!1!==a.createErrors?(t+=" { keyword: 'type' , dataPath: (dataPath || '') + "+a.errorPath+" , schemaPath: "+a.util.toQuotedString(h)+" , params: { type: '",t+=E?""+P.join(","):""+P,t+="' } ",!1!==a.opts.messages&&(t+=" , message: 'should be ",t+=E?""+P.join(","):""+P,t+="' "),a.opts.verbose&&(t+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+a.schemaPath+" , data: "+f+" "),t+=" } "):t+=" {} ";m=t;t=K.pop(),t+=!a.compositeRule&&d?a.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; "}t+=" } "}}if(a.schema.$ref&&!o)t+=" "+a.RULES.all.$ref.code(a,"$ref")+" ",d&&(t+=" } if (errors === ",t+=v?"0":"errs_"+n,t+=") { ",y+="}");else{var I=a.RULES;if(I)for(var O=-1,A=I.length-1;O<A;)if(J(S=I[O+=1])){if(S.type&&(t+=" if ("+a.util.checkDataType(S.type,f)+") { "),a.opts.useDefaults&&!a.compositeRule)if("object"==S.type&&a.schema.properties){u=a.schema.properties;var C=Object.keys(u);if(C)for(var k,L=-1,z=C.length-1;L<z;){if(void 0!==(N=u[k=C[L+=1]]).default)t+="  if ("+(U=f+a.util.getProperty(k))+" === undefined) "+U+" = ",t+="shared"==a.opts.useDefaults?" "+a.useDefault(N.default)+" ":" "+JSON.stringify(N.default)+" ",t+="; "}}else if("array"==S.type&&Array.isArray(a.schema.items)){var T=a.schema.items;if(T){$=-1;for(var N,q=T.length-1;$<q;){var U;if(void 0!==(N=T[$+=1]).default)t+="  if ("+(U=f+"["+$+"]")+" === undefined) "+U+" = ",t+="shared"==a.opts.useDefaults?" "+a.useDefault(N.default)+" ":" "+JSON.stringify(N.default)+" ",t+="; "}}}var Q=S.rules;if(Q)for(var V,H=-1,M=Q.length-1;H<M;)if(Z(V=Q[H+=1])){var B=V.code(a,V.keyword,S.type);B&&(t+=" "+B+" ",d&&(g+="}"))}if(d&&(t+=" "+g+" ",g=""),S.type&&(t+=" } ",P&&P===S.type&&!w)){var K;c=a.schemaPath+".type",h=a.errSchemaPath+"/type";(K=K||[]).push(t+=" else { "),t="",!1!==a.createErrors?(t+=" { keyword: 'type' , dataPath: (dataPath || '') + "+a.errorPath+" , schemaPath: "+a.util.toQuotedString(h)+" , params: { type: '",t+=E?""+P.join(","):""+P,t+="' } ",!1!==a.opts.messages&&(t+=" , message: 'should be ",t+=E?""+P.join(","):""+P,t+="' "),a.opts.verbose&&(t+=" , schema: validate.schema"+c+" , parentSchema: validate.schema"+a.schemaPath+" , data: "+f+" "),t+=" } "):t+=" {} ";m=t;t=K.pop(),t+=!a.compositeRule&&d?a.async?" throw new ValidationError(["+m+"]); ":" validate.errors = ["+m+"]; return false; ":" var err = "+m+";  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ",t+=" } "}d&&(t+=" if (errors === ",t+=v?"0":"errs_"+n,t+=") { ",y+="}")}}function J(e){for(var r=e.rules,t=0;t<r.length;t++)if(Z(r[t]))return!0}function Z(e){return void 0!==a.schema[e.keyword]||e.implements&&function(e){for(var r=e.implements,t=0;t<r.length;t++)if(void 0!==a.schema[r[t]])return!0}(e)}return d&&(t+=" "+y+" "),v?(s?(t+=" if (errors === 0) return data;           ",t+=" else throw new ValidationError(vErrors); "):(t+=" validate.errors = vErrors; ",t+=" return errors === 0;       "),t+=" }; return validate;"):t+=" var "+p+" = errors === errs_"+n+";",t=a.util.cleanUpCode(t),v&&(t=a.util.finalCleanUpCode(t,s)),t}},{}],38:[function(e,r,t){"use strict";var c=/^[a-z_$][a-z0-9_$-]*$/i,h=e("./dotjs/custom");r.exports={add:function(e,r){var n=this.RULES;if(n.keywords[e])throw new Error("Keyword "+e+" is already defined");if(!c.test(e))throw new Error("Keyword "+e+" is not a valid identifier");if(r){if(r.macro&&void 0!==r.valid)throw new Error('"valid" option cannot be used with macro keywords');var t=r.type;if(Array.isArray(t)){var a,s=t.length;for(a=0;a<s;a++)u(t[a]);for(a=0;a<s;a++)l(e,t[a],r)}else t&&u(t),l(e,t,r);var o=!0===r.$data&&this._opts.$data;if(o&&!r.validate)throw new Error('$data support: "validate" function is not defined');var i=r.metaSchema;i&&(o&&(i={anyOf:[i,{$ref:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#"}]}),r.validateSchema=this.compile(i,!0))}function l(e,r,t){for(var a,s=0;s<n.length;s++){var o=n[s];if(o.type==r){a=o;break}}a||n.push(a={type:r,rules:[]});var i={keyword:e,definition:t,custom:!0,code:h,implements:t.implements};a.rules.push(i),n.custom[e]=i}function u(e){if(!n.types[e])throw new Error("Unknown type "+e)}return n.keywords[e]=n.all[e]=!0,this},get:function(e){var r=this.RULES.custom[e];return r?r.definition:this.RULES.keywords[e]||!1},remove:function(e){var r=this.RULES;delete r.keywords[e],delete r.all[e],delete r.custom[e];for(var t=0;t<r.length;t++)for(var a=r[t].rules,s=0;s<a.length;s++)if(a[s].keyword==e){a.splice(s,1);break}return this}}},{"./dotjs/custom":21}],39:[function(e,r,t){r.exports={$schema:"http://json-schema.org/draft-07/schema#",$id:"https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/data.json#",description:"Meta-schema for $data reference (JSON Schema extension proposal)",type:"object",required:["$data"],properties:{$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},additionalProperties:!1}},{}],40:[function(e,r,t){r.exports={$schema:"http://json-schema.org/draft-07/schema#",$id:"http://json-schema.org/draft-07/schema#",title:"Core schema meta-schema",definitions:{schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},type:["object","boolean"],properties:{$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},default:!0}},{}],41:[function(e,r,t){"use strict";var f=Array.isArray,p=Object.keys,m=Object.prototype.hasOwnProperty;r.exports=function e(r,t){if(r===t)return!0;if(r&&t&&"object"==typeof r&&"object"==typeof t){var a,s,o,i=f(r),n=f(t);if(i&&n){if((s=r.length)!=t.length)return!1;for(a=s;0!=a--;)if(!e(r[a],t[a]))return!1;return!0}if(i!=n)return!1;var l=r instanceof Date,u=t instanceof Date;if(l!=u)return!1;if(l&&u)return r.getTime()==t.getTime();var c=r instanceof RegExp,h=t instanceof RegExp;if(c!=h)return!1;if(c&&h)return r.toString()==t.toString();var d=p(r);if((s=d.length)!==p(t).length)return!1;for(a=s;0!=a--;)if(!m.call(t,d[a]))return!1;for(a=s;0!=a--;)if(!e(r[o=d[a]],t[o]))return!1;return!0}return r!=r&&t!=t}},{}],42:[function(e,r,t){"use strict";r.exports=function(e,r){r||(r={}),"function"==typeof r&&(r={cmp:r});var a,l="boolean"==typeof r.cycles&&r.cycles,u=r.cmp&&(a=r.cmp,function(t){return function(e,r){return a({key:e,value:t[e]},{key:r,value:t[r]})}}),c=[];return function e(r){if(r&&r.toJSON&&"function"==typeof r.toJSON&&(r=r.toJSON()),void 0!==r){if("number"==typeof r)return isFinite(r)?""+r:"null";if("object"!=typeof r)return JSON.stringify(r);var t,a;if(Array.isArray(r)){for(a="[",t=0;t<r.length;t++)t&&(a+=","),a+=e(r[t])||"null";return a+"]"}if(null===r)return"null";if(-1!==c.indexOf(r)){if(l)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}var s=c.push(r)-1,o=Object.keys(r).sort(u&&u(r));for(a="",t=0;t<o.length;t++){var i=o[t],n=e(r[i]);n&&(a&&(a+=","),a+=JSON.stringify(i)+":"+n)}return c.splice(s,1),"{"+a+"}"}}(e)}},{}],43:[function(e,r,t){"use strict";var p=r.exports=function(e,r,t){"function"==typeof r&&(t=r,r={}),function e(r,t,a,s,o,i,n,l,u){if(a&&"object"==typeof a&&!Array.isArray(a))for(var c in t(a,s,o,i,n,l,u),a){var h=a[c];if(Array.isArray(h)){if(c in p.arrayKeywords)for(var d=0;d<h.length;d++)e(r,t,h[d],s+"/"+c+"/"+d,o,s,c,a,d)}else if(c in p.propsKeywords){if(h&&"object"==typeof h)for(var f in h)e(r,t,h[f],s+"/"+c+"/"+f.replace(/~/g,"~0").replace(/\//g,"~1"),o,s,c,a,f)}else(c in p.keywords||r.allKeys&&!(c in p.skipKeywords))&&e(r,t,h,s+"/"+c,o,s,c,a)}}(r,t,e,"",e)};p.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0},p.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},p.propsKeywords={definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},p.skipKeywords={enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0}},{}],44:[function(e,r,t){var a;a=this,function(e){"use strict";function C(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];if(1<r.length){r[0]=r[0].slice(0,-1);for(var a=r.length-1,s=1;s<a;++s)r[s]=r[s].slice(1,-1);return r[a]=r[a].slice(1),r.join("")}return r[0]}function k(e){return"(?:"+e+")"}function a(e){return void 0===e?"undefined":null===e?"null":Object.prototype.toString.call(e).split(" ").pop().split("]").shift().toLowerCase()}function p(e){return e.toUpperCase()}function r(e){var r="[A-Za-z]",t="[0-9]",a=C(t,"[A-Fa-f]"),s=k(k("%[EFef]"+a+"%"+a+a+"%"+a+a)+"|"+k("%[89A-Fa-f]"+a+"%"+a+a)+"|"+k("%"+a+a)),o="[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",i=C("[\\:\\/\\?\\#\\[\\]\\@]",o),n=e?"[\\uE000-\\uF8FF]":"[]",l=C(r,t,"[\\-\\.\\_\\~]",e?"[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]":"[]"),u=k(r+C(r,t,"[\\+\\-\\.]")+"*"),c=k(k(s+"|"+C(l,o,"[\\:]"))+"*"),h=(k(k("25[0-5]")+"|"+k("2[0-4]"+t)+"|"+k("1"+t+t)+"|"+k("[1-9]"+t)+"|"+t),k(k("25[0-5]")+"|"+k("2[0-4]"+t)+"|"+k("1"+t+t)+"|"+k("0?[1-9]"+t)+"|0?0?"+t)),d=k(h+"\\."+h+"\\."+h+"\\."+h),f=k(a+"{1,4}"),p=k(k(f+"\\:"+f)+"|"+d),m=k([k(k(f+"\\:")+"{6}"+p),k("\\:\\:"+k(f+"\\:")+"{5}"+p),k(k(f)+"?\\:\\:"+k(f+"\\:")+"{4}"+p),k(k(k(f+"\\:")+"{0,1}"+f)+"?\\:\\:"+k(f+"\\:")+"{3}"+p),k(k(k(f+"\\:")+"{0,2}"+f)+"?\\:\\:"+k(f+"\\:")+"{2}"+p),k(k(k(f+"\\:")+"{0,3}"+f)+"?\\:\\:"+f+"\\:"+p),k(k(k(f+"\\:")+"{0,4}"+f)+"?\\:\\:"+p),k(k(k(f+"\\:")+"{0,5}"+f)+"?\\:\\:"+f),k(k(k(f+"\\:")+"{0,6}"+f)+"?\\:\\:")].join("|")),v=k(k(l+"|"+s)+"+"),g=(k(m+"\\%25"+v),k("\\["+k(k(m+k("\\%25|\\%(?!"+a+"{2})")+v)+"|"+m+"|"+k("[vV]"+a+"+\\."+C(l,o,"[\\:]")+"+"))+"\\]")),y=k(k(s+"|"+C(l,o))+"*"),P=k(g+"|"+d+"(?!"+y+")|"+y),E=k(t+"*"),w=k(k(c+"@")+"?"+P+k("\\:"+E)+"?"),S=k(s+"|"+C(l,o,"[\\:\\@]")),b=k(S+"*"),_=k(S+"+"),F=k(k(s+"|"+C(l,o,"[\\@]"))+"+"),x=k(k("\\/"+b)+"*"),R=k("\\/"+k(_+x)+"?"),$=k(F+x),D=k(_+x),j="(?!"+S+")",I=(k(x+"|"+R+"|"+$+"|"+D+"|"+j),k(k(S+"|"+C("[\\/\\?]",n))+"*")),O=k(k(S+"|[\\/\\?]")+"*"),A=k(k("\\/\\/"+w+x)+"|"+R+"|"+D+"|"+j);k(k(u+"\\:"+A+k("\\?"+I)+"?"+k("\\#"+O)+"?")+"|"+k(k(k("\\/\\/"+w+x)+"|"+R+"|"+$+"|"+j)+k("\\?"+I)+"?"+k("\\#"+O)+"?")),k(u+"\\:"+A+k("\\?"+I)+"?"),k(k("\\/\\/("+k("("+c+")@")+"?("+P+")"+k("\\:("+E+")")+"?)")+"?("+x+"|"+R+"|"+D+"|"+j+")"),k("\\?("+I+")"),k("\\#("+O+")"),k(k("\\/\\/("+k("("+c+")@")+"?("+P+")"+k("\\:("+E+")")+"?)")+"?("+x+"|"+R+"|"+$+"|"+j+")"),k("\\?("+I+")"),k("\\#("+O+")"),k(k("\\/\\/("+k("("+c+")@")+"?("+P+")"+k("\\:("+E+")")+"?)")+"?("+x+"|"+R+"|"+D+"|"+j+")"),k("\\?("+I+")"),k("\\#("+O+")"),k("("+c+")@"),k("\\:("+E+")");return{NOT_SCHEME:new RegExp(C("[^]",r,t,"[\\+\\-\\.]"),"g"),NOT_USERINFO:new RegExp(C("[^\\%\\:]",l,o),"g"),NOT_HOST:new RegExp(C("[^\\%\\[\\]\\:]",l,o),"g"),NOT_PATH:new RegExp(C("[^\\%\\/\\:\\@]",l,o),"g"),NOT_PATH_NOSCHEME:new RegExp(C("[^\\%\\/\\@]",l,o),"g"),NOT_QUERY:new RegExp(C("[^\\%]",l,o,"[\\:\\@\\/\\?]",n),"g"),NOT_FRAGMENT:new RegExp(C("[^\\%]",l,o,"[\\:\\@\\/\\?]"),"g"),ESCAPE:new RegExp(C("[^]",l,o),"g"),UNRESERVED:new RegExp(l,"g"),OTHER_CHARS:new RegExp(C("[^\\%]",l,i),"g"),PCT_ENCODED:new RegExp(s,"g"),IPV4ADDRESS:new RegExp("^("+d+")$"),IPV6ADDRESS:new RegExp("^\\[?("+m+")"+k(k("\\%25|\\%(?!"+a+"{2})")+"("+v+")")+"?\\]?$")}}var c=r(!1),h=r(!0),w=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],a=!0,s=!1,o=void 0;try{for(var i,n=e[Symbol.iterator]();!(a=(i=n.next()).done)&&(t.push(i.value),!r||t.length!==r);a=!0);}catch(e){s=!0,o=e}finally{try{!a&&n.return&&n.return()}finally{if(s)throw o}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},A=2147483647,t=/^xn--/,s=/[^\0-\x7E]/,o=/[\x2E\u3002\uFF0E\uFF61]/g,i={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},L=Math.floor,z=String.fromCharCode;function T(e){throw new RangeError(i[e])}function n(e,r){var t=e.split("@"),a="";return 1<t.length&&(a=t[0]+"@",e=t[1]),a+function(e,r){for(var t=[],a=e.length;a--;)t[a]=r(e[a]);return t}((e=e.replace(o,".")).split("."),r).join(".")}function N(e){for(var r=[],t=0,a=e.length;t<a;){var s=e.charCodeAt(t++);if(55296<=s&&s<=56319&&t<a){var o=e.charCodeAt(t++);56320==(64512&o)?r.push(((1023&s)<<10)+(1023&o)+65536):(r.push(s),t--)}else r.push(s)}return r}var q=function(e,r){return e+22+75*(e<26)-((0!=r)<<5)},U=function(e,r,t){var a=0;for(e=t?L(e/700):e>>1,e+=L(e/r);455<e;a+=36)e=L(e/35);return L(a+36*e/(e+38))},l=function(e){var r,t=[],a=e.length,s=0,o=128,i=72,n=e.lastIndexOf("-");n<0&&(n=0);for(var l=0;l<n;++l)128<=e.charCodeAt(l)&&T("not-basic"),t.push(e.charCodeAt(l));for(var u=0<n?n+1:0;u<a;){for(var c=s,h=1,d=36;;d+=36){a<=u&&T("invalid-input");var f=(r=e.charCodeAt(u++))-48<10?r-22:r-65<26?r-65:r-97<26?r-97:36;(36<=f||f>L((A-s)/h))&&T("overflow"),s+=f*h;var p=d<=i?1:i+26<=d?26:d-i;if(f<p)break;var m=36-p;h>L(A/m)&&T("overflow"),h*=m}var v=t.length+1;i=U(s-c,v,0==c),L(s/v)>A-o&&T("overflow"),o+=L(s/v),s%=v,t.splice(s++,0,o)}return String.fromCodePoint.apply(String,t)},u=function(e){var r=[],t=(e=N(e)).length,a=128,s=0,o=72,i=!0,n=!1,l=void 0;try{for(var u,c=e[Symbol.iterator]();!(i=(u=c.next()).done);i=!0){var h=u.value;h<128&&r.push(z(h))}}catch(e){n=!0,l=e}finally{try{!i&&c.return&&c.return()}finally{if(n)throw l}}var d=r.length,f=d;for(d&&r.push("-");f<t;){var p=A,m=!0,v=!1,g=void 0;try{for(var y,P=e[Symbol.iterator]();!(m=(y=P.next()).done);m=!0){var E=y.value;a<=E&&E<p&&(p=E)}}catch(e){v=!0,g=e}finally{try{!m&&P.return&&P.return()}finally{if(v)throw g}}var w=f+1;p-a>L((A-s)/w)&&T("overflow"),s+=(p-a)*w,a=p;var S=!0,b=!1,_=void 0;try{for(var F,x=e[Symbol.iterator]();!(S=(F=x.next()).done);S=!0){var R=F.value;if(R<a&&++s>A&&T("overflow"),R==a){for(var $=s,D=36;;D+=36){var j=D<=o?1:o+26<=D?26:D-o;if($<j)break;var I=$-j,O=36-j;r.push(z(q(j+I%O,0))),$=L(I/O)}r.push(z(q($,0))),o=U(s,w,f==d),s=0,++f}}}catch(e){b=!0,_=e}finally{try{!S&&x.return&&x.return()}finally{if(b)throw _}}++s,++a}return r.join("")},v={version:"2.1.0",ucs2:{decode:N,encode:function(e){return String.fromCodePoint.apply(String,function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}(e))}},decode:l,encode:u,toASCII:function(e){return n(e,function(e){return s.test(e)?"xn--"+u(e):e})},toUnicode:function(e){return n(e,function(e){return t.test(e)?l(e.slice(4).toLowerCase()):e})}},d={};function m(e){var r=e.charCodeAt(0);return r<16?"%0"+r.toString(16).toUpperCase():r<128?"%"+r.toString(16).toUpperCase():r<2048?"%"+(r>>6|192).toString(16).toUpperCase()+"%"+(63&r|128).toString(16).toUpperCase():"%"+(r>>12|224).toString(16).toUpperCase()+"%"+(r>>6&63|128).toString(16).toUpperCase()+"%"+(63&r|128).toString(16).toUpperCase()}function f(e){for(var r="",t=0,a=e.length;t<a;){var s=parseInt(e.substr(t+1,2),16);if(s<128)r+=String.fromCharCode(s),t+=3;else if(194<=s&&s<224){if(6<=a-t){var o=parseInt(e.substr(t+4,2),16);r+=String.fromCharCode((31&s)<<6|63&o)}else r+=e.substr(t,6);t+=6}else if(224<=s){if(9<=a-t){var i=parseInt(e.substr(t+4,2),16),n=parseInt(e.substr(t+7,2),16);r+=String.fromCharCode((15&s)<<12|(63&i)<<6|63&n)}else r+=e.substr(t,9);t+=9}else r+=e.substr(t,3),t+=3}return r}function g(e,t){function r(e){var r=f(e);return r.match(t.UNRESERVED)?r:e}return e.scheme&&(e.scheme=String(e.scheme).replace(t.PCT_ENCODED,r).toLowerCase().replace(t.NOT_SCHEME,"")),void 0!==e.userinfo&&(e.userinfo=String(e.userinfo).replace(t.PCT_ENCODED,r).replace(t.NOT_USERINFO,m).replace(t.PCT_ENCODED,p)),void 0!==e.host&&(e.host=String(e.host).replace(t.PCT_ENCODED,r).toLowerCase().replace(t.NOT_HOST,m).replace(t.PCT_ENCODED,p)),void 0!==e.path&&(e.path=String(e.path).replace(t.PCT_ENCODED,r).replace(e.scheme?t.NOT_PATH:t.NOT_PATH_NOSCHEME,m).replace(t.PCT_ENCODED,p)),void 0!==e.query&&(e.query=String(e.query).replace(t.PCT_ENCODED,r).replace(t.NOT_QUERY,m).replace(t.PCT_ENCODED,p)),void 0!==e.fragment&&(e.fragment=String(e.fragment).replace(t.PCT_ENCODED,r).replace(t.NOT_FRAGMENT,m).replace(t.PCT_ENCODED,p)),e}function S(e){return e.replace(/^0*(.*)/,"$1")||"0"}function b(e,r){var t=e.match(r.IPV4ADDRESS)||[],a=w(t,2)[1];return a?a.split(".").map(S).join("."):e}function y(e,r){var t=e.match(r.IPV6ADDRESS)||[],a=w(t,3),s=a[1],o=a[2];if(s){for(var i=s.toLowerCase().split("::").reverse(),n=w(i,2),l=n[0],u=n[1],c=u?u.split(":").map(S):[],h=l.split(":").map(S),d=r.IPV4ADDRESS.test(h[h.length-1]),f=d?7:8,p=h.length-f,m=Array(f),v=0;v<f;++v)m[v]=c[v]||h[p+v]||"";d&&(m[f-1]=b(m[f-1],r));var g=m.reduce(function(e,r,t){if(!r||"0"===r){var a=e[e.length-1];a&&a.index+a.length===t?a.length++:e.push({index:t,length:1})}return e},[]).sort(function(e,r){return r.length-e.length})[0],y=void 0;if(g&&1<g.length){var P=m.slice(0,g.index),E=m.slice(g.index+g.length);y=P.join(":")+"::"+E.join(":")}else y=m.join(":");return o&&(y+="%"+o),y}return e}var P=/^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,E=void 0==="".match(/(){0}/)[1];function _(e){var r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t={},a=!1!==r.iri?h:c;"suffix"===r.reference&&(e=(r.scheme?r.scheme+":":"")+"//"+e);var s=e.match(P);if(s){E?(t.scheme=s[1],t.userinfo=s[3],t.host=s[4],t.port=parseInt(s[5],10),t.path=s[6]||"",t.query=s[7],t.fragment=s[8],isNaN(t.port)&&(t.port=s[5])):(t.scheme=s[1]||void 0,t.userinfo=-1!==e.indexOf("@")?s[3]:void 0,t.host=-1!==e.indexOf("//")?s[4]:void 0,t.port=parseInt(s[5],10),t.path=s[6]||"",t.query=-1!==e.indexOf("?")?s[7]:void 0,t.fragment=-1!==e.indexOf("#")?s[8]:void 0,isNaN(t.port)&&(t.port=e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)?s[4]:void 0)),t.host&&(t.host=y(b(t.host,a),a)),t.reference=void 0!==t.scheme||void 0!==t.userinfo||void 0!==t.host||void 0!==t.port||t.path||void 0!==t.query?void 0===t.scheme?"relative":void 0===t.fragment?"absolute":"uri":"same-document",r.reference&&"suffix"!==r.reference&&r.reference!==t.reference&&(t.error=t.error||"URI is not a "+r.reference+" reference.");var o=d[(r.scheme||t.scheme||"").toLowerCase()];if(r.unicodeSupport||o&&o.unicodeSupport)g(t,a);else{if(t.host&&(r.domainHost||o&&o.domainHost))try{t.host=v.toASCII(t.host.replace(a.PCT_ENCODED,f).toLowerCase())}catch(e){t.error=t.error||"Host's domain name can not be converted to ASCII via punycode: "+e}g(t,c)}o&&o.parse&&o.parse(t,r)}else t.error=t.error||"URI can not be parsed.";return t}var F=/^\.\.?\//,x=/^\/\.(\/|$)/,R=/^\/\.\.(\/|$)/,$=/^\/?(?:.|\n)*?(?=\/|$)/;function D(e){for(var r=[];e.length;)if(e.match(F))e=e.replace(F,"");else if(e.match(x))e=e.replace(x,"/");else if(e.match(R))e=e.replace(R,"/"),r.pop();else if("."===e||".."===e)e="";else{var t=e.match($);if(!t)throw new Error("Unexpected dot segment condition");var a=t[0];e=e.slice(a.length),r.push(a)}return r.join("")}function j(r){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=t.iri?h:c,a=[],s=d[(t.scheme||r.scheme||"").toLowerCase()];if(s&&s.serialize&&s.serialize(r,t),r.host)if(e.IPV6ADDRESS.test(r.host));else if(t.domainHost||s&&s.domainHost)try{r.host=t.iri?v.toUnicode(r.host):v.toASCII(r.host.replace(e.PCT_ENCODED,f).toLowerCase())}catch(e){r.error=r.error||"Host's domain name can not be converted to "+(t.iri?"Unicode":"ASCII")+" via punycode: "+e}g(r,e),"suffix"!==t.reference&&r.scheme&&(a.push(r.scheme),a.push(":"));var o,i,n,l=(i=!1!==t.iri?h:c,n=[],void 0!==(o=r).userinfo&&(n.push(o.userinfo),n.push("@")),void 0!==o.host&&n.push(y(b(String(o.host),i),i).replace(i.IPV6ADDRESS,function(e,r,t){return"["+r+(t?"%25"+t:"")+"]"})),"number"==typeof o.port&&(n.push(":"),n.push(o.port.toString(10))),n.length?n.join(""):void 0);if(void 0!==l&&("suffix"!==t.reference&&a.push("//"),a.push(l),r.path&&"/"!==r.path.charAt(0)&&a.push("/")),void 0!==r.path){var u=r.path;t.absolutePath||s&&s.absolutePath||(u=D(u)),void 0===l&&(u=u.replace(/^\/\//,"/%2F")),a.push(u)}return void 0!==r.query&&(a.push("?"),a.push(r.query)),void 0!==r.fragment&&(a.push("#"),a.push(r.fragment)),a.join("")}function I(e,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},a={};return arguments[3]||(e=_(j(e,t),t),r=_(j(r,t),t)),!(t=t||{}).tolerant&&r.scheme?(a.scheme=r.scheme,a.userinfo=r.userinfo,a.host=r.host,a.port=r.port,a.path=D(r.path||""),a.query=r.query):(void 0!==r.userinfo||void 0!==r.host||void 0!==r.port?(a.userinfo=r.userinfo,a.host=r.host,a.port=r.port,a.path=D(r.path||""),a.query=r.query):(r.path?("/"===r.path.charAt(0)?a.path=D(r.path):(a.path=void 0===e.userinfo&&void 0===e.host&&void 0===e.port||e.path?e.path?e.path.slice(0,e.path.lastIndexOf("/")+1)+r.path:r.path:"/"+r.path,a.path=D(a.path)),a.query=r.query):(a.path=e.path,a.query=void 0!==r.query?r.query:e.query),a.userinfo=e.userinfo,a.host=e.host,a.port=e.port),a.scheme=e.scheme),a.fragment=r.fragment,a}function O(e,r){return e&&e.toString().replace(r&&r.iri?h.PCT_ENCODED:c.PCT_ENCODED,f)}var Q={scheme:"http",domainHost:!0,parse:function(e,r){return e.host||(e.error=e.error||"HTTP URIs must have a host."),e},serialize:function(e,r){return e.port!==("https"!==String(e.scheme).toLowerCase()?80:443)&&""!==e.port||(e.port=void 0),e.path||(e.path="/"),e}},V={scheme:"https",domainHost:Q.domainHost,parse:Q.parse,serialize:Q.serialize},H={},M="[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]",B="[0-9A-Fa-f]",K=k(k("%[EFef]"+B+"%"+B+B+"%"+B+B)+"|"+k("%[89A-Fa-f]"+B+"%"+B+B)+"|"+k("%"+B+B)),J=C("[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",'[\\"\\\\]'),Z=new RegExp(M,"g"),G=new RegExp(K,"g"),Y=new RegExp(C("[^]","[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]","[\\.]",'[\\"]',J),"g"),W=new RegExp(C("[^]",M,"[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"),"g"),X=W;function ee(e){var r=f(e);return r.match(Z)?r:e}var re={scheme:"mailto",parse:function(e,r){var t=e,a=t.to=t.path?t.path.split(","):[];if(t.path=void 0,t.query){for(var s=!1,o={},i=t.query.split("&"),n=0,l=i.length;n<l;++n){var u=i[n].split("=");switch(u[0]){case"to":for(var c=u[1].split(","),h=0,d=c.length;h<d;++h)a.push(c[h]);break;case"subject":t.subject=O(u[1],r);break;case"body":t.body=O(u[1],r);break;default:s=!0,o[O(u[0],r)]=O(u[1],r)}}s&&(t.headers=o)}t.query=void 0;for(var f=0,p=a.length;f<p;++f){var m=a[f].split("@");if(m[0]=O(m[0]),r.unicodeSupport)m[1]=O(m[1],r).toLowerCase();else try{m[1]=v.toASCII(O(m[1],r).toLowerCase())}catch(e){t.error=t.error||"Email address's domain name can not be converted to ASCII via punycode: "+e}a[f]=m.join("@")}return t},serialize:function(e,r){var t,a=e,s=null!=(t=e.to)?t instanceof Array?t:"number"!=typeof t.length||t.split||t.setInterval||t.call?[t]:Array.prototype.slice.call(t):[];if(s){for(var o=0,i=s.length;o<i;++o){var n=String(s[o]),l=n.lastIndexOf("@"),u=n.slice(0,l).replace(G,ee).replace(G,p).replace(Y,m),c=n.slice(l+1);try{c=r.iri?v.toUnicode(c):v.toASCII(O(c,r).toLowerCase())}catch(e){a.error=a.error||"Email address's domain name can not be converted to "+(r.iri?"Unicode":"ASCII")+" via punycode: "+e}s[o]=u+"@"+c}a.path=s.join(",")}var h=e.headers=e.headers||{};e.subject&&(h.subject=e.subject),e.body&&(h.body=e.body);var d=[];for(var f in h)h[f]!==H[f]&&d.push(f.replace(G,ee).replace(G,p).replace(W,m)+"="+h[f].replace(G,ee).replace(G,p).replace(X,m));return d.length&&(a.query=d.join("&")),a}},te=/^([^\:]+)\:(.*)/,ae={scheme:"urn",parse:function(e,r){var t=e.path&&e.path.match(te),a=e;if(t){var s=r.scheme||a.scheme||"urn",o=t[1].toLowerCase(),i=t[2],n=d[s+":"+(r.nid||o)];a.nid=o,a.nss=i,a.path=void 0,n&&(a=n.parse(a,r))}else a.error=a.error||"URN can not be parsed.";return a},serialize:function(e,r){var t=e.nid,a=d[(r.scheme||e.scheme||"urn")+":"+(r.nid||t)];a&&(e=a.serialize(e,r));var s=e;return s.path=(t||r.nid)+":"+e.nss,s}},se=/^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,oe={scheme:"urn:uuid",parse:function(e,r){var t=e;return t.uuid=t.nss,t.nss=void 0,r.tolerant||t.uuid&&t.uuid.match(se)||(t.error=t.error||"UUID is not valid."),t},serialize:function(e,r){var t=e;return t.nss=(e.uuid||"").toLowerCase(),t}};d[Q.scheme]=Q,d[V.scheme]=V,d[re.scheme]=re,d[ae.scheme]=ae,d[oe.scheme]=oe,e.SCHEMES=d,e.pctEncChar=m,e.pctDecChars=f,e.parse=_,e.removeDotSegments=D,e.serialize=j,e.resolveComponents=I,e.resolve=function(e,r,t){var a=function(e,r){var t=e;if(r)for(var a in r)t[a]=r[a];return t}({scheme:"null"},t);return j(I(_(e,a),_(r,a),a,!0),a)},e.normalize=function(e,r){return"string"==typeof e?e=j(_(e,r),r):"object"===a(e)&&(e=_(j(e,r),r)),e},e.equal=function(e,r,t){return"string"==typeof e?e=j(_(e,t),t):"object"===a(e)&&(e=j(e,t)),"string"==typeof r?r=j(_(r,t),t):"object"===a(r)&&(r=j(r,t)),e===r},e.escapeComponent=function(e,r){return e&&e.toString().replace(r&&r.iri?h.ESCAPE:c.ESCAPE,m)},e.unescapeComponent=O,Object.defineProperty(e,"__esModule",{value:!0})}("object"==typeof t&&void 0!==r?t:a.URI=a.URI||{})},{}],ajv:[function(a,e,r){"use strict";var n=a("./compile"),d=a("./compile/resolve"),t=a("./cache"),f=a("./compile/schema_obj"),s=a("fast-json-stable-stringify"),o=a("./compile/formats"),i=a("./compile/rules"),l=a("./data"),u=a("./compile/util");(e.exports=g).prototype.validate=function(e,r){var t;if("string"==typeof e){if(!(t=this.getSchema(e)))throw new Error('no schema with key or ref "'+e+'"')}else{var a=this._addSchema(e);t=a.validate||this._compile(a)}var s=t(r);!0!==t.$async&&(this.errors=t.errors);return s},g.prototype.compile=function(e,r){var t=this._addSchema(e,void 0,r);return t.validate||this._compile(t)},g.prototype.addSchema=function(e,r,t,a){if(Array.isArray(e)){for(var s=0;s<e.length;s++)this.addSchema(e[s],void 0,t,a);return this}var o=this._getId(e);if(void 0!==o&&"string"!=typeof o)throw new Error("schema id must be string");return b(this,r=d.normalizeId(r||o)),this._schemas[r]=this._addSchema(e,t,a,!0),this},g.prototype.addMetaSchema=function(e,r,t){return this.addSchema(e,r,t,!0),this},g.prototype.validateSchema=function(e,r){var t=e.$schema;if(void 0!==t&&"string"!=typeof t)throw new Error("$schema must be a string");if(!(t=t||this._opts.defaultMeta||(a=this,s=a._opts.meta,a._opts.defaultMeta="object"==typeof s?a._getId(s)||s:a.getSchema(p)?p:void 0,a._opts.defaultMeta)))return this.logger.warn("meta-schema not available"),!(this.errors=null);var a,s;var o,i=this._formats.uri;this._formats.uri="function"==typeof i?this._schemaUriFormatFunc:this._schemaUriFormat;try{o=this.validate(t,e)}finally{this._formats.uri=i}if(!o&&r){var n="schema is invalid: "+this.errorsText();if("log"!=this._opts.validateSchema)throw new Error(n);this.logger.error(n)}return o},g.prototype.getSchema=function(e){var r=y(this,e);switch(typeof r){case"object":return r.validate||this._compile(r);case"string":return this.getSchema(r);case"undefined":return function(e,r){var t=d.schema.call(e,{schema:{}},r);if(t){var a=t.schema,s=t.root,o=t.baseId,i=n.call(e,a,s,void 0,o);return e._fragments[r]=new f({ref:r,fragment:!0,schema:a,root:s,baseId:o,validate:i}),i}}(this,e)}},g.prototype.removeSchema=function(e){if(e instanceof RegExp)return P(this,this._schemas,e),P(this,this._refs,e),this;switch(typeof e){case"undefined":return P(this,this._schemas),P(this,this._refs),this._cache.clear(),this;case"string":var r=y(this,e);return r&&this._cache.del(r.cacheKey),delete this._schemas[e],delete this._refs[e],this;case"object":var t=this._opts.serialize,a=t?t(e):e;this._cache.del(a);var s=this._getId(e);s&&(s=d.normalizeId(s),delete this._schemas[s],delete this._refs[s])}return this},g.prototype.addFormat=function(e,r){"string"==typeof r&&(r=new RegExp(r));return this._formats[e]=r,this},g.prototype.errorsText=function(e,r){if(!(e=e||this.errors))return"No errors";for(var t=void 0===(r=r||{}).separator?", ":r.separator,a=void 0===r.dataVar?"data":r.dataVar,s="",o=0;o<e.length;o++){var i=e[o];i&&(s+=a+i.dataPath+" "+i.message+t)}return s.slice(0,-t.length)},g.prototype._addSchema=function(e,r,t,a){if("object"!=typeof e&&"boolean"!=typeof e)throw new Error("schema should be object or boolean");var s=this._opts.serialize,o=s?s(e):e,i=this._cache.get(o);if(i)return i;a=a||!1!==this._opts.addUsedSchema;var n=d.normalizeId(this._getId(e));n&&a&&b(this,n);var l,u=!1!==this._opts.validateSchema&&!r;u&&!(l=n&&n==d.normalizeId(e.$schema))&&this.validateSchema(e,!0);var c=d.ids.call(this,e),h=new f({id:n,schema:e,localRefs:c,cacheKey:o,meta:t});"#"!=n[0]&&a&&(this._refs[n]=h);this._cache.put(o,h),u&&l&&this.validateSchema(e,!0);return h},g.prototype._compile=function(t,e){if(t.compiling)return(t.validate=s).schema=t.schema,s.errors=null,s.root=e||s,!0===t.schema.$async&&(s.$async=!0),s;var r,a;t.compiling=!0,t.meta&&(r=this._opts,this._opts=this._metaOpts);try{a=n.call(this,t.schema,e,t.localRefs)}finally{t.compiling=!1,t.meta&&(this._opts=r)}return t.validate=a,t.refs=a.refs,t.refVal=a.refVal,t.root=a.root,a;function s(){var e=t.validate,r=e.apply(this,arguments);return s.errors=e.errors,r}},g.prototype.compileAsync=a("./compile/async");var c=a("./keyword");g.prototype.addKeyword=c.add,g.prototype.getKeyword=c.get,g.prototype.removeKeyword=c.remove;var h=a("./compile/error_classes");g.ValidationError=h.Validation,g.MissingRefError=h.MissingRef,g.$dataMetaSchema=l;var p="http://json-schema.org/draft-07/schema",m=["removeAdditional","useDefaults","coerceTypes"],v=["/properties"];function g(e){if(!(this instanceof g))return new g(e);e=this._opts=u.copy(e)||{},function(e){var r=e._opts.logger;if(!1===r)e.logger={log:_,warn:_,error:_};else{if(void 0===r&&(r=console),!("object"==typeof r&&r.log&&r.warn&&r.error))throw new Error("logger must implement log, warn and error methods");e.logger=r}}(this),this._schemas={},this._refs={},this._fragments={},this._formats=o(e.format);var r=this._schemaUriFormat=this._formats["uri-reference"];this._schemaUriFormatFunc=function(e){return r.test(e)},this._cache=e.cache||new t,this._loadingSchemas={},this._compilations=[],this.RULES=i(),this._getId=function(e){switch(e.schemaId){case"auto":return S;case"id":return E;default:return w}}(e),e.loopRequired=e.loopRequired||1/0,"property"==e.errorDataPath&&(e._errorDataPathProperty=!0),void 0===e.serialize&&(e.serialize=s),this._metaOpts=function(e){for(var r=u.copy(e._opts),t=0;t<m.length;t++)delete r[m[t]];return r}(this),e.formats&&function(e){for(var r in e._opts.formats){var t=e._opts.formats[r];e.addFormat(r,t)}}(this),function(e){var r;e._opts.$data&&(r=a("./refs/data.json"),e.addMetaSchema(r,r.$id,!0));if(!1===e._opts.meta)return;var t=a("./refs/json-schema-draft-07.json");e._opts.$data&&(t=l(t,v));e.addMetaSchema(t,p,!0),e._refs["http://json-schema.org/schema"]=p}(this),"object"==typeof e.meta&&this.addMetaSchema(e.meta),function(e){var r=e._opts.schemas;if(!r)return;if(Array.isArray(r))e.addSchema(r);else for(var t in r)e.addSchema(r[t],t)}(this)}function y(e,r){return r=d.normalizeId(r),e._schemas[r]||e._refs[r]||e._fragments[r]}function P(e,r,t){for(var a in r){var s=r[a];s.meta||t&&!t.test(a)||(e._cache.del(s.cacheKey),delete r[a])}}function E(e){return e.$id&&this.logger.warn("schema $id ignored",e.$id),e.id}function w(e){return e.id&&this.logger.warn("schema id ignored",e.id),e.$id}function S(e){if(e.$id&&e.id&&e.$id!=e.id)throw new Error("schema $id is different from id");return e.$id||e.id}function b(e,r){if(e._schemas[r]||e._refs[r])throw new Error('schema with key or id "'+r+'" already exists')}function _(){}},{"./cache":1,"./compile":5,"./compile/async":2,"./compile/error_classes":3,"./compile/formats":4,"./compile/resolve":6,"./compile/rules":7,"./compile/schema_obj":8,"./compile/util":10,"./data":11,"./keyword":38,"./refs/data.json":39,"./refs/json-schema-draft-07.json":40,"fast-json-stable-stringify":42}]},{},[])("ajv")});
//# sourceMappingURL=ajv.min.js.map
var telemetrySchema = [{"$id":"http://api.ekstep.org/telemetry/actor","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/actor/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/actor/type","type":"string"}},"required":["type","id"]},{"$id":"http://api.ekstep.org/telemetry/assess","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["ASSESS"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["item","pass","score","resvalues","duration"],"properties":{"item":{"$ref":"http://api.ekstep.org/telemetry/question"},"index":{"$id":"http://api.ekstep.org/telemetry/edata/index","type":"number"},"pass":{"$id":"http://api.ekstep.org/telemetry/edata/pass","type":"string"},"score":{"$id":"http://api.ekstep.org/telemetry/edata/score","type":"number"},"resvalues":{"$id":"http://api.ekstep.org/telemetry/edata/resvalues","type":"array","items":{"type":"object"}},"duration":{"$id":"http://api.ekstep.org/telemetry/edata/duration","type":"number"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/audit","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["AUDIT"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"properties":{"props":{"$id":"http://api.ekstep.org/telemetry/edata/props","type":"array","items":{"type":"string"}},"state":{"$id":"http://api.ekstep.org/telemetry/edata/state","type":"string"},"prevstate":{"$id":"http://api.ekstep.org/telemetry/edata/prevstate","type":"string"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/cdata","type":"array","items":{"type":"object","properties":{"type":{"$id":"http://api.ekstep.org/telemetry/cdata/type","type":"string"},"id":{"$id":"http://api.ekstep.org/telemetry/cdata/id","type":"string"}},"additionalProperties":false,"required":["type","id"]}},{"$id":"http://api.ekstep.org/telemetry/common","type":"object","properties":{"ets":{"$id":"http://api.ekstep.org/telemetry/ets","type":"number","format":"date-time"},"ver":{"$id":"http://api.ekstep.org/telemetry/ver","type":"string","enum":["3.0"]},"mid":{"$id":"http://api.ekstep.org/telemetry/mid","type":"string","minLength":1},"actor":{"$ref":"http://api.ekstep.org/telemetry/actor"},"context":{"$ref":"http://api.ekstep.org/telemetry/context"},"object":{"$ref":"http://api.ekstep.org/telemetry/object"},"tags":{"type":"array","items":{"type":"string"}}}},{"$id":"http://api.ekstep.org/telemetry/context","type":"object","properties":{"channel":{"$id":"http://api.ekstep.org/telemetry/context/channel","type":"string","minLength":1},"pdata":{"$ref":"http://api.ekstep.org/telemetry/pdata"},"env":{"$id":"http://api.ekstep.org/telemetry/context/env","type":"string"},"sid":{"$id":"http://api.ekstep.org/telemetry/context/sid","type":"string"},"did":{"$id":"http://api.ekstep.org/telemetry/context/did","type":"string"},"cdata":{"$ref":"http://api.ekstep.org/telemetry/cdata"}},"required":["channel","env","pdata"]},{"$id":"http://api.ekstep.org/telemetry/dspec","type":"object","properties":{"os":{"$id":"http://api.ekstep.org/telemetry/dspec/os","type":"string"},"make":{"$id":"http://api.ekstep.org/telemetry/dspec/make","type":"string"},"id":{"$id":"http://api.ekstep.org/telemetry/dspec/id","type":"string"},"mem":{"$id":"http://api.ekstep.org/telemetry/dspec/mem","type":"number","minimum":-1},"idisk":{"$id":"http://api.ekstep.org/telemetry/dspec/idisk","type":"number","minimum":-1},"edisk":{"$id":"http://api.ekstep.org/telemetry/dspec/edisk","type":"number","minimum":-1},"scrn":{"$id":"http://api.ekstep.org/telemetry/dspec/scrn","type":"number","minimum":-1},"camera":{"$id":"http://api.ekstep.org/telemetry/dspec/camera","type":"string"},"cpu":{"$id":"http://api.ekstep.org/telemetry/dspec/cpu","type":"string"},"sims":{"$id":"http://api.ekstep.org/telemetry/dspec/sims","type":"number","minimum":-1},"cap":{"$id":"http://api.ekstep.org/telemetry/dspec/cap","type":"array","items":{"type":"string"}}}},{"$id":"http://api.ekstep.org/telemetry/end","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["END"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"mode":{"$id":"http://api.ekstep.org/telemetry/edata/mode","type":"string"},"duration":{"$id":"http://api.ekstep.org/telemetry/edata/duration","type":"number"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"},"summary":{"$id":"http://api.ekstep.org/telemetry/edata/summary","type":"array","items":{"type":"object"}}}}}}]},{"$id":"http://api.ekstep.org/telemetry/error","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["ERROR"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["err","errtype","stacktrace"],"properties":{"err":{"$id":"http://api.ekstep.org/telemetry/edata/err","type":"string"},"errtype":{"$id":"http://api.ekstep.org/telemetry/edata/errtype","type":"string"},"stacktrace":{"$id":"http://api.ekstep.org/telemetry/edata/stacktrace","type":"string"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"},"object":{"$ref":"http://api.ekstep.org/telemetry/inlineobject"},"plugin":{"$ref":"http://api.ekstep.org/telemetry/plugin"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/exdata","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["EXDATA"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"data":{"$id":"http://api.ekstep.org/telemetry/edata/data","type":"string"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/feedback","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["FEEDBACK"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"properties":{"rating":{"$id":"http://api.ekstep.org/telemetry/edata/rating","type":"number"},"comments":{"$id":"http://api.ekstep.org/telemetry/edata/comments","type":"string"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/heartbeat","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["HEARTBEAT"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object"}}}]},{"$id":"http://api.ekstep.org/telemetry/impression","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["IMPRESSION"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type","pageid","uri"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"subtype":{"$id":"http://api.ekstep.org/telemetry/edata/subtype","type":"string"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"},"uri":{"$id":"http://api.ekstep.org/telemetry/edata/uri","type":"string"},"duration":{"$id":"http://api.ekstep.org/telemetry/edata/duration","type":"number"},"visits":{"$id":"http://api.ekstep.org/telemetry/edata/visits","type":"array","items":{"type":"object","properties":{"objid":{"$id":"http://api.ekstep.org/telemetry/edata/visits/objid","type":"string"},"objtype":{"$id":"http://api.ekstep.org/telemetry/edata/visits/objtype","type":"string"},"objver":{"$id":"http://api.ekstep.org/telemetry/edata/visits/objver","type":"string"},"section":{"$id":"http://api.ekstep.org/telemetry/edata/visits/section","type":"string"},"index":{"$id":"http://api.ekstep.org/telemetry/edata/visits/index","type":"number"}},"additionalProperties":false,"required":["objid","objtype"]}}}}}}]},{"$id":"http://api.ekstep.org/telemetry/inlineobject","type":"object","additionalProperties":false,"required":["id","type","ver"],"properties":{"id":{"$id":"http://api.ekstep.org/telemetry/inlineobject/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/inlineobject/type","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/inlineobject/ver","type":"string"},"subtype":{"$id":"http://api.ekstep.org/telemetry/inlineobject/subtype","type":"string"},"name":{"$id":"http://api.ekstep.org/telemetry/inlineobject/name","type":"string"},"code":{"$id":"http://api.ekstep.org/telemetry/inlineobject/code","type":"string"},"parent":{"$ref":"http://api.ekstep.org/telemetry/parent"}}},{"$id":"http://api.ekstep.org/telemetry/interact","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["INTERACT"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type","id"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"subtype":{"$id":"http://api.ekstep.org/telemetry/edata/subtype","type":"string"},"id":{"$id":"http://api.ekstep.org/telemetry/edata/id","type":"string"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"},"duration":{"$id":"http://api.ekstep.org/telemetry/edata/duration","type":"number"},"target":{"$ref":"http://api.ekstep.org/telemetry/target"},"plugin":{"$ref":"http://api.ekstep.org/telemetry/plugin"},"extra":{"$id":"http://api.ekstep.org/telemetry/edata/extra","type":"object"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/interrupt","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["INTERRUPT"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/items","type":"array","items":{"type":"object","additionalProperties":false,"properties":{"id":{"$id":"http://api.ekstep.org/telemetry/items/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/items/type","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/items/ver","type":"string"},"params":{"$id":"http://api.ekstep.org/telemetry/items/params","type":"array","items":{"type":"object"}},"origin":{"$id":"http://api.ekstep.org/telemetry/items/origin","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/items/origin/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/items/origin/type","type":"string"}}},"to":{"$id":"http://api.ekstep.org/telemetry/items/to","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/items/to/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/items/to/type","type":"string"}}}}}},{"$id":"http://api.ekstep.org/telemetry/log","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["LOG"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type","level","message"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"level":{"$id":"http://api.ekstep.org/telemetry/edata/level","type":"string"},"message":{"$id":"http://api.ekstep.org/telemetry/edata/message","type":"string"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"},"params":{"$id":"http://api.ekstep.org/telemetry/edata/params","type":"array","items":{"type":"object"}}}}}}]},{"$id":"http://api.ekstep.org/telemetry/object","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/object/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/object/type","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/object/ver","type":"string"},"rollup":{"$ref":"http://api.ekstep.org/telemetry/rollup"}}},{"$id":"http://api.ekstep.org/telemetry/parent","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/parent/id","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/parent/type","type":"string"}}},{"$id":"http://api.ekstep.org/telemetry/pdata","type":"object","properties":{"id":{"$id":"http://api.ekstep.org/telemetry/pdata/id","type":"string"},"pid":{"$id":"http://api.ekstep.org/telemetry/pdata/pid","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/pdata/ver","type":"string"}},"required":["id"]},{"$id":"http://api.ekstep.org/telemetry/plugin","type":"object","additionalProperties":false,"required":["id","ver"],"properties":{"id":{"$id":"http://api.ekstep.org/telemetry/plugin/id","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/plugin/ver","type":"string"},"category":{"$id":"http://api.ekstep.org/telemetry/plugin/category","type":"string"}}},{"$id":"http://api.ekstep.org/telemetry/question","type":"object","additionalProperties":false,"required":["id"],"properties":{"id":{"$id":"http://api.ekstep.org/telemetry/question/id","type":"string"},"maxscore":{"$id":"http://api.ekstep.org/telemetry/question/maxscore","type":"number"},"exlength":{"$id":"http://api.ekstep.org/telemetry/question/exlength","type":"number"},"params":{"$id":"http://api.ekstep.org/telemetry/question/params","type":"array","items":{"type":"object"}},"uri":{"$id":"http://api.ekstep.org/telemetry/question/uri","type":"string"},"desc":{"$id":"http://api.ekstep.org/telemetry/question/desc","type":"string"},"title":{"$id":"http://api.ekstep.org/telemetry/question/title","type":"string"},"mmc":{"$id":"http://api.ekstep.org/telemetry/question/mmc","type":"array","items":{"type":"string"}},"mc":{"$id":"http://api.ekstep.org/telemetry/question/mc","type":"array","items":{"type":"string"}}}},{"$id":"http://api.ekstep.org/telemetry/response","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["RESPONSE"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["target","type","values"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/type","type":"string"},"target":{"$ref":"http://api.ekstep.org/telemetry/target"},"values":{"type":"array","items":{"type":"object"}}}}}}]},{"$id":"http://api.ekstep.org/telemetry/rollup","type":"object","properties":{"l1":{"$id":"http://api.ekstep.org/telemetry/context/rollup/l1","type":"string"},"l2":{"$id":"http://api.ekstep.org/telemetry/context/rollup/l2","type":"string"},"l3":{"$id":"http://api.ekstep.org/telemetry/context/rollup/l3","type":"string"},"l4":{"$id":"http://api.ekstep.org/telemetry/context/rollup/l4","type":"string"}}},{"$id":"http://api.ekstep.org/telemetry/search","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["SEARCH"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["query","size","topn"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"query":{"$id":"http://api.ekstep.org/telemetry/edata/query","type":"string"},"filters":{"$id":"http://api.ekstep.org/telemetry/edata/filters","type":"object"},"sort":{"$id":"http://api.ekstep.org/telemetry/edata/sort","type":"object"},"correlationid":{"$id":"http://api.ekstep.org/telemetry/edata/correlationid","type":"string"},"size":{"$id":"http://api.ekstep.org/telemetry/edata/size","type":"number"},"topn":{"$id":"http://api.ekstep.org/telemetry/edata/topn","type":"array","items":{"type":"object"}}}}}}]},{"$id":"http://api.ekstep.org/telemetry/share","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["SHARE"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["items"],"properties":{"dir":{"$id":"http://api.ekstep.org/telemetry/edata/dir","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"items":{"$ref":"http://api.ekstep.org/telemetry/items"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/start","type":"object","required":["eid","ets","ver","mid","actor","context","edata"],"allOf":[{"$ref":"http://api.ekstep.org/telemetry/common"},{"properties":{"eid":{"$id":"http://api.ekstep.org/telemetry/eid","enum":["START"]},"edata":{"$id":"http://api.ekstep.org/telemetry/edata","type":"object","additionalProperties":false,"required":["type"],"properties":{"type":{"$id":"http://api.ekstep.org/telemetry/edata/type","type":"string"},"dspec":{"$ref":"http://api.ekstep.org/telemetry/dspec"},"uaspec":{"$ref":"http://api.ekstep.org/telemetry/uaspec"},"loc":{"$id":"http://api.ekstep.org/telemetry/edata/loc","type":"string"},"mode":{"$id":"http://api.ekstep.org/telemetry/edata/mode","type":"string"},"duration":{"$id":"http://api.ekstep.org/telemetry/edata/duration","type":"number"},"pageid":{"$id":"http://api.ekstep.org/telemetry/edata/pageid","type":"string"}}}}}]},{"$id":"http://api.ekstep.org/telemetry/target","type":"object","additionalProperties":false,"required":["id","ver","type"],"properties":{"id":{"$id":"http://api.ekstep.org/telemetry/target/id","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/target/ver","type":"string"},"type":{"$id":"http://api.ekstep.org/telemetry/target/type","type":"string"},"parent":{"$ref":"http://api.ekstep.org/telemetry/parent"}}},{"$id":"http://api.ekstep.org/telemetry/uaspec","type":"object","properties":{"agent":{"$id":"http://api.ekstep.org/telemetry/uaspec/agent","type":"string"},"ver":{"$id":"http://api.ekstep.org/telemetry/uaspec/ver","type":"string"},"system":{"$id":"http://api.ekstep.org/telemetry/uaspec/system","type":"string"},"platform":{"$id":"http://api.ekstep.org/telemetry/uaspec/platform","type":"string"},"raw":{"$id":"http://api.ekstep.org/telemetry/uaspec/raw","type":"string"}}}]
/**
 * @author Krushanu Mohapatra<Krushanu.Mohapatra@tarento.com>
 */

/****************************************
* UUID Library for Device ID generation *
*****************************************/


!function (e) { if ("object" == typeof exports && "undefined" != typeof module) module.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else { var r; r = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, r.uuidv1 = e() } }(function () { return function e(r, n, o) { function t(u, f) { if (!n[u]) { if (!r[u]) { var s = "function" == typeof require && require; if (!f && s) return s(u, !0); if (i) return i(u, !0); var d = new Error("Cannot find module '" + u + "'"); throw d.code = "MODULE_NOT_FOUND", d } var a = n[u] = { exports: {} }; r[u][0].call(a.exports, function (e) { var n = r[u][1][e]; return t(n ? n : e) }, a, a.exports, e, r, n, o) } return n[u].exports } for (var i = "function" == typeof require && require, u = 0; u < o.length; u++)t(o[u]); return t }({ 1: [function (e, r, n) { function o(e, r) { var n = r || 0, o = t; return o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + "-" + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] + o[e[n++]] } for (var t = [], i = 0; i < 256; ++i)t[i] = (i + 256).toString(16).substr(1); r.exports = o }, {}], 2: [function (e, r, n) { var o = "undefined" != typeof crypto && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && msCrypto.getRandomValues.bind(msCrypto); if (o) { var t = new Uint8Array(16); r.exports = function () { return o(t), t } } else { var i = new Array(16); r.exports = function () { for (var e, r = 0; r < 16; r++)0 === (3 & r) && (e = 4294967296 * Math.random()), i[r] = e >>> ((3 & r) << 3) & 255; return i } } }, {}], 3: [function (e, r, n) { function o(e, r, n) { var o = r && n || 0, a = r || []; e = e || {}; var c = e.node || t, l = void 0 !== e.clockseq ? e.clockseq : i; if (null == c || null == l) { var v = u(); null == c && (c = t = [1 | v[0], v[1], v[2], v[3], v[4], v[5]]), null == l && (l = i = 16383 & (v[6] << 8 | v[7])) } var p = void 0 !== e.msecs ? e.msecs : (new Date).getTime(), y = void 0 !== e.nsecs ? e.nsecs : d + 1, m = p - s + (y - d) / 1e4; if (m < 0 && void 0 === e.clockseq && (l = l + 1 & 16383), (m < 0 || p > s) && void 0 === e.nsecs && (y = 0), y >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec"); s = p, d = y, i = l, p += 122192928e5; var b = (1e4 * (268435455 & p) + y) % 4294967296; a[o++] = b >>> 24 & 255, a[o++] = b >>> 16 & 255, a[o++] = b >>> 8 & 255, a[o++] = 255 & b; var w = p / 4294967296 * 1e4 & 268435455; a[o++] = w >>> 8 & 255, a[o++] = 255 & w, a[o++] = w >>> 24 & 15 | 16, a[o++] = w >>> 16 & 255, a[o++] = l >>> 8 | 128, a[o++] = 255 & l; for (var x = 0; x < 6; ++x)a[o + x] = c[x]; return r ? r : f(a) } var t, i, u = e("./lib/rng"), f = e("./lib/bytesToUuid"), s = 0, d = 0; r.exports = o }, { "./lib/bytesToUuid": 1, "./lib/rng": 2 }] }, {}, [3])(3) });
var detectClient = function() {

  var nAgt = navigator.userAgent;
  var browserName = navigator.appName;
  var fullVersion = '' + parseFloat(navigator.appVersion);
  var nameOffset, verOffset, ix;

  // In Opera
  /* istanbul ignore next. Cannot test this as the test cases runs in phatomjs browser */
  if ((verOffset = nAgt.indexOf("Opera")) != -1) {
      browserName = "opera";
      fullVersion = nAgt.substring(verOffset + 6);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
          fullVersion = nAgt.substring(verOffset + 8);
  }
  // In MSIE
  else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
      browserName = "IE";
      fullVersion = nAgt.substring(verOffset + 5);
  }
  // In Chrome
  else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
      browserName = "chrome";
      fullVersion = nAgt.substring(verOffset + 7);
  }
  // In Safari
  else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
      browserName = "safari";
      fullVersion = nAgt.substring(verOffset + 7);
      if ((verOffset = nAgt.indexOf("Version")) != -1)
          fullVersion = nAgt.substring(verOffset + 8);
  }
  // In Firefox
  else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
      browserName = "firefox";
      fullVersion = nAgt.substring(verOffset + 8);
  }

  // trim the fullVersion string at semicolon/space if present
  /* istanbul ignore next. Cannot test this as the test cases runs in phatomjs browser */
  if ((ix = fullVersion.indexOf(";")) != -1)
      fullVersion = fullVersion.substring(0, ix);
  /* istanbul ignore next. Cannot test this as the test cases runs in phatomjs browser */
  if ((ix = fullVersion.indexOf(" ")) != -1)
      fullVersion = fullVersion.substring(0, ix);

  return { browser: browserName, browserver: fullVersion, os: navigator.platform };
}
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS = CryptoJS || function(s, p) {
    var m = {},
        l = m.lib = {},
        n = function() {},
        r = l.Base = {
            extend: function(b) {
                n.prototype = this;
                var h = new n;
                b && h.mixIn(b);
                h.hasOwnProperty("init") || (h.init = function() {
                    h.$super.init.apply(this, arguments)
                });
                h.init.prototype = h;
                h.$super = this;
                return h
            },
            create: function() {
                var b = this.extend();
                b.init.apply(b, arguments);
                return b
            },
            init: function() {},
            mixIn: function(b) {
                for (var h in b) b.hasOwnProperty(h) && (this[h] = b[h]);
                b.hasOwnProperty("toString") && (this.toString = b.toString)
            },
            clone: function() {
                return this.init.prototype.extend(this)
            }
        },
        q = l.WordArray = r.extend({
            init: function(b, h) {
                b = this.words = b || [];
                this.sigBytes = h != p ? h : 4 * b.length
            },
            toString: function(b) {
                return (b || t).stringify(this)
            },
            concat: function(b) {
                var h = this.words,
                    a = b.words,
                    j = this.sigBytes;
                b = b.sigBytes;
                this.clamp();
                if (j % 4)
                    for (var g = 0; g < b; g++) h[j + g >>> 2] |= (a[g >>> 2] >>> 24 - 8 * (g % 4) & 255) << 24 - 8 * ((j + g) % 4);
                else if (65535 < a.length)
                    for (g = 0; g < b; g += 4) h[j + g >>> 2] = a[g >>> 2];
                else h.push.apply(h, a);
                this.sigBytes += b;
                return this
            },
            clamp: function() {
                var b = this.words,
                    h = this.sigBytes;
                b[h >>> 2] &= 4294967295 <<
                    32 - 8 * (h % 4);
                b.length = s.ceil(h / 4)
            },
            clone: function() {
                var b = r.clone.call(this);
                b.words = this.words.slice(0);
                return b
            },
            random: function(b) {
                for (var h = [], a = 0; a < b; a += 4) h.push(4294967296 * s.random() | 0);
                return new q.init(h, b)
            }
        }),
        v = m.enc = {},
        t = v.Hex = {
            stringify: function(b) {
                var a = b.words;
                b = b.sigBytes;
                for (var g = [], j = 0; j < b; j++) {
                    var k = a[j >>> 2] >>> 24 - 8 * (j % 4) & 255;
                    g.push((k >>> 4).toString(16));
                    g.push((k & 15).toString(16))
                }
                return g.join("")
            },
            parse: function(b) {
                for (var a = b.length, g = [], j = 0; j < a; j += 2) g[j >>> 3] |= parseInt(b.substr(j,
                    2), 16) << 24 - 4 * (j % 8);
                return new q.init(g, a / 2)
            }
        },
        a = v.Latin1 = {
            stringify: function(b) {
                var a = b.words;
                b = b.sigBytes;
                for (var g = [], j = 0; j < b; j++) g.push(String.fromCharCode(a[j >>> 2] >>> 24 - 8 * (j % 4) & 255));
                return g.join("")
            },
            parse: function(b) {
                for (var a = b.length, g = [], j = 0; j < a; j++) g[j >>> 2] |= (b.charCodeAt(j) & 255) << 24 - 8 * (j % 4);
                return new q.init(g, a)
            }
        },
        u = v.Utf8 = {
            stringify: function(b) {
                try {
                    return decodeURIComponent(escape(a.stringify(b)))
                } catch (g) {
                    throw Error("Malformed UTF-8 data");
                }
            },
            parse: function(b) {
                return a.parse(unescape(encodeURIComponent(b)))
            }
        },
        g = l.BufferedBlockAlgorithm = r.extend({
            reset: function() {
                this._data = new q.init;
                this._nDataBytes = 0
            },
            _append: function(b) {
                "string" == typeof b && (b = u.parse(b));
                this._data.concat(b);
                this._nDataBytes += b.sigBytes
            },
            _process: function(b) {
                var a = this._data,
                    g = a.words,
                    j = a.sigBytes,
                    k = this.blockSize,
                    m = j / (4 * k),
                    m = b ? s.ceil(m) : s.max((m | 0) - this._minBufferSize, 0);
                b = m * k;
                j = s.min(4 * b, j);
                if (b) {
                    for (var l = 0; l < b; l += k) this._doProcessBlock(g, l);
                    l = g.splice(0, b);
                    a.sigBytes -= j
                }
                return new q.init(l, j)
            },
            clone: function() {
                var b = r.clone.call(this);
                b._data = this._data.clone();
                return b
            },
            _minBufferSize: 0
        });
    l.Hasher = g.extend({
        cfg: r.extend(),
        init: function(b) {
            this.cfg = this.cfg.extend(b);
            this.reset()
        },
        reset: function() {
            g.reset.call(this);
            this._doReset()
        },
        update: function(b) {
            this._append(b);
            this._process();
            return this
        },
        finalize: function(b) {
            b && this._append(b);
            return this._doFinalize()
        },
        blockSize: 16,
        _createHelper: function(b) {
            return function(a, g) {
                return (new b.init(g)).finalize(a)
            }
        },
        _createHmacHelper: function(b) {
            return function(a, g) {
                return (new k.HMAC.init(b,
                    g)).finalize(a)
            }
        }
    });
    var k = m.algo = {};
    return m
}(Math);
(function(s) {
    function p(a, k, b, h, l, j, m) {
        a = a + (k & b | ~k & h) + l + m;
        return (a << j | a >>> 32 - j) + k
    }

    function m(a, k, b, h, l, j, m) {
        a = a + (k & h | b & ~h) + l + m;
        return (a << j | a >>> 32 - j) + k
    }

    function l(a, k, b, h, l, j, m) {
        a = a + (k ^ b ^ h) + l + m;
        return (a << j | a >>> 32 - j) + k
    }

    function n(a, k, b, h, l, j, m) {
        a = a + (b ^ (k | ~h)) + l + m;
        return (a << j | a >>> 32 - j) + k
    }
    for (var r = CryptoJS, q = r.lib, v = q.WordArray, t = q.Hasher, q = r.algo, a = [], u = 0; 64 > u; u++) a[u] = 4294967296 * s.abs(s.sin(u + 1)) | 0;
    q = q.MD5 = t.extend({
        _doReset: function() {
            this._hash = new v.init([1732584193, 4023233417, 2562383102, 271733878])
        },
        _doProcessBlock: function(g, k) {
            for (var b = 0; 16 > b; b++) {
                var h = k + b,
                    w = g[h];
                g[h] = (w << 8 | w >>> 24) & 16711935 | (w << 24 | w >>> 8) & 4278255360
            }
            var b = this._hash.words,
                h = g[k + 0],
                w = g[k + 1],
                j = g[k + 2],
                q = g[k + 3],
                r = g[k + 4],
                s = g[k + 5],
                t = g[k + 6],
                u = g[k + 7],
                v = g[k + 8],
                x = g[k + 9],
                y = g[k + 10],
                z = g[k + 11],
                A = g[k + 12],
                B = g[k + 13],
                C = g[k + 14],
                D = g[k + 15],
                c = b[0],
                d = b[1],
                e = b[2],
                f = b[3],
                c = p(c, d, e, f, h, 7, a[0]),
                f = p(f, c, d, e, w, 12, a[1]),
                e = p(e, f, c, d, j, 17, a[2]),
                d = p(d, e, f, c, q, 22, a[3]),
                c = p(c, d, e, f, r, 7, a[4]),
                f = p(f, c, d, e, s, 12, a[5]),
                e = p(e, f, c, d, t, 17, a[6]),
                d = p(d, e, f, c, u, 22, a[7]),
                c = p(c, d, e, f, v, 7, a[8]),
                f = p(f, c, d, e, x, 12, a[9]),
                e = p(e, f, c, d, y, 17, a[10]),
                d = p(d, e, f, c, z, 22, a[11]),
                c = p(c, d, e, f, A, 7, a[12]),
                f = p(f, c, d, e, B, 12, a[13]),
                e = p(e, f, c, d, C, 17, a[14]),
                d = p(d, e, f, c, D, 22, a[15]),
                c = m(c, d, e, f, w, 5, a[16]),
                f = m(f, c, d, e, t, 9, a[17]),
                e = m(e, f, c, d, z, 14, a[18]),
                d = m(d, e, f, c, h, 20, a[19]),
                c = m(c, d, e, f, s, 5, a[20]),
                f = m(f, c, d, e, y, 9, a[21]),
                e = m(e, f, c, d, D, 14, a[22]),
                d = m(d, e, f, c, r, 20, a[23]),
                c = m(c, d, e, f, x, 5, a[24]),
                f = m(f, c, d, e, C, 9, a[25]),
                e = m(e, f, c, d, q, 14, a[26]),
                d = m(d, e, f, c, v, 20, a[27]),
                c = m(c, d, e, f, B, 5, a[28]),
                f = m(f, c,
                    d, e, j, 9, a[29]),
                e = m(e, f, c, d, u, 14, a[30]),
                d = m(d, e, f, c, A, 20, a[31]),
                c = l(c, d, e, f, s, 4, a[32]),
                f = l(f, c, d, e, v, 11, a[33]),
                e = l(e, f, c, d, z, 16, a[34]),
                d = l(d, e, f, c, C, 23, a[35]),
                c = l(c, d, e, f, w, 4, a[36]),
                f = l(f, c, d, e, r, 11, a[37]),
                e = l(e, f, c, d, u, 16, a[38]),
                d = l(d, e, f, c, y, 23, a[39]),
                c = l(c, d, e, f, B, 4, a[40]),
                f = l(f, c, d, e, h, 11, a[41]),
                e = l(e, f, c, d, q, 16, a[42]),
                d = l(d, e, f, c, t, 23, a[43]),
                c = l(c, d, e, f, x, 4, a[44]),
                f = l(f, c, d, e, A, 11, a[45]),
                e = l(e, f, c, d, D, 16, a[46]),
                d = l(d, e, f, c, j, 23, a[47]),
                c = n(c, d, e, f, h, 6, a[48]),
                f = n(f, c, d, e, u, 10, a[49]),
                e = n(e, f, c, d,
                    C, 15, a[50]),
                d = n(d, e, f, c, s, 21, a[51]),
                c = n(c, d, e, f, A, 6, a[52]),
                f = n(f, c, d, e, q, 10, a[53]),
                e = n(e, f, c, d, y, 15, a[54]),
                d = n(d, e, f, c, w, 21, a[55]),
                c = n(c, d, e, f, v, 6, a[56]),
                f = n(f, c, d, e, D, 10, a[57]),
                e = n(e, f, c, d, t, 15, a[58]),
                d = n(d, e, f, c, B, 21, a[59]),
                c = n(c, d, e, f, r, 6, a[60]),
                f = n(f, c, d, e, z, 10, a[61]),
                e = n(e, f, c, d, j, 15, a[62]),
                d = n(d, e, f, c, x, 21, a[63]);
            b[0] = b[0] + c | 0;
            b[1] = b[1] + d | 0;
            b[2] = b[2] + e | 0;
            b[3] = b[3] + f | 0
        },
        _doFinalize: function() {
            var a = this._data,
                k = a.words,
                b = 8 * this._nDataBytes,
                h = 8 * a.sigBytes;
            k[h >>> 5] |= 128 << 24 - h % 32;
            var l = s.floor(b /
                4294967296);
            k[(h + 64 >>> 9 << 4) + 15] = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360;
            k[(h + 64 >>> 9 << 4) + 14] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
            a.sigBytes = 4 * (k.length + 1);
            this._process();
            a = this._hash;
            k = a.words;
            for (b = 0; 4 > b; b++) h = k[b], k[b] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
            return a
        },
        clone: function() {
            var a = t.clone.call(this);
            a._hash = this._hash.clone();
            return a
        }
    });
    r.MD5 = t._createHelper(q);
    r.HmacMD5 = t._createHmacHelper(q)
})(Math);
!function (r, u) { "use strict"; var c = "function", i = "undefined", m = "object", s = "model", e = "name", o = "type", n = "vendor", a = "version", d = "architecture", t = "console", l = "mobile", w = "tablet", b = "smarttv", p = "wearable", g = { extend: function (i, s) { var e = {}; for (var o in i) s[o] && s[o].length % 2 == 0 ? e[o] = s[o].concat(i[o]) : e[o] = i[o]; return e }, has: function (i, s) { return "string" == typeof i && -1 !== s.toLowerCase().indexOf(i.toLowerCase()) }, lowerize: function (i) { return i.toLowerCase() }, major: function (i) { return "string" == typeof i ? i.replace(/[^\d\.]/g, "").split(".")[0] : u }, trim: function (i) { return i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "") } }, f = { rgx: function (i, s) { for (var e, o, r, n, a, d, t = 0; t < s.length && !a;) { var l = s[t], w = s[t + 1]; for (e = o = 0; e < l.length && !a;)if (a = l[e++].exec(i)) for (r = 0; r < w.length; r++)d = a[++o], typeof (n = w[r]) === m && 0 < n.length ? 2 == n.length ? typeof n[1] == c ? this[n[0]] = n[1].call(this, d) : this[n[0]] = n[1] : 3 == n.length ? typeof n[1] !== c || n[1].exec && n[1].test ? this[n[0]] = d ? d.replace(n[1], n[2]) : u : this[n[0]] = d ? n[1].call(this, d, n[2]) : u : 4 == n.length && (this[n[0]] = d ? n[3].call(this, d.replace(n[1], n[2])) : u) : this[n] = d || u; t += 2 } }, str: function (i, s) { for (var e in s) if (typeof s[e] === m && 0 < s[e].length) { for (var o = 0; o < s[e].length; o++)if (g.has(s[e][o], i)) return "?" === e ? u : e } else if (g.has(s[e], i)) return "?" === e ? u : e; return i } }, h = { browser: { oldsafari: { version: { "1.0": "/8", 1.2: "/1", 1.3: "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" } } }, device: { amazon: { model: { "Fire Phone": ["SD", "KF"] } }, sprint: { model: { "Evo Shift 4G": "7373KT" }, vendor: { HTC: "APA", Sprint: "Sprint" } } }, os: { windows: { version: { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", 8.1: "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" } } } }, v = { browser: [[/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i], [e, a], [/(opios)[\/\s]+([\w\.]+)/i], [[e, "Opera Mini"], a], [/\s(opr)\/([\w\.]+)/i], [[e, "Opera"], a], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark)\/([\w\.-]+)/i], [e, a], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i], [[e, "IE"], a], [/(edge|edgios|edga)\/((\d+)?[\w\.]+)/i], [[e, "Edge"], a], [/(yabrowser)\/([\w\.]+)/i], [[e, "Yandex"], a], [/(puffin)\/([\w\.]+)/i], [[e, "Puffin"], a], [/(focus)\/([\w\.]+)/i], [[e, "Firefox Focus"], a], [/(opt)\/([\w\.]+)/i], [[e, "Opera Touch"], a], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i], [[e, "UCBrowser"], a], [/(comodo_dragon)\/([\w\.]+)/i], [[e, /_/g, " "], a], [/(micromessenger)\/([\w\.]+)/i], [[e, "WeChat"], a], [/(brave)\/([\w\.]+)/i], [[e, "Brave"], a], [/(qqbrowserlite)\/([\w\.]+)/i], [e, a], [/(QQ)\/([\d\.]+)/i], [e, a], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i], [e, a], [/(BIDUBrowser)[\/\s]?([\w\.]+)/i], [e, a], [/(2345Explorer)[\/\s]?([\w\.]+)/i], [e, a], [/(MetaSr)[\/\s]?([\w\.]+)/i], [e], [/(LBBROWSER)/i], [e], [/xiaomi\/miuibrowser\/([\w\.]+)/i], [a, [e, "MIUI Browser"]], [/;fbav\/([\w\.]+);/i], [a, [e, "Facebook"]], [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i], [e, a], [/headlesschrome(?:\/([\w\.]+)|\s)/i], [a, [e, "Chrome Headless"]], [/\swv\).+(chrome)\/([\w\.]+)/i], [[e, /(.+)/, "$1 WebView"], a], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[e, /(.+(?:g|us))(.+)/, "$1 $2"], a], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i], [a, [e, "Android Browser"]], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i], [e, a], [/(dolfin)\/([\w\.]+)/i], [[e, "Dolphin"], a], [/((?:android.+)crmo|crios)\/([\w\.]+)/i], [[e, "Chrome"], a], [/(coast)\/([\w\.]+)/i], [[e, "Opera Coast"], a], [/fxios\/([\w\.-]+)/i], [a, [e, "Firefox"]], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i], [a, [e, "Mobile Safari"]], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i], [a, e], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [[e, "GSA"], a], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i], [e, [a, f.str, h.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [e, a], [/(navigator|netscape)\/([\w\.-]+)/i], [[e, "Netscape"], a], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i], [e, a]], cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i], [[d, "amd64"]], [/(ia32(?=;))/i], [[d, g.lowerize]], [/((?:i[346]|x)86)[;\)]/i], [[d, "ia32"]], [/windows\s(ce|mobile);\sppc;/i], [[d, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i], [[d, /ower/, "", g.lowerize]], [/(sun4\w)[;\)]/i], [[d, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i], [[d, g.lowerize]]], device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i], [s, n, [o, w]], [/applecoremedia\/[\w\.]+ \((ipad)/], [s, [n, "Apple"], [o, w]], [/(apple\s{0,1}tv)/i], [[s, "Apple TV"], [n, "Apple"]], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i], [n, s, [o, w]], [/(kf[A-z]+)\sbuild\/.+silk\//i], [s, [n, "Amazon"], [o, w]], [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i], [[s, f.str, h.device.amazon.model], [n, "Amazon"], [o, l]], [/android.+aft([bms])\sbuild/i], [s, [n, "Amazon"], [o, b]], [/\((ip[honed|\s\w*]+);.+(apple)/i], [s, n, [o, l]], [/\((ip[honed|\s\w*]+);/i], [s, [n, "Apple"], [o, l]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i], [n, s, [o, l]], [/\(bb10;\s(\w+)/i], [s, [n, "BlackBerry"], [o, l]], [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [s, [n, "Asus"], [o, w]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[n, "Sony"], [s, "Xperia Tablet"], [o, w]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [s, [n, "Sony"], [o, l]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i], [n, s, [o, t]], [/android.+;\s(shield)\sbuild/i], [s, [n, "Nvidia"], [o, t]], [/(playstation\s[34portablevi]+)/i], [s, [n, "Sony"], [o, t]], [/(sprint\s(\w+))/i], [[n, f.str, h.device.sprint.vendor], [s, f.str, h.device.sprint.model], [o, l]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i], [n, s, [o, w]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i], [n, [s, /_/g, " "], [o, l]], [/(nexus\s9)/i], [s, [n, "HTC"], [o, w]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i], [s, [n, "Huawei"], [o, l]], [/(microsoft);\s(lumia[\s\w]+)/i], [n, s, [o, l]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i], [s, [n, "Microsoft"], [o, t]], [/(kin\.[onetw]{3})/i], [[s, /\./g, " "], [n, "Microsoft"], [o, l]], [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [s, [n, "Motorola"], [o, l]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [s, [n, "Motorola"], [o, w]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i], [[n, g.trim], [s, g.trim], [o, b]], [/hbbtv.+maple;(\d+)/i], [[s, /^/, "SmartTV"], [n, "Samsung"], [o, b]], [/\(dtv[\);].+(aquos)/i], [s, [n, "Sharp"], [o, b]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[n, "Samsung"], s, [o, w]], [/smart-tv.+(samsung)/i], [n, [o, b], s], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i, /sec-((sgh\w+))/i], [[n, "Samsung"], s, [o, l]], [/sie-(\w*)/i], [s, [n, "Siemens"], [o, l]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i], [[n, "Nokia"], s, [o, l]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i], [s, [n, "Acer"], [o, w]], [/android.+([vl]k\-?\d{3})\s+build/i], [s, [n, "LG"], [o, w]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i], [[n, "LG"], s, [o, w]], [/(lg) netcast\.tv/i], [n, s, [o, b]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i], [s, [n, "LG"], [o, l]], [/android.+(ideatab[a-z0-9\-\s]+)/i], [s, [n, "Lenovo"], [o, w]], [/linux;.+((jolla));/i], [n, s, [o, l]], [/((pebble))app\/[\d\.]+\s/i], [n, s, [o, p]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i], [n, s, [o, l]], [/crkey/i], [[s, "Chromecast"], [n, "Google"]], [/android.+;\s(glass)\s\d/i], [s, [n, "Google"], [o, p]], [/android.+;\s(pixel c)[\s)]/i], [s, [n, "Google"], [o, w]], [/android.+;\s(pixel( [23])?( xl)?)\s/i], [s, [n, "Google"], [o, l]], [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i], [[s, /_/g, " "], [n, "Xiaomi"], [o, l]], [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i], [[s, /_/g, " "], [n, "Xiaomi"], [o, w]], [/android.+;\s(m[1-5]\snote)\sbuild/i], [s, [n, "Meizu"], [o, w]], [/(mz)-([\w-]{2,})/i], [[n, "Meizu"], s, [o, l]], [/android.+a000(1)\s+build/i, /android.+oneplus\s(a\d{4})\s+build/i], [s, [n, "OnePlus"], [o, l]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i], [s, [n, "RCA"], [o, w]], [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i], [s, [n, "Dell"], [o, w]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i], [s, [n, "Verizon"], [o, w]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i], [[n, "Barnes & Noble"], s, [o, w]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i], [s, [n, "NuVision"], [o, w]], [/android.+;\s(k88)\sbuild/i], [s, [n, "ZTE"], [o, w]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i], [s, [n, "Swiss"], [o, l]], [/android.+[;\/]\s*(zur\d{3})\s+build/i], [s, [n, "Swiss"], [o, w]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i], [s, [n, "Zeki"], [o, w]], [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i], [[n, "Dragon Touch"], s, [o, w]], [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i], [s, [n, "Insignia"], [o, w]], [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i], [s, [n, "NextBook"], [o, w]], [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[n, "Voice"], s, [o, l]], [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i], [[n, "LvTel"], s, [o, l]], [/android.+;\s(PH-1)\s/i], [s, [n, "Essential"], [o, l]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i], [s, [n, "Envizen"], [o, w]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i], [n, s, [o, w]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i], [s, [n, "MachSpeed"], [o, w]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i], [n, s, [o, w]], [/android.+[;\/]\s*TU_(1491)\s+build/i], [s, [n, "Rotor"], [o, w]], [/android.+(KS(.+))\s+build/i], [s, [n, "Amazon"], [o, w]], [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i], [n, s, [o, w]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i], [[o, g.lowerize], n, s], [/(android[\w\.\s\-]{0,9});.+build/i], [s, [n, "Generic"]]], engine: [[/windows.+\sedge\/([\w\.]+)/i], [a, [e, "EdgeHTML"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i], [e, a], [/rv\:([\w\.]{1,9}).+(gecko)/i], [a, e]], os: [[/microsoft\s(windows)\s(vista|xp)/i], [e, a], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [e, [a, f.str, h.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[e, "Windows"], [a, f.str, h.os.windows.version]], [/\((bb)(10);/i], [[e, "BlackBerry"], a], [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]*)/i, /linux;.+(sailfish);/i], [e, a], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i], [[e, "Symbian"], a], [/\((series40);/i], [e], [/mozilla.+\(mobile;.+gecko.+firefox/i], [[e, "Firefox OS"], a], [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i], [e, a], [/(cros)\s[\w]+\s([\w\.]+\w)/i], [[e, "Chromium OS"], a], [/(sunos)\s?([\w\.\d]*)/i], [[e, "Solaris"], a], [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i], [e, a], [/(haiku)\s(\w+)/i], [e, a], [/cfnetwork\/.+darwin/i, /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i], [[a, /_/g, "."], [e, "iOS"]], [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i], [[e, "Mac OS"], [a, /_/g, "."]], [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i], [e, a]] }, x = function (i, s) { if ("object" == typeof i && (s = i, i = u), !(this instanceof x)) return new x(i, s).getResult(); var e = i || (r && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""), o = s ? g.extend(v, s) : v; return this.getBrowser = function () { var i = { name: u, version: u }; return f.rgx.call(i, e, o.browser), i.major = g.major(i.version), i }, this.getCPU = function () { var i = { architecture: u }; return f.rgx.call(i, e, o.cpu), i }, this.getDevice = function () { var i = { vendor: u, model: u, type: u }; return f.rgx.call(i, e, o.device), i }, this.getEngine = function () { var i = { name: u, version: u }; return f.rgx.call(i, e, o.engine), i }, this.getOS = function () { var i = { name: u, version: u }; return f.rgx.call(i, e, o.os), i }, this.getResult = function () { return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() } }, this.getUA = function () { return e }, this.setUA = function (i) { return e = i, this }, this }; x.VERSION = "0.7.19", x.BROWSER = { NAME: e, MAJOR: "major", VERSION: a }, x.CPU = { ARCHITECTURE: d }, x.DEVICE = { MODEL: s, VENDOR: n, TYPE: o, CONSOLE: t, MOBILE: l, SMARTTV: b, TABLET: w, WEARABLE: p, EMBEDDED: "embedded" }, x.ENGINE = { NAME: e, VERSION: a }, x.OS = { NAME: e, VERSION: a }, typeof exports !== i ? (typeof module !== i && module.exports && (exports = module.exports = x), exports.UAParser = x) : typeof define === c && define.amd ? define(function () { return x }) : r && (r.UAParser = x); var k = r && (r.jQuery || r.Zepto); if (typeof k !== i && !k.ua) { var y = new x; k.ua = y.getResult(), k.ua.get = function () { return y.getUA() }, k.ua.set = function (i) { y.setUA(i); var s = y.getResult(); for (var e in s) k.ua[e] = s[e] } } }("object" == typeof window ? window : this);
/*
* Fingerprintjs2 2.0.6 - Modern & flexible browser fingerprint library v2
* https://github.com/Valve/fingerprintjs2
* Copyright (c) 2015 Valentin Vasilyev (valentin.vasilyev@outlook.com)
* Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
* AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
* IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
* ARE DISCLAIMED. IN NO EVENT SHALL VALENTIN VASILYEV BE LIABLE FOR ANY
* DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
* (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
* LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
* ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
* (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
* THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
/* global define */
(function (name, context, definition) {
    'use strict'
    if (typeof window !== 'undefined' && typeof define === 'function' && define.amd) { define(definition) } else if (typeof module !== 'undefined' && module.exports) { module.exports = definition() } else if (context.exports) { context.exports = definition() } else { context[name] = definition() }
  })('Fingerprint2', this, function () {
    'use strict'

  /// MurmurHash3 related functions

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // added together as a 64bit int (as an array of two 32bit ints).
  //
    var x64Add = function (m, n) {
      m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
      n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
      var o = [0, 0, 0, 0]
      o[3] += m[3] + n[3]
      o[2] += o[3] >>> 16
      o[3] &= 0xffff
      o[2] += m[2] + n[2]
      o[1] += o[2] >>> 16
      o[2] &= 0xffff
      o[1] += m[1] + n[1]
      o[0] += o[1] >>> 16
      o[1] &= 0xffff
      o[0] += m[0] + n[0]
      o[0] &= 0xffff
      return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    }

  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // multiplied together as a 64bit int (as an array of two 32bit ints).
  //
    var x64Multiply = function (m, n) {
      m = [m[0] >>> 16, m[0] & 0xffff, m[1] >>> 16, m[1] & 0xffff]
      n = [n[0] >>> 16, n[0] & 0xffff, n[1] >>> 16, n[1] & 0xffff]
      var o = [0, 0, 0, 0]
      o[3] += m[3] * n[3]
      o[2] += o[3] >>> 16
      o[3] &= 0xffff
      o[2] += m[2] * n[3]
      o[1] += o[2] >>> 16
      o[2] &= 0xffff
      o[2] += m[3] * n[2]
      o[1] += o[2] >>> 16
      o[2] &= 0xffff
      o[1] += m[1] * n[3]
      o[0] += o[1] >>> 16
      o[1] &= 0xffff
      o[1] += m[2] * n[2]
      o[0] += o[1] >>> 16
      o[1] &= 0xffff
      o[1] += m[3] * n[1]
      o[0] += o[1] >>> 16
      o[1] &= 0xffff
      o[0] += (m[0] * n[3]) + (m[1] * n[2]) + (m[2] * n[1]) + (m[3] * n[0])
      o[0] &= 0xffff
      return [(o[0] << 16) | o[1], (o[2] << 16) | o[3]]
    }
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) rotated left by that number of positions.
  //
    var x64Rotl = function (m, n) {
      n %= 64
      if (n === 32) {
        return [m[1], m[0]]
      } else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), (m[1] << n) | (m[0] >>> (32 - n))]
      } else {
        n -= 32
        return [(m[1] << n) | (m[0] >>> (32 - n)), (m[0] << n) | (m[1] >>> (32 - n))]
      }
    }
  //
  // Given a 64bit int (as an array of two 32bit ints) and an int
  // representing a number of bit positions, returns the 64bit int (as an
  // array of two 32bit ints) shifted left by that number of positions.
  //
    var x64LeftShift = function (m, n) {
      n %= 64
      if (n === 0) {
        return m
      } else if (n < 32) {
        return [(m[0] << n) | (m[1] >>> (32 - n)), m[1] << n]
      } else {
        return [m[1] << (n - 32), 0]
      }
    }
  //
  // Given two 64bit ints (as an array of two 32bit ints) returns the two
  // xored together as a 64bit int (as an array of two 32bit ints).
  //
    var x64Xor = function (m, n) {
      return [m[0] ^ n[0], m[1] ^ n[1]]
    }
  //
  // Given a block, returns murmurHash3's final x64 mix of that block.
  // (`[0, h[0] >>> 1]` is a 33 bit unsigned right shift. This is the
  // only place where we need to right shift 64bit ints.)
  //
    var x64Fmix = function (h) {
      h = x64Xor(h, [0, h[0] >>> 1])
      h = x64Multiply(h, [0xff51afd7, 0xed558ccd])
      h = x64Xor(h, [0, h[0] >>> 1])
      h = x64Multiply(h, [0xc4ceb9fe, 0x1a85ec53])
      h = x64Xor(h, [0, h[0] >>> 1])
      return h
    }

  //
  // Given a string and an optional seed as an int, returns a 128 bit
  // hash using the x64 flavor of MurmurHash3, as an unsigned hex.
  //
    var x64hash128 = function (key, seed) {
      key = key || ''
      seed = seed || 0
      var remainder = key.length % 16
      var bytes = key.length - remainder
      var h1 = [0, seed]
      var h2 = [0, seed]
      var k1 = [0, 0]
      var k2 = [0, 0]
      var c1 = [0x87c37b91, 0x114253d5]
      var c2 = [0x4cf5ad43, 0x2745937f]
      for (var i = 0; i < bytes; i = i + 16) {
        k1 = [((key.charCodeAt(i + 4) & 0xff)) | ((key.charCodeAt(i + 5) & 0xff) << 8) | ((key.charCodeAt(i + 6) & 0xff) << 16) | ((key.charCodeAt(i + 7) & 0xff) << 24), ((key.charCodeAt(i) & 0xff)) | ((key.charCodeAt(i + 1) & 0xff) << 8) | ((key.charCodeAt(i + 2) & 0xff) << 16) | ((key.charCodeAt(i + 3) & 0xff) << 24)]
        k2 = [((key.charCodeAt(i + 12) & 0xff)) | ((key.charCodeAt(i + 13) & 0xff) << 8) | ((key.charCodeAt(i + 14) & 0xff) << 16) | ((key.charCodeAt(i + 15) & 0xff) << 24), ((key.charCodeAt(i + 8) & 0xff)) | ((key.charCodeAt(i + 9) & 0xff) << 8) | ((key.charCodeAt(i + 10) & 0xff) << 16) | ((key.charCodeAt(i + 11) & 0xff) << 24)]
        k1 = x64Multiply(k1, c1)
        k1 = x64Rotl(k1, 31)
        k1 = x64Multiply(k1, c2)
        h1 = x64Xor(h1, k1)
        h1 = x64Rotl(h1, 27)
        h1 = x64Add(h1, h2)
        h1 = x64Add(x64Multiply(h1, [0, 5]), [0, 0x52dce729])
        k2 = x64Multiply(k2, c2)
        k2 = x64Rotl(k2, 33)
        k2 = x64Multiply(k2, c1)
        h2 = x64Xor(h2, k2)
        h2 = x64Rotl(h2, 31)
        h2 = x64Add(h2, h1)
        h2 = x64Add(x64Multiply(h2, [0, 5]), [0, 0x38495ab5])
      }
      k1 = [0, 0]
      k2 = [0, 0]
      switch (remainder) {
        case 15:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 14)], 48))
        // fallthrough
        case 14:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 13)], 40))
        // fallthrough
        case 13:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 12)], 32))
        // fallthrough
        case 12:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 11)], 24))
        // fallthrough
        case 11:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 10)], 16))
        // fallthrough
        case 10:
          k2 = x64Xor(k2, x64LeftShift([0, key.charCodeAt(i + 9)], 8))
        // fallthrough
        case 9:
          k2 = x64Xor(k2, [0, key.charCodeAt(i + 8)])
          k2 = x64Multiply(k2, c2)
          k2 = x64Rotl(k2, 33)
          k2 = x64Multiply(k2, c1)
          h2 = x64Xor(h2, k2)
        // fallthrough
        case 8:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 7)], 56))
        // fallthrough
        case 7:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 6)], 48))
        // fallthrough
        case 6:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 5)], 40))
        // fallthrough
        case 5:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 4)], 32))
        // fallthrough
        case 4:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 3)], 24))
        // fallthrough
        case 3:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 2)], 16))
        // fallthrough
        case 2:
          k1 = x64Xor(k1, x64LeftShift([0, key.charCodeAt(i + 1)], 8))
        // fallthrough
        case 1:
          k1 = x64Xor(k1, [0, key.charCodeAt(i)])
          k1 = x64Multiply(k1, c1)
          k1 = x64Rotl(k1, 31)
          k1 = x64Multiply(k1, c2)
          h1 = x64Xor(h1, k1)
        // fallthrough
      }
      h1 = x64Xor(h1, [0, key.length])
      h2 = x64Xor(h2, [0, key.length])
      h1 = x64Add(h1, h2)
      h2 = x64Add(h2, h1)
      h1 = x64Fmix(h1)
      h2 = x64Fmix(h2)
      h1 = x64Add(h1, h2)
      h2 = x64Add(h2, h1)
      return ('00000000' + (h1[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h1[1] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[0] >>> 0).toString(16)).slice(-8) + ('00000000' + (h2[1] >>> 0).toString(16)).slice(-8)
    }

    var defaultOptions = {
      preprocessor: null,
      audio: {
        timeout: 1000,
          // On iOS 11, audio context can only be used in response to user interaction.
          // We require users to explicitly enable audio fingerprinting on iOS 11.
          // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
        excludeIOS11: true
      },
      fonts: {
        swfContainerId: 'fingerprintjs2',
        swfPath: 'flash/compiled/FontList.swf',
        userDefinedFonts: [],
        extendedJsFonts: false
      },
      screen: {
         // To ensure consistent fingerprints when users rotate their mobile devices
        detectScreenOrientation: true
      },
      plugins: {
        sortPluginsFor: [/palemoon/i],
        excludeIE: false
      },
      extraComponents: [],
      excludes: {
        // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
        'enumerateDevices': true,
        // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
        'pixelRatio': true,
        // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
        'doNotTrack': true,
        // uses js fonts already
        'fontsFlash': true
      },
      NOT_AVAILABLE: 'not available',
      ERROR: 'error',
      EXCLUDED: 'excluded'
    }

    var each = function (obj, iterator) {
      if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
        obj.forEach(iterator)
      } else if (obj.length === +obj.length) {
        for (var i = 0, l = obj.length; i < l; i++) {
          iterator(obj[i], i, obj)
        }
      } else {
        for (var key in obj) {
          if (obj.hasOwnProperty(key)) {
            iterator(obj[key], key, obj)
          }
        }
      }
    }

    var map = function (obj, iterator) {
      var results = []
      // Not using strict equality so that this acts as a
      // shortcut to checking for `null` and `undefined`.
      if (obj == null) {
        return results
      }
      if (Array.prototype.map && obj.map === Array.prototype.map) { return obj.map(iterator) }
      each(obj, function (value, index, list) {
        results.push(iterator(value, index, list))
      })
      return results
    }

    var extendSoft = function (target, source) {
      if (source == null) { return target }
      var value
      var key
      for (key in source) {
        value = source[key]
        if (value != null && !(Object.prototype.hasOwnProperty.call(target, key))) {
          target[key] = value
        }
      }
      return target
    }

  // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/enumerateDevices
    var enumerateDevicesKey = function (done, options) {
      if (!isEnumerateDevicesSupported()) {
        return done(options.NOT_AVAILABLE)
      }
      navigator.mediaDevices.enumerateDevices().then(function (devices) {
        done(devices.map(function (device) {
          return 'id=' + device.deviceId + ';gid=' + device.groupId + ';' + device.kind + ';' + device.label
        }))
      })
        .catch(function (error) {
          done(error)
        })
    }

    var isEnumerateDevicesSupported = function () {
      return (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices)
    }
  // Inspired by and based on https://github.com/cozylife/audio-fingerprint
    var audioKey = function (done, options) {
      var audioOptions = options.audio
      if (audioOptions.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) {
          // See comment for excludeUserAgent and https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
        return done(options.EXCLUDED)
      }

      var AudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext

      if (AudioContext == null) {
        return done(options.NOT_AVAILABLE)
      }

      var context = new AudioContext(1, 44100, 44100)

      var oscillator = context.createOscillator()
      oscillator.type = 'triangle'
      oscillator.frequency.setValueAtTime(10000, context.currentTime)

      var compressor = context.createDynamicsCompressor()
      each([
          ['threshold', -50],
          ['knee', 40],
          ['ratio', 12],
          ['reduction', -20],
          ['attack', 0],
          ['release', 0.25]
      ], function (item) {
        if (compressor[item[0]] !== undefined && typeof compressor[item[0]].setValueAtTime === 'function') {
          compressor[item[0]].setValueAtTime(item[1], context.currentTime)
        }
      })

      oscillator.connect(compressor)
      compressor.connect(context.destination)
      oscillator.start(0)
      context.startRendering()

      var audioTimeoutId = setTimeout(function () {
        console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".')
        context.oncomplete = function () {}
        context = null
        return done('audioTimeout')
      }, audioOptions.timeout)

      context.oncomplete = function (event) {
        var fingerprint
        try {
          clearTimeout(audioTimeoutId)
          fingerprint = event.renderedBuffer.getChannelData(0)
              .slice(4500, 5000)
              .reduce(function (acc, val) { return acc + Math.abs(val) }, 0)
              .toString()
          oscillator.disconnect()
          compressor.disconnect()
        } catch (error) {
          done(error)
          return
        }
        done(fingerprint)
      }
    }
    var UserAgent = function (done) {
      done(navigator.userAgent)
    }
    var languageKey = function (done, options) {
      done(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || options.NOT_AVAILABLE)
    }
    var colorDepthKey = function (done, options) {
      done(window.screen.colorDepth || options.NOT_AVAILABLE)
    }
    var deviceMemoryKey = function (done, options) {
      done(navigator.deviceMemory || options.NOT_AVAILABLE)
    }
    var pixelRatioKey = function (done, options) {
      done(window.devicePixelRatio || options.NOT_AVAILABLE)
    }
    var screenResolutionKey = function (done, options) {
      done(getScreenResolution(options))
    }
    var getScreenResolution = function (options) {
      var resolution = [window.screen.width, window.screen.height]
      if (options.screen.detectScreenOrientation) {
        resolution.sort().reverse()
      }
      return resolution
    }
    var availableScreenResolutionKey = function (done, options) {
      done(getAvailableScreenResolution(options))
    }
    var getAvailableScreenResolution = function (options) {
      if (window.screen.availWidth && window.screen.availHeight) {
        var available = [window.screen.availHeight, window.screen.availWidth]
        if (options.screen.detectScreenOrientation) {
          available.sort().reverse()
        }
        return available
      }
      // headless browsers
      return options.NOT_AVAILABLE
    }
    var timezoneOffset = function (done) {
      done(new Date().getTimezoneOffset())
    }
    var timezone = function (done, options) {
      if (window.Intl && window.Intl.DateTimeFormat) {
        done(new window.Intl.DateTimeFormat().resolvedOptions().timeZone)
        return
      }
      done(options.NOT_AVAILABLE)
    }
    var sessionStorageKey = function (done, options) {
      done(hasSessionStorage(options))
    }
    var localStorageKey = function (done, options) {
      done(hasLocalStorage(options))
    }
    var indexedDbKey = function (done, options) {
      done(hasIndexedDB(options))
    }
    var addBehaviorKey = function (done) {
        // body might not be defined at this point or removed programmatically
      done(!!(document.body && document.body.addBehavior))
    }
    var openDatabaseKey = function (done) {
      done(!!window.openDatabase)
    }
    var cpuClassKey = function (done, options) {
      done(getNavigatorCpuClass(options))
    }
    var platformKey = function (done, options) {
      done(getNavigatorPlatform(options))
    }
    var doNotTrackKey = function (done, options) {
      done(getDoNotTrack(options))
    }
    var canvasKey = function (done, options) {
      if (isCanvasSupported()) {
        done(getCanvasFp(options))
        return
      }
      done(options.NOT_AVAILABLE)
    }
    var webglKey = function (done, options) {
      if (isWebGlSupported()) {
        done(getWebglFp())
        return
      }
      done(options.NOT_AVAILABLE)
    }
    var webglVendorAndRendererKey = function (done) {
      if (isWebGlSupported()) {
        done(getWebglVendorAndRenderer())
        return
      }
      done()
    }
    var adBlockKey = function (done) {
      done(getAdBlock())
    }
    var hasLiedLanguagesKey = function (done) {
      done(getHasLiedLanguages())
    }
    var hasLiedResolutionKey = function (done) {
      done(getHasLiedResolution())
    }
    var hasLiedOsKey = function (done) {
      done(getHasLiedOs())
    }
    var hasLiedBrowserKey = function (done) {
      done(getHasLiedBrowser())
    }
  // flash fonts (will increase fingerprinting time 20X to ~ 130-150ms)
    var flashFontsKey = function (done, options) {
      // we do flash if swfobject is loaded
      if (!hasSwfObjectLoaded()) {
        return done('swf object not loaded')
      }
      if (!hasMinFlashInstalled()) {
        return done('flash not installed')
      }
      if (!options.fonts.swfPath) {
        return done('missing options.fonts.swfPath')
      }
      loadSwfAndDetectFonts(function (fonts) {
        done(fonts)
      }, options)
    }
  // kudos to http://www.lalit.org/lab/javascript-css-font-detect/
    var jsFontsKey = function (done, options) {
        // a font will be compared against all the three default fonts.
        // and if it doesn't match all 3 then that font is not available.
      var baseFonts = ['monospace', 'sans-serif', 'serif']

      var fontList = [
        'Andale Mono', 'Arial', 'Arial Black', 'Arial Hebrew', 'Arial MT', 'Arial Narrow', 'Arial Rounded MT Bold', 'Arial Unicode MS',
        'Bitstream Vera Sans Mono', 'Book Antiqua', 'Bookman Old Style',
        'Calibri', 'Cambria', 'Cambria Math', 'Century', 'Century Gothic', 'Century Schoolbook', 'Comic Sans', 'Comic Sans MS', 'Consolas', 'Courier', 'Courier New',
        'Geneva', 'Georgia',
        'Helvetica', 'Helvetica Neue',
        'Impact',
        'Lucida Bright', 'Lucida Calligraphy', 'Lucida Console', 'Lucida Fax', 'LUCIDA GRANDE', 'Lucida Handwriting', 'Lucida Sans', 'Lucida Sans Typewriter', 'Lucida Sans Unicode',
        'Microsoft Sans Serif', 'Monaco', 'Monotype Corsiva', 'MS Gothic', 'MS Outlook', 'MS PGothic', 'MS Reference Sans Serif', 'MS Sans Serif', 'MS Serif', 'MYRIAD', 'MYRIAD PRO',
        'Palatino', 'Palatino Linotype',
        'Segoe Print', 'Segoe Script', 'Segoe UI', 'Segoe UI Light', 'Segoe UI Semibold', 'Segoe UI Symbol',
        'Tahoma', 'Times', 'Times New Roman', 'Times New Roman PS', 'Trebuchet MS',
        'Verdana', 'Wingdings', 'Wingdings 2', 'Wingdings 3'
      ]

      if (options.fonts.extendedJsFonts) {
        var extendedFontList = [
          'Abadi MT Condensed Light', 'Academy Engraved LET', 'ADOBE CASLON PRO', 'Adobe Garamond', 'ADOBE GARAMOND PRO', 'Agency FB', 'Aharoni', 'Albertus Extra Bold', 'Albertus Medium', 'Algerian', 'Amazone BT', 'American Typewriter',
          'American Typewriter Condensed', 'AmerType Md BT', 'Andalus', 'Angsana New', 'AngsanaUPC', 'Antique Olive', 'Aparajita', 'Apple Chancery', 'Apple Color Emoji', 'Apple SD Gothic Neo', 'Arabic Typesetting', 'ARCHER',
          'ARNO PRO', 'Arrus BT', 'Aurora Cn BT', 'AvantGarde Bk BT', 'AvantGarde Md BT', 'AVENIR', 'Ayuthaya', 'Bandy', 'Bangla Sangam MN', 'Bank Gothic', 'BankGothic Md BT', 'Baskerville',
          'Baskerville Old Face', 'Batang', 'BatangChe', 'Bauer Bodoni', 'Bauhaus 93', 'Bazooka', 'Bell MT', 'Bembo', 'Benguiat Bk BT', 'Berlin Sans FB', 'Berlin Sans FB Demi', 'Bernard MT Condensed', 'BernhardFashion BT', 'BernhardMod BT', 'Big Caslon', 'BinnerD',
          'Blackadder ITC', 'BlairMdITC TT', 'Bodoni 72', 'Bodoni 72 Oldstyle', 'Bodoni 72 Smallcaps', 'Bodoni MT', 'Bodoni MT Black', 'Bodoni MT Condensed', 'Bodoni MT Poster Compressed',
          'Bookshelf Symbol 7', 'Boulder', 'Bradley Hand', 'Bradley Hand ITC', 'Bremen Bd BT', 'Britannic Bold', 'Broadway', 'Browallia New', 'BrowalliaUPC', 'Brush Script MT', 'Californian FB', 'Calisto MT', 'Calligrapher', 'Candara',
          'CaslonOpnface BT', 'Castellar', 'Centaur', 'Cezanne', 'CG Omega', 'CG Times', 'Chalkboard', 'Chalkboard SE', 'Chalkduster', 'Charlesworth', 'Charter Bd BT', 'Charter BT', 'Chaucer',
          'ChelthmITC Bk BT', 'Chiller', 'Clarendon', 'Clarendon Condensed', 'CloisterBlack BT', 'Cochin', 'Colonna MT', 'Constantia', 'Cooper Black', 'Copperplate', 'Copperplate Gothic', 'Copperplate Gothic Bold',
          'Copperplate Gothic Light', 'CopperplGoth Bd BT', 'Corbel', 'Cordia New', 'CordiaUPC', 'Cornerstone', 'Coronet', 'Cuckoo', 'Curlz MT', 'DaunPenh', 'Dauphin', 'David', 'DB LCD Temp', 'DELICIOUS', 'Denmark',
          'DFKai-SB', 'Didot', 'DilleniaUPC', 'DIN', 'DokChampa', 'Dotum', 'DotumChe', 'Ebrima', 'Edwardian Script ITC', 'Elephant', 'English 111 Vivace BT', 'Engravers MT', 'EngraversGothic BT', 'Eras Bold ITC', 'Eras Demi ITC', 'Eras Light ITC', 'Eras Medium ITC',
          'EucrosiaUPC', 'Euphemia', 'Euphemia UCAS', 'EUROSTILE', 'Exotc350 Bd BT', 'FangSong', 'Felix Titling', 'Fixedsys', 'FONTIN', 'Footlight MT Light', 'Forte',
          'FrankRuehl', 'Fransiscan', 'Freefrm721 Blk BT', 'FreesiaUPC', 'Freestyle Script', 'French Script MT', 'FrnkGothITC Bk BT', 'Fruitger', 'FRUTIGER',
          'Futura', 'Futura Bk BT', 'Futura Lt BT', 'Futura Md BT', 'Futura ZBlk BT', 'FuturaBlack BT', 'Gabriola', 'Galliard BT', 'Gautami', 'Geeza Pro', 'Geometr231 BT', 'Geometr231 Hv BT', 'Geometr231 Lt BT', 'GeoSlab 703 Lt BT',
          'GeoSlab 703 XBd BT', 'Gigi', 'Gill Sans', 'Gill Sans MT', 'Gill Sans MT Condensed', 'Gill Sans MT Ext Condensed Bold', 'Gill Sans Ultra Bold', 'Gill Sans Ultra Bold Condensed', 'Gisha', 'Gloucester MT Extra Condensed', 'GOTHAM', 'GOTHAM BOLD',
          'Goudy Old Style', 'Goudy Stout', 'GoudyHandtooled BT', 'GoudyOLSt BT', 'Gujarati Sangam MN', 'Gulim', 'GulimChe', 'Gungsuh', 'GungsuhChe', 'Gurmukhi MN', 'Haettenschweiler', 'Harlow Solid Italic', 'Harrington', 'Heather', 'Heiti SC', 'Heiti TC', 'HELV',
          'Herald', 'High Tower Text', 'Hiragino Kaku Gothic ProN', 'Hiragino Mincho ProN', 'Hoefler Text', 'Humanst 521 Cn BT', 'Humanst521 BT', 'Humanst521 Lt BT', 'Imprint MT Shadow', 'Incised901 Bd BT', 'Incised901 BT',
          'Incised901 Lt BT', 'INCONSOLATA', 'Informal Roman', 'Informal011 BT', 'INTERSTATE', 'IrisUPC', 'Iskoola Pota', 'JasmineUPC', 'Jazz LET', 'Jenson', 'Jester', 'Jokerman', 'Juice ITC', 'Kabel Bk BT', 'Kabel Ult BT', 'Kailasa', 'KaiTi', 'Kalinga', 'Kannada Sangam MN',
          'Kartika', 'Kaufmann Bd BT', 'Kaufmann BT', 'Khmer UI', 'KodchiangUPC', 'Kokila', 'Korinna BT', 'Kristen ITC', 'Krungthep', 'Kunstler Script', 'Lao UI', 'Latha', 'Leelawadee', 'Letter Gothic', 'Levenim MT', 'LilyUPC', 'Lithograph', 'Lithograph Light', 'Long Island',
          'Lydian BT', 'Magneto', 'Maiandra GD', 'Malayalam Sangam MN', 'Malgun Gothic',
          'Mangal', 'Marigold', 'Marion', 'Marker Felt', 'Market', 'Marlett', 'Matisse ITC', 'Matura MT Script Capitals', 'Meiryo', 'Meiryo UI', 'Microsoft Himalaya', 'Microsoft JhengHei', 'Microsoft New Tai Lue', 'Microsoft PhagsPa', 'Microsoft Tai Le',
          'Microsoft Uighur', 'Microsoft YaHei', 'Microsoft Yi Baiti', 'MingLiU', 'MingLiU_HKSCS', 'MingLiU_HKSCS-ExtB', 'MingLiU-ExtB', 'Minion', 'Minion Pro', 'Miriam', 'Miriam Fixed', 'Mistral', 'Modern', 'Modern No. 20', 'Mona Lisa Solid ITC TT', 'Mongolian Baiti',
          'MONO', 'MoolBoran', 'Mrs Eaves', 'MS LineDraw', 'MS Mincho', 'MS PMincho', 'MS Reference Specialty', 'MS UI Gothic', 'MT Extra', 'MUSEO', 'MV Boli',
          'Nadeem', 'Narkisim', 'NEVIS', 'News Gothic', 'News GothicMT', 'NewsGoth BT', 'Niagara Engraved', 'Niagara Solid', 'Noteworthy', 'NSimSun', 'Nyala', 'OCR A Extended', 'Old Century', 'Old English Text MT', 'Onyx', 'Onyx BT', 'OPTIMA', 'Oriya Sangam MN',
          'OSAKA', 'OzHandicraft BT', 'Palace Script MT', 'Papyrus', 'Parchment', 'Party LET', 'Pegasus', 'Perpetua', 'Perpetua Titling MT', 'PetitaBold', 'Pickwick', 'Plantagenet Cherokee', 'Playbill', 'PMingLiU', 'PMingLiU-ExtB',
          'Poor Richard', 'Poster', 'PosterBodoni BT', 'PRINCETOWN LET', 'Pristina', 'PTBarnum BT', 'Pythagoras', 'Raavi', 'Rage Italic', 'Ravie', 'Ribbon131 Bd BT', 'Rockwell', 'Rockwell Condensed', 'Rockwell Extra Bold', 'Rod', 'Roman', 'Sakkal Majalla',
          'Santa Fe LET', 'Savoye LET', 'Sceptre', 'Script', 'Script MT Bold', 'SCRIPTINA', 'Serifa', 'Serifa BT', 'Serifa Th BT', 'ShelleyVolante BT', 'Sherwood',
          'Shonar Bangla', 'Showcard Gothic', 'Shruti', 'Signboard', 'SILKSCREEN', 'SimHei', 'Simplified Arabic', 'Simplified Arabic Fixed', 'SimSun', 'SimSun-ExtB', 'Sinhala Sangam MN', 'Sketch Rockwell', 'Skia', 'Small Fonts', 'Snap ITC', 'Snell Roundhand', 'Socket',
          'Souvenir Lt BT', 'Staccato222 BT', 'Steamer', 'Stencil', 'Storybook', 'Styllo', 'Subway', 'Swis721 BlkEx BT', 'Swiss911 XCm BT', 'Sylfaen', 'Synchro LET', 'System', 'Tamil Sangam MN', 'Technical', 'Teletype', 'Telugu Sangam MN', 'Tempus Sans ITC',
          'Terminal', 'Thonburi', 'Traditional Arabic', 'Trajan', 'TRAJAN PRO', 'Tristan', 'Tubular', 'Tunga', 'Tw Cen MT', 'Tw Cen MT Condensed', 'Tw Cen MT Condensed Extra Bold',
          'TypoUpright BT', 'Unicorn', 'Univers', 'Univers CE 55 Medium', 'Univers Condensed', 'Utsaah', 'Vagabond', 'Vani', 'Vijaya', 'Viner Hand ITC', 'VisualUI', 'Vivaldi', 'Vladimir Script', 'Vrinda', 'Westminster', 'WHITNEY', 'Wide Latin',
          'ZapfEllipt BT', 'ZapfHumnst BT', 'ZapfHumnst Dm BT', 'Zapfino', 'Zurich BlkEx BT', 'Zurich Ex BT', 'ZWAdobeF']
        fontList = fontList.concat(extendedFontList)
      }

      fontList = fontList.concat(options.fonts.userDefinedFonts)

        // remove duplicate fonts
      fontList = fontList.filter(function (font, position) {
        return fontList.indexOf(font) === position
      })

        // we use m or w because these two characters take up the maximum width.
        // And we use a LLi so that the same matching fonts can get separated
      var testString = 'mmmmmmmmmmlli'

        // we test using 72px font size, we may use any size. I guess larger the better.
      var testSize = '72px'

      var h = document.getElementsByTagName('body')[0]

        // div to load spans for the base fonts
      var baseFontsDiv = document.createElement('div')

        // div to load spans for the fonts to detect
      var fontsDiv = document.createElement('div')

      var defaultWidth = {}
      var defaultHeight = {}

        // creates a span where the fonts will be loaded
      var createSpan = function () {
        var s = document.createElement('span')
          /*
           * We need this css as in some weird browser this
           * span elements shows up for a microSec which creates a
           * bad user experience
           */
        s.style.position = 'absolute'
        s.style.left = '-9999px'
        s.style.fontSize = testSize

          // css font reset to reset external styles
        s.style.fontStyle = 'normal'
        s.style.fontWeight = 'normal'
        s.style.letterSpacing = 'normal'
        s.style.lineBreak = 'auto'
        s.style.lineHeight = 'normal'
        s.style.textTransform = 'none'
        s.style.textAlign = 'left'
        s.style.textDecoration = 'none'
        s.style.textShadow = 'none'
        s.style.whiteSpace = 'normal'
        s.style.wordBreak = 'normal'
        s.style.wordSpacing = 'normal'

        s.innerHTML = testString
        return s
      }

        // creates a span and load the font to detect and a base font for fallback
      var createSpanWithFonts = function (fontToDetect, baseFont) {
        var s = createSpan()
        s.style.fontFamily = "'" + fontToDetect + "'," + baseFont
        return s
      }

        // creates spans for the base fonts and adds them to baseFontsDiv
      var initializeBaseFontsSpans = function () {
        var spans = []
        for (var index = 0, length = baseFonts.length; index < length; index++) {
          var s = createSpan()
          s.style.fontFamily = baseFonts[index]
          baseFontsDiv.appendChild(s)
          spans.push(s)
        }
        return spans
      }

        // creates spans for the fonts to detect and adds them to fontsDiv
      var initializeFontsSpans = function () {
        var spans = {}
        for (var i = 0, l = fontList.length; i < l; i++) {
          var fontSpans = []
          for (var j = 0, numDefaultFonts = baseFonts.length; j < numDefaultFonts; j++) {
            var s = createSpanWithFonts(fontList[i], baseFonts[j])
            fontsDiv.appendChild(s)
            fontSpans.push(s)
          }
          spans[fontList[i]] = fontSpans // Stores {fontName : [spans for that font]}
        }
        return spans
      }

        // checks if a font is available
      var isFontAvailable = function (fontSpans) {
        var detected = false
        for (var i = 0; i < baseFonts.length; i++) {
          detected = (fontSpans[i].offsetWidth !== defaultWidth[baseFonts[i]] || fontSpans[i].offsetHeight !== defaultHeight[baseFonts[i]])
          if (detected) {
            return detected
          }
        }
        return detected
      }

        // create spans for base fonts
      var baseFontsSpans = initializeBaseFontsSpans()

        // add the spans to the DOM
      h.appendChild(baseFontsDiv)

        // get the default width for the three base fonts
      for (var index = 0, length = baseFonts.length; index < length; index++) {
        defaultWidth[baseFonts[index]] = baseFontsSpans[index].offsetWidth // width for the default font
        defaultHeight[baseFonts[index]] = baseFontsSpans[index].offsetHeight // height for the default font
      }

        // create spans for fonts to detect
      var fontsSpans = initializeFontsSpans()

        // add all the spans to the DOM
      h.appendChild(fontsDiv)

        // check available fonts
      var available = []
      for (var i = 0, l = fontList.length; i < l; i++) {
        if (isFontAvailable(fontsSpans[fontList[i]])) {
          available.push(fontList[i])
        }
      }

        // remove spans from DOM
      h.removeChild(fontsDiv)
      h.removeChild(baseFontsDiv)
      done(available)
    }
    var pluginsComponent = function (done, options) {
      if (isIE()) {
        if (!options.plugins.excludeIE) {
          done(getIEPlugins(options))
        } else {
          done(options.EXCLUDED)
        }
      } else {
        done(getRegularPlugins(options))
      }
    }
    var getRegularPlugins = function (options) {
      if (navigator.plugins == null) {
        return options.NOT_AVAILABLE
      }

      var plugins = []
        // plugins isn't defined in Node envs.
      for (var i = 0, l = navigator.plugins.length; i < l; i++) {
        if (navigator.plugins[i]) { plugins.push(navigator.plugins[i]) }
      }

        // sorting plugins only for those user agents, that we know randomize the plugins
        // every time we try to enumerate them
      if (pluginsShouldBeSorted(options)) {
        plugins = plugins.sort(function (a, b) {
          if (a.name > b.name) { return 1 }
          if (a.name < b.name) { return -1 }
          return 0
        })
      }
      return map(plugins, function (p) {
        var mimeTypes = map(p, function (mt) {
          return [mt.type, mt.suffixes]
        })
        return [p.name, p.description, mimeTypes]
      })
    }
    var getIEPlugins = function (options) {
      var result = []
      if ((Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, 'ActiveXObject')) || ('ActiveXObject' in window)) {
        var names = [
          'AcroPDF.PDF', // Adobe PDF reader 7+
          'Adodb.Stream',
          'AgControl.AgControl', // Silverlight
          'DevalVRXCtrl.DevalVRXCtrl.1',
          'MacromediaFlashPaper.MacromediaFlashPaper',
          'Msxml2.DOMDocument',
          'Msxml2.XMLHTTP',
          'PDF.PdfCtrl', // Adobe PDF reader 6 and earlier, brrr
          'QuickTime.QuickTime', // QuickTime
          'QuickTimeCheckObject.QuickTimeCheck.1',
          'RealPlayer',
          'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
          'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
          'Scripting.Dictionary',
          'SWCtl.SWCtl', // ShockWave player
          'Shell.UIHelper',
          'ShockwaveFlash.ShockwaveFlash', // flash plugin
          'Skype.Detection',
          'TDCCtl.TDCCtl',
          'WMPlayer.OCX', // Windows media player
          'rmocx.RealPlayer G2 Control',
          'rmocx.RealPlayer G2 Control.1'
        ]
          // starting to detect plugins in IE
        result = map(names, function (name) {
          try {
              // eslint-disable-next-line no-new
            new window.ActiveXObject(name)
            return name
          } catch (e) {
            return options.ERROR
          }
        })
      } else {
        result.push(options.NOT_AVAILABLE)
      }
      if (navigator.plugins) {
        result = result.concat(getRegularPlugins(options))
      }
      return result
    }
    var pluginsShouldBeSorted = function (options) {
      var should = false
      for (var i = 0, l = options.plugins.sortPluginsFor.length; i < l; i++) {
        var re = options.plugins.sortPluginsFor[i]
        if (navigator.userAgent.match(re)) {
          should = true
          break
        }
      }
      return should
    }
    var touchSupportKey = function (done) {
      done(getTouchSupport())
    }
    var hardwareConcurrencyKey = function (done, options) {
      done(getHardwareConcurrency(options))
    }
    var hasSessionStorage = function (options) {
      try {
        return !!window.sessionStorage
      } catch (e) {
        return options.ERROR // SecurityError when referencing it means it exists
      }
    }

  // https://bugzilla.mozilla.org/show_bug.cgi?id=781447
    var hasLocalStorage = function (options) {
      try {
        return !!window.localStorage
      } catch (e) {
        return options.ERROR // SecurityError when referencing it means it exists
      }
    }
    var hasIndexedDB = function (options) {
      try {
        return !!window.indexedDB
      } catch (e) {
        return options.ERROR // SecurityError when referencing it means it exists
      }
    }
    var getHardwareConcurrency = function (options) {
      if (navigator.hardwareConcurrency) {
        return navigator.hardwareConcurrency
      }
      return options.NOT_AVAILABLE
    }
    var getNavigatorCpuClass = function (options) {
      return navigator.cpuClass || options.NOT_AVAILABLE
    }
    var getNavigatorPlatform = function (options) {
      if (navigator.platform) {
        return navigator.platform
      } else {
        return options.NOT_AVAILABLE
      }
    }
    var getDoNotTrack = function (options) {
      if (navigator.doNotTrack) {
        return navigator.doNotTrack
      } else if (navigator.msDoNotTrack) {
        return navigator.msDoNotTrack
      } else if (window.doNotTrack) {
        return window.doNotTrack
      } else {
        return options.NOT_AVAILABLE
      }
    }
  // This is a crude and primitive touch screen detection.
  // It's not possible to currently reliably detect the  availability of a touch screen
  // with a JS, without actually subscribing to a touch event.
  // http://www.stucox.com/blog/you-cant-detect-a-touchscreen/
  // https://github.com/Modernizr/Modernizr/issues/548
  // method returns an array of 3 values:
  // maxTouchPoints, the success or failure of creating a TouchEvent,
  // and the availability of the 'ontouchstart' property

    var getTouchSupport = function () {
      var maxTouchPoints = 0
      var touchEvent
      if (typeof navigator.maxTouchPoints !== 'undefined') {
        maxTouchPoints = navigator.maxTouchPoints
      } else if (typeof navigator.msMaxTouchPoints !== 'undefined') {
        maxTouchPoints = navigator.msMaxTouchPoints
      }
      try {
        document.createEvent('TouchEvent')
        touchEvent = true
      } catch (_) {
        touchEvent = false
      }
      var touchStart = 'ontouchstart' in window
      return [maxTouchPoints, touchEvent, touchStart]
    }
  // https://www.browserleaks.com/canvas#how-does-it-work

    var getCanvasFp = function (options) {
      var result = []
        // Very simple now, need to make it more complex (geo shapes etc)
      var canvas = document.createElement('canvas')
      canvas.width = 2000
      canvas.height = 200
      canvas.style.display = 'inline'
      var ctx = canvas.getContext('2d')
        // detect browser support of canvas winding
        // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
        // https://github.com/Modernizr/Modernizr/blob/master/feature-detects/canvas/winding.js
      ctx.rect(0, 0, 10, 10)
      ctx.rect(2, 2, 6, 6)
      result.push('canvas winding:' + ((ctx.isPointInPath(5, 5, 'evenodd') === false) ? 'yes' : 'no'))

      ctx.textBaseline = 'alphabetic'
      ctx.fillStyle = '#f60'
      ctx.fillRect(125, 1, 62, 20)
      ctx.fillStyle = '#069'
        // https://github.com/Valve/fingerprintjs2/issues/66
      if (options.dontUseFakeFontInCanvas) {
        ctx.font = '11pt Arial'
      } else {
        ctx.font = '11pt no-real-font-123'
      }
      ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 2, 15)
      ctx.fillStyle = 'rgba(102, 204, 0, 0.2)'
      ctx.font = '18pt Arial'
      ctx.fillText('Cwm fjordbank glyphs vext quiz, \ud83d\ude03', 4, 45)

        // canvas blending
        // http://blogs.adobe.com/webplatform/2013/01/28/blending-features-in-canvas/
        // http://jsfiddle.net/NDYV8/16/
      ctx.globalCompositeOperation = 'multiply'
      ctx.fillStyle = 'rgb(255,0,255)'
      ctx.beginPath()
      ctx.arc(50, 50, 50, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fill()
      ctx.fillStyle = 'rgb(0,255,255)'
      ctx.beginPath()
      ctx.arc(100, 50, 50, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fill()
      ctx.fillStyle = 'rgb(255,255,0)'
      ctx.beginPath()
      ctx.arc(75, 100, 50, 0, Math.PI * 2, true)
      ctx.closePath()
      ctx.fill()
      ctx.fillStyle = 'rgb(255,0,255)'
        // canvas winding
        // http://blogs.adobe.com/webplatform/2013/01/30/winding-rules-in-canvas/
        // http://jsfiddle.net/NDYV8/19/
      ctx.arc(75, 75, 75, 0, Math.PI * 2, true)
      ctx.arc(75, 75, 25, 0, Math.PI * 2, true)
      ctx.fill('evenodd')

      if (canvas.toDataURL) { result.push('canvas fp:' + canvas.toDataURL()) }
      return result
    }
    var getWebglFp = function () {
      var gl
      var fa2s = function (fa) {
        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.enable(gl.DEPTH_TEST)
        gl.depthFunc(gl.LEQUAL)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        return '[' + fa[0] + ', ' + fa[1] + ']'
      }
      var maxAnisotropy = function (gl) {
        var ext = gl.getExtension('EXT_texture_filter_anisotropic') || gl.getExtension('WEBKIT_EXT_texture_filter_anisotropic') || gl.getExtension('MOZ_EXT_texture_filter_anisotropic')
        if (ext) {
          var anisotropy = gl.getParameter(ext.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
          if (anisotropy === 0) {
            anisotropy = 2
          }
          return anisotropy
        } else {
          return null
        }
      }

      gl = getWebglCanvas()
      if (!gl) { return null }
        // WebGL fingerprinting is a combination of techniques, found in MaxMind antifraud script & Augur fingerprinting.
        // First it draws a gradient object with shaders and convers the image to the Base64 string.
        // Then it enumerates all WebGL extensions & capabilities and appends them to the Base64 string, resulting in a huge WebGL string, potentially very unique on each device
        // Since iOS supports webgl starting from version 8.1 and 8.1 runs on several graphics chips, the results may be different across ios devices, but we need to verify it.
      var result = []
      var vShaderTemplate = 'attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}'
      var fShaderTemplate = 'precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}'
      var vertexPosBuffer = gl.createBuffer()
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer)
      var vertices = new Float32Array([-0.2, -0.9, 0, 0.4, -0.26, 0, 0, 0.732134444, 0])
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
      vertexPosBuffer.itemSize = 3
      vertexPosBuffer.numItems = 3
      var program = gl.createProgram()
      var vshader = gl.createShader(gl.VERTEX_SHADER)
      gl.shaderSource(vshader, vShaderTemplate)
      gl.compileShader(vshader)
      var fshader = gl.createShader(gl.FRAGMENT_SHADER)
      gl.shaderSource(fshader, fShaderTemplate)
      gl.compileShader(fshader)
      gl.attachShader(program, vshader)
      gl.attachShader(program, fshader)
      gl.linkProgram(program)
      gl.useProgram(program)
      program.vertexPosAttrib = gl.getAttribLocation(program, 'attrVertex')
      program.offsetUniform = gl.getUniformLocation(program, 'uniformOffset')
      gl.enableVertexAttribArray(program.vertexPosArray)
      gl.vertexAttribPointer(program.vertexPosAttrib, vertexPosBuffer.itemSize, gl.FLOAT, !1, 0, 0)
      gl.uniform2f(program.offsetUniform, 1, 1)
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertexPosBuffer.numItems)
      try {
        result.push(gl.canvas.toDataURL())
      } catch (e) {
          /* .toDataURL may be absent or broken (blocked by extension) */
      }
      result.push('extensions:' + (gl.getSupportedExtensions() || []).join(';'))
      result.push('webgl aliased line width range:' + fa2s(gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)))
      result.push('webgl aliased point size range:' + fa2s(gl.getParameter(gl.ALIASED_POINT_SIZE_RANGE)))
      result.push('webgl alpha bits:' + gl.getParameter(gl.ALPHA_BITS))
      result.push('webgl antialiasing:' + (gl.getContextAttributes().antialias ? 'yes' : 'no'))
      result.push('webgl blue bits:' + gl.getParameter(gl.BLUE_BITS))
      result.push('webgl depth bits:' + gl.getParameter(gl.DEPTH_BITS))
      result.push('webgl green bits:' + gl.getParameter(gl.GREEN_BITS))
      result.push('webgl max anisotropy:' + maxAnisotropy(gl))
      result.push('webgl max combined texture image units:' + gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS))
      result.push('webgl max cube map texture size:' + gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE))
      result.push('webgl max fragment uniform vectors:' + gl.getParameter(gl.MAX_FRAGMENT_UNIFORM_VECTORS))
      result.push('webgl max render buffer size:' + gl.getParameter(gl.MAX_RENDERBUFFER_SIZE))
      result.push('webgl max texture image units:' + gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS))
      result.push('webgl max texture size:' + gl.getParameter(gl.MAX_TEXTURE_SIZE))
      result.push('webgl max varying vectors:' + gl.getParameter(gl.MAX_VARYING_VECTORS))
      result.push('webgl max vertex attribs:' + gl.getParameter(gl.MAX_VERTEX_ATTRIBS))
      result.push('webgl max vertex texture image units:' + gl.getParameter(gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS))
      result.push('webgl max vertex uniform vectors:' + gl.getParameter(gl.MAX_VERTEX_UNIFORM_VECTORS))
      result.push('webgl max viewport dims:' + fa2s(gl.getParameter(gl.MAX_VIEWPORT_DIMS)))
      result.push('webgl red bits:' + gl.getParameter(gl.RED_BITS))
      result.push('webgl renderer:' + gl.getParameter(gl.RENDERER))
      result.push('webgl shading language version:' + gl.getParameter(gl.SHADING_LANGUAGE_VERSION))
      result.push('webgl stencil bits:' + gl.getParameter(gl.STENCIL_BITS))
      result.push('webgl vendor:' + gl.getParameter(gl.VENDOR))
      result.push('webgl version:' + gl.getParameter(gl.VERSION))

      try {
          // Add the unmasked vendor and unmasked renderer if the debug_renderer_info extension is available
        var extensionDebugRendererInfo = gl.getExtension('WEBGL_debug_renderer_info')
        if (extensionDebugRendererInfo) {
          result.push('webgl unmasked vendor:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL))
          result.push('webgl unmasked renderer:' + gl.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL))
        }
      } catch (e) { /* squelch */ }

      if (!gl.getShaderPrecisionFormat) {
        return result
      }

      each(['FLOAT', 'INT'], function (numType) {
        each(['VERTEX', 'FRAGMENT'], function (shader) {
          each(['HIGH', 'MEDIUM', 'LOW'], function (numSize) {
            each(['precision', 'rangeMin', 'rangeMax'], function (key) {
              var format = gl.getShaderPrecisionFormat(gl[shader + '_SHADER'], gl[numSize + '_' + numType])[key]
              if (key !== 'precision') {
                key = 'precision ' + key
              }
              var line = ['webgl ', shader.toLowerCase(), ' shader ', numSize.toLowerCase(), ' ', numType.toLowerCase(), ' ', key, ':', format].join('')
              result.push(line)
            })
          })
        })
      })
      return result
    }
    var getWebglVendorAndRenderer = function () {
        /* This a subset of the WebGL fingerprint with a lot of entropy, while being reasonably browser-independent */
      try {
        var glContext = getWebglCanvas()
        var extensionDebugRendererInfo = glContext.getExtension('WEBGL_debug_renderer_info')
        return glContext.getParameter(extensionDebugRendererInfo.UNMASKED_VENDOR_WEBGL) + '~' + glContext.getParameter(extensionDebugRendererInfo.UNMASKED_RENDERER_WEBGL)
      } catch (e) {
        return null
      }
    }
    var getAdBlock = function () {
      var ads = document.createElement('div')
      ads.innerHTML = '&nbsp;'
      ads.className = 'adsbox'
      var result = false
      try {
          // body may not exist, that's why we need try/catch
        document.body.appendChild(ads)
        result = document.getElementsByClassName('adsbox')[0].offsetHeight === 0
        document.body.removeChild(ads)
      } catch (e) {
        result = false
      }
      return result
    }
    var getHasLiedLanguages = function () {
        // We check if navigator.language is equal to the first language of navigator.languages
      if (typeof navigator.languages !== 'undefined') {
        try {
          var firstLanguages = navigator.languages[0].substr(0, 2)
          if (firstLanguages !== navigator.language.substr(0, 2)) {
            return true
          }
        } catch (err) {
          return true
        }
      }
      return false
    }
    var getHasLiedResolution = function () {
      return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
    }
    var getHasLiedOs = function () {
      var userAgent = navigator.userAgent.toLowerCase()
      var oscpu = navigator.oscpu
      var platform = navigator.platform.toLowerCase()
      var os
        // We extract the OS from the user agent (respect the order of the if else if statement)
      if (userAgent.indexOf('windows phone') >= 0) {
        os = 'Windows Phone'
      } else if (userAgent.indexOf('win') >= 0) {
        os = 'Windows'
      } else if (userAgent.indexOf('android') >= 0) {
        os = 'Android'
      } else if (userAgent.indexOf('linux') >= 0) {
        os = 'Linux'
      } else if (userAgent.indexOf('iphone') >= 0 || userAgent.indexOf('ipad') >= 0) {
        os = 'iOS'
      } else if (userAgent.indexOf('mac') >= 0) {
        os = 'Mac'
      } else {
        os = 'Other'
      }
        // We detect if the person uses a mobile device
      var mobileDevice = (('ontouchstart' in window) ||
          (navigator.maxTouchPoints > 0) ||
          (navigator.msMaxTouchPoints > 0))

      if (mobileDevice && os !== 'Windows Phone' && os !== 'Android' && os !== 'iOS' && os !== 'Other') {
        return true
      }

        // We compare oscpu with the OS extracted from the UA
      if (typeof oscpu !== 'undefined') {
        oscpu = oscpu.toLowerCase()
        if (oscpu.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
          return true
        } else if (oscpu.indexOf('linux') >= 0 && os !== 'Linux' && os !== 'Android') {
          return true
        } else if (oscpu.indexOf('mac') >= 0 && os !== 'Mac' && os !== 'iOS') {
          return true
        } else if ((oscpu.indexOf('win') === -1 && oscpu.indexOf('linux') === -1 && oscpu.indexOf('mac') === -1) !== (os === 'Other')) {
          return true
        }
      }

        // We compare platform with the OS extracted from the UA
      if (platform.indexOf('win') >= 0 && os !== 'Windows' && os !== 'Windows Phone') {
        return true
      } else if ((platform.indexOf('linux') >= 0 || platform.indexOf('android') >= 0 || platform.indexOf('pike') >= 0) && os !== 'Linux' && os !== 'Android') {
        return true
      } else if ((platform.indexOf('mac') >= 0 || platform.indexOf('ipad') >= 0 || platform.indexOf('ipod') >= 0 || platform.indexOf('iphone') >= 0) && os !== 'Mac' && os !== 'iOS') {
        return true
      } else if ((platform.indexOf('win') === -1 && platform.indexOf('linux') === -1 && platform.indexOf('mac') === -1) !== (os === 'Other')) {
        return true
      }

      return typeof navigator.plugins === 'undefined' && os !== 'Windows' && os !== 'Windows Phone'
    }
    var getHasLiedBrowser = function () {
      var userAgent = navigator.userAgent.toLowerCase()
      var productSub = navigator.productSub

        // we extract the browser from the user agent (respect the order of the tests)
      var browser
      if (userAgent.indexOf('firefox') >= 0) {
        browser = 'Firefox'
      } else if (userAgent.indexOf('opera') >= 0 || userAgent.indexOf('opr') >= 0) {
        browser = 'Opera'
      } else if (userAgent.indexOf('chrome') >= 0) {
        browser = 'Chrome'
      } else if (userAgent.indexOf('safari') >= 0) {
        browser = 'Safari'
      } else if (userAgent.indexOf('trident') >= 0) {
        browser = 'Internet Explorer'
      } else {
        browser = 'Other'
      }

      if ((browser === 'Chrome' || browser === 'Safari' || browser === 'Opera') && productSub !== '20030107') {
        return true
      }

        // eslint-disable-next-line no-eval
      var tempRes = eval.toString().length
      if (tempRes === 37 && browser !== 'Safari' && browser !== 'Firefox' && browser !== 'Other') {
        return true
      } else if (tempRes === 39 && browser !== 'Internet Explorer' && browser !== 'Other') {
        return true
      } else if (tempRes === 33 && browser !== 'Chrome' && browser !== 'Opera' && browser !== 'Other') {
        return true
      }

        // We create an error to see how it is handled
      var errFirefox
      try {
          // eslint-disable-next-line no-throw-literal
        throw 'a'
      } catch (err) {
        try {
          err.toSource()
          errFirefox = true
        } catch (errOfErr) {
          errFirefox = false
        }
      }
      return errFirefox && browser !== 'Firefox' && browser !== 'Other'
    }
    var isCanvasSupported = function () {
      var elem = document.createElement('canvas')
      return !!(elem.getContext && elem.getContext('2d'))
    }
    var isWebGlSupported = function () {
        // code taken from Modernizr
      if (!isCanvasSupported()) {
        return false
      }

      var glContext = getWebglCanvas()
      return !!window.WebGLRenderingContext && !!glContext
    }
    var isIE = function () {
      if (navigator.appName === 'Microsoft Internet Explorer') {
        return true
      } else if (navigator.appName === 'Netscape' && /Trident/.test(navigator.userAgent)) { // IE 11
        return true
      }
      return false
    }
    var hasSwfObjectLoaded = function () {
      return typeof window.swfobject !== 'undefined'
    }
    var hasMinFlashInstalled = function () {
      return window.swfobject.hasFlashPlayerVersion('9.0.0')
    }
    var addFlashDivNode = function (options) {
      var node = document.createElement('div')
      node.setAttribute('id', options.fonts.swfContainerId)
      document.body.appendChild(node)
    }
    var loadSwfAndDetectFonts = function (done, options) {
      var hiddenCallback = '___fp_swf_loaded'
      window[hiddenCallback] = function (fonts) {
        done(fonts)
      }
      var id = options.fonts.swfContainerId
      addFlashDivNode()
      var flashvars = { onReady: hiddenCallback }
      var flashparams = { allowScriptAccess: 'always', menu: 'false' }
      window.swfobject.embedSWF(options.fonts.swfPath, id, '1', '1', '9.0.0', false, flashvars, flashparams, {})
    }
    var getWebglCanvas = function () {
      var canvas = document.createElement('canvas')
      var gl = null
      try {
        gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
      } catch (e) { /* squelch */ }
      if (!gl) { gl = null }
      return gl
    }

    var components = [
      {key: 'userAgent', getData: UserAgent},
      {key: 'language', getData: languageKey},
      {key: 'colorDepth', getData: colorDepthKey},
      {key: 'deviceMemory', getData: deviceMemoryKey},
      {key: 'pixelRatio', getData: pixelRatioKey},
      {key: 'hardwareConcurrency', getData: hardwareConcurrencyKey},
      {key: 'screenResolution', getData: screenResolutionKey},
      {key: 'availableScreenResolution', getData: availableScreenResolutionKey},
      {key: 'timezoneOffset', getData: timezoneOffset},
      {key: 'timezone', getData: timezone},
      {key: 'sessionStorage', getData: sessionStorageKey},
      {key: 'localStorage', getData: localStorageKey},
      {key: 'indexedDb', getData: indexedDbKey},
      {key: 'addBehavior', getData: addBehaviorKey},
      {key: 'openDatabase', getData: openDatabaseKey},
      {key: 'cpuClass', getData: cpuClassKey},
      {key: 'platform', getData: platformKey},
      {key: 'doNotTrack', getData: doNotTrackKey},
      {key: 'plugins', getData: pluginsComponent},
      {key: 'canvas', getData: canvasKey},
      {key: 'webgl', getData: webglKey},
      {key: 'webglVendorAndRenderer', getData: webglVendorAndRendererKey},
      {key: 'adBlock', getData: adBlockKey},
      {key: 'hasLiedLanguages', getData: hasLiedLanguagesKey},
      {key: 'hasLiedResolution', getData: hasLiedResolutionKey},
      {key: 'hasLiedOs', getData: hasLiedOsKey},
      {key: 'hasLiedBrowser', getData: hasLiedBrowserKey},
      {key: 'touchSupport', getData: touchSupportKey},
      {key: 'fonts', getData: jsFontsKey, pauseBefore: true},
      {key: 'fontsFlash', getData: flashFontsKey, pauseBefore: true},
      {key: 'audio', getData: audioKey},
      {key: 'enumerateDevices', getData: enumerateDevicesKey}
    ]

    var Fingerprint2 = function (options) {
      throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
    }

    Fingerprint2.get = function (options, callback) {
      if (!callback) {
        callback = options
        options = {}
      } else if (!options) {
        options = {}
      }
      extendSoft(options, defaultOptions)
      options.components = options.extraComponents.concat(components)

      var keys = {
        data: [],
        addPreprocessedComponent: function (key, value) {
          if (typeof options.preprocessor === 'function') {
            value = options.preprocessor(key, value)
          }
          keys.data.push({key: key, value: value})
        }
      }

      var i = -1
      var chainComponents = function (alreadyWaited) {
        i += 1
        if (i >= options.components.length) { // on finish
          callback(keys.data)
          return
        }
        var component = options.components[i]

        if (options.excludes[component.key]) {
          chainComponents(false) // skip
          return
        }

        if (!alreadyWaited && component.pauseBefore) {
          i -= 1
          setTimeout(function () {
            chainComponents(true)
          }, 1)
          return
        }

        try {
          component.getData(function (value) {
            keys.addPreprocessedComponent(component.key, value)
            chainComponents(false)
          }, options)
        } catch (error) {
          // main body error
          keys.addPreprocessedComponent(component.key, String(error))
          chainComponents(false)
        }
      }

      chainComponents(false)
    }

    Fingerprint2.getPromise = function (options) {
      return new Promise(function (resolve, reject) {
        Fingerprint2.get(options, resolve)
      })
    }

    Fingerprint2.getV18 = function (options, callback) {
      if (callback == null) {
        callback = options
        options = {}
      }
      return Fingerprint2.get(options, function (components) {
        var newComponents = []
        for (var i = 0; i < components.length; i++) {
          var component = components[i]
          if (component.value === (options.NOT_AVAILABLE || 'not available')) {
            newComponents.push({key: component.key, value: 'unknown'})
          } else if (component.key === 'plugins') {
            newComponents.push({key: 'plugins',
              value: map(component.value, function (p) {
                var mimeTypes = map(p[2], function (mt) {
                  if (mt.join) { return mt.join('~') }
                  return mt
                }).join(',')
                return [p[0], p[1], mimeTypes].join('::')
              })})
          } else if (['canvas', 'webgl'].indexOf(component.key) !== -1) {
            newComponents.push({key: component.key, value: component.value.join('~')})
          } else if (['sessionStorage', 'localStorage', 'indexedDb', 'addBehavior', 'openDatabase'].indexOf(component.key) !== -1) {
            if (component.value) {
              newComponents.push({key: component.key, value: 1})
            } else {
              // skip
              continue
            }
          } else {
            if (component.value) {
              newComponents.push(component.value.join ? {key: component.key, value: component.value.join(';')} : component)
            } else {
              newComponents.push({key: component.key, value: component.value})
            }
          }
        }
        var murmur = x64hash128(map(newComponents, function (component) { return component.value }).join('~~~'), 31)
        callback(murmur, newComponents)
      })
    }

    Fingerprint2.x64hash128 = x64hash128
    Fingerprint2.VERSION = '2.0.6'
    return Fingerprint2
  })
/**
 * This is responsible for syncing of Telemetry
 * @class TelemetrySyncManager
 * @author Manjunath Davanam <manjunathd@ilimi.in>
 * @author Krushanu Mohapatra <Krushanu.Mohapatra@tarento.com>
 */

var TelemetrySyncManager = {

    /**
     * This is the telemetry data for the perticular stage.
     * @member {object} _teleData
     * @memberof TelemetryPlugin
     */
    _teleData: [],
    init: function() {
        var instance = this;
        document.addEventListener('TelemetryEvent', this.sendTelemetry);
    },
    sendTelemetry: function(event) {
        var telemetryEvent = event.detail;
        console.log("Telemetry Events ", JSON.stringify(telemetryEvent));
        var instance = TelemetrySyncManager;
        sessionStorage.setItem("FP_T", window.EkTelemetry.fingerPrintId);
        instance._teleData.push(Object.assign({}, telemetryEvent));
        if ((telemetryEvent.eid.toUpperCase() === "END") || (instance._teleData.length >= Telemetry.config.batchsize)) {
            TelemetrySyncManager.syncEvents();
        }
    },
    updateEventStack: function(events) {
        TelemetrySyncManager._teleData = TelemetrySyncManager._teleData.concat(events);
    },
    syncEvents: function() {
        var Telemetry = EkTelemetry || Telemetry;
        var instance = TelemetrySyncManager;
        var telemetryData = instance._teleData.splice(0, Telemetry.config.batchsize);
        var telemetryObj = {
            "id": "ekstep.telemetry",
            "ver": Telemetry._version,
            "ets": (new Date()).getTime(),
            "events": telemetryData
        };
        var headersParam = {};
        if ('undefined' != typeof Telemetry.config.authtoken)
            headersParam["Authorization"] = 'Bearer ' + Telemetry.config.authtoken;

        var fullPath = Telemetry.config.host + Telemetry.config.apislug + Telemetry.config.endpoint;
        headersParam['dataType'] = 'json';
        headersParam["Content-Type"] = "application/json";
        jQuery.ajax({
            url: fullPath,
            type: "POST",
            headers: headersParam,
            data: JSON.stringify(telemetryObj)
        }).done(function(resp) {
            console.log("Telemetry API success", resp);
        }).fail(function(error, textStatus, errorThrown) {
            instance.updateEventStack(telemetryData);
            if (error.status == 403) {
                console.error("Authentication error: ", error);
            } else {
                console.log("Error while Telemetry sync to server: ", error);
            }
        });
    }
}
if (typeof document != 'undefined') {
    TelemetrySyncManager.init();
}
/**
 * Telemetry V3 Library
 * @author Manjunath Davanam <manjunathd@ilimi.in>
 * @author Akash Gupta <Akash.Gupta@tarento.com>
 */

// To support for node server environment
if (typeof require === "function") {
    var Ajv = require('ajv')
}


var libraryDispatcher = {
    dispatch: function(event) {
        if (typeof document != 'undefined') {
            //To Support for external user who ever lisenting on this 'TelemetryEvent' event.
            // IT  WORKS ONLY FOR CLIENT SIDE
            document.dispatchEvent(new CustomEvent('TelemetryEvent', { detail: event }));
        } else {
            console.info("Library dispatcher supports only for client side.");
        }
    }
};


var Telemetry = (function() {
    this.telemetry = function() {};
    var instance = function() {};
    var telemetryInstance = this;
    this.telemetry.initialized = false;
    this.telemetry.config = {};
    this.telemetry._version = "3.0";
    this.telemetry.fingerPrintId = undefined;
    this.dispatcher = libraryDispatcher;
    this._defaultValue = {
            uid: "anonymous",
            authtoken: "",
            batchsize: 20,
            host: "https://api.ekstep.in",
            endpoint: "/data/v3/telemetry",
            apislug: "/action",
        },
        this.telemetryEnvelop = {
            "eid": "",
            "ets": "",
            "ver": "",
            "mid": '',
            "actor": {},
            "context": {},
            "object": {},
            "tags": [],
            "edata": ""
        }
    this._globalContext = {
        "channel": 'in.ekstep',
        "pdata": { id: "in.ekstep", ver: "1.0", pid: "" },
        "env": "contentplayer",
        "sid": "",
        "did": "",
        "cdata": [],
        "rollup": {}
    };
    this.runningEnv = 'client';
    this.enableValidation = false;
    this._globalObject = {};
    this.startData = [];
    this.ajv = new Ajv({ schemas: telemetrySchema });

    /**
     * Which is used to initialize the telemetry event
     * @param  {object} config - Configurations for the telemetry lib to initialize the service. " Example: config = { batchsize:10,host:"" } "
     */
    this.telemetry.initialize = function(config) {
        instance.init(config);
    }

    /**
     * Which is used to start and initialize the telemetry event.
     * If the telemetry is already initialzed then it will trigger only start event.
     * @param  {object} config     [Telemetry lib configurations]
     * @param  {string} contentId  [Content Identifier]
     * @param  {string} contentVer [Content version]
     * @param  {object} data       [Can have userAgent,device spec object]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.start = function(config, contentId, contentVer, data, options) {
        data.duration = data.duration || (((new Date()).getTime()) * 0.001); // Converting duration miliSeconds to seconds
        if (contentId && contentVer) {
            telemetryInstance._globalObject.id = contentId;
            telemetryInstance._globalObject.ver = contentVer;
        }

        if (!Telemetry.initialized && config) {
            instance.init(config, contentId, contentVer)

        }
        instance.updateValues(options);
        var startEventObj = instance.getEvent('START', data);
        instance._dispatch(startEventObj)
        telemetryInstance.startData.push(JSON.parse(JSON.stringify(startEventObj)));
    }

    /**
     * Which is used to log the impression telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.impression = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('IMPRESSION', data));
    }

    /**
     * Which is used to log the interact telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.interact = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('INTERACT', data));
    }

    /**
     * Which is used to log the assess telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.assess = function(data, options) {
        instance.updateValues(options);
        assessEvent = instance.getEvent('ASSESS', data);
        // This code will replace current version with the new version number, if present in options.
        if (options && options.eventVer) assessEvent.ver = options.eventVer;
        instance._dispatch(assessEvent);
    }

    /**
     * Which is used to log the response telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.response = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('RESPONSE', data));
    }

    /**
     * Which is used to log the interrupt telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.interrupt = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('INTERRUPT', data));
    }

    /**
     * Which is used to log the feedback telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.feedback = function(data, options) {
        var eksData = {
            "rating": data.rating,
            "comments": data.comments || ''
        }
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('FEEDBACK', eksData));
    }

    /**
     * Which is used to log the share telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.share = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('SHARE', data));
    }

    /**
     * Which is used to log the audit telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.audit = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('AUDIT', data));
    }

    /**
     * Which is used to log the error telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.error = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('ERROR', data));
    }

    /**
     * Which is used to log the heartbeat telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.heartbeat = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('HEARTBEAT', data));
    }

    /**
     * Which is used to log the log event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.log = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('LOG', data));
    }

    /**
     * Which is used to log the search event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.search = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('SEARCH', data));
    }

    /**
     * Which is used to log the metrics event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.metrics = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('METRICS', data));
    }

    /**
     * Which is used to log the exdata event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.exdata = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('EXDATA', data));
    }

    /**
     * Which is used to log the summary event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.summary = function(data, options) {
        instance.updateValues(options);
        instance._dispatch(instance.getEvent('SUMMARY', data));
    }

    /**
     * Which is used to log the end telemetry event.
     * @param  {object} data       [data which is need to pass in this event ex: {"type":"player","mode":"ContentPlayer","pageid":"splash"}]
     * @param  {object} options    [It can have `context, object, actor` can be explicitly passed in this event]
     */
    this.telemetry.end = function(data, options) {
        if (telemetryInstance.startData.length) {
            var startEventObj = telemetryInstance.startData.pop();
            data.duration = ((new Date()).getTime() - startEventObj.ets) * 0.001; // Converting duration miliSeconds to seconds
            instance.updateValues(options);
            instance._dispatch(instance.getEvent('END', data));
        } else {
            console.info("Please invoke start before invoking end event.")
        }
    }

    /**
     * Which is used to know the whether telemetry is initialized or not.
     * @return {Boolean}
     */
    this.telemetry.isInitialized = function() {
        return Telemetry.initialized;
    }

    /**
     * Which is used to reset the current context
     * @param  {object} context [Context value]
     */
    this.telemetry.resetContext = function(context) {
        telemetryInstance._currentContext = context || {};
    }

    /**
     * Which is used to reset the current object value.
     * @param  {object} object [Object value]
     */
    this.telemetry.resetObject = function(object) {
            telemetryInstance._currentObject = object || {};
        },

        /**
         * Which is used to reset the current actor value.
         * @param  {object} object [Object value]
         */
        this.telemetry.resetActor = function(actor) {
            telemetryInstance._currentActor = actor || {};
        }


    /**
     * Which is used to reset the current actor value.
     * @param  {object} object [Object value]
     */
    this.telemetry.resetTags = function(tags) {
        telemetryInstance._currentTags = tags || [];
    }

    this.telemetry.syncEvents = function() {
        if (typeof TelemetrySyncManager != 'undefined') {
            TelemetrySyncManager.syncEvents();
        }
    }

    /**
     * Which is used to initialize the telemetry in globally.
     * @param  {object} config     [Telemetry configurations]
     * @param  {string} contentId  [Identifier value]
     * @param  {string} contentVer [Version]
     * @param  {object} type       [object type]
     */
    instance.init = function(config, contentId, contentVer) {
        if (Telemetry.initialized) {
            console.log("Telemetry is already initialized..");
            return;
        }!config && (config = {})
        contentId && (telemetryInstance._globalObject.id = contentId);
        contentVer && (telemetryInstance._globalObject.ver = contentVer);
        config.runningEnv && (telemetryInstance.runningEnv = config.runningEnv);
        if (typeof config.enableValidation !== 'undefined') {
            telemetryInstance.enableValidation = config.enableValidation;
        }
        config.batchsize = config.batchsize ? (config.batchsize > 1000 ? 1000 : config.batchsize) : _defaultValue.batchsize;
        Telemetry.config = Object.assign(_defaultValue, config);
        Telemetry.initialized = true;
        telemetryInstance.dispatcher = Telemetry.config.dispatcher ? Telemetry.config.dispatcher : libraryDispatcher;
        instance.updateConfigurations(config);
        console.info("Telemetry is initialized.")
    }

    /**
     * Which is used to dispatch a telemetry events.
     * @param  {object} message [Telemetry event object]
     */
    instance._dispatch = function(message) {
        message.mid = message.eid + ':' + CryptoJS.MD5(JSON.stringify(message)).toString();
        if (telemetryInstance.enableValidation) {
            var validate = ajv.getSchema('http://api.ekstep.org/telemetry/' + message.eid.toLowerCase())
            var valid = validate(message)
            if (!valid) {
                console.error('Invalid ' + message.eid + ' Event: ' + ajv.errorsText(validate.errors))
                return
            }
        }
        // set deviceId for external application
        // if(client_id.toLowerCase() === 'android' || client_id.toLowerCase() === 'desktop'){
        //   let deviceid = (new URLSearchParams(curUrlObj.search)).get('did') || '';
        //   message.context.did = deviceid;
        // }
        if (telemetryInstance.runningEnv === 'client') {
            if (!message.context.did) {
                if (!Telemetry.fingerPrintId) {
                    Telemetry.getFingerPrint(function(result, components) {
                        message.context.did = result;
                        message.actor.id = instance.getActorId(message.actor.id, result);
                        Telemetry.fingerPrintId = result;
                        dispatcher.dispatch(message);
                    })
                } else {
                    message.context.did = Telemetry.fingerPrintId;
                    message.actor.id = instance.getActorId(message.actor.id, Telemetry.fingerPrintId);
                    dispatcher.dispatch(message);
                }
            } else {
                message.actor.id = instance.getActorId(message.actor.id, message.context.did);
                dispatcher.dispatch(message);
            }
        } else {
            dispatcher.dispatch(message);
        }
    }

    /**
     * Which is used to get set Actor id as device id if actor id is 'anonymous'
     * @param  {string} actorId
     * @param  {string} deviceId    [DeviceId]
     * @return {string} [actor id based on value of the actor came from input]
     */
    instance.getActorId = function (actorId,deviceId) {
        if(!actorId || actorId === 'anonymous'){
            return deviceId;
        }else{
            return actorId
        }
    }

    /**
     * Which is used to get the telemetry envelop data
     * @param  {string} eventId [Name of the event]
     * @param  {object} data    [Event data]
     * @return {object}         [Telemetry envelop data]
     */
    instance.getEvent = function(eventId, data) {
        telemetryInstance.telemetryEnvelop.eid = eventId;
        // timeDiff (in sec) is diff of server date and local date
        telemetryInstance.telemetryEnvelop.ets = (new Date()).getTime() + ((Telemetry.config.timeDiff*1000) || 0);
        telemetryInstance.telemetryEnvelop.ver = Telemetry._version;
        telemetryInstance.telemetryEnvelop.mid = '';
        telemetryInstance.telemetryEnvelop.actor = Object.assign({}, { "id": Telemetry.config.uid || 'anonymous', "type": 'User' }, instance.getUpdatedValue('actor'));
        telemetryInstance.telemetryEnvelop.context = Object.assign({}, instance.getGlobalContext(), instance.getUpdatedValue('context'));
        telemetryInstance.telemetryEnvelop.object = Object.assign({}, instance.getGlobalObject(), instance.getUpdatedValue('object'));
        telemetryInstance.telemetryEnvelop.tags = Object.assign([], Telemetry.config.tags, instance.getUpdatedValue('tags'));
        telemetryInstance.telemetryEnvelop.edata = data;
        return telemetryInstance.telemetryEnvelop;
    }

    /**
     * Which is used to assing to globalObject and globalContext value from the telemetry configurations.
     * @param  {object} config [Telemetry configurations]
     */
    instance.updateConfigurations = function(config) {
        config.object && (telemetryInstance._globalObject = config.object);
        config.channel && (telemetryInstance._globalContext.channel = config.channel);
        config.env && (telemetryInstance._globalContext.env = config.env);
        config.rollup && (telemetryInstance._globalContext.rollup = config.rollup);
        config.sid && (telemetryInstance._globalContext.sid = config.sid);
        config.did && (telemetryInstance._globalContext.did = config.did);
        config.cdata && (telemetryInstance._globalContext.cdata = config.cdata);
        config.pdata && (telemetryInstance._globalContext.pdata = config.pdata);


    }

    /**
     * Which is used to get the current updated global context value.
     * @return {object}
     */
    instance.getGlobalContext = function() {
        return telemetryInstance._globalContext;
    }

    /**
     * Which is used to get the current global object value.
     * @return {object}
     */
    instance.getGlobalObject = function() {
        return telemetryInstance._globalObject;
    }

    /**
     * Which is used to update the both context and object vlaue.
     * For any event explicitly context and object value can be passed.
     * @param  {object} context [Context value object]
     * @param  {object} object  [Object value]
     */
    instance.updateValues = function(options) {
        if (options) {
            options.context && (telemetryInstance._currentContext = options.context);
            options.object && (telemetryInstance._currentObject = options.object);
            options.actor && (telemetryInstance._currentActor = options.actor);
            options.tags && (telemetryInstance._currentTags = options.tags);
            options.runningEnv && (telemetryInstance.runningEnv = options.runningEnv);
        }
    }

    /**
     * Which is used to get the value of 'context','actor','object'
     * @param  {string} key [ Name of object which we is need to get ]
     * @return {object}
     */
    instance.getUpdatedValue = function(key) {
        switch (key.toLowerCase()) {
            case 'context':
                return telemetryInstance._currentContext || {};
                break;
            case 'object':
                return telemetryInstance._currentObject || {};
                break;
            case 'actor':
                return telemetryInstance._currentActor || {};
                break;
            case 'tags':
                return telemetryInstance._currentTags || [];
                break;
        }
    }

    /**
     * Which is used to support for lower end deviecs.
     * If any of the devices which is not supporting ECMAScript 6 version
     */
    instance.objectAssign = function() {
        Object.assign = function(target) {
            'use strict';
            if (target == null) {
                throw new TypeError('Cannot convert undefined or null to object');
            }

            target = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var source = arguments[index];
                if (source != null) {
                    for (var key in source) {
                        if (Object.prototype.hasOwnProperty.call(source, key)) {
                            target[key] = source[key];
                        }
                    }
                }
            }
            return target;
        }
    }
    var FPoptions = {
        preprocessor: function (key, value) {
            if (key == "userAgent") {
                var parser = new UAParser(value); // https://github.com/faisalman/ua-parser-js
                var userAgentMinusVersion = parser.getOS().name + ' ' + parser.getBrowser().name
                return userAgentMinusVersion
            }
            return value
        },
        audio: {
            timeout: 1000,
            // On iOS 11, audio context can only be used in response to user interaction.
            // We require users to explicitly enable audio fingerprinting on iOS 11.
            // See https://stackoverflow.com/questions/46363048/onaudioprocess-not-called-on-ios11#46534088
            excludeIOS11: true
        },
        fonts: {
            swfContainerId: 'fingerprintjs2',
            swfPath: 'flash/compiled/FontList.swf',
            userDefinedFonts: [],
            extendedJsFonts: false
        },
        screen: {
            // To ensure consistent fingerprints when users rotate their mobile devices
            detectScreenOrientation: true
        },
        plugins: {
            sortPluginsFor: [/palemoon/i],
            excludeIE: false
        },
        extraComponents: [],
        excludes: {
            // Unreliable on Windows, see https://github.com/Valve/fingerprintjs2/issues/375
            'enumerateDevices': true,
            // devicePixelRatio depends on browser zoom, and it's impossible to detect browser zoom
            'pixelRatio': true,
            // DNT depends on incognito mode for some browsers (Chrome) and it's impossible to detect incognito mode
            'doNotTrack': true,
            // uses js fonts already
            'fontsFlash': true,
            'canvas': true,
            'screenResolution': true,
            'availableScreenResolution': true,
            'touchSupport': true,
            'plugins': true,
            'webgl': true,
            'audio': true,
            'language': true,
            'deviceMemory': true
        },
        NOT_AVAILABLE: 'not available',
        ERROR: 'error',
        EXCLUDED: 'excluded'
    }
    this.telemetry.getFingerPrint = function (cb) {
        Fingerprint2.getV18(FPoptions, function (result, components) {
            if (cb) cb(result, components)
        })
    }
    if (typeof Object.assign != 'function') {
        instance.objectAssign();
    }

    return this.telemetry;
})();

/**
 * Name space which is being fallowed
 * @type {[type]}
 */

EkTelemetry = $t = Telemetry;



/**
 * To support for the node backEnd, So any node developer can import this telemetry lib.
 */
if (typeof module != 'undefined') {
    module.exports = Telemetry;
}

(
function(e, t, r, i) {
  "use strict";
  t = void 0 !== t && t.Math == Math ? t : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(),
  e.fn.sidebar = function(n) {
      var o, a = e(this), s = e(t), l = e(r), c = e("html"), d = e("head"), u = a.selector || "", p = (new Date).getTime(), h = [], f = arguments[0], m = "string" == typeof f, g = [].slice.call(arguments, 1), v = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
          setTimeout(e, 0)
      }
      ;
      return a.each(function() {
          var a, y, b, w, x, S, E = e.isPlainObject(n) ? e.extend(!0, {}, e.fn.sidebar.settings, n) : e.extend({}, e.fn.sidebar.settings), k = E.selector, T = E.className, C = E.namespace, P = E.regExp, A = E.error, $ = "." + C, O = "module-" + C, D = e(this), j = e(E.context), R = D.children(k.sidebar), _ = (j.children(k.fixed),
          j.children(k.pusher)), L = this, I = D.data(O);
          S = {
              initialize: function() {
                  S.debug("Initializing sidebar", n),
                  S.create.id(),
                  x = S.get.transitionEvent(),
                  S.is.ios() && S.set.ios(),
                  E.delaySetup ? v(S.setup.layout) : S.setup.layout(),
                  v(function() {
                      S.setup.cache()
                  }),
                  S.instantiate()
              },
              instantiate: function() {
                  S.verbose("Storing instance of module", S),
                  I = S,
                  D.data(O, S)
              },
              create: {
                  id: function() {
                      b = (Math.random().toString(16) + "000000000").substr(2, 8),
                      y = "." + b,
                      S.verbose("Creating unique id for element", b)
                  }
              },
              destroy: function() {
                  S.verbose("Destroying previous module for", D),
                  D.off($).removeData(O),
                  S.is.ios() && S.remove.ios(),
                  j.off(y),
                  s.off(y),
                  l.off(y)
              },
              event: {
                  clickaway: function(e) {
                      var t = _.find(e.target).length > 0 || _.is(e.target)
                        , r = j.is(e.target);
                      t && (S.verbose("User clicked on dimmed page"),
                      S.hide()),
                      r && (S.verbose("User clicked on dimmable context (scaled out page)"),
                      S.hide())
                  },
                  touch: function(e) {},
                  containScroll: function(e) {
                      L.scrollTop <= 0 && (L.scrollTop = 1),
                      L.scrollTop + L.offsetHeight >= L.scrollHeight && (L.scrollTop = L.scrollHeight - L.offsetHeight - 1)
                  },
                  scroll: function(t) {
                      0 === e(t.target).closest(k.sidebar).length && t.preventDefault()
                  }
              },
              bind: {
                  clickaway: function() {
                      S.verbose("Adding clickaway events to context", j),
                      E.closable && j.on("click" + y, S.event.clickaway).on("touchend" + y, S.event.clickaway)
                  },
                  scrollLock: function() {
                      E.scrollLock && (S.debug("Disabling page scroll"),
                      s.on("DOMMouseScroll" + y, S.event.scroll)),
                      S.verbose("Adding events to contain sidebar scroll"),
                      l.on("touchmove" + y, S.event.touch),
                      D.on("scroll" + $, S.event.containScroll)
                  }
              },
              unbind: {
                  clickaway: function() {
                      S.verbose("Removing clickaway events from context", j),
                      j.off(y)
                  },
                  scrollLock: function() {
                      S.verbose("Removing scroll lock from page"),
                      l.off(y),
                      s.off(y),
                      D.off("scroll" + $)
                  }
              },
              add: {
                  inlineCSS: function() {
                      var t, r = S.cache.width || D.outerWidth(), i = S.cache.height || D.outerHeight(), n = S.is.rtl(), o = S.get.direction(), s = {
                          left: r,
                          right: -r,
                          top: i,
                          bottom: -i
                      };
                      n && (S.verbose("RTL detected, flipping widths"),
                      s.left = -r,
                      s.right = r),
                      t = "<style>",
                      "left" === o || "right" === o ? (S.debug("Adding CSS rules for animation distance", r),
                      t += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(" + s[o] + "px, 0, 0);           transform: translate3d(" + s[o] + "px, 0, 0); }") : "top" !== o && "bottom" != o || (t += " .ui.visible." + o + ".sidebar ~ .fixed, .ui.visible." + o + ".sidebar ~ .pusher {   -webkit-transform: translate3d(0, " + s[o] + "px, 0);           transform: translate3d(0, " + s[o] + "px, 0); }"),
                      S.is.ie() && ("left" === o || "right" === o ? (S.debug("Adding CSS rules for animation distance", r),
                      t += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(" + s[o] + "px, 0, 0);           transform: translate3d(" + s[o] + "px, 0, 0); }") : "top" !== o && "bottom" != o || (t += " body.pushable > .ui.visible." + o + ".sidebar ~ .pusher:after {   -webkit-transform: translate3d(0, " + s[o] + "px, 0);           transform: translate3d(0, " + s[o] + "px, 0); }"),
                      t += " body.pushable > .ui.visible.left.sidebar ~ .ui.visible.right.sidebar ~ .pusher:after, body.pushable > .ui.visible.right.sidebar ~ .ui.visible.left.sidebar ~ .pusher:after {   -webkit-transform: translate3d(0px, 0, 0);           transform: translate3d(0px, 0, 0); }"),
                      a = e(t += "</style>").appendTo(d),
                      S.debug("Adding sizing css to head", a)
                  }
              },
              refresh: function() {
                  S.verbose("Refreshing selector cache"),
                  j = e(E.context),
                  R = j.children(k.sidebar),
                  _ = j.children(k.pusher),
                  j.children(k.fixed),
                  S.clear.cache()
              },
              refreshSidebars: function() {
                  S.verbose("Refreshing other sidebars"),
                  R = j.children(k.sidebar)
              },
              repaint: function() {
                  S.verbose("Forcing repaint event"),
                  L.style.display = "none",
                  L.scrollTop = L.scrollTop,
                  L.style.display = ""
              },
              setup: {
                  cache: function() {
                      S.cache = {
                          width: D.outerWidth(),
                          height: D.outerHeight(),
                          rtl: "rtl" == D.css("direction")
                      }
                  },
                  layout: function() {
                      0 === j.children(k.pusher).length && (S.debug("Adding wrapper element for sidebar"),
                      S.error(A.pusher),
                      _ = e('<div class="pusher" />'),
                      j.children().not(k.omitted).not(R).wrapAll(_),
                      S.refresh()),
                      0 !== D.nextAll(k.pusher).length && D.nextAll(k.pusher)[0] === _[0] || (S.debug("Moved sidebar to correct parent element"),
                      S.error(A.movedSidebar, L),
                      D.detach().prependTo(j),
                      S.refresh()),
                      S.clear.cache(),
                      S.set.pushable(),
                      S.set.direction()
                  }
              },
              attachEvents: function(t, r) {
                  var i = e(t);
                  r = e.isFunction(S[r]) ? S[r] : S.toggle,
                  i.length > 0 ? (S.debug("Attaching sidebar events to element", t, r),
                  i.on("click" + $, r)) : S.error(A.notFound, t)
              },
              show: function(t) {
                  if (t = e.isFunction(t) ? t : function() {}
                  ,
                  S.is.hidden()) {
                      if (S.refreshSidebars(),
                      E.overlay && (S.error(A.overlay),
                      E.transition = "overlay"),
                      S.refresh(),
                      S.othersActive())
                          if (S.debug("Other sidebars currently visible"),
                          E.exclusive) {
                              if ("overlay" != E.transition)
                                  return void S.hideOthers(S.show);
                              S.hideOthers()
                          } else
                              E.transition = "overlay";
                      S.pushPage(function() {
                          t.call(L),
                          E.onShow.call(L)
                      }),
                      E.onChange.call(L),
                      E.onVisible.call(L)
                  } else
                      S.debug("Sidebar is already visible")
              },
              hide: function(t) {
                  t = e.isFunction(t) ? t : function() {}
                  ,
                  (S.is.visible() || S.is.animating()) && (S.debug("Hiding sidebar", t),
                  S.refreshSidebars(),
                  S.pullPage(function() {
                      t.call(L),
                      E.onHidden.call(L)
                  }),
                  E.onChange.call(L),
                  E.onHide.call(L))
              },
              othersAnimating: function() {
                  return R.not(D).filter("." + T.animating).length > 0
              },
              othersVisible: function() {
                  return R.not(D).filter("." + T.visible).length > 0
              },
              othersActive: function() {
                  return S.othersVisible() || S.othersAnimating()
              },
              hideOthers: function(e) {
                  var t = R.not(D).filter("." + T.visible)
                    , r = t.length
                    , i = 0;
                  e = e || function() {}
                  ,
                  t.sidebar("hide", function() {
                      ++i == r && e()
                  })
              },
              toggle: function() {
                  S.verbose("Determining toggled direction"),
                  S.is.hidden() ? S.show() : S.hide()
              },
              pushPage: function(t) {
                  var r, i, n, o = S.get.transition(), a = "overlay" === o || S.othersActive() ? D : _;
                  t = e.isFunction(t) ? t : function() {}
                  ,
                  "scale down" == E.transition && S.scrollToTop(),
                  S.set.transition(o),
                  S.repaint(),
                  r = function() {
                      S.bind.clickaway(),
                      S.add.inlineCSS(),
                      S.set.animating(),
                      S.set.visible()
                  }
                  ,
                  i = function() {
                      S.set.dimmed()
                  }
                  ,
                  n = function(e) {
                      e.target == a[0] && (a.off(x + y, n),
                      S.remove.animating(),
                      S.bind.scrollLock(),
                      t.call(L))
                  }
                  ,
                  a.off(x + y),
                  a.on(x + y, n),
                  v(r),
                  E.dimPage && !S.othersVisible() && v(i)
              },
              pullPage: function(t) {
                  var r, i, n = S.get.transition(), o = "overlay" == n || S.othersActive() ? D : _;
                  t = e.isFunction(t) ? t : function() {}
                  ,
                  S.verbose("Removing context push state", S.get.direction()),
                  S.unbind.clickaway(),
                  S.unbind.scrollLock(),
                  r = function() {
                      S.set.transition(n),
                      S.set.animating(),
                      S.remove.visible(),
                      E.dimPage && !S.othersVisible() && _.removeClass(T.dimmed)
                  }
                  ,
                  i = function(e) {
                      e.target == o[0] && (o.off(x + y, i),
                      S.remove.animating(),
                      S.remove.transition(),
                      S.remove.inlineCSS(),
                      ("scale down" == n || E.returnScroll && S.is.mobile()) && S.scrollBack(),
                      t.call(L))
                  }
                  ,
                  o.off(x + y),
                  o.on(x + y, i),
                  v(r)
              },
              scrollToTop: function() {
                  S.verbose("Scrolling to top of page to avoid animation issues"),
                  w = e(t).scrollTop(),
                  D.scrollTop(0),
                  t.scrollTo(0, 0)
              },
              scrollBack: function() {
                  S.verbose("Scrolling back to original page position"),
                  t.scrollTo(0, w)
              },
              clear: {
                  cache: function() {
                      S.verbose("Clearing cached dimensions"),
                      S.cache = {}
                  }
              },
              set: {
                  ios: function() {
                      c.addClass(T.ios)
                  },
                  pushed: function() {
                      j.addClass(T.pushed)
                  },
                  pushable: function() {
                      j.addClass(T.pushable)
                  },
                  dimmed: function() {
                      _.addClass(T.dimmed)
                  },
                  active: function() {
                      D.addClass(T.active)
                  },
                  animating: function() {
                      D.addClass(T.animating)
                  },
                  transition: function(e) {
                      e = e || S.get.transition(),
                      D.addClass(e)
                  },
                  direction: function(e) {
                      e = e || S.get.direction(),
                      D.addClass(T[e])
                  },
                  visible: function() {
                      D.addClass(T.visible)
                  },
                  overlay: function() {
                      D.addClass(T.overlay)
                  }
              },
              remove: {
                  inlineCSS: function() {
                      S.debug("Removing inline css styles", a),
                      a && a.length > 0 && a.remove()
                  },
                  ios: function() {
                      c.removeClass(T.ios)
                  },
                  pushed: function() {
                      j.removeClass(T.pushed)
                  },
                  pushable: function() {
                      j.removeClass(T.pushable)
                  },
                  active: function() {
                      D.removeClass(T.active)
                  },
                  animating: function() {
                      D.removeClass(T.animating)
                  },
                  transition: function(e) {
                      e = e || S.get.transition(),
                      D.removeClass(e)
                  },
                  direction: function(e) {
                      e = e || S.get.direction(),
                      D.removeClass(T[e])
                  },
                  visible: function() {
                      D.removeClass(T.visible)
                  },
                  overlay: function() {
                      D.removeClass(T.overlay)
                  }
              },
              get: {
                  direction: function() {
                      return D.hasClass(T.top) ? T.top : D.hasClass(T.right) ? T.right : D.hasClass(T.bottom) ? T.bottom : T.left
                  },
                  transition: function() {
                      var e, t = S.get.direction();
                      return e = S.is.mobile() ? "auto" == E.mobileTransition ? E.defaultTransition.mobile[t] : E.mobileTransition : "auto" == E.transition ? E.defaultTransition.computer[t] : E.transition,
                      S.verbose("Determined transition", e),
                      e
                  },
                  transitionEvent: function() {
                      var e, t = r.createElement("element"), n = {
                          transition: "transitionend",
                          OTransition: "oTransitionEnd",
                          MozTransition: "transitionend",
                          WebkitTransition: "webkitTransitionEnd"
                      };
                      for (e in n)
                          if (t.style[e] !== i)
                              return n[e]
                  }
              },
              is: {
                  ie: function() {
                      return !t.ActiveXObject && "ActiveXObject"in t || "ActiveXObject"in t
                  },
                  ios: function() {
                      var e = navigator.userAgent
                        , t = e.match(P.ios)
                        , r = e.match(P.mobileChrome);
                      return !(!t || r || (S.verbose("Browser was found to be iOS", e),
                      0))
                  },
                  mobile: function() {
                      var e = navigator.userAgent;
                      return e.match(P.mobile) ? (S.verbose("Browser was found to be mobile", e),
                      !0) : (S.verbose("Browser is not mobile, using regular transition", e),
                      !1)
                  },
                  hidden: function() {
                      return !S.is.visible()
                  },
                  visible: function() {
                      return D.hasClass(T.visible)
                  },
                  open: function() {
                      return S.is.visible()
                  },
                  closed: function() {
                      return S.is.hidden()
                  },
                  vertical: function() {
                      return D.hasClass(T.top)
                  },
                  animating: function() {
                      return j.hasClass(T.animating)
                  },
                  rtl: function() {
                      return S.cache.rtl === i && (S.cache.rtl = "rtl" == D.css("direction")),
                      S.cache.rtl
                  }
              },
              setting: function(t, r) {
                  if (S.debug("Changing setting", t, r),
                  e.isPlainObject(t))
                      e.extend(!0, E, t);
                  else {
                      if (r === i)
                          return E[t];
                      e.isPlainObject(E[t]) ? e.extend(!0, E[t], r) : E[t] = r
                  }
              },
              internal: function(t, r) {
                  if (e.isPlainObject(t))
                      e.extend(!0, S, t);
                  else {
                      if (r === i)
                          return S[t];
                      S[t] = r
                  }
              },
              debug: function() {
                  !E.silent && E.debug && (E.performance ? S.performance.log(arguments) : (S.debug = Function.prototype.bind.call(console.info, console, E.name + ":"),
                  S.debug.apply(console, arguments)))
              },
              verbose: function() {
                  !E.silent && E.verbose && E.debug && (E.performance ? S.performance.log(arguments) : (S.verbose = Function.prototype.bind.call(console.info, console, E.name + ":"),
                  S.verbose.apply(console, arguments)))
              },
              error: function() {
                  E.silent || (S.error = Function.prototype.bind.call(console.error, console, E.name + ":"),
                  S.error.apply(console, arguments))
              },
              performance: {
                  log: function(e) {
                      var t, r;
                      E.performance && (r = (t = (new Date).getTime()) - (p || t),
                      p = t,
                      h.push({
                          Name: e[0],
                          Arguments: [].slice.call(e, 1) || "",
                          Element: L,
                          "Execution Time": r
                      })),
                      clearTimeout(S.performance.timer),
                      S.performance.timer = setTimeout(S.performance.display, 500)
                  },
                  display: function() {
                      var t = E.name + ":"
                        , r = 0;
                      p = !1,
                      clearTimeout(S.performance.timer),
                      e.each(h, function(e, t) {
                          r += t["Execution Time"]
                      }),
                      t += " " + r + "ms",
                      u && (t += " '" + u + "'"),
                      (console.group !== i || console.table !== i) && h.length > 0 && (console.groupCollapsed(t),
                      console.table ? console.table(h) : e.each(h, function(e, t) {
                          console.log(t.Name + ": " + t["Execution Time"] + "ms")
                      }),
                      console.groupEnd()),
                      h = []
                  }
              },
              invoke: function(t, r, n) {
                  var a, s, l, c = I;
                  return r = r || g,
                  n = L || n,
                  "string" == typeof t && c !== i && (t = t.split(/[\. ]/),
                  a = t.length - 1,
                  e.each(t, function(r, n) {
                      var o = r != a ? n + t[r + 1].charAt(0).toUpperCase() + t[r + 1].slice(1) : t;
                      if (e.isPlainObject(c[o]) && r != a)
                          c = c[o];
                      else {
                          if (c[o] !== i)
                              return s = c[o],
                              !1;
                          if (!e.isPlainObject(c[n]) || r == a)
                              return c[n] !== i ? (s = c[n],
                              !1) : (S.error(A.method, t),
                              !1);
                          c = c[n]
                      }
                  })),
                  e.isFunction(s) ? l = s.apply(n, r) : s !== i && (l = s),
                  e.isArray(o) ? o.push(l) : o !== i ? o = [o, l] : l !== i && (o = l),
                  s
              }
          },
          m ? (I === i && S.initialize(),
          S.invoke(f)) : (I !== i && S.invoke("destroy"),
          S.initialize())
      }),
      o !== i ? o : this
  }
  
  e.fn.sidebar.settings = {
      name: "Sidebar",
      namespace: "sidebar",
      silent: !1,
      debug: !1,
      verbose: !1,
      performance: !0,
      transition: "auto",
      mobileTransition: "auto",
      defaultTransition: {
          computer: {
              left: "uncover",
              right: "uncover",
              top: "overlay",
              bottom: "overlay"
          },
          mobile: {
              left: "uncover",
              right: "uncover",
              top: "overlay",
              bottom: "overlay"
          }
      },
      context: "body",
      exclusive: !1,
      closable: !0,
      dimPage: !0,
      scrollLock: !1,
      returnScroll: !1,
      delaySetup: !1,
      duration: 500,
      onChange: function() {},
      onShow: function() {},
      onHide: function() {},
      onHidden: function() {},
      onVisible: function() {},
      className: {
          active: "active",
          animating: "animating",
          dimmed: "dimmed",
          ios: "ios",
          pushable: "pushable",
          pushed: "pushed",
          right: "right",
          top: "top",
          left: "left",
          bottom: "bottom",
          visible: "visible"
      },
      selector: {
          fixed: ".fixed",
          omitted: "script, link, style, .ui.modal, .ui.dimmer, .ui.nag, .ui.fixed",
          pusher: ".pusher",
          sidebar: ".ui.sidebar"
      },
      regExp: {
          ios: /(iPad|iPhone|iPod)/g,
          mobileChrome: /(CriOS)/g,
          mobile: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/g
      },
      error: {
          method: "The method you called is not defined.",
          pusher: "Had to add pusher element. For optimal performance make sure body content is inside a pusher element",
          movedSidebar: "Had to move sidebar. For optimal performance make sure sidebar and pusher are direct children of your body tag",
          overlay: "The overlay setting is no longer supported, use animation: overlay",
          notFound: "There were no elements that matched the specified selector"
      }
  }
}(jQuery, window, document));


// THIS FILE IS GENERATED - DO NOT EDIT!
/*!mobile-detect v1.4.4 2019-09-21*/
/*global module:false, define:false*/
/*jshint latedef:false*/
/*!@license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js*/
(function (define, undefined) {
define(function () {
    'use strict';
    var impl = {};
    impl.mobileDetectRules = {
    "phones": {
        "iPhone": "\\biPhone\\b|\\biPod\\b",
        "BlackBerry": "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
        "HTC": "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
        "Nexus": "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
        "Dell": "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
        "Motorola": "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
        "Samsung": "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F",
        "LG": "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
        "Sony": "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
        "Asus": "Asus.*Galaxy|PadFone.*Mobile",
        "NokiaLumia": "Lumia [0-9]{3,4}",
        "Micromax": "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
        "Palm": "PalmSource|Palm",
        "Vertu": "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
        "Pantech": "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
        "Fly": "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
        "Wiko": "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
        "iMobile": "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
        "SimValley": "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
        "Wolfgang": "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
        "Alcatel": "Alcatel",
        "Nintendo": "Nintendo (3DS|Switch)",
        "Amoi": "Amoi",
        "INQ": "INQ",
        "OnePlus": "ONEPLUS",
        "GenericPhone": "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
    },
    "tablets": {
        "iPad": "iPad|iPad.*Mobile",
        "NexusTablet": "Android.*Nexus[\\s]+(7|9|10)",
        "GoogleTablet": "Android.*Pixel C",
        "SamsungTablet": "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V",
        "Kindle": "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk\/[0-9.]+ like Chrome\/[0-9.]+ (?!Mobile)",
        "SurfaceTablet": "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
        "HPTablet": "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
        "AsusTablet": "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
        "BlackBerryTablet": "PlayBook|RIM Tablet",
        "HTCtablet": "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
        "MotorolaTablet": "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
        "NookTablet": "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
        "AcerTablet": "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30",
        "ToshibaTablet": "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
        "LGTablet": "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
        "FujitsuTablet": "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
        "PrestigioTablet": "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
        "LenovoTablet": "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X",
        "DellTablet": "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
        "YarvikTablet": "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
        "MedionTablet": "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
        "ArnovaTablet": "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
        "IntensoTablet": "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
        "IRUTablet": "M702pro",
        "MegafonTablet": "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
        "EbodaTablet": "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
        "AllViewTablet": "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
        "ArchosTablet": "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
        "AinolTablet": "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
        "NokiaLumiaTablet": "Lumia 2520",
        "SonyTablet": "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
        "PhilipsTablet": "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
        "CubeTablet": "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
        "CobyTablet": "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
        "MIDTablet": "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
        "MSITablet": "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
        "SMiTTablet": "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
        "RockChipTablet": "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
        "FlyTablet": "IQ310|Fly Vision",
        "bqTablet": "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
        "HuaweiTablet": "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
        "NecTablet": "\\bN-06D|\\bN-08D",
        "PantechTablet": "Pantech.*P4100",
        "BronchoTablet": "Broncho.*(N701|N708|N802|a710)",
        "VersusTablet": "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
        "ZyncTablet": "z1000|Z99 2G|z930|z990|z909|Z919|z900",
        "PositivoTablet": "TB07STA|TB10STA|TB07FTA|TB10FTA",
        "NabiTablet": "Android.*\\bNabi",
        "KoboTablet": "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
        "DanewTablet": "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
        "TexetTablet": "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
        "PlaystationTablet": "Playstation.*(Portable|Vita)",
        "TrekstorTablet": "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
        "PyleAudioTablet": "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
        "AdvanTablet": "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
        "DanyTechTablet": "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
        "GalapadTablet": "Android.*\\bG1\\b(?!\\))",
        "MicromaxTablet": "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
        "KarbonnTablet": "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
        "AllFineTablet": "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
        "PROSCANTablet": "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
        "YONESTablet": "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
        "ChangJiaTablet": "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
        "GUTablet": "TX-A1301|TX-M9002|Q702|kf026",
        "PointOfViewTablet": "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
        "OvermaxTablet": "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
        "HCLTablet": "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
        "DPSTablet": "DPS Dream 9|DPS Dual 7",
        "VistureTablet": "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
        "CrestaTablet": "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
        "MediatekTablet": "\\bMT8125|MT8389|MT8135|MT8377\\b",
        "ConcordeTablet": "Concorde([ ]+)?Tab|ConCorde ReadMan",
        "GoCleverTablet": "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
        "ModecomTablet": "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
        "VoninoTablet": "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
        "ECSTablet": "V07OT2|TM105A|S10OT1|TR10CS1",
        "StorexTablet": "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
        "VodafoneTablet": "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
        "EssentielBTablet": "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
        "RossMoorTablet": "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
        "iMobileTablet": "i-mobile i-note",
        "TolinoTablet": "tolino tab [0-9.]+|tolino shine",
        "AudioSonicTablet": "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
        "AMPETablet": "Android.* A78 ",
        "SkkTablet": "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
        "TecnoTablet": "TECNO P9|TECNO DP8D",
        "JXDTablet": "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
        "iJoyTablet": "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
        "FX2Tablet": "FX2 PAD7|FX2 PAD10",
        "XoroTablet": "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
        "ViewsonicTablet": "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
        "VerizonTablet": "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
        "OdysTablet": "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
        "CaptivaTablet": "CAPTIVA PAD",
        "IconbitTablet": "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
        "TeclastTablet": "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
        "OndaTablet": "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
        "JaytechTablet": "TPC-PA762",
        "BlaupunktTablet": "Endeavour 800NG|Endeavour 1010",
        "DigmaTablet": "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
        "EvolioTablet": "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
        "LavaTablet": "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
        "AocTablet": "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
        "MpmanTablet": "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
        "CelkonTablet": "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
        "WolderTablet": "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
        "MediacomTablet": "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
        "MiTablet": "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
        "NibiruTablet": "Nibiru M1|Nibiru Jupiter One",
        "NexoTablet": "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
        "LeaderTablet": "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
        "UbislateTablet": "UbiSlate[\\s]?7C",
        "PocketBookTablet": "Pocketbook",
        "KocasoTablet": "\\b(TB-1207)\\b",
        "HisenseTablet": "\\b(F5281|E2371)\\b",
        "Hudl": "Hudl HT7S3|Hudl 2",
        "TelstraTablet": "T-Hub2",
        "GenericTablet": "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
    },
    "oss": {
        "AndroidOS": "Android",
        "BlackBerryOS": "blackberry|\\bBB10\\b|rim tablet os",
        "PalmOS": "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
        "SymbianOS": "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
        "WindowsMobileOS": "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
        "WindowsPhoneOS": "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
        "iOS": "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
        "iPadOS": "CPU OS 13",
        "MeeGoOS": "MeeGo",
        "MaemoOS": "Maemo",
        "JavaOS": "J2ME\/|\\bMIDP\\b|\\bCLDC\\b",
        "webOS": "webOS|hpwOS",
        "badaOS": "\\bBada\\b",
        "BREWOS": "BREW"
    },
    "uas": {
        "Chrome": "\\bCrMo\\b|CriOS|Android.*Chrome\/[.0-9]* (Mobile)?",
        "Dolfin": "\\bDolfin\\b",
        "Opera": "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR\/[0-9.]+$|Coast\/[0-9.]+",
        "Skyfire": "Skyfire",
        "Edge": "Mobile Safari\/[.0-9]* Edge",
        "IE": "IEMobile|MSIEMobile",
        "Firefox": "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
        "Bolt": "bolt",
        "TeaShark": "teashark",
        "Blazer": "Blazer",
        "Safari": "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
        "WeChat": "\\bMicroMessenger\\b",
        "UCBrowser": "UC.*Browser|UCWEB",
        "baiduboxapp": "baiduboxapp",
        "baidubrowser": "baidubrowser",
        "DiigoBrowser": "DiigoBrowser",
        "Mercury": "\\bMercury\\b",
        "ObigoBrowser": "Obigo",
        "NetFront": "NF-Browser",
        "GenericBrowser": "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
        "PaleMoon": "Android.*PaleMoon|Mobile.*PaleMoon"
    },
    "props": {
        "Mobile": "Mobile\/[VER]",
        "Build": "Build\/[VER]",
        "Version": "Version\/[VER]",
        "VendorID": "VendorID\/[VER]",
        "iPad": "iPad.*CPU[a-z ]+[VER]",
        "iPhone": "iPhone.*CPU[a-z ]+[VER]",
        "iPod": "iPod.*CPU[a-z ]+[VER]",
        "Kindle": "Kindle\/[VER]",
        "Chrome": [
            "Chrome\/[VER]",
            "CriOS\/[VER]",
            "CrMo\/[VER]"
        ],
        "Coast": [
            "Coast\/[VER]"
        ],
        "Dolfin": "Dolfin\/[VER]",
        "Firefox": [
            "Firefox\/[VER]",
            "FxiOS\/[VER]"
        ],
        "Fennec": "Fennec\/[VER]",
        "Edge": "Edge\/[VER]",
        "IE": [
            "IEMobile\/[VER];",
            "IEMobile [VER]",
            "MSIE [VER];",
            "Trident\/[0-9.]+;.*rv:[VER]"
        ],
        "NetFront": "NetFront\/[VER]",
        "NokiaBrowser": "NokiaBrowser\/[VER]",
        "Opera": [
            " OPR\/[VER]",
            "Opera Mini\/[VER]",
            "Version\/[VER]"
        ],
        "Opera Mini": "Opera Mini\/[VER]",
        "Opera Mobi": "Version\/[VER]",
        "UCBrowser": [
            "UCWEB[VER]",
            "UC.*Browser\/[VER]"
        ],
        "MQQBrowser": "MQQBrowser\/[VER]",
        "MicroMessenger": "MicroMessenger\/[VER]",
        "baiduboxapp": "baiduboxapp\/[VER]",
        "baidubrowser": "baidubrowser\/[VER]",
        "SamsungBrowser": "SamsungBrowser\/[VER]",
        "Iron": "Iron\/[VER]",
        "Safari": [
            "Version\/[VER]",
            "Safari\/[VER]"
        ],
        "Skyfire": "Skyfire\/[VER]",
        "Tizen": "Tizen\/[VER]",
        "Webkit": "webkit[ \/][VER]",
        "PaleMoon": "PaleMoon\/[VER]",
        "Gecko": "Gecko\/[VER]",
        "Trident": "Trident\/[VER]",
        "Presto": "Presto\/[VER]",
        "Goanna": "Goanna\/[VER]",
        "iOS": " \\bi?OS\\b [VER][ ;]{1}",
        "Android": "Android [VER]",
        "BlackBerry": [
            "BlackBerry[\\w]+\/[VER]",
            "BlackBerry.*Version\/[VER]",
            "Version\/[VER]"
        ],
        "BREW": "BREW [VER]",
        "Java": "Java\/[VER]",
        "Windows Phone OS": [
            "Windows Phone OS [VER]",
            "Windows Phone [VER]"
        ],
        "Windows Phone": "Windows Phone [VER]",
        "Windows CE": "Windows CE\/[VER]",
        "Windows NT": "Windows NT [VER]",
        "Symbian": [
            "SymbianOS\/[VER]",
            "Symbian\/[VER]"
        ],
        "webOS": [
            "webOS\/[VER]",
            "hpwOS\/[VER];"
        ]
    },
    "utils": {
        "Bot": "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp",
        "MobileBot": "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker\/M1A1-R2D2",
        "DesktopMode": "WPDesktop",
        "TV": "SonyDTV|HbbTV",
        "WebKit": "(webkit)[ \/]([\\w.]+)",
        "Console": "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
        "Watch": "SM-V700"
    }
};
    // following patterns come from http://detectmobilebrowsers.com/
    impl.detectMobileBrowsers = {
        fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        tabletPattern: /android|ipad|playbook|silk/i
    };
    var hasOwnProp = Object.prototype.hasOwnProperty,
        isArray;
    impl.FALLBACK_PHONE = 'UnknownPhone';
    impl.FALLBACK_TABLET = 'UnknownTablet';
    impl.FALLBACK_MOBILE = 'UnknownMobile';
    isArray = ('isArray' in Array) ?
        Array.isArray : function (value) { return Object.prototype.toString.call(value) === '[object Array]'; };
    function equalIC(a, b) {
        return a != null && b != null && a.toLowerCase() === b.toLowerCase();
    }
    function containsIC(array, value) {
        var valueLC, i, len = array.length;
        if (!len || !value) {
            return false;
        }
        valueLC = value.toLowerCase();
        for (i = 0; i < len; ++i) {
            if (valueLC === array[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }
    function convertPropsToRegExp(object) {
        for (var key in object) {
            if (hasOwnProp.call(object, key)) {
                object[key] = new RegExp(object[key], 'i');
            }
        }
    }
    function prepareUserAgent(userAgent) {
        return (userAgent || '').substr(0, 500); // mitigate vulnerable to ReDoS
    }
    (function init() {
        var key, values, value, i, len, verPos, mobileDetectRules = impl.mobileDetectRules;
        for (key in mobileDetectRules.props) {
            if (hasOwnProp.call(mobileDetectRules.props, key)) {
                values = mobileDetectRules.props[key];
                if (!isArray(values)) {
                    values = [values];
                }
                len = values.length;
                for (i = 0; i < len; ++i) {
                    value = values[i];
                    verPos = value.indexOf('[VER]');
                    if (verPos >= 0) {
                        value = value.substring(0, verPos) + '([\\w._\\+]+)' + value.substring(verPos + 5);
                    }
                    values[i] = new RegExp(value, 'i');
                }
                mobileDetectRules.props[key] = values;
            }
        }
        convertPropsToRegExp(mobileDetectRules.oss);
        convertPropsToRegExp(mobileDetectRules.phones);
        convertPropsToRegExp(mobileDetectRules.tablets);
        convertPropsToRegExp(mobileDetectRules.uas);
        convertPropsToRegExp(mobileDetectRules.utils);
        // copy some patterns to oss0 which are tested first (see issue#15)
        mobileDetectRules.oss0 = {
            WindowsPhoneOS: mobileDetectRules.oss.WindowsPhoneOS,
            WindowsMobileOS: mobileDetectRules.oss.WindowsMobileOS
        };
    }());
    /**
     * Test userAgent string against a set of rules and find the first matched key.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {String|null} the matched key if found, otherwise <tt>null</tt>
     * @private
     */
    impl.findMatch = function(rules, userAgent) {
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    return key;
                }
            }
        }
        return null;
    };
    /**
     * Test userAgent string against a set of rules and return an array of matched keys.
     * @param {Object} rules (key is String, value is RegExp)
     * @param {String} userAgent the navigator.userAgent (or HTTP-Header 'User-Agent').
     * @returns {Array} an array of matched keys, may be empty when there is no match, but not <tt>null</tt>
     * @private
     */
    impl.findMatches = function(rules, userAgent) {
        var result = [];
        for (var key in rules) {
            if (hasOwnProp.call(rules, key)) {
                if (rules[key].test(userAgent)) {
                    result.push(key);
                }
            }
        }
        return result;
    };
    /**
     * Check the version of the given property in the User-Agent.
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {String} version or <tt>null</tt> if version not found
     * @private
     */
    impl.getVersionStr = function (propertyName, userAgent) {
        var props = impl.mobileDetectRules.props, patterns, i, len, match;
        if (hasOwnProp.call(props, propertyName)) {
            patterns = props[propertyName];
            len = patterns.length;
            for (i = 0; i < len; ++i) {
                match = patterns[i].exec(userAgent);
                if (match !== null) {
                    return match[1];
                }
            }
        }
        return null;
    };
    /**
     * Check the version of the given property in the User-Agent.
     * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
     *
     * @param {String} propertyName
     * @param {String} userAgent
     * @return {Number} version or <tt>NaN</tt> if version not found
     * @private
     */
    impl.getVersion = function (propertyName, userAgent) {
        var version = impl.getVersionStr(propertyName, userAgent);
        return version ? impl.prepareVersionNo(version) : NaN;
    };
    /**
     * Prepare the version number.
     *
     * @param {String} version
     * @return {Number} the version number as a floating number
     * @private
     */
    impl.prepareVersionNo = function (version) {
        var numbers;
        numbers = version.split(/[a-z._ \/\-]/i);
        if (numbers.length === 1) {
            version = numbers[0];
        }
        if (numbers.length > 1) {
            version = numbers[0] + '.';
            numbers.shift();
            version += numbers.join('');
        }
        return Number(version);
    };
    impl.isMobileFallback = function (userAgent) {
        return impl.detectMobileBrowsers.fullPattern.test(userAgent) ||
            impl.detectMobileBrowsers.shortPattern.test(userAgent.substr(0,4));
    };
    impl.isTabletFallback = function (userAgent) {
        return impl.detectMobileBrowsers.tabletPattern.test(userAgent);
    };
    impl.prepareDetectionCache = function (cache, userAgent, maxPhoneWidth) {
        if (cache.mobile !== undefined) {
            return;
        }
        var phone, tablet, phoneSized;
        // first check for stronger tablet rules, then phone (see issue#5)
        tablet = impl.findMatch(impl.mobileDetectRules.tablets, userAgent);
        if (tablet) {
            cache.mobile = cache.tablet = tablet;
            cache.phone = null;
            return; // unambiguously identified as tablet
        }
        phone = impl.findMatch(impl.mobileDetectRules.phones, userAgent);
        if (phone) {
            cache.mobile = cache.phone = phone;
            cache.tablet = null;
            return; // unambiguously identified as phone
        }
        // our rules haven't found a match -> try more general fallback rules
        if (impl.isMobileFallback(userAgent)) {
            phoneSized = MobileDetect.isPhoneSized(maxPhoneWidth);
            if (phoneSized === undefined) {
                cache.mobile = impl.FALLBACK_MOBILE;
                cache.tablet = cache.phone = null;
            } else if (phoneSized) {
                cache.mobile = cache.phone = impl.FALLBACK_PHONE;
                cache.tablet = null;
            } else {
                cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
                cache.phone = null;
            }
        } else if (impl.isTabletFallback(userAgent)) {
            cache.mobile = cache.tablet = impl.FALLBACK_TABLET;
            cache.phone = null;
        } else {
            // not mobile at all!
            cache.mobile = cache.tablet = cache.phone = null;
        }
    };
    // t is a reference to a MobileDetect instance
    impl.mobileGrade = function (t) {
        // impl note:
        // To keep in sync w/ Mobile_Detect.php easily, the following code is tightly aligned to the PHP version.
        // When changes are made in Mobile_Detect.php, copy this method and replace:
        //     $this-> / t.
        //     self::MOBILE_GRADE_(.) / '$1'
        //     , self::VERSION_TYPE_FLOAT / (nothing)
        //     isIOS() / os('iOS')
        //     [reg] / (nothing)   <-- jsdelivr complaining about unescaped unicode character U+00AE
        var $isMobile = t.mobile() !== null;
        if (
            // Apple iOS 3.2-5.1 - Tested on the original iPad (4.3 / 5.0), iPad 2 (4.3), iPad 3 (5.1), original iPhone (3.1), iPhone 3 (3.2), 3GS (4.3), 4 (4.3 / 5.0), and 4S (5.1)
            t.os('iOS') && t.version('iPad')>=4.3 ||
            t.os('iOS') && t.version('iPhone')>=3.1 ||
            t.os('iOS') && t.version('iPod')>=3.1 ||
            // Android 2.1-2.3 - Tested on the HTC Incredible (2.2), original Droid (2.2), HTC Aria (2.1), Google Nexus S (2.3). Functional on 1.5 & 1.6 but performance may be sluggish, tested on Google G1 (1.5)
            // Android 3.1 (Honeycomb)  - Tested on the Samsung Galaxy Tab 10.1 and Motorola XOOM
            // Android 4.0 (ICS)  - Tested on a Galaxy Nexus. Note: transition performance can be poor on upgraded devices
            // Android 4.1 (Jelly Bean)  - Tested on a Galaxy Nexus and Galaxy 7
            ( t.version('Android')>2.1 && t.is('Webkit') ) ||
            // Windows Phone 7-7.5 - Tested on the HTC Surround (7.0) HTC Trophy (7.5), LG-E900 (7.5), Nokia Lumia 800
            t.version('Windows Phone OS')>=7.0 ||
            // Blackberry 7 - Tested on BlackBerry Torch 9810
            // Blackberry 6.0 - Tested on the Torch 9800 and Style 9670
            t.is('BlackBerry') && t.version('BlackBerry')>=6.0 ||
            // Blackberry Playbook (1.0-2.0) - Tested on PlayBook
            t.match('Playbook.*Tablet') ||
            // Palm WebOS (1.4-2.0) - Tested on the Palm Pixi (1.4), Pre (1.4), Pre 2 (2.0)
            ( t.version('webOS')>=1.4 && t.match('Palm|Pre|Pixi') ) ||
            // Palm WebOS 3.0  - Tested on HP TouchPad
            t.match('hp.*TouchPad') ||
            // Firefox Mobile (12 Beta) - Tested on Android 2.3 device
            ( t.is('Firefox') && t.version('Firefox')>=12 ) ||
            // Chrome for Android - Tested on Android 4.0, 4.1 device
            ( t.is('Chrome') && t.is('AndroidOS') && t.version('Android')>=4.0 ) ||
            // Skyfire 4.1 - Tested on Android 2.3 device
            ( t.is('Skyfire') && t.version('Skyfire')>=4.1 && t.is('AndroidOS') && t.version('Android')>=2.3 ) ||
            // Opera Mobile 11.5-12: Tested on Android 2.3
            ( t.is('Opera') && t.version('Opera Mobi')>11 && t.is('AndroidOS') ) ||
            // Meego 1.2 - Tested on Nokia 950 and N9
            t.is('MeeGoOS') ||
            // Tizen (pre-release) - Tested on early hardware
            t.is('Tizen') ||
            // Samsung Bada 2.0 - Tested on a Samsung Wave 3, Dolphin browser
            // @todo: more tests here!
            t.is('Dolfin') && t.version('Bada')>=2.0 ||
            // UC Browser - Tested on Android 2.3 device
            ( (t.is('UC Browser') || t.is('Dolfin')) && t.version('Android')>=2.3 ) ||
            // Kindle 3 and Fire  - Tested on the built-in WebKit browser for each
            ( t.match('Kindle Fire') ||
                t.is('Kindle') && t.version('Kindle')>=3.0 ) ||
            // Nook Color 1.4.1 - Tested on original Nook Color, not Nook Tablet
            t.is('AndroidOS') && t.is('NookTablet') ||
            // Chrome Desktop 11-21 - Tested on OS X 10.7 and Windows 7
            t.version('Chrome')>=11 && !$isMobile ||
            // Safari Desktop 4-5 - Tested on OS X 10.7 and Windows 7
            t.version('Safari')>=5.0 && !$isMobile ||
            // Firefox Desktop 4-13 - Tested on OS X 10.7 and Windows 7
            t.version('Firefox')>=4.0 && !$isMobile ||
            // Internet Explorer 7-9 - Tested on Windows XP, Vista and 7
            t.version('MSIE')>=7.0 && !$isMobile ||
            // Opera Desktop 10-12 - Tested on OS X 10.7 and Windows 7
            // @reference: http://my.opera.com/community/openweb/idopera/
            t.version('Opera')>=10 && !$isMobile
            ){
            return 'A';
        }
        if (
            t.os('iOS') && t.version('iPad')<4.3 ||
            t.os('iOS') && t.version('iPhone')<3.1 ||
            t.os('iOS') && t.version('iPod')<3.1 ||
            // Blackberry 5.0: Tested on the Storm 2 9550, Bold 9770
            t.is('Blackberry') && t.version('BlackBerry')>=5 && t.version('BlackBerry')<6 ||
            //Opera Mini (5.0-6.5) - Tested on iOS 3.2/4.3 and Android 2.3
            ( t.version('Opera Mini')>=5.0 && t.version('Opera Mini')<=6.5 &&
                (t.version('Android')>=2.3 || t.is('iOS')) ) ||
            // Nokia Symbian^3 - Tested on Nokia N8 (Symbian^3), C7 (Symbian^3), also works on N97 (Symbian^1)
            t.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||
            // @todo: report this (tested on Nokia N71)
            t.version('Opera Mobi')>=11 && t.is('SymbianOS')
            ){
            return 'B';
        }
        if (
        // Blackberry 4.x - Tested on the Curve 8330
            t.version('BlackBerry')<5.0 ||
            // Windows Mobile - Tested on the HTC Leo (WinMo 5.2)
            t.match('MSIEMobile|Windows CE.*Mobile') || t.version('Windows Mobile')<=5.2
            ){
            return 'C';
        }
        //All older smartphone platforms and featurephones - Any device that doesn't support media queries
        //will receive the basic, C grade experience.
        return 'C';
    };
    impl.detectOS = function (ua) {
        return impl.findMatch(impl.mobileDetectRules.oss0, ua) ||
            impl.findMatch(impl.mobileDetectRules.oss, ua);
    };
    impl.getDeviceSmallerSide = function () {
        return window.screen.width < window.screen.height ?
            window.screen.width :
            window.screen.height;
    };
    /**
     * Constructor for MobileDetect object.
     * <br>
     * Such an object will keep a reference to the given user-agent string and cache most of the detect queries.<br>
     * <div style="background-color: #d9edf7; border: 1px solid #bce8f1; color: #3a87ad; padding: 14px; border-radius: 2px; margin-top: 20px">
     *     <strong>Find information how to download and install:</strong>
     *     <a href="https://github.com/hgoebl/mobile-detect.js/">github.com/hgoebl/mobile-detect.js/</a>
     * </div>
     *
     * @example <pre>
     *     var md = new MobileDetect(window.navigator.userAgent);
     *     if (md.mobile()) {
     *         location.href = (md.mobileGrade() === 'A') ? '/mobile/' : '/lynx/';
     *     }
     * </pre>
     *
     * @param {string} userAgent typically taken from window.navigator.userAgent or http_header['User-Agent']
     * @param {number} [maxPhoneWidth=600] <strong>only for browsers</strong> specify a value for the maximum
     *        width of smallest device side (in logical "CSS" pixels) until a device detected as mobile will be handled
     *        as phone.
     *        This is only used in cases where the device cannot be classified as phone or tablet.<br>
     *        See <a href="http://developer.android.com/guide/practices/screens_support.html">Declaring Tablet Layouts
     *        for Android</a>.<br>
     *        If you provide a value < 0, then this "fuzzy" check is disabled.
     * @constructor
     * @global
     */
    function MobileDetect(userAgent, maxPhoneWidth) {
        this.ua = prepareUserAgent(userAgent);
        this._cache = {};
        //600dp is typical 7" tablet minimum width
        this.maxPhoneWidth = maxPhoneWidth || 600;
    }
    MobileDetect.prototype = {
        constructor: MobileDetect,
        /**
         * Returns the detected phone or tablet type or <tt>null</tt> if it is not a mobile device.
         * <br>
         * For a list of possible return values see {@link MobileDetect#phone} and {@link MobileDetect#tablet}.<br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code>, <code>UnknownTablet</code> or
         * <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>UnknownMobile</code> here.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key for the phone family or tablet family, e.g. "Nexus".
         * @function MobileDetect#mobile
         */
        mobile: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.mobile;
        },
        /**
         * Returns the detected phone type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPhone, BlackBerry, HTC, Nexus, Dell, Motorola, Samsung, LG, Sony, Asus,
         * NokiaLumia, Micromax, Palm, Vertu, Pantech, Fly, Wiko, iMobile, SimValley,
         * Wolfgang, Alcatel, Nintendo, Amoi, INQ, OnePlus, GenericPhone</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownPhone</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the phone family or producer, e.g. "iPhone"
         * @function MobileDetect#phone
         */
        phone: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.phone;
        },
        /**
         * Returns the detected tablet type/family string or <tt>null</tt>.
         * <br>
         * The returned tablet (family or producer) is one of following keys:<br>
         * <br><tt>iPad, NexusTablet, GoogleTablet, SamsungTablet, Kindle, SurfaceTablet,
         * HPTablet, AsusTablet, BlackBerryTablet, HTCtablet, MotorolaTablet, NookTablet,
         * AcerTablet, ToshibaTablet, LGTablet, FujitsuTablet, PrestigioTablet,
         * LenovoTablet, DellTablet, YarvikTablet, MedionTablet, ArnovaTablet,
         * IntensoTablet, IRUTablet, MegafonTablet, EbodaTablet, AllViewTablet,
         * ArchosTablet, AinolTablet, NokiaLumiaTablet, SonyTablet, PhilipsTablet,
         * CubeTablet, CobyTablet, MIDTablet, MSITablet, SMiTTablet, RockChipTablet,
         * FlyTablet, bqTablet, HuaweiTablet, NecTablet, PantechTablet, BronchoTablet,
         * VersusTablet, ZyncTablet, PositivoTablet, NabiTablet, KoboTablet, DanewTablet,
         * TexetTablet, PlaystationTablet, TrekstorTablet, PyleAudioTablet, AdvanTablet,
         * DanyTechTablet, GalapadTablet, MicromaxTablet, KarbonnTablet, AllFineTablet,
         * PROSCANTablet, YONESTablet, ChangJiaTablet, GUTablet, PointOfViewTablet,
         * OvermaxTablet, HCLTablet, DPSTablet, VistureTablet, CrestaTablet,
         * MediatekTablet, ConcordeTablet, GoCleverTablet, ModecomTablet, VoninoTablet,
         * ECSTablet, StorexTablet, VodafoneTablet, EssentielBTablet, RossMoorTablet,
         * iMobileTablet, TolinoTablet, AudioSonicTablet, AMPETablet, SkkTablet,
         * TecnoTablet, JXDTablet, iJoyTablet, FX2Tablet, XoroTablet, ViewsonicTablet,
         * VerizonTablet, OdysTablet, CaptivaTablet, IconbitTablet, TeclastTablet,
         * OndaTablet, JaytechTablet, BlaupunktTablet, DigmaTablet, EvolioTablet,
         * LavaTablet, AocTablet, MpmanTablet, CelkonTablet, WolderTablet, MediacomTablet,
         * MiTablet, NibiruTablet, NexoTablet, LeaderTablet, UbislateTablet,
         * PocketBookTablet, KocasoTablet, HisenseTablet, Hudl, TelstraTablet,
         * GenericTablet</tt><br>
         * <br>
         * If the device is not detected by the regular expressions from Mobile-Detect, a test is made against
         * the patterns of <a href="http://detectmobilebrowsers.com/">detectmobilebrowsers.com</a>. If this test
         * is positive, a value of <code>UnknownTablet</code> or <code>UnknownMobile</code> is returned.<br>
         * When used in browser, the decision whether phone or tablet is made based on <code>screen.width/height</code>.<br>
         * <br>
         * When used server-side (node.js), there is no way to tell the difference between <code>UnknownTablet</code>
         * and <code>UnknownMobile</code>, so you will get <code>null</code> here, while {@link MobileDetect#mobile}
         * will return <code>UnknownMobile</code>.<br>
         * Be aware that since v1.0.0 in this special case you will get <code>UnknownMobile</code> only for:
         * {@link MobileDetect#mobile}, not for {@link MobileDetect#phone} and {@link MobileDetect#tablet}.
         * In versions before v1.0.0 all 3 methods returned <code>UnknownMobile</code> which was tedious to use.
         * <br>
         * In most cases you will use the return value just as a boolean.
         *
         * @returns {String} the key of the tablet family or producer, e.g. "SamsungTablet"
         * @function MobileDetect#tablet
         */
        tablet: function () {
            impl.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth);
            return this._cache.tablet;
        },
        /**
         * Returns the (first) detected user-agent string or <tt>null</tt>.
         * <br>
         * The returned user-agent is one of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
         * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
         * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {String} the key for the detected user-agent or <tt>null</tt>
         * @function MobileDetect#userAgent
         */
        userAgent: function () {
            if (this._cache.userAgent === undefined) {
                this._cache.userAgent = impl.findMatch(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgent;
        },
        /**
         * Returns all detected user-agent strings.
         * <br>
         * The array is empty or contains one or more of following keys:<br>
         * <br><tt>Chrome, Dolfin, Opera, Skyfire, Edge, IE, Firefox, Bolt, TeaShark, Blazer,
         * Safari, WeChat, UCBrowser, baiduboxapp, baidubrowser, DiigoBrowser, Mercury,
         * ObigoBrowser, NetFront, GenericBrowser, PaleMoon</tt><br>
         * <br>
         * In most cases calling {@link MobileDetect#userAgent} will be sufficient. But there are rare
         * cases where a mobile device pretends to be more than one particular browser. You can get the
         * list of all matches with {@link MobileDetect#userAgents} or check for a particular value by
         * providing one of the defined keys as first argument to {@link MobileDetect#is}.
         *
         * @returns {Array} the array of detected user-agent keys or <tt>[]</tt>
         * @function MobileDetect#userAgents
         */
        userAgents: function () {
            if (this._cache.userAgents === undefined) {
                this._cache.userAgents = impl.findMatches(impl.mobileDetectRules.uas, this.ua);
            }
            return this._cache.userAgents;
        },
        /**
         * Returns the detected operating system string or <tt>null</tt>.
         * <br>
         * The operating system is one of following keys:<br>
         * <br><tt>AndroidOS, BlackBerryOS, PalmOS, SymbianOS, WindowsMobileOS, WindowsPhoneOS,
         * iOS, iPadOS, MeeGoOS, MaemoOS, JavaOS, webOS, badaOS, BREWOS</tt><br>
         *
         * @returns {String} the key for the detected operating system.
         * @function MobileDetect#os
         */
        os: function () {
            if (this._cache.os === undefined) {
                this._cache.os = impl.detectOS(this.ua);
            }
            return this._cache.os;
        },
        /**
         * Get the version (as Number) of the given property in the User-Agent.
         * <br>
         * Will return a float number. (eg. 2_0 will return 2.0, 4.3.1 will return 4.31)
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {Number} the version as float or <tt>NaN</tt> if User-Agent doesn't contain this version.
         *          Be careful when comparing this value with '==' operator!
         * @function MobileDetect#version
         */
        version: function (key) {
            return impl.getVersion(key, this.ua);
        },
        /**
         * Get the version (as String) of the given property in the User-Agent.
         * <br>
         *
         * @param {String} key a key defining a thing which has a version.<br>
         *        You can use one of following keys:<br>
         * <br><tt>Mobile, Build, Version, VendorID, iPad, iPhone, iPod, Kindle, Chrome, Coast,
         * Dolfin, Firefox, Fennec, Edge, IE, NetFront, NokiaBrowser, Opera, Opera Mini,
         * Opera Mobi, UCBrowser, MQQBrowser, MicroMessenger, baiduboxapp, baidubrowser,
         * SamsungBrowser, Iron, Safari, Skyfire, Tizen, Webkit, PaleMoon, Gecko, Trident,
         * Presto, Goanna, iOS, Android, BlackBerry, BREW, Java, Windows Phone OS, Windows
         * Phone, Windows CE, Windows NT, Symbian, webOS</tt><br>
         *
         * @returns {String} the "raw" version as String or <tt>null</tt> if User-Agent doesn't contain this version.
         *
         * @function MobileDetect#versionStr
         */
        versionStr: function (key) {
            return impl.getVersionStr(key, this.ua);
        },
        /**
         * Global test key against userAgent, os, phone, tablet and some other properties of userAgent string.
         *
         * @param {String} key the key (case-insensitive) of a userAgent, an operating system, phone or
         *        tablet family.<br>
         *        For a complete list of possible values, see {@link MobileDetect#userAgent},
         *        {@link MobileDetect#os}, {@link MobileDetect#phone}, {@link MobileDetect#tablet}.<br>
         *        Additionally you have following keys:<br>
         * <br><tt>Bot, MobileBot, DesktopMode, TV, WebKit, Console, Watch</tt><br>
         *
         * @returns {boolean} <tt>true</tt> when the given key is one of the defined keys of userAgent, os, phone,
         *                    tablet or one of the listed additional keys, otherwise <tt>false</tt>
         * @function MobileDetect#is
         */
        is: function (key) {
            return containsIC(this.userAgents(), key) ||
                   equalIC(key, this.os()) ||
                   equalIC(key, this.phone()) ||
                   equalIC(key, this.tablet()) ||
                   containsIC(impl.findMatches(impl.mobileDetectRules.utils, this.ua), key);
        },
        /**
         * Do a quick test against navigator::userAgent.
         *
         * @param {String|RegExp} pattern the pattern, either as String or RegExp
         *                        (a string will be converted to a case-insensitive RegExp).
         * @returns {boolean} <tt>true</tt> when the pattern matches, otherwise <tt>false</tt>
         * @function MobileDetect#match
         */
        match: function (pattern) {
            if (!(pattern instanceof RegExp)) {
                pattern = new RegExp(pattern, 'i');
            }
            return pattern.test(this.ua);
        },
        /**
         * Checks whether the mobile device can be considered as phone regarding <code>screen.width</code>.
         * <br>
         * Obviously this method makes sense in browser environments only (not for Node.js)!
         * @param {number} [maxPhoneWidth] the maximum logical pixels (aka. CSS-pixels) to be considered as phone.<br>
         *        The argument is optional and if not present or falsy, the value of the constructor is taken.
         * @returns {boolean|undefined} <code>undefined</code> if screen size wasn't detectable, else <code>true</code>
         *          when screen.width is less or equal to maxPhoneWidth, otherwise <code>false</code>.<br>
         *          Will always return <code>undefined</code> server-side.
         */
        isPhoneSized: function (maxPhoneWidth) {
            return MobileDetect.isPhoneSized(maxPhoneWidth || this.maxPhoneWidth);
        },
        /**
         * Returns the mobile grade ('A', 'B', 'C').
         *
         * @returns {String} one of the mobile grades ('A', 'B', 'C').
         * @function MobileDetect#mobileGrade
         */
        mobileGrade: function () {
            if (this._cache.grade === undefined) {
                this._cache.grade = impl.mobileGrade(this);
            }
            return this._cache.grade;
        }
    };
    // environment-dependent
    if (typeof window !== 'undefined' && window.screen) {
        MobileDetect.isPhoneSized = function (maxPhoneWidth) {
            return maxPhoneWidth < 0 ? undefined : impl.getDeviceSmallerSide() <= maxPhoneWidth;
        };
    } else {
        MobileDetect.isPhoneSized = function () {};
    }
    // should not be replaced by a completely new object - just overwrite existing methods
    MobileDetect._impl = impl;
    
    MobileDetect.version = '1.4.4 2019-09-21';
    return MobileDetect;
}); // end of call of define()
})((function (undefined) {
    if (typeof module !== 'undefined' && module.exports) {
        return function (factory) { module.exports = factory(); };
    } else if (typeof define === 'function' && define.amd) {
        return define;
    } else if (typeof window !== 'undefined') {
        return function (factory) { window.MobileDetect = factory(); };
    } else {
        // please file a bug if you get this error!
        throw new Error('unknown environment');
    }
})());