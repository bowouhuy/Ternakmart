(function(t){function e(e){for(var n,r,c=e[0],s=e[1],u=e[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-0b89530f":"af5ddd14","chunk-3b16f84f":"433f3822","chunk-0b8cca24":"a4e6ed6a","chunk-5ad20dfa":"31c6d3d9","chunk-44fa9cad":"26d768ec","chunk-066ba52e":"38f3fd55","chunk-7ef8b100":"3cfafec2","chunk-4c37ac8e":"cd486595","chunk-53f8c601":"245ec3fc","chunk-94db13b2":"43ccbfb3","chunk-ed9af23a":"c29b8f31"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a={"chunk-3b16f84f":1,"chunk-5ad20dfa":1,"chunk-44fa9cad":1,"chunk-066ba52e":1,"chunk-7ef8b100":1,"chunk-94db13b2":1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({}[t]||t)+"."+{"chunk-0b89530f":"31d6cfe0","chunk-3b16f84f":"09113b6e","chunk-0b8cca24":"31d6cfe0","chunk-5ad20dfa":"4b3fadd8","chunk-44fa9cad":"921d48f7","chunk-066ba52e":"0b94f07b","chunk-7ef8b100":"6d700aa9","chunk-4c37ac8e":"31d6cfe0","chunk-53f8c601":"31d6cfe0","chunk-94db13b2":"d3fa0d7a","chunk-ed9af23a":"31d6cfe0"}[t]+".css",o=s.p+n,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return e()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===n||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[t],f.parentNode.removeChild(f),a(i)},f.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00c2":function(t,e,a){"use strict";var n="id_token",r=function(){return window.localStorage.getItem(n)},o=function(t){window.localStorage.setItem(n,t)},i=function(){window.localStorage.removeItem(n)},c=function(t){window.localStorage.setItem("uid",t)},s=function(){return window.localStorage.getItem("uid")};e["a"]={getToken:r,saveToken:o,destroyToken:i,saveId:c,getId:s}},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("d3b7"),a("3ca3"),a("ddb0");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("div",{attrs:{id:"app"}},[a("v-main",[a("fade-transition",{attrs:{origin:"center",mode:"out-in",duration:250}},[a("router-view")],1)],1),a("router-view",{attrs:{name:"footer"}})],1)])},o=[],i=a("7c76"),c={components:{FadeTransition:i["a"]}},s=c,u=a("2877"),l=a("6544"),d=a.n(l),f=a("7496"),m=a("f6c4"),v=Object(u["a"])(s,r,o,!1,null,null,null),h=v.exports;d()(v,{VApp:f["a"],VMain:m["a"]});var p,b,g=a("8c4f"),k=a("2f62"),_=a("0e44"),w=a("ade3"),y=a("5ce5"),C=a("00c2"),V=a("6c33"),x="logOut",A="setUser",j="setError",O={errors:null,user:{},isAuthenticated:!!C["a"].getToken()},S={currentUser:function(t){return t.user},isAuthenticated:function(t){return t.isAuthenticated}},T=(p={},Object(w["a"])(p,V["b"],(function(t,e){var a={user:e}.user;return new Promise((function(e){y["a"].post("login",a).then((function(a){var n=a.data;t.commit(A,n),e(n)})).catch((function(e){var a=e.response;t.commit(j,a.data)}))}))})),Object(w["a"])(p,V["c"],(function(t){t.commit(x)})),Object(w["a"])(p,V["d"],(function(t,e){var a={user:e}.user;return new Promise((function(e,n){y["a"].post("users",a).then((function(a){var n=a.data;t.commit(A,n.user),e(n)})).catch((function(e){var a=e.response;t.commit(j,a.data),n(a)}))}))})),Object(w["a"])(p,V["a"],(function(t){if(C["a"].getToken()){y["a"].setHeader();var e=C["a"].getId();y["a"].get("users",e).then((function(e){var a=e.data;t.commit(A,a)})).catch((function(e){var a=e.response;t.commit(j,a)}))}else t.commit(x)})),Object(w["a"])(p,V["e"],(function(t,e){var a=e.email,n=e.username,r=e.password,o=e.image,i=e.bio,c={email:a,username:n,bio:i,image:o};return r&&(c.password=r),y["a"].put("user",c).then((function(e){var a=e.data;return t.commit(A,a.user),a}))})),p),P=(b={},Object(w["a"])(b,j,(function(t,e){t.errors=e})),Object(w["a"])(b,A,(function(t,e){t.isAuthenticated=!0,t.user=e.user,t.errors={},C["a"].saveToken(e.token.original.token),C["a"].saveId(e.user.id)})),Object(w["a"])(b,x,(function(t){t.isAuthenticated=!1,t.user={},t.errors={},C["a"].destroyToken()})),b),I={state:O,actions:T,mutations:P,getters:S};n["a"].use(k["a"]);var E=new k["a"].Store({plugins:[Object(_["a"])({storage:window.sessionStorage})],modules:{auth:I}}),L=a("9c3b"),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-bottom-navigation",{staticClass:"nav-bottom position",attrs:{"background-color":"#139CA4",color:"dark-grey",fixed:""}},[a("v-btn",{attrs:{to:{name:"home"}}},[a("span",[t._v("Home")]),a("v-icon",[t._v("mdi-home")])],1),a("v-btn",[a("span",[t._v("Activity")]),a("v-icon",[t._v("mdi-clipboard-list-outline")])],1),a("v-btn",{attrs:{to:{name:"cart"}}},[a("span",[t._v("Cart")]),0==(t.updateCart?t.updateCart.length:t.jumlah_cart.length)?a("v-badge",{attrs:{overlap:"",color:"#139CA4",content:t.updateCart?t.updateCart.length:t.jumlah_cart.length,bordered:"",value:!1}},[a("v-icon",[t._v("mdi-cart")])],1):a("v-badge",{attrs:{overlap:"",color:"#139CA4",content:t.updateCart?t.updateCart.length:t.jumlah_cart.length,bordered:""}},[a("v-icon",[t._v("mdi-cart")])],1)],1),a("v-btn",{attrs:{to:{name:"profile"}}},[a("span",[t._v("Account")]),a("v-icon",[t._v("mdi-account")])],1)],1)},$=[],B=a("bc3a"),N=a.n(B),D={name:"app-footer",props:["updateCart"],data:function(){return{year:(new Date).getFullYear(),e3:0,counts:[],jumlah_cart:[]}},computed:{},methods:{setJumlah:function(t){this.jumlah_cart=t}},mounted:function(){var t=this;N.a.get("transaksi/"+this.$store.state.auth.user.id+"/cart").then((function(e){return t.setJumlah(e.data.cart)})).catch((function(t){return console.log(t)}))}},F=D,J=(a("841c"),a("4ca6")),M=a("b81c"),U=a("8336"),R=a("132d"),H=Object(u["a"])(F,q,$,!1,null,null,null),z=H.exports;d()(H,{VBadge:J["a"],VBottomNavigation:M["a"],VBtn:U["a"],VIcon:R["a"]});var W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","mt-5":"","mb-12":""}},[a("v-row",{staticClass:"justify-md",attrs:{"mt-8":""}},[a("v-col",{attrs:{cols:"4"}},[a("v-avatar",{attrs:{color:"primary",size:"100"}},[t._v(t._s(t.profile.name))])],1),a("v-col",{attrs:{cols:"6"}},[a("h2",[t._v(t._s(t.profile.name))]),a("subtitle-1",[t._v(t._s(t.profile.email))])],1),a("v-cols",{attrs:{cols:"2"}},[a("v-menu",{attrs:{right:"",bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),n),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[a("v-list",[a("v-list-item",{on:{click:t.logout}},[a("v-list-item-title",[t._v("Logout")])],1)],1)],1)],1)],1),a("v-divider",{attrs:{inset:""}}),a("div",{staticClass:"row mt-3"},[a("v-card",{staticClass:"col-12"},[a("v-tabs",{attrs:{"background-color":"transparent",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab",[t._v("Activity")]),a("v-tab",[t._v("Transaksi")])],1),a("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[a("v-tab-item",[a("v-card",{attrs:{color:"basil",flat:""}},[a("v-row",{attrs:{dense:""}},t._l(t.carts,(function(e,n){return a("v-col",{key:n,attrs:{cols:"12"}},[a("v-card",[a("div",{staticClass:"d-flex flex-no-wrap"},[a("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[a("v-img",{attrs:{src:e.file_path}})],1),a("div",[a("v-card-title",{staticClass:"text-h5",domProps:{textContent:t._s(e.ternak_nama)}}),a("v-card-subtitle",{domProps:{textContent:t._s(e.ternak_deskripsi)}}),a("v-card-subtitle",[a("div",{staticClass:"subtitle font-weight-bold",attrs:{color:"#FF8F0B"}},[t._v(" Rp. "+t._s(t.formatPrice(e.ternak_harga))+" ")])]),a("v-card-actions",[a("div",{staticClass:"text-center"},[a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"#139CA4",dark:""}},"v-btn",o,!1),r),[t._v(" Details ")]),a("v-btn",{attrs:{color:"orange lighten-2",dark:"",to:"payment/"+e.id}},[t._v(" Checkout ")])]}}],null,!0),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline grey lighten-2"},[t._v(" Detail Pesanan ")]),a("v-card-text",[a("table",{staticClass:"table"},[a("tbody",[a("tr",[a("td",[t._v("Nama Ternak")]),a("td",[t._v(" : ")]),a("td",[t._v(t._s(e.ternak_nama))])]),a("tr",[a("td",[t._v("Deskripsi")]),a("td",[t._v(" : ")]),a("td",[t._v(t._s(e.ternak_deskripsi))])]),a("tr",[a("td",[t._v("Harga")]),a("td",[t._v(" : ")]),a("td",[t._v(t._s(e.ternak_harga))])]),a("tr",[a("td",[t._v("Penerima")]),a("td",[t._v(" : ")]),a("td",[t._v(t._s(JSON.parse(e.transaksi_alamat).name))])]),a("tr",[a("td",[t._v("Detail Alamat")]),a("td",[t._v(" : ")]),a("td",[t._v(t._s(JSON.parse(e.transaksi_alamat).alamat)+", "+t._s(JSON.parse(e.transaksi_alamat).detail_alamat)+" ")])]),a("tr",[a("td",[t._v("Note")]),a("td",[t._v(" : ")]),a("td",[t._v(t._s(JSON.parse(e.transaksi_alamat).note))])])])])]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"orange lighten-2",dark:"",to:"payment/"+e.id}},[t._v(" Checkout ")])],1)],1)],1)],1)])],1)],1)])],1)})),1)],1)],1),a("v-tab-item",[a("v-card",{attrs:{color:"basil",flat:""}},[a("v-card-text",[t._v("Transaksi yg dilakukan")])],1)],1)],1)],1)],1)],1)},K=[],Y=(a("ac1f"),a("5319"),a("b680"),a("25f0"),{name:"Profile",components:{},data:function(){return{profile:[],carts:{},tab:null,items:["Appetizers","Entrees","Deserts","Cocktails"],text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}},methods:{logout:function(){var t=this;this.$store.dispatch(V["c"]).then((function(){t.$router.push({name:"login"})}))},setProfile:function(t){this.profile=t},setCarts:function(t){this.carts=t,console.log(this.carts)},formatPrice:function(t){var e=(t/1).toFixed(2).replace(".",",");return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}},mounted:function(){var t=this;this.setProfile(this.$store.state.auth.user),console.log(this.$store.state.auth.user),N.a.get("http://ternakmart.id/ternakmart_api/public/api/transaksi/"+this.$store.state.auth.user.id).then((function(e){return t.setCarts(e.data.cart)})).catch((function(t){return console.log(t)}))}}),G=Y,Q=a("8212"),X=a("b0af"),Z=a("99d9"),tt=a("62ad"),et=a("a523"),at=a("169a"),nt=a("ce7e"),rt=a("adda"),ot=a("8860"),it=a("da13"),ct=a("5d23"),st=a("e449"),ut=a("0fd9"),lt=a("2fa4"),dt=a("71a3"),ft=a("c671"),mt=a("fe57"),vt=a("aac8"),ht=Object(u["a"])(G,W,K,!1,null,null,null),pt=ht.exports;d()(ht,{VAvatar:Q["a"],VBtn:U["a"],VCard:X["a"],VCardActions:Z["a"],VCardSubtitle:Z["b"],VCardText:Z["c"],VCardTitle:Z["d"],VCol:tt["a"],VContainer:et["a"],VDialog:at["a"],VDivider:nt["a"],VIcon:R["a"],VImg:rt["a"],VList:ot["a"],VListItem:it["a"],VListItemTitle:ct["b"],VMenu:st["a"],VRow:ut["a"],VSpacer:lt["a"],VTab:dt["a"],VTabItem:ft["a"],VTabs:mt["a"],VTabsItems:vt["a"]}),n["a"].use(g["a"]);var bt=new g["a"]({routes:[{path:"/splash",name:"splash",component:function(){return a.e("chunk-ed9af23a").then(a.bind(null,"8f75"))}},{path:"/login",name:"login",component:function(){return a.e("chunk-4c37ac8e").then(a.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return Promise.all([a.e("chunk-3b16f84f"),a.e("chunk-5ad20dfa")]).then(a.bind(null,"73cf"))}},{path:"/",name:"home",components:{header:L["a"],default:function(){return Promise.all([a.e("chunk-44fa9cad"),a.e("chunk-7ef8b100")]).then(a.bind(null,"1aa0"))},footer:z},meta:{requiresAuth:!1}},{path:"/detail/:id",name:"detail/",components:{header:L["a"],default:function(){return a.e("chunk-94db13b2").then(a.bind(null,"fe9d"))}}},{path:"/detail/:id/add",name:"detail_add",components:{default:function(){return Promise.all([a.e("chunk-3b16f84f"),a.e("chunk-0b8cca24")]).then(a.bind(null,"9fc6"))}}},{path:"/payment/:id",name:"payment",components:{default:function(){return a.e("chunk-53f8c601").then(a.bind(null,"7aff"))}}},{path:"/cart",name:"cart",components:{header:L["a"],default:function(){return a.e("chunk-0b89530f").then(a.bind(null,"359b"))},footer:z},meta:{requiresAuth:!0}},{path:"/profile",name:"profile",components:{header:L["a"],default:pt,footer:z},meta:{requiresAuth:!0}},{path:"/qurban",name:"qurban",components:{header:L["a"],default:function(){return Promise.all([a.e("chunk-44fa9cad"),a.e("chunk-066ba52e")]).then(a.bind(null,"4c15"))},footer:z},meta:{requiresAuth:!1}}]});bt.beforeEach((function(t,e,a){t.matched.some((function(t){return t.meta.requiresAuth}))?E.getters.isAuthenticated?a():a({name:"splash"}):a()}));var gt=bt,kt=a("b079"),_t=a.n(kt),wt=a("0628"),yt=a.n(wt),Ct=a("f309");n["a"].use(Ct["a"]);var Vt=new Ct["a"]({});a("ce8c");n["a"].config.productionTip=!1,n["a"].use(_t.a),n["a"].use(yt.a),y["a"].init(),gt.beforeEach((function(t,e,a){return Promise.all([E.dispatch(V["a"])]).then(a)})),new n["a"]({router:gt,store:E,vuetify:Vt,render:function(t){return t(h)}}).$mount("#app")},"5ce5":function(t,e,a){"use strict";a("99af");var n=a("2b0e"),r=a("bc3a"),o=a.n(r),i=a("2106"),c=a.n(i),s=a("00c2"),u="http://ternakmart.id/ternakmart_api/public/api/",l={init:function(){n["a"].use(c.a,o.a),n["a"].axios.defaults.baseURL=u},setHeader:function(){n["a"].axios.defaults.headers.common["Authorization"]="Bearer ".concat(s["a"].getToken())},query:function(t,e){return n["a"].axios.get(t,e).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))},get:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n["a"].axios.get("".concat(t,"/").concat(e)).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))},post:function(t,e){return n["a"].axios.post("".concat(t),e)},update:function(t,e,a){return n["a"].axios.put("".concat(t,"/").concat(e),a)},put:function(t,e){return n["a"].axios.put("".concat(t),e)},delete:function(t){return n["a"].axios.delete(t).catch((function(t){throw new Error("[RWV] ApiService ".concat(t))}))}};e["a"]=l},"6c33":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"d",(function(){return o})),a.d(e,"e",(function(){return i})),a.d(e,"a",(function(){return c}));var n="login",r="logout",o="register",i="updateUser",c="checkAuth"},"841c":function(t,e,a){"use strict";a("ab69")},"9c3b":function(t,e,a){"use strict";var n=function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("div",[n("v-app-bar",{attrs:{color:"#139CA4",flat:""}},[n("v-img",{attrs:{src:"img/brand/ternakmart.png","max-height":"30","max-width":"30"}}),n("v-spacer"),n("v-text-field",{staticClass:"ml-2 mt-7",attrs:{label:"Cari","single-line":"",solo:"",dense:"","append-icon":"mdi-magnify"}}),n("v-spacer"),n("v-menu",{attrs:{left:"",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),a),[n("v-icon",[e._v("mdi-dots-vertical")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(){t.$router.push({path:"/profile"})}}},[n("v-list-item-title",[e._v("Profile")])],1),n("v-list-item",{on:{click:e.logout}},[n("v-list-item-title",[e._v("Logout")])],1)],1)],1)],1)],1)},r=[],o=a("5530"),i=a("2f62"),c=a("6c33"),s={computed:Object(o["a"])({},Object(i["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){var t=this;this.$store.dispatch(c["c"]).then((function(){t.$router.push({name:"login"})}))}}},u=s,l=a("2877"),d=a("6544"),f=a.n(d),m=a("40dc"),v=a("8336"),h=a("132d"),p=a("adda"),b=a("8860"),g=a("da13"),k=a("5d23"),_=a("e449"),w=a("2fa4"),y=a("8654"),C=Object(l["a"])(u,n,r,!1,null,null,null);e["a"]=C.exports;f()(C,{VAppBar:m["a"],VBtn:v["a"],VIcon:h["a"],VImg:p["a"],VList:b["a"],VListItem:g["a"],VListItemTitle:k["b"],VMenu:_["a"],VSpacer:w["a"],VTextField:y["a"]})},ab69:function(t,e,a){}});
//# sourceMappingURL=app.ff309325.js.map