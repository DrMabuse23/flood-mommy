(function(FuseBox){FuseBox.$fuse$=FuseBox;
var __fsbx_css = function (__filename, contents) {
    if (FuseBox.isServer) {
        return;
    }
    var styleId = __filename.replace(/[\.\/]+/g, '-');
    if (styleId.charAt(0) === '-')
        styleId = styleId.substring(1);
    var exists = document.getElementById(styleId);
    if (!exists) {
        //<link href="//fonts.googleapis.com/css?family=Covered+By+Your+Grace" rel="stylesheet" type="text/css">
        var s = document.createElement(contents ? 'style' : 'link');
        s.id = styleId;
        s.type = 'text/css';
        if (contents) {
            s.innerHTML = contents;
        }
        else {
            s.rel = 'stylesheet';
            s.href = __filename;
        }
        document.getElementsByTagName('head')[0].appendChild(s);
    }
    else {
        if (contents) {
            exists.innerHTML = contents;
        }
    }
};
/**
 * Listens to 'async' requets and if the name is a css file
 * wires it to `__fsbx_css`
 */
FuseBox.on('async', function (name) {
    if (FuseBox.isServer) {
        return;
    }
    if (/\.css$/.test(name)) {
        __fsbx_css(name);
        return false;
    }
});

FuseBox.pkg("default", {}, function(___scope___){
___scope___.file("renderer.ts", function(exports, require, module, __filename, __dirname){

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process
//ONLY if you set FuseBox.isServer to true.
//Is there a better way to check for this?
FuseBox.isServer = true;
//These two doesn't work, this might be due to fusebox and something frontend related
// import fs from 'fs';
// import * as fs from 'fs'
//Use require instead in order for Node API to work
var fs = require('fs');
console.log("Let's log fs to know Node is avaliable", fs);
debugger;
if (fs.readFileSync) {
    console.log('Sucess! - readFileSync function exists! Go ahead and start coding!');
}
else {
    console.error('fs.readFileSync sync is not avaliable');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVuZGVyZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWxlOi8vLy9Vc2Vycy9wYXNjYWxicmV3aW5nL2h0ZG9jcy9mbG9vZC1tb21teS9kZXNrdG9wL3NyYy9yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUF3RDtBQUN4RCx1REFBdUQ7QUFDdkQsd0RBQXdEO0FBQ3hELDJDQUEyQztBQUMzQywwQ0FBMEM7QUFDMUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFFeEIscUZBQXFGO0FBQ3JGLHVCQUF1QjtBQUN2QiwyQkFBMkI7QUFFM0IsbURBQW1EO0FBQ25ELElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLHdDQUF3QyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzFELFFBQVEsQ0FBQztBQUNULEVBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FDbkIsQ0FBQztJQUNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0VBQW9FLENBQUMsQ0FBQztBQUNwRixDQUFDO0FBQ0QsSUFBSSxDQUNKLENBQUM7SUFDQyxPQUFPLENBQUMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyByZXF1aXJlZCBieSB0aGUgaW5kZXguaHRtbCBmaWxlIGFuZCB3aWxsXG4vLyBiZSBleGVjdXRlZCBpbiB0aGUgcmVuZGVyZXIgcHJvY2VzcyBmb3IgdGhhdCB3aW5kb3cuXG4vLyBBbGwgb2YgdGhlIE5vZGUuanMgQVBJcyBhcmUgYXZhaWxhYmxlIGluIHRoaXMgcHJvY2Vzc1xuLy9PTkxZIGlmIHlvdSBzZXQgRnVzZUJveC5pc1NlcnZlciB0byB0cnVlLlxuLy9JcyB0aGVyZSBhIGJldHRlciB3YXkgdG8gY2hlY2sgZm9yIHRoaXM/XG5GdXNlQm94LmlzU2VydmVyID0gdHJ1ZTtcblxuLy9UaGVzZSB0d28gZG9lc24ndCB3b3JrLCB0aGlzIG1pZ2h0IGJlIGR1ZSB0byBmdXNlYm94IGFuZCBzb21ldGhpbmcgZnJvbnRlbmQgcmVsYXRlZFxuLy8gaW1wb3J0IGZzIGZyb20gJ2ZzJztcbi8vIGltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xuXG4vL1VzZSByZXF1aXJlIGluc3RlYWQgaW4gb3JkZXIgZm9yIE5vZGUgQVBJIHRvIHdvcmtcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKTtcbmNvbnNvbGUubG9nKFwiTGV0J3MgbG9nIGZzIHRvIGtub3cgTm9kZSBpcyBhdmFsaWFibGVcIiwgZnMpO1xuZGVidWdnZXI7XG5pZihmcy5yZWFkRmlsZVN5bmMpXG57XG4gIGNvbnNvbGUubG9nKCdTdWNlc3MhIC0gcmVhZEZpbGVTeW5jIGZ1bmN0aW9uIGV4aXN0cyEgR28gYWhlYWQgYW5kIHN0YXJ0IGNvZGluZyEnKTtcbn1cbmVsc2VcbntcbiAgY29uc29sZS5lcnJvcignZnMucmVhZEZpbGVTeW5jIHN5bmMgaXMgbm90IGF2YWxpYWJsZScpO1xufVxuIl19
});
});
FuseBox.pkg("fs", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

if (FuseBox.isServer) {
    module.exports = global.require("fs");
} else {
    module.exports = {};
}

});
return ___scope___.entry = "index.js";
});
FuseBox.isServer = true;

