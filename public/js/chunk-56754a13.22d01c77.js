(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56754a13"],{"1f94":function(a,t,s){},bd26:function(a,t,s){"use strict";var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("header",{staticClass:"header header-absolute"},[s("nav",{staticClass:"navbar navbar-expand-lg fixed-top  shadow navbar-light bg-white"},[s("div",{staticClass:"container-fluid"},[a._m(0),a._m(1),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarCollapse"}},[s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item "},[s("router-link",{staticClass:"nav-link active",attrs:{to:"../../horeca/index"}},[a._v("Inicio")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"../../buscador/productores"}},[a._v("Buscador Productores")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"../../horeca/faq"}},[a._v("Preguntas Frecuentes")])],1),a._m(2),s("li",{staticClass:"nav-item dropdown ml-lg-3"},[a._m(3),s("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"userDropdownMenuLink"}},[s("router-link",{staticClass:"dropdown-item",attrs:{to:"#"}},[a._v("Ver mi Perfil ")]),s("router-link",{staticClass:"dropdown-item",attrs:{to:"../../horeca/admin-index"}},[a._v("Modificar mis datos ")]),s("router-link",{staticClass:"dropdown-item",attrs:{to:"../../horeca/admin-favoritos"}},[a._v("Mis Productores Favoritos ")]),s("div",{staticClass:"dropdown-divider"}),s("a",{staticClass:"dropdown-item",on:{click:function(t){return a.cerrarSesion()}}},[s("i",{staticClass:"fas fa-sign-out-alt mr-2 text-muted"}),a._v(" Cerrar Sesión")])],1)])])])])])])])},i=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"d-flex align-items-center"},[e("a",{staticClass:"navbar-brand py-1",attrs:{href:"https://www.saborgranada.es",target:"_blank",rel:"noopener"}},[e("img",{attrs:{src:s("cf05"),alt:"Sabor Granada logo"}})])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("i",{staticClass:"fa fa-bars"})])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"https://www.saborgranada.es/contacto/",target:"_blank",rel:"noopener"}},[a._v("Contacto")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a",{attrs:{id:"userDropdownMenuLink",href:"#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[e("img",{staticClass:"avatar avatar-sm avatar-border-primary mr-2",attrs:{src:s("e6833"),alt:"Jack London"}})])}],r=s("5530"),l=s("2f62"),n={name:"HeaderHoreca",methods:Object(r["a"])({},Object(l["b"])(["cerrarSesion"]))},o=n,c=s("2877"),d=Object(c["a"])(o,e,i,!1,null,null,null);t["a"]=d.exports},d1e9:function(a,t,s){"use strict";s.r(t);var e=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"home"},[s("HeaderHoreca"),s("HORECAMyFavs"),s("GeneralFooter")],1)},i=[],r=s("bd26"),l=s("5745"),n=function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"adminindex"},[s("section",{staticClass:"py-5"},[s("div",{staticClass:"container"},[s("ol",{staticClass:"breadcrumb pl-0  justify-content-start"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"index"}},[a._v("Inicio")])],1),s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:"admin-index"}},[a._v("Mi Cuenta")])],1),s("li",{staticClass:"breadcrumb-item active"},[a._v("Mis Productores Favoritos ")])]),s("h1",{staticClass:"hero-heading mb-0"},[a._v("Mis Productores Favoritos")]),s("p",{staticClass:"text-muted mb-5"},[a._v("Consulta y gestiona los Productores que te parecen más interesantes.")]),s("div",{staticClass:"row"},[s("div",{staticClass:"list-group shadow mb-5"},a._l(a.usuarios,(function(t){return s("div",{key:t._id},[s("a",{staticClass:"list-group-item list-group-item-action p-4",attrs:{href:"`/usuario`"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 align-self-center mb-4 mb-lg-0"},[s("div",{staticClass:"d-flex align-items-center mb-3"},[s("h2",{staticClass:"h5 mb-0"},[a._v(a._s(t.nombre))]),s("img",{staticClass:"avatar avatar-sm avatar-border-white ml-3",attrs:{src:"#",alt:"Jack London"}})])]),s("div",{staticClass:"col-lg-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 col-md-4 col-lg-3 py-3 mb-3 mb-lg-0"},[s("h6",{staticClass:"label-heading"},[a._v("Teléfono")]),s("p",{staticClass:"text-sm font-weight-bold"},[a._v(a._s(t.telefono))])]),s("div",{staticClass:"col-6 col-md-4 col-lg-3 py-3"},[s("h6",{staticClass:"label-heading"},[a._v("Email")]),s("p",{staticClass:"text-sm font-weight-bold"},[a._v(a._s(t.email))])]),s("div",{staticClass:"col-6 col-md-4 col-lg-3 py-3"},[s("h6",{staticClass:"label-heading"},[a._v("COMARCA")]),s("p",{staticClass:"text-sm font-weight-bold"},[a._v(a._s(t.comarca))])]),a._m(0,!0)])])])])])})),0),s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination pagination-template d-flex justify-content-center"},[s("li",{staticClass:"page-item"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{listaUsuarios:1}}}},[s("i",{staticClass:"fa fa-angle-left"})])],1),s("li",{staticClass:"page-item"},[s("router-link",{staticClass:"page-link",attrs:{to:{query:{listaUsuarios:2}}}},[s("i",{staticClass:"fa fa-angle-right"})])],1)])]),a._m(1)])])])])},o=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"col-12 col-lg-3 align-self-center"},[s("span",{staticClass:"text-primary text-sm text-uppercase mr-4 mr-lg-0"},[s("i",{staticClass:"fa fa-check fa-fw mr-2"}),a._v("VER FICHA")]),s("br",{staticClass:"d-none d-lg-block"}),s("span",{staticClass:"text-primary text-sm text-uppercase"},[s("i",{staticClass:"fa fa-trash fa-fw mr-2"}),a._v("Eliminar")])])},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("nav",{attrs:{"aria-label":"Page navigation example"}},[s("ul",{staticClass:"pagination pagination-template d-flex justify-content-center"},[s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-angle-left"})])]),s("li",{staticClass:"page-item active"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[a._v("1")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[a._v("2")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[a._v("3")])]),s("li",{staticClass:"page-item"},[s("a",{staticClass:"page-link",attrs:{href:"#"}},[s("i",{staticClass:"fa fa-angle-right"})])])])])}],c={name:"HORECAMyFavs"},d=c,u=(s("d68f"),s("2877")),m=Object(u["a"])(d,n,o,!1,null,null,null),v=m.exports,C={name:"MyFavHORECA",components:{HeaderHoreca:r["a"],GeneralFooter:l["a"],HORECAMyFavs:v}},p=C,f=Object(u["a"])(p,e,i,!1,null,null,null);t["default"]=f.exports},d68f:function(a,t,s){"use strict";s("1f94")},e6833:function(a,t,s){a.exports=s.p+"img/avatar-10.315b6be1.jpg"}}]);
//# sourceMappingURL=chunk-56754a13.22d01c77.js.map