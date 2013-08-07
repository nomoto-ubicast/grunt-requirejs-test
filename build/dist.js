// > http://underscorejs.org
// > (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
// > Underscore may be freely distributed under the MIT license.

//     (c) 2010-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

console.log("aaaa"),define("a",function(){}),console.log("b"),define("b",function(){}),typeof JSON!="object"&&(JSON={}),function(){function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),define("json2",function(){}),function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=i.toString,l=i.hasOwnProperty,c=r.forEach,h=r.map,p=r.reduce,d=r.reduceRight,v=r.filter,m=r.every,g=r.some,y=r.indexOf,b=r.lastIndexOf,w=Array.isArray,E=Object.keys,S=s.bind,x=function(e){if(e instanceof x)return e;if(!(this instanceof x))return new x(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=x),exports._=x):e._=x,x.VERSION="1.4.4";var T=x.each=x.forEach=function(e,t,r){if(e==null)return;if(c&&e.forEach===c)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(r,e[i],i,e)===n)return}else for(var o in e)if(x.has(e,o)&&t.call(r,e[o],o,e)===n)return};x.map=x.collect=function(e,t,n){var r=[];return e==null?r:h&&e.map===h?e.map(t,n):(T(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),r)};var N="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(p&&e.reduce===p)return r&&(t=x.bind(t,r)),i?e.reduce(t,n):e.reduce(t);T(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError(N);return n},x.reduceRight=x.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduceRight===d)return r&&(t=x.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=x.keys(e);s=o.length}T(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)});if(!i)throw new TypeError(N);return n},x.find=x.detect=function(e,t,n){var r;return C(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},x.filter=x.select=function(e,t,n){var r=[];return e==null?r:v&&e.filter===v?e.filter(t,n):(T(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},x.reject=function(e,t,n){return x.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},x.every=x.all=function(e,t,r){t||(t=x.identity);var i=!0;return e==null?i:m&&e.every===m?e.every(t,r):(T(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n}),!!i)};var C=x.some=x.any=function(e,t,r){t||(t=x.identity);var i=!1;return e==null?i:g&&e.some===g?e.some(t,r):(T(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n}),!!i)};x.contains=x.include=function(e,t){return e==null?!1:y&&e.indexOf===y?e.indexOf(t)!=-1:C(e,function(e){return e===t})},x.invoke=function(e,t){var n=u.call(arguments,2),r=x.isFunction(t);return x.map(e,function(e){return(r?t:e[t]).apply(e,n)})},x.pluck=function(e,t){return x.map(e,function(e){return e[t]})},x.where=function(e,t,n){return x.isEmpty(t)?n?null:[]:x[n?"find":"filter"](e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},x.findWhere=function(e,t){return x.where(e,t,!0)},x.max=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&x.isEmpty(e))return-Infinity;var r={computed:-Infinity,value:-Infinity};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})}),r.value},x.min=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&x.isEmpty(e))return Infinity;var r={computed:Infinity,value:Infinity};return T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})}),r.value},x.shuffle=function(e){var t,n=0,r=[];return T(e,function(e){t=x.random(n++),r[n-1]=r[t],r[t]=e}),r};var k=function(e){return x.isFunction(e)?e:function(t){return t[e]}};x.sortBy=function(e,t,n){var r=k(t);return x.pluck(x.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,n,r){var i={},s=k(t||x.identity);return T(e,function(t,o){var u=s.call(n,t,o,e);r(i,u,t)}),i};x.groupBy=function(e,t,n){return L(e,t,n,function(e,t,n){(x.has(e,t)?e[t]:e[t]=[]).push(n)})},x.countBy=function(e,t,n){return L(e,t,n,function(e,t){x.has(e,t)||(e[t]=0),e[t]++})},x.sortedIndex=function(e,t,n,r){n=n==null?x.identity:k(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s},x.toArray=function(e){return e?x.isArray(e)?u.call(e):e.length===+e.length?x.map(e,x.identity):x.values(e):[]},x.size=function(e){return e==null?0:e.length===+e.length?e.length:x.keys(e).length},x.first=x.head=x.take=function(e,t,n){return e==null?void 0:t!=null&&!n?u.call(e,0,t):e[0]},x.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))},x.last=function(e,t,n){return e==null?void 0:t!=null&&!n?u.call(e,Math.max(e.length-t,0)):e[e.length-1]},x.rest=x.tail=x.drop=function(e,t,n){return u.call(e,t==null||n?1:t)},x.compact=function(e){return x.filter(e,x.identity)};var A=function(e,t,n){return T(e,function(e){x.isArray(e)?t?o.apply(n,e):A(e,t,n):n.push(e)}),n};x.flatten=function(e,t){return A(e,t,[])},x.without=function(e){return x.difference(e,u.call(arguments,1))},x.uniq=x.unique=function(e,t,n,r){x.isFunction(t)&&(r=n,n=t,t=!1);var i=n?x.map(e,n,r):e,s=[],o=[];return T(i,function(n,r){if(t?!r||o[o.length-1]!==n:!x.contains(o,n))o.push(n),s.push(e[r])}),s},x.union=function(){return x.uniq(a.apply(r,arguments))},x.intersection=function(e){var t=u.call(arguments,1);return x.filter(x.uniq(e),function(e){return x.every(t,function(t){return x.indexOf(t,e)>=0})})},x.difference=function(e){var t=a.apply(r,u.call(arguments,1));return x.filter(e,function(e){return!x.contains(t,e)})},x.zip=function(){var e=u.call(arguments),t=x.max(x.pluck(e,"length")),n=new Array(t);for(var r=0;r<t;r++)n[r]=x.pluck(e,""+r);return n},x.object=function(e,t){if(e==null)return{};var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},x.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n!="number")return r=x.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},x.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1},x.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s},x.bind=function(e,t){if(e.bind===S&&S)return S.apply(e,u.call(arguments,1));var n=u.call(arguments,2);return function(){return e.apply(t,n.concat(u.call(arguments)))}},x.partial=function(e){var t=u.call(arguments,1);return function(){return e.apply(this,t.concat(u.call(arguments)))}},x.bindAll=function(e){var t=u.call(arguments,1);return t.length===0&&(t=x.functions(e)),T(t,function(t){e[t]=x.bind(e[t],e)}),e},x.memoize=function(e,t){var n={};return t||(t=x.identity),function(){var r=t.apply(this,arguments);return x.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},x.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},x.defer=function(e){return x.delay.apply(x,[e,1].concat(u.call(arguments,1)))},x.throttle=function(e,t){var n,r,i,s,o=0,u=function(){o=new Date,i=null,s=e.apply(n,r)};return function(){var a=new Date,f=t-(a-o);return n=this,r=arguments,f<=0?(clearTimeout(i),i=null,o=a,s=e.apply(n,r)):i||(i=setTimeout(u,f)),s}},x.debounce=function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},x.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}},x.wrap=function(e,t){return function(){var n=[e];return o.apply(n,arguments),t.apply(this,n)}},x.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},x.after=function(e,t){return e<=0?t():function(){if(--e<1)return t.apply(this,arguments)}},x.keys=E||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)x.has(e,n)&&(t[t.length]=n);return t},x.values=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push(e[n]);return t},x.pairs=function(e){var t=[];for(var n in e)x.has(e,n)&&t.push([n,e[n]]);return t},x.invert=function(e){var t={};for(var n in e)x.has(e,n)&&(t[e[n]]=n);return t},x.functions=x.methods=function(e){var t=[];for(var n in e)x.isFunction(e[n])&&t.push(n);return t.sort()},x.extend=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},x.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));return T(n,function(n){n in e&&(t[n]=e[n])}),t},x.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)x.contains(n,i)||(t[i]=e[i]);return t},x.defaults=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)e[n]==null&&(e[n]=t[n])}),e},x.clone=function(e){return x.isObject(e)?x.isArray(e)?e.slice():x.extend({},e):e},x.tap=function(e,t){return t(e),e};var O=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof x&&(e=e._wrapped),t instanceof x&&(t=t._wrapped);var i=f.call(e);if(i!=f.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;n.push(e),r.push(t);var o=0,u=!0;if(i=="[object Array]"){o=e.length,u=o==t.length;if(u)while(o--)if(!(u=O(e[o],t[o],n,r)))break}else{var a=e.constructor,l=t.constructor;if(a!==l&&!(x.isFunction(a)&&a instanceof a&&x.isFunction(l)&&l instanceof l))return!1;for(var c in e)if(x.has(e,c)){o++;if(!(u=x.has(t,c)&&O(e[c],t[c],n,r)))break}if(u){for(c in t)if(x.has(t,c)&&!(o--))break;u=!o}}return n.pop(),r.pop(),u};x.isEqual=function(e,t){return O(e,t,[],[])},x.isEmpty=function(e){if(e==null)return!0;if(x.isArray(e)||x.isString(e))return e.length===0;for(var t in e)if(x.has(e,t))return!1;return!0},x.isElement=function(e){return!!e&&e.nodeType===1},x.isArray=w||function(e){return f.call(e)=="[object Array]"},x.isObject=function(e){return e===Object(e)},T(["Arguments","Function","String","Number","Date","RegExp"],function(e){x["is"+e]=function(t){return f.call(t)=="[object "+e+"]"}}),x.isArguments(arguments)||(x.isArguments=function(e){return!!e&&!!x.has(e,"callee")}),typeof /./!="function"&&(x.isFunction=function(e){return typeof e=="function"}),x.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},x.isNaN=function(e){return x.isNumber(e)&&e!=+e},x.isBoolean=function(e){return e===!0||e===!1||f.call(e)=="[object Boolean]"},x.isNull=function(e){return e===null},x.isUndefined=function(e){return e===void 0},x.has=function(e,t){return l.call(e,t)},x.noConflict=function(){return e._=t,this},x.identity=function(e){return e},x.times=function(e,t,n){var r=Array(e);for(var i=0;i<e;i++)r[i]=t.call(n,i);return r},x.random=function(e,t){return t==null&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))};var M={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};M.unescape=x.invert(M.escape);var _={escape:new RegExp("["+x.keys(M.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(M.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(e){x[e]=function(t){return t==null?"":(""+t).replace(_[e],function(t){return M[e][t]})}}),x.result=function(e,t){if(e==null)return null;var n=e[t];return x.isFunction(n)?n.call(e):n},x.mixin=function(e){T(x.functions(e),function(t){var n=x[t]=e[t];x.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),j.call(this,n.apply(x,e))}})};var D=0;x.uniqueId=function(e){var t=++D+"";return e?e+t:t},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var P=/(.)^/,H={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},B=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(e,t,n){var r;n=x.defaults({},n,x.templateSettings);var i=new RegExp([(n.escape||P).source,(n.interpolate||P).source,(n.evaluate||P).source].join("|")+"|$","g"),s=0,o="__p+='";e.replace(i,function(t,n,r,i,u){return o+=e.slice(s,u).replace(B,function(e){return"\\"+H[e]}),n&&(o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(o+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(o+="';\n"+i+"\n__p+='"),s=u+t.length,t}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=new Function(n.variable||"obj","_",o)}catch(u){throw u.source=o,u}if(t)return r(t,x);var a=function(e){return r.call(this,e,x)};return a.source="function("+(n.variable||"obj")+"){\n"+o+"}",a},x.chain=function(e){return x(e).chain()};var j=function(e){return this._chain?x(e).chain():e};x.mixin(x),T(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];x.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],j.call(this,n)}}),T(["concat","join","slice"],function(e){var t=r[e];x.prototype[e]=function(){return j.call(this,t.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this),define("underscore",function(){}),function(){var e=this,t=e.Backbone,n=[],r=n.push,i=n.slice,s=n.splice,o;typeof exports!="undefined"?o=exports:o=e.Backbone={},o.VERSION="1.0.0";var u=e._;!u&&typeof require!="undefined"&&(u=require("underscore")),o.$=e.jQuery||e.Zepto||e.ender||e.$,o.noConflict=function(){return e.Backbone=t,this},o.emulateHTTP=!1,o.emulateJSON=!1;var a=o.Events={on:function(e,t,n){if(!l(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);return r.push({callback:t,context:n,ctx:n||this}),this},once:function(e,t,n){if(!l(this,"once",e,[t,n])||!t)return this;var r=this,i=u.once(function(){r.off(e,i),t.apply(this,arguments)});return i._callback=t,this.on(e,i,n)},off:function(e,t,n){var r,i,s,o,a,f,c,h;if(!this._events||!l(this,"off",e,[t,n]))return this;if(!e&&!t&&!n)return this._events={},this;o=e?[e]:u.keys(this._events);for(a=0,f=o.length;a<f;a++){e=o[a];if(s=this._events[e]){this._events[e]=r=[];if(t||n)for(c=0,h=s.length;c<h;c++)i=s[c],(t&&t!==i.callback&&t!==i.callback._callback||n&&n!==i.context)&&r.push(i);r.length||delete this._events[e]}}return this},trigger:function(e){if(!this._events)return this;var t=i.call(arguments,1);if(!l(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&c(n,t),r&&c(r,arguments),this},stopListening:function(e,t,n){var r=this._listeners;if(!r)return this;var i=!t&&!n;typeof t=="object"&&(n=this),e&&((r={})[e._listenerId]=e);for(var s in r)r[s].off(t,n,this),i&&delete this._listeners[s];return this}},f=/\s+/,l=function(e,t,n,r){if(!n)return!0;if(typeof n=="object"){for(var i in n)e[t].apply(e,[i,n[i]].concat(r));return!1}if(f.test(n)){var s=n.split(f);for(var o=0,u=s.length;o<u;o++)e[t].apply(e,[s[o]].concat(r));return!1}return!0},c=function(e,t){var n,r=-1,i=e.length,s=t[0],o=t[1],u=t[2];switch(t.length){case 0:while(++r<i)(n=e[r]).callback.call(n.ctx);return;case 1:while(++r<i)(n=e[r]).callback.call(n.ctx,s);return;case 2:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o);return;case 3:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o,u);return;default:while(++r<i)(n=e[r]).callback.apply(n.ctx,t)}},h={listenTo:"on",listenToOnce:"once"};u.each(h,function(e,t){a[t]=function(t,n,r){var i=this._listeners||(this._listeners={}),s=t._listenerId||(t._listenerId=u.uniqueId("l"));return i[s]=t,typeof n=="object"&&(r=this),t[e](n,r,this),this}}),a.bind=a.on,a.unbind=a.off,u.extend(o,a);var p=o.Model=function(e,t){var n,r=e||{};t||(t={}),this.cid=u.uniqueId("c"),this.attributes={},u.extend(this,u.pick(t,d)),t.parse&&(r=this.parse(r,t)||{});if(n=u.result(this,"defaults"))r=u.defaults({},r,n);this.set(r,t),this.changed={},this.initialize.apply(this,arguments)},d=["url","urlRoot","collection"];u.extend(p.prototype,a,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return u.clone(this.attributes)},sync:function(){return o.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return u.escape(this.get(e))},has:function(e){return this.get(e)!=null},set:function(e,t,n){var r,i,s,o,a,f,l,c;if(e==null)return this;typeof e=="object"?(i=e,n=t):(i={})[e]=t,n||(n={});if(!this._validate(i,n))return!1;s=n.unset,a=n.silent,o=[],f=this._changing,this._changing=!0,f||(this._previousAttributes=u.clone(this.attributes),this.changed={}),c=this.attributes,l=this._previousAttributes,this.idAttribute in i&&(this.id=i[this.idAttribute]);for(r in i)t=i[r],u.isEqual(c[r],t)||o.push(r),u.isEqual(l[r],t)?delete this.changed[r]:this.changed[r]=t,s?delete c[r]:c[r]=t;if(!a){o.length&&(this._pending=!0);for(var h=0,p=o.length;h<p;h++)this.trigger("change:"+o[h],this,c[o[h]],n)}if(f)return this;if(!a)while(this._pending)this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,u.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var n in this.attributes)t[n]=void 0;return this.set(t,u.extend({},e,{unset:!0}))},hasChanged:function(e){return e==null?!u.isEmpty(this.changed):u.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?u.clone(this.changed):!1;var t,n=!1,r=this._changing?this._previousAttributes:this.attributes;for(var i in e){if(u.isEqual(r[i],t=e[i]))continue;(n||(n={}))[i]=t}return n},previous:function(e){return e==null||!this._previousAttributes?null:this._previousAttributes[e]},previousAttributes:function(){return u.clone(this._previousAttributes)},fetch:function(e){e=e?u.clone(e):{},e.parse===void 0&&(e.parse=!0);var t=this,n=e.success;return e.success=function(r){if(!t.set(t.parse(r,e),e))return!1;n&&n(t,r,e),t.trigger("sync",t,r,e)},j(this,e),this.sync("read",this,e)},save:function(e,t,n){var r,i,s,o=this.attributes;e==null||typeof e=="object"?(r=e,n=t):(r={})[e]=t;if(r&&(!n||!n.wait)&&!this.set(r,n))return!1;n=u.extend({validate:!0},n);if(!this._validate(r,n))return!1;r&&n.wait&&(this.attributes=u.extend({},o,r)),n.parse===void 0&&(n.parse=!0);var a=this,f=n.success;return n.success=function(e){a.attributes=o;var t=a.parse(e,n);n.wait&&(t=u.extend(r||{},t));if(u.isObject(t)&&!a.set(t,n))return!1;f&&f(a,e,n),a.trigger("sync",a,e,n)},j(this,n),i=this.isNew()?"create":n.patch?"patch":"update",i==="patch"&&(n.attrs=r),s=this.sync(i,this,n),r&&n.wait&&(this.attributes=o),s},destroy:function(e){e=e?u.clone(e):{};var t=this,n=e.success,r=function(){t.trigger("destroy",t,t.collection,e)};e.success=function(i){(e.wait||t.isNew())&&r(),n&&n(t,i,e),t.isNew()||t.trigger("sync",t,i,e)};if(this.isNew())return e.success(),!1;j(this,e);var i=this.sync("delete",this,e);return e.wait||r(),i},url:function(){var e=u.result(this,"urlRoot")||u.result(this.collection,"url")||B();return this.isNew()?e:e+(e.charAt(e.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(e){return this._validate({},u.extend(e||{},{validate:!0}))},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=u.extend({},this.attributes,e);var n=this.validationError=this.validate(e,t)||null;return n?(this.trigger("invalid",this,n,u.extend(t||{},{validationError:n})),!1):!0}});var v=["keys","values","pairs","invert","pick","omit"];u.each(v,function(e){p.prototype[e]=function(){var t=i.call(arguments);return t.unshift(this.attributes),u[e].apply(u,t)}});var m=o.Collection=function(e,t){t||(t={}),t.url&&(this.url=t.url),t.model&&(this.model=t.model),t.comparator!==void 0&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,u.extend({silent:!0},t))},g={add:!0,remove:!0,merge:!0},y={add:!0,merge:!1,remove:!1};u.extend(m.prototype,a,{model:p,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return o.sync.apply(this,arguments)},add:function(e,t){return this.set(e,u.defaults(t||{},y))},remove:function(e,t){e=u.isArray(e)?e.slice():[e],t||(t={});var n,r,i,s;for(n=0,r=e.length;n<r;n++){s=this.get(e[n]);if(!s)continue;delete this._byId[s.id],delete this._byId[s.cid],i=this.indexOf(s),this.models.splice(i,1),this.length--,t.silent||(t.index=i,s.trigger("remove",s,this,t)),this._removeReference(s)}return this},set:function(e,t){t=u.defaults(t||{},g),t.parse&&(e=this.parse(e,t)),u.isArray(e)||(e=e?[e]:[]);var n,i,o,a,f,l,c=t.at,h=this.comparator&&c==null&&t.sort!==!1,p=u.isString(this.comparator)?this.comparator:null,d=[],v=[],m={};for(n=0,i=e.length;n<i;n++){if(!(o=this._prepareModel(e[n],t)))continue;(f=this.get(o))?(t.remove&&(m[f.cid]=!0),t.merge&&(f.set(o.attributes,t),h&&!l&&f.hasChanged(p)&&(l=!0))):t.add&&(d.push(o),o.on("all",this._onModelEvent,this),this._byId[o.cid]=o,o.id!=null&&(this._byId[o.id]=o))}if(t.remove){for(n=0,i=this.length;n<i;++n)m[(o=this.models[n]).cid]||v.push(o);v.length&&this.remove(v,t)}d.length&&(h&&(l=!0),this.length+=d.length,c!=null?s.apply(this.models,[c,0].concat(d)):r.apply(this.models,d)),l&&this.sort({silent:!0});if(t.silent)return this;for(n=0,i=d.length;n<i;n++)(o=d[n]).trigger("add",o,this,t);return l&&this.trigger("sort",this,t),this},reset:function(e,t){t||(t={});for(var n=0,r=this.models.length;n<r;n++)this._removeReference(this.models[n]);return t.previousModels=this.models,this._reset(),this.add(e,u.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),this},push:function(e,t){return e=this._prepareModel(e,t),this.add(e,u.extend({at:this.length},t)),e},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return e=this._prepareModel(e,t),this.add(e,u.extend({at:0},t)),e},shift:function(e){var t=this.at(0);return this.remove(t,e),t},slice:function(e,t){return this.models.slice(e,t)},get:function(e){return e==null?void 0:this._byId[e.id!=null?e.id:e.cid||e]},at:function(e){return this.models[e]},where:function(e,t){return u.isEmpty(e)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},findWhere:function(e){return this.where(e,!0)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return e||(e={}),u.isString(this.comparator)||this.comparator.length===1?this.models=this.sortBy(this.comparator,this):this.models.sort(u.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},sortedIndex:function(e,t,n){t||(t=this.comparator);var r=u.isFunction(t)?t:function(e){return e.get(t)};return u.sortedIndex(this.models,e,r,n)},pluck:function(e){return u.invoke(this.models,"get",e)},fetch:function(e){e=e?u.clone(e):{},e.parse===void 0&&(e.parse=!0);var t=e.success,n=this;return e.success=function(r){var i=e.reset?"reset":"set";n[i](r,e),t&&t(n,r,e),n.trigger("sync",n,r,e)},j(this,e),this.sync("read",this,e)},create:function(e,t){t=t?u.clone(t):{};if(!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var n=this,r=t.success;return t.success=function(i){t.wait&&n.add(e,t),r&&r(e,i,t)},e.save(null,t),e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(e instanceof p)return e.collection||(e.collection=this),e;t||(t={}),t.collection=this;var n=new this.model(e,t);return n._validate(e,t)?n:(this.trigger("invalid",this,e,t),!1)},_removeReference:function(e){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if((e==="add"||e==="remove")&&n!==this)return;e==="destroy"&&this.remove(t,r),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],t.id!=null&&(this._byId[t.id]=t)),this.trigger.apply(this,arguments)}});var b=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","indexOf","shuffle","lastIndexOf","isEmpty","chain"];u.each(b,function(e){m.prototype[e]=function(){var t=i.call(arguments);return t.unshift(this.models),u[e].apply(u,t)}});var w=["groupBy","countBy","sortBy"];u.each(w,function(e){m.prototype[e]=function(t,n){var r=u.isFunction(t)?t:function(e){return e.get(t)};return u[e](this.models,r,n)}});var E=o.View=function(e){this.cid=u.uniqueId("view"),this._configure(e||{}),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},S=/^(\S+)\s*(.*)$/,x=["model","collection","el","id","attributes","className","tagName","events"];u.extend(E.prototype,a,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(e,t){return this.$el&&this.undelegateEvents(),this.$el=e instanceof o.$?e:o.$(e),this.el=this.$el[0],t!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=u.result(this,"events")))return this;this.undelegateEvents();for(var t in e){var n=e[t];u.isFunction(n)||(n=this[e[t]]);if(!n)continue;var r=t.match(S),i=r[1],s=r[2];n=u.bind(n,this),i+=".delegateEvents"+this.cid,s===""?this.$el.on(i,n):this.$el.on(i,s,n)}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_configure:function(e){this.options&&(e=u.extend({},u.result(this,"options"),e)),u.extend(this,u.pick(e,x)),this.options=e},_ensureElement:function(){if(!this.el){var e=u.extend({},u.result(this,"attributes"));this.id&&(e.id=u.result(this,"id")),this.className&&(e["class"]=u.result(this,"className"));var t=o.$("<"+u.result(this,"tagName")+">").attr(e);this.setElement(t,!1)}else this.setElement(u.result(this,"el"),!1)}}),o.sync=function(e,t,n){var r=T[e];u.defaults(n||(n={}),{emulateHTTP:o.emulateHTTP,emulateJSON:o.emulateJSON});var i={type:r,dataType:"json"};n.url||(i.url=u.result(t,"url")||B()),n.data==null&&t&&(e==="create"||e==="update"||e==="patch")&&(i.contentType="application/json",i.data=JSON.stringify(n.attrs||t.toJSON(n))),n.emulateJSON&&(i.contentType="application/x-www-form-urlencoded",i.data=i.data?{model:i.data}:{});if(n.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){i.type="POST",n.emulateJSON&&(i.data._method=r);var s=n.beforeSend;n.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",r);if(s)return s.apply(this,arguments)}}i.type!=="GET"&&!n.emulateJSON&&(i.processData=!1),i.type==="PATCH"&&window.ActiveXObject&&(!window.external||!window.external.msActiveXFilteringEnabled)&&(i.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var a=n.xhr=o.ajax(u.extend(i,n));return t.trigger("request",t,a,n),a};var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};o.ajax=function(){return o.$.ajax.apply(o.$,arguments)};var N=o.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},C=/\((.*?)\)/g,k=/(\(\?)?:\w+/g,L=/\*\w+/g,A=/[\-{}\[\]+?.,\\\^$|#\s]/g;u.extend(N.prototype,a,{initialize:function(){},route:function(e,t,n){u.isRegExp(e)||(e=this._routeToRegExp(e)),u.isFunction(t)&&(n=t,t=""),n||(n=this[t]);var r=this;return o.history.route(e,function(i){var s=r._extractParameters(e,i);n&&n.apply(r,s),r.trigger.apply(r,["route:"+t].concat(s)),r.trigger("route",t,s),o.history.trigger("route",r,t,s)}),this},navigate:function(e,t){return o.history.navigate(e,t),this},_bindRoutes:function(){if(!this.routes)return;this.routes=u.result(this,"routes");var e,t=u.keys(this.routes);while((e=t.pop())!=null)this.route(e,this.routes[e])},_routeToRegExp:function(e){return e=e.replace(A,"\\$&").replace(C,"(?:$1)?").replace(k,function(e,t){return t?e:"([^/]+)"}).replace(L,"(.*?)"),new RegExp("^"+e+"$")},_extractParameters:function(e,t){var n=e.exec(t).slice(1);return u.map(n,function(e){return e?decodeURIComponent(e):null})}});var O=o.History=function(){this.handlers=[],u.bindAll(this,"checkUrl"),typeof window!="undefined"&&(this.location=window.location,this.history=window.history)},M=/^[#\/]|\s+$/g,_=/^\/+|\/+$/g,D=/msie [\w.]+/,P=/\/$/;O.started=!1,u.extend(O.prototype,a,{interval:50,getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getFragment:function(e,t){if(e==null)if(this._hasPushState||!this._wantsHashChange||t){e=this.location.pathname;var n=this.root.replace(P,"");e.indexOf(n)||(e=e.substr(n.length))}else e=this.getHash();return e.replace(M,"")},start:function(e){if(O.started)throw new Error("Backbone.history has already been started");O.started=!0,this.options=u.extend({},{root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var t=this.getFragment(),n=document.documentMode,r=D.exec(navigator.userAgent.toLowerCase())&&(!n||n<=7);this.root=("/"+this.root+"/").replace(_,"/"),r&&this._wantsHashChange&&(this.iframe=o.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(t)),this._hasPushState?o.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!r?o.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=t;var i=this.location,s=i.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!s)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&s&&i.hash&&(this.fragment=this.getHash().replace(M,""),this.history.replaceState({},document.title,this.root+this.fragment+i.search));if(!this.options.silent)return this.loadUrl()},stop:function(){o.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),clearInterval(this._checkUrlInterval),O.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe)));if(t===this.fragment)return!1;this.iframe&&this.navigate(t),this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(e){var t=this.fragment=this.getFragment(e),n=u.any(this.handlers,function(e){if(e.route.test(t))return e.callback(t),!0});return n},navigate:function(e,t){if(!O.started)return!1;if(!t||t===!0)t={trigger:t};e=this.getFragment(e||"");if(this.fragment===e)return;this.fragment=e;var n=this.root+e;if(this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}t.trigger&&this.loadUrl(e)},_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else e.hash="#"+t}}),o.history=new O;var H=function(e,t){var n=this,r;e&&u.has(e,"constructor")?r=e.constructor:r=function(){return n.apply(this,arguments)},u.extend(r,n,t);var i=function(){this.constructor=r};return i.prototype=n.prototype,r.prototype=new i,e&&u.extend(r.prototype,e),r.__super__=n.prototype,r};p.extend=m.extend=N.extend=E.extend=O.extend=H;var B=function(){throw new Error('A "url" property or function must be specified')},j=function(e,t){var n=t.error;t.error=function(r){n&&n(e,r,t),e.trigger("error",e,r,t)}}}.call(this),define("backbone",function(){}),console.log(Backbone),define("c",function(){}),require(["a","b","json2","underscore","backbone","c"]),define("main",function(){});