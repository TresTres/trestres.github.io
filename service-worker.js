"use strict";var precacheConfig=[["/index.html","d0b19ad772a4821a131f5997a8e88ead"],["/static/css/main.7c48160d.css","100d902e12b55b21e76f1ae071e573fd"],["/static/js/main.a2e6718e.js","791bbceef08d91a9c9b3334a41b17c20"],["/static/media/AboutMe.3deca071.md","3deca0712e3af3151c3a0571fac9ed66"],["/static/media/Brandon.22105285.jpg","22105285deb2187f7c51c398c6273de9"],["/static/media/Ezra_Ablaza_CS.3be4b9a5.pdf","3be4b9a5991cde327d2c3ccca663af3e"],["/static/media/Ezra_Ablaza_MSE.5f53cd44.pdf","5f53cd442fd63b2d94bb000da920ce54"],["/static/media/Heman.2a78d694.jpg","2a78d69494ccef49b3980bca27b33b42"],["/static/media/IBMPlexSans-Regular.2526ba23.ttf","2526ba235bc18f7446bd10201ece394c"],["/static/media/Jamie.3095a8b9.jpg","3095a8b973f1035b56aafd4784a9bf6f"],["/static/media/Mosk_Extra_Bold.34f3f10a.ttf","34f3f10a17d56aa01d79feebb6e7f186"],["/static/media/Naeem.174c7969.jpg","174c79695c5f0370b4e2028e8a17d6b5"],["/static/media/Professional_Photo.70ff781c.jpg","70ff781c2d4eaa4d65bee818ee6fc228"],["/static/media/Qasim.fe098bf9.jpg","fe098bf9adf02c3f51ef0518098bd876"],["/static/media/Queen_of_Camelot.3188ba89.otf","3188ba89cd11280451b5d5709ee02087"],["/static/media/Sakib.580b2da6.jpg","580b2da632c4a85339885da544f20c28"],["/static/media/Sam.accfe8d0.jpg","accfe8d042827086ae2c961974dfcab0"],["/static/media/SaraAnn.52fbf8a1.jpg","52fbf8a14a3066eba7a4597bc0a57f07"],["/static/media/Tanya.bee15815.jpg","bee15815eb378c4ad28b84098eaaab4c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],n=new URL(a,self.location),r=createCacheKey(n,hashParamName,t,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,n),e=urlsToCacheKeys.has(t));var r="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});