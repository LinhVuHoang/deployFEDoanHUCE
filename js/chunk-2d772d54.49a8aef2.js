(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d772d54"],{"3f5c":function(t,e,a){"use strict";var o=a("f121");const l="TKB_HocKy",n="TKB_Dot",s="TKB_DS_Sinhvien",i="TKB_LichThi",r="TKB_GiangDay",c="Nganh";class h{getTKBHocKy(t){return o["a"].get(l,{params:t})}getTKBLichThi(t){return o["a"].get(i,{params:t})}getDotHocKy(){return o["a"].get(n)}getdssv(t,e,a){return o["a"].get(s+"/"+t+"/"+e+"/"+a)}getTKBGiangDay(t){return o["a"].get(r,{params:t})}getNganh(){return o["a"].get(c)}}e["a"]=new h},ff6b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-card",[a("a-row",{attrs:{type:"flex",align:"middle"}},[a("img",{staticStyle:{width:"100%"},attrs:{src:"/../images/banner.png",alt:"Banner"}})]),a("div",[a("a-form",{staticClass:"product__search-form",on:{submit:t.handleSearch}},[a("a-row",[a("a-col",{staticStyle:{"padding-right":"20px"},attrs:{span:14}},[a("a-form-item",[a("a-input-search",{attrs:{placeholder:"Mã môn/Tên môn"},model:{value:t.params.search,callback:function(e){t.$set(t.params,"search",e)},expression:"params.search"}},[a("a-icon",{attrs:{type:"search"}})],1)],1)],1),a("a-col",{attrs:{span:10}},[a("a-form-item",[a("a-select",{attrs:{placeholder:t.datahk[0].TenDot},model:{value:t.params.hocky,callback:function(e){t.$set(t.params,"hocky",e)},expression:"params.hocky"}},t._l(t.datahk,(function(e,o){return a("a-select-option",{key:o,attrs:{value:e.TenDot}},[t._v(t._s(e.TenDot))])})),1)],1)],1)],1)],1),a("a-button",{attrs:{type:"primary","html-type":"submit"},on:{click:t.handleSearch}},[t._v(" Search ")]),a("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary","html-type":"submit"},on:{click:t.resetButton}},[t._v(" Reset ")]),t.data.length>0?a("button",{staticClass:"download-btn",staticStyle:{float:"right"},attrs:{type:"button"},on:{click:t.exportToExcel}},[a("a-icon",{attrs:{type:"file-excel",theme:"filled"}})],1):t._e()],1),a("a-table",{attrs:{columns:t.columns,"data-source":t.data,pagination:!1},scopedSlots:t._u([{key:"DaKhoaDiemQuaTrinh",fn:function(e){return[a("div",{staticClass:"author-info"},e?[a("p",{staticClass:"m-0 font-regular",staticStyle:{color:"green"}},[t._v("Đã khóa")])]:[a("p",{staticClass:"m-0 font-regular",staticStyle:{color:"dodgerblue"}},[t._v("Chưa khóa")])])]}},{key:"DaKhoaDiemKetThuc",fn:function(e){return[a("div",{staticClass:"author-info"},e?[a("p",{staticClass:"m-0 font-regular",staticStyle:{color:"green"}},[t._v("Đã khóa")])]:[a("p",{staticClass:"m-0 font-regular",staticStyle:{color:"dodgerblue"}},[t._v("Chưa khóa")])])]}},{key:"IsDaNopBanGiay",fn:function(e,o){return[1==e?a("div",{staticClass:"author-info"},[a("p",{staticClass:"m-0 font-regular",staticStyle:{color:"green"}},[t._v("Đã nộp")])]):a("div",{staticClass:"author-info",staticStyle:{"white-space":"nowrap"}},[a("input",{attrs:{type:"checkbox",id:"uncheckedbox_"+o.IDLopHocPhan},on:{change:function(e){return t.updateStatus(o.IDLopHocPhan,1)}}})])]}},{key:"NgayThi",fn:function(e){return[a("div",{staticClass:"author-info"},[a("p",{staticClass:"m-0 font-regular"},[t._v(t._s(e.split("T")[0].split("-")[2]+"-"+e.split("T")[0].split("-")[1]+"-"+e.split("T")[0].split("-")[0]))])])]}},{key:"NgayNopBanGiay",fn:function(e){return[a("div",{staticClass:"author-info"},[a("p",{staticClass:"m-0 font-regular"},[t._v(t._s(e.split("T")[0].split("-")[2]+"-"+e.split("T")[0].split("-")[1]+"-"+e.split("T")[0].split("-")[0]))])])]}},{key:"editBtn",fn:function(t){return[a("div",[a("a",{staticClass:"button",attrs:{href:"/DSSV_LHP_SiSo/"+t.MaMonHoc+"/"+t.LopDuKien+"/"+t.TenDot}},[a("a-icon",{staticStyle:{"font-size":"25px",color:"#007bff"},attrs:{type:"info-circle"}})],1)])]}}])}),a("div",{staticStyle:{"padding-top":"15px","padding-left":"15px"}},[a("a-pagination",{attrs:{current:this.params.page,"default-current":this.params.limit,total:this.totalRecords,"show-size-changer":""},on:{showSizeChange:t.onShowSizeChange,change:t.onChange}})],1)],1)],1)},l=[],n=a("f121");const s="QLDHP",i="QLDHP";class r{getAll(t){return n["a"].get(s,{params:t})}Update(t,e){return n["a"].put(s+"/"+t+"/"+e)}getDS(t){return n["a"].get(i,{params:t})}}var c=new r,h=a("3f5c"),g=a("e8ae"),d=a.n(g);const p=[{title:"Mã môn học",dataIndex:"MaMonHoc",scopedSlots:{customRender:"MaMonHoc"}},{title:"Tên môn học",dataIndex:"TenMonHoc",scopedSlots:{customRender:"TenMonHoc"}},{title:"STC",dataIndex:"SoTinChi",scopedSlots:{customRender:"SoTinChi"}},{title:"Lớp Học Phần",dataIndex:"MaLopHoc",scopedSlots:{customRender:"MaLopHoc"}},{title:"Giảng viên",dataIndex:"TenGiangVien",scopedSlots:{customRender:"TenGiangVien"}},{title:"Ngày thi",dataIndex:"NgayThi",scopedSlots:{customRender:"NgayThi"}},{title:"Khóa DQT",dataIndex:"DaKhoaDiemQuaTrinh",scopedSlots:{customRender:"DaKhoaDiemQuaTrinh"}},{title:"Khóa điểm KT",dataIndex:"DaKhoaDiemKetThuc",scopedSlots:{customRender:"DaKhoaDiemKetThuc"}},{title:"Đã nộp bản giấy",dataIndex:"IsDaNopBanGiay",scopedSlots:{customRender:"IsDaNopBanGiay"}},{title:"Ngày nộp bản giấy",dataIndex:"NgayNopBanGiay",scopedSlots:{customRender:"NgayNopBanGiay"}}];var y={data(){return{authorsHeaderBtns:"all",data:[],data1:[],columns:p,totalRecords:void 0,totalPages:void 0,TenPhong:void 0,new_data:[],params:{page:1,limit:10,search:void 0,hocky:void 0,orderby:"MaMonHoc"},params1:{page:1,limit:1e7,search:void 0,hocky:void 0,orderby:"MaMonHoc"},isChecked:!1,IDDot:void 0,datahk:[]}},created(){localStorage.setItem("link",this.$route.fullPath),this.getTKBDotHK()},methods:{async getTKBDotHK(){await h["a"].getDotHocKy().then(t=>{try{this.datahk=t.data.result.recordset,console.log(this.datahk)}catch(e){console.log(e),console.log("Có lỗi ở đợt học kỳ")}})},async getQuanLyDHP(){await c.getAll(this.params).then(t=>{try{if(this.data=[],console.log(t),void 0!=t.data.records){this.data=t.data.records;for(let t=0;t<this.data.length;t++)this.data[t]["checked"]=!1,this.data[t]["STT"]=t+1}else this.data=[];console.log(this.data),t.data.filtered>0?this.totalRecords=t.data.filtered:this.totalRecords=0,console.log(this.data)}catch(e){console.log(e),console.log("Có lỗi"),this.totalRecords=0}})},onShowSizeChange(t,e){this.params.limit=e,this.params.page=t,this.getQuanLyDHP()},onChange(t,e){this.params.page=t,this.params.limit=e,this.getQuanLyDHP()},handleSearch(t){t.preventDefault(),this.params.page=1,void 0==this.params.hocky&&(console.log(this.datahk[0].TenDot),this.params.hocky=this.datahk[0].TenDot,console.log(this.params.hocky)),this.getQuanLyDHP(),this.GetQuanLyDHP1(),console.log(this.params)},async GetQuanLyDHP1(){this.params1.search=this.params.search,this.params1.hocky=this.params.hocky,await c.getAll(this.params1).then(t=>{try{if(this.data1=[],console.log(t),void 0!=t.data.records){this.data1=t.data.records.filter(t=>null===t.IsDaNopBanGiay||!1===t.IsDaNopBanGiay||0===t.IsDaNopBanGiay);for(let t=0;t<this.data1.length;t++){this.data1[t]["STT"]=t+1;const e=this.data1[t]["NgayThi"];this.data1[t]["NgayThi"]=e.split("T")[0].split("-")[2]+"-"+e.split("T")[0].split("-")[1]+"-"+e.split("T")[0].split("-")[0];const a=Array.from(new Set(this.data1[t]["MaGiangVien"].split(", "))),o=Array.from(new Set(this.data1[t]["TenGiangVien"].split(", ")));console.log(a),console.log(o),this.data1[t]["GiangVien"]="";for(let l=0;l<a.length;l++)this.data1[t]["GiangVien"]+=a[l]+"-"+o[l],l!=a.length-1&&(this.data1[t]["GiangVien"]+=", ")}}else this.data1=[];console.log(this.data1)}catch(e){console.log(e),console.log("Có lỗi")}})},updateStatus(t,e){1==e&&(console.log(t),this.$confirm({title:"Xác nhận đã nộp bản giấy",onOk:()=>{c.Update(t,"1").then(e=>{for(let a=0;a<this.data.length;a++)this.data[a]["IDLopHocPhan"]==t&&(this.data[a]["checked"]=!0);console.log(e.data),this.getQuanLyDHP(),this.GetQuanLyDHP1()})},onCancel:()=>{c.Update(t,"0").then(e=>{console.log(e.data),document.getElementById("uncheckedbox_"+t).checked=!1;for(let a=0;a<this.data.length;a++)this.data[a]["IDLopHocPhan"]==t&&(this.data[a]["checked"]=!1,console.log(this.data[a]["checked"]));this.isChecked=!1,this.getQuanLyDHP(),this.GetQuanLyDHP1()})}}))},resetButton(){this.params={page:1,limit:10,search:"",hocky:this.datahk[0].TenDot,orderby:"MaMonHoc"},this.getQuanLyDHP(),this.GetQuanLyDHP1()},async exportToExcel(){const t=new d.a.Workbook,e=t.addWorksheet("Danh sách lớp học phần chưa nộp điểm"),a=this.OrderProperties(this.customizeData(this.data1));console.log(a);const o=[],l={font:{size:16,bold:!0},alignment:{horizontal:"center"}};e.mergeCells("A1:K1"),e.getCell("A1").value="Danh sách lớp học phần chưa nộp điểm",e.getCell("A1").style=l,e.mergeCells("A2:K2"),e.getCell("A2").value=this.data1[0].TenDot,e.getCell("A2").style=l,e.getCell("A4").value="STT",e.getCell("A4").alignment={wrapText:!0},e.getCell("A4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("B4").value="Mã lớp học phần",e.getCell("B4").alignment={wrapText:!0},e.getCell("B4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("C4").value="Mã môn học",e.getCell("C4").alignment={wrapText:!0},e.getCell("C4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("D4").value="Tên môn học",e.getCell("D4").alignment={wrapText:!0},e.getCell("D4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("E4").value="Số tín chỉ",e.getCell("E4").alignment={wrapText:!0},e.getCell("E4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("F4").value="Lớp môn học",e.getCell("F4").alignment={wrapText:!0},e.getCell("F4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("G4").value="Sĩ số sinh viên",e.getCell("G4").alignment={wrapText:!0},e.getCell("G4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("H4").value="Ngày thi",e.getCell("H4").alignment={wrapText:!0},e.getCell("H4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("I4").value="Giảng viên",e.getCell("I4").alignment={wrapText:!0},e.getCell("I4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("J4").value="Tổ bộ môn",e.getCell("J4").alignment={wrapText:!0},e.getCell("J4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("K4").value="Khoa chủ quản",e.getCell("K4").alignment={wrapText:!0},e.getCell("K4").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("L4").border={left:{style:"thin",color:{argb:"00000000"}}};for(let r=0;r<a.length;r++){const t=Object.values(a[r]);o.push(t)}o.forEach(t=>{const a=e.addRow(t);t.forEach((t,e)=>{a.getCell(e+1).border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},a.getCell(e+1).alignment={wrapText:!0}})});const n=await t.xlsx.writeBuffer(),s=URL.createObjectURL(new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),i=document.createElement("a");i.href=s,i.download="DanhSachChuaNopDiem_"+this.data1[0].TenDot+"_"+this.params1.search+".xlsx",i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)},customizeData(t){return t.map(t=>{const{DaKhoaDiemKetThuc:e,DaKhoaDiemQuaTrinh:a,Email:o,IDDot:l,TenDot:n,TenHeDaoTao:s,IDLopHocPhan:i,IDLopXepLichThi:r,Id:c,IsDaNopBanGiay:h,MaGiangVien:g,TenGiangVien:d,IsKhoaTH:p,IsKhoaTL:y,IsXacNhan:u,NgayCapNhat:m,NgayNopBanGiay:b,NgayTao:T,NguoiCapNhat:f,NguoiTao:C,Nhom:D,SoDienThoai:v,TenNganh:S,TenNghe:k,...H}=t;return H})},OrderProperties(t){const e=["STT","MaLopHocPhan","MaMonHoc","TenMonHoc","SoTinChi","MaLopHoc","SiSo","NgayThi","GiangVien","TenBoMon","TenPhongBan"],a=t.map(t=>Object.assign({},...e.map(e=>({[e]:t[e]}))));return console.log(a),a}}},u=y,m=a("2877"),b=Object(m["a"])(u,o,l,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d772d54.49a8aef2.js.map