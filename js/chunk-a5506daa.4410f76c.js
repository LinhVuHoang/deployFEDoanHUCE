(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a5506daa"],{"3f5c":function(t,a,e){"use strict";var s=e("f121");const o="TKB_HocKy",n="TKB_Dot",i="TKB_DS_Sinhvien",r="TKB_LichThi",c="TKB_GiangDay",h="Nganh";class l{getTKBHocKy(t){return s["a"].get(o,{params:t})}getTKBLichThi(t){return s["a"].get(r,{params:t})}getDotHocKy(){return s["a"].get(n)}getdssv(t,a,e){return s["a"].get(i+"/"+t+"/"+a+"/"+e)}getTKBGiangDay(t){return s["a"].get(c,{params:t})}getNganh(){return s["a"].get(h)}}a["a"]=new l},"8afc":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("a-card",[e("a-row",{attrs:{type:"flex",align:"middle"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:"/../images/banner.png",alt:"Banner"}}),e("a-col",{staticStyle:{position:"relative"},attrs:{span:24,md:12,lg:12}},[t.data.length>0?e("h5",{staticClass:"font-semibold m-0"},[t._v("Danh sách môn học đăng ký sinh viên "+t._s(t.data[0].HoTen))]):e("h5",{staticClass:"font-semibold m-0"},[t._v("Danh sách môn học đăng ký")])])],1),e("div",[e("a-form",{staticClass:"product__search-form",on:{submit:t.handleSearch}},[e("a-row",[e("a-col",{staticStyle:{"padding-right":"20px"},attrs:{span:14}},[e("a-form-item",[e("a-input-search",{attrs:{placeholder:"Mã sinh viên"},model:{value:t.params.search,callback:function(a){t.$set(t.params,"search",a)},expression:"params.search"}},[e("a-icon",{attrs:{type:"search"}})],1)],1)],1),e("a-col",{attrs:{span:10}},[e("a-form-item",[e("a-select",{attrs:{placeholder:t.datahk[0].TenDot},model:{value:t.params.hocky,callback:function(a){t.$set(t.params,"hocky",a)},expression:"params.hocky"}},t._l(t.datahk,(function(a,s){return e("a-select-option",{key:s,attrs:{value:a.TenDot}},[t._v(t._s(a.TenDot))])})),1)],1)],1)],1)],1),e("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSearch}},[t._v(" Search ")]),e("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.resetButton}},[t._v(" Reset ")])],1),e("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:!1},scopedSlots:t._u([{key:"TrangThaiDangKy",fn:function(a){return[e("div",{staticClass:"author-info"},"Đăng ký mới"==a?[e("p",{staticClass:"m-0 font-regular",staticStyle:{color:"green"}},[t._v(t._s(a))])]:"Đăng ký học lại"==a?[e("p",{staticClass:"m-0 font-regular",staticStyle:{color:"dodgerblue"}},[t._v(t._s(a))])]:[e("p",{staticClass:"m-0 font-regular",staticStyle:{color:"red"}},[t._v(t._s(a))])])]}},{key:"NgayDangKy",fn:function(a){return[e("div",{staticClass:"author-info"},[e("p",{staticClass:"m-0 font-regular"},[t._v(t._s(a.split("T")[0].split("-")[2]+"-"+a.split("T")[0].split("-")[1]+"-"+a.split("T")[0].split("-")[0]))])])]}},{key:"HocPhi",fn:function(a,s){return[e("div",{staticClass:"author-info"},[0!=a?e("p",{staticClass:"m-0 font-regular"},[t._v(" "+t._s(new Intl.NumberFormat("en-EN",{style:"currency",currency:"VND"}).format(a)))]):0==a?e("p",{staticClass:"m-0 font-regular"},[t._v(" "+t._s(new Intl.NumberFormat("en-EN",{style:"currency",currency:"VND"}).format(325e3*s.SoTinChi)))]):t._e()])]}}])}),e("div",[t.hocphi>0?e("h5",{staticClass:"font-semibold m-0",staticStyle:{float:"right","padding-right":"50px"}},[t._v("Tổng học phí "+t._s(new Intl.NumberFormat("en-EN",{style:"currency",currency:"VND"}).format(t.hocphi)))]):e("h5")]),e("div",{staticStyle:{"padding-top":"15px","padding-left":"15px"}},[e("a-pagination",{attrs:{current:this.params.page,"default-current":this.params.limit,total:this.totalRecords,"show-size-changer":""},on:{showSizeChange:t.onShowSizeChange,change:t.onChange}})],1)],1)],1)},o=[],n=e("a201"),i=e("3f5c");const r=[{title:"Mã Môn Học",dataIndex:"MaMonHoc",scopedSlots:{customRender:"MaMonHoc"}},{title:"Tên Môn Học",dataIndex:"TenMonHoc",scopedSlots:{customRender:"TenMonHoc"}},{title:"STC",dataIndex:"SoTinChi",scopedSlots:{customRender:"SoTinChi"}},{title:"Lớp Học Phần",dataIndex:"LopDuKien",scopedSlots:{customRender:"LopDuKien"}},{title:"Trạng Thái Đăng Ký",dataIndex:"TrangThaiDangKy",scopedSlots:{customRender:"TrangThaiDangKy"}},{title:"Học phí",dataIndex:"MucHocPhi",scopedSlots:{customRender:"HocPhi"}},{title:"Ngày Đăng Ký",dataIndex:"NgayDangKy",scopedSlots:{customRender:"NgayDangKy"}}];var c={data(){return{authorsHeaderBtns:"all",data:[],columns:r,totalRecords:void 0,totalPages:void 0,TenPhong:void 0,new_data:[],params:{page:1,limit:10,search:"",hocky:void 0,orderby:"MaMonHoc"},hocphi:void 0,params1:{page:1,limit:10,search:"",hocky:void 0,orderby:"MaMonHoc"},IDDot:void 0,datahk:[],datahp:[]}},created(){localStorage.setItem("link",this.$route.fullPath),this.getTKBDotHK()},methods:{async getTKBDotHK(){await i["a"].getDotHocKy().then(t=>{try{this.datahk=t.data.result.recordset,console.log(this.datahk)}catch(a){console.log(a),console.log("Có lỗi ở đợt học kỳ")}})},async getDangKyMonHoc(){await n["a"].getSVDSDangKyHocPhan(this.params).then(t=>{try{this.data=[],void 0!=t.data.records?this.data=t.data.records:this.data=[],console.log(this.data),this.totalRecords=t.data.filtered,console.log(this.data)}catch(a){console.log(a),console.log("Có lỗi")}})},async getHocPhi(){this.params1.hocky=this.params.hocky,this.params1.search=this.params.search,this.params1.limit=1e4;let t=0;await n["a"].getSVDSDangKyHocPhan(this.params1).then(a=>{try{if(this.data1=a.data.records,this.data1.length>0){for(let a=0;a<this.data1.length;a++)this.data1[1].MucHocPhi>0?(t+=this.data1[a].MucHocPhi,console.log(t)):t+=325e3*this.data1[a].SoTinChi;this.hocphi=t}}catch(e){console.log(e)}})},onShowSizeChange(t,a){this.params.limit=a,this.params.page=t,this.getDangKyMonHoc()},onChange(t,a){this.params.page=t,this.params.limit=a,this.getDangKyMonHoc()},handleSearch(t){t.preventDefault(),this.params.page=1,void 0===this.params.hocky&&(this.params.hocky=this.datahk[0].TenDot,console.log(this.params.hocky)),""!==this.params.search&&(this.getDangKyMonHoc(),this.getHocPhi()),console.log(this.params)},resetButton(){this.params={page:0,limit:0,search:"",hocky:this.datahk[0].TenDot,orderby:"MaMonHoc"},this.hocphi=void 0,this.data=[]}}},h=c,l=e("2877"),d=Object(l["a"])(h,s,o,!1,null,null,null);a["default"]=d.exports},a201:function(t,a,e){"use strict";var s=e("f121");const o="SV_DangKyMonHoc",n="DS_LHP_SiSo",i="DSSV_LHP_SiSo";class r{getSVDSDangKyHocPhan(t){return s["a"].get(o,{params:t})}getDSLHPSiSo(t){return s["a"].get(n,{params:t})}getDSSVLHPSiSo(t,a,e){return s["a"].get(i+"/"+t+"/"+a+"/"+e)}}a["a"]=new r}}]);
//# sourceMappingURL=chunk-a5506daa.4410f76c.js.map