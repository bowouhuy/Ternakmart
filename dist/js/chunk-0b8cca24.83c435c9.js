(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b8cca24"],{"9fc6":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("AppBar",{attrs:{page:t.page}}),e("v-container",{attrs:{fluid:"","fill-height":""}},[e("v-layout",{attrs:{"align-center":"","justify-center":""}},[e("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[e("v-card",{staticClass:"elevation-0 mt-10"},[e("v-card-text",[e("v-form",{attrs:{id:"register"},on:{submit:function(a){return a.preventDefault(),t.pemesanan(a)}}},[e("v-text-field",{attrs:{"append-icon":"mdi-account",label:"Nama Lengkap",type:"text"},model:{value:t.alamat.name,callback:function(a){t.$set(t.alamat,"name",a)},expression:"alamat.name"}}),e("v-text-field",{attrs:{"append-icon":"mdi-map-marker",label:"Alamat",type:"text"},model:{value:t.alamat.alamat,callback:function(a){t.$set(t.alamat,"alamat",a)},expression:"alamat.alamat"}}),e("v-select",{attrs:{items:t.provinces,"item-text":"province","item-value":"province_id",label:"Provinsi","append-outer-icon":"mdi-map"},on:{change:t.getkotabyidProv},model:{value:t.alamat.selectedProv,callback:function(a){t.$set(t.alamat,"selectedProv",a)},expression:"alamat.selectedProv"}}),e("v-select",{attrs:{items:t.cities,"item-text":"city_name","item-value":"city_id",label:"Kabupaten/Kota","append-outer-icon":"mdi-map"},model:{value:t.alamat.selectedCity,callback:function(a){t.$set(t.alamat,"selectedCity",a)},expression:"alamat.selectedCity"}}),e("v-text-field",{attrs:{"append-icon":"mdi-note",label:"Note to Driver",type:"text"},model:{value:t.alamat.note,callback:function(a){t.$set(t.alamat,"note",a)},expression:"alamat.note"}})],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-btn",{staticClass:"white--text font-weight-bold",attrs:{type:"submit",color:"#139CA4",block:"",form:"register"}},[t._v(" Save ")])],1)],1),e("v-row",[e("v-col",{attrs:{cols:"12"}},[e("v-btn",{staticClass:"white--text font-weight-bold",attrs:{type:"submit",color:"red",block:"",outlined:"",form:"register"}},[t._v(" Remove ")])],1)],1)],1)],1)],1)],1)],1)},r=[],n=(e("b0c0"),e("dd38")),s=e("bc3a"),o=e.n(s),l={components:{AppBar:n["a"]},data:function(){return{page:{link:"/detail/"+this.$route.params.id,title:"Add Address"},ternak:{},alamat:{},order:{},parameter:{},profile:[],cities:[],provinces:[],costData:{}}},methods:{setProfile:function(t){this.profile=t},setTernak:function(t){this.ternak=t},pemesanan:function(){var t=this;this.order.id_ternak=this.ternak.id,this.order.id_user=this.$store.state.auth.user.id,this.order.ternak_harga=this.ternak.ternak_harga,this.order.masa_perawatan=12,this.order.total_harga=80*this.ternak.ternak_harga,this.order.transaksi_st="cart",this.order.transaksi_alamat=JSON.stringify(this.alamat),this.order.order_id="ORDER-"+(new Date).getTime(),this.order.origin_id=this.ternak.city_id,this.order.destination_id=472,this.parameter.order_id=this.order.order_id,this.parameter.gross_amount=this.order.total_harga,this.parameter.name=this.profile.name,this.parameter.email=this.profile.email,this.parameter.phone="089602015445",this.costData.origin=this.ternak.city_id,this.costData.destination=this.order.destination_id,this.costData.weight=800,this.costData.courier="jne",console.log(this.costData),o.a.post("http://ternakmart.id/ternakmart_api/public/api/transaksi",this.order).then((function(){t.$router.push({path:"/cart"}),t.$toast.success("Sukses Masuk Keranjang",{type:"success",position:"top-right",duration:3e3,dismissible:!0})})).catch((function(t){return console.log(t)}))},getkotabyidProv:function(){var t=this;o.a.get("http://ternakmart.id/ternakmart_api/public/api/lokasi/kota/"+this.alamat.selectedProv).then((function(a){t.cities=a.data.kota,console.log(t.cities)})).catch((function(t){return console.log(t)}))}},mounted:function(){var t=this;this.setProfile(this.$store.state.auth.user),o.a.get("http://ternakmart.id/ternakmart_api/public/api/ternak/"+this.$route.params.id).then((function(a){return t.setTernak(a.data.ternak)})).catch((function(t){return console.log(t)}))},created:function(){var t=this;o.a.get("http://ternakmart.id/ternakmart_api/public/api/lokasi/provinsi").then((function(a){t.provinces=a.data.provinsi})).catch((function(t){return console.log(t)}))}},c=l,d=e("2877"),p=e("6544"),m=e.n(p),u=e("8336"),h=e("b0af"),v=e("99d9"),f=e("62ad"),k=e("a523"),b=e("0e8f"),g=e("4bd4"),_=e("a722"),x=e("0fd9"),y=e("b974"),w=e("8654"),V=Object(d["a"])(c,i,r,!1,null,"7c7bbc8e",null);a["default"]=V.exports;m()(V,{VBtn:u["a"],VCard:h["a"],VCardText:v["c"],VCol:f["a"],VContainer:k["a"],VFlex:b["a"],VForm:g["a"],VLayout:_["a"],VRow:x["a"],VSelect:y["a"],VTextField:w["a"]})},dd38:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app-bar",{attrs:{absolute:"",color:"white"}},[e("v-btn",{attrs:{icon:"",color:"teal",to:t.page.link}},[e("v-icon",[t._v("mdi-chevron-left")])],1),e("span",{staticClass:"title font-weight-bold text-center mx-auto"},[t._v(t._s(t.page.title))])],1)},r=[],n={props:{page:{type:Object,required:!0}}},s=n,o=e("2877"),l=e("6544"),c=e.n(l),d=e("40dc"),p=e("8336"),m=e("132d"),u=Object(o["a"])(s,i,r,!1,null,null,null);a["a"]=u.exports;c()(u,{VAppBar:d["a"],VBtn:p["a"],VIcon:m["a"]})}}]);
//# sourceMappingURL=chunk-0b8cca24.83c435c9.js.map