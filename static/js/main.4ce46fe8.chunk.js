(this["webpackJsonpredux-project"]=this["webpackJsonpredux-project"]||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"depositMoney",(function(){return j})),n.d(c,"withdrawMoney",(function(){return h})),n.d(c,"switchToGA",(function(){return g})),n.d(c,"switchToGoogle",(function(){return b}));var o=n(0),r=n.n(o),i=n(8),s=n.n(i),a=(n(23),n(24),n(1)),u=n(11),l=n(7),d=n(5),j=function(t){return function(e){e({type:"deposit",payload:t})}},h=function(t){return function(e){e({type:"withdraw",payload:t})}},g=function(){return function(t){t({type:"google_Analytics"})}},b=function(){return function(t){t({type:"google"})}},p=n(2);var f=function(){var t=Object(l.c)((function(t){return t.logo})).src,e=Object(l.b)(),n=Object(d.b)(c,e),o=n.switchToGA,r=n.switchToGoogle;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Nice to Meet UUU!!!"}),Object(p.jsx)("img",{alt:"",src:t,width:"300",height:"300"}),Object(p.jsx)("button",{onClick:o,children:"Switch to GA!!!"}),Object(p.jsx)("button",{onClick:r,children:"Switch to Google!!!"})]})};var O=function(){return Object(p.jsx)("div",{children:Object(p.jsx)("h1",{children:"nothing here"})})};var x=function(){return Object(p.jsx)(u.a,{children:Object(p.jsxs)(a.c,{children:[Object(p.jsx)(a.a,{path:"/",element:Object(p.jsx)(f,{})}),Object(p.jsx)(a.a,{path:"/",element:Object(p.jsx)(O,{})})]})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))},w=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"deposit":return t+e.payload;case"withdraw":return t-e.payload;default:return t}},y="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png",m="https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png",_={src:m},G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"google":return{src:y};case"google_Analytics":return{src:m};default:return t}},k=Object(d.c)({account:w,logo:G}),A=n(15),T=n(13),C=n(16),F=n.n(C),L=n(17),M=n.n(L),S={key:"demo",storage:F.a,stateReconciler:M.a,timeout:null},P=Object(T.a)(S,k),U=Object(d.d)(P,Object(d.a)(A.a)),B=Object(T.b)(U),I=n(18);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(l.a,{store:U,children:Object(p.jsx)(I.PersistGate,{loading:Object(p.jsx)(o.Fragment,{}),persistor:B,children:Object(p.jsx)(x,{})})})}),document.getElementById("root")),v()}},[[34,1,2]]]);
//# sourceMappingURL=main.4ce46fe8.chunk.js.map