(this.webpackJsonpcar_details_app=this.webpackJsonpcar_details_app||[]).push([[0],{35:function(e,c,t){},36:function(e,c,t){},4:function(e,c,t){e.exports={wrapper:"DetailsPage_wrapper__1N65z",wrapperHead:"DetailsPage_wrapperHead__knMqL",tableCont:"DetailsPage_tableCont__3SuLS",tableHeader:"DetailsPage_tableHeader__EmqNU",tableRow:"DetailsPage_tableRow__3tVxu"}},6:function(e,c,t){e.exports={SearchBar:"CarMain_SearchBar__p9J2i",tableHeader:"CarMain_tableHeader__2Ia3q",headerCont:"CarMain_headerCont__2-zPr",tableRows:"CarMain_tableRows__ttHFD",paginationCont:"CarMain_paginationCont__14MQ3",showCardCont:"CarMain_showCardCont__2lLf6",showCardGrid:"CarMain_showCardGrid__tA9ZI",showCardRow:"CarMain_showCardRow__20Zq2",cardCont:"CarMain_cardCont__2byMZ"}},62:function(e,c,t){"use strict";t.r(c);var n=t(1),a=t.n(n),i=t(28),s=t.n(i),l=(t(35),t(36),t(2)),r=t(10),d=t(14),j=t.n(d),o=t(13),h=t(6),b=t.n(h),O=t(0);function x(){var e=Object(n.useState)([]),c=Object(r.a)(e,2),t=c[0],a=c[1],i=Object(n.useState)(!1),s=Object(r.a)(i,2),l=s[0],d=s[1],h=Object(n.useState)(!1),x=Object(r.a)(h,2),u=x[0],_=x[1],v=Object(n.useState)(0),p=Object(r.a)(v,2),C=p[0],f=p[1],m=Object(n.useState)(!0),w=Object(r.a)(m,2),g=w[0],N=w[1],y=Object(n.useState)("2021-09-13"),S=Object(r.a)(y,2),k=S[0],R=S[1],M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"2021-9-13",c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return d(!0),j.a.get("https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=".concat(e,"T00:00:00.000&$offset=").concat(c,"&$limit=15")).then((function(e){a(e.data),console.log(e.data)})).catch((function(e){console.log(e),_(!0),d(!1)})).finally((function(){_(!1),d(!1)}))};Object(n.useEffect)((function(){M(k,C)}),[C]);console.log(t);return Object(O.jsxs)("div",{className:b.a.CarMainCont,children:[Object(O.jsx)("header",{className:b.a.headerCont,children:Object(O.jsx)("h1",{children:"Vehical Crash Details"})}),Object(O.jsx)("section",{className:b.a.showCardCont,children:g?Object(O.jsx)("div",{className:b.a.showCardGrid,children:Object(O.jsx)("i",{onClick:function(){return N(!g)},className:"ri-layout-grid-fill"})}):Object(O.jsx)("div",{className:b.a.showCardRow,children:Object(O.jsx)("i",{onClick:function(){return N(!g)},className:"ri-layout-row-fill"})})}),Object(O.jsx)("section",{children:Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:b.a.SearchBar,children:[Object(O.jsx)("input",{placeholder:"2014-01-21",value:k,onChange:function(e){return R(e.target.value)},onKeyPress:function(e){"Enter"==e.key&&M(k)}}),Object(O.jsx)("button",{onClick:function(){M(k)},children:"Search"})]})})}),Object(O.jsx)(O.Fragment,{children:g?Object(O.jsx)("section",{children:l?Object(O.jsx)("h3",{children:"Loading..."}):u?Object(O.jsx)("h3",{children:"Something went wrong..."}):Object(O.jsxs)("section",{style:{border:"2px solid red"},children:[Object(O.jsxs)("div",{className:b.a.tableHeader,children:[Object(O.jsx)("div",{children:"Vehical Type 1"}),Object(O.jsx)("div",{children:"Vehical Type 2"}),Object(O.jsx)("div",{children:"Crash Date"}),Object(O.jsx)("div",{children:"Crash Time"}),Object(O.jsx)("div",{children:"Click Here"})]}),Object(O.jsx)("div",{children:t.map((function(e){return Object(O.jsxs)(o.b,{className:b.a.tableRows,to:e.collision_id,children:[Object(O.jsx)("div",{children:e.vehicle_type_code1}),Object(O.jsx)("div",{children:e.vehicle_type_code2}),Object(O.jsx)("div",{children:e.crash_date}),Object(O.jsx)("div",{children:e.crash_time}),Object(O.jsx)("div",{children:"Click Here"})]},e.collision_id)}))}),Object(O.jsxs)("div",{className:b.a.paginationCont,children:[Object(O.jsx)("button",{disabled:0===C,onClick:function(){return f(C-15)},children:"Prev"}),Object(O.jsx)("button",{onClick:function(){return f(C+15)},children:"Next"})]})]})}):Object(O.jsx)("section",{children:l?Object(O.jsx)("h3",{children:"Loading..."}):u?Object(O.jsx)("h3",{children:"Something went wrong..."}):Object(O.jsxs)("section",{children:[Object(O.jsx)("div",{className:b.a.cardCont,children:t.map((function(e){return Object(O.jsx)("div",{className:b.a.cardLinkCont,children:Object(O.jsxs)(o.b,{to:e.collision_id,className:b.a.cardLink,children:[Object(O.jsxs)("div",{children:["Vehicle type -1 : ",e.vehicle_type_code1]}),Object(O.jsxs)("div",{children:["Vehicle type -2 : ",e.vehicle_type_code2]}),Object(O.jsxs)("div",{children:["Crash date : ",e.crash_date]}),Object(O.jsxs)("div",{children:["Crash time: ",e.crash_time]}),Object(O.jsx)("div",{children:"Click Here"})]},e.collision_id)})}))}),Object(O.jsxs)("div",{className:b.a.paginationCont,children:[Object(O.jsx)("button",{disabled:0===C,onClick:function(){return f(C-15)},children:"Prev"}),Object(O.jsx)("button",{onClick:function(){return f(C+15)},children:"Next"})]})]})})})]})}var u=t(4),_=t.n(u);function v(){var e,c,t,a,i,s,d,o,h,b=Object(n.useState)([]),x=Object(r.a)(b,2),u=x[0],v=x[1],p=Object(n.useState)(!1),C=Object(r.a)(p,2),f=C[0],m=C[1],w=Object(n.useState)(!1),g=Object(r.a)(w,2),N=g[0],y=g[1],S=Object(l.f)().id;return Object(n.useEffect)((function(){m(!0),j.a.get("https://data.cityofnewyork.us/resource/h9gi-nx95.json/?collision_id=".concat(S)).then((function(e){v(e.data),console.log(e.data)})).catch((function(e){console.log(e),y(!0),m(!1)})).finally((function(){y(!1),m(!1)}))}),[]),console.log(u[0]),Object(O.jsx)("div",{className:_.a.cont,children:Object(O.jsxs)("section",{className:_.a.wrapper,children:[Object(O.jsx)("header",{className:_.a.wrapperHead,children:Object(O.jsx)("h1",{children:"ACCIDENT DETAILS"})}),Object(O.jsx)("section",{children:f?Object(O.jsx)("h3",{style:{width:"15%",margin:"auto"},children:"Loading..."}):N?Object(O.jsx)("h3",{children:"Something went wrong..."}):Object(O.jsxs)("section",{className:_.a.tableCont,children:[Object(O.jsxs)("div",{className:_.a.tableHeader,children:[Object(O.jsx)("span",{children:"Title"}),Object(O.jsx)("span",{children:"Data"})]}),Object(O.jsxs)("div",{className:_.a.tableRow,children:[Object(O.jsx)("span",{children:"Collison Place: "}),Object(O.jsx)("span",{children:null===(e=u[0])||void 0===e?void 0:e.on_street_name})]}),Object(O.jsxs)("div",{className:_.a.tableRow,children:[Object(O.jsx)("span",{children:"Crash date"}),Object(O.jsx)("span",{children:null===(c=u[0])||void 0===c?void 0:c.crash_date})]}),Object(O.jsxs)("div",{className:_.a.tableRow,children:[Object(O.jsx)("span",{children:"Crash time"}),Object(O.jsx)("span",{children:null===(t=u[0])||void 0===t?void 0:t.crash_time})]}),Object(O.jsxs)("div",{className:_.a.tableRow,children:[Object(O.jsx)("span",{children:"First Vehicle type"}),Object(O.jsx)("span",{children:null===(a=u[0])||void 0===a?void 0:a.vehicle_type_code1})]}),Object(O.jsxs)("div",{className:_.a.tableRow,children:[Object(O.jsx)("span",{children:"Second Vehicle type"}),Object(O.jsx)("span",{children:null===(i=u[0])||void 0===i?void 0:i.vehicle_type_code2})]}),Object(O.jsxs)("div",{className:_.a.tableRow,children:[Object(O.jsx)("span",{children:"Pedestrians Injured Status"}),Object(O.jsx)("span",{children:null===(s=u[0])||void 0===s?void 0:s.number_of_persons_injured})]}),Object(O.jsxs)("div",{className:_.a.tableRow,children:[Object(O.jsx)("span",{children:"Person Casuality Status"}),Object(O.jsx)("span",{children:null===(d=u[0])||void 0===d?void 0:d.number_of_persons_killed})]}),Object(O.jsxs)("div",{className:_.a.tableRow,children:[Object(O.jsx)("span",{children:"First Vehicle Collison Reason"}),Object(O.jsx)("span",{children:null===(o=u[0])||void 0===o?void 0:o.contributing_factor_vehicle_1})]}),Object(O.jsxs)("div",{className:_.a.tableRow,children:[Object(O.jsx)("span",{children:"Second Vehicle Collison Reason"}),Object(O.jsx)("span",{children:null===(h=u[0])||void 0===h?void 0:h.contributing_factor_vehicle_2})]})]})})]})})}function p(){return Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,children:Object(O.jsx)(x,{})}),Object(O.jsx)(l.a,{path:"/:id",exact:!0,children:Object(O.jsx)(v,{})})]})}var C=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(p,{})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,i=c.getLCP,s=c.getTTFB;t(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(o.a,{children:Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(C,{})})}),document.getElementById("root")),f()}},[[62,1,2]]]);
//# sourceMappingURL=main.e0494639.chunk.js.map