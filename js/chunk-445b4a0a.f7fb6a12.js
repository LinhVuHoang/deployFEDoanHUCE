(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-445b4a0a"],{6907:function(t,e,l){"use strict";l.r(e);var o=function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("a-card",{staticClass:"header-solid h-full",attrs:{bordered:!1,bodyStyle:{padding:0}}},[l("div",[l("a-row",{attrs:{type:"flex",align:"middle"}},[l("img",{staticStyle:{width:"100%"},attrs:{src:"/../images/banner.png",alt:"Banner"}})]),l("div",{staticClass:"col-md-12 container",staticStyle:{"margin-top":"50px"}},[l("label",[t._v("Lớp: "+t._s(this.$route.params.MaLopHoc))]),l("br"),l("label",[t._v("Môn: "+t._s(this.data[0].TenMonHoc))]),l("br"),l("label",[t._v("Sĩ số: "+t._s(this.data.length))]),l("button",{staticClass:"download-btn",staticStyle:{float:"right"},attrs:{type:"button"},on:{click:t.exportToExcel}},[l("a-icon",{attrs:{type:"file-excel",theme:"filled"}})],1),l("div",{staticClass:"table-wrap"},[l("table",{staticClass:"table table-bordered",staticStyle:{"--bs-table-bg":"#2a8ecd","border-right":"#5c5d62"}},[l("thead",[l("tr",[l("th",{staticStyle:{color:"#f6fffa"}},[t._v("STT")]),l("th",{staticStyle:{color:"#f6fffa"}},[t._v("Mã Sinh Viên")]),l("th",{staticStyle:{color:"#f6fffa"}},[t._v("Tên Sinh Viên")]),l("th",{staticStyle:{color:"#f6fffa"}},[t._v("Giới tính")]),l("th",{staticStyle:{color:"#f6fffa"}},[t._v("Email")]),l("th",{staticStyle:{color:"#f6fffa"}},[t._v("Số điện thoại")]),l("th",{staticStyle:{color:"#f6fffa"}},[t._v("Lớp Học")]),l("th",{staticStyle:{color:"#f6fffa"}},[t._v("Ngày Sinh")])])]),l("tbody",[t._l(t.data,(function(e){return l("tr",[l("td",[l("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(e.STT))])]),l("td",[l("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(e.MaSinhVien))])]),l("td",[l("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(e.HoDem)+" "+t._s(e.Ten))])]),l("td",[l("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(e.GioiTinh))])]),e.Email?l("td",[l("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(e.Email))])]):l("td"),e.SoDienThoai?l("td",[l("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(e.SoDienThoai))])]):l("td"),l("td",[l("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(e.TenLopHoc))])]),l("td",[l("span",{staticStyle:{color:"#002a5c"}},[t._v(t._s(e.NgaySinh))])])])}))],2)])])])],1)])},a=[],r=l("a201"),n=l("e8ae"),i=l.n(n),s={data(){return{data:[],totalRecords:void 0,totalPages:void 0,TenPhong:void 0,new_data:[],datahk:[]}},created(){localStorage.setItem("link",this.$route.fullPath),this.getDSSV(this.$route.params.MaMonHoc,this.$route.params.MaLopHoc,this.$route.params.TenDot)},methods:{async getDSSV(t,e,l){console.log(l),console.log(t),console.log(e),await r["a"].getDSSVLHPSiSo(t,e,l).then(t=>{try{this.data=[],console.log(t),this.data=t.data.result.recordset;for(let t=0;t<this.data.length;t++)this.data[t].STT=t+1;console.log(this.data)}catch(e){console.log(e),console.log("Có lỗi")}})},async exportToExcel(){const t=new i.a.Workbook,e=t.addWorksheet("Danh sách sinh viên"),l=this.OrderProperties(this.customizeData(this.data));console.log(l);const o=[],a={font:{size:16,bold:!0},alignment:{horizontal:"center"}},r={font:{size:12,bold:!1},alignment:{horizontal:"left"}};e.mergeCells("A1:J1"),e.getCell("A1").value="DANH SÁCH SINH VIÊN LỚP HỌC PHẦN",e.getCell("A1").style=a,e.getCell("B2").value="Mã học phần: "+this.data[0].MaLopHocPhan,e.getCell("F2").value="Học kỳ: "+this.data[0].TenDot,e.getCell("B3").value="Tên học phần: "+this.data[0].TenMonHoc,e.getCell("F3").value="Lớp học: "+this.data[0].LopDuKien,e.getCell("B4").value="Sĩ số: "+this.data.length,e.getCell("B2").style=r,e.getCell("F2").style=r,e.getCell("B3").style=r,e.getCell("F3").style=r,e.getCell("B4").style=r;const n={type:"pattern",pattern:"solid",fgColor:{argb:"FFFFFFFF"}};for(let i=2;i<=5;i++)for(let t=1;t<=9;t++)e.getCell(i,t).fill=n;e.getCell("A6").value="STT",e.getCell("A6").alignment={wrapText:!0},e.getCell("A6").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("B6").value="Mã sinh viên",e.getCell("B6").alignment={wrapText:!0},e.getCell("B6").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("C6").value="Họ Đệm",e.getCell("C6").alignment={wrapText:!0},e.getCell("C6").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("D6").value="Tên",e.getCell("D6").alignment={wrapText:!0},e.getCell("D6").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("E6").value="Giới tính",e.getCell("E6").alignment={wrapText:!0},e.getCell("E6").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("F6").value="Email",e.getCell("F6").alignment={wrapText:!0},e.getCell("F6").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("G6").value="Số điện thoại",e.getCell("G6").alignment={wrapText:!0},e.getCell("G6").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("H6").value="Ngày Sinh",e.getCell("H6").alignment={wrapText:!0},e.getCell("H6").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},e.getCell("I6").value="Lớp quản lý",e.getCell("I6").alignment={wrapText:!0},e.getCell("I6").border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}};for(let i=0;i<l.length;i++){const t=Object.values(l[i]);o.push(t)}o.forEach(t=>{const l=e.addRow(t);t.forEach((t,e)=>{l.getCell(e+1).border={top:{style:"thin",color:{argb:"00000000"}},left:{style:"thin",color:{argb:"00000000"}},bottom:{style:"thin",color:{argb:"00000000"}},right:{style:"thin",color:{argb:"00000000"}}},l.getCell(e+1).alignment={wrapText:!0}})});const s=await t.xlsx.writeBuffer(),c=URL.createObjectURL(new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),g=document.createElement("a");g.href=c,g.download="DanhSachSinhVien"+this.data[0].MaLopHoc+".xlsx",g.style.display="none",document.body.appendChild(g),g.click(),document.body.removeChild(g)},customizeData(t){return t.map(t=>{const{IDLopHocPhan:e,MaMonHoc:l,TrangThaiDangKy:o,NgayDangKy:a,TenDot:r,SoTinChi:n,MaLopHocPhan:i,MaLopHoc:s,TenMonHoc:c,IDLopHoc:g,IDSinhVien:h,...d}=t;return d})},OrderProperties(t){const e=["STT","MaSinhVien","HoDem","Ten","GioiTinh","Email","SoDienThoai","NgaySinh","TenLopHoc"],l=t.map(t=>Object.assign({},...e.map(e=>({[e]:t[e]}))));return console.log(l),l}}},c=s,g=(l("d4fe"),l("2877")),h=Object(g["a"])(c,o,a,!1,null,"7856f9a2",null);e["default"]=h.exports},a201:function(t,e,l){"use strict";var o=l("f121");const a="SV_DangKyMonHoc",r="DS_LHP_SiSo",n="DSSV_LHP_SiSo";class i{getSVDSDangKyHocPhan(t){return o["a"].get(a,{params:t})}getDSLHPSiSo(t){return o["a"].get(r,{params:t})}getDSSVLHPSiSo(t,e,l){return o["a"].get(n+"/"+t+"/"+e+"/"+l)}}e["a"]=new i},d4fe:function(t,e,l){"use strict";l("f01c")},f01c:function(t,e,l){}}]);
//# sourceMappingURL=chunk-445b4a0a.f7fb6a12.js.map