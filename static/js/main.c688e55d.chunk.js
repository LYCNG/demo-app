(this["webpackJsonpredux-project"]=this["webpackJsonpredux-project"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var o={};n.r(o),n.d(o,"depositMoney",(function(){return l})),n.d(o,"withdrawMoney",(function(){return d})),n.d(o,"switchToGA",(function(){return g})),n.d(o,"switchToGoogle",(function(){return h}));var c=n(0),i=n.n(c),r=n(4),u=n.n(r),s=(n(13),n(14),n(3)),a=n(2),l=function(t){return function(e){e({type:"deposit",payload:t})}},d=function(t){return function(e){e({type:"withdraw",payload:t})}},g=function(){return function(t){t({type:"google_Analytics"})}},h=function(){return function(t){t({type:"google"})}},p=(n.p,n.p,n(1));var f=function(){var t=Object(s.c)((function(t){return t.logo})).src,e=Object(s.b)(),n=Object(a.b)(o,e),c=n.switchToGA,i=n.switchToGoogle;return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("h1",{children:"Nice to Meet UUU!!!"}),Object(p.jsx)("img",{alt:"",src:t,width:"300",height:"300"}),Object(p.jsx)("button",{onClick:c,children:"Switch to GA!!!"}),Object(p.jsx)("button",{onClick:i,children:"Switch to Google!!!"})]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))},b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"deposit":return t+e.payload;case"withdraw":return t-e.payload;default:return t}},w="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png",y="https://developers.google.com/analytics/images/terms/logo_lockup_analytics_icon_vertical_black_2x.png",v={src:y},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"google":return{src:w};case"google_Analytics":return{src:y};default:return t}},x=Object(a.c)({account:b,logo:O}),_=n(8),m=Object(a.d)(x,{},Object(a.a)(_.a));u.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(s.a,{store:m,children:Object(p.jsx)(f,{})})}),document.getElementById("root")),j()}},[[22,1,2]]]);
//# sourceMappingURL=main.c688e55d.chunk.js.map