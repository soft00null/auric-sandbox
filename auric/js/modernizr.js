window.Modernizr=function(e,t,n){var r,o,a={},i=t.documentElement,c="modernizr",s=t.createElement(c),u=s.style,l=t.createElement("input"),d=":)",f={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),p="Webkit Moz O ms",h=p.split(" "),g=p.toLowerCase().split(" "),v="http://www.w3.org/2000/svg",y={},b={},E={},x=[],w=x.slice,S=function(e,n,r,o){var a,s,u,l,d=t.createElement("div"),f=t.body,m=f||t.createElement("body");if(parseInt(r,10))for(;r--;)(u=t.createElement("div")).id=o?o[r]:c+(r+1),d.appendChild(u);return a=["&#173;",'<style id="s',c,'">',e,"</style>"].join(""),d.id=c,(f?d:m).innerHTML+=a,m.appendChild(d),f||(m.style.background="",m.style.overflow="hidden",l=i.style.overflow,i.style.overflow="hidden",i.appendChild(m)),s=n(d,e),f?d.parentNode.removeChild(d):(m.parentNode.removeChild(m),i.style.overflow=l),!!s},C=function(){var e={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(r,o){o=o||t.createElement(e[r]||"div");var a=(r="on"+r)in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(r,""),a=N(o[r],"function"),N(o[r],"undefined")||(o[r]=n),o.removeAttribute(r))),o=null,a}}(),k={}.hasOwnProperty;function T(e){u.cssText=e}function N(e,t){return typeof e===t}function M(e,t){return!!~(""+e).indexOf(t)}function P(e,t){for(var r in e){var o=e[r];if(!M(o,"-")&&u[o]!==n)return"pfx"!=t||o}return!1}function j(e,t,r){var o=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+h.join(o+" ")+o).split(" ");return N(t,"string")||N(t,"undefined")?P(a,t):function(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return!1===r?e[o]:N(a,"function")?a.bind(r||t):a}return!1}(a=(e+" "+g.join(o+" ")+o).split(" "),t,r)}o=N(k,"undefined")||N(k.call,"undefined")?function(e,t){return t in e&&N(e.constructor.prototype[t],"undefined")}:function(e,t){return k.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=w.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(w.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(w.call(arguments)))};return r}),y.flexbox=function(){return j("flexWrap")},y.flexboxlegacy=function(){return j("boxDirection")},y.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},y.canvastext=function(){return!(!a.canvas||!N(t.createElement("canvas").getContext("2d").fillText,"function"))},y.webgl=function(){return!!e.WebGLRenderingContext},y.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:S(["@media (",m.join("touch-enabled),("),c,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},y.geolocation=function(){return"geolocation"in navigator},y.postmessage=function(){return!!e.postMessage},y.websqldatabase=function(){return!!e.openDatabase},y.indexedDB=function(){return!!j("indexedDB",e)},y.hashchange=function(){return C("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},y.history=function(){return!(!e.history||!history.pushState)},y.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},y.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},y.rgba=function(){return T("background-color:rgba(150,255,150,.5)"),M(u.backgroundColor,"rgba")},y.hsla=function(){return T("background-color:hsla(120,40%,100%,.5)"),M(u.backgroundColor,"rgba")||M(u.backgroundColor,"hsla")},y.multiplebgs=function(){return T("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(u.background)},y.backgroundsize=function(){return j("backgroundSize")},y.borderimage=function(){return j("borderImage")},y.borderradius=function(){return j("borderRadius")},y.boxshadow=function(){return j("boxShadow")},y.textshadow=function(){return""===t.createElement("div").style.textShadow},y.opacity=function(){var e,t;return e="opacity:.55",T(m.join(e+";")+(t||"")),/^0.55$/.test(u.opacity)},y.cssanimations=function(){return j("animationName")},y.csscolumns=function(){return j("columnCount")},y.cssgradients=function(){var e="background-image:";return T((e+"-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));"+e)+m.join("linear-gradient(left top,#9f9, white);"+e)).slice(0,-e.length)),M(u.backgroundImage,"gradient")},y.cssreflections=function(){return j("boxReflect")},y.csstransforms=function(){return!!j("transform")},y.csstransforms3d=function(){var e=!!j("perspective");return e&&"webkitPerspective"in i.style&&S("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},y.csstransitions=function(){return j("transition")},y.fontface=function(){var e;return S('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},y.generatedcontent=function(){var e;return S(["#",c,"{font:0/0 a}#",c,':after{content:"',d,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},y.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(e){}return n},y.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&((n=new Boolean(n)).ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(e){}return n},y.localstorage=function(){try{return localStorage.setItem(c,c),localStorage.removeItem(c),!0}catch(e){return!1}},y.sessionstorage=function(){try{return sessionStorage.setItem(c,c),sessionStorage.removeItem(c),!0}catch(e){return!1}},y.webworkers=function(){return!!e.Worker},y.applicationcache=function(){return!!e.applicationCache},y.svg=function(){return!!t.createElementNS&&!!t.createElementNS(v,"svg").createSVGRect},y.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==v},y.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(f.call(t.createElementNS(v,"animate")))},y.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(f.call(t.createElementNS(v,"clipPath")))};for(var $ in y)o(y,$)&&(r=$.toLowerCase(),a[r]=y[$](),x.push((a[r]?"":"no-")+r));return a.input||(a.input=function(n){for(var r=0,o=n.length;r<o;r++)E[n[r]]=!!(n[r]in l);return E.list&&(E.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),a.inputtypes=function(e){for(var r,o,a,c=0,s=e.length;c<s;c++)l.setAttribute("type",o=e[c]),(r="text"!==l.type)&&(l.value=d,l.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&l.style.WebkitAppearance!==n?(i.appendChild(l),r=(a=t.defaultView).getComputedStyle&&"textfield"!==a.getComputedStyle(l,null).WebkitAppearance&&0!==l.offsetHeight,i.removeChild(l)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?l.checkValidity&&!1===l.checkValidity():l.value!=d)),b[e[c]]=!!r;return b}("search tel url email datetime date month week time datetime-local number range color".split(" "))),a.addTest=function(e,t){if("object"==typeof e)for(var r in e)o(e,r)&&a.addTest(r,e[r]);else{if(e=e.toLowerCase(),a[e]!==n)return a;t="function"==typeof t?t():t,i.className+=" "+(t?"":"no-")+e,a[e]=t}return a},T(""),s=l=null,function(e,t){var n,r,o=e.html5||{},a=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,i=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,c="_html5shiv",s=0,u={};function l(){var e=p.elements;return"string"==typeof e?e.split(" "):e}function d(e){var t=u[e[c]];return t||(t={},s++,e[c]=s,u[s]=t),t}function f(e,n,o){return n||(n=t),r?n.createElement(e):(o||(o=d(n)),(c=o.cache[e]?o.cache[e].cloneNode():i.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e)).canHaveChildren&&!a.test(e)?o.frag.appendChild(c):c);var c}function m(e){e||(e=t);var o,a,i,c,s,u,m=d(e);return!p.shivCSS||n||m.hasCSS||(m.hasCSS=(a="article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}",i=(o=e).createElement("p"),c=o.getElementsByTagName("head")[0]||o.documentElement,i.innerHTML="x<style>"+a+"</style>",!!c.insertBefore(i.lastChild,c.firstChild))),r||(s=e,(u=m).cache||(u.cache={},u.createElem=s.createElement,u.createFrag=s.createDocumentFragment,u.frag=u.createFrag()),s.createElement=function(e){return p.shivMethods?f(e,s,u):u.createElem(e)},s.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(e){return u.createElem(e),u.frag.createElement(e),'c("'+e+'")'})+");return n}")(p,u.frag)),e}!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,r=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){n=!0,r=!0}}();var p={elements:o.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==o.shivCSS,supportsUnknownElements:r,shivMethods:!1!==o.shivMethods,type:"default",shivDocument:m,createElement:f,createDocumentFragment:function(e,n){if(e||(e=t),r)return e.createDocumentFragment();for(var o=(n=n||d(e)).frag.cloneNode(),a=0,i=l(),c=i.length;a<c;a++)o.createElement(i[a]);return o}};e.html5=p,m(t)}(this,t),a._version="2.6.2",a._prefixes=m,a._domPrefixes=g,a._cssomPrefixes=h,a.mq=function(t){var n,r=e.matchMedia||e.msMatchMedia;return r?r(t).matches:(S("@media "+t+" { #"+c+" { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),n)},a.hasEvent=C,a.testProp=function(e){return P([e])},a.testAllProps=j,a.testStyles=S,a.prefixed=function(e,t,n){return t?j(e,t,n):j(e,"pfx")},i.className=i.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+x.join(" "),a}(this,this.document);