FuseBox.import("default/renderer.ts*");
FuseBox.main("default/renderer.ts*");
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),f=e.substring(o+1);return[a,f]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function f(e){return{server:require(e)}}function u(e,n){var o=n.path||"./",a=n.pkg||"default",u=r(e);if(u&&(o="./",a=u[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=u[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return f(e);var s=h[a];if(!s){if(d)throw"Package not found "+a;return f(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),v=i(c),p=s.f[v];return!p&&v.indexOf("*")>-1&&(l=v),p||l||(v=t(c,"/","index.js"),p=s.f[v],p||(v=c+".js",p=s.f[v]),p||(p=s.f[c+".jsx"]),p||(v=c+"/index.jsx",p=s.f[v])),{file:p,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:v}}function s(e,r){if(!d)return r(/\.(js|json)$/.test(e)?v.require(e):"");var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState)if(200==n.status){var i=n.getResponseHeader("Content-Type"),o=n.responseText;/json/.test(i)?o="module.exports = "+o:/javascript/.test(i)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);g.dynamic(a,o),r(g.import(e,{}))}else console.error(e,"not found on request"),r(void 0)},n.open("GET",e,!0),n.send()}function l(e,r){var n=m[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=u(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@/g,"[a-z0-9$_-]+"),"i"),f=h[t.pkgName];if(f){var p={};for(var m in f.f)a.test(m)&&(p[m]=c(t.pkgName+"/"+m));return p}}if(!i){var g="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return g?r(e):null})}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},w.require.main={filename:d?"./":v.require.main.filename,paths:d?[]:v.require.main.paths};var b=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",b),i.fn.apply(0,b),l("after-import",b),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,v=d?window:global;d&&(v.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var p=d?window.__fsbx__=window.__fsbx__||{}:v.$fsbx=v.$fsbx||{};d||(v.require=require);var h=p.p=p.p||{},m=p.e=p.e||{},g=function(){function r(){}return r.global=function(e,r){return void 0===r?v[e]:void(v[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){m[e]=m[e]||[],m[e].push(r)},r.exists=function(e){try{var r=u(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=u(e,{}),n=h[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var f=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);f(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=h.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(h[e])return n(h[e].s);var t=h[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r}();return g.packages=h,g.isBrowser=void 0!==d,g.isServer=!d,g.plugins=[],e.FuseBox=g}(this))
//# sourceMappingURL=bundle.js.map