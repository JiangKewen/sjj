webpackJsonp([1],{"6zSq":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"XueSheng",data:function(){return{search_key:"",modeData:[{number:"2016-05-02",name:"王小虎",sex:"男",major:"计算机科学",address:"上海市普陀区金沙江路 1518 弄"},{number:"2016-05-02",name:"王小虎",sex:"男",major:"计算机科学",address:"上海市普陀区金沙江路 1518 弄"},{number:"2016-05-02",name:"王小虎",sex:"男",major:"计算机科学",address:"上海市普陀区金沙江路 1518 弄"},{number:"2016-05-02",name:"王小虎",sex:"男",major:"计算机科学",address:"上海市普陀区金沙江路 1518 弄"}]}},methods:{handleEdit:function(e,t){console.log(e,t)},handleDelete:function(e,t){console.log(e,t)}}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"xuesheng"}},[a("div",{staticClass:"search_mode"},[a("el-input",{staticClass:"search_in",attrs:{placeholder:"请输入关键字"},model:{value:e.search_key,callback:function(t){e.search_key=t},expression:"search_key"}}),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"info"}},[e._v("添加学生")]),e._v(" "),a("el-button",{attrs:{type:"success"}},[e._v("批量删除")])],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.modeData,border:"",stripe:""}},[a("el-table-column",{attrs:{type:"selection"}}),e._v(" "),a("el-table-column",{attrs:{prop:"number",label:"学号"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{prop:"sex",label:"性别"}}),e._v(" "),a("el-table-column",{attrs:{prop:"major",label:"所选专业"}}),e._v(" "),a("el-table-column",{attrs:{prop:"address",label:"家庭住址"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{attrs:{layout:"prev, pager, next",total:50}})],1)},staticRenderFns:[]};var r=a("VU/8")(n,l,!1,function(e){a("wP2A")},"data-v-64f2cd88",null);t.default=r.exports},wP2A:function(e,t){}});
//# sourceMappingURL=1.97ba395a62fce1018950.js.map