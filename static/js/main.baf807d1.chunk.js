(this["webpackJsonpgithub-search"]=this["webpackJsonpgithub-search"]||[]).push([[0],{130:function(e,t,a){e.exports=a(237)},135:function(e,t,a){},136:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),s=a(28),o=a(240),u=(a(135),a(136),a(91),a(51)),i=(a(138),a(128)),m=(a(68),a(18)),p=(a(92),a(63)),d=(a(142),a(66)),f=a(11),b=a(23),E=a(238),h=a(12),y=a.n(h),x=(a(145),a(88)),g=a(31),v=a(47),w=a(19),N=a(65),O=a.n(N),k=O.a.create({baseURL:"https://api.github.com"});k.CancelToken=O.a.CancelToken,k.isCancel=O.a.isCancel;var j=k,_="loading",S="success",C="error",L="LOAD",R="LOAD_SUCCESS",D="LOAD_ERROR",A="LOAD_MORE_SUCCESS",z=function(e,t){switch(t.type){case L:return Object(w.a)({},e,{status:_});case R:return Object(w.a)({},e,{status:S,data:t.payload.data,total:t.payload.total});case D:return Object(w.a)({},e,{status:C});case A:return Object(w.a)({},e,{status:S,data:[].concat(Object(v.a)(e.data),Object(v.a)(t.payload.data)),total:t.payload.total});default:return e}},M=function(e){var t=Object(n.useReducer)(z,{status:S,data:[],total:0}),a=Object(f.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(null),s=Object(f.a)(l,2),o=s[0],u=s[1];function i(){return(i=Object(g.a)(y.a.mark((function e(t){var a,n,r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==t.trim()){e.next=3;break}return e.abrupt("return",x.a.warning("Please enter some keyword to search"));case 3:return null!==o&&o.cancel(),c({type:L}),a=j.CancelToken,n=a.source(),u(n),e.next=10,j.get("/search/users?q=".concat(t),{cancelToken:n.token});case 10:r=e.sent,l=r.data,c({type:R,payload:{data:l.items,total:l.total_count}}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0),c({type:D});case 19:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}function m(){return(m=Object(g.a)(y.a.mark((function t(){var a,n,l;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,""!==e.trim()){t.next=3;break}return t.abrupt("return",x.a.warning("Keyword not found"));case 3:return a=Math.floor(r.data.length/30)+1,c({type:L}),t.next=7,j.get("/search/users?q=".concat(e,"&page=").concat(a));case 7:n=t.sent,l=n.data,c({type:A,payload:{data:l.items,total:l.total_count}}),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0),c({type:D});case 16:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}return[function(){return r.data},function(){return r.total},function(){return r.status===_},function(){return r.status===S},function(){return r.status===C},function(){c({type:R,payload:{data:[],total:0}})},function(e){return i.apply(this,arguments)},function(){return m.apply(this,arguments)}]},U=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],c=t[1],l=M(a),s=Object(f.a)(l,8),o=s[0],h=s[1],y=s[2],x=s[3],g=s[4],v=s[5],w=s[6],N=s[7];return Object(n.useEffect)((function(){document.title="Home"}),[]),r.a.createElement("div",{className:"container mx-auto pt-8 w-100 h-100 flex flex-col items-center"},r.a.createElement("div",{className:"px-4 py-8 shadow-lg rounded flex items-center bg-white",style:{width:600}},r.a.createElement(i.a.Search,{placeholder:"Search by username",enterButton:!0,value:a,onSearch:w,onChange:function(e){c(e.target.value)}}),r.a.createElement(m.a,{className:"ml-2",icon:r.a.createElement(E.a,null),onClick:function(){c(""),v()}},"Clear")),r.a.createElement(u.a,{size:"large",tip:"Loading",spinning:y(),delay:"200"},r.a.createElement("div",{className:"mt-4 px-4 py-8 shadow-lg rounded overflow-y-auto scroll bg-white",style:{width:600,height:"calc(100vh - 170px)"}},r.a.createElement("p",{className:"font-bold mb-6"},"Result found: ",h()),g()?r.a.createElement(d.a,{status:"500",title:"500",subTitle:"Sorry, something went wrong."}):x()?0===h()?""===a?r.a.createElement(d.a,{title:"Enter some keyword"}):r.a.createElement(d.a,{title:"No user found"}):o().map((function(e,t){return r.a.createElement("div",{key:e.id,className:"flex items-center mb-6 pb-6 justify-between",style:{borderBottom:"1px solid #ccc"}},r.a.createElement("div",{className:"flex items-center"},r.a.createElement("p",{className:"mr-8 mb-0"},"#",t+1),r.a.createElement(p.a,{src:e.avatar_url,size:48}),r.a.createElement("div",{className:"ml-4"},r.a.createElement("p",{className:"font-bold text-base mb-0"},e.login),r.a.createElement("a",{href:e.html_url,target:"__blank",className:"text-sm underline"},"Github Link"))),r.a.createElement(m.a,{type:"primary"},r.a.createElement(b.b,{to:"/detail/".concat(e.login)},"Detail")))})):void 0,o().length<h()&&r.a.createElement("div",{className:"w-100 mt-4 flex justify-center"},r.a.createElement(m.a,{type:"primary",onClick:N},"Load More")))))},T=a(239),B=a(241),P=a(242),J=a(243),q=a(244),G="loading",F="success",H="error",I="LOAD",K="LOAD_SUCCESS",Q="LOAD_ERROR",V="LOAD_MORE_SUCCESS",W=function(e,t){switch(t.type){case I:return Object(w.a)({},e,{status:G});case K:return{status:F,repos:t.payload.repos,user:t.payload.user};case Q:return Object(w.a)({},e,{status:H});case V:return Object(w.a)({},e,{status:F,repos:[].concat(Object(v.a)(e.repos),Object(v.a)(t.payload))});default:return e}},X=function(e,t){var a=Object(n.useReducer)(W,{status:G,user:null,repos:[]}),r=Object(f.a)(a,2),c=r[0],l=r[1];function s(){return(s=Object(g.a)(y.a.mark((function a(){var n,r,s;return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n=Math.floor(c.repos.length/30)+1,l({type:I}),a.next=5,t(e,n);case 5:r=a.sent,s=r.data,l({type:V,payload:s}),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0),l({type:Q});case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))).apply(this,arguments)}return[function(){return c.user},function(){return c.repos},function(){return c.status===G},Object(n.useCallback)((function(e,t){return l({type:K,payload:{user:e,repos:t}})}),[l]),function(){return s.apply(this,arguments)},function(){return c.status===F},function(){return c.status===H}]},Y=function(e){return j("/users/".concat(e))},Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return j("/users/".concat(e,"/repos?page=").concat(t),{params:{type:"owner",sort:"created",direction:"asc"}})},$=function(){var e=Object(s.f)().username,t=X(e,Z),a=Object(f.a)(t,5),c=a[0],l=a[1],i=a[2],d=a[3],E=a[4];Object(n.useEffect)((function(){document.title="Detail"}),[]);var h,x=c(),v=l();return Object(n.useEffect)((function(){function t(){return(t=Object(g.a)(y.a.mark((function t(){var a,n,r,c;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([Y(e),Z(e)]);case 3:a=t.sent,n=Object(f.a)(a,2),r=n[0],c=n[1],d(r.data,c.data),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,d]),r.a.createElement("div",{className:"container mx-auto pt-8 w-100 h-100 flex flex-col items-center"},r.a.createElement(u.a,{size:"large",tip:"Loading",spinning:i()&&null===x,delay:"200"},r.a.createElement("div",{className:"px-4 py-2 shadow-lg rounded bg-white box-border",style:{width:600,height:170}},r.a.createElement(b.b,{to:"/",className:"text-black"},r.a.createElement(T.a,{className:"font-bold text-lg cursor-pointer"})),null!==x?r.a.createElement("div",{className:"flex"},r.a.createElement(p.a,{size:128,src:x.avatar_url}),r.a.createElement("div",{className:"ml-4"},r.a.createElement("p",{className:"text-2xl font-bold mb-2"},x.name),r.a.createElement("p",{className:"mb-1 flex items-center"},r.a.createElement(o.a,null),r.a.createElement("span",{className:"ml-2 mr-1"},"Profile:")," ",r.a.createElement("a",{href:x.html_url,target:"__blank"},x.html_url)),r.a.createElement("p",{className:"mb-1 flex items-center"},r.a.createElement(B.a,null),r.a.createElement("span",{className:"ml-2 mr-1"},"Location:")," ",x.location),r.a.createElement("p",{className:"mb-1 flex items-center"},r.a.createElement(P.a,null),r.a.createElement("span",{className:"ml-2 mr-1"},"Join at:")," ",(h=x.created_at)&&"string"===typeof h?h.substr(0,10).split("-").reverse().join("-"):"Unknown"))):null)),r.a.createElement(u.a,{size:"large",tip:"Loading",spinning:i(),delay:"200"},r.a.createElement("div",{className:"mt-4 px-4 py-4 shadow-lg rounded overflow-y-auto scroll bg-white",style:{width:600,height:"calc(100vh - 250px)"}},r.a.createElement("p",{className:"font-bold mb-6"},"Public repo: ",(null===x||void 0===x?void 0:x.public_repos)||0),v.map((function(e,t){return r.a.createElement("div",{key:e.id,className:"mb-3 pb-5 justify-between",style:{borderBottom:"1px solid #ccc"}},r.a.createElement("p",{className:"font-bold text-xl mb-2"},r.a.createElement("a",{href:e.html_url,target:"__blank"},"#",t+1," - ",e.name)),r.a.createElement("p",{className:"text-sm text-gray-600 mb-0"},e.description||"No description"),r.a.createElement("div",{className:"mt-5 flex items-center justify-between"},e.language&&r.a.createElement("p",{className:"flex items-center mb-0 mr-6"},r.a.createElement("span",{className:"w-4 h-4 bg-green-600 inline-block rounded-full"}),r.a.createElement("span",{className:"ml-1 text-black"},e.language)),r.a.createElement("div",{className:"flex items-center"},r.a.createElement("span",{title:"Star",className:"flex items-center inline-block mr-6"},r.a.createElement(J.a,{className:"mr-1"})," ",e.stargazers_count),r.a.createElement("span",{title:"Fork",className:"flex items-center inline-block mr-6"},r.a.createElement(q.a,{className:"mr-1"})," ",e.forks))))})),v.length<((null===x||void 0===x?void 0:x.public_repos)||0)&&r.a.createElement("div",{className:"w-100 mt-4 flex justify-center"},r.a.createElement(m.a,{type:"primary",onClick:E},"Load More")))))},ee=function(){return r.a.createElement("div",{className:"app w-100 h-screen overflow-hidden",style:{backgroundColor:"#f7f8fe"}},r.a.createElement("div",{className:"flex h-screen"},r.a.createElement("div",{className:"w-64 shadow-2xl flex flex-col justify-center items-center",style:{backgroundColor:"#24292e"}},r.a.createElement("span",{className:"rounded-full inline-block bg-white"},r.a.createElement(o.a,{style:{fontSize:90}})),r.a.createElement("p",{className:"text-xl font-bold text-white mt-4"},"Github User Search")),r.a.createElement("div",{className:"flex flex-grow"},r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:U}),r.a.createElement(s.a,{exact:!0,path:"/detail/:username",component:$})))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b.a,null,r.a.createElement(ee,null))),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.baf807d1.chunk.js.map