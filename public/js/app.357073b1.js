(function(t){function e(e){for(var r,n,c=e[0],o=e[1],l=e[2],u=0,d=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);m&&m(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},s={app:0},i=[];function c(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-01ad411b":"230fd12d","chunk-0a0ff83c":"7718e60c","chunk-0e780673":"7cadff91","chunk-1ddec5a6":"6aa7f9f3","chunk-27b75180":"9c921d26","chunk-33d1500c":"478333eb","chunk-3602910e":"9acc526e","chunk-3811e85e":"8750a198","chunk-41b83180":"a61db010","chunk-4563c2a3":"761057cf","chunk-49f00696":"f9df00a3","chunk-56754a13":"22d01c77","chunk-599a4e53":"dfcece38","chunk-59dd1cb8":"80c2d5ea","chunk-75074fc8":"bee08599","chunk-780566b8":"f1ca7e60","chunk-8fddd2e0":"4dc071b2","chunk-afe82bae":"fe894a36","chunk-b42accec":"f8822d3a","chunk-bc08347c":"22b6b341","chunk-da696578":"db8fc606","chunk-e18d1144":"9aa0bb41","chunk-f8422e64":"730e847d"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a={"chunk-0a0ff83c":1,"chunk-0e780673":1,"chunk-1ddec5a6":1,"chunk-27b75180":1,"chunk-33d1500c":1,"chunk-3602910e":1,"chunk-41b83180":1,"chunk-4563c2a3":1,"chunk-49f00696":1,"chunk-56754a13":1,"chunk-599a4e53":1,"chunk-59dd1cb8":1,"chunk-75074fc8":1,"chunk-780566b8":1,"chunk-8fddd2e0":1,"chunk-afe82bae":1,"chunk-b42accec":1,"chunk-bc08347c":1,"chunk-da696578":1,"chunk-e18d1144":1,"chunk-f8422e64":1};n[t]?e.push(n[t]):0!==n[t]&&a[t]&&e.push(n[t]=new Promise((function(e,a){for(var r="css/"+({}[t]||t)+"."+{"chunk-01ad411b":"31d6cfe0","chunk-0a0ff83c":"a4510954","chunk-0e780673":"84cec926","chunk-1ddec5a6":"3dacd7ea","chunk-27b75180":"a4510954","chunk-33d1500c":"81c46d8c","chunk-3602910e":"a4510954","chunk-3811e85e":"31d6cfe0","chunk-41b83180":"81c46d8c","chunk-4563c2a3":"6d833890","chunk-49f00696":"a4510954","chunk-56754a13":"a4510954","chunk-599a4e53":"b5647494","chunk-59dd1cb8":"a4510954","chunk-75074fc8":"84cec926","chunk-780566b8":"81c46d8c","chunk-8fddd2e0":"a4510954","chunk-afe82bae":"84cec926","chunk-b42accec":"5df61ef9","chunk-bc08347c":"f5328eb5","chunk-da696578":"a4510954","chunk-e18d1144":"c6719807","chunk-f8422e64":"81c46d8c"}[t]+".css",s=o.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===r||u===s)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[t],m.parentNode.removeChild(m),a(i)},m.href=s;var h=document.getElementsByTagName("head")[0];h.appendChild(m)})).then((function(){n[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,a){r=s[t]=[e,a]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=c(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(m);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[t]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"04f0":function(t,e,a){},"0706":function(t,e,a){t.exports=a.p+"img/jamon.08148f5d.jpg"},"1a25":function(t,e,a){t.exports=a.p+"img/aperitivos.b515b5c3.jpg"},"1d9b":function(t,e,a){t.exports=a.p+"img/congelados-preparados.5a7187a6.jpg"},2212:function(t,e,a){t.exports=a.p+"img/despensa.fd54ec7e.jpg"},"2e36":function(t,e,a){t.exports=a.p+"img/vinos-bebidas.d7a47183.jpg"},"39f2":function(t,e,a){t.exports=a.p+"img/mermeladas-miel.3a3cf492.jpg"},4559:function(t,e,a){},"495f":function(t,e,a){"use strict";a("502f")},"4b2b":function(t,e,a){t.exports=a.p+"img/conservas.de233d22.jpg"},"502f":function(t,e,a){},5438:function(t,e){t.exports="data:image/png;base64,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"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},s=[],i=a("5530"),c=a("2f62"),o={methods:Object(i["a"])({},Object(c["b"])(["cerrarSesion","leerToken"])),computed:Object(i["a"])({},Object(c["c"])(["isActive","isAdmin","isHoreca","isProducer"])),created:function(){this.leerToken()}},l=o,u=(a("034f"),a("2877")),d=Object(u["a"])(l,n,s,!1,null,null,null),m=d.exports,h=(a("45fc"),a("d3b7"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("GeneralHeader"),a("GeneralSlider"),a("GeneralHome"),a("GeneralFooter")],1)},f=[],v=a("8322"),b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero-home"},[a("div",{staticClass:"swiper-container hero-slider"},[a("div",{staticClass:"swiper-wrapper"},[a("div",{staticClass:"swiper-slide",attrs:{id:"slide-1"}}),a("div",{staticClass:"swiper-slide",attrs:{id:"slide-2"}}),a("div",{staticClass:"swiper-slide",attrs:{id:"slide-3"}}),a("div",{staticClass:"swiper-slide",attrs:{id:"slide-4"}}),a("div",{staticClass:"swiper-slide",attrs:{id:"slide-5"}})])])])}],C={name:"GeneralSlider"},k=C,x=(a("c432"),Object(u["a"])(k,b,g,!1,null,"51b817c4",null)),y=x.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("section",{staticClass:"py-5 bg-gray-100"},[r("div",{staticClass:"container",staticStyle:{"padding-top":"72px"}},[t._m(0),r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 mb-3 mb-lg-0 text-center"},[r("div",{staticClass:"px-0 px-lg-3"},[r("h3",{staticClass:"h5"},[t._v("Empresas HORECA")]),r("p",{staticClass:"text-muted"},[t._v("Encuentra los productos que necesitas para tu negocio y contacta con sus productores")]),r("router-link",{staticClass:"link-primary",attrs:{to:"/login"}},[t._v("Acceder")]),t._v(" / "),r("router-link",{staticClass:"link-primary",attrs:{to:"/registro"}},[t._v("Registrarse")])],1)]),r("div",{staticClass:"col-lg-6 mb-3 mb-lg-0 text-center"},[r("div",{staticClass:"px-0 px-lg-3"},[r("h3",{staticClass:"h5"},[t._v("Productores")]),r("p",{staticClass:"text-muted"},[t._v("Localiza las empresas HORECA que necesitan incorporar tus productos a sus cartas")]),r("router-link",{staticClass:"link-primary",attrs:{to:"/login"}},[t._v("Acceder")]),t._v(" / "),r("router-link",{staticClass:"link-primary",attrs:{to:"/registro"}},[t._v("Registrarse")])],1)])])])]),r("section",{staticClass:"py-6"},[r("div",{staticClass:"container"},[t._m(1),r("div",{staticClass:"row mb-2"},[r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("fb4b"),alt:"Card image"}}),t._m(2)],1)]),r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("0706"),alt:"Card image"}}),t._m(3)],1)]),r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("f3dd"),alt:"Card image"}}),t._m(4)],1)]),r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("2e36"),alt:"Card image"}}),t._m(5)],1)]),r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("2212"),alt:"Card image"}}),t._m(6)],1)]),r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("4b2b"),alt:"Card image"}}),t._m(7)],1)])]),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("f9c2"),alt:"Card image"}}),t._m(8)],1)]),r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("1a25"),alt:"Card image"}}),t._m(9)],1)]),r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("ba62"),alt:"Card image"}}),t._m(10)],1)]),r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("f472"),alt:"Card image"}}),t._m(11)],1)]),r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("39f2"),alt:"Card image"}}),t._m(12)],1)]),r("div",{staticClass:"col-md-2 h-auto px-2"},[r("div",{staticClass:"card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"},[r("router-link",{staticClass:"tile-link",attrs:{to:"/login"}}),r("img",{staticClass:"bg-image",attrs:{src:a("1d9b"),alt:"Card image"}}),t._m(13)],1)])])])]),t._m(14)])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center pb-lg-4"},[a("p",{staticClass:"subtitle text-secondary mb-3"},[t._v("CATÁLOGO DE PRODUCTOS SABOR GRANADA DIRIGIDO A EMPRESAS HORECA ")]),a("h2",{staticClass:"mb-5"},[t._v("Bienvenid@s")]),a("p",{staticClass:"text-muted "},[t._v("Bienvenid@ al catálogo virtual impulsado desde Sabor Granada para los productos, productores y empresas HORECA, donde productores y hosteleros podréis interconectar entre vosotros/as para conocer los productos agroalimentarios ofertados hacia el canal HORECA y sus distribuidores en cada una de nuestras comarcas; además se podrán conocer las necesidades que los restaurantes, caterings y hoteles de la provincia a la hora de incorporar productos para vuestras cartas.")]),a("p",{staticClass:"text-muted mb-5"},[t._v("Desde Sabor Granada, creamos sinergias y relaciones comerciales entre empresas HORECA y productores.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-md-12"},[a("p",{staticClass:"subtitle text-primary"},[t._v("Familias de productos Sabor Granada")]),a("h2",[t._v("¿Qué necesitas? ¿Qué ofreces?")]),a("p",{staticClass:"text-muted"},[t._v("Busca productores que ofrecen lo que necesitas. Encuentra empresas HORECA que necesitan lo que ofreces.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content "},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Aceite")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Jamones")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Quesos y Lácteos")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Bebidas")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Despensa")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Conservas")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Panadería")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Aperitivos")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Frescos")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Charcutería")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Mermeladas y Miel")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body overlay-content"},[a("h6",{staticClass:"card-title text-shadow text-uppercase"},[t._v("Congelados y Preparados")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"py-7 position-relative dark-overlay"},[r("img",{staticClass:"bg-image",attrs:{src:a("84db"),alt:""}}),r("div",{staticClass:"container"},[r("div",{staticClass:"overlay-content text-white py-lg-4"},[r("p",{staticClass:"subtitle text-shadow text-white mb-2"},[t._v("EMPRESAS HORECA Y PRODUCTORES")]),r("h3",{staticClass:"display-3 font-weight-bold  text-shadow mb-5"},[t._v("¿Aún no perteneces a "),r("br"),t._v("Sabor Granada?")]),r("a",{staticClass:"btn btn-lg btn-primary",attrs:{target:"_blank",rel:"noopener",href:"https://www.saborgranada.es/quieres-pertenecer-sabor-granada/"}},[t._v("Infórmate")])])])])}],_={name:"GeneralHome"},E=_,j=(a("495f"),Object(u["a"])(E,w,A,!1,null,"e3ca5f64",null)),P=j.exports,O=a("5745"),H={name:"Home",components:{GeneralHeader:v["a"],GeneralSlider:y,GeneralHome:P,GeneralFooter:O["a"]}},R=H,S=Object(u["a"])(R,p,f,!1,null,null,null),L=S.exports,I=a("1232");r["default"].use(c["a"]);var q=new c["a"].Store({state:{token:localStorage.getItem("token")||"",usuarioDB:""},mutations:{obtenerUsuario:function(t,e){t.token=e,t.usuarioDB=""===e?"":Object(I["a"])(e)}},actions:{guardarUsuario:function(t,e){var a=t.commit;localStorage.setItem("token",e),a("obtenerUsuario",e)},cerrarSesion:function(t){var e=t.commit;e("obtenerUsuario",""),localStorage.removeItem("token"),D.push({name:"Home"})},leerToken:function(t){var e=t.commit,a=localStorage.getItem("token");console.log(a),e("obtenerUsuario",a||"")}},modules:{},getters:{isActive:function(t){return!!t.token},isAdmin:function(t){return"ADMIN_ROLE"===t.usuarioDB.usuario.role},isHoreca:function(t){return"HORECA_ROLE"===t.usuarioDB.usuario.role},isProducer:function(t){return"PRODUCER_ROLE"===t.usuarioDB.usuario.role}}});r["default"].use(h["a"]);var G=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:L},{path:"/login",name:"Login",component:function(){return a.e("chunk-b42accec").then(a.bind(null,"d17e"))}},{path:"/registro",name:"Register",component:function(){return a.e("chunk-599a4e53").then(a.bind(null,"6a36"))}},{path:"/formulario-horeca",name:"FormHoreca",component:function(){return a.e("chunk-bc08347c").then(a.bind(null,"a226"))}},{path:"/cookies",name:"Cookies",component:function(){return a.e("chunk-0e780673").then(a.bind(null,"41bd"))}},{path:"/privacidad-general",name:"PrivacidadGeneral",component:function(){return a.e("chunk-75074fc8").then(a.bind(null,"7296"))}},{path:"/registro-actividades",name:"RegistroActividades",component:function(){return a.e("chunk-afe82bae").then(a.bind(null,"9680"))}},{path:"/horeca/admin-index",name:"IndexAdmHORECA",component:function(){return a.e("chunk-33d1500c").then(a.bind(null,"71a6"))},meta:{requireAuth:!0}},{path:"/horeca/admin-general-info",name:"GenInfAdmHORECA",component:function(){return a.e("chunk-59dd1cb8").then(a.bind(null,"c06c"))},meta:{requireAuth:!0}},{path:"/horeca/admin-establecimientos",name:"HOAdminEstablecimientos",component:function(){return a.e("chunk-da696578").then(a.bind(null,"5249"))},meta:{requireAuth:!0}},{path:"/horeca/admin-seguridad",name:"SecAdmHORECA",component:function(){return a.e("chunk-0a0ff83c").then(a.bind(null,"e7bb"))},meta:{requireAuth:!0}},{path:"/horeca/admin-favoritos",name:"MyFavHORECA",component:function(){return a.e("chunk-56754a13").then(a.bind(null,"d1e9"))},meta:{requireAuth:!0}},{path:"/horeca/index",name:"IndexHORECA",component:function(){return a.e("chunk-1ddec5a6").then(a.bind(null,"872a"))},meta:{requireAuth:!0}},{path:"/horeca/faq",name:"FaqHORECA",component:function(){return a.e("chunk-01ad411b").then(a.bind(null,"00e5"))},meta:{requireAuth:!0}},{path:"/productor/admin-index",name:"IndexAdmPro",component:function(){return a.e("chunk-f8422e64").then(a.bind(null,"6779"))},meta:{requireAuth:!0}},{path:"/productor/admin-general-info",name:"GenInfAdmPro",component:function(){return a.e("chunk-49f00696").then(a.bind(null,"d577"))},meta:{requireAuth:!0}},{path:"/productor/admin-productos",name:"ProductsAdminPro",component:function(){return a.e("chunk-8fddd2e0").then(a.bind(null,"f2fd"))},meta:{requireAuth:!0}},{path:"/productor/admin-seguridad",name:"SecAdmPro",component:function(){return a.e("chunk-3602910e").then(a.bind(null,"f453"))},meta:{requireAuth:!0}},{path:"/productor/admin-favoritos",name:"MyFavPro",component:function(){return a.e("chunk-27b75180").then(a.bind(null,"d9c1"))},meta:{requireAuth:!0}},{path:"/productor/index",name:"IndexProductor",component:function(){return a.e("chunk-e18d1144").then(a.bind(null,"c18c"))},meta:{requireAuth:!0}},{path:"/productor/faq",name:"FAQProductor",component:function(){return a.e("chunk-3811e85e").then(a.bind(null,"937c"))},meta:{requireAuth:!0}},{path:"/admin/index",name:"AdminIndex",component:function(){return a.e("chunk-780566b8").then(a.bind(null,"c174"))}},{path:"/admin/userlist",name:"AdminUserlistado",component:function(){return a.e("chunk-4563c2a3").then(a.bind(null,"62c5"))}},{path:"/admin/tareas-pendientes",name:"AdminPendingTask",component:function(){return a.e("chunk-41b83180").then(a.bind(null,"d7dd"))}}]});G.beforeEach((function(t,e,a){var r=t.matched.some((function(t){return t.meta.requireAuth}));r&&""===q.state.token?a({name:"Login"}):a()}));var D=G,Y=a("5f5b"),M=a("b1e0"),T=(a("f9e3"),a("2dd8"),a("4559"),a("89e3"),a("bc3a")),U=a.n(T),F=a("2106"),B=a.n(F),V=a("67b0");r["default"].config.productionTip=!1,r["default"].use(V["a"]),r["default"].use(Y["a"]),r["default"].use(M["a"]),r["default"].use(B.a,U.a),U.a.defaults.baseURL="https://polar-waters-99712.herokuapp.com",r["default"].loadScript("../vendor/jquery/jquery.min.js"),r["default"].loadScript("../vendor/bootstrap/js/bootstrap.bundle.min.js"),r["default"].loadScript("../vendor/magnific-popup/jquery.magnific-popup.min.js"),r["default"].loadScript("../vendor/smooth-scroll/smooth-scroll.polyfills.min.js"),r["default"].loadScript("../vendor/bootstrap-select/js/bootstrap-select.min.js"),r["default"].loadScript("../vendor/object-fit-images/ofi.min.js"),r["default"].loadScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js"),r["default"].loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"),r["default"].loadScript("../js/theme.js"),new r["default"]({router:D,store:q,render:function(t){return t(m)}}).$mount("#app")},5745:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("hr"),a("footer",{staticClass:"position-relative z-index-10 d-print-none"},[t._m(0),a("div",{staticClass:"py-4 font-weight-light bg-gray-800 text-gray-300"},[a("div",{staticClass:"container "},[a("div",{staticClass:"row "},[t._m(1),a("div",{staticClass:"col-md-5 align-middle"},[a("ul",{staticClass:"list-inline mb-0 mt-3  text-sm  "},[a("li",{staticClass:"list-inline-item align-middle"},[a("router-link",{staticClass:"text-white",attrs:{to:"/privacidad-general"}},[t._v("Política privacidad")])],1),a("li",{staticClass:"list-inline-item align-middle"},[a("router-link",{staticClass:"text-white",attrs:{to:"/cookies"}},[t._v("Política cookies ")])],1),a("li",{staticClass:"list-inline-item align-middle"},[a("router-link",{staticClass:"text-white",attrs:{to:"/registro-actividades"}},[t._v("Registro Actividades")])],1)])]),t._m(2)])])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-4 bg-white-200 text-muted"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 text-center"},[r("div",{staticClass:"font-weight-bold text-uppercase text-dark mb-3"},[t._v("Catálogo de productos Sabor Granada dirigido a empresas HORECA")]),r("a",{attrs:{href:"https://www.dipgra.es",rel:"noopener",target:"_blank"}},[r("img",{staticClass:"m-3",attrs:{src:a("acac"),alt:""}})])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-5 mt-3"},[a("p",{staticClass:"text-sm mb-md-0 "},[t._v("© 2020, Sabor Granada. Todos los derechos Reservados.")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-md-2"},[r("a",{attrs:{href:"https://www.seitonbusinessconsulting.com/",target:"blank",rel:"noopener"}},[r("img",{attrs:{src:a("5438"),alt:""}})])])}],s={name:"GeneralFooter"},i=s,c=a("2877"),o=Object(c["a"])(i,r,n,!1,null,null,null);e["a"]=o.exports},8322:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"header"},[a("nav",{staticClass:"navbar navbar-expand-lg fixed-top shadow navbar-light bg-white"},[a("div",{staticClass:"container-fluid"},[t._m(0),t._m(1),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[t._m(2),t._m(3),t._m(4),a("li",{staticClass:"nav-item mt-2 mt-lg-0 mr-lg-2 ml-lg-2 d-lg-none d-xl-inline-block"},[a("router-link",{staticClass:"nav-link btn btn-primary",attrs:{to:"/login"}},[t._v("Acceder")])],1),a("li",{staticClass:"nav-item mt-2 mt-lg-0 d-lg-none d-xl-inline-block"},[a("router-link",{staticClass:"nav-link btn btn-primary",attrs:{to:"/registro"}},[t._v("Registrarse")])],1)])])])])])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex align-items-center"},[r("a",{staticClass:"navbar-brand py-1",attrs:{href:"/"}},[r("img",{attrs:{src:a("cf05"),alt:"Sabor Granada logo"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("i",{staticClass:"fa fa-bars"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item "},[a("a",{staticClass:"nav-link active",attrs:{id:"homeDropdownMenuLink",href:"/","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(" Inicio")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"https://www.saborgranada.es/contacto/",target:"_blank",rel:"noopener"}},[t._v("Contacto")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"list-inline-item pt-2 mx-lg-3"},[a("a",{staticClass:"text-muted text-hover-primary m  social-icon",attrs:{href:"https://es-es.facebook.com/MarcaSaborGranada/",target:"_blank",rel:"noopener",title:"facebook"}},[a("i",{staticClass:"fab fa-facebook"})]),t._v(" "),a("a",{staticClass:"text-muted text-hover-primary social-icon",attrs:{href:"https://twitter.com/sabor_granada?lang=es",target:"_blank",rel:"noopener",title:"twitter"}},[a("i",{staticClass:"fab fa-twitter"})]),t._v(" "),a("a",{staticClass:"text-muted text-hover-primary social-icon",attrs:{href:"https://www.youtube.com/channel/UCM-Kuxc83eeJeUzW1YAb64Q/featured",target:"_blank",rel:"noopener",title:"Youtube"}},[a("i",{staticClass:"fab fa-youtube"})]),t._v(" "),a("a",{staticClass:"text-muted text-hover-primary social-icon",attrs:{href:" https://www.instagram.com/saborgranada/?hl=es",target:"_blank",rel:"noopener",title:"Instagram"}},[a("i",{staticClass:"fab fa-instagram"})])])}],s={name:"GeneralHeader"},i=s,c=(a("b530"),a("2877")),o=Object(c["a"])(i,r,n,!1,null,"d8d1e2c8",null);e["a"]=o.exports},"84db":function(t,e,a){t.exports=a.p+"img/photo-1497436072909-60f360e1d4b1.d0cbaf88.jpg"},"85ec":function(t,e,a){},"89e3":function(t,e,a){},"944b":function(t,e,a){},acac:function(t,e,a){t.exports=a.p+"img/diputacion.457908e7.jpg"},b530:function(t,e,a){"use strict";a("04f0")},ba62:function(t,e,a){t.exports=a.p+"img/frescos.70520a2e.jpg"},c432:function(t,e,a){"use strict";a("944b")},cf05:function(t,e,a){t.exports=a.p+"img/logo.2236dc8d.png"},f3dd:function(t,e,a){t.exports=a.p+"img/queso.e5be327a.jpg"},f472:function(t,e,a){t.exports=a.p+"img/charcuteria.2eb0cb9d.jpg"},f9c2:function(t,e,a){t.exports=a.p+"img/panaderia.3020c680.jpg"},fb4b:function(t,e,a){t.exports=a.p+"img/aceite.7799ab16.jpg"}});
//# sourceMappingURL=app.357073b1.js.map