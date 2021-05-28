(this["webpackJsonpsocial-media-app"]=this["webpackJsonpsocial-media-app"]||[]).push([[0],{118:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(9),c=n.n(s),o=(n(86),n(25)),i=n(51),u=n(55),d=n(156),l=n(69),j=n.n(l),b=n(5),p=function(){return Object(b.jsx)("span",{children:Object(b.jsx)(j.a,{})})},O=(n(97),function(e){var t=e.postId,n=(e.postUserId,e.postTitle),r=e.postBody,a=e.deleteHandler;return Object(b.jsx)(d.a,{className:"post-container",elevation:2,children:Object(b.jsxs)("div",{className:"post",children:[Object(b.jsxs)("div",{className:"row-1",children:[Object(b.jsx)("h3",{children:n}),Object(b.jsx)("p",{children:r})]}),Object(b.jsx)("div",{className:"row-2",children:Object(b.jsx)("span",{onClick:function(){return a(t)},children:Object(b.jsx)(p,{})})})]})})}),f=n(157),v=(n(98),function(e){var t=e.message;return Object(b.jsxs)("div",{className:"spinner-container",children:[Object(b.jsx)("section",{children:Object(b.jsx)(f.a,{})}),Object(b.jsx)("section",{children:t})]})}),h=n(15),x=n.n(h),m=n(23),S=n(33),y=n.n(S),g="https://jsonplaceholder.typicode.com/posts",N=function(){var e=Object(m.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get(g);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.delete(g+"/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post(g,t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C="success",_="error",k="SNACKBAR_OPEN",P=function(e,t){return{type:e,data:t}},T=n(164),A=n(160),D=n(158),I=n(159),B=(n(118),function(){var e=Object(o.c)((function(e){return e.postreducer})),t=Object(o.b)(),n=Object(r.useState)(""),a=Object(u.a)(n,2),s=a[0],c=a[1],d=Object(r.useState)(""),l=Object(u.a)(d,2),j=l[0],p=l[1];Object(r.useEffect)((function(){t(function(){var e=Object(m.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(P("GET_POSTS_PENDING")),e.next=4,N();case 4:n=e.sent,t(P("GET_POSTS_SUCCESS",n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(P(k,{message:"Could Not Fetch Posts",severity:_}));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var f=function(e){t(function(e){return function(){var t=Object(m.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w(e);case 3:200===t.sent.status&&(n(P(k,{message:"Post deleted successfully",severity:C})),n(P("DELETE_POST",e))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(P(k,{message:"Could Not Delete",severity:_}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(e))},h=Object(i.a)(e.posts);return Object(b.jsxs)("div",{className:"posts",children:[Object(b.jsxs)("section",{className:"new-post-form-container",children:[Object(b.jsx)("h2",{children:"Add New Post"}),Object(b.jsx)("form",{id:"new-post-form",className:"new-post-form",onSubmit:function(e){e.preventDefault();var n={userId:1,title:s,body:j};document.getElementById("new-post-form").reset(),t(function(e){return function(){var t=Object(m.a)(x.a.mark((function t(n){var r;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E(e);case 3:201===(r=t.sent).status&&(n(P(k,{message:"Post created successfully",severity:C})),n(P("ADD_POST",r.data))),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),n(P(k,{message:"Could Not Create",severity:_}));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(n))},children:Object(b.jsxs)("div",{className:"new-post-form-contents",children:[Object(b.jsx)(T.a,{className:"form-labels",children:"title"}),Object(b.jsx)(A.a,{className:"form-fields",variant:"outlined",size:"small",type:"text",onChange:function(e){return function(e){return c(e.target.value)}(e)},required:!0}),Object(b.jsx)(T.a,{className:"form-labels",children:"body"}),Object(b.jsx)(D.a,{className:"form-fields",rowsMin:5,rowsMax:10,onChange:function(e){return function(e){return p(e.target.value)}(e)},required:!0}),Object(b.jsx)(I.a,{variant:"contained",className:"form-button",color:"primary",type:"submit",children:"Add Post"})]})})]}),Object(b.jsxs)("section",{children:[Object(b.jsx)("h2",{children:"Posts"}),e.loading?Object(b.jsx)(v,{message:"Loading Posts"}):h.map((function(e){return Object(b.jsx)(O,{postId:e.id,postUserId:e.userId,postTitle:e.title,postBody:e.body,deleteHandler:f},e.id)}))]})]})}),L=n(163),M=n(161),R=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.postreducer})),n=t.snackbarMessage,r=t.snackbarOpen,a=t.snackbarSeverity;function s(){e({type:"SNACKBAR_CLEAR",value:!1})}return Object(b.jsx)(L.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:r,autoHideDuration:6e3,onClose:s,children:Object(b.jsx)(M.a,{variant:"filled",onClose:s,severity:a,children:n})})},G=n(43),F=n(74),U=n(17),K={posts:[],loading:!1,snackbarOpen:!1,snackbarMessage:"",snackbarSeverity:"info"},H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||G.c,q=Object(G.d)(Object(G.b)({postreducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SNACKBAR_OPEN":return Object(U.a)(Object(U.a)({},e),{},{snackbarOpen:!0,snackbarMessage:t.data.message,snackbarSeverity:t.data.severity});case"SNACKBAR_CLEAR":return Object(U.a)(Object(U.a)({},e),{},{snackbarOpen:!1});case"GET_POSTS_PENDING":return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case"GET_POSTS_SUCCESS":return Object(U.a)(Object(U.a)({},e),{},{posts:t.data,loading:!1});case"DELETE_POST":return Object(U.a)(Object(U.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.data}))});case"ADD_POST":var n=[].concat(Object(i.a)(e.posts),[Object(U.a)({},t.data)]),r=Object(U.a)(Object(U.a)({},e),{},{posts:n});return r;default:return Object(U.a)({},e)}}}),H(Object(G.a)(F.a)));n(120);var z=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{store:q,children:[Object(b.jsx)(R,{}),Object(b.jsx)(B,{})]})})},J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,165)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(z,{})}),document.getElementById("root")),J()},86:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.bcd1ebd4.chunk.js.map