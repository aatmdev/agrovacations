(function(e){function t(t){for(var r,l,o=t[0],c=t[1],u=t[2],f=0,v=[];f<o.length;f++)l=o[f],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&v.push(a[l][0]),a[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(v.length)v.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navigation"),n("router-view",{staticClass:"container"})],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav",{staticClass:"site-nav navbar navbar-expand bg-primary navbar-dark"},[n("div",{staticClass:"container-fluid"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("AgroVacations")]),n("div",{staticClass:"navbar-nav ml-auto"},[n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/logincliente"}},[e._v("Login Cliente")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/loginentidad"}},[e._v("Login Entidad")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/registrocliente"}},[e._v("Registro Cliente")]),n("router-link",{staticClass:"nav-item nav-link",attrs:{to:"/registroentidad"}},[e._v("Registro Entidad")])],1)],1)])])},o=[],c=n("2877"),u={},s=Object(c["a"])(u,l,o,!1,null,null,null),f=s.exports,v={name:"app",components:{Navigation:f}},p=v,d=(n("5c0b"),Object(c["a"])(p,a,i,!1,null,null,null)),_=d.exports,m=n("8c4f"),h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("This is our home")])])}],g={name:"Home"},E=g,O=Object(c["a"])(E,h,b,!1,null,null,null),j=O.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("LoginCliente")])])}],$={},x=Object(c["a"])($,y,C,!1,null,null,null),k=x.exports,w=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("LoginEntidad")])])}],L={},R=Object(c["a"])(L,w,P,!1,null,null,null),S=R.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("PerfilCliente")])])}],H={},J=Object(c["a"])(H,M,T,!1,null,null,null),N=J.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},V=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("PerfilEntidad")])])}],q={},z=Object(c["a"])(q,A,V,!1,null,null,null),B=z.exports,D=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},F=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("RegistroCliente")])])}],G={},I=Object(c["a"])(G,D,F,!1,null,null,null),K=I.exports,Q=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("RegistroEntidad")])])}],W={},X=Object(c["a"])(W,Q,U,!1,null,null,null),Y=X.exports;r["a"].use(m["a"]);var Z=[{path:"/",name:"Home",component:j},{path:"/logincliente",name:"LoginCliente",component:k},{path:"/loginentidad",name:"LoginEntidad",component:S},{path:"/perfilcliente",name:"PerfilCliente",component:N},{path:"/perfilentidad",name:"PerfilEntidad",component:B},{path:"/registrocliente",name:"RegistroCliente",component:K},{path:"/registroentidad",name:"RegistroEntidad",component:Y},{path:"*",redirect:"/"}],ee=new m["a"]({routes:Z}),te=ee;r["a"].config.productionTip=!1,new r["a"]({router:te,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.03cbcb6b.js.map