(this["webpackJsonpredux-project"]=this["webpackJsonpredux-project"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"depositMoney",(function(){return g})),n.d(o,"withdrawMoney",(function(){return j})),n.d(o,"switchToGA",(function(){return h})),n.d(o,"switchToGoogle",(function(){return p}));var c=n(0),i=n.n(c),r=n(8),s=n.n(r),a=(n(23),n(24),n(1)),u=n(11),l=n(7),d=n(5),g=function(t){return function(e){e({type:"deposit",payload:t})}},j=function(t){return function(e){e({type:"withdraw",payload:t})}},h=function(){return function(t){t({type:"google_Analytics"})}},p=function(){return function(t){t({type:"google"})}},b=n(2);var f=function(){var t=Object(l.c)((function(t){return t.logo})).src,e=Object(l.b)(),n=Object(d.b)(o,e),c=n.switchToGA,i=n.switchToGoogle;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{children:"Nice to Meet UUU!!!"}),Object(b.jsx)("img",{alt:"",src:t,width:"300",height:"300"}),Object(b.jsx)("button",{onClick:c,children:"Switch to GA!!!"}),Object(b.jsx)("button",{onClick:i,children:"Switch to Google!!!"})]})};var O=function(){return Object(b.jsx)(u.a,{children:Object(b.jsx)(a.c,{children:Object(b.jsx)(a.a,{path:"/",element:Object(b.jsx)(f,{})})})})},w=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))},x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"deposit":return t+e.payload;case"withdraw":return t-e.payload;default:return t}},y="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png",v="https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png",m={src:v},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"google":return{src:y};case"google_Analytics":return{src:v};default:return t}},G=Object(d.c)({account:x,logo:_}),k=n(15),A=n(13),T=n(16),C=n.n(T),F=n(17),L=n.n(F),M={key:"demo",storage:C.a,stateReconciler:L.a,timeout:null},S=Object(A.a)(M,G),P=Object(d.d)(S,Object(d.a)(k.a)),U=Object(A.b)(P),B=n(18);s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(l.a,{store:P,children:Object(b.jsx)(B.PersistGate,{loading:Object(b.jsx)(c.Fragment,{}),persistor:U,children:Object(b.jsx)(O,{})})})}),document.getElementById("root")),w()}},[[34,1,2]]]);
//# sourceMappingURL=main.2dc9dc81.chunk.js.map