(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"49c3":function(t,a,e){"use strict";e("feae")},"531b":function(t,a,e){},"8b24":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",["Admin"===t.user.role?e("AdminView"):e("DefaultView")],1)},i=[],o=e("ded3"),l=e.n(o),s=e("2f62"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"text-h6 text-primary text-uppercase q-ma-md"},[t._v("Vsa odprta opravila")]),e("q-table",{staticClass:"q-ma-lg",staticStyle:{height:"70vh"},attrs:{data:t.allProducts,columns:t.columnsO,"row-key":"name","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0]},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"body",fn:function(a){return[e("q-tr",{class:!0===a.row.active?"bg-green-3":"",attrs:{props:a}},[e("q-td",{key:"id",staticClass:"text-center"},[e("span",{staticClass:"q-ma-sm"},[t._v(t._s(a.row.id))])]),e("q-td",{key:"name"},[e("span",[t._v(t._s(a.row.name))])]),e("q-td",{key:"description"},[e("span",{staticClass:"text-caption"},[t._v(t._s(a.row.description))])]),e("q-td",{key:"deadline"},[e("span",[t._v(t._s(a.row.deadline))])]),e("q-td",{key:"quantity"},[e("span",[t._v(t._s(a.row.cur_quantity))])]),e("q-td",{key:"exp_quantity"},[e("span",[t._v(t._s(a.row.exp_quantity))])]),e("q-td",{key:"location"},[e("span",[t._v(t._s(a.row.location))])]),e("q-td",{key:"comment"},[e("span",[t._v(t._s(a.row.comment))])])],1)]}}])})],1)])},c=[],d={name:"Tasks",data(){return{pagination:{rowsPerPage:0},allProducts:[{id:1,name:"Pokositi travo",description:"Pokositi travo pred rastlinjakom.",deadline:"21/04/2021 14:00",cur_quantity:"",exp_quantity:"20.000 glav",location:"Ljutomer",comment:"",active:!1},{id:2,name:"Pobrati radič",description:"Pobrati radič za solatni mix.",deadline:"18/4/2021 13:00",cur_quantity:"5.000 glav",exp_quantity:"15.000 glav",location:"Ljutomer",comment:"Veliko slabega radiča.",active:!0},{id:3,name:"Spakirat borovnice",description:"Spakirat borovnice v škatle.",deadline:"19/04/2021 10:00",cur_quantity:"50 KG",exp_quantity:"500 KG",location:"Avstrija",comment:"Premalo škatel za vse borovnice.",active:!0},{id:4,name:"Zložiti škatle",description:"Zložiti škatle za Hofer.",deadline:"18/04/2021 12:00",cur_quantity:"",exp_quantity:"5.000",location:"Avstrija",comment:"",active:!1}],columnsO:[{name:"id",required:!0,label:"Šifra",align:"center",field:"id",sortable:!0},{name:"name",required:!0,label:"Opravilo",align:"left",field:t=>t.name,sortable:!0},{name:"description",align:"left",label:"Opis",field:"description"},{name:"deadline",align:"left",label:"Rok za dokončanje",field:"deadline",sortable:!0},{name:"cur_quantity",align:"left",label:"Trenutna količina",field:"cur_quantity"},{name:"exp_quantity",align:"left",label:"Pričakovana količina",field:"exp_quantity"},{name:"location",align:"left",label:"Lokacija",field:"location",sortable:!0},{name:"comment",align:"left",label:"Komentar",field:"comment"}]}}},u=d,p=(e("49c3"),e("2877")),m=e("eaac"),_=e("bd08"),v=e("db86"),q=e("eebe"),y=e.n(q),k=Object(p["a"])(u,r,c,!1,null,null,null),f=k.exports;y()(k,"components",{QTable:m["a"],QTr:_["a"],QTd:v["a"]});var b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"text-h6 text-primary text-uppercase q-ma-md"},[t._v(t._s(t.$t("myTasks")))]),e("q-table",{staticClass:"q-ma-lg",staticStyle:{height:"30vh"},attrs:{data:t.allProducts,columns:t.columnsO,"row-key":"name","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],"hide-bottom":"",dense:""},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"body",fn:function(a){return[e("q-tr",{class:!0===a.row.active?"bg-green-3":"",attrs:{props:a},on:{click:function(a){return t.$router.push("/task")}}},[e("q-td",{key:"id",staticClass:"text-center"},[e("span",{staticClass:"q-ma-sm"},[t._v(t._s(a.row.id))])]),e("q-td",{key:"name"},[e("span",[t._v(t._s(a.row.name))])]),e("q-td",{key:"description"},[e("span",{staticClass:"text-caption"},[t._v(t._s(a.row.description))])]),e("q-td",{key:"deadline"},[e("span",[t._v(t._s(a.row.deadline))])]),e("q-td",{key:"quantity"},[e("span",[t._v(t._s(a.row.cur_quantity))])]),e("q-td",{key:"exp_quantity"},[e("span",[t._v(t._s(a.row.exp_quantity))])]),e("q-td",{key:"location"},[e("span",[t._v(t._s(a.row.location))])]),e("q-td",{key:"comment"},[e("span",[t._v(t._s(a.row.comment))])])],1)]}}])})],1),e("div",{staticClass:"row"},[e("div",{staticClass:"text-h6 text-primary text-uppercase q-ma-md"},[t._v(t._s(t.$t("allTasks")))]),e("q-table",{staticClass:"q-ma-lg",staticStyle:{height:"30vh"},attrs:{data:t.allProducts,columns:t.columnsO,"row-key":"name","virtual-scroll":"",pagination:t.pagination,"rows-per-page-options":[0],"hide-bottom":"",dense:""},on:{"update:pagination":function(a){t.pagination=a}},scopedSlots:t._u([{key:"body",fn:function(a){return[e("q-tr",{class:!0===a.row.active?"bg-green-3":"",attrs:{props:a},on:{click:function(a){return t.$router.push("/task")}}},[e("q-td",{key:"id",staticClass:"text-center"},[e("span",{staticClass:"q-ma-sm"},[t._v(t._s(a.row.id))])]),e("q-td",{key:"name"},[e("span",[t._v(t._s(a.row.name))])]),e("q-td",{key:"description"},[e("span",{staticClass:"text-caption"},[t._v(t._s(a.row.description))])]),e("q-td",{key:"deadline"},[e("span",[t._v(t._s(a.row.deadline))])]),e("q-td",{key:"quantity"},[e("span",[t._v(t._s(a.row.cur_quantity))])]),e("q-td",{key:"exp_quantity"},[e("span",[t._v(t._s(a.row.exp_quantity))])]),e("q-td",{key:"location"},[e("span",[t._v(t._s(a.row.location))])]),e("q-td",{key:"comment"},[e("span",[t._v(t._s(a.row.comment))])])],1)]}}])})],1)])},g=[],w={name:"Tasks",data(){return{pagination:{rowsPerPage:0},allProducts:[{id:1,name:"Pokositi travo",description:"Pokositi travo pred rastlinjakom.",deadline:"21/04/2021 14:00",cur_quantity:"",exp_quantity:"20.000 glav",location:"Ljutomer",comment:"",active:!1},{id:2,name:"Pobrati radič",description:"Pobrati radič za solatni mix.",deadline:"18/4/2021 13:00",cur_quantity:"5.000 glav",exp_quantity:"15.000 glav",location:"Ljutomer",comment:"Veliko slabega radiča.",active:!0},{id:3,name:"Spakirat borovnice",description:"Spakirat borovnice v škatle.",deadline:"19/04/2021 10:00",cur_quantity:"50 KG",exp_quantity:"500 KG",location:"Avstrija",comment:"Premalo škatel za vse borovnice.",active:!1},{id:4,name:"Zložiti škatle",description:"Zložiti škatle za Hofer.",deadline:"18/04/2021 12:00",cur_quantity:"",exp_quantity:"5.000",location:"Avstrija",comment:"",active:!1}],columnsO:[{name:"id",required:!0,label:"Šifra",align:"center",field:"id",sortable:!0},{name:"name",required:!0,label:"Opravilo",align:"left",field:t=>t.name,sortable:!0},{name:"description",align:"left",label:"Opis",field:"description"},{name:"deadline",align:"left",label:"Rok za dokončanje",field:"deadline",sortable:!0},{name:"cur_quantity",align:"left",label:"Trenutna količina",field:"cur_quantity"},{name:"exp_quantity",align:"left",label:"Pričakovana količina",field:"exp_quantity"},{name:"location",align:"left",label:"Lokacija",field:"location",sortable:!0},{name:"comment",align:"left",label:"Komentar",field:"comment"}]}}},x=w,h=(e("bf37"),Object(p["a"])(x,b,g,!1,null,null,null)),P=h.exports;y()(h,"components",{QTable:m["a"],QTr:_["a"],QTd:v["a"]});var C={name:"Index",components:{AdminView:f,DefaultView:P},data(){return{user:{}}},mounted(){this.user=this.getCurrentUser(),console.log(this.user)},methods:l()({},Object(s["c"])("user",["getCurrentUser"]))},j=C,O=e("9989"),T=Object(p["a"])(j,n,i,!1,null,null,null);a["default"]=T.exports;y()(T,"components",{QPage:O["a"]})},bf37:function(t,a,e){"use strict";e("531b")},feae:function(t,a,e){}}]);