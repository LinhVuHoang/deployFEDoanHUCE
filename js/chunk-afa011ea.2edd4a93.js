(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afa011ea"],{2510:function(t,a,e){},"3f5c":function(t,a,e){"use strict";var o=e("f121");const s="TKB_HocKy",i="TKB_Dot",n="TKB_DS_Sinhvien",r="TKB_LichThi",c="TKB_GiangDay",h="Nganh";class l{getTKBHocKy(t){return o["a"].get(s,{params:t})}getTKBLichThi(t){return o["a"].get(r,{params:t})}getDotHocKy(){return o["a"].get(i)}getdssv(t,a,e){return o["a"].get(n+"/"+t+"/"+a+"/"+e)}getTKBGiangDay(t){return o["a"].get(c,{params:t})}getNganh(){return o["a"].get(h)}}a["a"]=new l},f932:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-card",[e("div",[e("a-row",{attrs:{type:"flex",align:"middle"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:"/../images/banner.png",alt:"Banner"}})]),e("a-form",{staticClass:"product__search-form",on:{submit:t.handleSearch}},[e("a-row",[e("a-col",{staticStyle:{"padding-right":"20px"},attrs:{span:14}},[e("a-form-item",[e("a-input-search",{attrs:{placeholder:"Mã môn/ Tên môn/ Mã Lớp"},model:{value:t.params.search,callback:function(a){t.$set(t.params,"search",a)},expression:"params.search"}},[e("a-icon",{attrs:{type:"search"}})],1)],1)],1),e("a-col",{staticStyle:{"padding-right":"20px"},attrs:{span:7}},[e("a-form-item",[e("a-select",{attrs:{placeholder:t.datahk[0].TenDot},model:{value:t.params.hocky,callback:function(a){t.$set(t.params,"hocky",a)},expression:"params.hocky"}},t._l(t.datahk,(function(a,o){return e("a-select-option",{key:o,attrs:{value:a.TenDot}},[t._v(t._s(a.TenDot))])})),1)],1)],1),e("a-col",{staticStyle:{float:"right"},attrs:{span:3}},[e("a-form-item",[e("a-date-picker",{attrs:{format:"DD-MM-YYYY"},on:{change:t.getDate},model:{value:this.params.ngaythi,callback:function(a){t.$set(this.params,"ngaythi",a)},expression:"this.params.ngaythi"}})],1)],1)],1)],1),e("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSearch}},[t._v(" Search ")]),e("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.resetButton}},[t._v(" Reset ")]),e("div",[e("a-radio-group",{staticStyle:{float:"right"},on:{change:t.handleSearch},model:{value:t.params.orderby,callback:function(a){t.$set(t.params,"orderby",a)},expression:"params.orderby"}},[e("a-radio",{attrs:{value:"TuTiet"}},[t._v("Sắp xếp theo thứ tiết")]),e("a-radio",{attrs:{value:"MaMonHoc"}},[t._v("Sắp xếp môn học")])],1)],1)],1),e("div",{staticClass:"col-md-12 container",staticStyle:{"margin-top":"50px"}},[e("div",{staticClass:"table-wrap"},[e("table",{staticClass:"table table-bordered",staticStyle:{"--bs-table-bg":"#2a8ecd","border-right":"#5c5d62","font-family":"Tahoma"}},[e("thead",[e("tr",[e("th",{staticStyle:{color:"#f6fffa"}},[t._v("MaMH")]),e("th",{staticStyle:{color:"#f6fffa"}},[t._v("Tên MH")]),e("th",{staticStyle:{color:"#f6fffa"}},[t._v("Mã lớp")]),e("th",{staticStyle:{color:"#f6fffa"}},[t._v("STC")]),e("th",{staticStyle:{color:"#f6fffa"}},[t._v("Thứ")]),e("th",{staticStyle:{color:"#f6fffa"}},[t._v("Tiết BD")]),e("th",{staticStyle:{color:"#f6fffa"}},[t._v("ST")]),e("th",{staticStyle:{color:"#f6fffa"}},[t._v("Phòng")]),e("th",{staticStyle:{color:"#f6fffa"}},[t._v("Giảng viên")]),e("th",{staticStyle:{color:"#f6fffa"}},[t._v("Ngày Thi")])])]),e("tbody",[t._l(t.data,(function(a,o){return[t._l(a.items,(function(o,s){return[e("tr",[0==s?e("td",{attrs:{rowspan:a.items.length}},[e("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(a.MaMonHoc))])]):t._e(),0==s?e("td",{attrs:{rowspan:a.items.length}},[e("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(a.TenMonHoc))])]):t._e(),0==s?e("td",{attrs:{rowspan:a.items.length}},[e("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(a.MaLopHoc))])]):t._e(),0==s?e("td",{attrs:{rowspan:a.items.length}},[e("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(a.SoTinChi))])]):t._e(),0==s?e("td",{attrs:{rowspan:a.items.length}},[e("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(a.Thu))])]):t._e(),0==s?e("td",{attrs:{rowspan:a.items.length}},[e("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(a.TuTiet))])]):t._e(),0==s?e("td",{attrs:{rowspan:a.items.length}},[e("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(a.DenTiet-a.TuTiet+1))])]):t._e(),0==s?e("td",{attrs:{rowspan:a.items.length}},[a.MaPhong?e("span",{staticStyle:{color:"#002a5c"}},[e("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(a.MaPhong))])]):e("span")]):t._e(),e("td",[e("a-popover",[e("template",{slot:"title"},[e("p",{staticStyle:{"padding-top":"15px"}},[e("svg",{attrs:{width:"15px",height:"15px",viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",fill:"#000000"}},[e("g",{attrs:{id:"SVGRepo_bgCarrier","stroke-width":"0"}}),e("g",{attrs:{id:"SVGRepo_tracerCarrier","stroke-linecap":"round","stroke-linejoin":"round"}}),e("g",{attrs:{id:"SVGRepo_iconCarrier"}},[e("title",[t._v("profile_round [#1346]")]),t._v(" "),e("desc",[t._v("Created with Sketch.")]),t._v(" "),e("defs"),t._v(" "),e("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{id:"Dribbble-Light-Preview",transform:"translate(-380.000000, -2119.000000)",fill:"#000000"}},[e("g",{attrs:{id:"icons",transform:"translate(56.000000, 160.000000)"}},[e("path",{attrs:{d:"M338.083123,1964.99998 C338.083123,1962.79398 336.251842,1960.99998 334,1960.99998 C331.748158,1960.99998 329.916877,1962.79398 329.916877,1964.99998 C329.916877,1967.20599 331.748158,1968.99999 334,1968.99999 C336.251842,1968.99999 338.083123,1967.20599 338.083123,1964.99998 M341.945758,1979 L340.124685,1979 C339.561214,1979 339.103904,1978.552 339.103904,1978 C339.103904,1977.448 339.561214,1977 340.124685,1977 L340.5626,1977 C341.26898,1977 341.790599,1976.303 341.523154,1975.662 C340.286989,1972.69799 337.383888,1970.99999 334,1970.99999 C330.616112,1970.99999 327.713011,1972.69799 326.476846,1975.662 C326.209401,1976.303 326.73102,1977 327.4374,1977 L327.875315,1977 C328.438786,1977 328.896096,1977.448 328.896096,1978 C328.896096,1978.552 328.438786,1979 327.875315,1979 L326.054242,1979 C324.778266,1979 323.773818,1977.857 324.044325,1976.636 C324.787453,1973.27699 327.107688,1970.79799 330.163906,1969.67299 C328.769519,1968.57399 327.875315,1966.88999 327.875315,1964.99998 C327.875315,1961.44898 331.023403,1958.61898 334.733941,1959.04198 C337.422678,1959.34798 339.650022,1961.44698 340.05323,1964.06998 C340.400296,1966.33099 339.456073,1968.39599 337.836094,1969.67299 C340.892312,1970.79799 343.212547,1973.27699 343.955675,1976.636 C344.226182,1977.857 343.221734,1979 341.945758,1979 M337.062342,1978 C337.062342,1978.552 336.605033,1979 336.041562,1979 L331.958438,1979 C331.394967,1979 330.937658,1978.552 330.937658,1978 C330.937658,1977.448 331.394967,1977 331.958438,1977 L336.041562,1977 C336.605033,1977 337.062342,1977.448 337.062342,1978",id:"profile_round-[#1346]"}})])])])])]),e("strong",[t._v("Thông tin giảng viên")])])]),e("template",{slot:"content"},[e("p",[e("strong",[t._v("Tên giảng viên:")]),t._v(" "+t._s(o.HoDem&&o.Ten?o.HoDem+" "+o.Ten:"-"))]),e("p",[e("strong",[t._v("Số điện thoại:")]),t._v(" "+t._s(o.SoDienThoai||"-"))]),e("p",[e("strong",[t._v("Email:")]),t._v(" "+t._s(o.Email||"-"))])]),o.HoDem&&o.Ten?e("span",{staticStyle:{color:"#002a5c"}},[e("span",[t._v(" "+t._s(o.HoDem+" "+o.Ten)+" ")])]):t._e()],2)],1),0==s?e("td",{attrs:{rowspan:a.items.length}},[e("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(a.NgayThi.split("T")[0].split("-")[2]+"-"+a.NgayThi.split("T")[0].split("-")[1]+"-"+a.NgayThi.split("T")[0].split("-")[0]))])]):t._e()])]}))]}))],2)]),e("div",{staticStyle:{"padding-top":"15px"}},[e("a-pagination",{attrs:{current:this.params.page,"default-current":this.params.limit,total:this.totalRecords,"show-size-changer":""},on:{showSizeChange:t.onShowSizeChange,change:t.onChange}})],1)])])])],1)},s=[],i=e("3f5c"),n=e("7f45"),r=e.n(n),c={data(){return{data:[],totalRecords:void 0,totalPages:void 0,TenPhong:void 0,new_data:[],params:{page:1,limit:10,search:"",hocky:void 0,orderby:"MaMonHoc",ngaythi:void 0},IDDot:void 0,datahk:[],TenDayDuDot:void 0}},created(){localStorage.setItem("link",this.$route.fullPath),this.getTKBLichThi()},methods:{groupDataByTenMonHocAndMaLop(t){const a={};for(const o of t){const t=`${o.MaMonHoc}-${o.MaLopHocPhan}-${o.TenMonHoc}-${o.MaLopHoc}-${o.MaPhong}-${o.SoTinChi}-${o.SoTinChi}-${o.Thu}-${o.TuTiet}-${o.DenTiet}-${o.NgayThi}`;a[t]||(a[t]={MaMonHoc:o.MaMonHoc,MaLopHocPhan:o.MaLopHocPhan,TenMonHoc:o.TenMonHoc,MaLopHoc:o.MaLopHoc,MaPhong:o.MaPhong,SoTinChi:o.SoTinChi,Thu:o.Thu,TuTiet:o.TuTiet,DenTiet:o.DenTiet,NgayThi:o.NgayThi,items:[]}),a[t].items.push({HoDem:o.HoDem,Ten:o.Ten,SoDienThoai:o.SoDienThoai,Email:o.Email})}const e=Object.values(a);return e},getDate(t){var a=r()(t._d).format("YYYY-MM-DDTHH:mm:ss.sssZ"),e=r.a.utc(a).tz("Asia/Ho_Chi_Minh").format("YYYY-MM-DD");this.params.ngaythi=e,this.params.hocky=void 0,console.log(this.params.ngaythi)},onShowSizeChange(t,a){this.params.limit=a,this.params.page=t,this.getTKBLichThi()},onChange(t,a){this.params.page=t,this.params.limit=a,this.getTKBLichThi()},handleSearch(t){t.preventDefault(),this.params.page=1,console.log(this.params),this.getTKBLichThi()},async getTKBLichThi(){await this.getTKBDotHK(),void 0!=this.params.hocky&&(this.params.ngaythi=void 0),void 0==this.params.hocky&&void 0==this.params.ngaythi&&(this.params.hocky=this.datahk[0].TenDot,console.log(this.params.hocky)),await i["a"].getTKBLichThi(this.params).then(t=>{try{this.data=[],this.data=this.groupDataByTenMonHocAndMaLop(t.data.records),t.data.filtered>0?this.totalRecords=t.data.filtered:this.totalRecords=0,console.log(this.data)}catch(a){console.log(a),console.log("Có lỗi"),this.totalRecords=0}})},resetButton(){this.params={page:1,limit:10,search:"",hocky:void 0,orderby:"MaMonHoc",ngaythi:void 0},this.getTKBLichThi()},async getTKBDotHK(){await i["a"].getDotHocKy().then(t=>{try{this.datahk=t.data.result.recordset,console.log(this.datahk)}catch(a){console.log(a),console.log("Có lỗi ở đợt học kỳ")}})}}},h=c,l=(e("fedc"),e("2877")),p=Object(l["a"])(h,o,s,!1,null,"2e2b2873",null);a["default"]=p.exports},fedc:function(t,a,e){"use strict";e("2510")}}]);
//# sourceMappingURL=chunk-afa011ea.2edd4a93.js.map