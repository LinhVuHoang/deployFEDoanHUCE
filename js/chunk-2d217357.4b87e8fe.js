(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"profile-nav-bg",staticStyle:{"background-image":"url('images/bg-profile.jpg')"}}),e("a-card",{staticClass:"card-profile-head",attrs:{bordered:!1,bodyStyle:{padding:0}},scopedSlots:t._u([{key:"title",fn:function(){return[e("a-row",{attrs:{type:"flex",align:"middle"}},[e("a-col",{staticClass:"col-info",attrs:{span:24,md:12}},[e("a-avatar",{attrs:{size:74,shape:"square",src:"images/face-1.jpg"}}),e("div",{staticClass:"avatar-info"},[e("h4",{staticClass:"font-semibold m-0"},[t._v("Sarah Jacob")]),e("p",[t._v("CEO / Co-Founder")])])],1),e("a-col",{staticStyle:{display:"flex","align-items":"center","justify-content":"flex-end"},attrs:{span:24,md:12}},[e("a-radio-group",{attrs:{size:"small"},model:{value:t.profileHeaderBtns,callback:function(a){t.profileHeaderBtns=a},expression:"profileHeaderBtns"}},[e("a-radio-button",{attrs:{value:"overview"}},[t._v("OVERVIEW")]),e("a-radio-button",{attrs:{value:"teams"}},[t._v("TEAMS")]),e("a-radio-button",{attrs:{value:"projects"}},[t._v("PROJECTS")])],1)],1)],1)]},proxy:!0}])}),e("a-row",{attrs:{type:"flex",gutter:24}},[e("a-col",{staticClass:"mb-24",attrs:{span:24,md:8}},[e("CardPlatformSettings")],1),e("a-col",{staticClass:"mb-24",attrs:{span:24,md:8}},[e("CardProfileInformation")],1),e("a-col",{staticClass:"mb-24",attrs:{span:24,md:8}},[e("CardConversations",{attrs:{data:t.conversationsData}})],1)],1),e("a-card",{staticClass:"header-solid h-full mb-24",attrs:{bordered:!1,bodyStyle:{paddingTop:"14px"}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h6",{staticClass:"font-semibold"},[t._v("Projects")]),e("p",[t._v("Architects design houses")])]},proxy:!0}])},[e("a-row",{attrs:{type:"flex",gutter:[24,24],align:"stretch"}},[t._l(t.projects,(function(t,a){return e("a-col",{key:a,attrs:{span:24,md:12,xl:6}},[e("CardProject",{attrs:{id:t.id,title:t.title,content:t.content,cover:t.cover,team:t.team}})],1)})),e("a-col",{attrs:{span:24,md:12,xl:6}},[e("a-upload",{staticClass:"projects-uploader",attrs:{name:"avatar","list-type":"picture-card","show-upload-list":!1}},[e("div",[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3 17C3 16.4477 3.44772 16 4 16H16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18H4C3.44772 18 3 17.5523 3 17ZM6.29289 6.70711C5.90237 6.31658 5.90237 5.68342 6.29289 5.29289L9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2C10.2652 2 10.5196 2.10536 10.7071 2.29289L13.7071 5.29289C14.0976 5.68342 14.0976 6.31658 13.7071 6.70711C13.3166 7.09763 12.6834 7.09763 12.2929 6.70711L11 5.41421L11 13C11 13.5523 10.5523 14 10 14C9.44771 14 9 13.5523 9 13L9 5.41421L7.70711 6.70711C7.31658 7.09763 6.68342 7.09763 6.29289 6.70711Z",fill:"#111827"}})]),e("div",{staticClass:"ant-upload-text font-semibold text-dark"},[t._v(" Upload New Project ")])],1)])],1)],2)],1)],1)},i=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-card",{staticClass:"header-solid h-full",attrs:{bordered:!1,bodyStyle:{paddingTop:0,paddingBottom:0}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h6",{staticClass:"font-semibold m-0"},[t._v("Platform Settings")])]},proxy:!0}])},[e("ul",{staticClass:"list settings-list"},[e("li",[e("h6",{staticClass:"list-header text-sm text-muted"},[t._v("ACCOUNT")])]),e("li",[e("a-switch",{model:{value:t.emailForFollows,callback:function(a){t.emailForFollows=a},expression:"emailForFollows"}}),e("span",[t._v("Email me when someone follows me")])],1),e("li",[e("a-switch",{model:{value:t.emailForAnswers,callback:function(a){t.emailForAnswers=a},expression:"emailForAnswers"}}),e("span",[t._v("Email me when someone answers me")])],1),e("li",[e("a-switch",{model:{value:t.emailForMentions,callback:function(a){t.emailForMentions=a},expression:"emailForMentions"}}),e("span",[t._v("Email me when someone mentions me")])],1),e("li",[e("h6",{staticClass:"list-header text-sm text-muted m-0"},[t._v("APPLICATION")])]),e("li",[e("a-switch",{model:{value:t.emailForNewProjects,callback:function(a){t.emailForNewProjects=a},expression:"emailForNewProjects"}}),e("span",[t._v("New launches and projects")])],1),e("li",[e("a-switch",{model:{value:t.emailForProductUpdates,callback:function(a){t.emailForProductUpdates=a},expression:"emailForProductUpdates"}}),e("span",[t._v("Monthly product updates")])],1),e("li",[e("a-switch",{model:{value:t.emailForNewsletter,callback:function(a){t.emailForNewsletter=a},expression:"emailForNewsletter"}}),e("span",[t._v("Subscribe to newsletter")])],1)])])},r=[],l={data(){return{emailForFollows:!0,emailForAnswers:!1,emailForMentions:!0,emailForNewProjects:!0,emailForProductUpdates:!1,emailForNewsletter:!0}}},n=l,c=e("2877"),d=Object(c["a"])(n,o,r,!1,null,null,null),m=d.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-card",{staticClass:"header-solid h-full card-profile-information",attrs:{bordered:!1,bodyStyle:{paddingTop:0,paddingBottom:"16px"},headStyle:{paddingRight:0}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h6",{staticClass:"font-semibold m-0"},[t._v("Profile Information")])]},proxy:!0}])},[e("a-button",{attrs:{slot:"extra",type:"link"},slot:"extra"},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{staticClass:"fill-muted",attrs:{d:"M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z",fill:"#111827"}}),e("path",{staticClass:"fill-muted",attrs:{d:"M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z",fill:"#111827"}})])]),e("p",{staticClass:"text-dark"},[t._v(" Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality). ")]),e("hr",{staticClass:"my-25"}),e("a-descriptions",{attrs:{title:"Oliver Liam",column:1}},[e("a-descriptions-item",{attrs:{label:"Full Name"}},[t._v(" Sarah Emily Jacob ")]),e("a-descriptions-item",{attrs:{label:"Mobile"}},[t._v(" (44) 123 1234 123 ")]),e("a-descriptions-item",{attrs:{label:"Email"}},[t._v(" sarahjacob@mail.com ")]),e("a-descriptions-item",{attrs:{label:"Location"}},[t._v(" USA ")]),e("a-descriptions-item",{attrs:{label:"Social"}},[e("a",{staticClass:"mx-5 px-5",attrs:{href:"#"}},[e("a-icon",{staticStyle:{color:"#3EA1EC"},attrs:{type:"twitter"}})],1),e("a",{staticClass:"mx-5 px-5",attrs:{href:"#"}},[e("a-icon",{staticStyle:{color:"#344E86"},attrs:{type:"facebook"}})],1),e("a",{staticClass:"mx-5 px-5",attrs:{href:"#"}},[e("a-icon",{staticStyle:{color:"#E1306C"},attrs:{type:"instagram"}})],1)])],1)],1)},u=[],f={data(){return{}}},v=f,g=Object(c["a"])(v,p,u,!1,null,null,null),h=g.exports,C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-card",{staticClass:"header-solid h-full",attrs:{bordered:!1,bodyStyle:{paddingTop:0,paddingBottom:"16px"}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h6",{staticClass:"font-semibold m-0"},[t._v("Conversations")])]},proxy:!0}])},[e("a-list",{staticClass:"conversations-list",attrs:{"item-layout":"horizontal",split:!1,"data-source":t.data},scopedSlots:t._u([{key:"renderItem",fn:function(a){return e("a-list-item",{},[e("a-button",{attrs:{slot:"actions",type:"link"},slot:"actions"},[t._v(" REPLY ")]),e("a-list-item-meta",{attrs:{title:a.title,description:a.code}},[e("a-avatar",{attrs:{slot:"avatar",size:48,shape:"square",src:a.avatar},slot:"avatar"})],1)],1)}}])})],1)},w=[],b={props:{data:{type:Array,default:()=>[]}},data(){return{}}},y=b,_=Object(c["a"])(y,C,w,!1,null,null,null),x=_.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a-card",{staticClass:"card-project"},[e("img",{attrs:{slot:"cover",alt:"example",src:t.cover},slot:"cover"}),e("div",{staticClass:"card-tag"},[t._v("Project #"+t._s(t.id))]),e("h5",[t._v(t._s(t.title))]),e("p",[t._v(" "+t._s(t.content)+" ")]),e("a-row",{staticClass:"card-footer",attrs:{type:"flex",gutter:6,align:"middle"}},[e("a-col",{attrs:{span:12}},[e("a-button",{attrs:{size:"small"}},[t._v("VIEW PROJECT")])],1),e("a-col",{staticClass:"text-right",attrs:{span:12}},[e("a-space",{staticClass:"avatar-chips",attrs:{size:-12}},t._l(t.team,(function(t,a){return e("a-avatar",{key:a,attrs:{size:"small",src:t}})})),1)],1)],1)],1)},S=[],F={props:{id:{type:Number,required:!0},title:{type:String,default:""},content:{type:String,default:""},cover:{type:String,default:""},team:{type:Array,default:()=>[]}},data(){return{}}},k=F,P=Object(c["a"])(k,j,S,!1,null,null,null),E=P.exports;const A=[{id:"1",title:"Sophie B.",code:"Hi! I need more information…",avatar:"images/face-3.jpg"},{id:"2",title:"Anne Marie",code:"Awesome work, can you…",avatar:"images/face-4.jpg"},{id:"3",title:"Ivan",code:"About files I can…",avatar:"images/face-5.jpeg"},{id:"4",title:"Peterson",code:"Have a great afternoon…",avatar:"images/face-6.jpeg"},{id:"5",title:"Nick Daniel",code:"Hi! I need more information…",avatar:"images/face-2.jpg"}],L=[{id:1,title:"Modern",content:"As Uber works through a huge amount of internal management turmoil.",cover:"images/home-decor-3.jpeg",team:["images/face-1.jpg","images/face-4.jpg","images/face-2.jpg","images/face-3.jpg"]},{id:2,title:"Scandinavian",content:"Music is something that every person has his or her own specific opinion about.",cover:"images/home-decor-2.jpeg",team:["images/face-1.jpg","images/face-4.jpg","images/face-2.jpg","images/face-3.jpg"]},{id:3,title:"Minimalist",content:"Different people have different taste, and various types of music, Zimbali Resort.",cover:"images/home-decor-1.jpeg",team:["images/face-1.jpg","images/face-4.jpg","images/face-2.jpg","images/face-3.jpg"]}];var I={components:{CardPlatformSettings:m,CardProfileInformation:h,CardConversations:x,CardProject:E},data(){return{profileHeaderBtns:"overview",conversationsData:A,projects:L}}},M=I,N=Object(c["a"])(M,s,i,!1,null,null,null);a["default"]=N.exports}}]);
//# sourceMappingURL=chunk-2d217357.4b87e8fe.js.map