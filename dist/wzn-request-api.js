!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.wznRequestApi=t():e.wznRequestApi=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=10)}([function(e,t,r){"use strict";function n(e){return"[object Array]"===S.call(e)}function o(e){return"[object ArrayBuffer]"===S.call(e)}function i(e){return"undefined"!=typeof FormData&&e instanceof FormData}function u(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function a(e){return"string"==typeof e}function s(e){return"number"==typeof e}function c(e){return void 0===e}function f(e){return null!==e&&"object"===(void 0===e?"undefined":j(e))}function l(e){return"[object Date]"===S.call(e)}function p(e){return"[object File]"===S.call(e)}function d(e){return"[object Blob]"===S.call(e)}function y(e){return"[object Function]"===S.call(e)}function h(e){return f(e)&&y(e.pipe)}function m(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function v(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function b(e,t){if(null!==e&&void 0!==e)if("object"!==(void 0===e?"undefined":j(e))&&(e=[e]),n(e))for(var r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}function w(){function e(e,r){"object"===j(t[r])&&"object"===(void 0===e?"undefined":j(e))?t[r]=w(t[r],e):t[r]=e}for(var t={},r=0,n=arguments.length;r<n;r++)b(arguments[r],e);return t}function x(e,t,r){return b(t,function(t,n){e[n]=r&&"function"==typeof t?O(t,r):t}),e}var j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O=r(2),A=r(13),S=Object.prototype.toString;e.exports={isArray:n,isArrayBuffer:o,isBuffer:A,isFormData:i,isArrayBufferView:u,isString:a,isNumber:s,isObject:f,isUndefined:c,isDate:l,isFile:p,isBlob:d,isFunction:y,isStream:h,isURLSearchParams:m,isStandardBrowserEnv:g,forEach:b,merge:w,extend:x,trim:v}},function(e,t,r){"use strict";(function(t){function n(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o=r(0),i=r(15),u={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(4):void 0!==t&&(e=r(4)),e}(),transformRequest:[function(e,t){return i(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(n(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(n(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(e){a.headers[e]={}}),o.forEach(["post","put","patch"],function(e){a.headers[e]=o.merge(u)}),e.exports=a}).call(t,r(3))},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function u(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){m&&y&&(m=!1,y.length?h=y.concat(h):v=-1,h.length&&s())}function s(){if(!m){var e=i(a);m=!0;for(var t=h.length;t;){for(y=h,h=[];++v<t;)y&&y[v].run();v=-1,t=h.length}y=null,m=!1,u(e)}}function c(e,t){this.fun=e,this.array=t}function f(){}var l,p,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var y,h=[],m=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];h.push(new c(e,t)),1!==h.length||m||i(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=f,d.addListener=f,d.once=f,d.off=f,d.removeListener=f,d.removeAllListeners=f,d.emit=f,d.prependListener=f,d.prependOnceListener=f,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,r){"use strict";(function(t){var n=r(0),o=r(16),i=r(18),u=r(19),a=r(20),s=r(5),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(21);e.exports=function(e){return new Promise(function(f,l){var p=e.data,d=e.headers;n.isFormData(p)&&delete d["Content-Type"];var y=new XMLHttpRequest,h="onreadystatechange",m=!1;if("test"===t.env.NODE_ENV||"undefined"==typeof window||!window.XDomainRequest||"withCredentials"in y||a(e.url)||(y=new window.XDomainRequest,h="onload",m=!0,y.onprogress=function(){},y.ontimeout=function(){}),e.auth){var v=e.auth.username||"",g=e.auth.password||"";d.Authorization="Basic "+c(v+":"+g)}if(y.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),y.timeout=e.timeout,y[h]=function(){if(y&&(4===y.readyState||m)&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))){var t="getAllResponseHeaders"in y?u(y.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?y.response:y.responseText,n={data:r,status:1223===y.status?204:y.status,statusText:1223===y.status?"No Content":y.statusText,headers:t,config:e,request:y};o(f,l,n),y=null}},y.onerror=function(){l(s("Network Error",e,null,y)),y=null},y.ontimeout=function(){l(s("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",y)),y=null},n.isStandardBrowserEnv()){var b=r(22),w=(e.withCredentials||a(e.url))&&e.xsrfCookieName?b.read(e.xsrfCookieName):void 0;w&&(d[e.xsrfHeaderName]=w)}if("setRequestHeader"in y&&n.forEach(d,function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:y.setRequestHeader(t,e)}),e.withCredentials&&(y.withCredentials=!0),e.responseType)try{y.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&y.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){y&&(y.abort(),l(e),y=null)}),void 0===p&&(p=null),y.send(p)})}}).call(t,r(3))},function(e,t,r){"use strict";var n=r(17);e.exports=function(e,t,r,o,i){var u=new Error(e);return n(u,t,r,o,i)}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.prototype.hasOwnProperty,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),u=function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)void 0!==t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t};t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},t.merge=function(e,r,i){if(!r)return e;if("object"!==(void 0===r?"undefined":n(r))){if(Array.isArray(e))e.push(r);else{if("object"!==(void 0===e?"undefined":n(e)))return[e,r];(i.plainObjects||i.allowPrototypes||!o.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!==(void 0===e?"undefined":n(e)))return[e].concat(r);var u=e;return Array.isArray(e)&&!Array.isArray(r)&&(u=t.arrayToObject(e,i)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,u){o.call(e,u)?e[u]&&"object"===n(e[u])?e[u]=t.merge(e[u],r,i):e.push(r):e[u]=r}),e):Object.keys(r).reduce(function(e,n){var u=r[n];return o.call(e,n)?e[n]=t.merge(e[n],u,i):e[n]=u,e},u)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var o=t.charCodeAt(n);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?r+=t.charAt(n):o<128?r+=i[o]:o<2048?r+=i[192|o>>6]+i[128|63&o]:o<55296||o>=57344?r+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(n)),r+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return r},t.compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var i=t[o],a=i.obj[i.prop],s=Object.keys(a),c=0;c<s.length;++c){var f=s[c],l=a[f];"object"===(void 0===l?"undefined":n(l))&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:f}),r.push(l))}return u(t)},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=r(11),a=n(u),s=r(30),c=n(s);a.default.defaults.baseURL="",a.default.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),a.default.interceptors.response.use(function(e){return e},function(e){return Promise.reject(e)});var f=function(){function e(){o(this,e)}return i(e,[{key:"post",value:function(e,t){return(0,a.default)({method:"post",url:e,data:c.default.stringify(t)})}},{key:"get",value:function(e,t){return(0,a.default)({method:"get",url:e,params:t})}}]),e}();t.default=f},function(e,t,r){"use strict";e.exports=r(12)},function(e,t,r){"use strict";function n(e){var t=new u(e),r=i(u.prototype.request,t);return o.extend(r,u.prototype,t),o.extend(r,t),r}var o=r(0),i=r(2),u=r(14),a=r(1),s=n(a);s.Axios=u,s.create=function(e){return n(o.merge(a,e))},s.Cancel=r(7),s.CancelToken=r(28),s.isCancel=r(6),s.all=function(e){return Promise.all(e)},s.spread=r(29),e.exports=s,e.exports.default=s},function(e,t,r){"use strict";function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function o(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||o(e)||!!e._isBuffer)}},function(e,t,r){"use strict";function n(e){this.defaults=e,this.interceptors={request:new u,response:new u}}var o=r(1),i=r(0),u=r(23),a=r(24);n.prototype.request=function(e){"string"==typeof e&&(e=i.merge({url:arguments[0]},arguments[1])),e=i.merge(o,this.defaults,{method:"get"},e),e.method=e.method.toLowerCase();var t=[a,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)r=r.then(t.shift(),t.shift());return r},i.forEach(["delete","get","head","options"],function(e){n.prototype[e]=function(t,r){return this.request(i.merge(r||{},{method:e,url:t}))}}),i.forEach(["post","put","patch"],function(e){n.prototype[e]=function(t,r,n){return this.request(i.merge(n||{},{method:e,url:t,data:r}))}}),e.exports=n},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},function(e,t,r){"use strict";var n=r(5);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e}},function(e,t,r){"use strict";function n(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(0);e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(o.isURLSearchParams(t))i=t.toString();else{var u=[];o.forEach(t,function(e,t){null!==e&&void 0!==e&&(o.isArray(e)&&(t+="[]"),o.isArray(e)||(e=[e]),o.forEach(e,function(e){o.isDate(e)?e=e.toISOString():o.isObject(e)&&(e=JSON.stringify(e)),u.push(n(t)+"="+n(e))}))}),i=u.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,u={};return e?(n.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(u[t]&&o.indexOf(t)>=0)return;u[t]="set-cookie"===t?(u[t]?u[t]:[]).concat([r]):u[t]?u[t]+", "+r:r}}),u):u}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){function e(e){var t=e;return r&&(o.setAttribute("href",t),t=o.href),o.setAttribute("href",t),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var t,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return t=e(window.location.href),function(r){var o=n.isString(r)?e(r):r;return o.protocol===t.protocol&&o.host===t.host}}():function(){return function(){return!0}}()},function(e,t,r){"use strict";function n(){this.message="String contains an invalid character"}function o(e){for(var t,r,o=String(e),u="",a=0,s=i;o.charAt(0|a)||(s="=",a%1);u+=s.charAt(63&t>>8-a%1*8)){if((r=o.charCodeAt(a+=.75))>255)throw new n;t=t<<8|r}return u}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",e.exports=o},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){return{write:function(e,t,r,o,i,u){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===u&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(e,t,r){"use strict";function n(){this.handlers=[]}var o=r(0);n.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){o.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=n},function(e,t,r){"use strict";function n(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var o=r(0),i=r(25),u=r(6),a=r(1),s=r(26),c=r(27);e.exports=function(e){return n(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=i(e.data,e.headers,e.transformRequest),e.headers=o.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return n(e),t.data=i(t.data,t.headers,e.transformResponse),t},function(t){return u(t)||(n(e),t&&t.response&&(t.response.data=i(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,function(r){e=r(e,t)}),e}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var r=this;e(function(e){r.reason||(r.reason=new o(e),t(r.reason))})}var o=r(7);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(t){e=t}),cancel:e}},e.exports=n},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";var n=r(31),o=r(32),i=r(9);e.exports={formats:i,parse:o,stringify:n}},function(e,t,r){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=r(8),i=r(9),u={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,s={delimiter:"&",encode:!0,encoder:o.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},c=function e(t,r,n,i,u,a,c,f,l,p,d,y){var h=t;if("function"==typeof c)h=c(r,h);else if(h instanceof Date)h=p(h);else if(null===h){if(i)return a&&!y?a(r,s.encoder):r;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||o.isBuffer(h)){if(a){return[d(y?r:a(r,s.encoder))+"="+d(a(h,s.encoder))]}return[d(r)+"="+d(String(h))]}var m=[];if(void 0===h)return m;var v;if(Array.isArray(c))v=c;else{var g=Object.keys(h);v=f?g.sort(f):g}for(var b=0;b<v.length;++b){var w=v[b];u&&null===h[w]||(m=Array.isArray(h)?m.concat(e(h[w],n(r,w),n,i,u,a,c,f,l,p,d,y)):m.concat(e(h[w],r+(l?"."+w:"["+w+"]"),n,i,u,a,c,f,l,p,d,y)))}return m};e.exports=function(e,t){var r=e,a=t?o.assign({},t):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!=typeof a.encoder)throw new TypeError("Encoder has to be a function.");var f=void 0===a.delimiter?s.delimiter:a.delimiter,l="boolean"==typeof a.strictNullHandling?a.strictNullHandling:s.strictNullHandling,p="boolean"==typeof a.skipNulls?a.skipNulls:s.skipNulls,d="boolean"==typeof a.encode?a.encode:s.encode,y="function"==typeof a.encoder?a.encoder:s.encoder,h="function"==typeof a.sort?a.sort:null,m=void 0!==a.allowDots&&a.allowDots,v="function"==typeof a.serializeDate?a.serializeDate:s.serializeDate,g="boolean"==typeof a.encodeValuesOnly?a.encodeValuesOnly:s.encodeValuesOnly;if(void 0===a.format)a.format=i.default;else if(!Object.prototype.hasOwnProperty.call(i.formatters,a.format))throw new TypeError("Unknown format option provided.");var b,w,x=i.formatters[a.format];"function"==typeof a.filter?(w=a.filter,r=w("",r)):Array.isArray(a.filter)&&(w=a.filter,b=w);var j=[];if("object"!==(void 0===r?"undefined":n(r))||null===r)return"";var O;O=a.arrayFormat in u?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var A=u[O];b||(b=Object.keys(r)),h&&b.sort(h);for(var S=0;S<b.length;++S){var E=b[S];p&&null===r[E]||(j=j.concat(c(r[E],E,A,l,p,d?y:null,w,h,m,v,x,g)))}var C=j.join(f),R=!0===a.addQueryPrefix?"?":"";return C.length>0?R+C:""}},function(e,t,r){"use strict";var n=r(8),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},u=function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,u=t.parameterLimit===1/0?void 0:t.parameterLimit,a=n.split(t.delimiter,u),s=0;s<a.length;++s){var c,f,l=a[s],p=l.indexOf("]="),d=-1===p?l.indexOf("="):p+1;-1===d?(c=t.decoder(l,i.decoder),f=t.strictNullHandling?null:""):(c=t.decoder(l.slice(0,d),i.decoder),f=t.decoder(l.slice(d+1),i.decoder)),o.call(r,c)?r[c]=[].concat(r[c]).concat(f):r[c]=f}return r},a=function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var i,u=e[o];if("[]"===u)i=[],i=i.concat(n);else{i=r.plainObjects?Object.create(null):{};var a="["===u.charAt(0)&&"]"===u.charAt(u.length-1)?u.slice(1,-1):u,s=parseInt(a,10);!isNaN(s)&&u!==a&&String(s)===a&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(i=[],i[s]=n):i[a]=n}n=i}return n},s=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,u=/(\[[^[\]]*])/g,s=i.exec(n),c=s?n.slice(0,s.index):n,f=[];if(c){if(!r.plainObjects&&o.call(Object.prototype,c)&&!r.allowPrototypes)return;f.push(c)}for(var l=0;null!==(s=u.exec(n))&&l<r.depth;){if(l+=1,!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(s[1])}return s&&f.push("["+n.slice(s.index)+"]"),a(f,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?u(e,r):e,a=r.plainObjects?Object.create(null):{},c=Object.keys(o),f=0;f<c.length;++f){var l=c[f],p=s(l,o[l],r);a=n.merge(a,p,r)}return n.compact(a)}}]).default});