(this["webpackJsonpredux-project"]=this["webpackJsonpredux-project"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"depositMoney",(function(){return j})),n.d(o,"withdrawMoney",(function(){return h})),n.d(o,"switchToGA",(function(){return g})),n.d(o,"switchToGoogle",(function(){return b}));var c=n(0),i=n.n(c),r=n(8),s=n.n(r),a=(n(23),n(24),n(1)),u=n(11),l=n(7),d=n(5),j=function(t){return function(e){e({type:"deposit",payload:t})}},h=function(t){return function(e){e({type:"withdraw",payload:t})}},g=function(){return function(t){t({type:"google_Analytics"})}},b=function(){return function(t){t({type:"google"})}},p=n(2);var f=function(){var t=Object(l.c)((function(t){return t.logo})).src,e=Object(l.b)(),n=Object(d.b)(o,e),c=n.switchToGA,i=n.switchToGoogle;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Nice to Meet UUU!!!"}),Object(p.jsx)("img",{alt:"",src:t,width:"300",height:"300"}),Object(p.jsx)("button",{onClick:c,children:"Switch to GA!!!"}),Object(p.jsx)("button",{onClick:i,children:"Switch to Google!!!"}),Object(p.jsx)("button",{onClick:function(){return window.location.href="/#/new"},children:"go to News"})]})};var O=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"nothing here"}),Object(p.jsx)("button",{onClick:function(){return window.location.href="/"},children:"go to News"})]})};var w=function(){return Object(p.jsx)(u.a,{children:Object(p.jsxs)(a.c,{children:[Object(p.jsx)(a.a,{exact:!0,path:"/",element:Object(p.jsx)(f,{})}),Object(p.jsx)(a.a,{path:"/new",element:Object(p.jsx)(O,{})})]})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))},v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"deposit":return t+e.payload;case"withdraw":return t-e.payload;default:return t}},y="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png",m="https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png",_={src:m},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"google":return{src:y};case"google_Analytics":return{src:m};default:return t}},G=Object(d.c)({account:v,logo:k}),C=n(15),A=n(13),T=n(16),F=n.n(T),L=n(17),M=n.n(L),N={key:"demo",storage:F.a,stateReconciler:M.a,timeout:null},S=Object(A.a)(N,G),P=Object(d.d)(S,Object(d.a)(C.a)),U=Object(A.b)(P),B=n(18);s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(l.a,{store:P,children:Object(p.jsx)(B.PersistGate,{loading:Object(p.jsx)(c.Fragment,{}),persistor:U,children:Object(p.jsx)(w,{})})})}),document.getElementById("root")),x()}},[[34,1,2]]]);
//# sourceMappingURL=main.4727686b.chunk.js.map