(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8b24":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"row bg-light-green-3"},[e("div",{staticClass:"col q-ma-md"},[e("q-select",{attrs:{filled:"",dense:"",options:a.optionsLocation,label:"Lokacija"},model:{value:a.filterLocation,callback:function(t){a.filterLocation=t},expression:"filterLocation"}})],1),e("div",{staticClass:"col q-ma-md"},[e("q-select",{attrs:{filled:"",dense:"",options:a.optionsCustomer,label:"Stranka"},model:{value:a.filterCustomer,callback:function(t){a.filterCustomer=t},expression:"filterCustomer"}})],1),e("div",{staticClass:"col q-ma-md"},[e("q-select",{attrs:{filled:"",dense:"",options:a.optionsArticle,label:"Artikel"},model:{value:a.filterArticle,callback:function(t){a.filterArticle=t},expression:"filterArticle"}})],1)]),e("div",{staticClass:"q-ma-sm"},[e("q-tabs",{staticClass:"text-grey",attrs:{dense:"","active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("q-tab",{attrs:{name:"todo",icon:"pending",label:"Odprta opravila"}}),e("q-tab",{attrs:{name:"finished",icon:"check_circle_outline",label:"Zaključena opravila"}})],1),e("q-tab-panels",{attrs:{animated:""},model:{value:a.tab,callback:function(t){a.tab=t},expression:"tab"}},[e("q-tab-panel",{attrs:{name:"todo"}},[e("div",{staticClass:"text-h5 text-primary q-ma-md"},[a._v("Moja tekoča opravila")]),e("q-table",{staticStyle:{height:"12.5vh"},attrs:{data:a.activeProducts,columns:a.columnsA,"row-key":"name","virtual-scroll":"",pagination:a.pagination,"rows-per-page-options":[0],"hide-bottom":""},on:{"update:pagination":function(t){a.pagination=t}},scopedSlots:a._u([{key:"body",fn:function(t){return[e("q-tr",{class:!0===t.row.active?"bg-green-3":"",attrs:{props:t},on:{click:function(t){return a.$router.push("/task")}}},[e("q-td",{staticClass:"text-center"},[e("span",[a._v(a._s(t.row.number))])]),e("q-td",[e("span",[a._v(a._s(t.row.client))])]),e("q-td",[e("span",[a._v(a._s(t.row.article))])]),e("q-td",{key:"deadline"},[e("span",[a._v(a._s(t.row.deadline))])]),e("q-td",{key:"cur_quantity"},[e("span",[a._v(a._s(t.row.cur_quantity))])]),e("q-td",{key:"exp_quantity"},[e("span",[a._v(a._s(t.row.exp_quantity))])]),e("q-td",{key:"location"},[e("span",[a._v(a._s(t.row.location))])]),e("q-td",{key:"time",staticClass:"text-center"},[e("span",{staticStyle:{"font-size":"2vh","font-weight":"bold"}},[a._v(a._s(t.row.time))])])],1)]}}])}),e("div",{staticClass:"text-h5 q-ma-md"},[a._v("Odprta naročila")]),e("q-table",{staticStyle:{height:"40vh"},attrs:{data:a.allProducts,columns:a.columnsO,"row-key":"name","virtual-scroll":"",pagination:a.pagination,"rows-per-page-options":[0]},on:{"update:pagination":function(t){a.pagination=t}},scopedSlots:a._u([{key:"body",fn:function(t){return[e("q-tr",{class:!0===t.row.active?"bg-green-3":"",attrs:{props:t},on:{click:function(t){return a.$router.push("/task")}}},[e("q-td",{staticClass:"text-center"},[e("span",[a._v(a._s(t.row.number))])]),e("q-td",[e("span",[a._v(a._s(t.row.client))])]),e("q-td",[e("span",[a._v(a._s(t.row.article))])]),e("q-td",{key:"deadline"},[e("span",[a._v(a._s(t.row.deadline))])]),e("q-td",{key:"cur_quantity"},[e("span",[a._v(a._s(t.row.cur_quantity))])]),e("q-td",{key:"exp_quantity"},[e("span",[a._v(a._s(t.row.exp_quantity))])]),e("q-td",{key:"location"},[e("span",[a._v(a._s(t.row.location))])]),e("q-td",{key:"comment"},[e("span",{staticStyle:{"word-break":"break-all","white-space":"normal"}},[a._v(a._s(t.row.comment))])])],1)]}}])})],1),e("q-tab-panel",{attrs:{name:"finished"}},[e("div",{staticClass:"text-h5 q-ma-md"},[a._v("Zaključena opravila")]),e("q-table",{staticClass:"bg-light-green-2",staticStyle:{height:"60vh"},attrs:{data:a.allProducts,columns:a.columnsZ,"row-key":"name","virtual-scroll":"",pagination:a.pagination,"rows-per-page-options":[0]},on:{"update:pagination":function(t){a.pagination=t}},scopedSlots:a._u([{key:"body",fn:function(t){return[e("q-tr",{staticClass:"bg-white",attrs:{props:t}},[e("q-td",{staticClass:"text-center"},[e("span",[a._v(a._s(t.row.number))])]),e("q-td",[e("span",[a._v(a._s(t.row.client))])]),e("q-td",[e("span",[a._v(a._s(t.row.article))])]),e("q-td",{key:"cur_quantity"},[e("span",[a._v(a._s(t.row.cur_quantity))])]),e("q-td",{key:"packaging"},[e("span",[a._v(a._s(t.row.packaging))])]),e("q-td",{key:"location"},[e("span",[a._v(a._s(t.row.location))])]),e("q-td",{key:"comment"},[e("span",[a._v(a._s(t.row.comment))])])],1)]}}])})],1)],1)],1)])},l=[],i={name:"PageIndex",data(){return{tab:"todo",splitterModel:12,optionsLocation:["Ljutomer","Avstrija","Romunija"],optionsCustomer:["Hofer","Mercator","Spar"],optionsArticle:["Solata","Radič","Borovnice"],filterLocation:null,filterCustomer:null,filterArticle:null,pagination:{rowsPerPage:0},activeProducts:[{number:1,article:"Solata",client:"Hofer",deadline:"19/04/2021 14:00",cur_quantity:"1.000 glav",exp_quantity:"20.000 glav",location:"Ljutomer",comment:"",packaging:"",active:!0,time:"1h 4m"}],allProducts:[{number:1,article:"Solata",client:"Hofer",deadline:"19/04/2021 14:00",cur_quantity:"",exp_quantity:"20.000 glav",location:"Ljutomer",comment:"",packaging:"",active:!0},{number:2,article:"Radič",client:"Hofer",deadline:"20/04/2021 13:00",cur_quantity:"5.000 glav",exp_quantity:"15.000 glav",location:"Ljutomer",comment:"Veliko slabega radiča.",packaging:"5 glav na škatlo",active:!0},{number:3,article:"Borovnice",client:"Spar",deadline:"19/04/2021 10:00",cur_quantity:"100 KG",exp_quantity:"500 KG",location:"Avstrija",comment:"",packaging:"",active:!1},{number:4,article:"Solata",client:"Mercator",deadline:"18/04/2021 12:00",cur_quantity:"",exp_quantity:"5.000",location:"Avstrija",comment:"",packaging:"5 glav na škatlo",active:!1},{number:5,article:"Radič",client:"Mercator",deadline:"19/04/2021 12:00",cur_quantity:"",exp_quantity:"5.000",location:"Avstrija",comment:"",packaging:"15 glav na škatlo",active:!0},{number:6,article:"Borovnice",client:"Mercator",deadline:"18/04/2021 13:00",cur_quantity:"1.000",exp_quantity:"5.000",location:"Avstrija",comment:"Premalo škatel.",packaging:"",active:!1}],columnsA:[{name:"number",align:"center",label:"Številka",field:"number",sortable:!0},{name:"client",align:"left",label:"Stranka",field:"client",sortable:!0},{name:"article",align:"left",label:"Izdelek",field:"article",sortable:!0},{name:"deadline",align:"left",label:"Rok za dokončanje",field:"deadline",sortable:!0},{name:"cur_quantity",align:"left",label:"Trenutna količina",field:"cur_quantity"},{name:"exp_quantity",align:"left",label:"Pričakovana količina",field:"exp_quantity"},{name:"location",align:"left",label:"Lokacija",field:"location",sortable:!0},{name:"time",align:"left",label:"Čas trajanja opravila",field:"time"}],columnsO:[{name:"number",align:"center",label:"Številka",field:"number",sortable:!0},{name:"client",align:"left",label:"Stranka",field:"client",sortable:!0},{name:"article",align:"left",label:"Izdelek",field:"article",sortable:!0},{name:"deadline",align:"left",label:"Rok za dokončanje",field:"deadline",sortable:!0},{name:"cur_quantity",align:"left",label:"Trenutna količina",field:"cur_quantity"},{name:"exp_quantity",align:"left",label:"Pričakovana količina",field:"exp_quantity"},{name:"location",align:"left",label:"Lokacija",field:"location",sortable:!0},{name:"comment",align:"left",label:"Komentar",field:"comment",sortable:!0}],columnsZ:[{name:"number",align:"center",label:"Številka",field:"number",sortable:!0},{name:"client",align:"left",label:"Stranka",field:"client",sortable:!0},{name:"article",align:"left",label:"Izdelek",field:"article",sortable:!0},{name:"cur_quantity",align:"left",label:"Količina",field:"cur_quantity"},{name:"packaging",align:"left",label:"Faktor pakiranja",field:"packaging"},{name:"location",align:"left",label:"Lokacija",field:"location",sortable:!0},{name:"comment",align:"left",label:"Komentar",field:"comment"}]}}},o=i,r=e("2877"),c=e("ddd8"),s=e("429b"),d=e("7460"),u=e("adad"),m=e("823b"),p=e("eaac"),b=e("bd08"),g=e("db86"),_=e("eebe"),f=e.n(_),v=Object(r["a"])(o,n,l,!1,null,null,null);t["default"]=v.exports;f()(v,"components",{QSelect:c["a"],QTabs:s["a"],QTab:d["a"],QTabPanels:u["a"],QTabPanel:m["a"],QTable:p["a"],QTr:b["a"],QTd:g["a"]})}}]);