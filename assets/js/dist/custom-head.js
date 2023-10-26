/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

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
$(document).ready(function () {

  let origin = '';
  if (window.origin == 'https://diksha.gov.in' || window.origin == 'https://staging.ntp.net.in') {
    origin = window.origin;
  } else {
    origin = 'https://preprod.ntp.net.in'
  }

  let pdataId = "", windowUrl = "";
  if (window.location.origin.indexOf('diksha.gov.in') >= 0) {
    pdataId = 'prod.diksha.portal';
    windowUrl = 'https://diksha.gov.in';
  } else if (window.location.origin.indexOf('staging.ntp.net.in') >= 0) {
    pdataId = 'staging.diksha.portal';
    windowUrl = 'https://staging.ntp.net.in';
  } else {
    pdataId = 'preprod.diksha.portal';
    windowUrl = 'https://preprod.ntp.net.in';
  }
  window['__landing_page_config'] = {
    "hostURL": windowUrl || window.location.origin,
    "telemetry": {
      "pdata": {
        "id": pdataId,
        "ver": "5.1.0",
        "pid": "sunbird-portal"
      }
    }
  }
  var tenantId, tenantInfo, orgInfo, type = 'laptop';
  var hostURL = window['__landing_page_config'].hostURL || null;
  var md = new MobileDetect(window.navigator.userAgent),
    rules = window['MobileDetect']._impl.mobileDetectRules,
    outcome = [];
  outcome.push({ key: 'phone()', val: md.phone() });
  outcome.push({ key: 'tablet()', val: md.tablet() });
  outcome.push({ key: 'mobile()', val: md.mobile() });
  outcome.push({ key: 'os()', val: md.os() });
  outcome.push({ key: 'userAgent()', val: md.userAgent() });
  outcome.push({ key: 'mobileGrade()', val: md.mobileGrade() });
  outcome.push({ key: 'smaller side', val: window['MobileDetect']._impl.getDeviceSmallerSide() });
  outcome.push({ key: '_version', val: window['MobileDetect'].version || '(<1.3.3)' });

  ['tablets', 'phones', 'oss', 'uas', 'utils'].forEach(function (section) {
    Object.keys(rules[section]).filter(function (key) {
      return md.is(key);
    }).forEach(function (key) {
      outcome.push({ key: 'is("' + key + '")', val: true });
    });
  });

  Object.keys(rules.props).forEach(function (propKey) {
    var version;
    version = md.versionStr(propKey);
    if (version) {
      outcome.push({ key: 'versionStr("' + propKey + '")', val: '"' + version + '"' });
    }
    version = md.version(propKey);
    if (version) {
      outcome.push({ key: 'version("' + propKey + '")', val: version });
    }
  });

  if (md.phone() != null) {
    type = 'mobile';
  } else if (md.tablet() != null) {
    type = 'tab';
  } else {
    type = 'laptop';
  }

  //quiz telemetry end
  function OnLoad() {
    tenantId = sessionStorage.getItem("tenantSlug") || 'ntp';
    getOrgInfo(tenantId).done(function () {
      initTelemetryService();
      let path = window.location.pathname, ftUser = "true";
      if (localStorage && localStorage.getItem("fpDetails_v2")) ftUser = "false";
      if (path == '/') {
        logImpressionEvent('init', 'home', 'page-loaded', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), 'FirstTimeUser', ftUser, '', '');
      } else if (path == '/data/') {
        logImpressionEvent('init', 'home', 'page-loaded', '', 'public-dashboard', 'public-dashboard', 'DeviceType', window.getDeviceTypeValue(), 'FirstTimeUser', ftUser, '', '');
      } else if (path == '/about/') {
        logImpressionEvent('init', 'home', 'page-loaded', '', 'static-about', 'static-about', 'DeviceType', window.getDeviceTypeValue(), 'FirstTimeUser', ftUser, '', '');
      } else if (path == '/getapp/') {
        logImpressionEvent('init', 'home', 'page-loaded', '', 'static-getapp', 'static-getapp', 'DeviceType', window.getDeviceTypeValue(), 'FirstTimeUser', ftUser, '', '');
      } else if (path == '/contribute/') {
        logImpressionEvent('init', 'home', 'page-loaded', '', 'static-contribute', 'static-contribute', 'DeviceType', window.getDeviceTypeValue(), 'FirstTimeUser', ftUser, '', '');
      }
    });
  }

  OnLoad();
  
  function getChannelId(id){
    return new Promise((resolve, reject) => {
      $.ajax({
        method: "POST",
        url: hostURL + "/api/org/v1/search",
        data: JSON.stringify({
          request: {
            filters: {
              isRootOrg: true,
              slug: id || 'ntp'
            }
          }
        }),
        contentType: "application/json"
      }).done(function (response) {
        if (response && response.responseCode === "OK") {
          resolve(response.result.response.content[0]);
        }
      })
    });
  }
  function getOrgInfo(id) {
    return $.ajax({
      method: "POST",
      url: hostURL + "/api/org/v1/search",
      data: JSON.stringify({
        request: {
          filters: {
            isRootOrg: true,
            slug: id || 'ntp'
          }
        }
      }),
      contentType: "application/json"
    }).done(function (response) {
      if (response && response.responseCode === "OK") {
        orgInfo = response.result.response.content[0];
      }
    })
  };

  function getAnonymousUserConfig() {
    var endpoint = "/data/v1/telemetry"
    return {
      pdata: window['__landing_page_config'].telemetry.pdata,
      endpoint: endpoint,
      apislug: "/content",
      host: hostURL,
      uid: 'anonymous',
      sid: window.uuidv1(),
      channel: orgInfo.hashTagId,
      env: 'public'
    }
  }

  function initTelemetryService() {
    var config = getAnonymousUserConfig();
    window['EkTelemetry'].initialize(config);
  }

  function logImpressionEvent(impressionType, env, edata_type, edata_subtype, edata_id, page_id, c0_type, c0_id, c1_type, c1_value, c2_type, c2_value) {
    window['EkTelemetry'].config.batchsize = 1;
    let temp = [];
    if (c0_type != '') temp.push({ type: c0_type, id: c0_id })
    if (c1_type != '') temp.push({ type: c1_type, id: c1_value })
    if (c2_type != '') temp.push({ type: c2_type, id: c2_value })
    var options = {
      context: {
        env: env,
        channel: orgInfo.hashTagId,
        uid: 'anonymous',
        cdata: temp,
        rollup: getRollupData([orgInfo.hashTagId])
      },
      object: {},
      tags: [orgInfo.hashTagId]
    };
    var edata = {
      type: edata_type,
      pageid: page_id,
      subtype: impressionType || edata_subtype,
      uri: encodeURI(window.location.href),
      visits: []
    };
    window['EkTelemetry'].impression(edata, options);
  }

  window.logInteractEvent = function (env, edata_type, edata_subtype, edata_id, page_id, c0_type, c0_id, c1_type, c1_value, c2_type, c2_value, c3_type, c3_value) {
    let temp = [];
    if (c0_type != '') temp.push({ type: c0_type, id: c0_id })
    if (c1_type != '') temp.push({ type: c1_type, id: c1_value })
    if (c2_type != '') temp.push({ type: c2_type, id: c2_value })
    if (c3_type != '') temp.push({ type: c3_type, id: c3_value })
    var options = {
      context: {
        env: env,
        channel: orgInfo.hashTagId,
        uid: 'anonymous',
        cdata: temp,
        rollup: getRollupData([orgInfo.hashTagId])
      },
      object: {},
      tags: [orgInfo.hashTagId]
    };
    var edata = {
      id: edata_id,
      type: edata_type,
      pageid: page_id
    };
    window['EkTelemetry'].interact(edata, options);
  }

  function getRollupData(orgIds) {
    var rollup = {};
    orgIds.forEach(function (el, index) {
      rollup['l' + (index + 1)] = el;
    })
    return rollup;
  }

  window.getDeviceTypeValue = function () {
    var isMobile = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      }
    }
    if (isMobile.Android()) {
      return "Mobile"
    } else if (isMobile.iOS()) {
      return "Tab"
    } else {
      return "Desktop"
    }
  }

  const states = [{
    label: "Andaman & Nicobar Islands",
    value: "an"
  },
  {
    label: "Arunachal Pradesh",
    value: "ar"
  },
  {
    label: "Andhra Pradesh",
    value: "apekx"
  },
  {
    label: "Assam",
    value: "as"
  },
  {
    label: "Bihar",
    value: "br"
  },
  {
    label: "Chhattisgarh",
    value: "cg"
  },
  {
    label: "Chandigarh",
    value: "ch"
  },
  {
    label: "Delhi",
    value: "dl"
  },
  {
    label: "Goa",
    value: "ga"
  },
  {
    label: "Gujarat",
    value: "gj"
  },
  {
    label: "Himachal Pradesh",
    value: "hp"
  },
  {
    label: "Haryana",
    value: "hr"
  },
  {
    label: "Jharkhand",
    value: "jh"
  },
  {
    label: "Jammu And Kashmir",
    value: "jk"
  },
  {
    label: "Karnataka",
    value: "ka"
  },
  {
    label: "Kerala",
    value: "kl"
  },
  {
    label: "Maharashtra",
    value: "mitra"
  },
  {
    label: "Meghalaya",
    value: "ml"
  },
  {
    label: "Manipur",
    value: "mn"
  },
  {
    label: "Madhya Pradesh",
    value: "mp"
  },
  {
    label: "Mizoram",
    value: "mz"
  },
  {
    label: "Nagaland",
    value: "nl"
  },
  {
    label: "Odisha",
    value: "od"
  },
  {
    label: "Punjab",
    value: "pb"
  },
  {
    label: "Pondicherry",
    value: "py"
  },
  {
    label: "Rajasthan",
    value: "rj"
  },
  {
    label: "Sikkim",
    value: "sk"
  },
  {
    label: "Tamil Nadu",
    value: "tn"
  },
  {
    label: "Tripura",
    value: "tp"
  },
  {
    label: "Telangana",
    value: "ts"
  },
  {
    label: "Uttarakhand",
    value: "uk"
  },
  {
    label: "Uttar Pradesh",
    value: "up"
  }];

  states.forEach(element => {
    $('.state-boards').append('<option value="' + element.value + '">' + element.label + '</option>');
  });

  $(".state-boards").on("change", function () {
    if ($(this).children("option:selected").val() != "Select State") {
      $(".state-explore").attr("data-slug", $(this).children("option:selected").val()).attr("data-name", $(this).children("option:selected").text());
    } else {
      $(".state-explore").attr("data-slug", '#').attr("data-name", '#');
    }
  });

  var sessionItem = sessionStorage.getItem("rootTenantLogo");
  if (sessionItem) {
    sessionStorage.removeItem("rootTenantLogo");
  }
  var sessionItem = sessionStorage.getItem("tenantSlug");
  if (sessionItem) {
    sessionStorage.removeItem("tenantSlug");
  }

  // $("body").ready(function ($) {
  $(".sb-btn-explore-diksha").click(function (e) {
    e.preventDefault();
    window.logInteractEvent('home', 'select-explore', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
    window.open('/explore', "_self");
    return false;
  });

  $(".state-explore").click(function (e) {
    e.preventDefault();
    let slug = $(this).attr('data-slug'), name = $(this).attr('data-name');
    window.logInteractEvent('home', 'select-explore-' + slug.toLowerCase(), '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), 'State', name, '', '', '', '');
    window.open('/' + slug + '/explore', "_self");
    return false;
  });

  $(".nonstate-explore").click(async(e) =>{
    e.preventDefault();
      let slug =e.currentTarget.getAttribute('data-slug');
      let  name = e.currentTarget.getAttribute('data-name');
      window.logInteractEvent('home', 'select-explore-' + slug.toLowerCase(), '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), 'State', name, '', '', '', '');
      if(name === "NCERT"){
        window.open('/' + slug + '/exploren/1?publisher=NCERT&selectedTab=textbook', "_self");
      } else {
        window.open('/' + slug + '/explore', "_self");
      }
      return false;
  });

  $(".nav-header-menu").click(function (e) {
    e.preventDefault();
    let etype = $(this).attr('data-etype'), eid = $(this).attr('data-eid');
    window.logInteractEvent('home', etype, '', eid, eid, 'DeviceType', window.getDeviceTypeValue(), 'State', name, '', '', '', '');
    window.location.href = $(this).attr('href');
    return false;
  });

  $(".get-it-on-googleplay").click(function (e) {
    e.preventDefault();
    window.logInteractEvent('home', 'select-mobileapp', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
    window.open('https://play.google.com/store/apps/details?id=in.gov.diksha.app&referrer=utm_source=missionsite&utm_medium=explore');
    return false;
  });

  $(".terms-policies").click(function (e) {
    e.preventDefault();
    window.logInteractEvent('home', 'select-terms', '', 'static-home', 'static-home', 'DeviceType', window.getDeviceTypeValue(), '', '', '', '', '', '');
    window.open('/term-of-use.html',"_self");
    return false;
  });

  // });

});

/******************************************************************* */
var x = window.matchMedia("(max-width: 992px)");
function ResizeAdpativeContent() {
  if (x.matches) { // If media query matches
    $("#webView").remove();
  } else {
    $("#mobileView").remove();
  }
}

$(document).ready(function () {
  // $('[data-toggle="tooltip"]').tooltip();
  ResizeAdpativeContent();

  // tab index enter key event


  //parallax scroll
  $(window).on("load scroll", function () {
    var parallaxElement = $(".parallax_scroll"),
      parallaxQuantity = parallaxElement.length;
    window.requestAnimationFrame(function () {
      for (var i = 0; i < parallaxQuantity; i++) {
        var currentElement = parallaxElement.eq(i),
          windowTop = $(window).scrollTop(),
          elementTop = currentElement.offset().top,
          //elementBottom = $(window).height() - elementTop - currentElement.height();
          elementHeight = currentElement.height(),
          viewPortHeight = window.innerHeight * 1 - elementHeight * 1,
          scrolled = windowTop - elementTop - viewPortHeight;
        currentElement.css({
          transform: "translate3d(-40%," + scrolled * 0.25 + "px, 0)"
        });
      }
    });
  });
  $('.dk-nav-tabs li:first-child').addClass('active');
  $('.tab-content').hide();
  $('.tab-content:first-child').show();

  // Click function
  $('.dk-nav-tabs li').click(function () {
    $('.dk-nav-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
  $('.mdk-nav-tabs .dk-nav-tabs li:first-child').addClass('active');
  $('.mdk-nav-tabs .tab-content').hide();
  $('.mdk-nav-tabs .tab-content:first').show();

  // Click function
  $('.mdk-nav-tabs .dk-nav-tabs li').click(function () {
    $('.mdk-nav-tabs .dk-nav-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.mdk-nav-tabs .tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
});

$(window).resize(function () {
  if (/iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(navigator.userAgent)) {
    // alert('mobile browser')
  } else {
    if (x.matches) {
      location.reload();
    }
  }
});

/* font resizer */
var min = 12;
var base = 16;
var max = 20;

var el = document.querySelector("html");
var fontSizeEle = window
  .getComputedStyle(el, null)
  .getPropertyValue("font-size");
//---- Get font from local, if undefined or null use style font
var localFontSize = getFromLocal();
var currentFontSize = localFontSize ? localFontSize : fontSizeEle;
var fontSize = parseFloat(currentFontSize);
storeToLocal(fontSize);
//--------------------------------

function EnDisableFontSizeBtns() {
  document.querySelector("#ResetFontSize").disabled =
    fontSize == base ? true : false;
  document.querySelector("#DecreaseFontSize").disabled =
    fontSize == min ? true : false;
  document.querySelector("#IncreaseFontSize").disabled =
    fontSize == max ? true : false;
}

function changeFontSize(limit, direction) {
  fontSize = fontSize + direction;
}

function IncreaseFontSize() {
  fontSize = fontSize + 2;
  IncreaseSize = fontSize <= max ? storeToLocal(fontSize) : '';
}

function ResetFontSize() {
  fontSize = base;
  storeToLocal(fontSize);
}

function DecreaseFontSize() {
  fontSize = fontSize - 2;
  DecreaseSize = fontSize >= min ? storeToLocal(fontSize) : '';
}

/*Store and get from local storage*/
function storeToLocal(fontSize) {
  //change font and store.
  el.style.fontSize = fontSize + "px";
  document.getElementById("currentFont").innerHTML = fontSize;
  EnDisableFontSizeBtns();
  localStorage.setItem("fontSize", fontSize);
}

function getFromLocal() {
  var value = localStorage.getItem("fontSize");
  return value;
}


// skip to maincontent
function scrollMainContent() {
  document.querySelector('#scrollMainContent').scrollIntoView({
    behavior: 'smooth'
  });
}

// check for saved 'darkMode' in localStorage
  //dark mode and default theme
  const darkModeToggle = document.querySelector('#dark-mode-toggle');
  const elhtml = document.querySelector('html');
      const disableDarkMode = () => {
          // 1. Remove the class from the body
          elhtml.classList.remove('darkmode');
          // 2. Update darkMode in localStorage 
          localStorage.setItem('data-theme', "Default");
        }
        const enableDarkMode = () => {
          // 1. Add the class to the body
          elhtml.classList.add('darkmode');
          // 2. Update darkMode in localStorage
          localStorage.setItem('data-theme', 'Darkmode');
        }
      const getTheme = localStorage.getItem('data-theme');
      if(getTheme==null){
        localStorage.setItem('data-theme',"Default");
      }else{
        if (getTheme === 'Darkmode') {
          enableDarkMode();
        } else if(getTheme=="Default"){
          disableDarkMode();
        }
      }
  // When someone clicks the button
  darkModeToggle && darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    var theme = localStorage.getItem('data-theme');
    // if it not current enabled, enable it
    if (theme !== 'Darkmode') {
      enableDarkMode();
      // if it has been enabled, turn it off  
    } else {
      disableDarkMode();
    }
  });
const languageTranslations = {
    "en": {
        "language": "English",
        "diksha": "DIKSHA",
        "govofIndia": "भारत सरकार | Government of India",
        "dikshamoto": "Digital Infrastructure for Knowledge Sharing",
        "dikshaDescription": "An initiative of the National Council of Educational Research and Training (Ministry of Education, Govt of India)",
        "btnExploreDiksha": "Explore DIKSHA",
        "explore": "Explore",
        "ExploreDikshaContent": "Explore DIKSHA\'s world of open digital content",
        "stateboard": "State / UT Board",
        "stateboardDescription": "Explore content published by States and UTs",
        "about": "About",
        "home": "Home",
        "dashboard": "Dashboard",
        "getapp": "Get App",
        "contribute": "Contribute",
        "aboutdiksha": "About DIKSHA",
        "aboutdikshacontent": "DIKSHA (Digital Infrastructure for Knowledge Sharing) is a national platform for school education, an initiative of National Council for Education Research and Training (NCERT), Ministry of Education. DIKSHA was developed based on the core principles of open architecture, open access, open licensing diversity, choice and autonomy as outlined in the Strategy and Approach Paper for the National Teacher Platform released by the former Hon’ Minister for Human Resources Development Shri Prakash Javdekar in May, 2017. DIKSHA itself was launched by the Hon’ Vice President of India on Sept 5th, 2017 and has since been adopted by 35 states/UTs across as well as CBSE and NCERT and by crores of learners and teachers.",
        "aboutdikshacontent2": "DIKSHA is built on open source technology, made in India and made for India, which incorporates internet scale technologies and enables several use-cases and solutions for teaching and learning. DIKSHA is built using MIT licensed open source technology called Sunbird, which is a digital infrastructure for learning and is designed to support multiple languages and solutions and offers over a 100 micro services as building blocks for the development of platforms and solutions.\n\nDIKSHA, as mentioned earlier, is available for the use of all states and UTs of India. Each state/UT leverages the DIKSHA platform in its own way, as it has the freedom and choice to use the varied capabilities and solutions of the platform to design and run programs for their teachers and learners. DIKSHA policies and tools make it possible for the education ecosystem (educationist, experts, organisations, institutions - government, autonomous institutions, non-govt and private organisations) to participate, contribute and leverage a common platform to achieve learning goals at scale for the country.\n\nDIKSHA can be accessed by learners and teachers across the country and currently supports 18+ languages and the various curricula of NCERT, CBSE and SCERTs across India. The platform is being leveraged and developed for school education, foundational learning programs and to support inclusive learning for underserved and differently-abled communities of learners and teachers.\n\nIn the context of COVID-19 related disruption of schooling, DIKSHA makes it possible for all states/UTs to enable learning/education at home through innovative state programs; hence leapfrogging the use of technology for the benefit of teachers and learners across India.",
        "aboutdikshanewcontent":"DIKSHA (Digital Infrastructure for Knowledge Sharing) is a national platform for school education, an initiative of National Council for Educational Research and Training (NCERT), under the aegis of the Ministry of Education (MoE), GoI. Launched in 2017 by Honourable Vice President of India – Shri M. Venkaiah Naidu, DIKSHA has been adopted by almost all the States, Union Territories, central autonomous bodies/boards including CBSE. DIKSHA was developed on the basis of the Strategy and Approach Paper for the National Teacher Platform released by the then Honourable Minister for Human Resource Development, Shri Prakash Javdekar in September, 2017. DIKSHA can be accessed by learners and teachers across the country and currently supports 36 Indian languages. Each State/UT leverages the DIKSHA platform in its own way, as it has the freedom and choice to use the varied capabilities and solutions of the platform to design and run programs for teachers, learners and administrators. DIKSHA policies and tools make it possible for the education ecosystem (educationist, experts, organisations, institutions - government, autonomous institutions, non-govt and private organisations) to participate, contribute and leverage a common platform to achieve learning goals at scale for the country. NCERT Textbooks are licenced under CC BY NC-ND and all the resources are licenced under CC BY NC-SA. Under the PM eVidya initiative of the GoI, which was declared as part of the Atma Nirbhar Bharat, DIKSHA has been declared as ‘One Nation, One Digital Platform’.",
        "aboutdikshanewcontent2":"DIKSHA is built on open source technology, made in India and made for India, which incorporates internet scale technologies and enables several use-cases and solutions for teaching and learning. DIKSHA is built using MIT licensed open source technology called Sunbird, which is a digital infrastructure for learning and solutions and offers over a 100 micro services as building blocks for the development of platforms and solutions.\n\nThe Honourable Prime Minister of India has launched NDEAR (National Digital Education Architecture) on 29th July 2021 which provides building blocks for development of federated and interoperable systems by States/UTs. The core building blocks of DIKSHA comprise majority of NDEAR building blocks, having enabled some successful use-cases of NDEAR such as: energized textbooks, online courses, content authoring, content sourcing, interactive quizzes, question banks, chatbot, analytics and dashboard. In the times of COVID-19 pandemic, the platform has experienced unprecedented rise in access by learners and teachers across the country.\n\nFor digital content to aid in the teaching and learning processes, a rich repository of varied resources was contributed by schools/individual teachers, content partners, NGOs, corporates under CSR under VidyaDaan against the various content requirements of NCERT/CBSE/States.\n\nTo aid teaching and learning for Children With Special Needs (CWSN), a large number of audio books, ISL (Indian Sign Language) Videos and Dictionary have been made available on DIKSHA for CWSN.\n\nDuring the pandemic, the massive teacher’s professional development programme NISHTHA 1.0 (National Initiatives for School Heads and Teacher’s Holistic Advancement) for Elementary grades was launched online through DIKSHA. NISHTHA 2.0 & 3.0 focus on Secondary and Foundational Literacy and Numeracy. Apart from NISHTHA , several States/UTs have designed their own capacity building programs.\n\nNCERT also delivers content for students on a 24x7 basis through PM eVIDYA DTH-TV channels (One Class, One Channel from classes I to XII). These channels deliver class-wise contents that are linked to DIKSHA through QR codes. To enable coherence, the broadcast content is also made available on DIKSHA, where this content is accessible any time, anywhere.",
        "aboutdikshaimagetext": "Solutions on DIKSHA - Diverse, Flexible and Evolving",
        "news": "News",
        "resources": "Resources",
        "events": "Events",
        "AboutVidyaDaan": "About VidyaDaan",
        "AboutVidyaDaanDescription": "This national program is a call to the nation, particularly individuals & organizations across the country to contribute e-learning resources in the education domain to ensure that quality learning continues for learners across India.",
        "AboutVidyaDaanMoreDescription": "Contributions can be made by individuals, teachers, educationists, subject experts, schools, government and non-government organisations etc after registering & nominating themselves.These contributions can be of different types of content such as explanation videos, teaching videos, practice questions, competency-based items, lesson plans etc. for any grade from 1 to 12 and for any subject as specified by the states/UTs under their respective projects. Such contributions must be open-licensed under the Creative Commons license framework and can be curated by the respective states/UTs & CBSE and those contributors whose content is accepted and finds high usage, will be duly recognized.",
        "VidyaDaanIntro": "A program of the nation, for the nation and by the nation for managing continuity of quality learning",
        "btnParticipate": "Participate",
        "VidyaDaanTypes": "Types of e-learning resources you can contribute",
        "ExplanationVideos": "Explanation Videos",
        "PracticeQuestions": "Practice Questions",
        "TeachingVideos": "Teaching Videos",
        "ExperierntialLearningVideos": "Experiential Learning Videos",
        "LessonPlans": "Lesson Plans",
        "readmore": "Read more",
        "DIKSHAforMobile": "DIKSHA for Mobile",
        "DIKSHAforMobileDescription": "The DIKSHA platform offers engaging learning material, relevant to the prescribed school curriculum, to teachers, students and parents. Download the DIKSHA app and scan QR codes in your textbooks for easy access to all your lessons. {Android 5.1 and above}",
        "DIKSHAforWeb": "DIKSHA for Web",
        "DIKSHAforWebDescription": "The DIKSHA learning portal provides online access to all of DIKSHA’s e-Resources online via the browser.",
        "btnVisitDIKSHAportal": "Visit DIKSHA portal",
        "DIKSHAOffline": "Desktop App",
        "DIKSHAOfflineDescription": "The DIKSHA desktop offers access to downloaded digital textbooks, question banks and more offline on your personal computer. {Available for windows and ubuntu OS}.",
        "comingsoon": "COMING SOON!\'",
        "DataDashboard": "Data Dashboard",
        "viewUsagepattern": "View the usage pattern across the nation and all the states",
        "last7Weeks": "Last 7 weeks data for Total learning sessions",
        "lastupdated": "Last updated",
        "clickstateut": "Click on a state/UT for more details",
        "representationonly": "MAP FOR REPRESENTATION ONLY",
        "usageMetrics": "Usage metrics",
        "usageMetricsDescription": "Explore academic and non academic content of 22+ State boards",
        "btnViewDashboard": "View Dashboard",
        "open": "Open",
        "download": "Download",
        "DIKSHAUsageTillDate": "DIKSHA current usage",
        "LearningLessons": "Learning sessions",
        "minutes": "Minutes",
        "TermsofUse": "Terms and Policies",
        "needHelp": "Need Help",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "Skip to Main Content",
        "sitemap": "Site Map",
        "ScreenReaderAccess": "Accessibility Corner",
        "DIKSHAUpdates": "DIKSHA Updates",
        "lastupdatedonresult": "Report updated weekly - by noon, every monday",
        "lastupdatedonresultdaily": "Report Updated Daily",
        "totalDIKSHAusage": "Total DIKSHA usage time in minutes",
        "numberLearningActivities": "Number of times learning activities were undertaken using DIKSHA infrastructure by learners",
        "noevents": "No upcoming events available",
        "updateticker1": "A program of the nation, for the nation and by the nation to ensure continuity of quality of education",
        "updateticker2": "An initiative of National Council for Educational Research and Training (Ministry of Education, Govt of India)",
        "contributionMetrics": "Contribution metrics",
        "contributionDescription": "Content contribution data from across the nation",
        "dikshaContentContribution": "Diksha Content Contribution",
        "contributors": "Contributors",
        "contributions": "Contributions",
        "courseMetrics": "Course metrics",
        "courseMetricsDescription": "Course data from across the nation",
        "courseUsage": "DIKSHA Courses & Usage",
        "courses": "Courses",
        "Enrolments": "Enrolments",
        "completions": "Course Completions",
        "certificatesIssued": "Certificates issued",
        "Datasets": "Datasets",
        "contributionsDiksha": "Content contributions made to DIKSHA",
        "contributorsDiksha": "Number of contributors",
        "EnrolmentsDiksha": "Total course enrolments in DIKSHA",
        "CompletionsDiksha": "Total course completions in DIKSHA",
        "coursesDiksha": "Number of courses in DIKSHA",
        "DikshaDatasets": "DIKSHA Public Datasets",
        "DatasetsDescription": "DIKSHA, being a platform that enables digital infrastructure for learning, supports a wide variety of learning and teaching needs across the country. DIKSHA usage data thus generated is meant to be public, and accessible to all via public dashboard and datasets. This page has a catalogue of all DIKSHA datasets available as of now - further details about each dataset can be obtained from the details page of the dataset.",
        "csv": "CSV",
        "json": "JSON",
        "usefulLinks": "Useful links",
        "dictionaryheading": "Content contribution data from across the nation",
        "datadictionary": "Data Dictionary",
        "Details": "Details",
        "usagemetrics": "Usage Metrics",
        "contributionmetrics": "Contribution Metrics",
        "coursemetrics": "Course Metrics",
        "board-ncert-description": "Explore content published by NCERT (National Council of Educational Research and Training)",
        "board-cbse-description": "Explore content published by CBSE (Central Board of Secondary Education)",
        "board-nios-description": "Explore content published by NIOS (The National Institute of Open Schooling)",
        "board-btntitle": "Explore"
    },
    "as": {
        "language": "অসমীয়া",
        "diksha": "DIKSHA",
        "govofIndia": "ভাৰত চৰকাৰ",
        "dikshamoto": "ডিজিটেল ইনফ্ৰাস্ট্ৰাকচাৰ ফৰ নলেজ শ্বেয়াৰিং",
        "dikshaDescription": "শৈক্ষিক গৱেষণা আৰু প্ৰশিক্ষণৰ ৰাষ্ট্ৰীয় পৰিষদ (শিক্ষা মন্ত্ৰ্যালয়, ভাৰত চৰকাৰ)ৰ এক উদ্যোগ",
        "btnExploreDiksha": "DIKSHA-ত অনুসন্ধান কৰক",
        "explore": "অনুসন্ধান কৰক",
        "ExploreDikshaContent": "DIKSHA-ৰ মুক্ত ডিজিটেল বিষয়বস্তুৰ জগতত অনুসন্ধান কৰক",
        "stateboard": "ৰাজ্য / কেন্দ্ৰীয় শাসিত অঞ্চলসমূহ",
        "stateboardDescription": "22+ ৰাজ্য আৰু কেন্দ্ৰীয় শাসিত অঞ্চলৰদ্বাৰা প্ৰকাশিত বিষয়বস্তুৰ অনুসন্ধান কৰক",
        "about": "বিষয়ে",
        "home": "হ’ম",
        "dashboard": "ডেছব’ৰ্ড",
        "getapp": "এপ্ লাভ কৰক",
        "contribute": "অৰিহণা যোগাওক",
        "aboutdiksha": "DIKSHA-ৰ বিষয়ে",
        "aboutdikshacontent": "DIKSHA (ডিজিটেল ইনফ্ৰাষ্ট্ৰাকছাৰ ফৰ নলেজ শ্বেয়াৰিং) হ’ল বিদ্যালয় শিক্ষাৰ এক ৰাষ্ট্ৰীয় মঞ্চ, শৈক্ষিক গৱেষণা আৰু প্ৰশিক্ষণৰ ৰাষ্ট্ৰীয় পৰিষদ (NCERT), শিক্ষা মন্ত্ৰ্যালয়ৰ এক উদ্যোগ। ২০১৭ চনৰ মে’ মাহত পূৰ্বৰ মাননীয় মানৱ সম্পদ উন্নয়ন মন্ত্ৰী শ্ৰীপ্ৰকাশ জাভড়েকাৰে মুকলি কৰা ৰাষ্ট্ৰীয় শিক্ষক মঞ্চৰ বাবে কৌশল আৰু পদক্ষেপত আভাস দিয়াৰ দৰে মুক্ত স্থাপত্যবিদ্যা, মুক্ত প্ৰৱেশাধিকাৰ, মুক্ত অনুজ্ঞাপত্ৰ প্ৰদানৰ বিভিন্নতা, পছন্দ আৰু স্বশাসনৰ মূল নীতিৰ ভিত্তিত DIKSHA-ক প্ৰস্তুত কৰা হৈছে। DIKSHA ২০১৭ চনৰ 5 চেপ্তেম্বৰত ভাৰতৰ মাননীয় উপৰাষ্ট্ৰপতিৰদ্বাৰা উন্মোচন কৰা হৈছিল আৰু তেতিয়াৰেপৰা 35 খন ৰাজ্য/কেন্দ্ৰীয় শাসিত অঞ্চলৰ লগতে চিবিএছই আৰু এনচিইআৰটি আৰু কোটি কোটি শিক্ষাৰ্থী আৰু শিক্ষকে ইয়াক গ্ৰহণ কৰিছে।",
        "aboutdikshacontent2": "DIKSHA-ক মুক্ত উৎস প্ৰযুক্তিৰে ভাৰতত আৰু ভাৰতৰ বাবে প্ৰস্তুত কৰা হৈছে, যি ইণ্টাৰনেট স্কেল প্ৰযুক্তি অন্তৰ্ভুক্ত কৰে আৰু শিক্ষকতা আৰু শিক্ষণৰ বাবে বহুতো উদাহৰণ আৰু সমাধান সক্ষম কৰি তোলে। DIKSHA-ক Sunbird নামৰ এমআইটি-ৰ অনুজ্ঞাপত্ৰ প্ৰাপ্ত মুক্ত উৎস প্ৰযুক্তি ব্যৱহাৰ কৰি প্ৰস্তুত কৰা হৈছে, যি শিক্ষণৰ বাবে এক ডিজিটেল আন্তঃগাঁথনি আৰু ইয়াক বহু ভাষা আৰু সমাধানক সমৰ্থিত কৰিব পৰাকৈ ডিজাইন কৰা হৈছে আৰু ই প্লেটফৰ্ম তথা সমাধানৰ উন্নয়নৰ বাবে ব্লক প্ৰস্তুতৰ দৰে 100ৰো অধিক মাইক্ৰ’ সেৱা আগবঢ়ায়। \n\n আগতে উল্লেখ কৰাৰ দৰে DIKSHA ভাৰতৰ সকলো ৰাজ্য আৰু কেন্দ্ৰীয় শাসিত অঞ্চলৰ ব্যৱহাৰৰ বাবে উপলব্ধ। প্ৰতিখন ৰাজ্য/কেন্দ্ৰীয় শাসিত অঞ্চলে নিজৰ ধৰণেৰে DIKSHA প্লেটফৰ্মক প্ৰভাৱিত কৰে, যিহেতু তেওঁলোকৰ শিক্ষক আৰু শিক্ষাৰ্থীৰ বাবে কাৰ্যক্ৰম ডিজাইন আৰু পৰিচালনা কৰিবৰ বাবে এই প্লেটফৰ্মৰ ভিন্ন সামৰ্থ্য আৰু সমাধানসমূহ ব্যৱহাৰ কৰিবলৈ ইয়াৰ স্বতন্ত্ৰতা আৰু পছন্দ কৰি লোৱাৰ ক্ষমতা আছে। DIKSHA-ৰ নীতি আৰু আহিলাসমূহে দেশৰ বাবে মানসম্পন্নভাৱে শিক্ষণৰ লক্ষ্যত উপনীত হ’বৰ বাবে এখন উমৈহতীয়া প্লেটফৰ্মত অংশগ্ৰহণ, অৰিহণা আৰু প্ৰভাৱিত কৰিবলৈ শিক্ষা পৰিস্থিতিতন্ত্ৰ (শিক্ষাবিদ, বিশেষজ্ঞ, সংস্থা, প্ৰতিষ্ঠান- চৰকাৰ, স্বশাসিত প্ৰতিষ্ঠান, বেচৰকাৰী আৰু ব্যক্তিগত সংস্থাসমূহ)ৰ বাবে সম্ভৱ কৰি তুলিছে।\n\n DIKSHA-ত দেশৰ শিক্ষাৰ্থী আৰু শিক্ষকসকলে প্ৰৱেশাধিকাৰ লাভ কৰিব পাৰিব আৰু বৰ্তমান ই 18+ ভাষা আৰু ভাৰতজুৰি এনচিইআৰটি, চিবিএচই আৰু এচচিইআৰটি-ক সমৰ্থিত কৰিছে। এই প্লেটফৰ্মক বিদ্যালয় শিক্ষা, বুনিয়াদভিত্তিক শিক্ষণ কাৰ্যক্ৰমৰ বাবে আৰু শিক্ষাৰ্থী আৰু শিক্ষকৰ পৰ্যাপ্ত সা-সুবিধাৰ পৰা বঞ্চিত আৰু আনভাৱে সক্ষম সম্প্ৰদায়ৰ বাবে সামগ্ৰিক শিক্ষণক সমৰ্থিত কৰিবলৈ প্ৰস্তুত কৰা হৈছে।\n\n ক’ভিড-১৯ সম্পৰ্কীয় স্কুলীয়া শিক্ষা ব্যাহতকৰণৰ প্ৰসংগত, DIKSHA-ই উদ্ভাৱনমূলক ৰাজ্যিক কাৰ্যক্ৰমৰ জৰিয়তে সকলো ৰাজ্য/কেন্দ্ৰীয় শাসিত অঞ্চলৰ বাবে শিক্ষণ/শিক্ষা ঘৰতে লাভ কৰিবলৈ সক্ষম হোৱাটো সম্ভৱ কৰি তুলিছে; এইদৰে ই ভাৰতৰ শিক্ষক আৰু শিক্ষাৰ্থীসকলৰ লাভৰ বাবে প্ৰযুক্তিৰ ব্যৱহাৰক আগবঢ়াই দিছে।",
        "aboutdikshanewcontent":"DIKSHA (ডিজিটেল ইনফ্ৰাস্ট্ৰাকচাৰ ফৰ নলেজ শ্বেয়াৰিং) হৈছে বিদ্যালয় শিক্ষাৰ বাবে এক ৰাষ্ট্ৰীয় মঞ্চ, ই হৈছে ভাৰত চৰকাৰৰ শিক্ষা মন্ত্ৰালয়ৰ অধীনত ৰাষ্ট্ৰীয় শৈক্ষিক গৱেষণা আৰু প্ৰশিক্ষণ পৰিষদৰ (এন.চি.ই.আৰ.টি.) এক প্ৰচেষ্টা। 2017 চনত ভাৰতৰ মাননীয় উপ-ৰাষ্ট্ৰপতি শ্ৰী এম ভেংকায়া নাইডুৰ দ্বাৰা আৰম্ভ কৰা DIKSHA-ক চি.বি.এছ.ই.কে ধৰি প্ৰায় সকলো ৰাজ্য, কেন্দ্ৰীয় শাসিত অঞ্চল, কেন্দ্ৰীয় স্বায়ত্তশাসিত সংস্থা/বোৰ্ডে গ্ৰহণ কৰিছে। ২০১৭ চনৰ ছেপ্টেম্বৰত তদানীন্তন মাননীয় মানৱ সম্পদ উন্নয়ন মন্ত্ৰী শ্ৰীপ্ৰকাশ জাভদেকাৰে মুকলি কৰা ৰাষ্ট্ৰীয় শিক্ষক মঞ্চৰ কৌশল আৰু দৃষ্টিকোণ (Strategy and Approach Paper) কাকতৰ আধাৰত DIKSHA প্ৰস্তুত কৰা হৈছে। DIKSHA-ক সমগ্ৰ দেশৰ শিক্ষাৰ্থী আৰু শিক্ষকসকলে ব্য়ৱহাৰ কৰিব পাৰে আৰু বৰ্তমান ৩৬ টা ভাৰতীয় ভাষাত উপলব্ধ। প্ৰতিখন ৰাজ্য/কেন্দ্ৰীয় শাসিত অঞ্চলে DIKSHA প্লেটফৰ্মক নিজা ধৰণে ব্যৱহাৰ কৰিব পাৰে, কিয়নো এই প্লেটফৰ্মত শিক্ষক, শিক্ষাৰ্থী আৰু প্ৰশাসকসকলে স্বাধীনভাৱে আৰু পছন্দ অনুসৰি কাৰ্যসূচী প্ৰস্তুত আৰু ব্য়ৱহাৰ কৰোতে ইয়াৰ বিভিন্ন সুবিধা আৰু সমাধানৰ প্ৰয়োগ কৰিব পাৰে। দেশৰ শৈক্ষিক লক্ষ্যত উপনীত হোৱাৰ ক্ষেত্ৰত DIKSHA-ৰ নীতি আৰু ব্য়ৱস্থাসমূহে শিক্ষা পৰিস্থিতিতন্ত্ৰক (শিক্ষাবিদ, বিশেষজ্ঞ, সংগঠন, প্ৰতিষ্ঠান - চৰকাৰ, স্বায়ত্তশাসিত প্ৰতিষ্ঠান, বে-চৰকাৰী আৰু ব্যক্তিগত সংগঠন) এই প্লেটফৰ্মত  অংশগ্ৰহণ কৰা আৰু অৱদান আগবঢ়োৱাৰ বাবে এক উমৈহতীয়া মঞ্চৰ সুবিধা কৰিছে।\nNCERT পাঠ্যপুথিসমূহ CCBY NC-ND ৰঅধীনতঅনুজ্ঞাপত্ৰপ্ৰাপ্তআৰুসকলোইলেক্ট্ৰনিকবিষয়বস্তু CC BY NC-SA ৰঅধীনতঅনুজ্ঞাপত্ৰপ্ৰাপ্ত\n আত্মনিৰ্ভৰশীল ভাৰতৰ অংশ হিচাপে ঘোষণা কৰা ভাৰতৰ প্ৰধানমন্ত্ৰী ই-বিদ্যা অধীনত DIKSHA এক ৰাষ্ট্ৰ, এক ডিজিটেল মঞ্চ' হিচাপে ঘোষণা কৰা হৈছে।",
        "aboutdikshanewcontent2":"DIKSHA হৈছে ভাৰতত  নিৰ্মিত   এক মুক্ত উৎস প্ৰযুক্তিৰ প্লেটফৰ্ম, য'ত ইণ্টাৰনেট স্কেল প্ৰযুক্তি অন্তৰ্ভুক্ত কৰা হৈছে।  ই শিক্ষণ আৰু শিকনৰ বাবে  বিভিন্ন সুবিধা প্ৰদান কৰাৰ লগতে শৈক্ষিক সমস্য়া সমাধানত সহায় কৰিছে। DIKSHA  প্লেটফৰ্মটো চানবাৰ্ড নামৰ এমআইটি(MIT)  অনুজ্ঞাপ্ৰাপ্ত মুক্ত উৎস প্ৰযুক্তি ব্যৱহাৰ কৰি নিৰ্মাণ কৰা হৈছে।ই হৈছে শিকন আৰু সমস্যা সমাধানৰ বাবে এক ডিজিটেল আন্তঃগাঁথনি যিয়ে  প্লেটফৰ্মৰ বিকাশ আৰু সমাধানৰ বাবে 100 তকৈও অধিক  সেৱা আগবঢ়ায়।\n\n2021 বৰ্ষৰ  29 জুলাই তাৰিখে ভাৰতৰ মাননীয় প্ৰধানমন্ত্ৰীয়ে NDEAR (ৰাষ্ট্ৰীয় ডিজিটেল শিক্ষা স্থাপত্য) মুকলি কৰিছে যিয়ে ৰাজ্য আৰু কেন্দ্ৰীয় শাসিত অঞ্চলৰ দ্বাৰা সংযুক্ত আৰু আন্তঃকাৰ্যকৰী প্ৰণালীৰ বিকাশৰ বাবে কাম কৰে। DIKSHAত NDEARৰ বিভিন্ন অংশ অন্তৰ্ভুক্ত হৈ আছে, যেনে:সক্ৰিয় পাঠ্যপুথি, অনলাইন পাঠ্যক্ৰম, সমল প্ৰ্ৰস্তুতি, সমল উৎস, যোগাযোগমূলক কুইজ, প্ৰশ্ন ভাণ্ডাৰ, চেটবট, বিশ্লেষণ আৰু ডেশ্বব'ৰ্ড। কোভিড-19 মহামাৰীৰ সময়ত, এই মঞ্চখন সমগ্ৰ দেশৰ শিক্ষাৰ্থী আৰু শিক্ষকসকলে অভূতপূৰ্বভাৱে ব্য়ৱহাৰ  কৰিছে।\n\nশিকন-শিক্ষণ প্ৰক্ৰিয়াত সহায় কৰাৰ উদ্দেশ্য়েৰে আৰু এন চি ই আৰ টি /চি বি এছ ই /ৰাজ্যসমূহৰ বিভিন্ন সমলৰ প্ৰয়োজনীয়তাৰ ওপৰত ভিত্তি কৰি বিভিন্ন বিদ্যালয়ে /ব্যক্তিগত শিক্ষকে, সমল অংশীদাৰে, বেচৰকাৰী সংগঠনে, কৰ্পোৰেটসমূহে বিদ্যাদান আৰু চি.এছ.আৰ.-ৰ অধীনত বিভিন্ন সমলেৰে সমৃদ্ধ এই ভঁৰালত অৱদান  আগবঢ়াইছে।\n\nবিশেষ প্ৰয়োজনসম্পন্ন শিশুৰ শিকন-শিক্ষণ প্ৰক্ৰিয়াত সহায় কৰিবলৈ বৃহৎ সংখ্যক অডিঅ' কিতাপ, ভাৰতীয় সাংকেতিক ভাষাৰ ভিডিঅ' আৰু অভিধান DIKSHA  প্লেটফৰ্মত উপলব্ধ কৰা হৈছে।\n\nমহামাৰীৰ সময়ত প্ৰাথমিক শ্ৰেণীৰ শিক্ষকৰ  বৃত্তিগত বিকাশৰ বাবে নিষ্ঠা ১.0 (NISHTHA 1.0) কাৰ্যসূচী (বিদ্যালয় প্ৰধান আৰু শিক্ষকসকলৰ সামগ্ৰীক অগ্ৰগতিৰ বাবে লোৱা ৰাষ্ট্ৰীয় পদক্ষেপ) DIKSHA প্লেটফৰ্মৰ জৰিয়তে অনলাইনত মুকলি কৰা হৈছিল। নিষ্ঠা ২.0 আৰু ৩.0 য়ে মাধ্যমিক আৰু বুনিয়াদী সাক্ষৰতা আৰু সাংখ্যিকতাৰ ওপৰত গুৰুত্ব দিয়ে। কেইবাখনো ৰাজ্য/কেন্দ্ৰীয় শাসিত অঞ্চলে নিষ্ঠাৰ (NISHTHA) উপৰিও তেওঁলোকৰ নিজা দক্ষতা বিকাশ ( capacity building ) কাৰ্যসূচী প্ৰস্তুত কৰিছে।\n\nNCERT -য়ে শিক্ষাৰ্থীসকলৰ বাবে  (প্ৰথম শ্ৰেণীৰ পৰা দ্বাদশ শ্ৰেণীলৈ এক শ্ৰেণী, এক চেনেল) PM eVIDYA DTH-TV.- চেনেলৰ জৰিয়তে ২৪ ঘণ্টাই উপলব্ধ হোৱাকৈ  সমল প্ৰদান কৰিছে। এই চেনেলবোৰে শ্ৰেণী-অনুসৰি শৈক্ষিক সমল প্ৰদান কৰিছে যিবোৰ কিউআৰ (Q.R) কোডৰ জৰিয়তে DIKSHA প্লেটফৰ্মৰ  সৈতে সংযোজিত হৈ আছে। সমন্বয় ৰক্ষা কৰিবলৈ সম্প্ৰচাৰিত সমলসমূহ DIKSHA প্লেটফৰ্ম-ত উপলব্ধ কৰা হৈছে, য'ত এই সমলসমূহ  যিকোনো সময়তে আৰু যিকোনো স্থানত উপলব্ধ হয়।",
        "aboutdikshaimagetext": "বিভিন্ন, নমনীয় আৰু বিকাশশীল",
        "news": "বাতৰি",
        "resources": "সমল",
        "events": "ঘটনা",
        "AboutVidyaDaan": "VidyaDaan-ৰ বিষয়ে",
        "AboutVidyaDaanDescription": "এই ৰাষ্ট্ৰীয় কাৰ্যক্ৰম হ’ল ৰাষ্ট্ৰৰ প্ৰতি, বিশেষকৈ ভাৰতত শিক্ষাৰ্থীৰ বাবে গুণগত শিক্ষণ অবিৰত থকাটো নিশ্চিত কৰিবলৈ শিক্ষাৰ ক্ষেত্ৰ খনত ই-শিক্ষণ সমলত অৰিহণা যোগাবলৈ ভাৰতৰ ব্যক্তি আৰু প্ৰতিষ্ঠানসমূহৰ বাবে এক আহ্বান।",
        "AboutVidyaDaanMoreDescription": "পঞ্জীয়ন আৰু নিজকে মনোনীত কৰাৰ পাছত ব্যক্তি, শিক্ষক, শিক্ষাবিদ, বিষয় বিশেষজ্ঞ, বিদ্যালয়, চৰকাৰী আৰু বেচৰকাৰী সংস্থা আদিয়ে অৰিহণা আগবঢ়াব পাৰে। এই অৰিহণাসমূহ বিভিন্ন ধৰণৰ বিষয়বস্তু হ’ব পাৰে যেনে, প্ৰথমৰ পৰা দ্বাদশলৈকে যিকোনো শ্ৰেণীৰ আৰু ৰাজ্য/কেন্দ্ৰীয় শাসিত অঞ্চলসমূহৰদ্বাৰা তেওঁলোকৰ নিজা প্ৰকল্পৰ অধীনত নিৰ্দিষ্ট কৰি দিয়া যিকোনো বিষয়ৰ বাবে ব্যাখ্যা কৰা ভিডিঅ’, শিক্ষণৰ ভিডিঅ’, অনুশীলনৰ প্ৰশ্নাৱলী, দক্ষতা-ভিত্তিক সামগ্ৰী, পাঠ পৰিকল্পনা আদি। এনেধৰণৰ অৰিহণাসমূহ সৃষ্টিশীল উমৈহতীয়া অনুজ্ঞাপত্ৰ গাঁথনিৰ অধীনত মুক্ত-অনুজ্ঞাপত্ৰযুক্ত হ’ব লাগে আৰু নিৰ্দিষ্ট ৰাজ্য/কেন্দ্ৰীয় শাসিত অঞ্চল আৰু চিবিএচই-ৰদ্বাৰা প্ৰস্তুত কৰা হ’ব পাৰে আৰু সেই অৰিহণা যোগাওঁতাসকল যাৰ বিষয়বস্তু গ্ৰহণ কৰা হৈছে আৰু অধিক ব্যৱহাৰ হৈছে, সেয়া যথোচিতভাৱে স্বীকৃতি দিয়া হ’ব।",
        "VidyaDaanIntro": "গুণগত শিক্ষণ অব্যাহত ৰাখিবলৈ ৰাষ্ট্ৰৰ, ৰাষ্ট্ৰৰ বাবে আৰু ৰাষ্ট্ৰৰদ্বাৰা এক কাৰ্যক্ৰম",
        "btnParticipate": "অংশগ্ৰহণ কৰক",
        "VidyaDaanTypes": "আপুনি অৰিহণা যোগাব পৰা ই-শিক্ষণ সমলৰ প্ৰকাৰসমূহ",
        "ExplanationVideos": "ব্যাখ্যাকাৰী ভিডিঅ’",
        "PracticeQuestions": "অনুশীলন প্ৰশ্নাৱলী",
        "TeachingVideos": "শিক্ষাদানৰ ভিডিঅ’",
        "ExperierntialLearningVideos": "অভিজ্ঞতা প্ৰদানকাৰী শিক্ষণৰ ভিডিঅ’",
        "LessonPlans": "পাঠ পৰিকল্পনা",
        "readmore": "অধিক পঢ়ক",
        "DIKSHAforMobile": "ম’বাইলৰ বাবে DIKSHA",
        "DIKSHAforMobileDescription": "DIKSHA মঞ্চই শিক্ষক, শিক্ষাৰ্থী আৰু অভিভাৱকৰ বাবে নিৰ্দিষ্ট বিদ্যালয়ৰ পাঠ্যক্ৰমৰ প্ৰাসংগিক হোৱাকৈ আকৰ্ষণীয় শিক্ষণ সামগ্ৰী আগবঢ়ায়। DIKSHA এপটো ডাউনলোড কৰক আৰু আপোনাৰ সকলো পাঠৰ সহজ প্ৰৱেশাধিকাৰৰ বাবে আপোনাৰ পাঠ্যপুথিত QR ক’ড স্কেন কৰক। {এণ্ড্ৰইড 5.1 আৰু তাতকৈ ওপৰৰ}",
        "DIKSHAforWeb": "ৱেবৰ বাবে DIKSHA",
        "DIKSHAforWebDescription": "DIKSHA শিক্ষণ প’ৰ্টেলে এই ব্ৰাউজাৰৰ যোগেদি DIKSHA-ৰ সকলো ই-সমলৰ অনলাইন প্ৰৱেশাধিকাৰ প্ৰদান কৰে।",
        "btnVisitDIKSHAportal": "DIKSHA প’ৰ্টেল দৰ্শন কৰক",
        "DIKSHAOffline": "ডেস্কটপ এপ্",
        "DIKSHAOfflineDescription": "DIKSHA ডেস্কটপে আপোনাৰ ব্যক্তিগত কম্পিউটাৰত ডাউনলোড কৰি থোৱা ডিজিটেল পাঠ্যপুথি, প্ৰশ্ন বেংক আৰু বহুতৰ অফলাইন প্ৰৱেশাধিকাৰ আগবঢ়ায়। {উইণ্ড’জ আৰু উবান্তু OS-ৰ বাবে উপলব্ধ}",
        "comingsoon": "সোনকালেই আহি আছে!\'",
        "DataDashboard": "ডাটা ডেছব’ৰ্ড",
        "viewUsagepattern": "ৰাষ্ট্ৰ আৰু সকলো ৰাজ্যৰ ব্যৱহাৰৰ ধৰণ চাওক",
        "last7Weeks": "মুঠ শিক্ষণৰ বৈঠকৰ বাবে যোৱা 7 সপ্তাহৰ ডাটা",
        "lastupdated": "শেহতীয়াকৈ আপডেট কৰা হ’ল",
        "clickstateut": "অধিক সবিশেষৰ বাবে ৰাজ্য/কেন্দ্ৰীয় শাসিত অঞ্চলত ক্লিক কৰক",
        "representationonly": "মানচিত্ৰ কেৱল উপস্থাপনৰ বাবে",
        "usageMetrics": "ব্যৱহাৰ-বিধিৰ মেট্ৰিক্স",
        "usageMetricsDescription": "22+ ৰাজ্যিক ব’ৰ্ডৰ বিদ্যায়তনিক আৰু অ-বিদ্যায়তনিক বিষয়বস্তু অনুসন্ধান কৰক",
        "btnViewDashboard": "ডেছব’ৰ্ড চাওক",
        "open": "খোলক",
        "download": "ডাউনলোড কৰক",
        "DIKSHAUsageTillDate": "DIKSHA-ৰ বৰ্তমানৰ ব্যৱহাৰ-বিধি",
        "LearningLessons": "শিক্ষণৰ বৈঠকসমূহ",
        "minutes": "মিনিট",
        "TermsofUse": "চৰ্ত আৰু নীতিসমূহ",
        "needHelp":"সহায়ৰ প্ৰয়োজন",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "মুখ্য বিষয়বস্তুলৈ পাৰ হৈ যাওক",
        "sitemap": "স্থানৰ মানচিত্ৰ",
        "ScreenReaderAccess": "একচেছিবিলিটী কৰ্নাৰ",
        "DIKSHAUpdates": "DIKSHA-ৰ আপডেটসমূহ",
        "lastupdatedonresult": "প্ৰতিবেদন সাপ্তাহিকভাৱে আপডেট কৰা হৈছে - দুপৰীয়া, প্ৰতি সোমবাৰে",
        "lastupdatedonresultdaily": "প্ৰতিবেদন দৈনিক আপডেট কৰা হৈছে",
        "totalDIKSHAusage": "মিনিটত DIKSHA ব্যৱহাৰৰ মুঠ সময়",
        "numberLearningActivities": "শিক্ষাৰ্থীসকলে DIKSHA-ৰ আন্তঃগাঁথনি ব্যৱহাৰ কৰি গ্ৰহণ কৰা শিক্ষণ কাৰ্যকলাপৰ সময়ৰ সংখ্যা",
        "noevents": "কোনো আগন্তুক ইভেণ্ট উপলব্ধ নাই",
        "updateticker1": "গুণগত শিক্ষণ অব্যাহত ৰখাটো নিশ্চিত কৰিবলৈ ৰাষ্ট্ৰৰ, ৰাষ্ট্ৰৰ বাবে আৰু ৰাষ্ট্ৰৰদ্বাৰা এক কাৰ্যক্ৰম",
        "updateticker2": "শৈক্ষিক গৱেষণা আৰু প্ৰশিক্ষণৰ ৰাষ্ট্ৰীয় পৰিষদ (শিক্ষা মন্ত্ৰ্যালয়, ভাৰত চৰকাৰ)ৰ এক উদ্যোগ",
        "contributionMetrics": "অৰিহণাৰ মেট্ৰিক্স",
        "contributionDescription": "সমূহ ৰাষ্ট্ৰৰ পৰা বিষয়বস্তুৰ অৰিহণাৰ ডাটা",
        "dikshaContentContribution": "Diksha-ৰ বিষয়বস্তুৰ অৰিহণা",
        "contributors": "অৰিহণা যোগাওঁতা",
        "contributions": "অৰিহণা",
        "courseMetrics": "পাঠ্যক্ৰমৰ মেট্ৰিক্স",
        "courseMetricsDescription": "সমূহ ৰাষ্ট্ৰৰ পৰা পাঠ্যক্ৰমৰ ডাটা",
        "courseUsage": "Diksha-ৰ পাঠ্যক্ৰম আৰু ব্যৱহাৰ-বিধি",
        "courses": "পাঠ্যক্ৰম",
        "Enrolments": "নামভৰ্তি",
        "completions": "পাঠ্যক্ৰম সম্পাদন",
        "certificatesIssued": "ইছ্যু কৰা প্ৰমাণপত্ৰ",
        "Datasets": "ডাটাছেট",
        "contributionsDiksha": "Diksha-ৰ বাবে আগবঢ়োৱা বিষয়বস্তুৰ অৰিহণা",
        "contributorsDiksha": "অৰিহণা যোগাওঁতাৰ সংখ্যা",
        "EnrolmentsDiksha": "Diksha-ত মুঠ পাঠ্যক্ৰমৰ নামভৰ্তি",
        "CompletionsDiksha": "Diksha-ত মুঠ পাঠ্যক্ৰমৰ সম্পাদন",
        "coursesDiksha": "Diksha-ত পাঠ্যক্ৰমৰ সংখ্যা",
        "DikshaDatasets": "Diksha-ৰ ৰাজহুৱা ডাটাছেট",
        "DatasetsDescription": "শিক্ষণৰ বাবে ডিজিটেল আন্তঃগাঁথনিক সক্ষম কৰি তোলা প্লেটফৰ্ম হিচাপে DIKSHA-ই ভাৰতজুৰি শিক্ষণ আৰু শিক্ষাদানৰ প্ৰয়োজনীয়তাৰ এক ব্যাপক বিভিন্নতাক সমৰ্থিত কৰিছে। এইদৰে প্ৰস্তুত হোৱা DIKSHA-ৰ ব্যৱহাৰবিধিৰ ডাটা জনসাধাৰণৰ বাবে, আৰু এয়া ৰাজহুৱা ডেছব’ৰ্ড আৰু ডাটাছেটৰ যোগেদি সকলোৰে বাবে প্ৰৱেশযোগ্য। এই পে’জটোত এতিয়ালৈকে উপলব্ধ হোৱা সকলো DIKSHA ডাটাছেটৰ সুবিন্যস্ত তালিকা আছে – প্ৰতিটো ডাটাছেটৰ বিষয়ে অধিক সবিশেষ ডাটাছেটটোৰ সবিশেষ পে’জৰ পৰা লাভ কৰিব পৰা যাব।",
        "csv": "CSV",
        "json": "JSON",
        "usefulLinks": "দৰকাৰী লিংকসমূহ",
        "dictionaryheading": "সমূহ ৰাষ্ট্ৰৰ পৰা বিষয়বস্তুৰ অৰিহণাৰ ডাটা",
        "datadictionary": "ডাটা অভিধান",
        "Details": "সবিশেষ",
        "usagemetrics": "ব্যৱহাৰ-বিধিৰ মেট্ৰিক্স",
        "contributionmetrics": "অৰিহণাৰ মেট্ৰিক্স",
        "coursemetrics": "পাঠ্যক্ৰমৰ মেট্ৰিক্স",
        "board-ncert-description": "এনচিইআৰটি (শৈক্ষিক গৱেষণা আৰু প্ৰশিক্ষণৰ ৰাষ্ট্ৰীয় পৰিষদ)ৰ দ্বাৰা প্ৰকাশিত বিষয়বস্তুৰ সন্ধান কৰক",
        "board-cbse-description": "চিবিএচই (মাধ্যমিক শিক্ষাৰ কেন্দ্ৰীয় ব’ৰ্ড)ৰ দ্বাৰা প্ৰকাশিত বিষয়বস্তুৰ সন্ধান কৰক",
        "board-nios-description": "এনআইঅ’এচ (মুক্ত বিদ্যালয় শিক্ষাৰ ৰাষ্ট্ৰীয় প্ৰতিষ্ঠান)ৰ দ্বাৰা প্ৰকাশিত বিষয়বস্তুৰ সন্ধান কৰক",
        "board-btntitle": "অনুসন্ধান কৰক"
    },
    "bn": {
        "language": "বাংলা",
        "diksha": "DIKSHA",
        "govofIndia": "ভারত সরকার",
        "dikshamoto": "ডিজিটাল ইনফ্রাস্ট্রাকচার ফর নলেজ শেয়ারিং",
        "dikshaDescription": "এটি জাতীয় শিক্ষা পরিষদ এবং প্রশিক্ষণ কাউন্সিলের একটি উদ্যোগ (শিক্ষা মন্ত্রনালয়, ভারত সরকার)",
        "btnExploreDiksha": "DIKSHA - তে এক্সপ্লোর করুন",
        "explore": "এক্সপ্লোর করুন",
        "ExploreDikshaContent": "DIKSHA - এর ওপেন ডিজিটাল কনটেন্ট এর দুনিয়াই এক্সপ্লোর করুন",
        "stateboard": "রাজ্য/ কেন্দ্ৰীয় শাসিত অঞ্চলসমূহ",
        "stateboardDescription": "22+ রাজ্য এবং কেন্দ্রশাসিত অঞ্চলগুলির দ্বারা প্রকাশিত কনটেন্ট এক্সপ্লোর করুন",
        "about": "সম্পর্কে",
        "home": "হোম",
        "dashboard": "ড্যাশবোর্ড",
        "getapp": "অ্যাপ টি প্রাপ্ত করুন",
        "contribute": "যোগদান",
        "aboutdiksha": "DIKSHA এর সম্পর্কে",
        "aboutdikshacontent": "DIKSHA (ডিজিটাল ইনফ্রাস্ট্রাকচার ফর নলেজ শেয়ারিং) স্কুল শিক্ষার একটি জাতীয় প্ল্যাটফর্ম, শিক্ষা মন্ত্রনালয় জাতীয় শিক্ষা গবেষণা ও প্রশিক্ষণ (এনসিইআরটি) এর উদ্যোগে। জাতীয় শিক্ষক প্লাটফর্মের কৌশল ও পদ্ধতির গবেষণাপত্রে বর্ণিত ওপেন আর্কিটেকচার, উন্মুক্ত অ্যাক্সেস, উন্মুক্ত লাইসেন্স বৈচিত্র, পছন্দ এবং স্বায়ত্তশাসনের মূল নীতিগুলির ভিত্তিতে মাননীয় মানবসম্পদ উন্নয়ন মন্ত্রী শ্রী প্রকাশ জাভাদেকারের দ্বারা DIKSHA -র উদ্বোধন করা হয়েছিল ২০১৭ সালের মে মাসে । DIKSHA , 5 ই সেপ্টেম্বর, 2017 সালে এ ভারতের মাননীয় উপ রাষ্ট্রপতি দ্বারা আরম্ভ করা হয়েছিল এবং এর পর থেকে 35 টি রাজ্য / কেন্দ্রশাসিত অঞ্চলের পাশাপাশি সিবিএসই এবং এনসিইআরটি এবং কোটি কোটি শিক্ষার্থী এবং শিক্ষকদের দ্বারা গৃহীত হয়েছে।",
        "aboutdikshacontent2": "DIKSHA ওপেন সোর্স প্রযুক্তির উপর নির্মিত, ভারতে তৈরি করা হয়েছে এবং ভারতের জন্য তৈরি করা হয়েছে, যা ইন্টারনেট স্কেল প্রযুক্তির অন্তর্ভুক্ত করে এবং শিক্ষাদান এবং শেখার জন্য বেশ কয়েকটি ব্যবহারের ঘটনা এবং সমাধান সক্ষম করে। DIKSHA , MIT লাইসেন্সযুক্ত ওপেন সোর্স প্রযুক্তি ব্যবহার করে সানবার্ড নামে নির্মিত, যা শেখার জন্য ডিজিটাল ইনফ্রাস্ট্রাকচার এবং একাধিক ভাষা এবং সমাধানগুলি সমর্থন করার জন্য ডিজাইন করা হয়েছে এবং প্ল্যাটফর্ম এবং সমাধানগুলির বিকাশের জন্য ব্লকগুলি বিল্ডিং হিসাবে 100 টিরও বেশি মাইক্রো পরিষেবা সরবরাহ করে।\n\nDIKSHA , যেমন পূর্বে উল্লিখিত হয়েছে, ভারতের সমস্ত রাজ্য এবং কেন্দ্রশাসিত অঞ্চল ব্যবহারের জন্য উপলব্ধ। প্রতিটি রাজ্য / কেন্দ্রশাসিত অঞ্চল তাদের নিজস্ব উপায়ে DIKSHA প্ল্যাটফর্মটিকে উপকৃত করে, কারণ তাদের শিক্ষক এবং শিক্ষার্থীদের জন্য প্রোগ্রামগুলি ডিজাইন করতে এবং চালানোর জন্য প্ল্যাটফর্মের বিবিধ ক্ষমতা এবং সমাধানগুলি ব্যবহার করার স্বাধীনতা এবং পছন্দ রয়েছে। DIKSHA-র নীতি এবং সরঞ্জামগুলি শিক্ষার বাস্তুসংস্থার পক্ষে (শিক্ষাবিদ, বিশেষজ্ঞ, সংস্থা, প্রতিষ্ঠান - সরকার, স্বায়ত্তশাসিত প্রতিষ্ঠান, বেসরকারী ও বেসরকারী সংস্থাগুলি) দেশের জন্য পর্যায়ে শিক্ষার লক্ষ্য অর্জনের জন্য একটি সাধারণ প্ল্যাটফর্মের অংশ নিতে, অবদান রাখতে এবং উত্তোলন করা সম্ভব করে তোলে ।\n\nDIKSHA সারা দেশে শিক্ষার্থী এবং শিক্ষকদের দ্বারা অ্যাক্সেস করা যেতে পারে এবং বর্তমানে 18+ টি ভাষা এবং এনসিইআরটি, সিবিএসই এবং এসসিইআরটিএসের বিভিন্ন পাঠ্যক্রমটি ভারত জুড়ে সমর্থন করে। প্ল্যাটফর্মটি বিদ্যালয়ের শিক্ষা, ফাউন্ডেশনাল লার্নিং প্রোগ্রামগুলি এবং শিক্ষাগত ও শিক্ষকদের অধীনতর এবং ভিন্নভাবে সক্ষম-সম্প্রদায়ের জন্য অন্তর্ভুক্তিমূলক শিক্ষার সহায়তার জন্য এবং উন্নত করা হচ্ছে।\n\nস্কুলভিত্তিক COVID-19 সম্পর্কিত বাধা প্রসঙ্গে, DIKSHA সমস্ত রাজ্য / কেন্দ্রশাসিত অঞ্চলগুলির পক্ষে উদ্ভাবনী রাষ্ট্রের কর্মসূচির মাধ্যমে ঘরে বসে পড়াশোনা / শিক্ষা সক্ষম করা সম্ভব করে; তাই ভারতবর্ষের শিক্ষক ও শিক্ষার্থীদের সুবিধার্থে প্রযুক্তির ব্যবহার লাফিয়ে উঠছে।",
        "aboutdikshanewcontent":"দিক্ষা (জ্ঞান বিনিময়ের জন্য ডিজিটাল পরিকাঠামো) হল স্কুল শিক্ষার জন্য একটি জাতীয় প্ল্যাটফর্ম, যা শিক্ষা মন্ত্রণালয়, ভারত সরকার এর অধীনে ন্যাশনাল কাউন্সিল ফর এডুকেশনাল রিসার্চ অ্যান্ড ট্রেনিং (এনসিইআরটি) এর একটি উদ্যোগ। ভারতের মাননীয় উপরাষ্ট্রপতি - শ্রী এম. ভেঙ্কাইয়া নাইডু দ্বারা 2017 সালে চালু করা DIKSHA আজ প্রায় সব রাজ্য, কেন্দ্রশাসিত অঞ্চল, কেন্দ্রীয় স্বায়ত্তশাসিত সংস্থা, সিবিএসই এবং অন্যান্য বোর্ড দ্বারা গৃহীত হয়েছে৷ সেপ্টেম্বর, 2017 এ তৎকালীন মানবসম্পদ উন্নয়ন মন্ত্রী শ্রী প্রকাশ জাভদেকর কর্তৃক প্রকাশিত জাতীয় শিক্ষক প্ল্যাটফর্মের জন্য কৌশল এবং পদ্ধতির পেপার এর ভিত্তিতে DIKSHA তৈরি করা হয়েছিল। DIKSHA সারা দেশে শিক্ষার্থী এবং শিক্ষকদের দ্বারা ব্যবহৃত হয় এবং বর্তমানে 36টি ভারতীয় ভাষা সমর্থন করে। প্রতিটি রাজ্য/ কেন্দ্রশাসিত অঞ্চল তার নিজস্ব উপায়ে DIKSHA প্ল্যাটফর্মের ব্যবহার করে, কারণ এতে শিক্ষক, শিক্ষার্থী এবং প্রশাসকদের জন্য প্রোগ্রাম ডিজাইন এবং চালানোর জন্য প্ল্যাটফর্মের বিভিন্ন ক্ষমতা এবং সমাধান ব্যবহার করার স্বাধীনতা এবং পছন্দ রয়েছে। DIKSHA নীতি এবং সরঞ্জামগুলি শিক্ষার বাস্তুতন্ত্রের (শিক্ষাবিদ, বিশেষজ্ঞ, সংস্থা, প্রতিষ্ঠান - সরকারী, স্বায়ত্তশাসিত প্রতিষ্ঠান, বেসরকারি ও ব্যক্তিগত সংস্থা) অংশগ্রহণ, অবদান এবং দেশের জন্য শিক্ষার লক্ষ্য অর্জনের জন্য একটি সাধারণ প্ল্যাটফর্মের জন্য এটি সম্ভব করে তোলে। . NCERT পাঠ্যপুস্তকগুলি CC BY NC-ND-এর অধীনে লাইসেন্সপ্রাপ্ত এবং বাকী কনটেন্টগুলো CC BY NC-SA-এর অধীনে লাইসেন্সপ্রাপ্ত ভারত সরকারের এর PM eVidya উদ্যোগের অধীনে, যা আত্মনির্ভর ভারত-এর অংশ হিসাবে ঘোষণা করা হয়েছিল, DIKSHA-কে &#39;এক দেশ, এক ডিজিটাল প্ল্যাটফর্ম&#39; হিসাবে ঘোষণা করা হয়েছে।",
        "aboutdikshanewcontent2":"DIKSHA ওপেন সোর্স প্রযুক্তির উপর নির্মিত, ভারতে তৈরি এবং ভারতের জন্য তৈরি, যা ইন্টারনেট স্কেল প্রযুক্তিগুলিকে অন্তর্ভুক্ত করে এবং শিক্ষা ও শেখার জন্য বেশ কয়েকটি ব্যবহার-কেস এবং সমাধান সক্ষম করে। DIKSHA সানবার্ড নামে MIT লাইসেন্সপ্রাপ্ত ওপেন সোর্স প্রযুক্তি ব্যবহার করে তৈরি করা হয়েছে, যা শেখার এবং সমাধানের জন্য একটি ডিজিটাল অবকাঠামো এবং প্ল্যাটফর্ম এবং সমাধানগুলির বিকাশের জন্য বিল্ডিং ব্লক হিসাবে 100 টিরও বেশি মাইক্রো পরিষেবা সরবরাহ করে।\n\nভারতের মাননীয় প্রধানমন্ত্রী 29শে জুলাই 2021-এ NDEAR (ন্যাশনাল ডিজিটাল এডুকেশন আর্কিটেকচার) সুচোনা করেছেন যা রাজ্য/কেন্দ্রশাসিত অঞ্চলগুলির দ্বারা ফেডারেটেড এবং ইন্টারঅপারেবল সিস্টেমের বিকাশের জন্য বিল্ডিং ব্লক সরবরাহ করে। DIKSHA-এর মূল বিল্ডিং ব্লকগুলির মধ্যে NDEAR বিল্ডিং ব্লকের সংখ্যাগরিষ্ঠ অংশ রয়েছে, যা NDEAR-এর কিছু সফল ব্যবহার-কেসগুলিকে সক্ষম করেছে যেমন: উজ্জীবিত পাঠ্যপুস্তক, অনলাইন কোর্স, বিষয়বস্তু রচনা, বিষয়বস্তু সোর্সিং, ইন্টারেক্টিভ কুইজ, প্রশ্নব্যাঙ্ক, চ্যাটবট, বিশ্লেষণ এবং ড্যাশবোর্ড। COVID-19 মহামারীর সময়ে, প্ল্যাটফর্মটি সারা দেশে শিক্ষার্থী এবং শিক্ষকদের অ্যাক্সেসের অভূতপূর্ব বৃদ্ধির অভিজ্ঞতা অর্জন করেছে।\n\nশিক্ষাদান এবং শেখার প্রক্রিয়াগুলিতে সহায়তা করার জন্য ডিজিটাল সামগ্রীর জন্য, বিদ্যাদানের অধীনে NCERT/CBSE/রাজ্যের বিভিন্ন বিষয়বস্তুর প্রয়োজনীয়তার ভিত্তিতে স্কুল, শিক্ষক, বিষয়বস্তু অংশীদার, এনজিও, কর্পোরেটদের (CSR-এর অধীনে) দ্বারা বিভিন্ন সম্পদের একটি সমৃদ্ধ ভান্ডার অবদান রাখা হয়েছিল।\n\nবিশেষ চাহিদাসম্পন্ন  শিশুদের (CWSN) শিক্ষাদান এবং শেখার জন্য সাহায্য করার জন্য, DIKSHA-তে প্রচুর পরিমাণে অডিও বই, আইএসএল (ইন্ডিয়ান সাইন ল্যাঙ্গুয়েজ) ভিডিও এবং অভিধান উপলব্ধ করা হয়েছে।\n\nমহামারী চলাকালীন, DIKSHA এর মাধ্যমে অনলাইনে প্রাথমিক গ্রেডের জন্য বৃহৎ শিক্ষকের পেশাগত উন্নয়ন কর্মসূচি NISHTHA 1.0 (স্কুল প্রধানদের এবং শিক্ষকের হলিস্টিক অ্যাডভান্সমেন্টের জন্য জাতীয় উদ্যোগ) চালু করা হয়েছিল। NISHTHA 2.0 &amp; 3.0 উন্নত করা হয়েছে মাধ্যমিক এবং ভিত্তিগত সাক্ষরতা এবং সংখ্যার উপর। NISHTHA ছাড়াও, বেশ কয়েকটি রাজ্য / কেন্দ্রশাসিত অঞ্চল তাদের নিজস্ব সক্ষমতা বৃদ্ধির প্রোগ্রাম ডিজাইন করেছে।\n\nNCERT এছাড়াও PM eVIDYA DTH-TV চ্যানেলের মাধ্যমে শিক্ষার্থীদের জন্য 24x7 ভিত্তিতে সামগ্রী সরবরাহ করে (এক শ্রেণী, এক চ্যানেল - প্রথম থেকে দ্বাদশ শ্রেণি পর্যন্ত)। এই চ্যানেলগুলি ক্লাস-ভিত্তিক বিষয়বস্তু সরবরাহ করে যা QR কোডের মাধ্যমে DIKSHA-এর সাথে লিঙ্ক করা হয়। সমন্বয় সক্ষম করার জন্য, সম্প্রচার বিষয়বস্তু DIKSHA-তেও উপলব্ধ করা হয়েছে, যেখানে এই বিষয়বস্তু যেকোনো সময়, যে কোনো জায়গায় অ্যাক্সেসযোগ্য।",
        "aboutdikshaimagetext": "দিক্ষা - বৈচিত্র্যময়, নমনীয় এবং বিকশিত",
        "news": "সংবাদ",
        "resources": "রিসোর্স",
        "events": "ইভেন্টগুলি",
        "AboutVidyaDaan": "VidyaDaan এর সম্পর্কে",
        "AboutVidyaDaanDescription": "এই জাতীয় কর্মসূচী সারা দেশ জুড়ে ব্যক্তি ও সংস্থার জন্য শিক্ষা খাতে ই-লার্নিং সংস্থাগুলির অবদান রাখার আহ্বান যা ভারতবর্ষের শিক্ষার্থীদের জন্য সর্বোত্তম শিক্ষা অব্যাহত থাকে তা নিশ্চিত করতে।",
        "AboutVidyaDaanMoreDescription": "ব্যক্তি, শিক্ষক, শিক্ষাবিদ, বিষয় বিশেষজ্ঞ, স্কুল, সরকারী এবং বেসরকারী সংস্থা ইত্যাদির দ্বারা নিজেকে নিবন্ধন ও মনোনয়নের পরে অবদান দেওয়া যেতে পারে se এই অবদানগুলি বিভিন্ন ধরণের সামগ্রী যেমন ব্যাখ্যা ভিডিও, শিক্ষাদান ভিডিও, অনুশীলন প্রশ্নাবলী, দক্ষতা ভিত্তিক আইটেম, পাঠ পরিকল্পনা ইত্যাদি 1 থেকে 12 অবধি যে কোনও গ্রেডের জন্য এবং তাদের নিজ নিজ প্রকল্পের আওতায় রাজ্য / কেন্দ্রশাসিত অঞ্চলসমূহ দ্বারা নির্দিষ্ট যে কোনও বিষয়ের জন্য। এই জাতীয় অবদানগুলি অবশ্যই ক্রিয়েটিভ কমন্স লাইসেন্স কাঠামোর আওতায় স্বীকৃত হতে হবে এবং সংশ্লিষ্ট রাজ্য / কেন্দ্রশাসিত অঞ্চল এবং সিবিএসই দ্বারা সংশোধন করা যেতে পারে এবং যাদের অবদানকারীদের বিষয়বস্তু স্বীকৃত হয়েছে এবং উচ্চ ব্যবহার খুঁজে পেয়েছে, যথাযথভাবে স্বীকৃত হবে।",
        "VidyaDaanIntro": "রাষ্ট্রের, রাষ্ট্রের জন্য, রাষ্ট্রের দ্বারা গুনগত শিক্ষার ধারাবাহিকতা বজায় রাখার জন্য একটি কার্যক্রম",
        "btnParticipate": "অংশগ্রহণকারী",
        "VidyaDaanTypes": "ই-লার্নিং সংস্থার প্রকারগুলি যেখানে আপনিও যোগদান করতে পারেন",
        "ExplanationVideos": "ভিডিও এর মাধ্যমে ব্যাখ্যা",
        "PracticeQuestions": "অনুশীলন প্ৰশ্নাবলী",
        "TeachingVideos": "শিক্ষণ ভিডিও",
        "ExperierntialLearningVideos": "অভিজ্ঞতা প্ৰদানকারী শিক্ষণ ভিডিও",
        "LessonPlans": "পাঠ পরিকল্পনা",
        "readmore": "আরও পড়ুন",
        "DIKSHAforMobile": "DIKSHA - মোবাইলের জন্য",
        "DIKSHAforMobileDescription": "DIKSHA প্ল্যাটফর্মটি শিক্ষক, শিক্ষার্থী এবং অভিভাবকদের জন্য নির্ধারিত স্কুল পাঠ্যক্রমের সাথে প্রাসঙ্গিক আকর্ষণীয় শিক্ষার উপাদান সরবরাহ করে। আপনার সমস্ত পাঠের সহজে অ্যাক্সেসের জন্য DIKSHA অ্যাপ্লিকেশনটি ডাউনলোড করুন এবং আপনার পাঠ্যপুস্তকগুলিতে QR কোডগুলি স্ক্যান করুন। {অ্যান্ড্রয়েড 5.1 এবং উপরে}",
        "DIKSHAforWeb": "DIKSHA ওয়েব এর জন্য",
        "DIKSHAforWebDescription": "DIKSHA ই-লারনিং পোর্টাল ব্রাউজারের মাধ্যমে DIKSHA ই-রিসোর্সগুলি অনলাইনে অ্যাক্সেস প্রদান করে",
        "btnVisitDIKSHAportal": "DIKSHA পোর্টালে যান",
        "DIKSHAOffline": "ডেস্কটপ অ্যাপ",
        "DIKSHAOfflineDescription": "DIKSHA ডেস্কটপটি আপনার ব্যক্তিগত কম্পিউটারে ডাউনলোড করা ডিজিটাল পাঠ্যপুস্তক, প্রশ্ন ব্যাংক এবং আরও অফলাইনে অ্যাক্সেস প্রদান করে। {উইন্ডোজ এবং উবুন্টু ওএসের জন্য উপলব্ধ}",
        "comingsoon": "শীঘ্রই আসছে!\'",
        "DataDashboard": "ডেটা ড্যাশবোর্ড",
        "viewUsagepattern": "দেশ এবং সমস্ত রাজ্য জুড়ে ব্যবহারের ধরণটি দেখুন",
        "last7Weeks": "মোট শেখার সেশনের জন্য গত 7 সপ্তাহের ডেটা",
        "lastupdated": "সর্বশেষ আপডেট",
        "clickstateut": "আরও তথ্যের জন্য একটি রাজ্য /কেন্দ্রশাসিত অঞ্চলে ক্লিক করুন",
        "representationonly": "মানচিত্র কেবল মাত্র উপস্থাপনের জন্য",
        "usageMetrics": "ব্যবহারের মেট্রিক্স",
        "usageMetricsDescription": "22+ রাজ্য বোর্ডের একাডেমিক এবং অ-একাডেমিক কনটেন্ট এক্সপ্লোর করুন",
        "btnViewDashboard": "ড্যাশবোর্ড দেখুন",
        "open": "খুলুন",
        "download": "ডাউনলোড করুন",
        "DIKSHAUsageTillDate": "DIKSHA এর বর্তমান ব্যবহার",
        "LearningLessons": "শেখার সেশনস",
        "minutes": "মিনিটস",
        "TermsofUse": "শর্তাদি এবং নীতিসমূহ",
        "needHelp":"সাহায্য দরকার",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "স্কিপ করে মূল কনটেন্টে যাও",
        "sitemap": "সাইটের মানচিত্র",
        "ScreenReaderAccess": "অ্যাক্সেসযোগ্যতা কর্নার",
        "DIKSHAUpdates": "DIKSHA আপডেট",
        "lastupdatedonresult": "সপ্তাহিক রিপোর্ট আপডেট- প্রত্যেক সোমবার দুপুরের মধ্যে",
        "lastupdatedonresultdaily": "রিপোর্ট প্রত্যেক দিন আপডেট হয়",
        "totalDIKSHAusage": "DIKSHA ব্যবহারে মোট সময় মিনিটে",
        "numberLearningActivities": "DIKSHA ইনফ্রাস্ট্রাকচার ব্যবহার করে শিক্ষার্থী দ্বারা শিখন কার্যক্রমগুলি বেশ কয়েকবার পরিচালিত হয়েছিল",
        "noevents": "কোন আসন্ন ইভেন্ট উপলব্ধ নেই",
        "updateticker1": "শিক্ষার গুনগত ধারাবাহিকতা নিশ্চিত করার জন্য জাতির, জাতির জন্য এবং জাতির দ্বারা একটি কর্মসূচি",
        "updateticker2": "জাতীয় গবেষণা পরিষদ এবং প্রশিক্ষণ কাউন্সিলের উদ্যোগ (শিক্ষা মন্ত্রনালয়, ভারত সরকার)",
        "contributionMetrics": "অবদানের মেট্রিক্স",
        "contributionDescription": "দেশ জুড়ে কন্টেন্টের অবদানের তথ্য",
        "dikshaContentContribution": "Diksha কনটেন্টে অবদান",
        "contributors": "অবদানকারী",
        "contributions": "অবদানগুলি",
        "courseMetrics": "কোর্স মেট্রিক্স",
        "courseMetricsDescription": "পুরো দেশ থেকে কোর্সের তথ্য",
        "courseUsage": "DIKSHA এর কোর্সগুলি এবং ব্যবহার",
        "courses": "কোর্সগুলি",
        "Enrolments": "তালিকাভুক্ত",
        "completions": "কোর্স পূর্ণতা",
        "certificatesIssued": "শংসাপত্র জারি করা হয়েছে",
        "Datasets": "ডেটাসেটস",
        "contributionsDiksha": "DIKSHA তে কনটেন্ট যোগদান দেওয়া হয়েছে",
        "contributorsDiksha": "অবদানকারীদের সংখ্যা",
        "EnrolmentsDiksha": "DIKSHA তে মোট তালিকাভুক্ত কোর্সের সংখ্যা",
        "CompletionsDiksha": "DIKSHA তে মোট কোর্স সম্পূর্ণ করা হয়েছে",
        "coursesDiksha": "DIKSHA তে কোর্সের সংখ্যা",
        "DikshaDatasets": "DIKSHA এর সর্বজনীন ডেটাসেটস",
        "DatasetsDescription": "DIKSHA , এমন একটি প্ল্যাটফর্ম যা শেখার জন্য ডিজিটাল ইনফ্রাস্ট্রাকচারকে সক্ষম করে, দেশ জুড়ে বিস্তৃত বিভিন্ন শিক্ষার এবং শিক্ষার প্রয়োজনকে সমর্থন করে। এভাবে উত্পন্ন DIKSHA ব্যবহারের ডেটা সর্বজনীন এবং সর্বজনীন ড্যাশবোর্ড এবং ডেটাসেটের মাধ্যমে অ্যাক্সেসযোগ্য। এই পৃষ্ঠায় এখনও অবধি উপলব্ধ সকল DIKSHA ডেটাসেটের একটি তালিকা রয়েছে প্রতিটি ডাটাসেট সম্পর্কে আরও তথ্য ডেটাসেটের বিশদ পৃষ্ঠা থেকে নেওয়া যেতে পারে।",
        "csv": "CSV",
        "json": "JSON",
        "usefulLinks": "উপযোগী লিঙ্ক",
        "dictionaryheading": "দেশ জুড়ে সামগ্রীর অবদানের ডেটা",
        "datadictionary": "তথ্য অভিধান",
        "Details": "বিশদ",
        "usagemetrics": "ব্যবহারের মেট্রিক্স",
        "contributionmetrics": "অবদান মেট্রিক্স",
        "coursemetrics": "কোর্স মেট্রিক্স",
        "board-ncert-description": "এনসিআরটি দ্বারা প্রকাশিত কনটেন্ট এক্সপ্লোর করুন ( ন্যাশনাল কাউন্সিল অফ এডুকেশনাল রিসার্চ এন্ড ট্রেনিং)",
        "board-cbse-description": "সিবিএসই দ্বারা প্রকাশিত কনটেন্ট এক্সপ্লোর করুন (সেন্ট্রাল বোর্ড অফ সেকেন্ডারি এডুকেশন)",
        "board-nios-description": "এনআইওএস দ্বারা প্রকাশিত কনটেন্ট এক্সপ্লোর করুন ( দি ন্যাশনাল ইনস্টিটিউট অফ ওপেন স্কুলিং)",
        "board-btntitle": "এক্সপ্লোর করুন"
    },
    "gu": {
        "language": "ગુજરાતી",
        "diksha": "DIKSHA",
        "govofIndia": "ભારત સરકાર",
        "dikshamoto": "ડિજીટલ ઇન્ફ્રાસ્ટ્રક્ચર ફોર નોલેજ શેરિંંગ",
        "dikshaDescription": "રાષ્ટ્રીય શૈક્ષણિક સંશોધન અને તાલીમ પરિષદની પહેલ (શિક્ષણ મંત્રાલય, ભારત સરકાર)",
        "btnExploreDiksha": "એક્સપ્લોર DIKSHA",
        "explore": "એક્સપ્લોર",
        "ExploreDikshaContent": "ખુલ્લી ડિજિટલ સામગ્રીની DIKSHA ની દુનિયાનું એક્સપ્લોર કરો",
        "stateboard": "રાજ્યો / કેન્દ્રશાસિત કેન્દ્રો",
        "stateboardDescription": "22+ રાજ્યો અને કેન્દ્રશાસિત કેન્દ્રો દ્વારા પ્રકાશિત સામગ્રીનું એક્સપ્લોર કરો",
        "about": "વિશે",
        "home": "હોમ",
        "dashboard": "ડેશબોર્ડ",
        "getapp": "એપ્લિકેશન મેળવો",
        "contribute": "ફાળો આપે છે",
        "aboutdiksha": "DIKSHA વિશે",
        "aboutdikshacontent": "DIKSHA ( જ્ઞાનની વહેંચણી માટે ડિજિટલ ઇન્ફ્રાસ્ટ્રક્ચર) એ શાળા શિક્ષણ માટેનું રાષ્ટ્રીય મંચ છે, જે શિક્ષણ સંશોધન અને તાલીમ રાષ્ટ્રીય પરિષદ (NCERT), શિક્ષણ મંત્રાલયની પહેલ છે. DIKSHA ખુલ્લા આર્કિટેક્ચર, ઓપન એક્સેસ, ઓપન લાઇસેંસિંગ વિવિધતા, પસંદગી અને સ્વાયતતાના મૂળ સિદ્ધાંતોના આધારે વિકસાવવામાં આવી હતી, જે રાષ્ટ્રીય શિક્ષક મંચ માટેના વ્યૂહરચના અને અભિગમ પેપરમાં દર્શાવેલ છે, જેમાં માનનીય સંસાધન વિકાસ પ્રધાન શ્રી પ્રકાશ જાવડેકર દ્વારા મે, 2017માં રજૂ કરાઈ હતી. DIKSHA ખુદ 5 સપ્ટેમ્બર, 2017 ના રોજ ભારતના ઉપરાષ્ટ્રપતિ દ્વારા શરૂ કરવામાં આવી હતી અને ત્યારબાદ તે 35 રાજ્યો / કેન્દ્રશાસિત રાજ્યો તેમજ CBSE અને NCERT દ્વારા અને કરોડો શીખનારાઓ અને શિક્ષકો દ્વારા સ્વીકારવામાં આવી છે.",
        "aboutdikshacontent2": "DIKSHA ઓપન સોર્સ ટેકનોલોજી, પર બનાવવામાં આવી છે, જે ભારતમાં બનાવવામાં આવે છે અને ભારત માટે બનાવવામાં આવે છે, જેમાં ઇન્ટરનેટ સ્કેલ તકનીકીઓનો સમાવેશ થાય છે અને શિક્ષણ અને શીખવા માટેના ઘણા ઉપયોગના કેસો અને ઉકેલોને સક્ષમ કરે છે. DIKSHA એ MIT લાઇસન્સ પ્રાપ્ત ઓપન સોર્સ ટેકનોલોજીનો ઉપયોગ કરીને બનાવવામાં આવ્યો છે જેને સનબર્ડ કહેવામાં આવે છે, જે શીખવા માટેનું ડિજિટલ ઈન્ફ્રાસ્ટ્રક્ચર છે અને તે ઘણી ભાષાઓ અને ઉકેલોને ટેકો આપવા માટે રચાયેલ છે અને પ્લેટફોર્મ અને સોલ્યુશન્સના વિકાસ માટે 100 થી વધુ માઇક્રો સર્વિસિસને બિલ્ડિંગ બ્લોક્સ તરીકે આપે છે. \n\n DIKSHA, જેમ ઉપર સૂચવ્યા મુજબ, ભારતના બધા રાજ્યો અને કેન્દ્રશાસિત કેન્દ્રોના ઉપયોગ માટે ઉપલબ્ધ છે. દરેક રાજ્ય / કેન્દ્રશાસિત રાજ્ય DIKSHA પ્લેટફોર્મને તેની રીતે લાભ આપે છે, કારણ કે તે તેમના શિક્ષકો અને શીખનારાઓ માટે પ્રોગ્રામ્સ ડિઝાઇન અને ચલાવવા માટે પ્લેટફોર્મની વિવિધ ક્ષમતાઓ અને ઉકેલોનો ઉપયોગ કરવાની સ્વતંત્રતા અને પસંદગી ધરાવે છે. DIKSHA નીતિઓ અને સાધનો દેશના ધોરણે શિક્ષણના લક્ષ્યોને પ્રાપ્ત કરવા માટે શિક્ષણ પરિસ્થિતી (શિક્ષણવિદો, નિષ્ણાતો, સંસ્થાઓ, સંસ્થાઓ - સરકાર, સ્વાયત્ત સંસ્થાઓ, બિન સરકારી અને ખાનગી સંસ્થાઓ) માટે ભાગ લેવા, ફાળો આપવા અને એક સામાન્ય મંચ મેળવવા માટે શક્ય બનાવે છે. \n\n DIKSHA, દેશભરના શીખનારાઓ અને શિક્ષકો દ્વારા ઍક્સેસ કરી શકાય છે અને હાલમાં ભારતભરમાં 18+ ભાષાઓ અને NCERT, CESE અને SCERT વિવિધ અભ્યાસક્રમોને સપોર્ટ કરે છે. પ્લેટફોર્મનો લાભ શાળાના શિક્ષણ, પાયાના શિક્ષણ કાર્યક્રમો અને શીખનારાઓ અને શિક્ષકોના જુદા જુદા-સક્ષમ-સમર્થ સમુદાયો માટે સમાવિષ્ટ શિક્ષણને ટેકો આપવા માટે વિકસિત અને વિકસિત કરવામાં આવી રહ્યો છે. \n\n COVID-19 થી સંબંધિત શાળાકીય વિક્ષેપના સંદર્ભમાં, DIKSHA એ બધા રાજ્યો / કેન્દ્રશાસિત રાજ્યને નવીન રાજ્ય કાર્યક્રમો દ્વારા ઘરે શિક્ષણ / શિક્ષણને સક્ષમ કરવાનું શક્ય બનાવે છે; તેથી ભારતભરના શિક્ષકો અને શીખનારાઓના લાભ માટે તકનીકીના ઉપયોગમાં કૂદકો લગાવવી.",
        "aboutdikshanewcontent": "DIKSHA (ડિજિટલ ઈન્ફ્રાસ્ટ્રક્ચર ફોર નોલેજ શેરિંગ) એ શાળા શિક્ષણ માટેનું રાષ્ટ્રીય પ્લેટફોર્મ છે, જે શિક્ષણ મંત્રાલય (MoE), GoI ના નેજા હેઠળ રાષ્ટ્રીય શૈક્ષણિક સંશોધન અને તાલીમ પરિષદ, (NCERT) ની પહેલ છે. ભારતના માનનીય ઉપરાષ્ટ્રપતિ - શ્રી એમ. વેંકૈયા નાયડુ દ્વારા વર્ષ 2017 માં શરૂ કરાયેલ, DIKSHA લગભગ તમામ રાજ્યો, કેન્દ્રશાસિત પ્રદેશો, CBSE સહિત કેન્દ્રીય સ્વાયત્ત સંસ્થાઓ/બોર્ડ દ્વારા અપનાવવામાં આવ્યું છે. સપ્ટેમ્બર, 2017 માં તત્કાલિન માનવ સંસાધન વિકાસ મંત્રી શ્રી પ્રકાશ જાવડેકર દ્વારા બહાર પાડવામાં આવેલ National Teacher Platform માટેની વ્યૂહરચના અને અભિગમ પેપરના આધારે DIKSHA ને વિકસાવવામાં આવેલ છે. DIKSHAનો ઉપયોગ સમગ્ર દેશના વિદ્યાર્થીઓ અને શિક્ષકો દ્વારા કરી શકાય છે અને હાલમાં તે 36 ભારતીય ભાષાઓમાં રજૂ થયેલ છે. દરેક રાજ્ય/કેન્દ્રશાસિત પ્રદેશ પોતાની રીતે DIKSHA પ્લેટફોર્મનો લાભ લે છે કારણ કે તેની પાસે શિક્ષકો, અધ્યેતાઓ અને વહીવટકર્તાઓ માટે પ્રોગ્રામ ડિઝાઇન કરવા અને ચલાવવા માટે પ્લેટફોર્મની વિવિધ ક્ષમતાઓ અને ઉકેલોનો ઉપયોગ કરવાની સ્વતંત્રતા અને પસંદગી છે. DIKSHAની નીતિઓ અને સાધનો શિક્ષણવિદ્દો, નિષ્ણાતો, સંસ્થાઓ, સરકારી અને સ્વાયત્ત સંસ્થાઓ, બિન-સરકારી અને ખાનગી સંસ્થાઓને દેશ માટે શિક્ષણના લક્ષ્યાંકોને પ્રાપ્ત કરવા માટે સમાન પ્લેટફોર્મ પર ભાગ લેવા, યોગદાન આપવા અને લાભ લેવાનું શક્ય બનાવે છે. ભારત સરકારની PMeVidya પહેલ હેઠળ, જેને આત્મનિર્ભર ભારતના ભાગ રૂપે જાહેર કરવામાં આવી છે તે DIKSHA ને 'એક રાષ્ટ્ર, એક ડિજિટલ પ્લેટફોર્મ' તરીકે જાહેર કરવામાં આવેલ છે.એન.સી.ઇ.આર.ટી.ના પાઠ્યપુસ્તકો CC BY NC-ND અંતર્ગત લાયસન્સ ધરાવે છે તેમજ તેના તમામ સંસાધનો પણ CC BY NC-SA અંતર્ગત લાયસન્સ ધરાવે છે.",
        "aboutdikshanewcontent2": "DIKSHA ઓપન સોર્સ ટેક્નોલોજી પર બનેલ છે. DIKSHA એ ભારતમાં બનાવેલ છે અને ભારત માટે બનાવેલ છે, જેમાં ઈન્ટરનેટ સ્કેલ ટેક્નોલોજીનો ઉપયોગ કરવામાં આવેલ છે અને અધ્યયન અને અધ્યાપન માટે ઘણા ઉપયોગ-કેસો અને ઉકેલો માટે મદદરૂપ થાય છે. DIKSHA એ સનબર્ડ નામની MIT લાયસન્સ ધરાવતી ઓપન સોર્સ ટેક્નોલોજીનો ઉપયોગ કરીને બનાવવામાં આવી છે, જે શીખવા માટે એક ડિજિટલ ઈન્ફ્રાસ્ટ્રક્ચર છે. આ પ્લેટફોર્મ અને તેના સોલ્યુશન્સના વિકાસ માટે બિલ્ડીંગ બ્લોક્સ તરીકે 100 થી વધુ માઇક્રો સેવાઓ પ્રદાન કરે છે.\n\nભારતના માનનીય વડાપ્રધાને 29મી જુલાઈ 2021ના રોજ NDEAR (નેશનલ ડિજિટલ એજ્યુકેશન આર્કિટેક્ચર) શરૂ કર્યું છે જે રાજ્યો/કેન્દ્રશાસિત પ્રદેશો દ્વારા ફેડરેટેડ અને ઇન્ટરઓપરેબલ સિસ્ટમના વિકાસ માટે બિલ્ડીંગ બ્લોક્સ પૂરા પાડે છે. DIKSHA ના મુખ્ય બિલ્ડીંગ બ્લોક્સમાં NDEARના મોટા ભાગના બિલ્ડીંગ બ્લોક્સનો સમાવેશ થાય છે, જેમાં NDEAR ના કેટલાક સફળ ઉપયોગ-કેસો સક્ષમ કર્યા છે જેમ કે: ETB, ઑનલાઇન કોર્સીસ, સામગ્રી સોર્સિંગ, ઇન્ટરેક્ટિવ ક્વિઝ, પ્રશ્નબેંક, ચેટબોટ, એનાલિટિક્સ અને ડેશબોર્ડ. કોવિડ-19 રોગચાળાના સમયમાં, પ્લેટફોર્મે સમગ્ર દેશમાં વિદ્યાર્થીઓ અને શિક્ષકો દ્વારા ઉપયોગમાં અભૂતપૂર્વ વધારો અનુભવ્યો છે.\n\nઅધ્યયન અધ્યાપન પ્રક્રિયામાં મદદ કરવા માટે ડિજિટલ સામગ્રી માટે, NCERT/CBSE/રાજ્યોની વિવિધ સામગ્રી જરૂરિયાતો સામે વિદ્યાદાન હેઠળ CSR હેઠળ શાળાઓ/વ્યક્તિગત શિક્ષકો, સામગ્રી ભાગીદારો, NGO, કોર્પોરેટ દ્વારા વિવિધ સંસાધનોના સમૃદ્ધ ભંડારનું યોગદાન આપવામાં આવ્યું હતું.\n\nવિશિષ્ટ જરૂરિયાત ધરાવતા બાળકો (CWSN) માટે અધ્યયન અધ્યાપનમાં મદદ કરવા માટે, DIKSHA પર મોટી સંખ્યામાં ઑડિયો બુક્સ, ISL (ભારતીય સાઇન લેંગ્વેજ) વીડિયો અને ડિક્શનરી ઉપલબ્ધ કરાવવામાં આવી છે.\n\nમહામારી દરમિયાન, પ્રાથમિક ધોરણો માટે શિક્ષકનો વ્યાવસાયિક વિકાસ કાર્યક્રમ NISHTHA 1.0 (શાળાના વડાઓ અને શિક્ષકોની સર્વગ્રાહી પ્રગતિ માટે રાષ્ટ્રીય પહેલ) DIKSHA દ્વારા ઑનલાઇન શરૂ કરવામાં આવ્યો હતો. NISHTHA 2.0 અને 3.0 માધ્યમિક અને પાયાના સાક્ષરતા અને સંખ્યાજ્ઞાન પર ધ્યાન કેન્દ્રિત કરે છે. NISHTHA  ઉપરાંત, ઘણા રાજ્યો/કેન્દ્રશાસિત પ્રદેશોએ તેમના પોતાના ક્ષમતા નિર્માણ કાર્યક્રમો ડિઝાઇન કર્યા છે.\n\nNCERT PM eVIDYA DTH-TV ચેનલો (વર્ગ I થી XII સુધી એક વર્ગ, એક ચેનલ) દ્વારા 24x7 ધોરણે વિદ્યાર્થીઓ માટે સામગ્રી પણ પહોંચાડે છે. આ ચેનલો વર્ગ મુજબની સામગ્રીઓ પહોંચાડે છે જે QR કોડ દ્વારા DIKSHA સાથે લિંક છે. આ પ્રસારણ સામગ્રી DIKSHA પર પણ ઉપલબ્ધ કરાવવામાં આવે છે. આ સામગ્રી કોઈપણ સમયે અને ગમે ત્યાં સુલભ છે, ઉપયોગમાં લઇ શકાય છે.",
        "aboutdikshaimagetext": "Solutions on DIKSHA - Diverse, Flexible and Evolving",
        "news": "ન્યૂઝ",
        "resources": "રિસોર્સ",
        "events": "ઈવેન્ટ્સ",
        "AboutVidyaDaan": "વિદ્યાદાન વિશે",
        "AboutVidyaDaanDescription": "આ રાષ્ટ્રીય કાર્યક્રમ દેશના ખાસ કરીને વ્યક્તિઓ અને સંગઠનોને શિક્ષણ ક્ષેત્રે ઇ-લર્નિંગ સ્રોતોમાં ફાળો આપવા માટેનો કોલ છે, જેથી સુનિશ્ચિત થાય કે સમગ્ર ભારતમાં શીખનારાઓ માટે ગુણવત્તાયુક્ત શિક્ષણ ચાલુ રહે.",
        "AboutVidyaDaanMoreDescription": "વ્યક્તિઓ, શિક્ષકો, શિક્ષણવિદો, વિષય નિષ્ણાતો, શાળાઓ, સરકારી અને બિન-સરકારી સંસ્થાઓ વગેરે દ્વારા પોતાને નોંધણી અને નામાંકન કર્યા પછી ફાળો આપી શકાય છે. આ યોગદાન વિવિધ પ્રકારની સામગ્રી જેવા કે સ્પષ્ટીકરણ વિડિઓઝ, અધ્યાપન વિડિઓઝ, પ્રેક્ટિસ પ્રશ્નો, યોગ્યતા જેવા હોઈ શકે છે. 1 થી 12 સુધીના કોઈપણ ગ્રેડ માટે અને તેમના સંબંધિત પ્રોજેક્ટ્સ હેઠળ રાજ્યો / કેન્દ્રશાસિત કેન્દ્રો દ્વારા ઉલ્લેખિત કોઈપણ વિષય માટે. આવા યોગદાન ક્રિએટીવ કonsમન્સ લાઇસેંસ ફ્રેમવર્ક હેઠળ ખુલ્લા-પરવાના હોવા આવશ્યક છે અને સંબંધિત રાજ્યો / કેન્દ્રશાસિત કેન્દ્રો અને સીબીએસઇ દ્વારા ક્યુરેટ કરી શકાય છે અને તે ફાળો આપનારાઓની જેમની સામગ્રી સ્વીકારવામાં આવે છે અને વપરાશ મેળવે છે, તેને યોગ્ય રીતે માન્યતા આપવામાં આવશે.",
        "VidyaDaanIntro": "ગુણવત્તાયુક્ત શિક્ષણની સાતત્યતા સંચાલિત કરવા રાષ્ટ્ર અને રાષ્ટ્ર દ્વારા રાષ્ટ્રનો એક કાર્યક્રમ",
        "btnParticipate": "ભાગ લે છે",
        "VidyaDaanTypes": "ઇ-લર્નિંગ રિસોર્સના પ્રકારો જે તમે ફાળો આપી શકો છો",
        "ExplanationVideos": "વિડિઓઝ સમજૂતી",
        "PracticeQuestions": "પ્રેક્ટિસ પ્રશ્નો",
        "TeachingVideos": "શિક્ષણ વિડિઓઝ",
        "ExperierntialLearningVideos": "અનુભવી લર્નિંગ વિડિઓઝ",
        "LessonPlans": "પાઠ યોજનાઓ",
        "readmore": "વધુ વાંચો",
        "DIKSHAforMobile": "મોબાઇલ માટે DIKSHA",
        "DIKSHAforMobileDescription": "DIKSHA પ્લેટફોર્મ, શિક્ષકો, વિદ્યાર્થીઓ અને માતાપિતા માટે સૂચવવામાં આવેલા શાળા અભ્યાસક્રમને અનુરૂપ, આકર્ષક શિક્ષણ સામગ્રી પ્રદાન કરે છે. તમારા બધા પાઠની સરળ .ક્સેસ માટે તમારી પાઠયપુસ્તકોમાં ડી.ઇ.સી.એચ.એ. એપ્લિકેશન ડાઉનલોડ કરો અને ક્યૂઆર કોડ્સ સ્કેન કરો. {Android 5.1 અને તેથી વધુ}",
        "DIKSHAforWeb": "વેબ માટે DIKSHA",
        "DIKSHAforWebDescription": "DIKSHA લર્નિંગ પોર્ટલ બ્રાઉઝર દ્વારા DIKSHAના તમામ ઇ-રિસોર્સિસને ઓનલાઇન ઍક્સેસ પ્રદાન કરે છે.",
        "btnVisitDIKSHAportal": "DIKSHA પોર્ટલની મુલાકાત લો",
        "DIKSHAOffline": "ડેસ્કટોપ એપ્લિકેશન",
        "DIKSHAOfflineDescription": "DIKSHA ડેસ્કટોપ તમારા વ્યક્તિગત કમ્પ્યુટર પર ડાઉનલોડ કરેલા ડિજિટલ પાઠયપુસ્તકો, પ્રશ્ન બેંકો અને વધુ ઑફ્લાઇનની ઍક્સેસ પ્રદાન કરે છે. વિંડોઝ અને ઉબુન્ટુ OS માટે ઉપલબ્ધ}",
        "comingsoon": "ટૂક સમયમાં આવી રહ્યું છે!\'",
        "DataDashboard": "ડેટા ડેશબોર્ડ",
        "viewUsagepattern": "સમગ્ર દેશ અને તમામ રાજ્યોમાં વપરાશની રીત જુઓ",
        "last7Weeks": "કુલ શીખવાના સત્રો માટે છેલ્લા 7 અઠવાડિયાનો ડેટા",
        "lastupdated": "છેલ્લે અપડેટ કર્યું",
        "clickstateut": "વધુ વિગતો માટે રાજ્ય / કેન્દ્રશાસિત કેન્દ્રો પર ક્લિક કરો",
        "representationonly": "ફક્ત રજૂઆત માટેનો નકશો",
        "usageMetrics": "વપરાશ મેટ્રિક્સ",
        "usageMetricsDescription": "22+ રાજ્ય બોર્ડ્સની શૈક્ષણિક અને બિન શૈક્ષણિક સામગ્રીનું એક્સપ્લોર કરો",
        "btnViewDashboard": "ડેશબોર્ડ જુઓ",
        "open": "ખુલ્લા",
        "download": "ડાઉનલોડ કરો",
        "DIKSHAUsageTillDate": "DIKSHA વર્તમાન વપરાશ",
        "LearningLessons": "અધ્યયન સત્રો",
        "minutes": "મિનિટ",
        "TermsofUse": "નિયમો અને નીતિઓ",
        "needHelp": "મદદ જોઈતી",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "મુખ્ય વિષયવસ્તુ પર જાઓ",
        "sitemap": "સાઇટ નકશો",
        "ScreenReaderAccess": "સુલભતા કોર્નર",
        "DIKSHAUpdates": "DIKSHA સુધારાઓ",
        "lastupdatedonresult": "અહેવાલ સાપ્તાહિક અપડેટ - બપોર પછી, દરેક સોમવાર",
        "lastupdatedonresultdaily": "દરરોજ અહેવાલ",
        "totalDIKSHAusage": "મિનિટમાં કુલ DIKSHA વપરાશ સમય",
        "numberLearningActivities": "શીખનારાઓ દ્વારા DIKSHA ઇન્ફ્રાસ્ટ્રક્ચરનો ઉપયોગ કરીને શીખવાની પ્રવૃત્તિઓ કેટલી વાર હાથ ધરવામાં આવી",
        "noevents": "કોઈ આગામી ઇવેન્ટ્સ ઉપલબ્ધ નથી",
        "updateticker1": "રાષ્ટ્ર માટે, રાષ્ટ્ર માટે અને રાષ્ટ્ર દ્વારા શિક્ષણની ગુણવત્તાની સાતત્ય સુનિશ્ચિત કરવા માટેનો એક કાર્યક્રમ",
        "updateticker2": "રાષ્ટ્રીય શૈક્ષણિક સંશોધન અને તાલીમ પરિષદની પહેલ (શિક્ષણ મંત્રાલય, ભારત સરકાર)",
        "contributionMetrics": "ફાળો મેટ્રિક્સ",
        "contributionDescription": "દેશભરના સામગ્રી યોગદાનના ડેટા",
        "dikshaContentContribution": "DIKSHA સામગ્રીનું યોગદાન",
        "contributors": "ફાળો આપનાર",
        "contributions": "ફાળો",
        "courseMetrics": "કોર્સ મેટ્રિક્સ",
        "courseMetricsDescription": "દેશભરમાંથી કોર્સ ડેટા",
        "courseUsage": "DIKSHA અભ્યાસક્રમો અને વપરાશ",
        "courses": "અભ્યાસક્રમો",
        "Enrolments": "નોંધણી",
        "completions": "અભ્યાસક્રમ પૂર્ણ",
        "certificatesIssued": "પ્રમાણપત્રો જારી કર્યાં",
        "Datasets": "ડેટાસેટ્સ",
        "contributionsDiksha": "DIKSHA માં સામગ્રી ફાળો",
        "contributorsDiksha": "ફાળો આપનારાઓની સંખ્યા",
        "EnrolmentsDiksha": "DIKSHA માં કુલ અભ્યાસક્રમોની નોંધણી",
        "CompletionsDiksha": "DIKSHA માં કુલ અભ્યાસક્રમ પૂર્ણ",
        "coursesDiksha": "DIKSHA માં અભ્યાસક્રમો",
        "DikshaDatasets": "DIKSHA સાર્વજનિક ડેટાસેટ્સ",
        "DatasetsDescription": "DIKSHA, શિક્ષણ માટે ડિજિટલ ઈન્ફ્રાસ્ટ્રક્ચરને સક્ષમ બનાવતું એક મંચ છે, તે દેશભરમાં વિવિધ પ્રકારની શિક્ષણ અને શિક્ષણની જરૂરિયાતોને સમર્થન આપે છે. આમ જનરેટ કરેલા DIKSHA વપરાશ ડેટાને જાહેર કરવા માટેનો છે, અને સાર્વજનિક ડેશબોર્ડ અને ડેટાસેટ્સ દ્વારા બધાને ઍક્સેસિબલ છે. આ DIKSHA પેઝમાં હમણાં ઉપલબ્ધ તમામ ડેટાસેટ્સની સૂચિ છે - દરેક ડેટાસેટ વિશેની વધુ માહિતી ડેટાસેટના વિગતો પેઝથી મેળવી શકાય છે.",
        "csv": "CSV",
        "json": "JSON",
        "usefulLinks": "ઉપયોગી લિંક્સ",
        "dictionaryheading": "દેશભરના સામગ્રી યોગદાનના ડેટા",
        "datadictionary": "ડેટા ડિક્શનરી",
        "Details": "વિગતો",
        "usagemetrics": "વપરાશ મેટ્રિક્સ",
        "contributionmetrics": "યોગદાન મેટ્રિક્સ",
        "coursemetrics": "કોર્સ મેટ્રિક્સ",
        "board-ncert-description": "NCERT (શૈક્ષણિક સંશોધન અને તાલીમ રાષ્ટ્રીય સમિતિ) દ્વારા પ્રકાશિત સામગ્રીનું અન્વેષણ કરો",
        "board-cbse-description": "CBSE (સેન્ટ્રલ બોર્ડ ઓફ સેકન્ડરી એજ્યુકેશન) દ્વારા પ્રકાશિત સામગ્રીનું અન્વેષણ કરો",
        "board-nios-description": "NIOS (નેશનલ ઇન્સ્ટિટ્યૂટ ઓપન સ્કૂલિંગ) દ્વારા પ્રકાશિત સામગ્રીનું અન્વેષણ કરો",
        "board-btntitle": "એક્સપ્લોર"
    },
    "hi": {
        "language": "हिंदी",
        "diksha": "DIKSHA",
        "govofIndia": "भारत सरकार",
        "dikshamoto": "डिजिटल इंफ्रास्ट्रक्चर फॉर नॉलेज शेयरिंग",
        "dikshaDescription": "राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद की एक पहल (शिक्षा मंत्रालय, भारत सरकार )",
        "btnExploreDiksha": "DIKSHA का अन्वेषण कीजिए",
        "explore": "अन्वेषण",
        "ExploreDikshaContent": "DIKSHA से विवृत डिजिटल कंटेन्ट की दुनिया का अन्वेषण कीजिए",
        "stateboard": "राज्य/केंद्र शासित प्रदेश",
        "stateboardDescription": "22+ राज्य और केंद्र शासित प्रदेश द्वारा प्रकाशित कंटेन्ट का अन्वेषण कीजिए",
        "about": "के बारे में",
        "home": "होम",
        "dashboard": "डैशबोर्ड",
        "getapp": "ऐप प्राप्त करे",
        "contribute": "योगदान",
        "aboutdiksha": "DIKSHA के बारे में",
        "aboutdikshacontent": "DIKSHA (नॉलेज शेयरिंग के लिए डिजिटल इन्फ्रास्ट्रक्चर), स्कूली शिक्षा के लिए एक राष्ट्रीय मंच है, जो की, शिक्षा मंत्रालय की राष्ट्रीय शैक्षिक अनुसन्धान और प्रशिक्षण परिषद (एन सी इ आर टी ) की एक पहल हैं! DIKSHA खुली वास्तुकला के मूल सिद्धांतों के आधार पर विकसित किया गया था, खुली पहुच, खुली लाइसेंस विविधता, राष्ट्रीय शिक्षक मंच के लिए रणनीति और दृष्टिकोण पत्र में उल्लिखित विकल्प और स्वायत्तता, माननीय पूर्व मानव संसाधन विकास मंत्री श्री प्रकाश जावड़ेकर द्वारा मई 2017 में जारी किया गया! DIKSHA को खुद भारत के माननीय उपराष्ट्रपति जी द्वारा 5 सितम्बर, 2017 में शुरू किया गया था और तब से 35 राज्य/केंद्र शाषित प्रदेश भर में अपनाया गया है, और साथ ही साथ, सी बी एस इ और एन सी इ आर टी के साथ और करोड़ों शिक्षार्थियों और शिक्षकों द्वारा भी अपनाया गया है ।",
        "aboutdikshacontent2": "Diksha ओपन सोर्स टेक्नोलॉजी पर बनाया गया है, जिसे भारत में और भारत के लिए बनाया गया है, जो इंटरनेट स्तर टेक्नोलॉजी को शामिल करता है और सिखाने और सीखने के लिए कई उपयोगी-मामलों और समाधानों को संभव बनाता है। DIKSHA को MIT लाइसेंस प्राप्त ओपन सोर्स तकनीक का उपयोग करके बनाया गया है जिसे Sunbird कहा जाता है जो सीखने के लिए एक डिजिटल इंफ्रास्ट्रक्चर है और इसे कई भाषाओं और समाधानों का समर्थन करने के लिए डिज़ाइन किया गया है और मंच तथा समाधानों के विकास के लिए निर्माण खंडो के रूप में 100 से अधिक सूक्ष्म सेवाओं की पेशकश करता है। \n\n Diksha, जैसा कि पहले उल्लेख किया गया है, भारत के सभी राज्यों और केंद्र शासित प्रदेशों के उपयोग के लिए उपलब्ध है। प्रत्येक राज्य /केंद्र शासित प्रदेश अपने तरीके से DIKSHA मंच का लाभ उठाते हैं, क्योंकि इसके पास अपने शिक्षकों और विद्यार्थियों के लिए कार्यक्रमों को बनाने और उन्हें चलाने के लिए मंच की विभिन्न क्षमताओं और समाधानों का उपयोग करने की स्वतंत्रता और विकल्प है। DIKSHA नीतियां और उपकरण शिक्षा इकोसिस्टम (शिक्षाविद्, विशेषज्ञ, संगठन, संस्थाएं - सरकार, स्वायत्त संस्थानों, गैर-सरकारी और निजी संगठनों) के लिए संभव बनाते हैं कि वे देश के लिए बड़े पैमाने पर सीखने के लक्ष्यों को प्राप्त करने के लिए एक साझा मंच पर भाग लें , योगदान दें और लाभ उठायें । \n\n DIKSHA को देश भर के शिक्षार्थियों और शिक्षकों द्वारा पहुँचा जा सकता है और वर्तमान में भारत भर में NCERT, CBSE और SCERT की विभिन्न भाषाओं और 18+ भाषाओं का समर्थन करता है। ये मंच स्कूल शिक्षा, मूलभूत शिक्षण कार्यक्रमों के लिए और शिक्षार्थियों और शिक्षकों के रेखांकित और अलग-अलग समुदायों के लिए समावेशी सीखने का समर्थन करने के लिए विकसित किया जा रहा है। \n\n COVID-19 स्कूली शिक्षा से संबंधित व्यवधान के संदर्भ में, DIKSHA सभी राज्यों / केन्द्र शासित प्रदेशों के लिए अभिनव राज्य कार्यक्रमों के माध्यम से घर पर सीखने / शिक्षा को सक्षम करने के लिए संभव बनाता है; इसलिए भारत भर में शिक्षकों और शिक्षार्थियों के लाभ के लिए प्रौद्योगिकी के उपयोग को छलांग लगाना है।",
        "aboutdikshanewcontent": "DIKSHA (डिजिटल इंफ्रास्ट्रक्चर फॉर नॉलेज शेयरिंग) शिक्षा मंत्रालय, भारत सरकार के तत्वाधान के अंतर्गत राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद् की एक पहल दीक्षा (ज्ञान साँझा करने हेतु डिजिटल अवसंरचना) स्कूली शिक्षा के लिए एक राष्ट्रीय मंच है| इसका प्रारंभ 2017 में भारत के तत्कालीन माननीय उपराष्ट्रपति- श्री एम. वेंकैया नायडु  द्वारा किया गया था, दीक्षा केन्द्रीय माध्यमिक शिक्षा बोर्ड सहित लगभग सभी राज्यों/केंद्र शासित प्रदेशों और केंद्रीय स्वायत्त निकायों/बोर्डों द्वारा अपनाया गया है| दीक्षा को तत्कालीन माननीय मानव संसाधन विकास मंत्री श्री प्रकाश जावडेकर / जावड़ेकर द्वारा सितंबर, 2017 में जारी राष्ट्रीय शिक्षक मंच के लिए निर्धारित कार्यनीति और दृष्टिकोण प्रपत्र के आधार पर विकसित किया गया था। दीक्षा के माध्यम से देश भर के शिक्षार्थी एवम् अध्यापक लाभ उठा सकते हैं , वर्तमान में यह 36 भारतीय भाषाओँ में उपलब्ध है| प्रत्येक राज्य/केंद्र शासित प्रदेश दीक्षा मंच को अपनी आवश्यकता अनुरूप पोषित करते है, क्योंकि इसमें शिक्षकों, शिक्षार्थियों और प्रशासकों के लिए कार्यक्रमों की रुपरेखा बनाने / तैयार करना और उनके प्रचालन के लिए मंच की विभिन्न क्षमताओं और समाधानों का उपयोग करने की स्वतंत्रता और विकल्प है। दीक्षा की नीतियाँ और उपकरण शिक्षण पारिस्थितिकी तंत्र (शिक्षाविद् , विशेषज्ञ, संगठन, संस्थान - सरकारी, स्वायत्त संस्थान, गैर-सरकारी और निजी संगठन ) को समर्थ / सक्षम बनाती है कि वह देश के लिए बड़े पैमाने पर सिखने के लक्ष्यों को प्राप्त करने हेतु एक समान मंच को पोषित करने में अपना योगदान दे सके। दीक्षा की घोषणा ‘एक राष्ट्र एक मंच’ के रूप में आत्म-निर्भर भारत के एक अंग  के रूप में भारत सरकार की एक पहल पीएम ई-विद्या के अंतर्गत की गई है।\nएनसीईआरटी की पाठ्यपुस्तकें CC BY NC-ND एवं  सभी संसाधन CC BY NC-SA के तहत लाइसेंस प्राप्त हैं। भारत सरकार द्वारा पीएम ईविद्या पहल के अंतर्गत जिसे आत्म निर्भर भारत के एक भाग के रूप में घोषित किया गया था वहीं दीक्षा को 'वन नेशन, वन डिजिटल प्लेटफॉर्म'/एक राष्ट्र एक डिजिटल मंच के रूप में घोषित किया गया है।",
        "aboutdikshanewcontent2": "दीक्षा एक मुक्त संसाधन तकनीक के आधार पर भारत में और भारत के लिए बना है, जो कि बड़े पैमाने पर तकनीकों को शामिल करता है / द्वारा पोषित है और शिक्षा व सिखने / अध्ययन के लिए उदाहरणों व उनके समाधान को संभव बनाता है | दीक्षा को सनबर्ड मानक एम.आई.टी लाइसेंस धारक मुक्त संसाधन तकनीक का प्रयोग करके बनाया गया है, जो की सिखने और समाधान पाने के लिए एक डिजिटल अवसंरचना है और मंचों व समाधानों के विकास के लिए एक महत्वपूर्ण घटक के रूप में 100 से अधिक माइक्रो सेवाएं प्रदान करता है।\n\n29 जुलाई 2021 को भारत के वर्तमान माननीय प्रधान मंत्री ने NDEAR (नेशनल डिजिटल एजुकेशन आर्किटेक्चर) का प्रारंभ किया जो राज्यों/केंद्र शासित प्रदेशों द्वारा संघीय और अंतर-संचालिता प्रणाली के विकास के लिए मूलभूत आधार प्रदान करता है। दीक्षा (DIKSHA) में NDEAR के अधिकांश मूलभूत घटक शामिल हैं, जिन्होंने NDEAR के कुछ सफल व्यवहारिक मामलों / उपयोगों / प्रयोगों को सक्षम बनाया जैसे: सक्रिय पाठ्यपुस्तकें, ऑनलाइन पाठ्यक्रम, सामग्री संलेखन, सामग्री का संग्रह, परस्पर संवादात्मक प्रश्नोत्तरी, प्रश्न बैंक, चैटबॉट, विश्लेषण प्रक्रिया और डैशबोर्ड। कोविड-19 (COVID-19) महामारी के समय, इस मंच के माध्यम से देश भर में शिक्षार्थियों और शिक्षकों द्वारा लाभान्वित होने वालों की संख्या में अभूतपूर्व वृद्धि का अनुभव किया गया।\n\nशिक्षण और सीखने की प्रक्रियाओं में सहायक डिजिटल सामग्री के लिए, एनसीईआरटी/सीबीएसई/राज्यों की विभिन्न पाठ्यसामग्री सम्बंधित आवश्यकताओं के लिए विद्यादान के तहत स्कूलों / व्यक्तिगत शिक्षकों, पाठ्यसामग्री भागीदारों, गैर सरकारी संगठनों, सीएसआर के तहत निगमित संगठनों द्वारा विभिन्न संसाधनों के एक समृद्ध कोष का योगदान दिया गया था / है ।\n\nविशेष आवश्यकता समूह वाले बच्चों (सीडब्ल्यूएसएन) के शिक्षण और सीखने में सहायता के लिए, बड़ी संख्या में ऑडियो पुस्तकें, आईएसएल (भारतीय सांकेतिक भाषा) वीडियो और शब्दकोश सीडब्ल्यूएसएन के लिए दीक्षा पर उपलब्ध है ।\n\nमहामारी के दौरान, दीक्षा के माध्यम से प्राथमिक स्तरों के लिए बड़े पैमाने पर शिक्षकों हेतु पेशेवर विकास कार्यक्रम के रूप में निष्ठा 1.0 (स्कूल प्रमुखों और शिक्षकों की समग्र प्रगति के लिए राष्ट्रीय पहल) को ऑनलाइन प्रारंभ किया गया था। निष्ठा 2.0 और 3.0 माध्यमिक और बुनियादी साक्षरता एवं संख्या-ज्ञान (FLN) पर केंद्रित है। निष्ठा के अलावा, कई राज्यों/केंद्र शासित प्रदेशों ने अपने स्वयं के क्षमता निर्माण कार्यक्रम तैयार किए हैं।\n\nरा.शै.अ.प्र.प छात्रों के लिए 24x7 आधार पर (चौबीस घंटे) पीएम ईविद्या डीटीएच-टीवी चैनलों (कक्षा I से XII तक एक कक्षा, एक चैनल) के माध्यम से पाठ्यसामग्री को प्रसारित करता है।यह सभी, चैनल कक्षावार पाठ्यसामग्री का प्रसारण करते हैं जिन्हें क्यूआर कोड के माध्यम से दीक्षा से लिंक किए गए है। सुसंगतता को बनाए रखने के लिए, दीक्षा पर प्रसारण सामग्री भी उपलब्ध कराई जाती है, जहाँ से इस पाठ्यसामग्री को किसी भी समय, कहीं भी सुलभता से प्राप्त किया जा सकता है।",
        "aboutdikshaimagetext": "दीक्षा - विविध, अनुकूल और विकासशील",
        "news": "समाचार",
        "resources": "साधन",
        "events": "इवेंट्स",
        "AboutVidyaDaan": "VidhyaDaan के बारे में",
        "AboutVidyaDaanDescription": "यह राष्ट्रीय कार्यक्रम देश भर में विशेष रूप से व्यक्तियों और संगठनों को शिक्षा क्षेत्र में ई-लर्निंग संसाधनों के योगदान के लिए एक आह्वान है ताकि यह सुनिश्चित किया जा सके कि पूरे भारत में शिक्षार्थियों के लिए उत्तम शिक्षा जारी रहे ।",
        "AboutVidyaDaanMoreDescription": "व्यक्तियों, शिक्षकों, शिक्षाविदों, विषय विशेषज्ञों, स्कूलों, सरकारी और गैर-सरकारी संगठनों आदि द्वारा पंजीकरण और नामांकन के बाद योगदान किया जा सकता है। ये योगदान विभिन्न प्रकार के हो सकते हैं जैसे कि स्पष्टीकरण वीडियो, शिक्षण वीडियो, अभ्यास प्रश्न, योग्यता-आधारित आइटम, पाठ योजना आदि, किसी भी ग्रेड के लिए 1 से 12 तक और किसी भी विषय के लिए निर्दिष्ट, राज्य और केंद्र शासित प्रदेश द्वारा उनके संबंधित परियोजनाओं के तहत! इस तरह के योगदान को क्रिएटिव कॉमन्स लाइसेंस ढांचे के तहत खुला-लाइसेंस होना चाहिए और संबंधित राज्य और केंद्र शासित प्रदेश द्वारा क्यूरेट किया जा सकता है और वे योगदानकर्ता जिनकी सामग्री को स्वीकार कर लिया गया है और उच्च उपयोग पाता है, उनकी विधिवत मान्यता प्राप्त होगी।",
        "VidyaDaanIntro": "राष्ट्र का, राष्ट्र के लिए और राष्ट्र के द्वारा गुणवत्ता सीखने की निरंतरता के प्रबंधन के लिए एक कार्यक्रम",
        "btnParticipate": "हिस्सा लेना",
        "VidyaDaanTypes": "ई-लर्निंग संसाधनों के प्रकार जिसमें आप योगदान कर सकते हैं",
        "ExplanationVideos": "विडियो द्वारा व्याख्या",
        "PracticeQuestions": "अभ्यास प्रश्न",
        "TeachingVideos": "शिक्षण वीडियो",
        "ExperierntialLearningVideos": "प्रायोगिक ज्ञान सीखने के वीडियो",
        "LessonPlans": "पाठ योजनाएं",
        "readmore": "ज्यादा पढ़े",
        "DIKSHAforMobile": "DIKSHA मोबाइल के लिए",
        "DIKSHAforMobileDescription": "DIKSHA प्लेटफ़ॉर्म आकर्षक शिक्षण सामग्री प्रदान करता है, जो निर्धारित स्कूल पाठ्यक्रम के लिए प्रासंगिक है, शिक्षकों, छात्रों और अभिभावकों के लिए। अपने सभी पाठों तक आसान पहुँच के लिए DIKSHA ऐप डाउनलोड करें और अपनी पाठ्यपुस्तकों में QR कोड स्कैन करें। (एंड्राइड 5.1 और ऊपर)",
        "DIKSHAforWeb": "DIKSHA वेब के लिए",
        "DIKSHAforWebDescription": "DIKSHA शिक्षण पोर्टल ब्राउज़र के माध्यम से DIKSHA के सभी ई-संसाधनों को ऑनलाइन एक्सेस प्रदान करता है।",
        "btnVisitDIKSHAportal": "DIKSHA पोर्टल पर जाएं",
        "DIKSHAOffline": "डेस्कटॉप ऐप",
        "DIKSHAOfflineDescription": "DIKSHA डेस्कटॉप डाउनलोड की गई डिजिटल पाठ्यपुस्तकों, प्रश्न बैंकों और ज्यादा ऑफ़लाइन प्रश्न को आपके व्यक्तिगत कंप्यूटर तक पहुँच प्रदान करता है। (विंडोज़ और ubuntu OS के लिए उपलब्ध है)",
        "comingsoon": "जल्द आ रहा है!\'",
        "DataDashboard": "डेटा डैशबोर्ड",
        "viewUsagepattern": "राष्ट्र और सभी राज्यों में उपयोग पैटर्न देखें",
        "last7Weeks": "कुल सीखने के सत्रों के लिए पिछले 7 सप्ताह का डेटा",
        "lastupdated": "आखरी बार अद्यतन",
        "clickstateut": "अधिक विवरण के लिए एक राज्य / केन्द्र शासित प्रदेश पर क्लिक करें",
        "representationonly": "मानचित्र केवल रिपोर्ट के लिए",
        "usageMetrics": "उपयोग मेट्रिक्स",
        "usageMetricsDescription": "22 + राज्यों के बोर्ड के शैक्षणिक और गैर शैक्षणिक सामग्री का अन्वेषण करें",
        "btnViewDashboard": "डैशबोर्ड देखें",
        "open": "खोले",
        "download": "डाउनलोड",
        "DIKSHAUsageTillDate": "DIKSHA का वर्तमान उपयोग",
        "LearningLessons": "सीखने के सत्र",
        "minutes": "मिनट्स",
        "TermsofUse": "नियम और शर्तें",
        "needHelp":"मदद की ज़रूरत है",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "मुख्य कंटेन्ट पर जाएं",
        "sitemap": "साइट का नक्शा",
        "ScreenReaderAccess": "अभिगम्यता कॉर्नर",
        "DIKSHAUpdates": "DIKSHA अपडेट",
        "lastupdatedonresult": "साप्ताहिक रिपोर्ट अपडेट, हर सोमवार -दोपहर",
        "lastupdatedonresultdaily": "रिपोर्ट रोजाना अपडेट होती है",
        "totalDIKSHAusage": "DIKSHA का मिनटों में कुल उपयोग समय",
        "numberLearningActivities": "शिक्षार्थियों द्वारा DIKSHA बुनियादी ढांचे का उपयोग करते हुए कई बार सीखने की गतिविधियाँ की गई थीं",
        "noevents": "कोई आगामी कार्यक्रम उपलब्ध नहीं है",
        "updateticker1": "शिक्षा की गुणवत्ता की निरंतरता सुनिश्चित करने के लिए राष्ट्र और राष्ट्र द्वारा राष्ट्र का एक कार्यक्रम",
        "updateticker2": "राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद की एक पहल (शिक्षा मंत्रालय, भारत सरकार )",
        "contributionMetrics": "योगदान मेट्रिक्स",
        "contributionDescription": "देश भर से सामग्री योगदान डेटा",
        "dikshaContentContribution": "DIKSHA सामग्री का योगदान",
        "contributors": "योगदान करने वाले",
        "contributions": "योगदान",
        "courseMetrics": "कोर्स मेट्रिक्स",
        "courseMetricsDescription": "देश भर से पाठ्यक्रम डेटा",
        "courseUsage": "Diksha पाठ्यक्रम और उपयोग",
        "courses": "पाठ्यक्रम",
        "Enrolments": "नामांकन",
        "completions": "पाठ्यक्रम पूर्णता",
        "certificatesIssued": "प्रमाण पत्र जारी किया",
        "Datasets": "डेटासेट",
        "contributionsDiksha": "DIKSHA को दी गयी सामग्री का योगदान",
        "contributorsDiksha": "योगदाताओं की संख्या",
        "EnrolmentsDiksha": "DIKSHA में कुल पाठ्यक्रम का नामांकन",
        "CompletionsDiksha": "DIKSHA में कुल पाठ्यक्रम पूरा हुआ",
        "coursesDiksha": "DIKSHA में पाठ्यक्रमों की संख्या",
        "DikshaDatasets": "DIKSHA सार्वजनिक डेटासेट",
        "DatasetsDescription": "DIKSHA, एक मंच है जो सीखने के लिए डिजिटल बुनियादी ढांचे को सक्षम बनाता है, देश भर में सीखने और सिखाने की जरूरतों की एक विस्तृत विविधता का समर्थन करता है। इस प्रकार उत्पन्न DIKSHA उपयोग डेटा सार्वजनिक डैशबोर्ड और डेटासेट के माध्यम से सार्वजनिक और सभी के लिए सुलभ है। इस पृष्ठ में अभी तक उपलब्ध सभी DIKSHA डेटासेट की एक सूची है प्रत्येक डेटासेट के बारे में अधिक जानकारी डेटासेट के विवरण पृष्ठ से प्राप्त की जा सकती है।",
        "csv": "CSV",
        "json": "JSON",
        "usefulLinks": "उपयोगी लिंक",
        "dictionaryheading": "देश भर से सामग्री योगदान का डेटा",
        "datadictionary": "डेटा शब्दकोश",
        "Details": "विवरण",
        "usagemetrics": "उपयोग मेट्रिक्स",
        "contributionmetrics": "योगदान मेट्रिक्स",
        "coursemetrics": "कोर्स मेट्रिक्स",
        "board-ncert-description": "एन सी ई आर टी (राष्ट्रीय शैक्षिक अनुसंधान और प्रशिक्षण परिषद)  द्वारा प्रकाशित सामग्री का अन्वेषण करें",
        "board-cbse-description": "सीबीएसई (केंद्रीय माध्यमिक शिक्षा बोर्ड) द्वारा प्रकाशित सामग्री का अन्वेषण करें",
        "board-nios-description": "NIOS (राष्ट्रीय मुक्त विद्यालयी शिक्षा संस्थान) द्वारा प्रकाशित सामग्री का अन्वेषण करें",
        "board-btntitle": "अन्वेषण"
    },
    "kn": {
        "language": "ಕನ್ನಡ",
        "diksha": "DIKSHA",
        "govofIndia": "ಭಾರತ ಸರ್ಕಾರ",
        "dikshamoto": "ಡಿಜಿಟಲ್‌ ಇನ್‌ ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್‌  ಫಾರ್‌  ನಾಲೆಡ್ಜ್‌  ಷೇರಿಂಗ್",
        "dikshaDescription": "ರಾಷ್ಟ್ರೀಯ ಶೈಕ್ಷಣಿಕ ಸಂಶೋಧನೆ ಮತ್ತು ತರಬೇತಿ ಪರಿಷತ್ತಿನ(ಎನ್‍.ಸಿ.ಇ.ಆರ್.ಟಿ) ಉಪಕ್ರಮ (ಶಿಕ್ಷಣ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ)",
        "btnExploreDiksha": "DIKSHA ಅನ್ವೇಷಿಸಿ",
        "explore": "ಅನ್ವೇಷಿಸಿ",
        "ExploreDikshaContent": "ಮುಕ್ತ ಡಿಜಿಟಲ್ ಪಠ್ಯಾಂಶಗಳ DIKSHA ಜಗತ್ತನ್ನು ಅನ್ವೇಷಿಸಿ",
        "stateboard": "ರಾಜ್ಯಗಳು/ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು",
        "stateboardDescription": "22+ ರಾಜ್ಯಗಳು ಮತ್ತು ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು ಪ್ರಕಟಿಸಿದ ಪಠ್ಯಾಂಶಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        "about": "ಕುರಿತು",
        "home": "ಹೋಂ",
        "dashboard": "ಡ್ಯಾಶ್‍ ಬೋರ್ಡ್",
        "getapp": "ಆಪ್ ಪಡೆಯಿರಿ",
        "contribute": "ಕೊಡುಗೆ ನೀಡಿ",
        "aboutdiksha": "DIKSHA ಕುರಿತು",
        "aboutdikshacontent": "DIKSHA (ಡಿಜಿಟಲ್ ಇನ್‍ಫ್ರಾಸ್ಟ್ರಕ್ಚರ್ ಫಾರ್ ನಾಲೆಜ್ ಶೇರಿಂಗ್) ಶಾಲಾ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಇರುವ ರಾಷ್ಟ್ರೀಯ ಪ್ಲಾಟ್ ಫಾರ್ಮ್ ಆಗಿದೆ. ಇದು ರಾಷ್ಟ್ರೀಯ ಶೈಕ್ಷಣಿಕ ಸಂಶೋಧನೆ ಮತ್ತು ತರಬೇತಿ ಪರಿಷತ್ತು(ಎನ್‍.ಸಿ.ಇ.ಆರ್.ಟಿ), ಶಿಕ್ಷಣ ಸಚಿವಾಲಯದ ಒಂದು ಉಪಕ್ರಮವಾಗಿದೆ. ಮೇ, 2017ರಲ್ಲಿ ಮಾನವ ಸಂಪನ್ಮೂಲ ಅಭಿವೃದ್ಧಿ ಸಚಿವಾಲಯದ ಗೌರವಾನ್ವಿತ ಸಚಿವರಾದ ಶ್ರೀ ಪ್ರಕಾಶ್ ಜಾವಡೇಕರ್ ಅವರು ಬಿಡುಗಡೆ ಮಾಡಿರುವ ನ್ಯಾಶನಲ್ ಟೀಚರ್ ಪ್ಲಾಟ್‍ಫಾರ್ಮಿನಲ್ಲಿ ರೂಪಿತವಾಗಿರುವಂತೆ ಮುಕ್ತ ಆರ್ಕಿಟೆಕ್ಚರ್, ಮುಕ್ತ ಲಭ್ಯತೆ, ಮುಕ್ತ ಪರವಾನಗಿ ವೈವಿಧ್ಯತೆ, ಆಯ್ಕೆ ಮತ್ತು ಸ್ವಾಯತ್ತತೆಯ ಬಹುಮುಖ್ಯ ತತ್ವಗಳನ್ನು ಆಧರಿಸಿ DIKSHA ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ. 2017ರ ಸೆಪ್ಟೆಂಬರ್ 5ರಂದು ಗೌರವಾನ್ವಿತ ಉಪರಾಷ್ಟ್ರಪತಿಗಳು DIKSHA ಉದ್ಘಾಟಿಸಿದ್ದಾರೆ ಮತ್ತು ಈವರೆಗೆ 35 ರಾಜ್ಯಗಳು/ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು, ಸಿ.ಬಿ.ಎಸ್‍.ಸಿ., ಎನ್‍.ಸಿ.ಇ.ಆರ್‍.ಟಿ ಮತ್ತು ಕೋಟ್ಯಂತರ ವಿದ್ಯಾರ್ಥಿಗಳು ಹಾಗೂ ಶಿಕ್ಷಕರು ಇದನ್ನು ಅಳವಡಿಸಿಕೊಂಡಿದ್ದಾರೆ.",
        "aboutdikshacontent2": "DIKSHA ವನ್ನು ಮುಕ್ತ ಸಂಪನ್ಮೂಲ ತಂತ್ರಜ್ಞಾನದ ಮೇಲೆ ರಚಿಸಲಾಗಿದ್ದು, ಇದನ್ನು ಭಾರತದಲ್ಲಿ ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ ಮತ್ತು ಭಾರತಕ್ಕಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾಗಿದೆ. ಇದು ಇಂಟರ್ನೆಟ್ ಸ್ಕೇಲ್ ತಂತ್ರಜ್ಞಾನವನ್ನು ಅಳವಡಿಸಿಕೊಂಡಿದ್ದು, ಬೋಧನೆ ಮತ್ತು ಕಲಿಕೆಗೆ ಹಲವಾರು ಬಗೆಯ ಬಳಕೆ ವಿಧಾನಗಳು ಹಾಗೂ ಪರಿಹಾರಗಳನ್ನು ಸಾಧ್ಯಗೊಳಿಸುತ್ತದೆ. DIKSHA ವನ್ನು ಸನ್‍ಬರ್ಡ್ ಎಂದು ಕರೆಯಲಾಗುವ, ಎಂಐಟಿ ಪರವಾನಗಿಯಿರುವ ಓಪನ್ ಸೋರ್ಸ್ ತಂತ್ರಜ್ಞಾನವನ್ನು ಬಳಸಿಕೊಂಡು ರೂಪಿಸಲಾಗಿದೆ. ಸನ್‍ಬರ್ಡ್ ಕಲಿಕೆಗಾಗಿ ಇರುವ ಒಂದು ಡಿಜಿಟಲ್ ಮೂಲಸೌಕರ್ಯವಾಗಿದ್ದು, ಹಲವಾರು ಭಾಷೆಗಳು ಹಾಗೂ ಪರಿಹಾರಗಳನ್ನು ಬೆಂಬಲಿಸುವ ಹಾಗೆ ವಿನ್ಯಾಸಪಡಿಸಲಾಗಿದೆ. ಇದು ಪ್ಲಾಟ್‍ಫಾರ್ಮ್‍ಗಳು ಹಾಗೂ ಪರಿಹಾರಗಳ ಅಭಿವೃದ್ಧಿಗೆ ಅಗತ್ಯವಾಗಿರುವ ಬಿಲ್ಡಿಂಗ್ ಬ್ಲಾಕ್‍ಗಳ ಹಾಗಿರುವ 100ಕ್ಕೂ ಹೆಚ್ಚು ಮೈಕ್ರೋ ಸೇವೆಗಳನ್ನು ನೀಡುವುದು. \n\nಈ ಮೊದಲೇ ತಿಳಿಸಿದಂತೆ, DIKSHA ಭಾರತದ ಎಲ್ಲ ರಾಜ್ಯಗಳು ಮತ್ತು ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳ ಬಳಕೆಗೆ ಲಭ್ಯವಿದೆ. ಪ್ರತಿ ರಾಜ್ಯ/ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು DIKSHA ಪ್ಲಾಟ್‍ ಫಾರ್ಮ್ ಅನ್ನು ತಮ್ಮದೇ ಆದ ರೀತಿಯಲ್ಲಿ ಬಳಸಬಹುದಾಗಿದೆ, ಅವರಿಗೆ DIKSHAದಲ್ಲಿ ತಮ್ಮ ಶಿಕ್ಷಕರು ಹಾಗೂ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಪ್ರೋಗ್ರಾಮ್‍ಗಳನ್ನು ರೂಪಿಸಿ, ನಡೆಸಲು ವಿವಿಧ ಸಾಮರ್ಥ್ಯಗಳು ಹಾಗೂ ಪರಿಹಾರಗಳನ್ನು ತಮಗೆ ಅಗತ್ಯವಾದ ರೀತಿಯಲ್ಲಿ ಬಳಸುವ ಸ್ವಾತಂತ್ರ್ಯ ಮತ್ತು ಆಯ್ಕೆಯು ಇದೆ. DIKSHAದ ನೀತಿಗಳು ಮತ್ತು ಸಾಧನಗಳು ಶಿಕ್ಷಣ ಪರಿಸರವ್ಯವಸ್ಥೆಗೆ (ಶಿಕ್ಷಣ ಶಾಸ್ತ್ರಜ್ಞರು, ತಜ್ಞರು, ಸಂಸ್ಥೆಗಳು, ಸರ್ಕಾರಿ ಹಾಗೂ ಸ್ವಾಯತ್ತ ಸಂಸ್ಥೆಗಳು, ಸರ್ಕಾರೇತರ ಹಾಗೂ ಖಾಸಗಿ ಸಂಸ್ಥೆಗಳು) ದೇಶದ ಬೃಹತ್ ಮಟ್ಟದಲ್ಲಿ ಕಲಿಕಾ ಗುರಿಗಳನ್ನು ಸಾದಿಸಲು ಒಂದು ಸಾಮಾನ್ಯ ಪ್ಲಾಟ್‍ ಫಾರ್ಮ್ ನಲ್ಲಿ ಭಾಗವಹಿಸಿ, ಕೊಡುಗೆ ನೀಡಿ, ಬಳಸಿಕೊಳ್ಳಲು ಸಮರ್ಥಗೊಳಿಸುತ್ತದೆ.\n\nDIKSHAವನ್ನು ದೇಶಾದ್ಯಂತ ರುವ ಶಿಕ್ಷಕರು ಹಾಗೂ ವಿದ್ಯಾರ್ಥಿಗಳು ಪಡೆದುಕೊಳ್ಳಬಹುದಾಗಿದ್ದು, ಇದು ಪ್ರಸ್ತುತ 18+ ಭಾಷೆಗಳನ್ನು ಮತ್ತು ಎನ್‍.ಸಿ.ಎ.ಆರ್‍.ಟಿ., ಸಿ.ಬಿ.ಎಸ್‍.ಇ. ಮತ್ತು ದೇಶದಲ್ಲೆಡೆ ಇರುವ ಎಸ್‍.ಸಿ.ಇ.ಆರ್‍.ಟಿ.ಗಳ ಪಠ್ಯಕ್ರಮವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. ಈ ಪ್ಲಾಟ್‍ಫಾರ್ಮ್‍ ಅನ್ನು ಶಾಲಾ ಶಿಕ್ಷಣ, ಮೂಲಶಿಕ್ಷಣ ಕಲಿಕಾ ಕಾರ್ಯಕ್ರಮಗಳಿಗಾಗಿ ಮತ್ತು ಭಿನ್ನ ಸಾಮರ್ಥ್ಯವುಳ್ಳ, ಉಪೇಕ್ಷೆಗೀಡಾದ ಸಮುದಾಯದ ವಿದ್ಯಾರ್ಥಿಗಳು ಹಾಗೂ ಶಿಕ್ಷಕರ ಇನ್‍ಕ್ಲುಸಿವ್ ಕಲಿಕೆಯನ್ನು ಬೆಂಬಲಿಸಲು ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ. \n\nಕೋವಿಡ್ - 19 ಕಾರಣದಿಂದಾಗಿ ಶಾಲಾ ಶಿಕ್ಷಣಕ್ಕೆ ಅಡ್ಡಿಯುಂಟಾಗಿರುವ ಹಿನ್ನೆಲೆಯಲ್ಲಿ, DIKSHA ಎಲ್ಲ ರಾಜ್ಯಗಳು ಹಾಗೂ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳಿಗೆ ಮನೆಯಲ್ಲಿಯೇ ಬೋಧನೆ/ಕಲಿಕೆಯನ್ನು ವಿನೂತನವಾದ ರಾಜ್ಯದ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ಸಾಧ್ಯಗೊಳಿಸಿದೆ; ಹೀಗಾಗಿ ದೇಶದೆಲ್ಲೆಡೆ ಇರುವ ಶಿಕ್ಷಕರ ಹಾಗೂ ವಿದ್ಯಾರ್ಥಿಗಳ ಅನುಕೂಲ, ಲಾಭಕ್ಕಾಗಿ ತಂತ್ರಜ್ಞಾನವನ್ನು ಸಮರ್ಥವಾಗಿ, ವಿಸ್ತೃತ ರೂಪದಲ್ಲಿ ಬಳಸಿಕೊಳ್ಳಲಾಗಿದೆ.",
        "aboutdikshanewcontent": "ದೀಕ್ಷಾ(ಜ್ಞಾನ ಹಂಚಿಕೆಗಾಗಿ ಡಿಜಿಟಲ್‌ ಮೂಲ ಸೌಕರ್ಯ) ಭಾರತ ಸರ್ಕಾರದ ಶಿಕ್ಷಣ ಮಂತ್ರಾಲಯದ ಆಶ್ರಯದಲ್ಲಿ ‌ ರಾಷ್ಟ್ರೀಯ ಶೈಕ್ಷಣಿಕ ಮತ್ತು ಸಂಶೋಧನಾ ಮಂಡಳಿ (ಎನ್.ಸಿ,ಇ.ಆರ್.ಟಿ) ಯ ಉಪಕ್ರಮವಾಗಿದ್ದು, ಶಾಲಾ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ರೂಪುಗೊಂಡಿರುವ ವೇದಿಕೆಯಾಗಿದೆ. ಭಾರತದ ಘನತೆವೆತ್ತ ಉಪರಾಷ್ಟ್ರಪತಿಗಳಾದ  ಶ್ರೀ ವೆಂಕಯ್ಯ ನಾಯ್ಡುರವರಿಂದ 2017ರಲ್ಲಿ ಲೋಕಾರ್ಪಣೆಗೊಂಡಿರುವ ಈ ಉಪಕ್ರಮವನ್ನು ಭಾರತದ ಬಹಳಷ್ಟು ರಾಜ್ಯಗಳು, ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು, ಕೇಂದ್ರೀಯ ಮಾಧ್ಯಮಿಕ ಶಿಕ್ಷಣ ಮಂಡಳಿ (ಸಿ.ಬಿ.ಎಸ್. ಇ) ಒಳಗೊಂಡಂತೆ ಕೇಂದ್ರೀಯ ಸ್ವಾಯತ್ತ ಸಂಸ್ಥೆಗಳು ಹಾಗೂ ಮಂಡಳಿಗಳು ಅಳವಡಿಸಿಕೊಂಡಿವೆ. ದೀಕ್ಷಾ  ಅನ್ನು   ಮಾನವ ಸಂಪನ್ಮೂಲ ಮಂತ್ರಾಲಯದ ಅಂದಿನ ಸಚಿವರಾದ ಶ್ರೀ ಪ್ರಕಾಶ್‌ ಜಾವಡೇಕರ್‌ ರವರಿಂದ ಸೆಪ್ಟೆಂಬರ್‌ 2017 ರಲ್ಲಿ  ಜಾರಿಗೊಳಿಸಿದ ರಾಷ್ಟ್ರೀಯ  ಶಿಕ್ಷಕರ ವೇದಿಕೆಗಾಗಿ ಸಿದ್ಧಪಡಿಸಲಾದ ಕಾರ್ಯನೀತಿ ಹಾಗೂ ದೃಷ್ಟಿಕೋನ ಪತ್ರಿಕೆಯನ್ನು ಆಧರಿಸಿ  ಅಭಿವೃದ್ಧಿಪಡಿಸಲಾಗಿದೆ. ರಾಷ್ಟ್ರಾದ್ಯಂತ  ದೀಕ್ಷಾದ  ಉಪಯೋಗವನ್ನು ಕಲಿಕಾರ್ಥಿಗಳು ಹಾಗೂ ಶಿಕ್ಷಕರು ಪಡೆಯಬಹುದಾಗಿದ್ದು, ಪ್ರಸ್ತುತ 36 ಭಾರತೀಯ ಭಾಷೆಗಳನ್ನು ಬೆಂಬಲಿಸಿತ್ತಿದೆ. ದೀಕ್ಷಾ ವೇದಿಕೆಯಲ್ಲಿನ ಮುಕ್ತತೆ ಹಾಗೂ ಸ್ವಾತಂತ್ರ್ಯದ ಕಾರಣ  ಪ್ರತಿ ರಾಜ್ಯ/ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು ತಮ್ಮದೇ ಆದ ರೀತಿಯಲ್ಲಿ ಶಿಕ್ಷಕರಿಗೆ, ಕಲಿಕಾರ್ಥಿಗಳಿಗೆ ಹಾಗೂ ಆಡಳಿತಗಾರರಿಗಾಗಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ವಿನ್ಯಾಸಗೊಳಿಸಿ, ಜಾರಿಗೊಳಿಸಲು ಬಳಸುತ್ತಿವೆ.  ದೀಕ್ಷಾದ ನೀತಿಗಳು ಹಾಗೂ ಸಾಧನಗಳು ಶಿಕ್ಷಣ ವ್ಯವಸ್ಥೆಯ ( ಶಿಕ್ಷಣ ತಜ್ಞರು, ಸಂಘಟನೆಗಳು, ವಿಶೇಷ ತಜ್ಞರು,ಸ್ವಾಯತ್ತ ಸಂಸ್ಥೆಗಳು, ಸರ್ಕಾರಿ, ಸರ್ಕಾರೇತರ ಹಾಗೂ ಖಾಸಗಿ ಸಂಸ್ಥೆಗಳು) ಭಾಗವಹಿಸುವಿಕೆ, ಕೊಡುಗೆಯನ್ನು  ನೀಡಲು ಪ್ರೋತ್ಸಾಹಿಸಿ  , ರಾಷ್ಟ್ರವು ತನ್ನ ಕಲಿಕಾ ಗುರಿಗಳನ್ನು ಸಾಧಿಸಲು ಒಂದು ಸಾಮಾನ್ಯ ವೇದಿಕೆಯನ್ನು ಒದಗಿಸಿದೆ. ದೀಕ್ಷಾವನ್ನು ʼಒಂದು ರಾಷ್ಟ್ರ ಒಂದು ವೇದಿಕೆʼ ರೂಪದಲ್ಲಿ ಆತ್ಮ ನಿರ್ಭರ್‌ ಭಾರತ್‌  ದ  ಭಾಗವಾಗಿ ಘೋಷಿತವಾದ  ಪಿ.ಎಂ ಇವಿದ್ಯಾ ಉಪಕ್ರಮದಡಿ ಅಂತರ್ಗತಗೊಳಿಸಲಾಗಿದೆ.\nಎನ್.ಸಿ.ಇ.ಆರ್.ಟಿ.,ಪಠ್ಯಪುಸ್ತಕಗಳು CC BY NC-ND ಅಡಿಯಲ್ಲಿ ಪರವಾನಗಿ ಪಡೆದಿವೆ ಮತ್ತು ಎಲ್ಲಾ ಸಂಪನ್ಮೂಲಗಳು CC BY NC-SA ಅಡಿಯಲ್ಲಿ ಪರವಾನಗಿ ಪಡೆದಿವೆ.",
        "aboutdikshanewcontent2": "ದೀಕ್ಷಾ್ ಒಂದು ಮುಕ್ತ ತಂತ್ರಜ್ಞಾನ  ಆಧಾರಿತವಾಗಿದ್ದು, ಭಾರತಕ್ಕಾಗಿ, ಭಾರತದಲ್ಲಿಯೇ ಸಿದ್ಧಪಡಿಸಲಾಗಿದ್ದು ,ಬೃಹತ್‌ ತಂತ್ರಾಂಶಗಳನ್ನು ಒಳಗೊಂಡಿದೆ ಹಾಗೂ ಕಲಿಕೆ ಮತ್ತು ಬೋಧನೆಗೆ ಸಂಬಂಧಿಸಿದ ಹಲವಾರು ಪರಿಹಾರಗಳು ಹಾಗೂ ಮಾರ್ಗೋಪಾಯಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. ದೀಕ್ಷಾವನ್ನು ಎಂ.ಐ.ಟಿ ಯಿಂದ ಅನುಮತಿಸಲಾದ ಸನ್‌ ಬರ್ಡ್‌ ಎಂಬ ಮುಕ್ತ ತಂತ್ರಜ್ಞಾನ ಬಳಸಿ ನಿರ್ಮಿಸಲಾಗಿದ್ದು, ಕಲಿಕೆಗೆ ಹಾಗೂ ಹಲವಾರು ಪರಿಹಾರೋಪಾಯಗಳಿಗೆ ಮೂಲಭೂತ ಸೌಕರ್ಯವಾಗಿದೆ ಮತ್ತು 100 ಕ್ಕೂ ಅಧಿಕ ಮೈಕ್ರೋ ಸೇವೆಗಳನ್ನು ಮಹತ್ವಪೂರ್ಣ ಘಟಕದ ರೂಪದಲ್ಲಿ ಒದಗಿಸುತ್ತದೆ.\n\n29ನೇ ಜುಲೈ 2021 ರಂದು ಭಾರತದ ಸನ್ಮಾನ್ಯ ಪ್ರಧಾನ ಮಂತ್ರಿಗಳು NDEAR (ನ್ಯಾಷನಲ್‌ ಡಿಜಿಟಲ್‌ ಎಜುಕೆಷನಲ್‌ ಆರ್ಕಿಟೆಕ್ಚರ್)ಗೆ ಚಾಲನೆ ನೀಡಿದ್ದು, ರಾಜ್ಯ ಹಾಗೂ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು ಸಂಯುಕ್ತವಾಗಿ ಹಾಗೂ ಅಂತರ್‌ ಕ್ರಿಯಾತ್ಮಕವಾಗಿ ಕಾರ್ಯ ನಿರ್ವಹಿಸಲು ಆಧಾರವನ್ನು ಒದಗಿಸಿದೆ. ದೀಕ್ಷಾದಲ್ಲಿ NDEAR ನ ಹೆಚ್ಚಿನ ಮೂಲಭೂತ ಅಂಶಗಳು ಅಡಕವಾಗಿರುವುದರಿಂದ NDEAR ನ ಯಶಸ್ವಿ ಪ್ರಯೋಗಗಳನ್ನು ಉತ್ತಮ ರೀತಿಯಲ್ಲಿ ಬಳಸಲು ಸಾ‍ಧ್ಯವಾಗಿದೆ. ಉದಾ: ಇ-ಪಠ್ಯಪುಸ್ತಕಗಳು, ಆನ್‌ ಲೈನ್‌ ಕೋರ್ಸ್‌ ಗಳು, ವಿಷಯಾಂಶಗಳ ಸಂಗ್ರಹಣೆ, ವಿಷಯಾಂಶಗಳ ಸಂಕಲನಗೊಳಿಸುವಿಕೆ, ಪರಸ್ಪರ ಸಂವಾದಾತ್ಮಕ ಪ್ರಶ್ನೋತ್ತರ ಕಾರ್ಯಕ್ರಮಗಳು, ಪ್ರ‍ಶ್ನೆ ಕೋಠಿಗಳು, ಚಾಟ್‌ ಬಾಟ್‌, ವಿಶ್ಲೇಷಣಾ ಪ್ರಕ್ರಿಯೆಗಳು ಹಾಗೂ ಡ್ಯಾಷ್‌ ಬೋರ್ಡ್.‌ ಕೋವಿಡ್-19ರ ಸಾಂಕ್ರಾಮಿಕ ಸಂದರ್ಭದಲ್ಲಿ ರಾಷ್ಟ್ರಾದ್ಯಂತ ವೇದಿಕೆಯನ್ನು ಬಳಸಿದ ಕಲಿಕಾದಾರರು ಮತ್ತು ಶಿಕ್ಷಕರ ಸಂಖ್ಯೆ ಅಭೂತಪೂರ್ವವಾಗಿ ಹೆಚ್ಚಿತ್ತೆಂಬುದು ಗಮನಾರ್ಹವಾದುದು.\n\nಶಿಕ್ಷಣ ಮತ್ತು ಕಲಿಕಾ ಪ್ರಕ್ರಿಯೆಗೆ ಸಹಾಯಕವಾಗುವ ಡಿಜಿಟಲ್‌ ಸಾಮಗ್ರಿಗಳಿಗಾಗಿ, ಎನ್.ಸಿ.ಇ.ಆರ್.ಟಿ/ಸಿ.ಬಿ.ಎಸ್.ಇ/ರಾಜ್ಯಪಠ್ಯ ಕ್ರಮಗಳಿಗೆ ಅಗತ್ಯವಾದ ವಿಭಿನ್ನ ಪಠ್ಯ ಸಾಮಗ್ರಿಗಳಿಗಾಗಿ ವಿದ್ಯಾದಾನ್  ಅಡಿಯಲ್ಲಿ ಶಾಲೆಗಳು, ಶಿಕ್ಷಕರು,ಸರ್ಕಾರೇತರ ಸಂಸ್ಥೆಗಳು, ಸಮುದಾಯಿಕ ಸಾಮಾಜಿಕ ಜವಾಬ್ದಾರಿ ಅಡಿ (CSR) ಕಾರ್ಪೋರೇಟ್‌ ಗಳು, ತಮ್ಮದೇ ಕೊಡುಗೆಯನ್ನು ನೀಡಿ ಡಿಜಿಟಲ್‌ ಭಂಡಾರವನ್ನು ಶ್ರೀಮಂತಗೊಳಿಸಿದ್ದಾರೆ.\n\nದೀಕ್ಷಾದಲ್ಲಿ ವಿಶೇಷ ಅಗತ್ಯವುಳ್ಳ ಮಕ್ಕಳ ಶಿಕ್ಷಣ ಹಾಗೂ ಕಲಿಕೆಗೆ ಸಹಾಯಕವಾಗಲು ಬೃಹತ್‌  ಪ್ರಮಾಣದಲ್ಲಿ ಶ್ರವಣ ಪುಸ್ತಕಗಳು (ಆಡಿಯೋ ಪುಸ್ತಕಗಳು) ISL (ಭಾರತೀಯ ಸಂಜ್ಞಾ ಭಾಷೆ) ಯ ವೀಡಿಯೋಗಳು ಮತ್ತು ನಿಘಂಟು ಲಭ್ಯವಿದೆ.\n\nಕೋವಿಡ್-19‌ ರ ಸಾಂಕ್ರಾಮಿಕದ ಸಮಯದಲ್ಲಿ ದೀಕ್ಷಾ ಅಡಿಯಲ್ಲಿ ಪ್ರಾಥಮಿಕ ಶಾಲಾ ಶಿಕ್ಷಕರಿಗೆ NISHTHA 1.0 (ಶಾಲಾ ಮುಖ್ಯಶಿಕ್ಷಕರು ಹಾಗೂ ಶಿಕ್ಷಕರ ಸಮಗ್ರ ಮುನ್ನಡೆಗಾಗಿ ರಾಷ್ಟ್ರೀಯ ಉಪಕ್ರಮ) ಬೃಹತ್‌ ಪ್ರಮಾಣದ ಶಿಕ್ಷಕ ವೃತ್ತಿಪರ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮವನ್ನು ಆನ್‌ ಲೈನ್‌ ನಲ್ಲಿ ಅನುಷ್ಠಾನಗೊಳಿಸಲಾಯಿತು. ಪ್ರೌಢಶಾಲಾ ಶಿಕ್ಷಕರಿಗೆ ಗಾಗಿ NISHTHA 2.0 ಹಾಘೂ ಬುನಾದಿ ಸಾಕ್ಷರತೆ ಮತ್ತು ಸಂಖ್ಯಾಜ್ಞಾನಕ್ಕಾಗಿ NISHTHA 3.0 ಕೋರ್ಸ್‌ ಗಳ ಮೂಲಕ ವೃತ್ತಿಪರ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಜಾರಿಗೊಳಿಸಲಾಯಿತು. ಹಲವು ರಾಜ್ಯಗಳು/ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು ತಮ್ಮದೇ ವಿಶಿಷ್ಟ ರೀತಿಯಲ್ಲಿ ಶಿಕ್ಷಕರ ಸಾಮರ್ಥ್ಯಭಿವೃದ್ದಿಗಾಗಿ ಕಾರ್ಯಕ್ರಮಗಳು ವಿನ್ಯಾಸಗಳಿಸಲಾಯಿತು.\n\nPM e VIDYA DTH TV Channel (one class one channnel-  1 ರಿಂದ 12ನೇ ತರಗತಿವೆರೆಗೆ) ಮೂಲಕ ಶಾಲಾ ಮಕ್ಕಳಿಗಾಗಿ 24 x 7 ಅವಧಿಯ ಪಠ್ಯ ಸಾಮಗ್ರಿಯನ್ನು NCERT ಒದಗಿಸುತ್ತದೆ. ಈ ಚಾನೆಲ್‌ ಗಳು QR Code ಮೂಲಕ ದೀಕ್ಷಾ ದೊಂದಿಗೆ ಸಂಪರ್ಕ ಕಲ್ಪಿಸಲಾಗಿರುವ ಪಠ್ಯ ಸಾಮಗ್ರಿಗಳನ್ನು ಪ್ರಸಾರ ಮಾಡುತ್ತವೆ. ಸುಸಂಗತತೆಯನ್ನು ಕಾಯ್ದುಕೊಳ್ಳಲು, ಪ್ರಸಾರ ಮಾಡಲಾಗುವ ಪಠ್ಯ ಸಾಮಗ್ರಿಗಳನ್ನು ದೀಕ್ಷಾದಲ್ಲಿಯೂ ಲಭ್ಯವಾಗುವಂತೆ ಮಾಡಲಾಗುವುದು. ಇದರಿಂದಾಗಿ ಯಾವುದೇ ಸಮಯದಲ್ಲಿ, ಯಾವುದೇ ಸ್ಥಳದಲ್ಲಿ ಈ ಸಾಮಾಗ್ರಿಗಳ ಲಭ್ಯತೆಗೆ ಅವಕಾಶ ದೊರೆಯುತ್ತದೆ.",
        "aboutdikshaimagetext": "ದೀಕ್ಷಾ; - ವೈವಿ‍ಧ್ಯಮಯ, ನಮ್ಯ ಹಾಗೂ ವಿಕಾಸಶೀಲ",
        "news": "ಸುದ್ದಿಗಳು",
        "resources": "ಸಂಪನ್ಮೂಲಗಳು",
        "events": "ಕಾರ್ಯಕ್ರಮಗಳು",
        "AboutVidyaDaan": "VidyaDaan ಕುರಿತು",
        "AboutVidyaDaanDescription": "ಈ ರಾಷ್ಟ್ರೀಯ ಕಾರ್ಯಕ್ರಮವು ದೇಶಾದ್ಯಂತ ವ್ಯಕ್ತಿಗಳಿಗೆ ಮತ್ತು ಸಂಸ್ಥೆಗಳಿಗೆ ಶಿಕ್ಷಣ ಕ್ಷೇತ್ರದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕಲಿಕಾ ಗುಣಮಟ್ಟವನ್ನು ಖಾತ್ರಿಪಡಿಸುವ ನಿಟ್ಟಿನಲ್ಲಿ ಇ-ಕಲಿಕಾ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಕೊಡುಗೆ ನೀಡಲು ಕರೆ ನೀಡುತ್ತದೆ.",
        "AboutVidyaDaanMoreDescription": "ವ್ಯಕ್ತಿಗಳು, ಶಿಕ್ಷಕರು, ಶಿಕ್ಷಣಶಾಸ್ತ್ರಜ್ಞರು, ವಿಷಯತಜ್ಞರು, ಶಾಲೆಗಳು, ಸರ್ಕಾರಿ ಮತ್ತು ಸರ್ಕಾರೇತರ ಸಂಸ್ಥೆಗಳು ಇನ್ನಿತರರು ನೋಂದಾಯಿಸಿಕೊಂಡು, ನಾಮಿನೇಟ್ ಆದ ನಂತರ ಕೊಡುಗೆ ಸಲ್ಲಿಸಬಹುದು. ಈ ಕೊಡುಗೆಗಳು ವಿವರಣಾತ್ಮಕ ವಿಡಿಯೋಗಳು, ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳು, ಬೋಧನಾ ವಿಡಿಯೋಗಳು, ಸಾಮರ್ಥ್ಯಾಧಾರಿತ ಸಂಪನ್ಮೂಲಗಳು, ಪಾಠ ಯೋಜನೆಗಳು, ಹೀಗೆ ವಿವಿಧ ಬಗೆಯ ಪಠ್ಯಾಂಶದ ರೂಪದಲ್ಲಿರಬಹುದು. ಇವು 1ರಿಂದ 12ರವರೆಗೆ ಯಾವುದೇ ತರಗತಿಗೆ ಮತ್ತು ಯಾವುದೇ ವಿಷಯಕ್ಕೆ ಆಯಾ ರಾಜ್ಯಗಳು ಹಾಗೂ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು ನಿರ್ದಿಷ್ಟಪಡಿಸಿರುವುದನ್ನು ಒಳಗೊಂಡಿರುತ್ತದೆ. ಇಂತಹ ಕೊಡುಗೆಗಳು ಕ್ರಿಯೇಟಿವ್ ಕಾಮನ್ಸ್ ಲೈಸೆನ್ಸ್ ಫ್ರೇಮ್‍ವರ್ಕಿನಡಿಯಲ್ಲಿ ಮುಕ್ತವಾಗಿ ಪರವಾನಗಿ ಪಡೆದಿರಬೇಕು ಮತ್ತು ಆಯಾ ರಾಜ್ಯಗಳು ಹಾಗೂ ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶಗಳು ಪರಿಷ್ಕರಣೆ ಮಾಡಬಹುದು, ಜೊತೆಗೆ ಪಠ್ಯಾಂಶಗಳಿಗೆ ಅನುಮತಿ ನೀಡಿ, ಅತಿಹೆಚ್ಚು ಬಳಕೆಯಾಗಿರುವ ಪಠ್ಯಾಂಶಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ ಕೊಡುಗೆದಾರರನ್ನು ಸೂಕ್ತರೀತಿಯಲ್ಲಿ ಗುರುತಿಸಲಾಗುವುದು.",
        "VidyaDaanIntro": "ಇದು ದೇಶದ ಒಂದು ಕಾರ್ಯಕ್ರಮ, ಗುಣಮಟ್ಟದ ಕಲಿಕೆ ಮುಂದುವರಿಕೆಯನ್ನು ನಿರ್ವಹಿಸಲು ದೇಶಕ್ಕಾಗಿ ಮತ್ತು ದೇಶದಿಂದ ಇರುವ ಕಾರ್ಯಕ್ರಮ",
        "btnParticipate": "ಭಾಗವಹಿಸಿ",
        "ExplanationVideos": "ವಿವರಣಾತ್ಮಕ ವಿಡಿಯೋಗಳು",
        "PracticeQuestions": "ಅಭ್ಯಾಸ ಪ್ರಶ್ನೆಗಳು",
        "TeachingVideos": "ಬೋಧನಾ ವಿಡಿಯೋಗಳು",
        "ExperierntialLearningVideos": "ಅನುಭವಾತ್ಮಕ ಕಲಿಕಾ ವಿಡಿಯೋಗಳು",
        "LessonPlans": "ಪಾಠ ಯೋಜನೆಗಳು",
        "readmore": "ಇನ್ನೂ ಓದಿ",
        "DIKSHAforMobile": "ಮೊಬೈಲಿಗಾಗಿ DIKSHA",
        "DIKSHAforMobileDescription": "DIKSHA ಪ್ಲಾಟ್‍ ಫಾರ್ಮ್ ಶಿಕ್ಷಕರು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಪೋಷಕರಿಗೆ ತೊಡಗಿಸಿಕೊಂಡು, ಮಗ್ನರಾಗುವಂತಹ ಮತ್ತು ಶಾಲಾ ಪಠ್ಯಕ್ರಮಕ್ಕೆ ಅನುಗುಣವಾಗಿರುವ ಕಲಿಕಾ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ. DIKSHA ಆಪ್ ಡೌನ್ಲೋಡ್ ಮಾಡಿಕೊಳ್ಳಿ ಮತ್ತು ನಿಮ್ಮ ಎಲ್ಲ ಪಾಠಗಳಿಗೆ ಸುಲಭ ಲಭ್ಯತೆಯನ್ನು ಪಡೆಯಲು ನಿಮ್ಮ ಪಠ್ಯಪುಸ್ತಕಗಳಲ್ಲಿರುವ ಕ್ಯುಆರ್‍ ಕೋಡ್‍ಗಳನ್ನು ಸ್ಕ್ಯಾನ್ ಮಾಡಿ.",
        "DIKSHAforWeb": "DIKSHA",
        "DIKSHAforWebDescription": "DIKSHA ಕಲಿಕಾ ಪೋರ್ಟಲ್ ಬ್ರೌಸರ್ ಮೂಲಕ DIKSHAದ ಎಲ್ಲ ಇ-ಸಂಪನ್ಮೂಲಗಳಿಗೆ ಆನ್ಲೈನ್ ಲಭ್ಯತೆಯನ್ನು ನೀಡುತ್ತದೆ.",
        "btnVisitDIKSHAportal": "DIKSHA ಪೋರ್ಟಲ್ ಗೆ ಭೇಟಿನೀಡಿ",
        "DIKSHAOffline": "ಡೆಸ್ಕ್‍ ಟಾಪ್ ಆಪ್",
        "DIKSHAOfflineDescription": "DIKSHA ಡೆಸ್ಕ್ ಟಾಪ್ ನಿಮಗೆ ಆಫ್ಲೈನ್ ಇದ್ದಾಗ ನೋಡುವುದಕ್ಕೆಂದು ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ಕಂಪ್ಯೂಟರಿಗೆ ಡೌನ್ಲೋಡ್ ಆಗಿರುವ ಡಿಜಿಟಲ್ ಪಠ್ಯಪುಸ್ತಕಗಳು, ಕ್ವೆಶ್ಚನ್ ಬ್ಯಾಂಕ್ಸ್ ಇತ್ಯಾದಿಗಳಿಗೆ ಲಭ್ಯತೆಯನ್ನು ನೀಡುತ್ತದೆ.",
        "comingsoon": "ಬೇಗನೆ ಬರಲಿದೆ!’",
        "DataDashboard": "ಡೇಟಾ ಡ್ಯಾಶ್‍ ಬೋರ್ಡ್",
        "viewUsagepattern": "ದೇಶದ ಮತ್ತು ಎಲ್ಲ ರಾಜ್ಯಗಳ ಬಳಕೆಯ ವಿನ್ಯಾಸವನ್ನು ನೋಡಿ",
        "last7Weeks": "ಒಟ್ಟು ಕಲಿಕಾ ಸೆಶನ್‍ ಗಳ 7 ವಾರಗಳ ಡೇಟಾ",
        "lastupdated": "ಕೊನೆಯ ಬಾರಿ ಅಪ್ಡೇಟ್ ಮಾಡಿದ್ದು",
        "clickstateut": "ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗೆ ಒಂದು ರಾಜ್ಯ/ಕೇಂದ್ರಾಡಳಿತ ಪ್ರದೇಶವನ್ನು ಕ್ಲಿಕ್ ಮಾಡಿ",
        "representationonly": "ನಕ್ಷೆಗಳು ಪ್ರತಿನಿಧಿತ್ವಕ್ಕಾಗಿ ಮಾತ್ರ",
        "usageMetrics": "ಬಳಕೆಯ ಮೆಟ್ರಿಕ್ಸ್",
        "usageMetricsDescription": "22+ ರಾಜ್ಯ ಮಂಡಳಿಗಳ ಅಕಾಡೆಮಿಕ್ ಮತ್ತು ಅಕಾಡೆಮಿಕ್ ಅಲ್ಲದ ಪಠ್ಯಾಂಶಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        "btnViewDashboard": "ಡ್ಯಾಶ್ ಬೋರ್ಡ್ ನೋಡಿ",
        "open": "ತೆರೆಯಿರಿ",
        "download": "ಡೌನ್ಲೋಡ್",
        "DIKSHAUsageTillDate": "DIKSHA ಪ್ರಸ್ತುತ ಬಳಕೆ",
        "LearningLessons": "ಕಲಿಕಾ ಸೆಶನ್‍ ಗಳು",
        "minutes": "ನಿಮಿಷಗಳು",
        "TermsofUse": "ಕರಾರುಗಳು ಮತ್ತು ನೀತಿಗಳು",
        "needHelp": "ಸಹಾಯ ಬೇಕು",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "ಮುಖ್ಯ ಪಠ್ಯಾಂಶಕ್ಕೆ ಹೋಗಿ",
        "sitemap": "ಸೈಟ್ ಮ್ಯಾಪ್",
        "ScreenReaderAccess": "ಅಸೆಸಿಬಿಲಿಟಿ ಕಾರ್ನರ್",
        "DIKSHAUpdates": "DIKSHA ಅಪ್ಡೇಟ್‍ಗಳು",
        "lastupdatedonresult": "ವರದಿಯು ವಾರಕ್ಕೊಮ್ಮೆ ಅಪ್ಡೇಟ್ ಆಗುವುದು - ಪ್ರತಿ ಮಂಗಳವಾರ, ಮಧ್ಯಾಹ್ನ",
        "lastupdatedonresultdaily": "ವರದಿಯು ಪ್ರತಿದಿನ ಅಪ್ಡೇಟ್ ಆಗುವುದು",
        "totalDIKSHAusage": "ಒಟ್ಟು DIKSHA ಬಳಕೆ ನಿಮಿಷಗಳಲ್ಲಿ",
        "numberLearningActivities": "ವಿದ್ಯಾರ್ಥಿಗಳು DIKSHA ಮೂಲಸೌಕರ್ಯವನ್ನು ಬಳಸಿಕೊಂಡು ಎಷ್ಟು ಸಲ ಕಲಿಕಾ ಚಟುವಟಿಕೆಗಳನ್ನು ತೆಗೆದುಕೊಂಡಿದ್ದಾರೆ",
        "noevents": "ಮುಂಬರಲಿರುವ ಯಾವುದೇ ಇವೆಂಟ್ ಗಳು ಲಭ್ಯವಿಲ್ಲ",
        "updateticker1": "ಶಿಕ್ಷಣದ ಗುಣಮಟ್ಟ ಮುಂದುವರಿಕೆಯನ್ನು ಖಾತ್ರಿಪಡಿಸಲು ದೇಶಕ್ಕಾಗಿ ಮತ್ತು ದೇಶದಿಂದ, ದೇಶದ ಒಂದು ಕಾರ್ಯಕ್ರಮ",
        "updateticker2": "ಇದು ರಾಷ್ಟ್ರೀಯ ಶೈಕ್ಷಣಿಕ ಸಂಶೋಧನೆ ಮತ್ತು ತರಬೇತಿ ಪರಿಷತ್ತಿನ (ಶಿಕ್ಷಣ ಸಚಿವಾಲಯ, ಭಾರತ ಸರ್ಕಾರ) ಒಂದು ಉಪಕ್ರಮವಾಗಿದೆ",
        "contributionMetrics": "ಕೊಡುಗೆ ಮೆಟ್ರಿಕ್ಸ್",
        "contributionDescription": "ದೇಶದೆಲ್ಲೆಡಯಿಂದ ಪಠ್ಯಾಂಶ ಕೊಡುಗೆ ಡೇಟಾ",
        "dikshaContentContribution": "DIKSHA ಪಠ್ಯಾಂಶ ಕೊಡುಗೆ",
        "contributors": "ಕೊಡುಗೆ ನೀಡಿದವರು",
        "contributions": "ಕೊಡುಗೆಗಳು",
        "courseMetrics": "ಕೋರ್ಸ್ ಮೆಟ್ರಿಕ್ಸ್",
        "courseMetricsDescription": "ದೇಶದೆಲ್ಲೆಡೆಯಿಂದ ಕೋರ್ಸ್ ಡೇಟಾ",
        "courseUsage": "DIKSHA ಕೋರ್ಸ್ ಗಳು ಮತ್ತು ಬಳಕೆ",
        "courses": "ಕೋರ್ಸ್ ಗಳು",
        "Enrolments": "ದಾಖಲಾತಿಗಳು",
        "completions": "ಕೋರ್ಸ್ ಮುಕ್ತಾಯಗಳು",
        "certificatesIssued": "ನೀಡಲಾದ ಪ್ರಮಾಣಪತ್ರಗಳು",
        "Datasets": "ಡೇಟಾಸೆಟ್ ಗಳು",
        "contributionsDiksha": "DIKSHA ದಲ್ಲಿ ಮಾಡಿದ ಪಠ್ಯಾಂಶ ಕೊಡುಗೆಗಳು",
        "contributorsDiksha": "ಕೊಡುಗೆದಾರರ ಸಂಖ್ಯೆ",
        "EnrolmentsDiksha": "DIKSHA ದಲ್ಲಿ ಒಟ್ಟು ಕೋರ್ಸ್ ದಾಖಲಾತಿಗಳು",
        "CompletionsDiksha": "DIKSHA ದಲ್ಲಿ ಒಟ್ಟು ಕೋರ್ಸ್ ಮುಕ್ತಾಯಗಳು",
        "coursesDiksha": "DIKSHA",
        "DikshaDatasets": "DIKSHA ಸಾರ್ವಜನಿಕ ಡೇಟಾಸೆಟ್ಸ್",
        "DatasetsDescription": "DIKSHA ಒಂದು ಪ್ಲಾಟ್‍ ಫಾರ್ಮ್ ಆಗಿದ್ದು, ಕಲಿಕೆಗೆ ಡಿಜಿಟಲ್ ಮೂಲಸೌಕರ್ಯವನ್ನು ಸಮರ್ಥಗೊಳಿಸಿದೆ. ಇದು ದೇಶದೆಲ್ಲೆಡೆ ಹಲವಾರು ಬಗೆಯ ಕಲಿಕೆ ಮತ್ತು ಬೋಧನೆಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ. ದೀಕ್ಷಾ ಬಳಕೆ ಡೇಟಾವು ಸಾರ್ವಜನಿಕರಿಗಾಗಿ ಇದೆ, ಸಾರ್ವಜನಿಕ ಡ್ಯಾಶ್ ಬೋರ್ಡ್ ಮತ್ತು ಡೇಟಾ ಸೆಟ್‍ಗಳ ಮೂಲಕ ಎಲ್ಲರಿಗೂ ಲಭ್ಯವಾಗುವುದು. ಈ ಪುಟದಲ್ಲಿ ಪ್ರಸ್ತುತ ಲಭ್ಯವಿರುವ ಎಲ್ಲ DIKSHA ಡೇಟಾಸೆಟ್ ಗಳ ಕೆಟಲಾಗ್ ಇದೆ - ಪ್ರತಿ ಡೇಟಾಸೆಟ್ ನ ಹೆಚ್ಚಿನ ವಿವರಗಳನ್ನು ಡೇಟಾ ಸೆಟ್ಟಿನ ವಿವರಗಳು ಪುಟದಿಂದ ಪಡೆದುಕೊಳ್ಳಬಹುದು.",
        "csv": "ಸಿ.ಎಸ್‍.ವಿ.",
        "json": "ಜೆ.ಎಸ್‍.ಒ.ಎನ್.",
        "usefulLinks": "ಉಪಯುಕ್ತ ಕೊಂಡಿಗಳು",
        "dictionaryheading": "ದೇಶದೆಲ್ಲೆಡೆಯ ಪಠ್ಯಾಂಶ ಕೊಡುಗೆ ಡೇಟಾ",
        "datadictionary": "ಡೇಟಾ ಶಬ್ದಕೋಶ",
        "Details": "ವಿವರಗಳು",
        "usagemetrics": "ಬಳಕೆಯ ಮೆಟ್ರಿಕ್ಸ್",
        "contributionmetrics": "ಕೊಡುಗೆಯ ಮೆಟ್ರಿಕ್ಸ್",
        "coursemetrics": "ಕೋರ್ಸ್ ಮೆಟ್ರಿಕ್ಸ್",
        "board-ncert-description": "ಎನ್.ಸಿ.ಇ.ಆರ್.ಟಿ.ಯು (ರಾಷ್ಟ್ರೀಯ ಶೈಕ್ಷಣಿಕ ಸಂಶೋಧನಾ ಮತ್ತು ತರಬೇತಿ ಪರಿಷತ್ತು) ಪ್ರಕಟಿಸಿದ ಪಠ್ಯಾಂಶಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        "board-cbse-description": "ಸಿ.ಬಿ.ಎಸ್.ಇ.ಯು (ಕೇಂದ್ರೀಯ ಪ್ರೌಢ ಶಿಕ್ಷಣ ಮಂಡಳಿ) ಪ್ರಕಟಿಸಿದ ಪಠ್ಯಾಂಶಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        "board-nios-description": "ಎನ್‍.ಐ.ಒ.ಎಸ್. (ರಾಷ್ಟ್ರೀಯ ಮುಕ್ತ ಶಾಲಾ ಶಿಕ್ಷಣ ಸಂಸ್ಥೆ) ಪ್ರಕಟಿಸಿದ ಪಠ್ಯಾಂಶಗಳನ್ನು ಅನ್ವೇಷಿಸಿ",
        "board-btntitle": "ಅನ್ವೇಷಿಸಿ"
    },
    "mr": {
        "language": "मराठी",
        "diksha": "DIKSHA",
        "govofIndia": "भारत सरकार",
        "dikshamoto": "तंत्रज्ञान आदान प्रदानाची ई- गंगोत्री",
        "dikshaDescription": "शैक्षणिक संशोधन आणि प्रशिक्षण राष्ट्रीय परिषदेचा एक उपक्रम (शिक्षण मंत्रालय, भारत सरकार)",
        "btnExploreDiksha": "DIKSHA चे अन्वेषण करा",
        "explore": "अन्वेषण करा",
        "ExploreDikshaContent": "DIKSHA च्या जगातील खुल्या डिजिटल सामग्रीचे अन्वेषण करा",
        "stateboard": "राज्य / केंद्रशासित प्रदेश",
        "stateboardDescription": "२२+ राज्य व केंद्रशासित प्रदेशांमधून प्रकाशित झालेल्या सामग्रीचे अन्वेषण करा",
        "about": "बद्दल",
        "home": "मुख्यपृष्ठ",
        "dashboard": "डॅशबोर्ड",
        "getapp": "ऍप मिळवा",
        "contribute": "योगदान द्या",
        "aboutdiksha": "DIKSHA बद्दल",
        "aboutdikshacontent": "DIKSHA (डिजिटल इन्फ्रास्ट्रक्चर फॉर नॉलेज शेअरिंग) हा शालेय शिक्षणासाठी एक मंच आहे, जो शिक्षण मंत्रालयाच्या शैक्षणिक संशोधन आणि प्रशिक्षण राष्ट्रीय परिषदेने राबवलेला एक उपक्रम आहे. मे २०१७ मध्ये माजी मानव संसाधन विकास मंत्री, माननीय श्री प्रकाश जावडेकर यांनी उघड केलेल्या धोरण आणि दृष्टिकोन पत्रकात उल्लेखिलेल्या, खुले वास्तुशिल्प, खुली प्रवेशपद्धती, खुली परवाना विविधता, निवड व स्वायत्तता यांच्या मूळ तत्त्वांवर आधारित DIKSHA मंचाचा विकास केला गेला. खुद्द DIKSHA मंच ५ सप्टेंबर २०१७ रोजी भारताचे माननीय उपराष्ट्रपती यांच्या हस्ते उघड केला गेला. तेव्हांपासून हा मंच ३५ राज्य व केंद्रशासित प्रदेश, CBSE व NCERT, तसेच लाखो विद्यार्थी व शिक्षकांनी आपलासा केला आहे.",
        "aboutdikshacontent2": "DIKSHA मुक्त स्रोत तंत्रज्ञानावर आधारित असून ते भारतात आणि भारतासाठी बनवले गेले आहे, ज्यामध्ये इंटरनेट स्केल तंत्रज्ञान समाविष्ट आहे, आणि ते अध्यापन आणि शिक्षणासाठी अनेक उपयोग-प्रकरणे व निराकरण सक्षम करते. DIKSHA सनबर्ड नावाच्या एका MIT परवानाधारक मुक्त स्रोत तंत्रज्ञानाचा वापर करून तयार केले गेले आहे, जे शिक्षणासाठी असलेले डिजिटल इन्फ्रास्ट्रक्चर आहे, आणि जे अनेक भाषा व सोल्यूशन्ससाठी डिझाइन केले गेले आहे, आणि प्लॅटफॉर्म आणि सोल्यूशन्सच्या विकासासाठी १०० पेक्षा जास्त मायक्रो सर्व्हिसेस तयार करते. \n\n आधी सांगितल्याप्रमाणे DIKSHA हे सर्व राज्ये आणि केंद्रशासित प्रदेशांच्या वापरासाठी उपलब्ध आहे. प्रत्येक राज्य / केंद्रशासित प्रदेश DIKSHA व्यासपीठाचा स्वतःच्या मार्गाने लाभ घेतो, कारण त्यामध्ये शिक्षक आणि विद्यार्थ्यांसाठी कार्यक्रम डिझाइन करण्यासाठी आणि चालवण्यासाठी व्यासपीठाच्या विविध क्षमता आणि उपायांचा वापर करण्याचे स्वातंत्र्य व निवड आहे. DIKSHA धोरणे आणि साधने देशातील शैक्षणिक उद्दिष्टे सध्या करण्यासाठी शैक्षणिक पर्यावरण सदस्य (शिक्षणतज्ज्ञ, तज्ञ, संस्था - सरकारी, स्वायत्त संस्था, बिनसरकारी आणि खाजगी संस्था) यांना भाग घेण्यास, हातभार लावण्यास, आणि लाभ घेण्यासाठी एक सामायिक व्यासपीठ उपलब्ध करणे शक्य करतात. \n\n DIKSHA वर देशभरातील सर्व विद्यार्थी व शक्षक प्रवेश करू शकतात. हे व्यासपीठ सध्या भारतभरातील १८+ भाषा आणि NCERT, CBSE आणि SCERT च्या विविध अभ्यासक्रमांचे समर्थन करते. हे व्यासपीठ शालेय शिक्षण, मूलभूत शिक्षण कार्यक्रम आणि विद्यार्थ्यांच्या व शिक्षकांच्या दुर्लक्षित व अपंग समुदायांना समावेशक शैक्षणिक आधार देण्यासाठी विकसित केले जात आहे. \n\n कोविड-१९मुळे विस्कळीत झालेल्या शिक्षणाच्या संदर्भात, DIKSHA व्यासपीठ सर्व राज्ये/केंद्रशासित प्रदेशांमधून नाविन्यपूर्ण राज्य कार्यक्रमांद्वारे घरीच शिक्षण घेणे शक्य करते, जेणेकरून भारतभरातील शिक्षक व विद्यार्थी स्वतःच्या हितासाठीं तंत्रज्ञानाच्या साहाय्याने मोठी झेप घेऊ शकतील.",
        "aboutdikshanewcontent": "¨दिक्षा- DIKSHA  (डिजिटल इन्फ्रास्ट्रक्चर फॉर नॉलेज शेअरिंग )° हे शालेय शिक्षणासाठी एक राष्ट्रीय व्यासपीठ असून; राष्ट्रीय शैक्षणिक संशोधन आणि प्रशिक्षण परिषदेचा (एनसीईआरटी), शिक्षण मंत्रालय (एमओई), भारत सरकारच्या अधिपत्याखाली एक उपक्रम आहे. भारताचे उपराष्ट्रपती माननीय श्री एम. व्यंकय्या नायडू यांच्या शुभहस्ते 2017 मध्ये दीक्षा प्रणालीचे उद्घाटन झाले. दीक्षा प्रणालीला केंद्रीय माध्यमिक शिक्षण मंडळासह (CBSE) जवळजवळ देशातील सर्व राज्ये, केंद्रशासित प्रदेश, केंद्रीय स्वायत्त संस्था/बोर्डांनी स्वीकारले आहे. माहे सप्टेंबर 2017 मध्ये तत्कालीन मानव संसाधन विकास मंत्री श्री प्रकाश जावडेकर यांनी दीक्षा या राष्ट्रीय शिक्षक व्यासपीठासाठी प्रकाशित कार्ययोजना आणि दृष्टिकोन पेपरच्या आधारे विकसित केले गेले आहे. दीक्षा प्रणालीमध्ये देशभरातील विविध विद्यार्थी आणि शिक्षक सहज नोंदणी/प्रवेश करू शकतात तसेच सध्या दीक्षा प्रणाली देशातील 36 भारतीय भाषातून शैक्षणिक सहाय्य पुरविते आहे.  दीक्षा प्रणालीवर उपलब्ध विविध सुविधा, माहिती आणि प्रभावी उपायांचा वापर करून शिक्षक, अध्ययानार्थी आणि प्रशासक यांच्यासाठी दर्जेदार व गुणवत्तापूर्ण सक्षमीकरणाचे कार्यक्रम आखण्यासाठी आणि चालवण्याचे स्वातंत्र्य आणि निवड असल्याने देशातील प्रत्येक राज्य/केंद्रशासित प्रदेश दीक्षा प्रणालीचा स्वतःच्या शैक्षणिक गरजांनुसार लाभ घेतात. दीक्षा प्रणालीवरील नियम, ध्येय-धोरणे, अटी आणि संसाधने शैक्षणिक परिसंस्थेला/वर्तुळाला (शिक्षणतज्ज्ञ, संसाधन तज्ज्ञ, संघटना, संस्था - शासकीय, स्वायत्त संस्था, अशासकीय आणि खाजगी संस्था) सहभागी होणे, योगदान देणे आणि देशासाठी मोठ्या प्रमाणावर शैक्षणिक उद्दिष्टे साध्य करण्यासाठी एक समान व्यासपीठ उपलब्धता सुलभ करतात. NCERT पाठ्यपुस्तके ही CC BY NC ND या अनुज्ञप्ती खाली असतील आणि सर्व संसाधने ही CC BY NC SA या अनुज्ञप्ती खाली असतील. भारत सरकारच्या PM eVidya उपक्रमांतर्गत, ज्याला ¨आत्म निर्भर भारत° योजनेचा भाग म्हणून घोषित करण्यात आले होते, दीक्षा प्रणालीला ¨एक देश, एक डिजिटल प्रणाली° म्हणून घोषित करण्यात आले आहे.",
        "aboutdikshanewcontent2": "दिक्षा हि एक मुक्त स्त्रोत तंत्रज्ञानावर  आधारलेली  प्रणाली असून ती भारतात आणि भारतासाठी बनविलेली आहे.यामध्ये इंटरनेट स्केल तंत्रज्ञानाचा वापर करून अध्ययन-अध्यापन क्षेत्रात महत्तम वापर करण्याबरोबरच त्यामधील समस्या आणि त्यावरील उपाय शोधण्यासाठी मदत केली जाते. दिक्षाची निर्मिती MIT प्रमाणित Sunbird नावाच्या मुक्त स्त्रोत प्रणाली द्वारे करण्यात आली आहे , जी की डिजिटल पायाभूत सुविधा असून शिक्षणासंबंधी  विविध उपाय प्रदान  करण्याबरोबरच प्रणालीच्या आणि विविध उपाययोजनांच्या विकासासाठी १०० पेक्षा जास्त सूक्ष्म सेवा प्रदान करते.\n\nभारताच्या माननीय पंतप्रधानांनी 29 जुलै 2021 रोजी NDEAR (नॅशनल डिजिटल एज्युकेशन आर्किटेक्चर) संपूर्ण देशात लागू केले आहे जे राज्य/केंद्रशासित प्रदेशांद्वारे संघराज्य आणि अन्य घटकांना वापरण्यायोग्य सुविधेच्या विकासासाठी विविध ऑनलाईन प्रणालींचे गट प्रदान करते. DIKSHA च्या मुख्य ऑनलाईन प्रणालींचे गटामध्ये NDEAR च्या बहुतेक ऑनलाईन प्रणालींचा समावेश आहे, ज्याने NDEAR चे काही यशोगाथा वापरण्यात आलेल्या आहेत. जसे की: कृतीकेंद्रित पाठ्यपुस्तके, ऑनलाइन वर्ग-अभ्यासक्रम, सामग्री प्रमाणिकीकरण, सामग्री संदर्भीकरण, कृतियुक्त प्रश्नमंजुषा, प्रश्न पेढ्या, चॅटबॉट, विश्लेषण आणि डॅशबोर्ड. कोविड-१९ महामारीच्या काळात, प्रस्तुत प्रणालीवर देशभरातील विद्यार्थी आणि शिक्षकांच्या नोंदणीत व वापरात अभूतपूर्व वाढ झाली आहे.\n\nअध्यापन आणि शिकण्याच्या प्रक्रियेत मदत करणाऱ्या डिजिटल सामग्री निर्मितीसाठी, NCERT/CBSE/राज्यांच्या विविध सामग्री आवश्यकतांची तुलना करता शाळा/शिक्षक, सामग्री भागीदार, अशासकीय स्वायत्त संस्था, उद्योजकांचे सामाजिक दायित्व ¨विद्यादान° उपक्रमांतर्गत अंतर्गत विविध उद्योजाकांद्वारे विविध संसाधनांच्या समृद्ध शैक्षणिक भांडार उपलब्धतेत योगदान दिले गेले.\n\nविशेष गरजा असणाऱ्या मुलांसाठी(CWSN)  अध्ययन-अध्यापनात सहाय्य करण्यासाठी, दीक्षा प्रणालीवर मोठ्या प्रमाणात ऑडिओ बुक्स, ISL (भारतीय सांकेतिक भाषा) व्हिडिओ आणि शब्दकोश उपलब्ध करून देण्यात आले आहेत.\n\nमहामारीच्या काळात, दीक्षा प्रणालीमार्फत प्राथमिक स्तरावरील शिक्षक व मुख्याध्यापकांसाठी निष्ठा 1.0 ((NISHTHA- शिक्षक व शाळा प्रमुखांच्या समग्र प्रगतीसाठी राष्ट्रीय प्रशिक्षण कार्यक्रम) शिक्षकांचा व्यावसायिक विकास कार्यक्रम मोठ्या प्रमाणात ऑनलाइन स्वरुपात सुरू करण्यात आला. निष्ठा 2.0 आणि निष्ठा 3.0 प्रशिक्षण कार्यक्रम अनुक्रमे माध्यमिक आणि मूलभूत साक्षरता आणि संख्याज्ञानावर लक्ष केंद्रित करतात. निष्ठा कार्यक्रमा व्यतिरिक्त, अनेक राज्ये/केंद्रशासित प्रदेशांनी त्यांचे स्वतःचे शिक्षक क्षमतावृद्धी कार्यक्रम तयार केले आहेत.\n\nराष्ट्रीय शैक्षणिक संशोधन व प्रशिक्षण परिषद (NCERT) PM eVIDYA डी.टी.एच. टी. व्ही. वाहिनी DTH-TV चॅनेल (एक वर्ग, एक चॅनेल इयत्ता पहिली ते बारावी) अंतर्गत 24x7 आधारावर विद्यार्थ्यांसाठी शैक्षणिक कार्यक्रम देखील प्रसारित वितरित करते. प्रस्तुत वाहिनी QR कोडद्वारे दीक्षाशी लिंक असलेल्या वर्गनिहाय शैक्षणिक साहित्याचे प्रसारण करतात. अध्ययनात सुसंगतता राखण्यासाठी, प्रसारित झालेले कार्यक्रम दीक्षा प्रणालीवर देखील उपलब्ध करून दिले जातात, जिथे ही सामग्री कधीही, कुठेही उपलब्ध करता येतात.",
        "aboutdikshaimagetext": "दीक्षा प्रणालीवर उपाय - वैविध्यपूर्ण, लवचिक आणि विकसित",
        "news": "समाचार",
        "resources": "साधने",
        "events": "उपक्रम",
        "AboutVidyaDaan": "VidyaDaan बद्दल",
        "AboutVidyaDaanDescription": "हा राष्ट्रीय कार्यक्रम म्हणजे देशाला, विशेषतः शिक्षण क्षेत्राला ई-शिक्षण संसाधने प्रदान करू शकणाऱ्या व्यक्ती व संघटनांना एक आवाहन आहे, जेणेकरून उत्तम दर्जाचे शिक्षण भारतभर कायम चालू राहील.",
        "AboutVidyaDaanMoreDescription": "व्यक्ती, शिक्षक, शिक्षणतज्ज्ञ, विषयतज्ज्ञ, शाळा, सरकारी वा बिनसरकारी संस्था इ.स्वतःचे नामांकन व नोंदणी करून योगदान देऊ शकतात. हे योगदान विविध प्रकारचे असू शकते, जसे स्पष्टीकरण व्हिडिओ, अध्यापन व्हिडिओ, सराव प्रश्न, क्षमता चाचण्या, अभ्यासक्रम योजना इ. हे सर्व राज्य/केंद्रशासित प्रदेशांनी निर्दिष्ट केलेल्या आपापल्या प्रकल्पानुसार, इयत्ता १ली ते १२वी पर्यंतच्या कोणत्याही वर्गासाठी असू शकते. अशा योगदानाचा क्रिएटिव्ह कॉमन्स परवाना चौकटीअंतर्गत मुक्त परवाना असणे आवश्यक आहे, आणि राज्य/केंद्रशासित प्रदेश व CBSE ते क्युरेट करू शकतात. ज्यांची सामग्री स्वीकारली जाऊन त्याला उच्च वापर सापडला आहे, अशा योगदानकर्त्यांना योग्य प्रकारे ओळखले जाईल.",
        "VidyaDaanIntro": "दर्जेदार शिक्षणाची निरंतरता व्यवस्थापित करण्यासाठी देशाचा, देशासाठी असलेला, आणि देशाने घडवलेला एक कार्यक्रम",
        "btnParticipate": "सहभाग घ्या",
        "VidyaDaanTypes": "तुम्ही योगदान देऊ शकाल असे ई-शिक्षण स्त्रोतांचे प्रकार",
        "ExplanationVideos": "स्पष्टीकरण व्हिडिओ",
        "PracticeQuestions": "सराव प्रश्न",
        "TeachingVideos": "अध्यापन व्हिडिओ",
        "ExperierntialLearningVideos": "अनुभवात्मक शिक्षण व्हिडिओ",
        "LessonPlans": "अभ्यासक्रम योजना",
        "readmore": "आणखी वाचा",
        "DIKSHAforMobile": "मोबाइल साठी DIKSHA",
        "DIKSHAforMobileDescription": "DIKSHA मंच शिक्षक, विद्यार्थी आणि पालकांना विहित शालेय अभ्यासक्रमाशी संबंधित आकर्षक शिक्षण सामग्री देतो. तुमच्या सर्व धड्यांमध्ये सुलभ प्रवेश मिळवण्यासाठी DIKSHA ऍप डाउनलोड करा आणि आपल्या पाठ्यपुस्तकांमधील QR कोड स्कॅन करा. (अँड्रॉइड ५.१ आणि वरील)",
        "DIKSHAforWeb": "वेब साठी DIKSHA",
        "DIKSHAforWebDescription": "DIKSHA शिक्षण पोर्टल ब्राऊझरद्वारे DIKSHA च्या सर्व ई-स्रोतांसाठी ऑनलाइन प्रवेश प्रदान करते.",
        "btnVisitDIKSHAportal": "DIKSHA पोर्टलला भेट द्या",
        "DIKSHAOffline": "डेस्कटॉप ऍप",
        "DIKSHAOfflineDescription": "DIKSHA डेस्कटॉप आपल्या वैयक्तिक कॉम्प्युटरवर डाउनलोड केलेली डिजिटल पाठ्यपुस्तके, प्रश्न बँक, आणि बरेच काही ऑफलाइन प्रविष्ट करण्याची सुविधा प्रदान करते. {विंडोज आणि उबंटू OS साठी उपलब्ध}",
        "comingsoon": "लवकरच येत आहे!",
        "DataDashboard": "डेटा डॅशबोर्ड",
        "viewUsagepattern": "समस्त देशातील व सर्व राष्ट्रांमधील वापर पद्धती पहा",
        "last7Weeks": "एकूण शिक्षण मित्रांसाठी मागील ७ आठवड्यांचा डेटा",
        "lastupdated": "शेवटचे अपडेट केले",
        "clickstateut": "अधिक तपशिलांची राज्य/केंद्रशासित प्रदेशावर क्लिक करा",
        "representationonly": "नकाशा केवळ प्रातिनिधिक आहे",
        "usageMetrics": "वापर मेट्रिक्स",
        "usageMetricsDescription": "२२+ राज्य बोर्डांच्या शैक्षणिक व विना शैक्षणिक सामग्रीचे अन्वेषण करा",
        "btnViewDashboard": "डॅशबोर्ड पहा",
        "open": "उघडा",
        "download": "डाउनलोड करा",
        "DIKSHAUsageTillDate": "DIKSHA चा सद्य वापर",
        "LearningLessons": "अभ्यास सत्रे",
        "minutes": "मिनिट्स",
        "TermsofUse": "अटी व धोरणे",
        "needHelp":"मदत पाहिजे",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "थेट मुख्य सामग्रीवर जा",
        "sitemap": "साइटचा नकाशा",
        "ScreenReaderAccess": "सुलभता कोपरा",
        "DIKSHAUpdates": "DIKSHA अपडेट्स",
        "lastupdatedonresult": "साप्ताहिक रिपोर्ट अपडेट - दार सोमवारी, दुपारपर्यंत",
        "lastupdatedonresultdaily": "रिपोर्ट दररोज अपडेट होतो",
        "totalDIKSHAusage": "मिनिटांमध्ये एकूण DIKHA वापर अवधी",
        "numberLearningActivities": "किती वेळा विद्यार्थ्यांनी DIKSHA च्या पायाभूत सुविधा वापरून शैक्षणिक उपक्रम हाती घेतले",
        "noevents": "कोणतेही आगामी कार्यक्रम उपलब्ध नाहीत",
        "updateticker1": "दर्जेदार शिक्षणाची निरंतरता व्यवस्थापित करण्यासाठी देशाचा, देशासाठी असलेला, आणि देशाने घडवलेला एक कार्यक्रम",
        "updateticker2": "शैक्षणिक संशोधन आणि प्रशिक्षण राष्ट्रीय परिषदेने राबवलेला एक उपक्रम (शिक्षण मंत्रालय, भारत सरकार)",
        "contributionMetrics": "योगदान मेट्रिक्स",
        "contributionDescription": "देशभरातील सामग्री योगदानाचा डेटा",
        "dikshaContentContribution": "DIKSHA सामग्री योगदान",
        "contributors": "योगदानकर्ते",
        "contributions": "योगदान",
        "courseMetrics": "कोर्स मेट्रिक्स",
        "courseMetricsDescription": "देशभरातील कोर्स डेटा",
        "courseUsage": "DIKSHA कोर्सेस आणि वापर",
        "courses": "कोर्सेस",
        "Enrolments": "नोंदण्या",
        "completions": "कोर्स पूर्तता",
        "certificatesIssued": "जारी केलेली प्रमाणपत्रे",
        "Datasets": "डेटासेट",
        "contributionsDiksha": "DIKSHA ला योगदान केलेली सामग्री",
        "contributorsDiksha": "योगदानकर्त्यांची संख्या",
        "EnrolmentsDiksha": "DIKSHA वरच्या एकूण कोर्स नोंदण्या",
        "CompletionsDiksha": "DIKSHA वरच्या एकूण कोर्स पूर्तता",
        "coursesDiksha": "DIKSHA वरच्या कोर्सेसची संख्या",
        "DikshaDatasets": "DIKSHA सार्वजनिक डाटासेंट",
        "DatasetsDescription": "DIKSHA हे एक व्यासपीठ आहे जे शिक्षणासाठी डिजिटल पायाभूत सुविधा सक्षम करते, आणि देशभरातील विविध प्रकारच्या शिक्षण व अध्यापन गरजा भागवते. अशाप्रकारे व्युत्पन्न केलेला DIKSHA वापर डेटा सार्वजनिक असणे, आणि सार्वजनिक डॅशबोर्ड आणि डाटासेंटद्वारे सर्वांना उपलब्ध असणेच अपेक्षित आहे. या पृष्ठावर आत्तापर्यंत उपलब्ध असलेल्या सर्व DIKSHA डाटासेंटचा एक कॅटलॉग आहे - डाटासेंटच्या तपशील पृष्ठावरून प्रत्येक डाटासेंटविषयी अधिक माहिती मिळू शकते.",
        "csv": "CSV",
        "json": "JSON",
        "usefulLinks": "उपयोगी लिंक्स",
        "dictionaryheading": "देशभरातील सामग्री योगदानाचा डेटा",
        "datadictionary": "डेटा शब्दकोश",
        "Details": "तपशील",
        "usagemetrics": "वापर मेट्रिक्स",
        "contributionmetrics": "योगदान मेट्रिक्स",
        "coursemetrics": "कोर्स मेट्रिक्स",
        "board-ncert-description": "एन सी ई आर टी (शैक्षणिक संशोधन आणि प्रशिक्षण राष्ट्रीय परिषद) तर्फे प्रकाशित झालेल्या सामग्रीचे अन्वेषण करा",
        "board-cbse-description": "सी बी एस ई (केंद्रीय माध्यमिक शिक्षण मंडळ) तर्फे प्रकाशित झालेल्या सामग्रीचे अन्वेषण करा",
        "board-nios-description": "एन आय ओ एस (राष्ट्रीय मुक्त विद्यालयी शिक्षा संस्थात) तर्फे प्रकाशित झालेल्या सामग्रीचे अन्वेषण करा",
        "board-btntitle": "अन्वेषण करा"
    },
    "ml": {
        "language": "മലയാളം",
        "diksha": "DIKSHA",
        "govofIndia": "ഭാരത സർക്കാർ",
        "dikshamoto": "സ്കൂൾ വിദ്യാഭ്യാസത്തിനായുള്ള ഡിജിറ്റൽ അടിസ്ഥാന സൗകര്യങ്ങൾ",
        "dikshaDescription": "ദേശീയ വിദ്യാഭ്യാസ ഗവേഷണ പരിശീലന സമിതിയുടെ ഒരു സംരംഭം (വിദ്യാഭ്യാസ മന്ത്രാലയം, ഇന്ത്യാ ഗവൺമെന്റ്)",
        "btnExploreDiksha": "DIKSHA എക്‌സ്‌പ്ലോർ ചെയ്യുക",
        "explore": "എക്‌സ്‌പ്ലോർ ചെയ്യുക",
        "ExploreDikshaContent": "DIKSHA യുടെ ഓപ്പൺ ഡിജിറ്റൽ ഉള്ളടക്കത്തിന്റെ ലോകം എക്‌സ്‌പ്ലോർ ചെയ്യുക",
        "stateboard": "സംസ്ഥാനങ്ങൾ / കേന്ദ്രഭരണ പ്രദേശങ്ങൾ",
        "stateboardDescription": "22+ സംസ്ഥാനങ്ങളും കേന്ദ്രഭരണ പ്രദേശങ്ങളും പ്രസിദ്ധീകരിച്ച ഉള്ളടക്കം എക്‌സ്‌പ്ലോർ ചെയ്യുക",
        "about": "കുറിച്ച്",
        "home": "ഹോം",
        "dashboard": "ഡാഷ്‌ബോർഡ്",
        "getapp": "അപ്ലിക്കേഷൻ നേടുക",
        "contribute": "സംഭാവന ചെയ്യുക",
        "aboutdiksha": "DIKSHA യെ കുറിച്ച്",
        "aboutdikshacontent": "വിദ്യാഭ്യാസ മന്ത്രാലയത്തിന്റെ ദേശീയ വിദ്യാഭ്യാസ ഗവേഷണ പരിശീലന സമിതിയുടെ (NCERT) സംരംഭമായ സ്കൂൾ വിദ്യാഭ്യാസത്തിനായുള്ള ഒരു ദേശീയ വേദിയാണ് DIKSHA(അറിവ് പങ്കിടലിനായുള്ള ഡിജിറ്റൽ അടിസ്ഥാന സൗകര്യങ്ങൾ ).2017 മെയ് മാസത്തിൽ ബഹുമാനപ്പെട്ട മാനവ വിഭവശേഷി മന്ത്രി ശ്രീ പ്രകാശ് ജാവദേക്കർ പുറത്തിറക്കിയ ദേശീയ അധ്യാപക വേദിയിൽ വിഭാവനം ചെയ്തിട്ടുള്ള ഓപ്പൺ ആർക്കിടെക്ചർ, ഓപ്പൺ ആക്‌സസ് ,ഓപ്പൺ ലൈസൻസിംഗ് വൈവിധ്യം, തിരഞ്ഞെടുപ്പ്, സ്വയംഭരണം എന്നിവയുടെ അടിസ്ഥാന തത്വങ്ങളെ അടിസ്ഥാനമാക്കിയാണ് DIKSHA വികസിപ്പിച്ചെടുത്തത്.ബഹുമാനപ്പെട്ട വൈസ് പ്രസിഡന്റ് 2017 സെപ്റ്റംബർ 5 ന് DIKSHA തന്നെ സമാരംഭിച്ചു, അതിനുശേഷം 35 സംസ്ഥാനങ്ങൾ /കേന്ദ്രഭരണ പ്രദേശങ്ങൾ , CBSE,NCERT എന്നിവയും കോടിക്കണക്കിന് പഠിതാക്കളും അധ്യാപകരും ഇത് അംഗീകരിച്ചു.",
        "aboutdikshacontent2": "ഓപ്പൺ സോഴ്‌സ് സാങ്കേതികവിദ്യയിലാണ് DIKSHA നിർമ്മിച്ചിരിക്കുന്നത്, ഇന്ത്യയിൽ നിർമ്മിച്ചതും ഇന്ത്യയ്ക്കായി നിർമ്മിച്ചതുമാണ്,ഇത് ഇന്റർനെറ്റ് സ്കെയിൽ സാങ്കേതികവിദ്യകൾ സംയോജിപ്പിക്കുകയും അധ്യാപനത്തിനും പഠനത്തിനുമായി നിരവധി ഉപയോഗ-കേസുകളും പരിഹാരങ്ങളും പ്രാപ്തമാക്കുകയും ചെയ്യുന്നു.MIT ലൈസൻസുള്ള ഓപ്പൺ സോഴ്‌സ് സാങ്കേതികവിദ്യ സൺബേർഡ് ഉപയോഗിച്ചാണ് DIKSHA നിർമിച്ചിരിക്കുന്നത് .ഇത് പഠനത്തിനായുള്ള ഒരു ഡിജിറ്റൽ ഇൻഫ്രാസ്ട്രക്ചറാണ്, കൂടാതെ ഒന്നിലധികം ഭാഷകളെയും പരിഹാരങ്ങളെയും പിന്തുണയ്‌ക്കുന്നതിന് രൂപകൽപ്പന ചെയ്‌തിരിക്കുന്നതും പ്ലാറ്റ്ഫോമുകളുടെയും പരിഹാരങ്ങളുടെയും വികസനത്തിനായി 100 മൈക്രോ സേവനങ്ങൾ ബിൽഡിംഗ് ബ്ലോക്കുകളായി വാഗ്ദാനം ചെയ്യുന്നു. \n\n നേരത്തെ സൂചിപ്പിച്ചതുപോലെ DIKSHA, എല്ലാ സംസ്ഥാനങ്ങളുടെയും കേന്ദ്രഭരണ പ്രദേശങ്ങളുടെയും ഉപയോഗത്തിനായി ലഭ്യമാണ്.ഓരോ സംസ്ഥാനവും / കേന്ദ്രഭരണ പ്രദേശങ്ങളുടെയും അവരുടെ അധ്യാപകർ‌ക്കും പഠിതാക്കൾ‌ക്കുമായി പ്രോഗ്രാമുകൾ‌ രൂപകൽപ്പന ചെയ്യുന്നതിനും പ്രവർ‌ത്തിപ്പിക്കുന്നതിനും പ്ലാറ്റ്‌ഫോമിലെ വൈവിധ്യമാർ‌ന്ന കഴിവുകളും പരിഹാരങ്ങളും ഉപയോഗിക്കാനുള്ള സ്വാതന്ത്ര്യവും തിരഞ്ഞെടുപ്പും ഉള്ളതിനാൽ‌ DIKSHA പ്ലാറ്റ്ഫോമിനെ അതിന്റേതായ രീതിയിൽ സ്വാധീനിക്കുന്നു.വിദ്യാഭ്യാസ പരിസ്ഥിതി വ്യവസ്ഥയ്ക്ക് (വിദ്യാഭ്യാസ വിദഗ്ധർ, ഓർഗനൈസേഷനുകൾ,സർക്കാർ - സ്ഥാപനങ്ങൾ, സ്വയംഭരണ സ്ഥാപനങ്ങൾ, സർക്കാരിതര, സ്വകാര്യ സ്ഥാപനങ്ങൾ) പങ്കെടുക്കാനും സംഭാവന നൽകാനും രാജ്യത്തിന് സ്കെയിലിൽ പഠന ലക്ഷ്യങ്ങൾ കൈവരിക്കുന്നതിനുള്ള ഒരു പൊതുവേദി പ്രയോജനപ്പെടുത്താനും DIKSHA നയങ്ങളും ഉപകരണങ്ങളും സാധ്യമാക്കുന്നു. \n\n രാജ്യത്തുടനീളമുള്ള പഠിതാക്കൾക്കും അധ്യാപകർക്കും DIKSHA ആക്‌സസ് ചെയ്യാൻ‌ കഴിയും കൂടാതെ നിലവിൽ‌ 18+ ഭാഷകളെയും NCERT, CBSE, SCERT എന്നിവയുടെ വിവിധ പാഠ്യപദ്ധതികളെയും പിന്തുണയ്‌ക്കുന്നു.സ്കൂൾ വിദ്യാഭ്യാസം, അടിസ്ഥാന പഠന പരിപാടികൾ, പഠിതാക്കളുടെയും അധ്യാപകരുടെയും താഴ്ന്നതും വ്യത്യസ്തവുമായ കഴിവുള്ള കമ്മ്യൂണിറ്റികൾക്കായി സമഗ്ര പഠനത്തെ പിന്തുണക്കുന്നതിനും ഈ പ്ലാറ്റ്ഫോം പ്രയോജനപ്പെടുത്തുകയും വികസിപ്പിക്കുകയും ചെയ്യുന്നു. \n\n COVID-19 അനുബന്ധ സ്കൂളിംഗ് തടസ്സത്തിന്റെ പശ്ചാത്തലത്തിൽ, നൂതനമായ സംസ്ഥാന പരിപാടികളിലൂടെ എല്ലാ സംസ്ഥാനങ്ങൾക്കും / കേന്ദ്രഭരണ പ്രദേശങ്ങൾക്കും വീട്ടിൽ തന്നെ പഠനം / വിദ്യാഭ്യാസം പ്രാപ്തമാക്കാൻ DIKSHA സാധ്യമാക്കുന്നു; അതിനാൽ ഇന്ത്യയിലുടനീളമുള്ള അധ്യാപകരുടെയും പഠിതാക്കളുടെയും പ്രയോജനത്തിനായി സാങ്കേതികവിദ്യയുടെ ഉപയോഗം കുതിക്കുന്നു",
        "news": "വാർത്ത",
        "resources": "പഠന വിഭവങ്ങൾ",
        "events": "ഇവന്റുകൾ",
        "AboutVidyaDaan": "VidyaDaan നെ കുറിച്ച്",
        "AboutVidyaDaanDescription": "ഇന്ത്യയിലുടനീളമുള്ള പഠിതാക്കൾ‌ക്ക് ഗുണനിലവാരമുള്ള പഠനം തുടരുന്നുവെന്ന് ഉറപ്പുവരുത്തുന്നതിനായി വിദ്യാഭ്യാസ മേഖലയിൽ ‌ ഇ-ലേണിംഗ് വിഭവങ്ങൾ ‌ സംഭാവന ചെയ്യുന്നതിനായി രാജ്യത്തേക്കുള്ള, പ്രത്യേകിച്ചും രാജ്യത്തുടനീളമുള്ള വ്യക്തികൾ‌ക്കും ഓർ‌ഗനൈസേഷനുകൾ‌ക്കുമുള്ള ഒരു ആഹ്വാനമാണ് ഈ ദേശീയ പരിപാടി.",
        "AboutVidyaDaanMoreDescription": "സ്വയം രജിസ്റ്റർ ചെയ്യുകയും നാമനിർദ്ദേശം ചെയ്യുകയും ചെയ്ത ശേഷം വ്യക്തികൾ, അധ്യാപകർ, വിദ്യാഭ്യാസ വിദഗ്ധർ, വിഷയ വിദഗ്ധർ, സ്കൂളുകൾ, സർക്കാർ, സർക്കാരിതര സംഘടനകൾ എന്നിവയ്ക്ക് സംഭാവന നൽകാം.1 മുതൽ 12 വരെയുള്ള ഏതൊരു ഗ്രേഡിനും അതാതു സംസ്ഥാനങ്ങൾ / കേന്ദ്രഭരണ പ്രദേശങ്ങൾ വ്യക്തമാക്കിയ ഏതെങ്കിലും വിഷയത്തിനും വിശദീകരണ വീഡിയോകൾ, അദ്ധ്യാപന വീഡിയോകൾ, പരിശീലന ചോദ്യങ്ങൾ, യോഗ്യത അടിസ്ഥാനമാക്കിയുള്ള ഇനങ്ങൾ, പാഠ പദ്ധതികൾ എന്നിങ്ങനെയുള്ള വ്യത്യസ്ത തരം ഉള്ളടക്കങ്ങൾ ഈ സംഭാവനകളാകാം.അത്തരം സംഭാവനകൾ ക്രിയേറ്റീവ് കോമൺസ് ലൈസൻസ് ചട്ടക്കൂടിന് കീഴിൽ ഓപ്പൺ-ലൈസൻസുള്ളതായിരിക്കണം, അവ അതത് സംസ്ഥാനങ്ങൾ / കേന്ദ്രഭരണ പ്രദേശങ്ങൾ ,CBSE എന്നിവയ്ക്ക് മേൽനോട്ടം വഹിക്കാനും കഴിയും, ഒപ്പം ഉള്ളടക്കം സ്വീകരിച്ച് ഉയർന്ന ഉപയോഗം കണ്ടെത്തുന്ന സംഭാവകരെ ഉചിതമായി തിരിച്ചറിയപ്പെടും.",
        "board-ncert-description": "NCERT( ദേശീയ വിദ്യാഭ്യാസ ഗവേഷണ പരിശീലന സമിതി) പ്രസിദ്ധീകരിച്ച ഉള്ളടക്കം എക്‌സ്‌പ്ലോർ  ചെയ്യുക",
        "board-cbse-description": "CBSE( (സെൻട്രൽ ബോർഡ് ഓഫ് സെക്കൻഡറി എജ്യുക്കേഷൻ) പ്രസിദ്ധീകരിച്ച ഉള്ളടക്കം )  എക്‌സ്‌പ്ലോർ  ചെയ്യുക",
        "board-nios-description": "NIOS(   (നാഷണൽ ഇൻസ്റ്റിറ്റ്യൂട്ട് ഓഫ് ഓപ്പൺ സ്കൂൾ)  പ്രസിദ്ധീകരിച്ച ഉള്ളടക്കം എക്‌സ്‌പ്ലോർ  ചെയ്യുക",
        "board-btntitle": "എക്‌സ്‌പ്ലോർ ചെയ്യുക"
    },
    "or": {
        "language": "ଓଡ଼ିଆ",
        "diksha": "DIKSHA",
        "govofIndia": "ଭାରତ ସରକାର",
        "dikshamoto": "ଡିଜିଟାଲ ଇନଫ୍ରାଷ୍ଟ୍ରକଚର ଫର ନଲେଜ ସେୟାରିଙ୍ଗ (ଜ୍ଞାନ ବିତରଣ ନିମେନ୍ତେ ଡିଜିଟାଲ୍ ଭିତ୍ତିଭୂମି)",
        "dikshaDescription": "ଜାତୀ ଶିକ୍ଷା ଗବେଷଣା ଓ ପ୍ରଶିକ୍ଷଣ ପରିଷଦ (ଶିକ୍ଷା ମନ୍ତ୍ରଣାଳୟ, ଭାରତ ସରକାର) ଦ୍ୱାରା ଏକ ପ୍ରସ୍ତାବ",
        "btnExploreDiksha": "DIKSHA କୁ ଦେଖନ୍ତୁ",
        "explore": "ଦେଖନ୍ତୁ",
        "ExploreDikshaContent": "DIKSHA ର ମୁକ୍ତ ଡିଜିଟାଲ୍ କଣ୍ଟେଣ୍ଟର ଦୁନିଆକୁ ଦେଖନ୍ତୁ",
        "stateboard": "ରାଜ୍ୟ / କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳ",
        "stateboardDescription": "22+ ରାଜ୍ୟ ଏବଂ କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳ ଦ୍ୱାରା ପବ୍ଲିସ୍ କରାଯାଇଥିବା କଣ୍ଟେଣ୍ଟ୍ ଦେଖନ୍ତୁ",
        "about": "ବିଷୟରେ",
        "home": "ହୋମ୍",
        "dashboard": "ଡ୍ୟାସବୋର୍ଡ",
        "getapp": "ଆପ୍ ପାଆନ୍ତୁ",
        "contribute": "ଅବଦାନ କରନ୍ତୁ",
        "aboutdiksha": "DIKSHA ବିଷୟରେ",
        "aboutdikshacontent": "DIKSHA (ଜ୍ଞାନ ବାଣ୍ଟିବା ପାଇଁ ଡିଜିଟାଲ୍ ଭିତ୍ତିଭୂମି) ହେଉଛି ବିଦ୍ୟାଳୟ ଶିକ୍ଷା ପାଇଁ ଏକ ଜାତୀୟ ପ୍ଲାଟଫର୍ମ, ଯାହା ଜାତୀୟ ଶିକ୍ଷା ଗବେଷଣା ଓ ପ୍ରଶିକ୍ଷଣ ପରିଷଦ (NCERT), ଶିକ୍ଷା ମନ୍ତ୍ରଣାଳୟର ଏକ ପ୍ରୟାସ ଅଟେ । ମୁକ୍ତ ଆର୍କିଟେକ୍ଚର୍, ମୁକ୍ତ ଆକ୍ସେସ୍, ମୁକ୍ତ ଲାଇସେନ୍ସ ବିବିଧତା, ପସନ୍ଦ ଏବଂ ସ୍ୱୟଂଶାସନର ମୂଳ ନୀତି ଉପରେ ଆଧାର କରି DIKSHA ବିକଶିତ କରାଯାଇଥିଲା, ଯାହା ପୂର୍ବତନ ମାନବ ସମ୍ବଳ ବିକାଶ ମନ୍ତ୍ରୀ ଶ୍ରୀ ପ୍ରକାଶ ଜାଭଡେକରଙ୍କ ଦ୍ୱାରା ମଇ 2017 ରେ ପ୍ରକାଶିତ ଜାତୀୟ ଶିକ୍ଷକ ପ୍ଲାଟଫର୍ମ ପାଇଁ ରଣନୀତି ଏବଂ ପଦକ୍ଷେପ ପେପରରେ ଦର୍ଶାଯାଇଛି । DIKSHA ସେପ୍ଟେମ୍ବର 5, 2017 ରେ ଭାରତର ମାନ୍ୟବର ଉପରାଷ୍ଟ୍ରପତିଙ୍କ ଦ୍ୱାରା ଉନ୍ମୋଚିତ ହୋଇଥିଲା ଏବଂ ସେବେଠାରୁ ଏହା 35 ଟି ରାଜ୍ୟ / କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳର CBSE ଏବଂ NCERT ଏବଂ କୋଟି କୋଟି ଶିକ୍ଷାର୍ଥୀ ଏବଂ ଶିକ୍ଷକଙ୍କ ଦ୍ୱାରା ଗୃହୀତ ହୋଇଛି ।",
        "aboutdikshacontent2": "DIKSHA ମୁକ୍ତ ଉତ୍ସ ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଉପରେ ନିର୍ମିତ, ଭାରତରେ ନିର୍ମିତ ଏବଂ ଭାରତ ପାଇଁ ନିର୍ମିତ, ଯାହା ଇଣ୍ଟରନେଟ୍ ସ୍କେଲ୍ ଟେକ୍ନୋଲୋଜିକୁ ଅନ୍ତର୍ଭୁକ୍ତ କରେ ଏବଂ ଶିକ୍ଷାଦାନ ଏବଂ ଶିକ୍ଷା ପାଇଁ ଅନେକ ବ୍ୟବହାର ତଥା ସମାଧାନକୁ ସକ୍ଷମ କରିଥାଏ । MIT ଲାଇସେନ୍ସପ୍ରାପ୍ତ Sunbird ନାମକ ମୁକ୍ତ ଉତ୍ସ ଟେକ୍ନୋଲୋଜି ବ୍ୟବହାର କରି Sunbird ପ୍ରସ୍ତୁତ କରାଯାଇଛି, ଯାହା ଶିକ୍ଷା ପାଇଁ ଏକ ଡିଜିଟାଲ୍ ଭିତ୍ତିଭୂମି ଅଟେ ଏବଂ ଏହା ଏକାଧିକ ଭାଷା ଏବଂ ସମାଧାନକୁ ସପୋର୍ଟ କରେ ଏବଂ ଏହା ପ୍ଲାଟଫର୍ମ ତଥା ସମାଧାନ ପାଇଁ ବିଲ୍ଡିଙ୍ଗ୍ ବ୍ଲକ୍ ଭାବରେ 100 ରୁ ଅଧିକ ମାଇକ୍ରୋ ସେବା ପ୍ରଦାନ କରିଥାଏ ।\n\nଯେପରିକି ପୂର୍ବରୁ ଉଲ୍ଲେଖ କରାଯାଇଛି, DIKSHA ଭାରତର ସମସ୍ତ ରାଜ୍ୟ ଏବଂ କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳର ବ୍ୟବହାର ପାଇଁ ଉପଲବ୍ଧ ଅଟେ । ପ୍ରତ୍ୟେକ ରାଜ୍ୟ / କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳ DIKSHA ପ୍ଲାଟଫର୍ମକୁ ନିଜସ୍ୱ ପଦ୍ଧତିରେ ବ୍ୟବହାର କରିଥାଏ, କାରଣ ଏଥିରେ ସେମାନଙ୍କର ଶିକ୍ଷକ ଏବଂ ଶିକ୍ଷାର୍ଥୀମାନଙ୍କ ପାଇଁ ପ୍ରୋଗ୍ରାମ ଡିଜାଇନ୍ ଏବଂ ଚଲାଇବା ପାଇଁ ପ୍ଲାଟଫର୍ମର ବିଭିନ୍ନ ସାମର୍ଥ୍ୟ ଏବଂ ସମାଧାନ ବ୍ୟବହାର କରିବାର ସ୍ୱାଧୀନତା ଏବଂ ପସନ୍ଦ ରହିଛି । DIKSHA ନୀତି ଏବଂ ସାଧନଗୁଡ଼ିକ \nସମଗ୍ର ଦେଶର ଶିକ୍ଷଣ ଲକ୍ଷ୍ୟ ପ୍ରାପ୍ତ କରିବାରେ ଅଂଶଗ୍ରହଣ କରିବାକୁ ଏବଂ ଯୋଗଦାନ କରିବାକୁ ଏକ ଶିକ୍ଷା ଇକୋସିଷ୍ଟମ (ଶିକ୍ଷାବିତ୍, ବିଶେଷଜ୍ଞ, ସଂଗଠନ, ଅନୁଷ୍ଠାନ - ସରକାରୀ, ସ୍ୱୟଂଶାସିତ ଅନୁଷ୍ଠାନ, ଅଣ-ସରକାରୀ ତଥା ବେସରକାରୀ ସଂଗଠନ) ସମ୍ଭବ କରିଥାଏ ।\n\nDIKSHA ସମଗ୍ର ଦେଶରେ ଶିକ୍ଷାର୍ଥୀ ଏବଂ ଶିକ୍ଷକମାନଙ୍କ ଦ୍ୱାରା ଆକ୍ସେସ୍ ହୋଇପାରିବ ଏବଂ ବର୍ତ୍ତମାନ ଏହା 18+ ଭାଷା ଏବଂ NCERT, CBSE ଏବଂ SCERT ର ବିଭିନ୍ନ ପାଠ୍ୟକ୍ରମକୁ ସମର୍ଥନ କରେ । ବିଦ୍ୟାଳୟ ଶିକ୍ଷା, ଭିତ୍ତିଭୂମି ଶିକ୍ଷା କାର୍ଯ୍ୟକ୍ରମ ଏବଂ ଶିକ୍ଷାର୍ଥୀ ଏବଂ ଶିକ୍ଷକଙ୍କ ଅଣସଂରକ୍ଷିତ ତଥା ଭିନ୍ନକ୍ଷମ ସମ୍ପ୍ରଦାୟ ପାଇଁ ଅନ୍ତର୍ଭୂକ୍ତ ଶିକ୍ଷଣକୁ ସମର୍ଥନ କରିବା ପାଇଁ ଏହି ପ୍ଲାଟଫର୍ମକୁ ବ୍ୟବହାର ଏବଂ ବିକାଶ କରାଯାଉଛି ।\n\nCOVID-19 ହେତୁ ବିଦ୍ୟାଳୟରେ ହେଉଥିବା ବ୍ୟାଘାତ ହେତୁ, DIKSHA ସମସ୍ତ ରାଜ୍ୟ / କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳର ଅଭିନବ ରାଜ୍ୟ କାର୍ଯ୍ୟକ୍ରମ ମାଧ୍ୟମରେ ଘରେ ଶିକ୍ଷଣ / ଶିକ୍ଷା ସକ୍ଷମ କରିବା ସମ୍ଭବ କରେ; ତେଣୁ ସମଗ୍ର ଭାରତରେ ଶିକ୍ଷକ ଏବଂ ଶିକ୍ଷାର୍ଥୀମାନଙ୍କ ସୁବିଧା ପାଇଁ ଟେକ୍ନୋଲୋଜିର ବ୍ୟବହାରକୁ ପ୍ରାଧାନ୍ୟ ଦିଏ ।",
        "aboutdikshanewcontent": "DIKSHA (ଜ୍ଞାନ ବିତରଣ ନିମନ୍ତେ ଡିଜିଟାଲ ଭିତ୍ତିଭୂମି) ହେଉଛି ବିଦ୍ୟାଳୟ ଶିକ୍ଷା ପାଇଁ ଏକ ଜାତୀୟ ପ୍ଲାଟଫର୍ମ, ଶିକ୍ଷାମନ୍ତ୍ରଣାଳୟ (MoE)ଙ୍କ ଅଧୀନରେ ନ୍ୟାସନାଲ୍ କାଉନସିଲ୍ଫ ଏଜୁକେଶନାଲ ରିସର୍ଚ୍ଚ ଆଣ୍ଡ ଟ୍ରେନିଂ (NCERT) ର ଏକ ପ୍ରାରମ୍ଭିକ ପଦକ୍ଷେପ | ଭାରତର ମାନ୍ୟବର ଉପରାଷ୍ଟ୍ରପତି-ଶ୍ରୀ ଏମ୍ ଭେଙ୍କୟା ନାଇଡୁ ଙ୍କ 2017 ଦ୍ବାରା 2017 ରେ ଆରମ୍ଭ କରାଯାଇଥିଲା, ସିବିଏସ୍ଇ ସମେତ ପ୍ରାୟ ସମସ୍ତ ରାଜ୍ୟ, ୟୁନିଅନ୍ ଟେରିଟୋରୀ, କେନ୍ଦ୍ରୀୟସ୍ୱୟଂଶାସିତସଂସ୍ଥା / ବୋର୍ଡ ଗୁଡ଼ିକ ଦ୍ବାରା DIKSHA ବ୍ୟବସ୍ଥାକୁ ଗ୍ରହଣ କରାଯାଇଛି | ଜାତୀୟ ଶିକ୍ଷକ ପ୍ଲାଟଫର୍ମ ପାଇଁ ତତ୍କାଳୀନ ମାନ୍ୟବର ବିକାଶ ମନ୍ତ୍ରୀ ଶ୍ରୀପ୍ରକାଶ ଜାଭଡେକରଙ୍କ ଦ୍ବାରା ସେପ୍ଟେମ୍ବର 2017 ରେ ପ୍ରକାଶିତ ଜାତୀୟ ଶିକ୍ଷକ ପ୍ଲାଟଫର୍ମ ପାଇଁ କୌଶଳ ଏବଂ ଆପ୍ରୋଚ ପେପର ଆଧାରରେ DIKSHA ବିକଶିତକରାଯାଇଥିଲା | ପ୍ରତ୍ୟେକ ରାଜ୍ୟ / UT DIKSHA  ପ୍ଲାଟଫର୍ମକୁ ନିଜସ୍ୱ ପଦ୍ଧତିରେ ବ୍ୟବହାର କରିଥାଏ, କାରଣ ଏଥିରେ ଶିକ୍ଷକ,ଶିକ୍ଷାର୍ଥୀ ଏବଂ ପ୍ରଶାସକଙ୍କ ପାଇଁ ପ୍ରୋଗ୍ରାମଡିଜାଇନ୍ ଏବଂ ଚଲାଇବା ପାଇଁ ପ୍ଲାଟଫର୍ମର ବିଭିନ୍ନ ସାମର୍ଥ୍ୟ ଏବଂ ସମାଧାନର ବ୍ୟବହାର କରିବାର ସ୍ୱାଧୀନତା ଏବଂ ପସନ୍ଦ ରହିଛି | DIKSHA ନୀତି ଏବଂ ସାଧନଗୁଡ଼ିକ ଶିକ୍ଷା ଇକୋସିଷ୍ଟମ (ଶିକ୍ଷାବିତ୍, ବିଶେଷଜ୍ଞ, ସଂଗଠନ, ଅନୁଷ୍ଠାନ - ସରକାରୀ, ସ୍ଵୟଂଶାସିତ ଅନୁଷ୍ଠାନ,ଅଣ-ସରକାରୀ ତଥା ବେସରକାରୀ ସଂଗଠନ) ଦେଶ ପାଇଁ ଶିକ୍ଷଣ ରେ ଲକ୍ଷ୍ୟହାସଲ କରିବାପାଇଁ ଏକ ସାଧାରଣ ପ୍ଲାଟଫର୍ମରେ ଅଂଶଗ୍ରହଣ, ଯୋଗଦାନଏବଂଉପଯୋଗ କରିବା ସମ୍ଭବ କରିଥାଏ | । NCERT ପାଠ୍ୟପୁସ୍ତକଗୁଡ଼ିକ CC BY NC-ND ଅଧୀନରେ ଲାଇସେନ୍ସପ୍ରାପ୍ତ ଏବଂ ସମସ୍ତ ଉତ୍ସଗୁଡିକ CC BY NC-SA  ଅଧୀନରେ ଲାଇସେନ୍ସପ୍ରାପ୍ତ | ପ୍ରଧାନ ମନ୍ତ୍ରୀ ଙ୍କ ଅଧୀନରେ ଥିବା eVidya କାର୍ଯ୍ୟକ୍ରମ ଆତ୍ମ ନିର୍ଭର ଭାରତ, ​​ଏକ ଅଂଶ ଭାବରେ ଘୋଷିତ ହୋଇଥିଲା, DIKSHA କୁ 'ଗୋଟିଏ ଦେଶ, ଗୋଟିଏଡିଜିଟାଲ୍ପ୍ଲାଟଫର୍ମ' ଭାବରେଘୋଷଣାକରାଯାଇଛି | DIKSHA କାର୍ଯ୍ୟକ୍ରମ ସମଗ୍ର ଦେଶର ଶିକ୍ଷାର୍ଥୀ ଏବଂ ଶିକ୍ଷକ ମାନଙ୍କ ନିକଟରେ ଉପଲବ୍ଧ ହୋଇପାରିବ ଏବଂ ବର୍ତ୍ତମାନ ଦେଶର ୩୬ଟି ଭାଷାକୁ ସହାୟତା ପ୍ରଦାନ କରିପାରୁଛି ।",
        "aboutdikshanewcontent2": "DIKSHA ମୁକ୍ତ ଭାବରେ ବୈଷୟିକ ଜ୍ଞାନ କୋୖଶଳଦ୍ୱାରା ଭାରତରେ ନିର୍ମିତ ଏବଂ ଭାରତ ପାଇଁ ନିର୍ମିତ, ଯାହା ଇଣ୍ଟରନେଟ୍ ସ୍କେଲ୍ ଟେକ୍ନୋଲୋଜିକୁ ଅନ୍ତର୍ଭୁକ୍ତ କରେ ଏବଂ ଶିକ୍ଷାଦାନ ଏବଂ ଶିକ୍ଷା ପାଇଁ ଅନେକ ବ୍ୟବହାର-ମାମଲା ଏବଂ ସମାଧାନକୁ ସକ୍ଷମ କରିଥାଏ | DIKSHA ସନ୍ବର୍ଡ ନାମକ MIT ଲାଇସେନ୍ସପ୍ରାପ୍ତ ବୈଷୟିକ ଜ୍ଞାନ କୋୖଶଳରେ ନିର୍ମିତ, ଯାହା ଶିଖିବା ଏବଂ ସମାଧାନ ପାଇଁ ଏକ ଡିଜିଟାଲ୍ ଭିତ୍ତିଭୂମି ଏବଂ ପ୍ଲାଟଫର୍ମ ଏବଂ ସମାଧାନର ବିକାଶ ପାଇଁ 100 ରୁ ଅଧିକ ମାଇକ୍ରୋ ସେବା ପ୍ରଦାନ କରିଥାଏ |\n\nଭାରତର ମାନ୍ୟବର ପ୍ରଧାନମନ୍ତ୍ରୀ 29 ଜୁଲାଇ 2021 ରେ NDEAR (ନ୍ୟାସନାଲ ଡିଜିଟାଲ୍ ଏଜୁକେସନ୍ ସ୍ଥାପତ୍ୟ) ଆରମ୍ଭ କରିଛନ୍ତି ଯାହା ରାଜ୍ୟ / UT ଦ୍ୱାରା ଫେଡେରେଟେଡ୍ ଏବଂ ପାରସ୍ପରିକ କାର୍ଯ୍ୟକ୍ଷମ ପ୍ରଣାଳୀର ବିକାଶ ପାଇଁ ବ୍ଲକ ଯୋଗାଇଥାଏ | DIKSHA ର ମୁଖ୍ୟ ଅଂଶ ଗୁଡିକ ମଧ୍ୟରୁ ଅଧିକାଂଶ NDEAR ଅଂଶ ଗୁଡିକ ଧାରଣ କରିଥାଏ, ଯାହାକି NDEAR ର କିଛି ସଫଳ ବ୍ୟବହାରିକ ବ୍ୟବସ୍ଥାକୁ ସକ୍ଷମ କରିଥାଏ ଯେପରିକି: ଶକ୍ତିଶାଳୀ ପାଠ୍ୟପୁସ୍ତକ, ଅନ୍ଲାଇନ୍ ପାଠ୍ୟକ୍ରମ, ବିଷୟବସ୍ତୁ ପ୍ରବନ୍ଧ, ବିଷୟବସ୍ତୁ ସୋର୍ସିଂ, ଇଣ୍ଟରାକ୍ଟିଭ୍ କୁଇଜ୍, ପ୍ରଶ୍ନ ବ୍ୟାଙ୍କ, ଚାଟ୍ବଟ୍, ଆନାଲିଟିକ୍ସ ଏବଂ ଡ୍ୟାସବୋର୍ଡ | COVID-19 ମହାମାରୀ ସମୟରେ, ପ୍ଲାଟଫର୍ମଟି ସମଗ୍ର ଦେଶରେ ଶିକ୍ଷାର୍ଥୀ ଏବଂ ଶିକ୍ଷକମାନଙ୍କ ନିମନ୍ତେ ସଫଳତାର ସହିତ ଉପଲବ୍ଧି ହୋଇପାରିଛି  |\n\nଶିକ୍ଷାଦାନ ଏବଂ ଶିକ୍ଷଣ ପ୍ରକ୍ରିୟାରେ ଡିଜିଟାଲ୍ ବିଷୟବସ୍ତୁକୁ ସାହାଯ୍ୟ କରିବା ପାଇଁ, ବିଭିନ୍ନ ଉତ୍ସଗୁଡ଼ିକର ଏକ ସମୃଦ୍ଧ ଭଣ୍ଡାର CSR ନିୟନ୍ତ୍ରଣରେ ଥିବା ବିଦ୍ୟାଦାନ ସହିତ  ବିଦ୍ୟାଳୟ / କେତେକ ଶିକ୍ଷକ, ବିଷୟବସ୍ତୁ ସହଭାଗୀ, ଏନଜିଓ, କର୍ପୋରେଟରଙ୍କ ଦ୍ୱାରା NCERT / CBSE ଏବଂ ରାଜ୍ୟଗୁଡ଼ିକର ବିଭିନ୍ନ ବିଷୟବସ୍ତୁ ଆବଶ୍ୟକତା କୁ ସଫଳତାର ସେ ପୂରଣ କରାଯାଇଥିଲା |\n\nସ୍ୱତନ୍ତ୍ର ଆବଶ୍ୟକତା ଥିବା ପିଲାମାନଙ୍କ ପାଇଁ ଶିକ୍ଷାଦାନ ଏବଂ ଶିକ୍ଷଣରେ ସାହାଯ୍ୟ କରିବା ପାଇଁ, (CWSN)  DIKSHA ରେ ବହୁ ସଂଖ୍ୟକ ଅଡିଓ ବହି, ISL (ଭାରତୀୟ ସଙ୍କେତ ଭାଷା) ଭିଡିଓ ଏବଂ ଅଭିଧାନ ଉପଲବ୍ଧ କରାଯାଇଛି |\n\nମହାମାରୀ ସମୟରେ, DIKSHA ମାଧ୍ୟମରେ ଅନଲାଇନରେ ପ୍ରାଥମିକ ଗ୍ରେଡ୍ ପାଇଁ ଶିକ୍ଷକଙ୍କ ବୃତ୍ତିଗତ ବିକାଶ କାର୍ଯ୍ୟକ୍ରମ NISHTHA 1.0 (ସ୍କୁଲ୍ ହେଡସ୍ ଏବଂ ଶିକ୍ଷକଙ୍କ ହୋଲିଷ୍ଟିକ୍ ଆଡଭାନ୍ସମେଣ୍ଟ୍ ପାଇଁ ନ୍ୟାସନାଲ୍ ଇନିସିଏଟିଭ୍) ଆରମ୍ଭ କରାଯାଇଥିଲା | NISHTHA 2.0 & 3.0 ସେକେଣ୍ଡାରୀ ଏବଂ ଫାଉଣ୍ଡେସନ ସାକ୍ଷରତା ଏବଂ ସଂଖ୍ୟା ଉପରେ ଧ୍ୟାନ ଦିଆଯାଇଥିଲା | NISHTHA ବ୍ୟତୀତ, ଅନେକ ରାଜ୍ୟ / UT ସେମାନଙ୍କର ନିଜସ୍ୱ ଦକ୍ଷତା ବିକାଶ ପ୍ରୋଗ୍ରାମର ଡିଜାଇନ୍ କରିଛନ୍ତି |\n\nNCERT ମଧ୍ୟ PM eVIDYA DTH-TV ଚ୍ୟାନେଲ (ଏକ ଶ୍ରେଣୀ, ଗୋଟିଏ ଚ୍ୟାନେଲ I ରୁ XII) ମାଧ୍ୟମରେ 24x7 ଆଧାରରେ ଛାତ୍ରମାନଙ୍କ ପାଇଁ ବିଷୟବସ୍ତୁ ବିତରଣ କରିଥାଏ | ଏହି ଚ୍ୟାନେଲଗୁଡିକ ଶ୍ରେଣୀ-ଅନୁଯାୟୀ ବିଷୟବସ୍ତୁ ବିତରଣ କରେ ଯାହା QR କୋଡ୍ ମାଧ୍ୟମରେ DIKSHA ସହିତ ସଂଯୁକ୍ତ | ସମନ୍ୱୟକୁ ସକ୍ଷମ କରିବାକୁ, ପ୍ରସାରଣ ବିଷୟବସ୍ତୁ ମଧ୍ୟ DIKSHA ରେ ଉପଲବ୍ଧ, ଯେଉଁଠାରେ ଏହି ବିଷୟବସ୍ତୁ ଯେକୌଣସି ସମୟରେ, ଯେକୌଣସି ସ୍ଥାନରେ ଉପଲବ୍ଧ ହୋଇଥାଏ |",
        "aboutdikshaimagetext": "DIKSHA ଉପରେ ସମାଧାନ - ବିବିଧ, ନମନୀୟ ଏବଂ ବିକାଶଶୀଳ |",
        "news": "ସମ୍ବାଦ",
        "resources": "ଉତ୍ସ",
        "events": "କାର୍ଯ୍ୟକ୍ରମ",
        "AboutVidyaDaan": "VidyaDaan ବିଷୟରେ",
        "AboutVidyaDaanDescription": "ଏହି ଜାତୀୟ କାର୍ଯ୍ୟକ୍ରମ ସମଗ୍ର ଦେଶ ପାଇଁ ବିଶେଷ କରି ସମଗ୍ର ଦେଶରେ ବ୍ୟକ୍ତିବିଶେଷ ଏବଂ ସଂଗଠନଗୁଡିକ ଶିକ୍ଷା ପରିସରରେ ଇ-ଲର୍ଣ୍ଣିଂ ଉତ୍ସଗୁଡିକରେ ଯୋଗଦାନ କରିବା ପାଇଁ ଏକ ଆହ୍ୱାନ ଅଟେ, ଯାହା ସମଗ୍ର ଭାରତରେ ଶିକ୍ଷାର୍ଥୀମାନଙ୍କ ପାଇଁ ଗୁଣାତ୍ମକ ଶିକ୍ଷା ଜାରି ରଖିବା ନିଶ୍ଚିତ କରିବ ।",
        "AboutVidyaDaanMoreDescription": "ବ୍ୟକ୍ତିବିଶେଷ, ଶିକ୍ଷକ, ଶିକ୍ଷାବିତ୍, ବିଷୟ ବିଶେଷଜ୍ଞ, ବିଦ୍ୟାଳୟ, ସରକାରୀ ତଥା ଅଣ-ସରକାରୀ ସଂଗଠନ ଇତ୍ୟାଦି ପଞ୍ଜୀକରଣ ଏବଂ ନାମାଙ୍କନ ପରେ ନିଜର ଅବଦାନ କରିପାରିବେ । ଏହି ଅବଦାନଗୁଡିକ ବିଭିନ୍ନ ପ୍ରକାରର କଣ୍ଟେଣ୍ଟ୍ ହୋଇପାରେ, ଯେପରିକି ରାଜ୍ୟ/କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳ ସେମାନଙ୍କର ପ୍ରକଳ୍ପ ଅଧୀନରେ 1 ରୁ 12 ଶ୍ରେଣୀ ପର୍ଯ୍ୟନ୍ତ ବର୍ଣ୍ଣନା ଭିଡିଓ, ଶିକ୍ଷାଦାନ ଭିଡିଓ, ଅଭ୍ୟାସ ପ୍ରଶ୍ନ, ପ୍ରତିଯୋଗୀତା ମୂଳକ ବିଷୟ, ପାଠ୍ୟ ଯୋଜନା ଇତ୍ୟାଦି ହୋଇପାରେ । ଏପରି ଅବଦାନଗୁଡିକ କ୍ରିଏଟିଭ କମନ୍ସ ଲାଇସେନ୍ସ ଫ୍ରେମୱାର୍କ ଅଧୀନରେ ଓପନ୍ ଲାଇସେନ୍ସଡ୍ ହେବା ଆବଶ୍ୟକ ଏବଂ ଏହା ସମ୍ପୃକ୍ତ ରାଜ୍ୟ / କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳ ଏବଂ ସିବିଏସଇ ଦ୍ୱାରା ପରିଚାଳିତ ହୋଇପାରିବ ଏବଂ ଯେଉଁମାନଙ୍କ କଣ୍ଟେଣ୍ଟ ଗ୍ରହଣ ହୋଇଥିବ ଏବଂ ଉତ୍ତମ ଭାବରେ ବ୍ୟବହାରଯୋଗ୍ୟ ହୋଇଥିବ, ତାହାକୁ ସ୍ୱୀକୃତି ପ୍ରଦାନ କରାଯିବ ।",
        "VidyaDaanIntro": "ଗୁଣାତ୍ମକ ଶିକ୍ଷାର ନିରନ୍ତର ପରିଚାଳନା ପାଇଁ ଦେଶର, ଦେଶ ପାଇଁଏବଂ ଦେଶ ଦ୍ୱାରା ଏକ କାର୍ଯ୍ୟକ୍ରମ",
        "btnParticipate": "ଅଂଶଗ୍ରହଣ କରନ୍ତୁ",
        "VidyaDaanTypes": "ଆପଣ ଅବଦାନ କରିପାରୁଥିବା ଇ-ଲର୍ଣ୍ଣିଙ୍ଗ୍ ଉତ୍ସ",
        "ExplanationVideos": "ବର୍ଣ୍ଣନା ଭିଡିଓ",
        "PracticeQuestions": "ଅଭ୍ୟାସ ପ୍ରଶ୍ନ",
        "TeachingVideos": "ଶିକ୍ଷଣ ଭିଡିଓ",
        "ExperierntialLearningVideos": "ଅଭିଜ୍ଞତାମୂଳକ ଶିକ୍ଷା ଭିଡିଓ",
        "LessonPlans": "ପାଠ୍ୟ ଯୋଜନା",
        "readmore": "ଅଧିକ ପଢ଼ନ୍ତୁ",
        "DIKSHAforMobile": "ମୋବାଇଲ୍ ପାଇଁ DIKSHA",
        "DIKSHAforMobileDescription": "DIKSHA ପ୍ଲାଟଫର୍ମ ଶିକ୍ଷକ, ଛାତ୍ର ଏବଂ ଅଭିଭାବକମାନଙ୍କ ପାଇଁ ନିର୍ଦ୍ଦିଷ୍ଟ ବିଦ୍ୟାଳୟ ପାଠ୍ୟକ୍ରମ ପାଇଁ ଉପଯୁକ୍ତ ଏବଂ ଉତ୍ତମ ଶିକ୍ଷଣ ସାମଗ୍ରୀ ପ୍ରଦାନ କରେ । ସମସ୍ତ ପାଠ୍ୟକୁ ସହଜରେ ଆକ୍ସେସ୍ କରିବା ପାଇଁ DIKSHA ଆପ୍ ଡାଉନଲୋଡ୍ କରନ୍ତୁ ଏବଂ ପାଠ୍ୟପୁସ୍ତକରେ ଥିବା QR କୋଡ୍ ସ୍କାନ୍ କରନ୍ତୁ । {ଆଣ୍ଡ୍ରଏଡ୍ 5.1 ଏବଂ ତଦୁର୍ଦ୍ଧ}",
        "DIKSHAforWeb": "ୱେବ୍ ପାଇଁ DIKSHA",
        "DIKSHAforWebDescription": "DIKSHA ଶିକ୍ଷଣ ପୋର୍ଟାଲ୍ ବ୍ରାଉଜର୍ ମାଧ୍ୟମରେ DIKSHAର ସମସ୍ତ ଇ-ରିସୋର୍ସକୁ ଅନଲାଇନ ଦେଖିବାର ସୁବିଧା ପ୍ରଦାନ କରେ ।",
        "btnVisitDIKSHAportal": "DIKSHA ପୋର୍ଟାଲକୁ ଯାଆନ୍ତୁ",
        "DIKSHAOffline": "ଡେସ୍କଟପ୍ ଆପ୍",
        "DIKSHAOfflineDescription": "DIKSHA ଡେସ୍କଟପ୍ ସାହାଯ୍ୟରେ ଆପଣ ନିଜ ପର୍ସନାଲ୍ କମ୍ପ୍ୟୁଟରରେ ଡାଉନଲୋଡ୍ ହୋଇଥିବା ଡିଜିଟାଲ୍ ପାଠ୍ୟପୁସ୍ତକ, ପ୍ରଶ୍ନ ବ୍ୟାଙ୍କ୍ ଏବଂ ଏହିପରି ଅନେକ କିଛି ଅଫଲାଇନ୍ ଦେଖିପାରିବେ । {ୱିଣ୍ଡୋଜ୍ ଏବଂ ଉବୁଣ୍ଟୁ OS ପାଇଁ ଉପଲବ୍ଧ} ।",
        "comingsoon": "ଯଥାଶୀଘ୍ର ଆସୁଅଛି!\'",
        "DataDashboard": "ଡାଟା ଡ୍ୟାସବୋର୍ଡ",
        "viewUsagepattern": "ସମ୍ପୂର୍ଣ୍ଣ ଦେଶରେ ଏବଂ ସମସ୍ତ ରାଜ୍ୟରେ ବ୍ୟବହାର ପ୍ୟାଟର୍ନ ଦେଖନ୍ତୁ",
        "last7Weeks": "ମୋଟ ଶିକ୍ଷଣ ଅଧିବେଶନ ପାଇଁ ଗତ 7 ସପ୍ତାହର ଡାଟା",
        "lastupdated": "ଶେଷ ଅପଡେଟ୍ ତାରିଖ",
        "clickstateut": "ଅଧିକ ବିବରଣୀ ପାଇଁ ଏକ ରାଜ୍ୟ / କେନ୍ଦ୍ରଶାସିତ ଅଞ୍ଚଳ ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ",
        "representationonly": "କେବଳ ଉପସ୍ଥାପନା ପାଇଁ ମ୍ୟାପ୍",
        "usageMetrics": "ବ୍ୟୟବହାର ମେଟ୍ରିକ୍ସ",
        "usageMetricsDescription": "22+ ରାଜ୍ୟ ବୋର୍ଡର ଶୈକ୍ଷଣିକ ତଥା ଅଣ-ଶୈକ୍ଷଣିକ କଣ୍ଟେଣ୍ଟ ଦେଖନ୍ତୁ",
        "btnViewDashboard": "ଡାସବୋର୍ଡ ଦେଖନ୍ତୁ",
        "open": "ଖୋଲନ୍ତୁ",
        "download": "ଡାଉନଲୋଡ କରନ୍ତୁ",
        "DIKSHAUsageTillDate": "DIKSHA ର ବର୍ତ୍ତମାନର ବ୍ୟବହାର",
        "LearningLessons": "ଶିକ୍ଷଣ ସେସନ୍",
        "minutes": "ମିନିଟ୍",
        "TermsofUse": "ସର୍ତ୍ତାବଳୀ ଏବଂ ନୀତି",
        "needHelp": "ସାହାଯ୍ୟ ଦରକାର| ",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "ସ୍କିପ୍ କରି ମୁଖ୍ୟ କଣ୍ଟେଣ୍ଟକୁ ଯାଆନ୍ତୁ",
        "sitemap": "ସାଇଟ୍ ମ୍ୟାପ୍",
        "ScreenReaderAccess": "ଆକ୍ସେସିବିଲିଟି ବିଭାଗ",
        "DIKSHAUpdates": "DIKSHA ଅପଡେଟ୍",
        "lastupdatedonresult": "ରିପୋର୍ଟ ସାପ୍ତାହିକ ଭାବରେ - ପ୍ରତି ସୋମବାର ମଧ୍ୟାହ୍ନରେ ଅପଡେଟ୍ ହୁଏ",
        "lastupdatedonresultdaily": "ରିପୋର୍ଟ ଦୈନିକ ଅପଡେଟ୍ ହୁଏ",
        "totalDIKSHAusage": "ମୋଟ DIKSHA ବ୍ୟବହାର ସମୟ ମିନିଟରେ",
        "numberLearningActivities": "ଶିକ୍ଷାର୍ଥୀମାନଙ୍କ ଦ୍ୱାରା DIKSHA ଭିତ୍ତିଭୂମି ବ୍ୟବହାର କରି କେତେଥର ଶିକ୍ଷଣ କାର୍ଯ୍ୟକଳାପ ହୋଇଛି",
        "noevents": "କୌଣସି ଆସନ୍ତା କାର୍ଯ୍ୟକ୍ରମ ଉପଲବ୍ଧ ନାହିଁ",
        "updateticker1": "ଗୁଣାତ୍ମକ ଶିକ୍ଷାର ନିରନ୍ତର ପରିଚାଳନା ପାଇଁ ଦେଶର, ଦେଶ ପାଇଁ ଏବଂ ଦେଶ ଦ୍ୱାରା ଏକ କାର୍ଯ୍ୟକ୍ରମ",
        "updateticker2": "ଜାତୀୟ ଶିକ୍ଷା ଗବେଷଣା ଓ ପ୍ରଶିକ୍ଷଣ ପରିଷଦ (ଶିକ୍ଷା ମନ୍ତ୍ରଣାଳୟ, ଭାରତ ସରକାର) ଦ୍ୱାରା ଏକ ପ୍ରୟାସ",
        "contributionMetrics": "ଯୋଗଦାନ ମେଟ୍ରିକ୍ସ",
        "contributionDescription": "ସମଗ୍ର ଦେଶର କଣ୍ଟେଣ୍ଟ ଯୋଗଦାନ ଡାଟା",
        "dikshaContentContribution": "Diksha କଣ୍ଟେଣ୍ଟ ଯୋଗଦାନ",
        "contributors": "ସହଯୋଗୀ",
        "contributions": "ଯୋଗଦାନ",
        "courseMetrics": "କୋର୍ସ ମେଟ୍ରିକ୍ସ",
        "courseMetricsDescription": "ସମଗ୍ର ଦେଶରୁ କୋର୍ସ ଡାଟା",
        "courseUsage": "DIKSHA କୋର୍ସ ଏବଂ ବ୍ୟବହାର",
        "courses": "କୋର୍ସ",
        "Enrolments": "ନାମାଙ୍କନ",
        "completions": "କୋର୍ସ ସମାପ୍ତି",
        "certificatesIssued": "ଜାରୀ ହୋଇଥିବା ସାର୍ଟିଫିକେଟ୍",
        "Datasets": "ଡାଟାସେଟ୍",
        "contributionsDiksha": "DIKSHA କୁ କରାଯାଇଥିବା କଣ୍ଟେଣ୍ଟ ଯୋଗଦାନ",
        "contributorsDiksha": "ସହଯୋଗୀ ସଂଖ୍ୟା",
        "EnrolmentsDiksha": "DIKSHA ରେ ମୋଟ ନାମାଙ୍କନ",
        "CompletionsDiksha": "DIKSHA ରେ ମୋଟ କୋର୍ସ ସମାପ୍ତି",
        "coursesDiksha": "DIKSHA ରେ କୋର୍ସ ସଂଖ୍ୟା",
        "DikshaDatasets": "DIKSHA ପବ୍ଲିକ୍ ଡାଟାସେଟ୍",
        "DatasetsDescription": "DIKSHA, ଏକ ପ୍ଲାଟଫର୍ମ ଯାହା ଶିକ୍ଷା ପାଇଁ ଡିଜିଟାଲ୍ ଭିତ୍ତିଭୂମି ସକ୍ଷମ କରେ, ସମଗ୍ର ଦେଶରେ ବିଭିନ୍ନ ପ୍ରକାରର ଶିକ୍ଷଣ ଏବଂ ଶିକ୍ଷାଦାନ ଆବଶ୍ୟକତାକୁ ସମର୍ଥନ କରେ । ଏହିପରି ସୃଷ୍ଟି ହୋଇଥିବା DIKSHA ବ୍ୟବହାର ଡାଟା ସର୍ବସାଧାରଣ ହେବା ପାଇଁ ଉଦ୍ଦିଷ୍ଟ ଅଟେ, ଏବଂ ପବ୍ଲିକ୍ ଡାସବୋର୍ଡ ଏବଂ ଡାଟାସେଟ ମାଧ୍ୟମରେ ସମସ୍ତଙ୍କ ପାଇଁ ଉପଲବ୍ଧ ଅଟେ । ଏହି ପେଜ୍ ରେ ବର୍ତ୍ତମାନ ପର୍ଯ୍ୟନ୍ତ ଉପଲବ୍ଧ ସମସ୍ତ DIKSHA ଡାଟାସେଟର ଏକ ତାଲିକା ରହିଛି - ପ୍ରତ୍ୟେକ ଡାଟାସେଟ ବିଷୟରେ ଅଧିକ ବିବରଣୀ ଡାଟାସେଟର ବିବରଣୀ ପେଜ୍ ରୁ ମିଳିପାରିବ ।",
        "csv": "CSV",
        "json": "JSON",
        "usefulLinks": "ଉପଯୋଗୀ ଲିଙ୍କଗୁଡ଼ିକ",
        "dictionaryheading": "ସମଗ୍ର ଦେଶରୁ କଣ୍ଟେଣ୍ଟ ଯୋଗଦାନ",
        "datadictionary": "ଡାଟା ଡିକ୍ସିନାରି",
        "Details": "ବିବରଣୀ",
        "usagemetrics": "ବ୍ୟବହାର ମେଟ୍ରିକ୍ସ",
        "contributionmetrics": "ଯୋଗଦାନ ମେଟ୍ରିକ୍ସ",
        "coursemetrics": "କୋର୍ସ ମେଟ୍ରିକ୍ସ",
        "board-ncert-description": "NCERT (ଜାତୀୟ ଶିକ୍ଷା ଗବେଷଣା ଓ ପ୍ରଶିକ୍ଷଣ ପରିଷଦ) ଦ୍ୱାରା ପବ୍ଲିସ୍ ହୋଇଥିବା କଣ୍ଟେଣ୍ଟ ଦେଖନ୍ତୁ",
        "board-cbse-description": "CBSE (କେନ୍ଦ୍ରୀୟ ମାଧ୍ୟମିକ ଶିକ୍ଷା ବୋର୍ଡ) ଦ୍ୱାରା ପବ୍ଲିସ୍ ହୋଇଥିବା କଣ୍ଟେଣ୍ଟ ଦେଖନ୍ତୁ",
        "board-nios-description": "NIOS (ରାଷ୍ଟ୍ରୀୟ ମୁକ୍ତ ବିଦ୍ୟାଳୟ ଶିକ୍ଷା ପ୍ରତିଷ୍ଠାନ) ଦ୍ୱାରା ପବ୍ଲିସ୍ ହୋଇଥିବା କଣ୍ଟେଣ୍ଟ ଦେଖନ୍ତୁ",
        "board-btntitle": "ଦେଖନ୍ତୁ"
    },
    "pa": {
        "language": "ਪੰਜਾਬੀ",
        "diksha": "DIKSHA",
        "govofIndia": "ਭਾਰਤ ਸਰਕਾਰ",
        "dikshamoto": "ਗਿਆਨ ਸਾਂਝਾ ਕਰਨ ਲਈ ਡਿਜੀਟਲ ਬੁਨਿਆਦੀ ਢਾਂਚਾ",
        "dikshaDescription": "ਨੈਸ਼ਨਲ ਕੌਂਸਲ ਆਫ਼ ਐਜੂਕੇਸ਼ਨਲ ਰਿਸਰਚ ਐਂਡ ਟ੍ਰੇਨਿੰਗ\n(ਭਾਰਤ ਸਰਕਾਰ ਦੇ ਸਿੱਖਿਆ ਮੰਤਰਾਲੇ) ਦੀ ਇੱਕ ਪਹਿਲ",
        "btnExploreDiksha": "DIKSHA ਦੀ ਪੜਚੋਲ ਕਰੋ",
        "explore": "ਪੜਚੋਲ ਕਰੋ",
        "ExploreDikshaContent": "DIKSHA ਦੀ ਖੁੱਲੀ ਡਿਜੀਟਲ ਕੰਟੇਂਟ ਦੀ ਦੁਨੀਆ ਦੀ ਪੜਚੋਲ ਕਰੋ",
        "stateboard": "ਰਾਜ / ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼",
        "stateboardDescription": "22+ ਰਾਜਾਂ ਅਤੇ ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ ਦੁਆਰਾ ਪ੍ਰਕਾਸ਼ਿਤ\nਕੰਟੇਂਟ ਦੀ ਪੜਚੋਲ ਕਰੋ",
        "about": "ਬਾਰੇ",
        "home": "ਘਰ",
        "dashboard": "ਡੈਸ਼ਬੋਰਡ",
        "getapp": "ਐਪ ਪ੍ਰਾਪਤ ਕਰੋ",
        "contribute": "ਯੋਗਦਾਨ ਕਰੋ",
        "aboutdiksha": "DIKSHA ਬਾਰੇ",
        "aboutdikshacontent": "DIKSHA (ਡਿਜੀਟਲ ਬੁਨਿਆਦੀ ਢਾਂਚੇ ਲਈ ਗਿਆਨ ਸਾਂਝਾ ਕਰਨਾ) ਸਕੂਲ \nਸਿੱਖਿਆ ਲਈ ਰਾਸ਼ਟਰੀ ਮੰਚ ਹੈ, ਜੋ ਕਿ ਰਾਸ਼ਟਰੀ ਸਿੱਖਿਆ ਖੋਜ ਅਤੇ \nਸਿਖਲਾਈ ਪ੍ਰੀਸ਼ਦ (NCERT), ਸਿੱਖਿਆ ਮੰਤਰਾਲੇ ਦੀ ਇੱਕ ਪਹਿਲ ਹੈ। \nDIKSHA ਦਾ ਵਿਕਾਸ ਮਨੁੱਖੀ ਸਰੋਤ ਵਿਕਾਸ ਮੰਤਰੀ ਸ੍ਰੀ ਪ੍ਰਕਾਸ਼ ਜਾਵੜੇਕਰ \nਦੁਆਰਾ ਸਾਬਕਾ ਮਾਨਵ ਸੰਸਾਧਨ ਵਿਕਾਸ ਮੰਤਰੀ ਦੁਆਰਾ ਜਾਰੀ ਕੀਤੇ ਗਏ \nਰਾਸ਼ਟਰੀ ਅਧਿਆਪਕ ਪਲੇਟਫਾਰਮ ਲਈ ਰਣਨੀਤੀ ਅਤੇ ਪਹੁੰਚ ਪੱਤਰ ਦੇ \nਅਨੁਸਾਰ ਖੁੱਲੇ ਢਾਂਚੇ, ਖੁੱਲੀ ਪਹੁੰਚ, ਖੁੱਲੇ ਲਾਇਸੈਂਸ ਦੀ ਵਿਭਿੰਨਤਾ, ਚੋਣ ਅਤੇ \nਖੁਦਮੁਖਤਿਆਰੀ ਦੇ ਮੂਲ ਸਿਧਾਂਤਾਂ ਦੇ ਅਧਾਰ ’ਤੇ ਤਿਆਰ ਮਈ, 2017 ਵਿੱਚ \nਕੀਤਾ ਗਿਆ ਸੀ। DIKSHA ਖ਼ੁਦ 5 ਸਤੰਬਰ, 2017 ਨੂੰ ਭਾਰਤ ਦੇ \nਉਪ ਰਾਸ਼ਟਰਪਤੀ ਦੁਆਰਾ ਅਰੰਭ ਕੀਤੀ ਗਈ ਸੀ ਅਤੇ ਉਦੋਂ ਤੋਂ \n35 ਰਾਜਾਂ/ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ਾਂ ਦੇ ਨਾਲ ਨਾਲ CBSE ਅਤੇ NCERT\nਅਤੇ ਕਰੋੜਾਂ ਸਿਖਿਆਰਥੀਆਂ ਅਤੇ ਅਧਿਆਪਕਾਂ ਦੁਆਰਾ ਇਸਨੂੰ\nਅਪਣਾਇਆ ਗਿਆ ਹੈ।",
        "aboutdikshacontent2": "DIKSHA ਓਪਨ ਸੋਰਸ ਟੈਕਨਾਲੌਜੀ \'ਤੇ ਬਣੀ ਹੈ, ਜੋ ਭਾਰਤ ਵਿਚ ਬਣੀ ਹੈ \nਅਤੇ ਭਾਰਤ ਲਈ ਬਣਾਈ ਗਈ ਹੈ, ਜਿਸ ਵਿਚ ਇੰਟਰਨੈੱਟ ਸਕੇਲ \nਤਕਨਾਲੋਜੀਆਂ ਸ਼ਾਮਲ ਹਨ ਅਤੇ ਸਿੱਖਿਆ ਅਤੇ ਸਿਖਲਾਈ ਦੇ ਕਈ \nਉਪਯੋਗ-ਕੇਸਾਂ ਅਤੇ ਹੱਲਾਂ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦੀ ਹੈ। ਸਿੱਖਣ ਲਈ \nਡਿਜੀਟਲ ਬੁਨਿਆਦੀ ਢਾਂਚਾ ਕਈ ਭਾਸ਼ਾਵਾਂ ਅਤੇ ਹੱਲਾਂ ਦਾ ਸਮਰਥਨ \nਕਰਨ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤਾ ਗਿਆ ਹੈ ਅਤੇ ਪਲੇਟਫਾਰਮਸ ਅਤੇ \nਹੱਲਾਂ ਦੇ ਵਿਕਾਸ ਲਈ ਬਲਾਕ ਬਣਾਉਣ ਲਈ 100 ਤੋਂ ਵੱਧ ਮਾਈਕਰੋ \nਸੇਵਾਵਾਂ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।\n\nDIKSHA, ਜਿਵੇਂ ਕਿ ਪਹਿਲਾਂ ਦੱਸਿਆ ਗਿਆ ਹੈ, ਸਾਰੇ ਰਾਜਾਂ ਅਤੇ \nਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ਾਂ ਦੀ ਵਰਤੋਂ ਲਈ ਉਪਲਬਧ ਹੈ। ਹਰੇਕ ਰਾਜ/ਕੇਂਦਰ \nਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ DIKSHA ਪਲੇਟਫਾਰਮ ਦਾ ਆਪਣੇ ਢੰਗ ਨਾਲ ਲਾਭ \nਲੈਂਦਾ ਹੈ, ਕਿਉਂਕਿ ਇਸ ਵਿੱਚ ਆਪਣੇ ਅਧਿਆਪਕਾਂ ਅਤੇ ਸਿਖਿਆਰਥੀਆਂ \nਲਈ ਪ੍ਰੋਗਰਾਮ ਤਿਆਰ ਕਰਨ ਅਤੇ ਚਲਾਉਣ ਲਈ ਪਲੇਟਫਾਰਮ ਦੀਆਂ \nਵੱਖੋ ਵੱਖਰੀਆਂ ਯੋਗਤਾਵਾਂ ਅਤੇ ਹੱਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਆਜ਼ਾਦੀ ਅਤੇ \nਚੋਣ ਹੁੰਦੀ ਹੈ। DIKSHA ਨੀਤੀਆਂ ਅਤੇ ਸਾਧਨਾਂ ਦੁਆਰਾ ਸਿੱਖਿਆ \nਵਾਤਾਵਰਣ ਪ੍ਰਣਾਲੀ (ਸਿੱਖਿਆ ਸ਼ਾਸਤਰੀ, ਮਾਹਰ, ਸੰਸਥਾਵਾਂ, \nਸੰਸਥਾਵਾਂ - ਸਰਕਾਰ, ਖੁਦਮੁਖਤਿਆਰੀ ਸੰਸਥਾਵਾਂ, ਗ਼ੈਰ-ਸਰਕਾਰੀ ਅਤੇ ਨਿੱਜੀ \nਸੰਸਥਾਵਾਂ) ਦੇਸ਼ ਦੇ ਪੱਧਰ \'ਤੇ ਸਿਖਲਾਈ ਦੇ ਟੀਚਿਆਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ \nਲਈ ਇਕ ਸਾਂਝੇ ਪਲੇਟਫਾਰਮ ਵਿਚ ਹਿੱਸਾ ਲੈਣ, ਯੋਗਦਾਨ ਪਾਉਣ ਅਤੇ \nਇਸ ਦਾ ਲਾਭ ਉਠਾਉਣ ਲਈ ਯੋਗ ਬਣਾਉਂਦੀਆਂ ਹਨ।\n\nDIKSHA ਨੂੰ ਦੇਸ਼ ਭਰ ਵਿੱਚ ਸਿੱਖਿਅਕਾਂ ਅਤੇ ਅਧਿਆਪਕਾਂ ਦੁਆਰਾ \nਇਸਤੇਮਾਲ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ ਅਤੇ ਇਸ ਵੇਲੇ ਭਾਰਤ ਵਿੱਚ 18+ \nਭਾਸ਼ਾਵਾਂ ਅਤੇ NCERT, CBSE ਅਤੇ SCERTs ਦੇ ਵੱਖ ਵੱਖ \nਪਾਠਕ੍ਰਮਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ। ਪਲੇਟਫਾਰਮ ਦਾ ਲਾਭ ਉਚਿਤ ਅਤੇ \nਸਕੂਲੀ ਸਿੱਖਿਆ, ਬੁਨਿਆਦੀ ਸਿਖਲਾਈ ਪ੍ਰੋਗਰਾਮਾਂ ਅਤੇ ਸਿੱਖਣ ਵਾਲਿਆਂ \nਅਤੇ ਅਧਿਆਪਕਾਂ ਦੇ ਵੱਖਰੇ-ਵੱਖਰੇ-ਸਮਰਥਿਤ ਕਮਿਊਨਿਟੀਆਂ ਲਈ \nਵੱਖਰੀ ਸਿਖਲਾਈ ਦੇ ਸਮਰਥਨ ਲਈ ਬਣਾਇਆ ਜਾ ਰਿਹਾ ਹੈ।\n\nਕੋਵਿਡ -19 ਨਾਲ ਸਬੰਧਤ ਸਕੂਲ ਸਿੱਖਿਆ ਵਿੱਚ ਵਿਘਨ ਦੇ ਸੰਦਰਭ \nਵਿੱਚ, DIKSHA ਸਾਰੇ ਰਾਜਾਂ/ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ਾਂ ਲਈ ਨਵੀਨ ਅਵਸਥਾ \nਦੇ ਪ੍ਰੋਗਰਾਮਾਂ ਰਾਹੀਂ ਘਰ ਵਿੱਚ ਸਿੱਖਣ/ਸਿਖਿਆ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦਾ ਹੈ; \nਇਸ ਲਈ ਪੂਰੇ ਭਾਰਤ ਵਿਚ ਅਧਿਆਪਕਾਂ ਅਤੇ ਸਿੱਖਿਅਕਾਂ ਦੇ ਲਾਭ ਲਈ \nਟੈਕਨੋਲੋਜੀ ਦੀ ਵਰਤੋਂ ਵਿਚ ਛਾਲ ਮਾਰੀ ਜਾ ਰਹੀ ਹੈ।",
        "aboutdikshanewcontent": "DIKSHA (ਗਿਆਨ ਸਾਂਝਾ ਕਰਨ ਲਈ ਡਿਜੀਟਲ ਬੁਨਿਆਦੀ ਢਾਂਚਾ) ਭਾਰਤ ਸਰਕਾਰ ਦੇ ਸਿੱਖਿਆ ਮੰਤਰਾਲੇ (MoE), ਦੀ ਸਰਪ੍ਰਸਤੀ ਹੇਠ, ਸਕੂਲੀ ਸਿੱਖਿਆ ਲਈ ਇੱਕ ਰਾਸ਼ਟਰੀ ਮੰਚ ਹੈ, ਜੋ ਕਿ ਰਾਸ਼ਟਰੀ ਸਿੱਖਿਆ ਖੋਜ ਅਤੇ ਸਿਖਲਾਈ ਪ੍ਰੀਸ਼ਦ (NCERT) ਦੀ ਇੱਕ ਪਹਿਲਕਦਮੀ ਹੈ। ਭਾਰਤ ਦੇ ਮਾਨਯੋਗ ਉਪ ਰਾਸ਼ਟਰਪਤੀ - ਸ਼੍ਰੀ ਐਮ. ਵੈਂਕਈਆ ਨਾਇਡੂ ਦੁਆਰਾ ਸਾਲ 2017 ਵਿੱਚ ਸ਼ੁਰੂ ਕੀਤੀ ਗਈ, DIKSHA ਨੂੰ CBSE ਸਮੇਤ ਲਗਭਗ ਸਾਰੇ ਰਾਜਾਂ, ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ਾਂ, ਕੇਂਦਰੀ ਖੁਦਮੁਖਤਿਆਰ ਸੰਸਥਾਵਾਂ/ਬੋਰਡਾਂ ਦੁਆਰਾ ਅਪਣਾਇਆ ਗਿਆ ਹੈ। DIKSHA ਨੂੰ ਸਤੰਬਰ, 2017 ਵਿੱਚ ਮਾਨਯੋਗ ਮਾਨਵ ਸੰਸਾਧਨ ਵਿਕਾਸ ਮੰਤਰੀ, ਸ਼੍ਰੀ ਪ੍ਰਕਾਸ਼ ਜਾਵੇਦਕਰ ਦੁਆਰਾ ਜਾਰੀ ਰਾਸ਼ਟਰੀ ਅਧਿਆਪਕ ਪਲੇਟਫਾਰਮ ਲਈ ਰਣਨੀਤੀ ਅਤੇ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਪੇਪਰ ਦੇ ਆਧਾਰ ਤੇ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ। DIKSHA ਦੀ ਵਰਤੋਂ ਦੇਸ਼ ਭਰ ਦੇ ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਅਧਿਆਪਕਾਂ ਦੁਆਰਾ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ ਅਤੇ ਵਰਤਮਾਨ ਵਿੱਚ 36 ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਉਪਲੱਬਧ ਹੈ। ਹਰੇਕ ਰਾਜ / ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ DIKSHA ਮੰਚ ਦਾ ਆਪਣੇ ਤਰੀਕੇ ਨਾਲ ਫਾਇਦਾ ਉਠਾਉਂਦਾ ਹੈ ਕਿਉਂਕਿ ਇਸ ਕੋਲ ਅਧਿਆਪਕਾਂ, ਵਿਦਵਾਨਾਂ ਅਤੇ ਪ੍ਰਸ਼ਾਸਕਾਂ ਲਈ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਡਿਜ਼ਾਈਨ ਕਰਨ ਅਤੇ ਚਲਾਉਣ ਲਈ ਮੰਚ ਦੀਆਂ ਵੱਖ-ਵੱਖ ਸਮਰੱਥਾਵਾਂ ਅਤੇ ਹੱਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਅਜ਼ਾਦੀ ਅਤੇ ਵਿਕਲਪ ਹੈ। DIKSHA ਦੀਆਂ ਨੀਤੀਆਂ ਅਤੇ ਸਾਧਨ ਸਿੱਖਿਅਕਾਂ, ਮਾਹਰਾਂ, ਸੰਸਥਾਵਾਂ, ਸਰਕਾਰੀ ਅਤੇ ਖੁਦਮੁਖਤਿਆਰ ਸੰਸਥਾਵਾਂ, ਗੈਰ-ਸਰਕਾਰੀ ਅਤੇ ਨਿੱਜੀ ਸੰਸਥਾਵਾਂ ਨੂੰ ਦੇਸ਼ ਲਈ ਸਿੱਖਿਆ ਟੀਚਿਆਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਸਾਂਝੇ ਮੰਚ ਤੇ ਹਿੱਸਾ ਲੈਣ, ਯੋਗਦਾਨ ਪਾਉਣ ਅਤੇ ਲਾਭ ਲੈਣ ਦੇ ਯੋਗ ਬਣਾਉਂਦੇ ਹਨ। ਭਾਰਤ ਸਰਕਾਰ ਦੀ PMeVidya ਪਹਿਲਕਦਮੀ ਦੇ ਤਹਿਤ, ਜਿਸ ਨੂੰ ਇੱਕ ਸਵੈ-ਨਿਰਭਰ ਭਾਰਤ ਦੇ ਹਿੱਸੇ ਵਜੋਂ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ, DIKSHA ਨੂੰ 'ਇੱਕ ਰਾਸ਼ਟਰ, ਇੱਕ ਡਿਜੀਟਲ ਮੰਚ ਵਜੋਂ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।\nNCERT ਪਾਠ ਪੁਸਤਕਾਂ CC BY NC-ND ਅਧੀਨ ਲਾਇਸੰਸਸ਼ੁਦਾ ਹਨ ਅਤੇ ਸਾਰੇ ਸਰੋਤ CC BY NC-SA ਦੇ ਅਧੀਨ ਲਾਇਸੰਸਸ਼ੁਦਾ ਹਨ।",
        "aboutdikshanewcontent2": "DIKSHA (ਗਿਆਨ ਸਾਂਝਾ ਕਰਨ ਲਈ ਡਿਜੀਟਲ ਬੁਨਿਆਦੀ ਢਾਂਚਾ) ਭਾਰਤ ਸਰਕਾਰ ਦੇ ਸਿੱਖਿਆ ਮੰਤਰਾਲੇ (MoE), ਦੀ ਸਰਪ੍ਰਸਤੀ ਹੇਠ, ਸਕੂਲੀ ਸਿੱਖਿਆ ਲਈ ਇੱਕ ਰਾਸ਼ਟਰੀ ਮੰਚ ਹੈ, ਜੋ ਕਿ ਰਾਸ਼ਟਰੀ ਸਿੱਖਿਆ ਖੋਜ ਅਤੇ ਸਿਖਲਾਈ ਪ੍ਰੀਸ਼ਦ (NCERT) ਦੀ ਇੱਕ ਪਹਿਲਕਦਮੀ ਹੈ। ਭਾਰਤ ਦੇ ਮਾਨਯੋਗ ਉਪ ਰਾਸ਼ਟਰਪਤੀ - ਸ਼੍ਰੀ ਐਮ. ਵੈਂਕਈਆ ਨਾਇਡੂ ਦੁਆਰਾ ਸਾਲ 2017 ਵਿੱਚ ਸ਼ੁਰੂ ਕੀਤੀ ਗਈ, DIKSHA ਨੂੰ CBSE ਸਮੇਤ ਲਗਭਗ ਸਾਰੇ ਰਾਜਾਂ, ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ਾਂ, ਕੇਂਦਰੀ ਖੁਦਮੁਖਤਿਆਰ ਸੰਸਥਾਵਾਂ/ਬੋਰਡਾਂ ਦੁਆਰਾ ਅਪਣਾਇਆ ਗਿਆ ਹੈ। DIKSHA ਨੂੰ ਸਤੰਬਰ, 2017 ਵਿੱਚ ਮਾਨਯੋਗ ਮਾਨਵ ਸੰਸਾਧਨ ਵਿਕਾਸ ਮੰਤਰੀ, ਸ਼੍ਰੀ ਪ੍ਰਕਾਸ਼ ਜਾਵੇਦਕਰ ਦੁਆਰਾ ਜਾਰੀ ਰਾਸ਼ਟਰੀ ਅਧਿਆਪਕ ਪਲੇਟਫਾਰਮ ਲਈ ਰਣਨੀਤੀ ਅਤੇ ਦ੍ਰਿਸ਼ਟੀਕੋਣ ਪੇਪਰ ਦੇ ਆਧਾਰ ਤੇ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ। DIKSHA ਦੀ ਵਰਤੋਂ ਦੇਸ਼ ਭਰ ਦੇ ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਅਧਿਆਪਕਾਂ ਦੁਆਰਾ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ ਅਤੇ ਵਰਤਮਾਨ ਵਿੱਚ 36 ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਉਪਲੱਬਧ ਹੈ। ਹਰੇਕ ਰਾਜ / ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ DIKSHA ਮੰਚ ਦਾ ਆਪਣੇ ਤਰੀਕੇ ਨਾਲ ਫਾਇਦਾ ਉਠਾਉਂਦਾ ਹੈ ਕਿਉਂਕਿ ਇਸ ਕੋਲ ਅਧਿਆਪਕਾਂ, ਵਿਦਵਾਨਾਂ ਅਤੇ ਪ੍ਰਸ਼ਾਸਕਾਂ ਲਈ ਪ੍ਰੋਗਰਾਮਾਂ ਨੂੰ ਡਿਜ਼ਾਈਨ ਕਰਨ ਅਤੇ ਚਲਾਉਣ ਲਈ ਮੰਚ ਦੀਆਂ ਵੱਖ-ਵੱਖ ਸਮਰੱਥਾਵਾਂ ਅਤੇ ਹੱਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਦੀ ਅਜ਼ਾਦੀ ਅਤੇ ਵਿਕਲਪ ਹੈ। DIKSHA ਦੀਆਂ ਨੀਤੀਆਂ ਅਤੇ ਸਾਧਨ ਸਿੱਖਿਅਕਾਂ, ਮਾਹਰਾਂ, ਸੰਸਥਾਵਾਂ, ਸਰਕਾਰੀ ਅਤੇ ਖੁਦਮੁਖਤਿਆਰ ਸੰਸਥਾਵਾਂ, ਗੈਰ-ਸਰਕਾਰੀ ਅਤੇ ਨਿੱਜੀ ਸੰਸਥਾਵਾਂ ਨੂੰ ਦੇਸ਼ ਲਈ ਸਿੱਖਿਆ ਟੀਚਿਆਂ ਨੂੰ ਪ੍ਰਾਪਤ ਕਰਨ ਲਈ ਸਾਂਝੇ ਮੰਚ ਤੇ ਹਿੱਸਾ ਲੈਣ, ਯੋਗਦਾਨ ਪਾਉਣ ਅਤੇ ਲਾਭ ਲੈਣ ਦੇ ਯੋਗ ਬਣਾਉਂਦੇ ਹਨ। ਭਾਰਤ ਸਰਕਾਰ ਦੀ PMeVidya ਪਹਿਲਕਦਮੀ ਦੇ ਤਹਿਤ, ਜਿਸ ਨੂੰ ਇੱਕ ਸਵੈ-ਨਿਰਭਰ ਭਾਰਤ ਦੇ ਹਿੱਸੇ ਵਜੋਂ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ, DIKSHA ਨੂੰ 'ਇੱਕ ਰਾਸ਼ਟਰ, ਇੱਕ ਡਿਜੀਟਲ ਮੰਚ ਵਜੋਂ ਘੋਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।\n\nਭਾਰਤ ਦੇ ਮਾਣਯੋਗ ਪ੍ਰਧਾਨ ਮੰਤਰੀ ਨੇ 29 ਜੁਲਾਈ 2021 ਨੂੰ NDEAR (ਨੈਸ਼ਨਲ ਡਿਜੀਟਲ ਐਜੂਕੇਸ਼ਨ ਆਰਕੀਟੈਕਚਰ) ਦੀ ਸ਼ੁਰੂਆਤ ਕੀਤੀ ਜੋ ਰਾਜਾਂ/ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ਾਂ ਦੁਆਰਾ ਸੰਘੀ ਅਤੇ ਅੰਤਰ-ਕਾਰਜਸ਼ੀਲ ਪ੍ਰਣਾਲੀਆਂ ਦੇ ਵਿਕਾਸ ਲਈ ਬਿਲਡਿੰਗ ਬਲਾਕ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। DIKSHA ਦੇ ਮੁੱਖ ਬਿਲਡਿੰਗ ਬਲਾਕਾਂ ਵਿੱਚ NDEAR ਦੇ ਜ਼ਿਆਦਾਤਰ ਬਿਲਡਿੰਗ ਬਲਾਕ ਸ਼ਾਮਲ ਹਨ, ਕੁਝ ਸਫਲ NDEAR ਵਰਤੋਂ-ਕੇਸਾਂ ਨੂੰ ਸਮਰੱਥ ਕਰਦੇ ਹਨ ਜਿਵੇਂ ਕਿ: ETB, ਆਨਲਾਈਨ ਕੋਰਸ, ਸਮੱਗਰੀ ਸੋਰਸਿੰਗ, ਇੰਟਰਐਕਟਿਵ ਕਵਿਜ਼, ਪ੍ਰਸ਼ਨ ਬੈਂਕ, ਚੈਟਬੋਟ, ਵਿਸ਼ਲੇਸ਼ਣ ਅਤੇ ਡੈਸ਼ਬੋਰਡ। ਕੋਵਿਡ -19 ਮਹਾਂਮਾਰੀ ਦੇ ਸਮੇਂ ਵਿੱਚ, ਪਲੇਟਫਾਰਮ ਦੀ ਦੇਸ਼ ਭਰ ਵਿੱਚ ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਅਧਿਆਪਕਾਂ ਦੁਆਰਾ ਵਰਤੋਂ ਵਿੱਚ ਬੇਮਿਸਾਲ ਵਾਧਾ ਦੇਖਿਆ ਗਿਆ ਹੈ।\n\nਅਧਿਆਪਨ-ਸਿਖਲਾਈ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਨ ਲਈ ਡਿਜੀਟਲ ਸਮੱਗਰੀ ਲਈ, NCERT/CBSE/ਰਾਜਾਂ ਦੀਆਂ ਵੱਖ-ਵੱਖ ਸਮੱਗਰੀ ਲੋੜਾਂ ਦੇ ਲਈ ਵਿਦਿਆਦਾਨ ਦੇ ਤਹਿਤ ਸਕੂਲਾਂ/ਵਿਅਕਤੀਗਤ ਅਧਿਆਪਕਾਂ, ਸਮੱਗਰੀ ਭਾਗੀਦਾਰਾਂ, NGOs, CSR ਦੇ ਤਹਿਤ ਕਾਰਪੋਰੇਟਸ ਦੁਆਰਾ ਵਿਭਿੰਨ ਸਰੋਤਾਂ ਦਾ ਯੋਗਦਾਨ ਪਾਇਆ ਗਿਆ।\n\nਵਿਸ਼ੇਸ਼ ਲੋੜਾਂ ਵਾਲੇ ਬੱਚਿਆਂ (CWSN) ਲਈ ਪੜ੍ਹਾਈ ਦੇ ਅਧਿਆਪਨ ਵਿੱਚ ਸਹਾਇਤਾ ਕਰਨ ਲਈ DIKSHA  ਤੇ ਵੱਡੀ ਗਿਣਤੀ ਵਿੱਚ ਆਡੀਓ ਕਿਤਾਬਾਂ, ISL (Indian sign LANGUAGE) (ਭਾਰਤੀ ਸੈਨਤ ਭਾਸ਼ਾ) ਵੀਡੀਓ ਅਤੇ ਸ਼ਬਦਕੋਸ਼ ਉਪਲੱਬਧ ਕਰਵਾਏ ਗਏ ਹਨ।\n\nਮਹਾਂਮਾਰੀ ਦੇ ਦੌਰਾਨ, DIKSHA ਦੁਆਰਾ ਪ੍ਰਾਇਮਰੀ ਮਿਆਰ ਨਿਸ਼ਠਾ 1.0 (ਸਕੂਲ ਮੁਖੀਆਂ ਅਤੇ ਅਧਿਆਪਕਾਂ ਦੀ ਵਿਆਪਕ ਤਰੱਕੀ ਲਈ ਰਾਸ਼ਟਰੀ ਪਹਿਲਕਦਮੀ) ਲਈ ਅਧਿਆਪਕ ਦੇ ਪੇਸ਼ੇਵਰ ਵਿਕਾਸ ਪ੍ਰੋਗਰਾਮ ਨੂੰ ਆਨਲਾਈਨ ਲਾਂਚ ਕੀਤਾ ਗਿਆ ਸੀ। ਨਿਸ਼ਠਾ 2.0 ਅਤੇ 3.0 ਸੈਕੰਡਰੀ (Secondary) ਅਤੇ ਬੁਨਿਆਦੀ ਸਾਖਰਤਾ ਅਤੇ ਸੰਖਿਆ ( Foundational Literacy and Numeracy (FLN)  ) ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰਦੇ ਹਨ। ਨਿਸ਼ਠਾ ਤੋਂ ਇਲਾਵਾ, ਬਹੁਤ ਸਾਰੇ ਰਾਜਾਂ/ਕੇਂਦਰ ਸ਼ਾਸਿਤ ਪ੍ਰਦੇਸ਼ਾਂ ਨੇ ਆਪਣੇ ਖੁਦ ਦੇ ਸਮਰੱਥਾ ਨਿਰਮਾਣ ਪ੍ਰੋਗਰਾਮ ਤਿਆਰ ਕੀਤੇ ਹਨ।\n\nNCERT PM eVIDYA DTH-TV ਚੈਨਲਾਂ (ਕਲਾਸ I ਤੋਂ XII, ਇੱਕ ਕਲਾਸ, ਇੱਕ ਚੈਨਲ) ਰਾਹੀਂ ਵਿਦਿਆਰਥੀਆਂ ਨੂੰ 24x7 ਆਧਾਰ 'ਤੇ ਸਮੱਗਰੀ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਇਹ ਚੈਨਲ ਜਮਾਤ ਅਨੁਸਾਰ ਸਮੱਗਰੀ ਪ੍ਰਦਾਨ ਕਰਦੇ ਹਨ ਜੋ ਕਿ QR ਕੋਡ ਦੁਆਰਾ DIKSHA ਨਾਲ ਜੁੜੀ ਹੋਈ ਹੈ। ਇਹ ਪ੍ਰਸਾਰਣ ਸਮੱਗਰੀ DIKSHA ਤੇ ਵੀ ਉਪਲਬਧ ਕਰਵਾਈ ਗਈ ਹੈ। ਇਹ ਸਮੱਗਰੀ ਕਿਸੇ ਵੀ ਸਮੇਂ ਅਤੇ ਕਿਤੇ ਵੀ ਪਹੁੰਚਯੋਗ ਹੈ, ਅਤੇ ਵਰਤੀ ਜਾ ਸਕਦੀ ਹੈ।",
        "aboutdikshaimagetext": "DIKSHA ਤੇ ਹੱਲ - ਵਿਭਿੰਨ, ਲਚਕਦਾਰ ਅਤੇ ਵਿਕਾਸਸ਼ੀਲ",
        "news": "ਖ਼ਬਰਾਂ",
        "resources": "ਸਰੋਤ",
        "events": "ਸਮਾਗਮ",
        "AboutVidyaDaan": "ਵਿਦਿਆਦਾਨ ਬਾਰੇ",
        "AboutVidyaDaanDescription": "ਇਹ ਰਾਸ਼ਟਰੀ ਪ੍ਰੋਗਰਾਮ ਦੇਸ਼, ਖ਼ਾਸ ਕਰਕੇ ਵਿਅਕਤੀਆਂ ਅਤੇ ਸੰਗਠਨਾਂ ਨੂੰ \nਸਿਖਿਆ ਡੋਮੇਨ ਵਿਚ ਈ-ਸਿਖਲਾਈ ਦੇ ਸਰੋਤਾਂ ਵਿਚ ਯੋਗਦਾਨ ਪਾਉਣ ਲਈ \nਸੱਦਾ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਇਹ ਸੁਨਿਸ਼ਚਿਤ ਕੀਤਾ ਜਾ ਸਕੇ ਕਿ ਪੂਰੇ ਭਾਰਤ ਵਿਚ \nਸਿਖਲਾਈ ਪ੍ਰਾਪਤ ਕਰਨ ਵਾਲਿਆਂ ਲਈ ਗੁਣਵੱਤਾ ਦੀ ਸਿਖਲਾਈ ਜਾਰੀ ਰਹੇ।",
        "AboutVidyaDaanMoreDescription": "ਵਿਅਕਤੀਆਂ, ਅਧਿਆਪਕਾਂ, ਸਿੱਖਿਆ ਸ਼ਾਸਤਰੀਆਂ, ਵਿਸ਼ੇ ਮਾਹਰਾਂ, ਸਕੂਲਾਂ, \nਸਰਕਾਰੀ ਅਤੇ ਗ਼ੈਰ-ਸਰਕਾਰੀ ਸੰਸਥਾਵਾਂ ਆਦਿ ਦੁਆਰਾ ਆਪਣੇ ਆਪ ਨੂੰ \nਰਜਿਸਟਰ ਕਰਨ ਅਤੇ ਨਾਮਜ਼ਦ ਕਰਨ ਦੇ ਬਾਅਦ ਯੋਗਦਾਨ ਪਾਇਆ ਜਾ \nਸਕਦਾ ਹੈ। - ਅਧਾਰਤ ਵਸਤੂਆਂ, ਪਾਠ ਯੋਜਨਾਵਾਂ ਆਦਿ ਕਿਸੇ ਵੀ ਗ੍ਰੇਡ ਲਈ \n1 ਤੋਂ 12 ਤੱਕ ਅਤੇ ਕਿਸੇ ਵੀ ਵਿਸ਼ੇ ਲਈ ਜਿਵੇਂ ਕਿ ਰਾਜਾਂ/ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ਾਂ \nਦੁਆਰਾ ਉਨ੍ਹਾਂ ਦੇ ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਅਧੀਨ ਨਿਰਧਾਰਤ ਕੀਤੇ ਗਏ ਹਨ। \nਅਜਿਹੇ ਯੋਗਦਾਨਾਂ ਨੂੰ ਕਰੀਏਟਿਵ ਕਾਮਨਜ਼ ਲਾਇਸੈਂਸ ਫਰੇਮਵਰਕ ਦੇ \nਅਧੀਨ ਖੁੱਲਾ-ਲਾਇਸੰਸਸ਼ੁਦਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ ਅਤੇ ਸੰਬੰਧਿਤ ਰਾਜਾਂ ਕੇਂਦਰ \nਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ਾਂ ਅਤੇ CBSE ਦੁਆਰਾ ਤਿਆਰ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ ਅਤੇ \nਉਹ ਯੋਗਦਾਨ ਪਾਉਣ ਵਾਲੇ ਜਿਨ੍ਹਾਂ ਦੇ ਕੰਟੇਂਟ ਨੂੰ ਸਵੀਕਾਰਿਆ ਜਾਂਦਾ ਹੈ ਅਤੇ \nਵਧੇਰੇ ਵਰਤੋਂ ਪਾਈ ਜਾਂਦੀ ਹੈ, ਨੂੰ ਸਹੀ ਢੰਗ ਨਾਲ ਮਾਨਤਾ ਦਿੱਤੀ ਜਾਏਗੀ।",
        "VidyaDaanIntro": "ਮਿਆਰੀ ਸਿਖਲਾਈ ਦੀ ਨਿਰੰਤਰਤਾ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰਨ ਲਈ, ਦੇਸ਼ ਲਈ \nਅਤੇ ਰਾਸ਼ਟਰ ਦੁਆਰਾ ਰਾਸ਼ਟਰ ਦਾ ਇਕ ਪ੍ਰੋਗਰਾਮ",
        "btnParticipate": "ਭਾਗ ਲਓ",
        "VidyaDaanTypes": "ਈ-ਲਰਨਿੰਗ ਸਰੋਤਾਂ ਦੀਆਂ ਕਿਸਮਾਂ ਜਿਨ੍ਹਾਂ ਵਿੱਚ ਤੁਸੀਂ ਯੋਗਦਾਨ ਪਾ ਸਕਦੇ ਹੋ",
        "ExplanationVideos": "ਸਪੱਸ਼ਟੀਕਰਨ ਵੀਡੀਓ",
        "PracticeQuestions": "ਅਭਿਆਸ ਪ੍ਰਸ਼ਨ",
        "TeachingVideos": "ਸਿਖਾਉਣ ਵਾਲੇ ਵੀਡਿਓ",
        "ExperierntialLearningVideos": "ਤਜ਼ਰਬੇਕਾਰ ਸਿਖਲਾਈ ਦੇ ਵੀਡੀਓ",
        "LessonPlans": "ਸਬਕ ਯੋਜਨਾਵਾਂ",
        "readmore": "ਹੋਰ ਪੜ੍ਹੋ",
        "DIKSHAforMobile": "ਮੋਬਾਈਲ ਲਈ ਡਿਕਸ਼ਾ",
        "DIKSHAforMobileDescription": "DIKSHA ਪਲੇਟਫਾਰਮ ਅਧਿਆਪਕਾਂ, ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ\nਮਾਪਿਆਂ ਨੂੰ, ਨਿਰਧਾਰਤ ਸਕੂਲ ਪਾਠਕ੍ਰਮ ਦੇ ਅਨੁਕੂਲ, ਮਨੋਰੰਜਕ ਸਿਖਲਾਈ\nਕੰਟੇਂਟ ਦੀ ਪੇਸ਼ਕਸ਼ ਕਰਦਾ ਹੈ। ਆਪਣੇ ਸਾਰੇ ਪਾਠਾਂ ਦੀ ਅਸਾਨੀ ਨਾਲ ਪਹੁੰਚ\nਲਈ DIKSHA ਐਪ ਨੂੰ ਡਾਊਨਲੋਡ ਕਰੋ ਅਤੇ ਆਪਣੀਆਂ ਪਾਠ ਪੁਸਤਕਾਂ\nਵਿੱਚ QR ਕੋਡ ਸਕੈਨ ਕਰੋ। {ਐਂਡਰਾਇਡ 5.1 ਅਤੇ ਇਸਤੋਂ ਵੱਧ}",
        "DIKSHAforWeb": "ਵੈੱਬ ਲਈ DIKSHA",
        "DIKSHAforWebDescription": "DIKSHA ਲਰਨਿੰਗ ਪੋਰਟਲ ਬਰਾਊਜ਼ਰ ਦੁਆਰਾ DIKSHA ਦੇ ਸਾਰੇ\nਈ-ਸਰੋਤਾਂ ਨੂੰ ਆਨਲਾਈਨ ਪਹੁੰਚ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
        "btnVisitDIKSHAportal": "DIKSHA ਪੋਰਟਲ ’ਤੇ ਜਾਓ",
        "DIKSHAOffline": "ਡੈਸਕਟਾਪ ਐਪ",
        "DIKSHAOfflineDescription": "DIKSHA ਡੈਸਕਟੌਪ ਤੁਹਾਡੇ ਨਿੱਜੀ ਕੰਪਿਊਟਰ ’ਤੇ ਡਾਊਨਲੋਡ ਕੀਤੀਆਂ\nਡਿਜੀਟਲ ਪਾਠ ਪੁਸਤਕਾਂ, ਪ੍ਰਸ਼ਨ ਬੈਂਕ ਅਤੇ ਹੋਰ ਆਫ਼ਲਾਈਨ ਦੀ ਪਹੁੰਚ ਦੀ\nਪੇਸ਼ਕਸ਼ ਕਰਦਾ ਹੈ। {ਵਿੰਡੋਜ਼ ਅਤੇ ਉਬੰਤੂ OS ਲਈ ਉਪਲੱਬਧ}।",
        "comingsoon": "ਆਉਣ ਵਾਲੀ!\'",
        "DataDashboard": "ਡਾਟਾ ਡੈਸ਼ਬੋਰਡ",
        "viewUsagepattern": "ਦੇਸ਼ ਅਤੇ ਸਾਰੇ ਰਾਜਾਂ ਵਿੱਚ ਵਰਤੋਂ ਦੇ ਨਮੂਨੇ ਵੇਖੋ",
        "last7Weeks": "ਕੁੱਲ ਸਿਖਲਾਈ ਸੈਸ਼ਨਾਂ ਲਈ ਪਿਛਲੇ 7 ਹਫ਼ਤਿਆਂ ਦਾ ਡਾਟਾ",
        "lastupdated": "ਆਖਰੀ ਵਾਰ ਅਪਡੇਟ ਕੀਤਾ ਗਿਆ",
        "clickstateut": "ਵਧੇਰੇ ਜਾਣਕਾਰੀ ਲਈ ਰਾਜ/ਕੇਂਦਰ ਸ਼ਾਸਤ ਪ੍ਰਦੇਸ਼ ’ਤੇ ਕਲਿੱਕ ਕਰੋ",
        "representationonly": "ਸਿਰਫ ਪ੍ਰਸਤੁਤੀ ਲਈ ਨਕਸ਼ਾ",
        "usageMetrics": "ਵਰਤੋਂ ਮੈਟ੍ਰਿਕਸ",
        "usageMetricsDescription": "22+ ਸਟੇਟ ਬੋਰਡਾਂ ਦੀ ਅਕਾਦਮਿਕ ਅਤੇ ਗੈਰ ਵਿੱਦਿਅਕ ਕੰਟੇਂਟ ਦੀ\nਪੜਚੋਲ ਕਰੋ",
        "btnViewDashboard": "ਡੈਸ਼ਬੋਰਡ ਵੇਖੋ",
        "open": "ਖੁੱਲਾ",
        "download": "ਡਾਊਨਲੋਡ",
        "DIKSHAUsageTillDate": "DIKSHA ਮੌਜੂਦਾ ਵਰਤੋਂ",
        "LearningLessons": "ਸਿਖਲਾਈ ਸੈਸ਼ਨ",
        "minutes": "ਮਿੰਟਸ",
        "TermsofUse": "ਨਿਯਮ ਅਤੇ ਨੀਤੀਆਂ",
        "needHelp" : "ਮਦਦ ਦੀ ਲੋੜ ਹੈ",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "ਮੁੱਖ ਕੰਟੇਂਟ ਨੂੰ ਛੱਡੋ",
        "sitemap": "ਸਾਈਟ ਦਾ ਨਕਸ਼ਾ",
        "ScreenReaderAccess": "ਪਹੁੰਚਣਯੋਗ ਕੋਨਾ",
        "DIKSHAUpdates": "DIKSHA ਆਪਡੇਟਸ",
        "lastupdatedonresult": "ਹਰ ਹਫ਼ਤੇ ਦੁਪਹਿਰ ਤੋਂ - ਹਫ਼ਤਾਵਾਰੀ ਅਪਡੇਟ ਕੀਤੀ ਰਿਪੋਰਟ",
        "lastupdatedonresultdaily": "ਰਿਪੋਰਟ ਰੋਜ਼ਾਨਾ ਅਪਡੇਟ ਕੀਤੀ",
        "totalDIKSHAusage": "ਮਿੰਟਾਂ ਵਿੱਚ ਕੁੱਲ DIKSHA ਵਰਤੋਂ ਦਾ ਸਮਾਂ",
        "numberLearningActivities": "ਸਿਖਿਆਰਥੀਆਂ ਦੁਆਰਾ DIKSHA ਢਾਂਚੇ ਦੀ ਵਰਤੋਂ ਕਰਦਿਆਂ ਸਿੱਖਣ\nਦੀਆਂ ਗਤੀਵਿਧੀਆਂ ਦੀ ਗਿਣਤੀ",
        "noevents": "ਕੋਈ ਆਗਾਮੀ ਇਵੈਂਟਸ ਉਪਲੱਬਧ ਨਹੀਂ ਹਨ",
        "updateticker1": "ਵਿੱਦਿਆ ਦੀ ਗੁਣਵੱਤਾ ਦੀ ਨਿਰੰਤਰਤਾ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਦੇਸ਼ ਅਤੇ\nਕੌਮ ਵੱਲੋਂ ਰਾਸ਼ਟਰ ਡਾ ਇਕ ਪ੍ਰੋਗਰਾਮ",
        "updateticker2": "ਨੈਸ਼ਨਲ ਕੌਂਸਲ ਫਾਰ ਐਜੂਕੇਸ਼ਨਲ ਰਿਸਰਚ ਐਂਡ ਟ੍ਰੇਨਿੰਗ\n(ਭਾਰਤ ਸਰਕਾਰ ਦੇ ਸਿੱਖਿਆ ਮੰਤਰਾਲੇ) ਦੀ ਇੱਕ ਪਹਿਲ",
        "contributionMetrics": "ਯੋਗਦਾਨ ਮੈਟ੍ਰਿਕਸ",
        "contributionDescription": "ਸਮੁੱਚੇ ਦੇਸ਼ ਵਿਚੋਂ ਕੰਟੇਂਟ ਦੇ ਯੋਗਦਾਨ ਦੇ ਡੇਟਾ",
        "dikshaContentContribution": "Diksha ਕੰਟੇਂਟ ਦਾ ਯੋਗਦਾਨ",
        "contributors": "ਯੋਗਦਾਨ ਪਾਉਣ ਵਾਲੇ",
        "contributions": "ਯੋਗਦਾਨ",
        "courseMetrics": "ਕੋਰਸ ਮੈਟ੍ਰਿਕਸ",
        "courseMetricsDescription": "ਦੇਸ਼ ਭਰ ਦੇ ਕੋਰਸ ਡੇਟਾ",
        "courseUsage": "Diksha ਕੋਰਸ ਅਤੇ ਉਪਯੋਗਤਾ",
        "courses": "ਕੋਰਸ",
        "Enrolments": "ਭਰਤੀ",
        "completions": "ਕੋਰਸ ਸੰਪੂਰਨਤਾ",
        "certificatesIssued": "ਸਰਟੀਫਿਕੇਟ ਜਾਰੀ ਕੀਤੇ ਗਏ",
        "Datasets": "ਡਾਟਾਸੇਟਸ",
        "contributionsDiksha": "DIKSHA ਲਈ ਕੀਤੇ ਕੰਟੇਂਟ ਦੇ ਯੋਗਦਾਨ",
        "contributorsDiksha": "ਯੋਗਦਾਨ ਪਾਉਣ ਵਾਲਿਆਂ ਦੀ ਗਿਣਤੀ",
        "EnrolmentsDiksha": "DIKSHA ਵਿਚ ਕੁਲ ਕੋਰਸ ਦਾਖਲਾ",
        "CompletionsDiksha": "DIKSHA ਵਿਚ ਕੁਲ ਮੁਕੰਮਲ ਕੀਤੇ ਕੋਰਸ",
        "coursesDiksha": "DIKSHA ਵਿੱਚ ਕੋਰਸਾਂ ਦੀ ਗਿਣਤੀ",
        "DikshaDatasets": "DIKSHA ਪਬਲਿਕ ਡਟਸੈੱਟਸ",
        "DatasetsDescription": "DIKSHA, ਇਕ ਅਜਿਹਾ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਸਿਖਲਾਈ ਲਈ ਡਿਜੀਟਲ\nਢਾਂਚੇ ਨੂੰ ਸਮਰੱਥ ਬਣਾਉਂਦਾ ਹੈ, ਦੇਸ਼ ਭਰ ਵਿਚ ਸਿੱਖਣ ਅਤੇ ਸਿਖਾਉਣ ਦੀਆਂ\nਕਈ ਕਿਸਮਾਂ ਦੀਆਂ ਲੋੜਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ। ਇਸ ਤਰ੍ਹਾਂ ਤਿਆਰ ਕੀਤਾ\nDIKSHA ਵਰਤੋਂ ਡੇਟਾ ਜਨਤਕ ਹੋਣ ਦਾ ਅਰਥ ਹੈ, ਅਤੇ ਸਾਰਵਜਨਿਕ\nਡੈਸ਼ਬੋਰਡ ਅਤੇ ਡੇਟਾਸੇਟਾਂ ਦੁਆਰਾ ਪਹੁੰਚਯੋਗ ਹੈ। ਇਸ ਪੇਜ ਵਿਚ ਹੁਣ ਤੱਕ\nਦੇ ਸਾਰੇ DIKSHA ਡੇਟਾਸੇਟਾਂ ਦੀ ਇਕ ਸੂਚੀ ਹੈ - ਹਰੇਕ ਡਾਟਾਸੇਟ ਬਾਰੇ\nਵਧੇਰੇ ਜਾਣਕਾਰੀ ਡੈਟਾਸੇਟ ਦੇ ਵੇਰਵੇ ਪੇਜ ਤੋਂ ਪ੍ਰਾਪਤ ਕੀਤੀ ਜਾ ਸਕਦੀ ਹੈ।",
        "csv": "CSV",
        "json": "JSON",
        "usefulLinks": "ਲਾਭਦਾਇਕ ਲਿੰਕਸ",
        "dictionaryheading": "ਸਮੁੱਚੇ ਦੇਸ਼ ਵਿਚੋਂ ਕੰਟੇਂਟ ਦੇ ਯੋਗਦਾਨ ਦਾ ਡੇਟਾ",
        "datadictionary": "ਡਾਟਾ ਡਿਕਸ਼ਨਰੀ",
        "Details": "ਵੇਰਵਾ",
        "usagemetrics": "ਵਰਤੋਂ ਮੈਟ੍ਰਿਕਸ",
        "contributionmetrics": "ਯੋਗਦਾਨ ਮੈਟ੍ਰਿਕਸ",
        "coursemetrics": "ਕੋਰਸ ਮੈਟ੍ਰਿਕਸ",
        "board-ncert-description": "NCERT (ਨੈਸ਼ਨਲ ਕੌਂਸਲ ਆਫ਼ ਐਜੂਕੇਸ਼ਨਲ ਰਿਸਰਚ ਐਂਡ ਟ੍ਰੇਨਿੰਗ) ਦੁਆਰਾ ਪ੍ਰਕਾਸ਼ਤ ਕੰਟੇਂਟ ਦੀ ਪੜਚੋਲ ਕਰੋ",
        "board-cbse-description": "CBSE (ਕੇਂਦਰੀ ਸੈਕੰਡਰੀ ਸਿੱਖਿਆ ਬੋਰਡ) ਦੁਆਰਾ ਪ੍ਰਕਾਸ਼ਤ ਕੰਟੇਂਟ ਦੀ ਪੜਚੋਲ ਕਰੋ",
        "board-nios-description": "NIOS (ਨੈਸ਼ਨਲ ਇੰਸਟੀਚਿ ਆਫ਼ ਓਪਨ ਸਕੂਲਿੰਗ) ਦੁਆਰਾ ਪ੍ਰਕਾਸ਼ਤ ਕੰਟੇਂਟ ਦੀ ਪੜਚੋਲ ਕਰੋ",
        "board-btntitle": "ਪੜਚੋਲ ਕਰੋ"
    },
    "ta": {
        "language": "தமிழ்",
        "diksha": "தீக்‌ஷா",
        "govofIndia": "இந்திய அரசு",
        "dikshamoto": "டிஜிட்டல் இன்ஃப்ராஸ்ட்ரக்சர் ஃபார் நாலேட்ஜ்  ஷேரிங்",
        "dikshaDescription": "தேசிய கல்வி ஆராய்ச்சி மற்றும் பயிற்சி \nகவுன்சிலின் (கல்வி அமைச்சகம், இந்திய அரசு) \nஒரு முயற்சி",
        "btnExploreDiksha": "தீக்‌ஷாவை ஆராயுங்கள்",
        "explore": "ஆராயுங்கள்",
        "ExploreDikshaContent": "திறந்த டிஜிட்டல் உள்ளடக்கத்தின் தீக்‌ஷாவின் \nஉலகத்தை ஆராயுங்கள்",
        "stateboard": "மாநிலங்கள் / யூ.டி.க்கள்",
        "stateboardDescription": "22+ மாநிலங்கள் மற்றும் யூ.டி.க்களால் \nவெளியிடப்பட்ட உள்ளடக்கத்தை ஆராயுங்கள்",
        "about": "பற்றி",
        "home": "வீடு",
        "dashboard": "முகப்புப்பலகை",
        "getapp": "செயலியை பெறுங்கள்",
        "contribute": "பங்களிப்பு",
        "aboutdiksha": "தீக்‌ஷா பற்றி",
        "aboutdikshacontent": "DIKSHA (Digital Infrastructure for Knowledge Sharing) என்பது பள்ளிக் கல்விக்கான ஒரு தேசிய தளமாகும், இது கல்வி அமைச்சகத்தின் கல்வி ஆராய்ச்சி மற்றும் பயிற்சிக்கான தேசிய கவுன்சிலின் (என்.சி.இ.ஆர்.டி) முன்முயற்சியாகும். முன்னாள் மதிப்பிற்குரிய மனிதவள மேம்பாட்டு அமைச்சர் ஸ்ரீ பிரகாஷ் ஜவ்தேகர் வெளியிட்ட தேசிய ஆசிரியர் தளத்திற்கான மூலோபாயம் மற்றும் அணுகுமுறை தாளில் கோடிட்டுக் காட்டப்பட்டுள்ள திறந்த architecture, திறந்த அணுகல், திறந்த உரிம பன்முகத்தன்மை, தேர்வு மற்றும் சுயாட்சி ஆகியவற்றின் அடிப்படைக் கொள்கைகளின் அடிப்படையில் மே, 2017 தீக்‌ஷா உருவாக்கப்பட்டது. தீக்‌ஷா 2017 ஆம் ஆண்டு செப்டம்பர் 5 ஆம் தேதி மதிப்பிற்குரிய இந்திய துணைத ஜனாதிபதியால் தொடங்கப்பட்டது, அதன் பின்னர் 35 மாநிலங்கள் / யூடி மற்றும் சிபிஎஸ்இ மற்றும் என்சிஇஆர்டி மற்றும் கோடிக்கணக்கான கற்றவர்கள் மற்றும் ஆசிரியர்களால் ஏற்றுக்கொள்ளப்பட்டது.",
        "aboutdikshacontent2": "தீக்‌ஷா திறந்த மூல தொழில்நுட்பத்தில் கட்டப்பட்டுள்ளது, இது இந்தியாவில் தயாரிக்கப்பட்டு இந்தியாவுக்காக தயாரிக்கப்படுகிறது, இது இணைய அளவிலான தொழில்நுட்பங்களை உள்ளடக்கியது மற்றும் கற்பித்தல் மற்றும் கற்றலுக்கான பல பயன்பாட்டு வழக்குகள் மற்றும் தீர்வுகளை செயல்படுத்துகிறது. SUNBIRD எனப்படும் எம்ஐடி உரிமம் பெற்ற திறந்த மூல தொழில்நுட்பத்தைப் பயன்படுத்தி கட்டப்பட்டுள்ளது, தீக்‌ஷா கற்றலுக்கான டிஜிட்டல் உள்கட்டமைப்பு மற்றும் பல மொழிகள் மற்றும் தீர்வுகளை ஆதரிக்கும் வகையில் வடிவமைக்கப்பட்டுள்ளது மற்றும் தளங்கள் மற்றும் தீர்வுகளின் மேம்பாட்டிற்கான கட்டுமானத் தொகுதிகளாக 100 மைக்ரோ சேவைகளை வழங்குகிறது.\n\nதீக்‌ஷா, முன்னர் குறிப்பிட்டபடி, இந்தியாவின் அனைத்து மாநிலங்கள் மற்றும் யூ.டி.க்களின் பயன்பாட்டிற்கு கிடைக்கிறது. ஒவ்வொரு மாநிலமும் / யூ.டி.யும் தீக்‌ஷா தளத்தை அதன் சொந்த வழியில் பயன்படுத்துகின்றன, ஏனெனில் தளத்தின் மாறுபட்ட திறன்களையும் தீர்வுகளையும் தங்கள் ஆசிரியர்கள் மற்றும் கற்போருக்கான திட்டங்களை வடிவமைத்து இயக்குவதற்கு சுதந்திரமும் தேர்வும் உள்ளது. தீக்‌ஷா கொள்கைகள் மற்றும் கருவிகள் கல்வி சுற்றுச்சூழல் அமைப்பு (கல்வியாளர், வல்லுநர்கள், நிறுவனங்கள், நிறுவனங்கள் - அரசு, தன்னாட்சி நிறுவனங்கள், அரசு சாரா மற்றும் தனியார் நிறுவனங்கள்) பங்கேற்க, பங்களிப்பு மற்றும் நாட்டிற்கான கற்றல் இலக்குகளை அடைய ஒரு பொதுவான தளத்தை மேம்படுத்துவதை சாத்தியமாக்குகின்றன. \n\nதீக்‌ஷா நாடு முழுவதும் உள்ள கற்பவர்கள் மற்றும் ஆசிரியர்கள் அணுகலாம் மற்றும் தற்போது 18+ மொழிகளையும், இந்தியா முழுவதும் உள்ள NCERT, CBSE மற்றும் SCERT களின் பல்வேறு பாடத்திட்டங்களையும் ஆதரிக்கிறது. பள்ளி கல்வி, அடித்தள கற்றல் திட்டங்கள் மற்றும் கற்றவர்கள் மற்றும் ஆசிரியர்களின் குறைவான மற்றும் வேறுபட்ட திறன் கொண்ட சமூகங்களுக்கான உள்ளடக்கிய கற்றலை ஆதரிப்பதற்காக இந்த தளம் அந்நியப்படுத்தப்பட்டு உருவாக்கப்பட்டு வருகிறது.\n\nCOVID-19 தொடர்பான பள்ளிக்கல்விக்கு இடையூறு விளைவிக்கும் சூழலில், அனைத்து மாநிலங்களுக்கும் / UT களுக்கும் புதுமையான மாநில திட்டங்கள் மூலம் வீட்டில் கற்றல் / கல்வியை செயல்படுத்துவதை DIKSHA சாத்தியமாக்குகிறது; எனவே இந்தியா முழுவதும் ஆசிரியர்கள் மற்றும் கற்பவர்களின் நலனுக்காக தொழில்நுட்பத்தைப் பயன்படுத்துவதைத் பாய்ச்சுகிறது",
        "aboutdikshanewcontent": "'DIKSHA (டிஜிட்டல் இன்ஃப்ராஸ்ட்ரக்சர் ஃபார் நாலேட்ஜ்  ஷேரிங் )(அறிவு பகிர்வுக்கான டிஜிட்டல் உள்கட்டமைப்பு) என்பது பள்ளிக் கல்விக்கான தேசிய தளமாகும், இது கல்வி அமைச்சகத்தின் (MoE) கீழ் தேசிய கல்வி ஆராய்ச்சி மற்றும் பயிற்சிக்கான (NCERT) முன்முயற்சியால் இயங்கி வருகிறது . இது 2017 இல் மாண்புமிகு துணை ஜனாதிபதி மதிப்புமிகு ஸ்ரீ எம். வெங்கையா நாயுடுஅவர்களால் தொடங்கப்பட்டது.  , DIKSHA  தளமானது கிட்டத்தட்ட இந்தியாவின் அனைத்து மாநிலங்கள், யூனியன் பிரதேசங்கள், CBSE உட்பட மத்திய தன்னாட்சி அமைப்புகள் / வாரியங்களால் என அனைவராலும் ஏற்றுக்கொள்ளப்பட்டுள்ளது. செப்டம்பர், 2017 இல் அப்போதைய மனித வள மேம்பாட்டு அமைச்சர் ஸ்ரீ பிரகாஷ் ஜவடேகர் அவர்களால் வெளியிடப்பட்ட 'தேசிய ஆசிரியர் தளதுக்கான ' உத்திகள்  மற்றும் அணுகுமுறைகளை வரைவாக வெளியிட்டார்கள் அதன் அடிப்படையில் DIKSHA உருவாக்கப்பட்டது. , நாடு முழுவதும் உள்ள மாணவர்கள் மற்றும் ஆசிரியர்களால்  DIKSHA  வை  பயன்படுத்த முடியும், தற்போது இந்த DIKSHA  தளம்  36 இந்திய மொழிகளில் பாட்டபொருள்கள் தயாரிக்க வழிவகை செய்யப்பட்டுள்ளது . ஒவ்வொரு மாநிலமும்/யூனியன் பிரதேசமும் DIKSHA  தளத்தை அவர்கள்  தேவைக்கேற்ப்ப சிறப்பாக பயன்படுத்துகின்றனர் . ஆசிரியர்கள், மாணவர்கள் மற்றும் நிர்வாக அதிகாரிகள்  அனைவரும் தங்கள்  திட்டங்களையும் பாடப்பகுதிகளையும்  வடிவமைத்து பயன்படுத்தும்  பல்வேறு திறன்கள் மற்றும் தீர்வுகளைப் பயன்படுத்துவதற்கான சுதந்திரமும்  உரிமையும் வழங்கப்பட்டுள்ளது . DIKSHA  உரிமம் மற்றும் கருவிகள் கல்வியில் தகவல் தொழில்நுட்பத்தை மிக எளிதாக பயன்படுத்தும் வகையில் வடிவமைக்கப்பட்டுள்ளது .  (கல்வியாளர்கள், வல்லுநர்கள்,  அரசு நிறுவனங்கள்  , தன்னாட்சி பெற்ற நிறுவனங்கள், அரசு சாரா மற்றும் தனியார் நிறுவனங்கள்) என அனைவரும் தேசிய  அளவிலான கற்றல் இலக்குகளை அடைய ஒரு பொதுவான தளத்திள்  பங்களிப்பதற்கும் பயன்படுத்துவதற்கும்   DIKSHA  மூலம் சாத்தியமாக்குகிறது. NCERT பாடப்புத்தகங்கள் CC BY NC-ND இன் கீழ் உரிமம் பெற்றவை மற்றும் அனைத்து ஆதாரங்களும் CC BY NC-SA இன் கீழ் உரிமம் பெற்றவை",
        "aboutdikshanewcontent2": "DIKSHA ஆனது கட்டற்ற மென்பொருள் ( ஓப்பன் சோர்ஸ்) தொழில்நுட்ப முறையில் கட்டமைக்கப்பட்டுள்ளது, இது இந்தியாவில் ,இந்தியாவுக்காக உருவாக்கப்பட்டது, இது இணைய அளவிலான தொழில்நுட்பங்களை உள்ளடக்கியது.  கற்பித்தல் மற்றும் கற்றலுக்கான பல பயன்பாடுகள் மற்றும் தீர்வுகளை செயல்படுத்தும் வகையில் கட்டமைக்கப்பட்டுள்ளது. DIKSHA ஆனது சன்பேர்ட்(Sunbird) எனப்படும் MIT உரிமம் பெற்ற திறந்த மூல தொழில்நுட்பத்தைப் பயன்படுத்தி கட்டமைக்கப்பட்டுள்ளது. இந்த சன்பேர்ட்(Sunbird) எனப்படும் MIT  சேவைகளை பயன்படுத்தி   கற்றல் மற்றும் கற்றல் பிரச்சனைகளுக்கு தீர்வுகளுக்கான டிஜிட்டல் உள்கட்டமைப்பு மற்றும் தளங்கள் மற்றும் தீர்வுகளை உருவாக்குவதற்கான கட்டுமானத் தொகுதிகளாக 100 மைக்ரோ சேவைகளை வழங்குகிறது.\n\nமாண்புமிகு பாரதப் பிரதமர் அவர்கள் 29 ஜூலை 2021 அன்று NDEAR (தேசிய டிஜிட்டல் கல்விக் கட்டிடக்கலை) ஐத் தொடங்கி வைத்தார்கள் . இது மாநிலங்கள்/யூனியன் பிரதேசங்களால் ஒருங்கிணைந்த மற்றும் இயங்கக்கூடிய அமைப்புகளை மேம்படுத்துவதற்கான கட்டுமானத் தொகுதிகளை வழங்குகிறது. DIKSHA இன் முக்கிய கட்டுமானத் தொகுதிகள் NDEAR கட்டுமானத் தொகுதிகளில் பெரும்பாலானவை, NDEAR இன் சில வெற்றிகரமான பயன்பாட்டு நிகழ்வுகளை செயல்படுத்துகின்றன: ஆற்றல்மிக்க தொழில்நுட்பத்தை ஒருங்கிணைத்த  பாடப்புத்தகங்கள், ஆன்லைன் படிப்புகள், பாட்டபொருள்  உருவாக்கம் ,பாடபொருள் முளங்கள்  , ஊடாடும் வினாடி வினாக்கள், கேள்வி வங்கிகள், சாட்பாட், பகுப்பாய்வு மற்றும் டாஷ்போர்டு. COVID-19 தொற்றுநோய்களின் காலங்களில், இந்த தளம் நாடு முழுவதும் கற்பவர்கள் மற்றும் ஆசிரியர்களின் அணுகலில் முன்னோடியாக   உள்ளது .\n\nடிஜிட்டல்  கற்பித்தல் வளங்கள்  மற்றும் கற்றல் செயல்பாடுகளில்  உதவுவதற்காக, பள்ளிகள்/தனிப்பட்ட ஆசிரியர்கள், தனிமனித  பங்களிப்புகள், NGOக்கள் இவர்கள் அனைவரின் பங்களிப்பாள் வித்யாதான்  என்னும் நிகழ்வின் மூலம்  CSR இன் கீழ் NCERT/CBSE/மாநிலங்களின் பல்வேறு இணைய பாட்டபொருள்த் தேவைகளுக்கு  இணைய கற்றல்  வளங்கள்  கற்றல்களஞ்சியமாக  பங்களிக்கப்பட்டது.\n\nசிறப்புத் தேவை உடைய  (CWSN) குழந்தைகளுக்கான கற்பித்தல் மற்றும் கற்றலுக்கு உதவுவதற்காக, அதிக எண்ணிக்கையிலான ஆடியோ புத்தகங்கள், ISL (இந்திய சைகை மொழி) CWSNக்கான வீடியோக்கள் மற்றும் அகராதி சேவைகள்   DIKSHA  வழங்குகிறது .\n\nகோவிட் தொற்றுநோய்களின் போது, DIKSHA மூலம் தொடக்க வகுப்புகளுக்கான பெரும்பான்மை  ஆசிரியர்களின் தொழில்முறை மேம்பாட்டுத் திட்டமான நிஷ்தா 1.0 (பள்ளித் தலைமை ஆசிரியர்கள்  மற்றும் ஆசிரியர்களின் முழுமையான முன்னேற்றத்திற்கான தேசிய முயற்சிகள்) ஆன்லைனில் தொடங்கப்பட்டது. நிஷ்தா 2.0 & 3.0 இரண்டாம் நிலை மற்றும் அடிப்படை கல்வியறிவு மற்றும் எண்ணியல் கவனம் செலுத்துகிறது. நிஷ்தாவைத் தவிர, பல மாநிலங்கள்/யூனியன் பிரதேசங்கள் தங்கள் சொந்த திறன் மேம்பாட்டு திட்டங்களையும்  வடிவமைத்துள்ளனர் .\n\nNCERT, PM eVIDYA   DTH-TV சேனல்கள் (ஒன்றாம் வகுப்பு முதல் பன்னிரெண்டாம் வகுப்பு வரை ஒரே  சேனல்) மூலம் 24 மணி நேரம் வாரத்தின் ஏஎழு நாட்களும்   மாணவர்களுக்கு  பாடம் கற்பித்தாலுக்கான நிகழ்ச்சிகளை  வழங்குகிறது. இந்த சேனல்கள் DIKSHA வுடன் இணைக்கப்பட்ட வகுப்பு வாரியான உள்ளடக்கங்களை QR குறியீடுகள் மூலம் வழங்குகின்றன.  ஒளிபரப்பு உள்ளடக்கம் DIKSHA  தளத்தில்  கிடைக்கிறது, இந்த பாடப் பகுதிகளை  எந்த நேரத்திலும்  யார் வேண்டுமானாலும் காணலாம்.",
        "aboutdikshaimagetext": "DIKSHA  பற்றிய தீர்வுகள் - மாறுபட்ட, நெகிழ்வான மற்றும் வளரும் தன்மையுடையது ",
        "news": "செய்திகள்",
        "resources": "வளங்கள்",
        "events": "நிகழ்வுகள்",
        "AboutVidyaDaan": "வித்யாதான் பற்றி",
        "AboutVidyaDaanDescription": "இந்த தேசிய நிகழ்ச்சி , நாடு முழுவதும், குறிப்பாக நாடு முழுவதும் உள்ள தனிநபர்கள் மற்றும் அமைப்புகளுக்கு கல்வி களத்தில் மின் கற்றல் வளங்களை பங்களிக்க அழைப்பு விடுக்கிறது.",
        "AboutVidyaDaanMoreDescription": "தனிநபர்கள், ஆசிரியர்கள், கல்வியாளர்கள், பாட வல்லுநர்கள், பள்ளிகள், அரசு மற்றும் அரசு சாரா நிறுவனங்கள் போன்றவர்கள் தங்களை பதிவுசெய்து பரிந்துரைத்த பின்னர் பங்களிப்புகளை வழங்க முடியும். இந்த பங்களிப்புகள் விளக்க வீடியோக்கள், கற்பித்தல் வீடியோக்கள், பயிற்சி கேள்விகள், திறன் போன்ற பல்வேறு வகையான உள்ளடக்கங்களைக் கொண்டிருக்கலாம். 1 முதல் 12 வரையிலான எந்தவொரு தரத்திற்கும் மற்றும் அந்தந்த திட்டங்களின் கீழ் மாநிலங்கள் / யூ.டி.க்களால் குறிப்பிடப்பட்ட எந்தவொரு பாடத்திற்கும் அடிப்படையிலான உருப்படிகள், பாடம் திட்டங்கள் போன்றவை. இத்தகைய பங்களிப்புகள் கிரியேட்டிவ் காமன்ஸ் உரிம கட்டமைப்பின் கீழ் திறந்த-உரிமம் பெற்றிருக்க வேண்டும், மேலும் அந்தந்த மாநிலங்கள் / யூ.டி.க்கள் மற்றும் சிபிஎஸ்இ ஆகியவற்றால் நிர்வகிக்கப்படலாம் மற்றும் உள்ளடக்கம் ஏற்றுக்கொள்ளப்பட்டு அதிக பயன்பாட்டைக் கண்டறிந்த பங்களிப்பாளர்கள் முறையாக அங்கீகரிக்கப்படுவார்கள்.",
        "VidyaDaanIntro": "தரமான கற்றலின் தொடர்ச்சியை நிர்வகிப்பதற்கான தேசத்தின், தேசத்தின் மற்றும் தேசத்தின் ஒரு திட்டம்",
        "btnParticipate": "பங்கேற்க",
        "VidyaDaanTypes": "நீங்கள் பங்களிக்கக்கூடிய மின் கற்றல் வளங்களின் வகைகள்",
        "ExplanationVideos": "விளக்க வீடியோக்கள்",
        "PracticeQuestions": "பயிற்சி கேள்விகள்",
        "TeachingVideos": "வீடியோக்களை கற்பித்தல்",
        "ExperierntialLearningVideos": "அனுபவமிக்க கற்றல் வீடியோக்கள்",
        "LessonPlans": "பாடம் திட்டங்கள்",
        "readmore": "மேலும் வாசிக்க",
        "DIKSHAforMobile": "மொபைலுக்கான தீக்‌ஷா",
        "DIKSHAforMobileDescription": "தீக்‌ஷா தளம் ஆசிரியர்கள், மாணவர்கள் மற்றும் பெற்றோர்களுக்கு பரிந்துரைக்கப்பட்ட பள்ளி பாடத்திட்டத்துடன் தொடர்புடைய ஈர்க்கக்கூடிய கற்றல் பொருட்களை வழங்குகிறது. உங்கள் அனைத்து பாடங்களையும் எளிதாக அணுக தீக்‌ஷா செயலியைப் பதிவிறக்கி, உங்கள் பாடப்புத்தகங்களில் QR குறியீடுகளை ஸ்கேன் செய்யுங்கள். {Android 5.1 மற்றும் அதற்கு மேற்பட்ட}",
        "DIKSHAforWeb": "வலைத்தளத்திட்கான தீக்‌ஷா",
        "DIKSHAforWebDescription": "தீக்‌ஷா கற்றல் போர்டல் உலாவி வழியாக ஆன்லைனில் தீக்‌ஷா இன் அனைத்து மின் வளங்களுக்கும் ஆன்லைன் அணுகலை வழங்குகிறது.",
        "btnVisitDIKSHAportal": "தீக்‌ஷா போர்ட்டலைப் பார்வையிடவும்",
        "DIKSHAOffline": "டெஸ்க்டாப் செயலி",
        "DIKSHAOfflineDescription": "உங்கள் தனிப்பட்ட கணினியில் பதிவிறக்கம் செய்யப்பட்ட டிஜிட்டல் பாடப்புத்தகங்கள், கேள்வி வங்கிகள் மற்றும் பல ஆஃப்லைன்களுக்கான அணுகலை தீக்‌ஷா டெஸ்க்டாப் வழங்குகிறது.{Windows மற்றும் ubuntu OS க்கு கிடைக்கிறது}.",
        "comingsoon": "விரைவில்! \'",
        "DataDashboard": "தரவு முகப்புப்பலகை",
        "viewUsagepattern": "நாடு மற்றும் அனைத்து மாநிலங்களிலும் பயன்பாட்டு முறையைக் காண்க",
        "last7Weeks": "மொத்த கற்றல் அமர்வுகளுக்கான கடந்த 7 வார தரவு",
        "lastupdated": "கடைசியாக புதுப்பிக்கப்பட்டது",
        "clickstateut": "மேலும் விவரங்களுக்கு ஒரு மாநில / யூடியைக் கிளிக் செய்க",
        "representationonly": "பிரதிநிதித்துவத்திற்கான வரைபடம்",
        "usageMetrics": "பயன்பாட்டு அளவீடுகள்",
        "usageMetricsDescription": "22+ மாநில வாரியங்களின் கல்வி மற்றும் கல்விசாரா உள்ளடக்கத்தை ஆராயுங்கள்",
        "btnViewDashboard": "முகப்புப்பலகையை காண்க",
        "open": "திற",
        "download": "பதிவிறக்க",
        "DIKSHAUsageTillDate": "தீக்‌ஷா தற்போதைய பயன்பாடு",
        "LearningLessons": "கற்றல் அமர்வுகள்",
        "minutes": "நிமிடங்கள்",
        "TermsofUse": "விதிமுறைகள் மற்றும் கொள்கைகள்",
        "needHelp": "సహాయం కావాలి",
        "copyright": "© 2021,தீக்‌ஷா",
        "skipMainContent": "முதன்மை உள்ளடக்கத்திற்கு செல்க",
        "sitemap": "தள வரைபடம்",
        "ScreenReaderAccess": "அணுகல் மூலை",
        "DIKSHAUpdates": "தீக்‌ஷா புதுப்பிப்புகள்",
        "lastupdatedonresult": "வாரந்தோறும் திங்கட்கிழமை மதியம் அறிக்கைகள் புதுப்பிக்கப்படும்",
        "lastupdatedonresultdaily": "தினசரி புதுப்பிக்கப்பட்ட அறிக்கை",
        "totalDIKSHAusage": "நிமிடங்களில் மொத்த தீக்‌ஷா பயன்பாட்டு நேரம்",
        "numberLearningActivities": "கற்றவர்களால் தீக்‌ஷா உள்கட்டமைப்பைப் பயன்படுத்தி கற்றல் நடவடிக்கைகள் எத்தனை முறை மேற்கொள்ளப்பட்டன",
        "noevents": "வரவிருக்கும் நிகழ்வுகள் எதுவும் கிடைக்கவில்லை",
        "updateticker1": "கல்வியின் தரத்தின் தொடர்ச்சியை உறுதி செய்வதற்காக நாட்டுக்காக ,நாட்டினால் நாட்டின் ஒரு திட்டம்",
        "updateticker2": "கல்வி ஆராய்ச்சி மற்றும் பயிற்சிக்கான தேசிய கவுன்சிலின் முன்முயற்சி (கல்வி அமைச்சகம், இந்திய அரசு)",
        "contributionMetrics": "பங்களிப்பு அளவீடுகள்",
        "contributionDescription": "நாடு முழுவதும் இருந்து உள்ளடக்க பங்களிப்பு தரவு",
        "dikshaContentContribution": "தீக்‌ஷா உள்ளடக்க பங்களிப்பு",
        "contributors": "பங்களிப்பாளர்கள்",
        "contributions": "பங்களிப்புகள்",
        "courseMetrics": "பாடநெறி அளவீடுகள்",
        "courseMetricsDescription": "நாடு முழுவதும் இருந்து பாடநெறி தரவு",
        "courseUsage": "தீக்‌ஷா பாடநெறிகள் மற்றும் பயன்பாடு",
        "courses": "பாடநெறிகள்",
        "Enrolments": "சேர்க்கைகள்",
        "completions": "பாடநெறி நிறைவு",
        "certificatesIssued": "சான்றிதழ்கள் வழங்கப்பட்டன",
        "Datasets": "தரவுத்தொகுப்புகள்",
        "contributionsDiksha": "தீக்‌ஷாவிற்கு உள்ளடக்க பங்களிப்புகள்",
        "contributorsDiksha": "பங்களிப்பாளர்களின் எண்ணிக்கை",
        "EnrolmentsDiksha": "தீக்‌ஷாவில் மொத்த பாடநெறி சேர்க்கைகள்",
        "CompletionsDiksha": "தீக்‌ஷாவில் மொத்த பாடநெறி நிறைவு",
        "coursesDiksha": "தீக்‌ஷாவில் உள்ள படிப்புகளின் எண்ணிக்கை",
        "DikshaDatasets": "தீக்‌ஷாவில் பொது தரவுத்தொகுப்புகள்",
        "DatasetsDescription": "கற்றலுக்கான டிஜிட்டல் உள்கட்டமைப்பை இயக்கும் ஒரு தளமாக தீக்‌ஷா, நாடு முழுவதும் பல்வேறு வகையான கற்றல் மற்றும் கற்பித்தல் தேவைகளை ஆதரிக்கிறது. இவ்வாறு உருவாக்கப்படும் தீக்‌ஷா பயன்பாட்டுத் தரவு பொது மற்றும் பொது முகப்புப்பலகை மற்றும் தரவுத்தொகுப்புகள் வழியாக அனைவரும் அணுகக்கூடியது. இந்த பக்கத்தில் தற்போதுள்ள அனைத்து தீக்‌ஷா தரவுத்தொகுப்புகளின் பட்டியலும்",
        "csv": "சி.எஸ்.வி.",
        "json": "ஜே எஸ் ஓ என்",
        "usefulLinks": "பயனுள்ள இணைப்புகள்",
        "dictionaryheading": "நாடு முழுவதும் இருந்து உள்ளடக்க பங்களிப்பு தரவு",
        "datadictionary": "தரவு அகராதி",
        "Details": "விவரங்கள்",
        "usagemetrics": "பயன்பாட்டு அளவீடுகள்",
        "contributionmetrics": "பங்களிப்பு அளவீடுகள்",
        "coursemetrics": "பாடநெறி அளவீடுகள்",
        "board-ncert-description": "என்.சி.இ.ஆர்.டி (கல்வி ஆராய்ச்சி மற்றும் பயிற்சி தேசிய கவுன்சில்) வெளியிட்ட உள்ளடக்கத்தை ஆராயுங்கள்",
        "board-cbse-description": "சிபிஎஸ்இ (மத்திய இடைநிலைக் கல்வி வாரியம்) வெளியிட்ட உள்ளடக்கத்தை ஆராயுங்கள்",
        "board-nios-description": "NIOS (தி நேஷனல் இன்ஸ்டிடியூட் ஆப் ஓபன் ஸ்கூலிங்) வெளியிட்ட உள்ளடக்கத்தை ஆராயுங்கள்",
        "board-btntitle": "ஆராயுங்கள்"
    },
    "te": {
        "language": "తెలుగు",
        "diksha": "DIKSHA",
        "govofIndia": "భారతదేశం యొక్క ప్రభుత్వం",
        "dikshamoto": "డిజిటల్ ఇన్‌ఫ్రాస్ట్రక్చర్ ఫర్ నాలెడ్జ్ షేరింగ్",
        "dikshaDescription": "నేషనల్ కౌన్సిల్ ఆఫ్ ఎడ్యుకేషనల్ రీసెర్చ్ అండ్ ట్రైనింగ్ (విద్యా మంత్రిత్వ శాఖ, భారత ప్రభుత్వం)",
        "btnExploreDiksha": "DIKSHA ను అన్వేషించండి",
        "explore": "అన్వేషించండి",
        "ExploreDikshaContent": "DIKSHA కంటెంట్‌ను అన్వేషించండి",
        "stateboard": "రాష్ట్రాలు / యుటిలు",
        "stateboardDescription": "22+ రాష్ట్రాలు మరియు యుటిలు ప్రచురించిన కంటెంట్‌ను అన్వేషించండి",
        "about": "గురించి",
        "home": "ఇల్లు",
        "dashboard": "డాష్బోర్డ్",
        "getapp": "అనువర్తనం పొందండి",
        "contribute": "సహకరించండి",
        "aboutdiksha": "DIKSHA గురించి",
        "aboutdikshacontent": "DIKSHA (డిజిటల్ ఇన్ఫ్రాస్ట్రక్చర్ ఫర్ నాలెడ్జ్ షేరింగ్) పాఠశాల విద్యకు ఒక జాతీయ వేదిక, ఇది విద్యా మంత్రిత్వ శాఖ యొక్క నేషనల్ కౌన్సిల్ ఫర్ ఎడ్యుకేషన్ రీసెర్చ్ అండ్ ట్రైనింగ్ (ఎన్‌సిఇఆర్టి) యొక్క చొరవ. మాజీ గౌరవ మానవ వనరుల అభివృద్ధి మంత్రి శ్రీ ప్రకాష్ జవ్‌దేకర్ విడుదల చేసిన జాతీయ ఉపాధ్యాయ వేదిక కోసం స్ట్రాటజీ అండ్ అప్రోచ్ పేపర్‌లో పేర్కొన్న విధంగా ఓపెన్ ఆర్కిటెక్చర్, ఓపెన్ యాక్సెస్, ఓపెన్ లైసెన్సింగ్ వైవిధ్యం, ఎంపిక మరియు స్వయంప్రతిపత్తి యొక్క ప్రధాన సూత్రాల ఆధారంగా DIKSHA అభివృద్ధి చేయబడింది. మే, 2017 లో. DIKSHA ను స్వయంగా భారత వైస్ ప్రెసిడెంట్ సెప్టెంబర్ 5, 2017 న ప్రారంభించారు మరియు అప్పటి నుండి 35 రాష్ట్రాలు / యుటిలు అలాగే సిబిఎస్ఇ మరియు ఎన్సిఇఆర్టి మరియు కోటి మంది అభ్యాసకులు మరియు ఉపాధ్యాయులు దీనిని స్వీకరించారు.",
        "aboutdikshacontent2": "DIKSHA ఓపెన్ సోర్స్ టెక్నాలజీపై నిర్మించబడింది, ఇది భారతదేశంలో తయారు చేయబడింది మరియు భారతదేశం కోసం తయారు చేయబడింది, దీనిలో ఇంటర్నెట్ స్కేల్ టెక్నాలజీలు ఉన్నాయి మరియు బోధన మరియు అభ్యాసానికి అనేక ఉపయోగ సందర్భాలు మరియు పరిష్కారాలను అనుమతిస్తుంది. నేర్చుకోవటానికి డిజిటల్ మౌలిక సదుపాయాలైన సన్‌బర్డ్ అని పిలువబడే MIT లైసెన్స్ కలిగిన ఓపెన్ సోర్స్ టెక్నాలజీని ఉపయోగించి DIKSHA నిర్మించబడింది మరియు అనేక భాషలు మరియు పరిష్కారాలకు మద్దతు ఇవ్వడానికి మరియు బిల్డింగ్ బ్లాక్‌లకు ప్లాట్‌ఫారమ్‌లుగా మరియు పరిష్కారాలుగా 100 కంటే ఎక్కువ సూక్ష్మ సేవలను నిర్మించడానికి రూపొందించబడింది. \n \n పైన పేర్కొన్న విధంగా DIKSHA, అన్ని రాష్ట్రాలు మరియు కేంద్రపాలిత ప్రాంతాలలో వాడటానికి అందుబాటులో ఉంది. ప్రతి రాష్ట్రం / యుటి DIKSHA ప్లాట్‌ఫామ్‌కు దాని స్వంత మార్గంలో ప్రయోజనం చేకూరుస్తుంది, ఎందుకంటే ప్లాట్‌ఫామ్ యొక్క వివిధ సామర్థ్యాలు మరియు పరిష్కారాలను వారి ఉపాధ్యాయులు మరియు అభ్యాసకుల కోసం ప్రోగ్రామ్‌ల రూపకల్పన మరియు అమలు చేయడానికి ఉపయోగించుకునే స్వేచ్ఛ మరియు ఎంపిక ఉంది. దేశవ్యాప్తంగా విద్యా లక్ష్యాలను సాధించడానికి విద్యా పరిస్థితికి (విద్యావేత్తలు, నిపుణులు, సంస్థలు, సంస్థలు - ప్రభుత్వం, స్వయంప్రతిపత్తి సంస్థలు, ప్రభుత్వేతర మరియు ప్రైవేట్ సంస్థలు) పాల్గొనడానికి, సహకరించడానికి మరియు పొందటానికి DIKSHA విధానాలు మరియు సాధనాలు సాధ్యపడతాయి. ఆధారంగా. \n \n DIKSHA ను దేశవ్యాప్తంగా ఉన్న అభ్యాసకులు మరియు ఉపాధ్యాయులు యాక్సెస్ చేయవచ్చు మరియు ప్రస్తుతం భారతదేశం అంతటా 18+ భాషలు మరియు వివిధ NCERT, CESE మరియు SCERT కోర్సులకు మద్దతు ఇస్తుంది. పాఠశాల విద్య, ప్రాథమిక విద్యా కార్యక్రమాలు మరియు అభ్యాసకులు మరియు ఉపాధ్యాయుల విభిన్న-సమర్థులైన సంఘాలకు సమగ్ర విద్యకు తోడ్పడటానికి వేదిక యొక్క ప్రయోజనాలు అభివృద్ధి చేయబడుతున్నాయి. \n \n COVID-19 కు సంబంధించిన పాఠశాల అంతరాయం గురించి, వినూత్న రాష్ట్ర కార్యక్రమాల ద్వారా గృహ విద్యను ప్రారంభించడానికి అన్ని రాష్ట్రాలు / UT లను DIKSHA అనుమతిస్తుంది; కాబట్టి భారతదేశం అంతటా ఉపాధ్యాయులు మరియు అభ్యాసకుల ప్రయోజనం కోసం సాంకేతిక పరిజ్ఞానాన్ని ఉపయోగించుకోండి.",
        "aboutdikshanewcontent": "DIKSHA (డిజిటల్ ఇన్‌ఫ్రాస్ట్రక్చర్ ఫర్ నాలెడ్జ్ షేరింగ్) అనేది పాఠశాల విద్య కోసం ఏర్పాటు చేయబడిన జాతీయ వేదిక, ఇది విద్యా మంత్రిత్వ శాఖ (MoE), GoI ఆధ్వర్యంలో నేషనల్ కౌన్సిల్ ఫర్ ఎడ్యుకేషనల్ రీసెర్చ్ అండ్ ట్రైనింగ్ (NCERT) చే ఆరంభించబడినది. 2017లో గౌరవనీయ భారత ఉప రాష్ట్రపతి - శ్రీ ఎం. వెంకయ్య నాయుడు ప్రారంభించిన DIKSHAను దాదాపు అన్ని రాష్ట్రాలు, కేంద్ర పాలిత ప్రాంతాలు, CBSEతో సహా కేంద్ర స్వయంప్రతిపత్తి సంస్థలు/బోర్డులు స్వీకరించాయి. 2017 సెప్టెంబర్‌లో అప్పటి గౌరవనీయులైన మానవ వనరుల అభివృద్ధి శాఖ మంత్రి శ్రీ ప్రకాష్ జవదేకర్ విడుదల చేసిన జాతీయ ఉపాధ్యాయ వేదిక కోసం స్ట్రాటజి & అప్రోచ్ పేపర్ ఆధారంగా DIKSHA అభివృద్ధి చేయబడింది. DIKSHAను దేశవ్యాప్తంగా అభ్యాసకులు మరియు ఉపాధ్యాయులు యాక్సెస్ చేయవచ్చు మరియు ప్రస్తుతం 36 భారతీయ భాషలలో అందుబాటు లో ఉంది. ఉపాధ్యాయులు, అభ్యాసకులు మరియు అధికారుల కోసం ప్రోగ్రామ్‌లను రూపొందించడానికి మరియు అమలు చేయడానికి ప్లాట్‌ఫారమ్ యొక్క విభిన్న సామర్థ్యాలు మరియు పరిష్కారాలను ఉపయోగించుకునే స్వేచ్ఛ మరియు అవకాశం ఉన్నందున ప్రతి రాష్ట్రం/కేంద్ర పాలిత ప్రాంతం DIKSHA ప్లాట్‌ఫారమ్‌ను దాని స్వంత విధానంలో వినియోగించుకుంటుంది. DIKSHA విధానాలు మరియు సాధనాలు ఒక ఉమ్మడి వేదికగా పాల్గొనడం, సహకారం అందించడం మరియు దేశం కోసం అభ్యసన లక్ష్యాలను సాధించడానికి విద్యా పర్యావరణ వ్యవస్థ (విద్యావేత్తలు, నిపుణులు, ప్రభుత్వ సంస్థలు, స్వయంప్రతిపత్తి గల సంస్థలు, ప్రభుత్వేతర మరియు ప్రైవేట్ సంస్థలు) ను ఉపయోగించుకోవడం సాధ్యపడుతుంది. ఆత్మ నిర్భర్ భారత్‌లో భాగంగా ప్రకటించిన GoI యొక్క PM eVidya కార్యక్రమం కింద, DIKSHA ను 'ఒక దేశం, ఒక డిజిటల్ ప్లాట్‌ఫారమ్'గా ప్రకటించారు.NCERT పాఠ్యపుస్తకాలు CC BY NC-ND లైసెన్సునూ, మిగిలిన అన్నీ వనరులు CC BY NC-SA లైసెన్సును కలిగి ఉన్నవి.",
        "aboutdikshanewcontent2": "DIKSHAా ఓపెన్ సోర్స్ టెక్నాలజీపై నిర్మించబడింది, ఇది మన దేశం కోసం, మన దేశంలో తయారు చేయబడింది, ఇది ఇంటర్నెట్ ఆధారిత సాంకేతికతలను కలిగి ఉంటుంది మరియు బోధనాభ్యాసన కొరకు వివిధ వినియోగ-కేసులు, పరిష్కారాల కోసం ఉపయోగ పడుతుంది. DIKSHA అనేది సన్‌బర్డ్ అని పిలువబడే MIT లైసెన్స్ పొందిన ఓపెన్ సోర్స్ టెక్నాలజీని ఉపయోగించి నిర్మించబడింది, ఇది నేర్చుకోవడం మరియు పరిష్కారాల కోసం డిజిటల్ ఇన్‌ఫ్రాస్ట్రక్చర్ మరియు ప్లాట్‌ఫారమ్‌లు మరియు పరిష్కారాల అభివృద్ధికి బిల్డింగ్ బ్లాకులుగా 100 మైక్రో సేవలను అందిస్తుంది.\n\nగౌరవనీయులైన భారత ప్రధాన మంత్రి 29 జూలై 2021న NDEAR (నేషనల్ డిజిటల్ ఎడ్యుకేషన్ ఆర్కిటెక్చర్)ను ప్రారంభించారు, ఇది రాష్ట్రాలు/UTల ద్వారా సమాఖ్య మరియు పరస్పర చర్య చేయగల వ్యవస్థల అభివృద్ధికి బిల్డింగ్ బ్లాక్‌లను అందిస్తుంది. DIKSHA యొక్క ప్రధాన బిల్డింగ్ బ్లాక్‌లు NDEAR బిల్డింగ్ బ్లాక్‌లలో ఎక్కువ భాగం ఉన్నాయి, NDEAR యొక్క కొన్ని విజయవంతమైన వినియోగ-కేసులను ప్రారంభించింది, అవి: ప్రాయోగిక పాఠ్యపుస్తకాలు, ఆన్‌లైన్ కోర్సులు, కంటెంట్ ఆథరింగ్, కంటెంట్ సోర్సింగ్, ఇంటరాక్టివ్ క్విజ్‌లు, క్వశ్చన్ బ్యాంక్‌లు, చాట్‌బాట్, అనలిటిక్స్ మరియు డాష్‌బోర్డ్. COVID-19 మహమ్మారి కాలంలో, ఈ ప్లాట్‌ఫారమ్ దేశవ్యాప్తంగా అభ్యాసకులు మరియు ఉపాధ్యాయుల యాక్సెస్‌లో అపూర్వమైన పెరుగుదలను చవిచూసింది.\n\nబోధనాభ్యసన ప్రక్రియలలో డిజిటల్ కంటెంట్ కోసం సహాయం చేయడానికి NCERT/CBSE/రాష్ట్రాల యొక్క వివిధ కంటెంట్ అవసరాల కోసం విద్యాదాన్ లో భాగంగా CSR కింద విభిన్న వనరులతో కూడిన గొప్ప రిపోజిటరీని పాఠశాలలు/ ఉపాధ్యాయులు, కంటెంట్ ను అందించే భాగస్వాములు, NGOలు, కార్పొరేట్‌లు అందించారు.\n\nప్రత్యేక అవసరాలు ఉన్న పిల్లల (CWSN) కోసం బోధనాభ్యసనలో సహాయం చేయడానికి, పెద్ద సంఖ్యలో ఆడియో పుస్తకాలు, ISL (భారతీయ సంకేత భాష) వీడియోలు మరియు నిఘంటువు DIKSHAలో అందుబాటులో ఉంచబడ్డాయి.\n\nమహమ్మారి సమయంలో, ఎలిమెంటరీ గ్రేడ్‌ల కోసం ఉపాధ్యాయుల వృత్తిపరమైన భారీ అభివృద్ధి కార్యక్రమం నిష్ఠ 1.0 (నేషనల్ ఇనిషియేటివ్స్ ఫర్ స్కూల్ హెడ్స్ మరియు టీచర్స్ హోలిస్టిక్ అడ్వాన్స్‌మెంట్) DIKSHA ద్వారా ఆన్‌లైన్‌లో ప్రారంభించబడింది. నిష్ఠ 2.0 & 3.0 సెకండరీ మరియు ఫౌండేషన్ లిటరసీ మరియు న్యూమరసీపై దృష్టి పెడుతుంది. నిష్ఠతో పాటు, అనేక రాష్ట్రాలు/ కేంద్ర పాలిత ప్రాంతాలు తమ సొంత సామర్థ్య నిర్మాణ కార్యక్రమాలను రూపొందించుకున్నాయి.\n\nNCERT కూడా PM eVIDYA, DTH-TV ఛానెల్‌ల ద్వారా 24x7 ప్రాతిపదికన విద్యార్థులకు (1 నుండి 12 తరగతుల వరకు ప్రతి తరగతికి ఒక ఛానెల్) కంటెంట్‌ను అందిస్తుంది. ఈ ఛానెల్‌లు QR కోడ్‌ల ద్వారా DIKSHAకు లింక్ చేయబడిన క్లాస్ వారీ కంటెంట్‌లను అందిస్తాయి. ఛానెల్‌ల ద్వారా ప్రసారమైన కంటెంట్ DIKSHAలో కూడా అందుబాటులో ఉంచబడింది, ఈ కంటెంట్ ఎప్పుడైనా, ఎక్కడైనా విద్యార్థులకు వీలైనపుడు చూసుకోవడానికి అందుబాటులో ఉంటుంది.",
        "aboutdikshaimagetext": "DIKSHAపై పరిష్కారాలు - విభిన్నమైనవి, అనువైనవి మరియు పరిణామం చెందుతున్నవి",
        "news": "వార్తలు",
        "resources": "వనరులు",
        "events": "సంఘటనలు",
        "AboutVidyaDaan": "VidyaDaan గురించి",
        "AboutVidyaDaanDescription": "ఈ జాతీయ కార్యక్రమం దేశవ్యాప్తంగా, ప్రత్యేకించి దేశవ్యాప్తంగా ఉన్న వ్యక్తులు మరియు సంస్థలకు విద్య డొమైన్‌లో ఇ-లెర్నింగ్ వనరులను అందించడానికి భారతదేశం అంతటా అభ్యాసకుల కోసం నాణ్యమైన అభ్యాసం కొనసాగుతుందని నిర్ధారించడానికి పిలుపు.",
        "AboutVidyaDaanMoreDescription": "వ్యక్తులు, ఉపాధ్యాయులు, విద్యావేత్తలు, విషయ నిపుణులు, పాఠశాలలు, ప్రభుత్వ మరియు ప్రభుత్వేతర సంస్థలు తమను తాము నమోదు చేసుకుని నామినేట్ చేసిన తరువాత సహకారం అందించవచ్చు.ఈ రచనలు వివరణ వీడియోలు, బోధన వీడియోలు, అభ్యాస ప్రశ్నలు, సామర్థ్యం. ఆధారిత అంశాలు, పాఠ్య ప్రణాళికలు మొదలైనవి. 1 నుండి 12 వరకు ఏదైనా గ్రేడ్ కోసం మరియు ఆయా ప్రాజెక్టుల క్రింద రాష్ట్రాలు / యుటిలు పేర్కొన్న ఏదైనా సబ్జెక్టుకు. ఇటువంటి రచనలు క్రియేటివ్ కామన్స్ లైసెన్స్ ఫ్రేమ్‌వర్క్ క్రింద ఓపెన్-లైసెన్స్ కలిగి ఉండాలి మరియు సంబంధిత రాష్ట్రాలు / యుటిలు & సిబిఎస్‌ఇ చేత నిర్వహించబడతాయి మరియు కంటెంట్ అంగీకరించబడిన మరియు అధిక వినియోగాన్ని కనుగొన్న వారి సహకారం అందించబడుతుంది.",
        "VidyaDaanIntro": "నాణ్యమైన అభ్యాసం యొక్క కొనసాగింపు కోసం నేషన్, నేషన్ మరియు నేషన్ యొక్క కార్యక్రమం",
        "btnParticipate": "పాల్గొనండి",
        "VidyaDaanTypes": "మీరు దోహదపడే A- అభ్యాస వనరుల చిట్కాలు",
        "ExplanationVideos": "వివరణ వీడియోలు",
        "PracticeQuestions": "ప్రశ్నలను ప్రాక్టీస్ చేయండి",
        "TeachingVideos": "టీచింగ్ వీడియోలు",
        "ExperierntialLearningVideos": "అనుభవపూర్వక అభ్యాస వీడియోలు",
        "LessonPlans": "పాఠ ప్రణాళికలు",
        "readmore": "ఇంకా చదవండి",
        "DIKSHAforMobile": "మొబైల్ కోసం DIKSHA",
        "DIKSHAforMobileDescription": "DIKSHA ప్లాట్‌ఫాం ఉపాధ్యాయులు, విద్యార్థులు మరియు తల్లిదండ్రులకు సూచించిన పాఠశాల పాఠ్యాంశాలకు సంబంధించిన ఆకర్షణీయమైన అభ్యాస సామగ్రిని అందిస్తుంది. మీ అన్ని పాఠాలను సులభంగా యాక్సెస్ చేయడానికి DIKSHA అనువర్తనాన్ని డౌన్‌లోడ్ చేయండి మరియు మీ పాఠ్యపుస్తకాల్లో QR కోడ్‌లను స్కాన్ చేయండి. {Android 5.1 మరియు అంతకంటే ఎక్కువ}",
        "DIKSHAforWeb": "వెబ్ కోసం DIKSHA",
        "DIKSHAforWebDescription": "DIKSHA లెర్నింగ్ పోర్టల్ బ్రౌజర్ ద్వారా DIKSHA యొక్క అన్ని ఇ-వనరులకు ఆన్‌లైన్ యాక్సెస్‌ను అందిస్తుంది.",
        "btnVisitDIKSHAportal": "DIKSHA పోర్టల్ సందర్శించండి",
        "DIKSHAOffline": "డెస్క్‌టాప్ అనువర్తనం",
        "DIKSHAOfflineDescription": "DIKSHA డెస్క్‌టాప్ మీ వ్యక్తిగత కంప్యూటర్‌లో డౌన్‌లోడ్ చేసిన డిజిటల్ పాఠ్యపుస్తకాలు, ప్రశ్న బ్యాంకులు మరియు మరిన్ని ఆఫ్‌లైన్లకు ప్రాప్యతను అందిస్తుంది. Windows విండోస్ మరియు ఉబుంటు OS లకు అందుబాటులో ఉంది}.",
        "comingsoon": "త్వరలో!\'",
        "DataDashboard": "డేటా డాష్‌బోర్డ్",
        "viewUsagepattern": "దేశం మరియు అన్ని రాష్ట్రాలలో వినియోగ నమూనాను చూడండి",
        "last7Weeks": "మొత్తం అభ్యాస సెషన్ల కోసం గత 7 వారాల డేటా",
        "lastupdated": "చివరిగా నవీకరించబడింది",
        "clickstateut": "మరిన్ని వివరాల కోసం స్టేట్ / యుటిపై క్లిక్ చేయండి",
        "representationonly": "రిప్రజెంటేషన్ కోసం మాత్రమే మ్యాప్",
        "usageMetrics": "వినియోగ కొలమానాలు",
        "usageMetricsDescription": "22+ స్టేట్ బోర్డుల యొక్క విద్యా మరియు నాన్ అకాడెమిక్ కంటెంట్‌ను అన్వేషించండి",
        "btnViewDashboard": "డాష్‌బోర్డ్‌ను చూడండి",
        "open": "తెరవండి",
        "download": "డౌన్‌లోడ్",
        "DIKSHAUsageTillDate": "DIKSHA ప్రస్తుత వినియోగం",
        "LearningLessons": "అభ్యాస సెషన్లు",
        "minutes": "నిమిషాలు",
        "TermsofUse": "నిబంధనలు మరియు విధానాలు",
        "needHelp" : "సహాయం కావాలి",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "ప్రధాన కంటెంట్‌కు దాటవేయి",
        "sitemap": "సైట్ మ్యాప్",
        "ScreenReaderAccess": "స్క్రీన్ రీడర్ యాక్సెస్",
        "DIKSHAUpdates": "DIKSHA నవీకరణలు",
        "lastupdatedonresult": "ప్రతి వారం నవీకరించబడిన నివేదిక - మధ్యాహ్నం నాటికి, ప్రతి సోమవారం",
        "lastupdatedonresultdaily": "రోజువారీ నవీకరించబడిన నివేదిక",
        "totalDIKSHAusage": "నిమిషాల్లో మొత్తం DIKSHA వినియోగ సమయం",
        "numberLearningActivities": "అభ్యాసకులు DIKSHA మౌలిక సదుపాయాలను ఉపయోగించి ఎన్నిసార్లు అభ్యాస కార్యకలాపాలు చేపట్టారు",
        "noevents": "రాబోయే ఈవెంట్‌లు ఏవీ అందుబాటులో లేవు",
        "updateticker1": "విద్య యొక్క నాణ్యత యొక్క కొనసాగింపును నిర్ధారించడానికి దేశం, దేశం మరియు దేశం కోసం ఒక కార్యక్రమం",
        "updateticker2": "నేషనల్ కౌన్సిల్ ఫర్ ఎడ్యుకేషనల్ రీసెర్చ్ అండ్ ట్రైనింగ్ (విద్యా మంత్రిత్వ శాఖ, భారత ప్రభుత్వం)",
        "contributionMetrics": "సహకారం కొలమానాలు",
        "contributionDescription": "దేశవ్యాప్తంగా కంటెంట్ సహకారం డేటా",
        "dikshaContentContribution": "దీక్ష కంటెంట్ సహకారం",
        "contributors": "సహాయకులు",
        "contributions": "రచనలు",
        "courseMetrics": "కోర్సు కొలమానాలు",
        "courseMetricsDescription": "దేశవ్యాప్తంగా ఉన్న కోర్సు డేటా",
        "courseUsage": "DIKSHA కోర్సులు & వాడుక",
        "courses": "కోర్సులు",
        "Enrolments": "నమోదులు",
        "completions": "కోర్సు పూర్తి",
        "certificatesIssued": "సర్టిఫికెట్లు జారీ చేయబడ్డాయి",
        "Datasets": "డేటాసెట్‌లు",
        "contributionsDiksha": "DIKSHA కి చేసిన కంటెంట్ రచనలు",
        "contributorsDiksha": "సహకారి సంఖ్య",
        "EnrolmentsDiksha": "DIKSHA లో మొత్తం కోర్సు నమోదు",
        "CompletionsDiksha": "DIKSHA లో మొత్తం కోర్సు పూర్తి",
        "coursesDiksha": "DIKSHA లోని కోర్సుల సంఖ్య",
        "DikshaDatasets": "DIKSHA పబ్లిక్ డేటాసెట్‌లు",
        "DatasetsDescription": "అభ్యాసానికి డిజిటల్ మౌలిక సదుపాయాలను కల్పించే వేదిక అయిన డిక్షా, దేశవ్యాప్తంగా అనేక రకాలైన అభ్యాస మరియు బోధనా అవసరాలకు మద్దతు ఇస్తుంది. ఈ విధంగా ఉత్పత్తి చేయబడిన DIKSHA వినియోగ డేటా పబ్లిక్‌గా ఉండటానికి మరియు పబ్లిక్ డాష్‌బోర్డ్ మరియు డేటాసెట్‌ల ద్వారా అందరికీ అందుబాటులో ఉంటుంది. ఈ పేజీలో ప్రస్తుతం అందుబాటులో ఉన్న అన్ని DIKSHA డేటాసెట్ల జాబితా ఉంది - ప్రతి డేటాసెట్ గురించి మరిన్ని వివరాలను డేటాసెట్ యొక్క వివరాల పేజీ నుండి పొందవచ్చు.",
        "csv": "CSV",
        "json": "JSON",
        "usefulLinks": "ఉపయోగకరమైన లింకులు",
        "dictionaryheading": "దేశవ్యాప్తంగా కంటెంట్ సహకారం డేటా",
        "datadictionary": "డేటా నిఘంటువు",
        "Details": "వివరాలు",
        "usagemetrics": "వినియోగ కొలమానాలు",
        "contributionmetrics": "సహకారం కొలమానాలు",
        "coursemetrics": "కోర్సు కొలమానాలు",
        "board-ncert-description": "NCERT (నేషనల్ కౌన్సిల్ ఆఫ్ ఎడ్యుకేషనల్ రీసెర్చ్ అండ్ ట్రైనింగ్) ప్రచురించిన కంటెంట్‌ను అన్వేషించండి",
        "board-cbse-description": "సిబిఎస్‌ఇ (సెంట్రల్ బోర్డ్ ఆఫ్ సెకండరీ ఎడ్యుకేషన్ ప్రచురించిన కంటెంట్‌ను అన్వేషించండి",
        "board-nios-description": "NIOS ప్రచురించిన కంటెంట్‌ను అన్వేషించండి (ది నేషనల్ ఇన్స్టిట్యూట్ ఆఫ్ ఓపెన్ స్కూలింగ్",
        "board-btntitle": "అన్వేషించండి"
    },
    "ur": {
        "language": "اردو",
        "diksha": "DIKSHA",
        "govofIndia": "حکومت ہند",
        "dikshamoto": "برقی انفراسٹرکچر برائے اشتراکِ علم",
        "dikshaDescription": "نیشنل کونسل آف ایجوکیشنل ریسرچ اینڈ ٹریننگ کا ایک اقدام (وزارت تعلیم ، حکومت ہند)",
        "btnExploreDiksha": "DIKSHA کو دریافت کریں",
        "explore": "دریافت کریں",
        "ExploreDikshaContent": "کھلی ڈیجیٹل مواد کی DIKSHA کی دنیا کو تلاش کریں",
        "stateboard": "ریاستیں / UTs",
        "stateboardDescription": "22+ ریاستوں اور UTs کے ذریعہ شائع کردہ مواد کو دریافت کریں",
        "about": "کے بارے میں",
        "home": "گھر",
        "dashboard": "ڈیش بورڈ",
        "getapp": "ایپ حاصل کریں",
        "contribute": "تعاون کریں",
        "aboutdiksha": "DIKSHA کے بارے میں",
        "aboutdikshacontent": "ڈیکشا (ڈیجیٹل انفراسٹرکچر فار نالج شیئرنگ) اسکول ایجوکیشن کا ایک قومی پلیٹ فارم ہے ، وزارت تعلیم کی قومی تعلیم برائے تحقیق تحقیق و تربیت (این سی ای آر ٹی) کا ایک اقدام۔ DIKSHA کو کھلی فن تعمیر ، کھلی رسائی ، کھلی اجازت نامہ تنوع ، انتخاب اور خود مختاری کے بنیادی اصولوں پر مبنی تیار کیا گیا تھا جو قومی اساتذہ پلیٹ فارم کے لئے حکمت عملی اور نقطہ نظر کاغذ میں بیان کیا گیا ہے جس میں سابق وزیر برائے انسانی وسائل کی ترقی جناب شری پرکاش جاوڈیکر نے جاری کیا تھا۔ مئی ، 2017. DIKSHA خود 5 2017 ستمبر ، 2017 کو ہندوستان کے نائب صدر نے شروع کیا تھا اور اس کے بعد سے اب تک 35 ریاستوں / UT کے علاوہ سی بی ایس ای اور NCERT اور کروڑوں سیکھنے والوں اور اساتذہ کے ذریعہ اپنایا گیا ہے۔",
        "aboutdikshacontent2": "ڈیکشا (ڈیجیٹل انفراسٹرکچر فار نالج شیئرنگ) اسکول ایجوکیشن کا ایک قومی پلیٹ فارم ہے ، وزارت تعلیم کی قومی تعلیم برائے تحقیق تحقیق و تربیت (این سی ای آر ٹی) کا ایک اقدام۔ DIKSHA کو کھلی فن تعمیر ، کھلی رسائی ، کھلی اجازت نامہ تنوع ، انتخاب اور خود مختاری کے بنیادی اصولوں پر مبنی تیار کیا گیا تھا جو قومی اساتذہ پلیٹ فارم کے لئے حکمت عملی اور نقطہ نظر کاغذ میں بیان کیا گیا ہے جس میں سابق وزیر برائے انسانی وسائل کی ترقی جناب شری پرکاش جاوڈیکر نے جاری کیا تھا۔ مئی ، 2017. DIKSHA خود 5 2017 ستمبر ، 2017 کو ہندوستان کے نائب صدر نے شروع کیا تھا اور اس کے بعد سے اب تک 35 ریاستوں / UT کے علاوہ سی بی ایس ای اور NCERT اور کروڑوں سیکھنے والوں اور اساتذہ کے ذریعہ اپنایا گیا ہے۔",
        "aboutdikshanewcontent": "دکشا (DIKSHA) (برقی انفراسٹکچر برائے اشتراک علم) اسکولی تعلیم کا ایک قومی پلیٹ فارم ہے جو NCERT (نیشنل کونسل فار ایجوکیشنل ریسرچ اینڈ ٹریننگ )کا قومی پہل ہے ۔ وزارت تعلیم کے ماتحت ہے ۔ حکومت ہند نے 2017 میں نائب صدرجمہوریہ ہند عزت مآب وینکیا نائیڈوکے بدست لانچ کیا۔ دِکشا کو ہندوستان کی تقریبا تمام ریاستوں ، مرکز کے زیر انتظام صوبوں اور مرکزی تعلیمی بور ڈ بشمول CBSE نے اختیار کیا ہوا ہے ۔DIKSHA کو سابق وزیر برائے فروغ انسانی وسائل جناب پرکاش جاویڈیکر کی جانب سے ستمبر 2017 میں جاری کردہ قومی ٹیچر پلیٹ فارم کے لیے حکمت عملی اور اپروچ پیپر کی بنیاد پر تیار کیا گیا تھا۔ ملک بھر کے اساتذہ اور طلبہ کی DIKSHA تک رسائی آسان ہے اور موجودہ وقت میں 36 ہندوستانی زبانوں میں دستیاب ہے ۔ تمام صوبے اور مر کزی زیر انتظام ریاستیں اپنے اپنے طریقے سے دِکشا پلیٹ فارم کا فائدہ اٹھاتی ہیں ۔ کیونکہ اس کے پاس اساتذہ ، طلبہ اور منتظمین کے لیے پروگرام ڈیزائن کرنے انتخاب کرنے اورچلانے کے لیے پلیٹ فارم کی مختلف صلاحیتوں اور عملِ حل کو استعمال کرنے کی آزادی ہے۔ دِکشا کی پالیسیاں اور ٹولز تعلیمی ماحولیاتی نظام (ماہر تعلیم ، ماہر فن ، تنظیمیں ، حکومتی ادارے ، خود مختار ادارے ، غیر سرکاری او نجی تنظیموں) کے لے قومی سطح پر سیکھنے کے اہداف کو حاصل کرنے کے لیے ایک مشترکہ پلیٹ فارم میں حصہ داری ، شراکت اور استفادہ کو ممکن بناتا ہے ۔ NCERT کی نصابی کتابیں CC BY NC-ND کے تحت لائسنس یافتہ ہیں اور تمام ریسورسز CC BY NC-SA کے تحت لائسنس یافتہ ہیں۔ حکومت ہند کے PM eVidya پہل کے تحت جسے آتما نر بھر بھارت کا حصہ قرار دیا گیا تھا دِکشا کو’ ایک ملک ایک ڈیجیٹل پلیٹ فارم ‘ کے طور پر اعلان کیا گیا ہے ۔",
        "aboutdikshanewcontent2":" دکشا کو اوپن سورس ٹکنالوجی کی بنیاد پر بنایا گیا ہے ۔ ہندوستان میں ہی ہندوستان کے لیے بنایاگیا ہے ۔ جو انٹرنیٹ اسکیل ٹکنالوجیز کو شامل کرتا ہے اور تعلیم و تعلم کے لیے استعمال کے کئی معاملات اور عمل ِحل کو قابل بناتا ہے ۔ دِکشا کو MIT لائسینس یافتہ اوپن سورس ٹکنالوجی کا استعمال کر تے ہوئے بنایا گیا ہے جسے Sunbird کہاجاجاتا ہے ۔ جو سیکھنے اور مسائل کے حل کے لیے ایک ڈیجیٹل انفرااسٹریکچر ہے جو پلیٹ فارمز اور مسائل کے حل کی ترقی کے لیے سو سے زیادہ مائیکرو خدمات بھی پیش کرتا ہے ۔n\n\ہندوستان کے معزز وزیر اعظم نے 29 جولائی 2021 کو NDEAR (نیشنل ڈیجیٹل ایجوکیشن آرکیٹیکچر) کا آغاز کیا جو ریاستوں / مرکز کے زیر انتظام علاقوں کے ذریعہ وفاق اور انٹرآپریبل نظام کی ترقی کے لئےبنیاد فراہم کرتا ہے۔ دکشا کی اساس NDEAR کے زیادہ تر اساس پر مشتمل ہیں، جس نے NDEAR کے کچھ کامیاب استعمال کے معاملات کو فعال کرنے کے بعد جیسے: مؤثرنصابی کتب، آن لائن کورسز، مواد کی تصنیف، مواد سورسنگ، انٹرایکٹو کوئز، سوالیہ بینک، چیٹ بوٹ، اینالیٹکس اور ڈیش بورڈ۔ کوئد ۱۹ وبائی امراض کے دور میں، پلیٹ فارم نے ملک بھر میں سیکھنے والوں اور اساتذہ کی رسائی میں بے مثال اضافہ کا تجربہ کیا ہے۔n\n\تعملیم و تعلم میں معاون ڈیجیٹل مواد کے لیے، NCERT/CBSE/ریاستوں کی مختلف مواد کی ضروریات کے لیے اسکولوں/انفرادی اساتذہ، مواد کے شراکت داروں، این جی اوز، CSR کے تحت کارپوریٹس کے ذریعے مختلف وسائل کا ایک بھرپور ذخیرہ فراہم کیا گیا۔n\n\خصوصی ضرورتوں والے بچوں (CWSN) کو پڑھانے اور سیکھنے میں مدد کرنے کے لیے، DIKSHA پر بڑی تعداد میں آڈیو کتابیں، ISL (انڈین سائن لینگوئج) ویڈیوز اور ڈکشنری دستیاب کرائی گئی ہے۔n\n\وبائی مرض کے دوران، بڑے پیمانے پر اساتذہ کے پیشہ ورانہ ترقی کے پروگرام NISHTHA 1.0 (قومی اقدامات برائے اسکول سربراہان اور اساتذہ کی مجموعی ترقی) ابتدائی درجات کے لیے DIKSHA کے ذریعے آن لائن شروع کیا گیا تھا۔ نشٹھا 2.0 اور 3.0 ثانوی اور بنیادی خواندگی اور اعداد پر توجہ مرکوز کرتا ہے۔ نشٹھا کے علاوہ، کئی ریاستوں/ مرکز کے زیر انتظام علاقوں نے بھی اپنی صلاحیت سازی کے پروگرام بنائے ہیں۔n\n\NCERT نیز PM eVIDYA DTH-TV چینلز (ایک کلاس، ایک چینل کلاس I تا XII ) کے ذریعے 24x7 کی بنیاد پر طلبہ کے لیے مواد بھی فراہم کرتا ہے۔ یہ چینلز کلاس وار مواد فراہم کرتے ہیں جو QR کوڈز کے ذریعے DIKSHA سے ​​منسلک ہیں۔ حصول باہمی کو فعال کرنے کے لیے نشریاتی مواد کو DIKSHA پر بھی دستیاب کرایا گیا ہے، جہاں یہ مواد کسی بھی وقت، کہیں سے بھی قابل رسائی ہیں",
        "aboutdikshaimagetext": "DIKSHA پر حل - متنوع، لچکدار اور ترقی پذیر",
        "news": "خبریں",
        "resources": "حوالہ جات",
        "events": "تقریبات",
        "AboutVidyaDaan": "VidyaDaan کے بارے میں",
        "AboutVidyaDaanDescription": "یہ قومی پروگرام خاص طور پر قوم کے لئے ایک کال ہے \nملک بھر میں افراد اور تنظیمیں ایجوکیشن ڈومین میں ای لرننگ کے وسائل میں شراکت کریں تاکہ یہ یقینی بنایا جاسکے کہ ہندوستان بھر میں سیکھنے والوں کے لئے معیاری سیکھنے کا سلسلہ جاری رہے۔",
        "AboutVidyaDaanMoreDescription": "شراکت افراد ، اساتذہ ، ماہرین تعلیم ، مضامین کے ماہرین ، اسکولوں ، سرکاری اور غیر سرکاری تنظیموں وغیرہ کے ذریعہ اپنے آپ کو اندراج اور نامزد کرنے کے بعد بھی دی جاسکتی ہے۔ یہ شراکت مختلف اقسام کے مواد کی ہوسکتی ہے جیسے تفریحی ویڈیوز ، تدریسی ویڈیوز ، مشق سوالات ، قابلیت بیسڈ آئٹمز ، سبق کی منصوبہ بندی وغیرہ کسی بھی جماعت کے لئے 1 سے 12 تک اور کسی بھی مضمون کے لئے جو ریاستوں / ریاستوں کی طرف سے اپنے متعلقہ منصوبوں کے تحت بیان کردہ ہے۔ اس طرح کے شراکت کو کریٹیو کامنز لائسنس فریم ورک کے تحت کھلا لائسنس یافتہ ہونا چاہئے اور متعلقہ ریاستوں / UTs اور CBSE کے ذریعہ اس کی تشکیل کی جاسکتی ہے اور وہ شراکت دار جن کے مواد کو قبول کیا جاتا ہے اور زیادہ استعمال مل جاتا ہے ، اس کی مناسب طور پر شناخت کی جائے گی۔",
        "VidyaDaanIntro": "معیاری تعلیم کے تسلسل کے انتظام کے لئے قوم ، قوم اور قوم کے ذریعہ قوم کا ایک پروگرام",
        "btnParticipate": "حصہ لینا",
        "VidyaDaanTypes": "ای لرننگ وسائل کی قسمیں جن میں آپ شراکت کرسکتے ہیں",
        "ExplanationVideos": "وضاحت ویڈیوز",
        "PracticeQuestions": "پریکٹس سوالات",
        "TeachingVideos": "تعلیم دینے والی ویڈیوز",
        "ExperierntialLearningVideos": "تجرباتی سیکھنے والی ویڈیوز",
        "LessonPlans": "سبق کے منصوبے",
        "readmore": "مزید پڑھ",
        "DIKSHAforMobile": "موبائل کے لئے DIKSHA",
        "DIKSHAforMobileDescription": "DIKSHA پلیٹ فارم اساتذہ ، طلباء اور والدین کو مشغول اسکول کے نصاب سے متعلق مشغول سیکھنے کا مواد پیش کرتا ہے۔ اپنے تمام اسباق تک آسانی سے رسائی حاصل کرنے کے لئے اپنی نصابی کتب میں DIKSHA ایپ ڈاؤن لوڈ کریں اور QR کوڈ اسکین کریں۔{Android 5.1 and above}",
        "DIKSHAforWeb": "ویب کے لئے DIKSHA",
        "DIKSHAforWebDescription": "DIKSHA لرننگ پورٹل براؤزر کے ذریعہ DIKSHA کے تمام ای وسائل کو آن لائن رسائی فراہم کرتا ہے۔",
        "btnVisitDIKSHAportal": "DIKSHA پورٹل دیکھیں",
        "DIKSHAOffline": "ڈیسک ٹاپ ایپ",
        "DIKSHAOfflineDescription": "DIKSHA ڈیسک ٹاپ آپ کے ذاتی کمپیوٹر پر ڈاؤن لوڈ کردہ ڈیجیٹل درسی کتب ، سوالیہ بینکوں اور مزید آف لائن تک رسائی کی پیش کش کرتا ہے۔{Available for windows and ubuntu OS}.",
        "comingsoon": "جلد ہی آرہا ہے! \'",
        "DataDashboard": "ڈیٹا ڈیش بورڈ",
        "viewUsagepattern": "پورے ملک اور تمام ریاستوں میں استعمال کے انداز کو دیکھیں",
        "last7Weeks": "کل سیکھنے کے سیشنوں کے لئے آخری 7 ہفتوں کا ڈیٹا",
        "lastupdated": "آخری تازہ کاری",
        "clickstateut": "مزید تفصیلات کے لئے ریاست / UT پر کلک کریں",
        "representationonly": "صرف نمائندگی کے لئے نقشہ بنائیں",
        "usageMetrics": "استعمال کی پیمائش",
        "usageMetricsDescription": "22+ اسٹیٹ بورڈز کے تعلیمی اور غیر تعلیمی مواد کو دریافت کریں",
        "btnViewDashboard": "ڈیش بورڈ دیکھیں",
        "open": "کھولو",
        "download": "ڈاؤن لوڈ کریں",
        "DIKSHAUsageTillDate": "موجودہ استعمال DIKSHA",
        "LearningLessons": "سیشن سیکھنا",
        "minutes": "منٹ",
        "TermsofUse": "شرائط اور پالیسیاں",
        "needHelp": "مدد چاہیے",
        "copyright": "© 2021, DIKSHA",
        "skipMainContent": "مرکزی مواد پر جائیں",
        "sitemap": "سائٹ کا نقشہ",
        "ScreenReaderAccess": "رسائی کارنر",
        "DIKSHAUpdates": "DIKSHA تازہ ترین معلومات",
        "lastupdatedonresult": "رپورٹ ہفتہ وار - ہر پیر کے بعد دوپہر تک اپ ڈیٹ ہوجائے گی",
        "lastupdatedonresultdaily": "روزانہ تازہ ترین خبر",
        "totalDIKSHAusage": "منٹوں میں کل DIKSHA استعمال کا وقت",
        "numberLearningActivities": "سیکھنے والوں کے ذریعہ DIKSHA انفراسٹرکچر کا استعمال کرتے ہوئے سیکھنے کی کتنی بار سرگرمیاں کی گئیں",
        "noevents": "کوئی آنے والا واقعہ دستیاب نہیں ہے",
        "updateticker1": "تعلیم کے معیار کے تسلسل کو یقینی بنانے کے لئے قوم اور قوم کے ذریعہ قوم کا ایک پروگرام",
        "updateticker2": "نیشنل کونسل برائے تعلیمی تحقیق و تربیت کا ایک اقدام (وزارت تعلیم ، حکومت ہند)",
        "contributionMetrics": "شراکت کی پیمائش",
        "contributionDescription": "ملک بھر سے مشمولات کے تعاون کا ڈیٹا",
        "dikshaContentContribution": "DIKSHA مشمولات کا تعاون",
        "contributors": "معاونین",
        "contributions": "شراکتیں",
        "courseMetrics": "کورس میٹرکس",
        "courseMetricsDescription": "پورے ملک سے کورس کا ڈیٹا",
        "courseUsage": "ڈکشا کورسز اور استعمال",
        "courses": "کورسز",
        "Enrolments": "اندراجات",
        "completions": "کورس کی تکمیل",
        "certificatesIssued": "سرٹیفکیٹ جاری کردیئے گئے",
        "Datasets": "ڈیٹاسیٹس",
        "contributionsDiksha": "DIKSHA میں مواد کی شراکت",
        "contributorsDiksha": "تعاون کرنے والوں کی تعداد",
        "EnrolmentsDiksha": "DIKSHA میں کل کورس اندراجات",
        "CompletionsDiksha": "DIKSHA میں مکمل کورس تکمیلات",
        "coursesDiksha": "DIKSHA میں کورسز کی تعداد",
        "DikshaDatasets": "DIKSHA پبلک ڈیٹاسیٹس",
        "DatasetsDescription": "DIKSHA ، ایک ایسا پلیٹ فارم ہے جو سیکھنے کے لئے ڈیجیٹل انفراسٹرکچر کو قابل بناتا ہے ، ملک بھر میں سیکھنے اور درس و تدریس کی مختلف قسم کی ضروریات کی تائید کرتا ہے۔ اس طرح تیار کردہ DIKSHA استعمال کے اعداد و شمار کا مطلب عوامی ہے ، اور عوامی ڈیش بورڈ اور ڈیٹاسیٹس کے ذریعہ سب کے لئے قابل رسائی ہے۔ اس صفحے میں اب تک موجود تمام DISKHA۔ا ڈیٹاسیٹس کی فہرست موجود ہے۔ ہر ڈیٹاسیٹ کے بارے میں مزید معلومات ڈیٹاسیٹ کے تفصیلات کے صفحے سے حاصل کی جاسکتی ہیں۔",
        "csv": "CSV",
        "json": "JSON",
        "usefulLinks": "کارآمد روابط",
        "dictionaryheading": "ملک بھر سے مشمولات کے تعاون کا ڈیٹا",
        "datadictionary": "ڈیٹا لغت",
        "Details": "تفصیلات",
        "usagemetrics": "استعمال میٹرکس",
        "contributionmetrics": "شراکت میٹرکس",
        "coursemetrics": "کورس میٹرکس",
        "board-ncert-description": "این سی ای آر ٹی (نیشنل کونسل آف ایجوکیشنل ریسرچ اینڈ ٹریننگ) کے ذریعہ شائع کردہ مواد کی کھوج کریں۔",
        "board-cbse-description": "سی بی ایس ای (سنٹرل بورڈ آف سیکنڈری ایجوکیشن) کے ذریعہ شائع کردہ مواد کو دریافت کریں",
        "board-nios-description": "این آئ او ایس (دی نیشنل انسٹی ٹیوٹ آف اوپن اسکولنگ) کے ذریعہ شائع کردہ مواد کی کھوج کریں",
        "board-btntitle": "دریافت کریں"
    }
};

$(document).ready(function(){
    let language = localStorage.getItem('portalLanguage');
    console.log(language)
    (language == null || language == 'null') ? setPageLanguage("en") : setPageLanguage(localStorage.getItem('portalLanguage'))

    $(".dropdown-wrapper-div").click(function(){
        alert("click");
        if(($(this).hasClass("open"))){
            $(this).removeClass("open");
            $("i.dropdown").removeClass("rotate");
            $("ul.language-dropdown").slideUp("slow");
        }else{
            $(this).addClass("open");
            $("i.dropdown").addClass("rotate");
            $("ul.language-dropdown").slideDown( "slow" );
        }
    });
    $('ul.language-dropdown li').click(function(){
        $("ul.language-dropdown li").removeClass("active");
        $(this).addClass("active");
        setPageLanguage($(this).attr("data-value"));
        $(".dropdown-wrapper-div").removeClass("open");
        $("i.dropdown").removeClass("rotate");
        $("ul.language-dropdown").slideUp("slow");
    });
})


function getLangTranslations() {
    const lang = localStorage.getItem('portalLanguage') || 'en';

    $("ul.language-dropdown li").removeClass("active");
    $('ul.language-dropdown li[data-value= '+lang+']').addClass('active');
    
    $(".language-text").text(languageTranslations[lang]['language']);
    const translations = languageTranslations[lang];
    if (translations && Object.keys(translations).length) {
        const allTags = document.querySelectorAll("*[data-translate]");
        const allAttrTags = document.querySelectorAll("*[data-translate-attr]");
        // console.log(allTags);
        allTags.forEach(function (elem) {
            const translateKey = elem.getAttribute('data-translate');
            const hasKey = Object.keys(translations).find(key => translateKey == key);
            if (hasKey) {
                elem.innerText = translations[translateKey];
            }
        });

        allAttrTags.forEach(function (elem) {
            const translateAttr = elem.getAttribute('data-translate-attr');
            const toggleAttr = elem.getAttribute('data-toggle');
            const attrObj = translateAttr.split(':');
            const translateKey = attrObj[0].replace(/[^a-zA-Z]/g, '');
            const hasKey = Object.keys(translations).find(key => translateKey == key);
            if (hasKey) {
                try{
                    attrObj[1].split(',').forEach(val => {
                        const attr = val.replace(/[^a-zA-Z]/g, '');
                        console.log(attr);
                        elem.setAttribute(attr, translations[translateKey]);
                        if (toggleAttr && toggleAttr == 'tooltip') {
                            $(elem).tooltip("dispose").attr("title", translations[translateKey]).tooltip();
                        }
                    });
                }catch(e){
                    console.log(e);
                }
           
            }
        });

        if (lang == 'ur') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }

    }
}

window.onclick = function(event) {
    if (!(
        event.target.matches('ul.language-dropdown') ||
        event.target.matches('ul.language-dropdown li') || 
        event.target.matches('ul.language-dropdown li span') || 
        event.target.matches('.dropdown-wrapper-div') || 
        event.target.matches('span.language') || 
        event.target.matches('span.language-text') ||
        event.target.matches('i.dropdown.rotate') ||
        event.target.matches('i.dropdown'))) {
        $(".dropdown-wrapper-div").removeClass("open");
        $("i.dropdown").removeClass("rotate");
        $("ul.language-dropdown").slideUp("slow");
    }
  }
  

function setPageLanguage(lang) {
    // sessionStorage.setItem('portalLanguage', JSON.stringify({ "value": lang }));
    localStorage.setItem('portalLanguage', lang);
    getLangTranslations();
}