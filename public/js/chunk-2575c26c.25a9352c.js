(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2575c26c"],{"6a36":function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"register"},[t("Register")],1)},s=[],o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"container-fluid px-3"},[t("div",{staticClass:"row min-vh-100"},[t("div",{staticClass:"col-md-8 col-lg-6 col-xl-5 d-flex align-items-center"},[t("div",{staticClass:"w-100 py-5 px-md-5 px-xl-6 position-relative"},[a._m(0),t("form",{staticClass:"form-validate",on:{submit:function(e){return e.preventDefault(),a.login(e)}}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"form-label",attrs:{for:"loginUsername"}},[a._v(" Dirección de Email ")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.email,expression:"usuario.email"}],staticClass:"form-control",attrs:{name:"loginUsername",id:"loginUsername",type:"email",placeholder:"nombre@dominio.com",autocomplete:"off",required:"","data-msg":"Por favor, introduzca su email"},domProps:{value:a.usuario.email},on:{input:function(e){e.target.composing||a.$set(a.usuario,"email",e.target.value)}}})]),t("div",{staticClass:"form-group mb-4"},[a._m(1),t("input",{directives:[{name:"model",rawName:"v-model",value:a.usuario.password,expression:"usuario.password"}],staticClass:"form-control",attrs:{name:"loginPassword",id:"loginPassword",placeholder:"Contraseña",type:"password",required:"","data-msg":"Por favor, introduzca su contraseña"},domProps:{value:a.usuario.password},on:{input:function(e){e.target.composing||a.$set(a.usuario,"password",e.target.value)}}})]),t("hr",{staticClass:"my-4"}),a._m(2),t("button",{staticClass:"btn btn-lg btn-block btn-primary"},[a._v("REGISTRARSE")])]),t("hr",{staticClass:"my-4"}),a._m(3),t("a",{staticClass:"close-absolute mr-md-5 mr-xl-6 pt-5",attrs:{href:"/"}},[t("svg",{staticClass:"svg-icon w-3rem h-3rem"},[t("use",{attrs:{"xlink:href":"#close-1"}})])])])]),a._m(4)])])},i=[function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"mb-4"},[r("a",{attrs:{href:"/"}},[r("img",{staticClass:"img-fluid mb-3",attrs:{src:t("cf05"),alt:"..."}})]),r("h2",[a._v("Registro")]),r("p",{staticClass:"text-muted"},[a._v("Para poder registrarse en la plataforma su acceso deberá estar validado por Sabor Granada. "),r("br"),r("br"),a._v(" Si es productor y desea adherirse a Sabor Granada por favor siga este enlace: "),r("a",{attrs:{href:"https://www.saborgranada.es/quieres-pertenecer-sabor-granada/",target:"_blank",rel:"noopener"}},[a._v("Información a Productores")]),a._v(". "),r("br"),r("br"),a._v(" Si pertenece al sector HORECA y desea adherirse a Sabor Granada por favor complete "),r("a",{attrs:{href:"/formulario-horeca"}},[a._v("este formulario.")]),r("br"),r("br"),a._v(" Si desde Sabor Granada le han enviado un correo con el registro a la plataforma, por favor utilice el nombre de usuario y la contraseña y complete el registro. Podrá cambiar su contraseña en su área de usuario.")])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"row"},[t("div",{staticClass:"col"},[t("label",{staticClass:"form-label",attrs:{for:"loginPassword"}},[a._v(" Contraseña")])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"form-group mb-4"},[t("div",{staticClass:"custom-control custom-checkbox"},[t("input",{staticClass:"custom-control-input",attrs:{id:"loginRemember",type:"checkbox"}}),t("label",{staticClass:"custom-control-label text-muted",attrs:{for:"loginRemember"}},[t("span",{staticClass:"text-sm"},[a._v("Acepto, he leído y comprendo la "),t("a",{attrs:{href:"/privacidad-general"}},[a._v("Política de Privacidad")]),a._v(" y la "),t("a",{attrs:{href:"/cookies"}},[a._v("Política de Cookies")]),a._v(".")])])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("p",{staticClass:"text-center"},[t("small",{staticClass:"text-muted text-center"},[a._v("¿No perteneces a Sabor Granada? "),t("a",{attrs:{href:"https://www.saborgranada.es/quieres-pertenecer-sabor-granada/",target:"_blank",rel:"noopener"}},[a._v("Infórmate")])])])},function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"col-md-4 col-lg-6 col-xl-7 d-none d-md-block"},[t("div",{staticClass:"bg-cover h-100 mr-n3",attrs:{id:"foto-bg"}})])}],n=t("5530"),l=t("2f62"),c={components:{},name:"Login",data:function(){return{usuario:{email:"",password:""},mensaje:""}},methods:Object(n["a"])(Object(n["a"])({},Object(l["b"])(["guardarUsuario"])),{},{login:function(){var a=this;this.axios.post("/login",this.usuario).then((function(e){var t=e.data.token;a.guardarUsuario(t)})).catch((function(e){a.mensaje=e.response.data.err.message}))}})},u=c,d=(t("ff83"),t("2877")),m=Object(d["a"])(u,o,i,!1,null,"6d4df617",null),f=m.exports,p={name:"Registro",components:{Register:f}},v=p,b=Object(d["a"])(v,r,s,!1,null,null,null);e["default"]=b.exports},ddd0:function(a,e,t){},ff83:function(a,e,t){"use strict";t("ddd0")}}]);
//# sourceMappingURL=chunk-2575c26c.25a9352c.js.map