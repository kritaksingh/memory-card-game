(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){var c={"./Bertram.jpeg":15,"./Brian.png":16,"./Chris.png":17,"./Cleveland.png":18,"./Glenn.png":19,"./Joe.jpeg":20,"./Lois.png":21,"./Meg.png":22,"./Peter.png":23,"./Stewie.png":24};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=r,e.exports=a,a.id=14},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Bertram.b221b863.jpeg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Brian.e71daa69.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Chris.bf20920c.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Cleveland.34cc8c19.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Glenn.c1c54cb4.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Joe.22f3d541.jpeg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Lois.4fcc3e15.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Meg.0d07ece2.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Peter.852d0db6.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/Stewie.4a2d9b13.png"},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(7),i=n.n(r),s=n(6),u=n(2),d=n(0);var o=function(e){var t=e.src,n=e.alt,c=e.id,a=e.handleClick;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:t,alt:n,id:c,onClick:function(){return a(c)}}),Object(d.jsx)("br",{}),Object(d.jsx)("span",{children:n})]})};var l=function(e){var t=e.images,n=e.handleImageClick,c=function(e){return n(e)},a=t.map((function(e){var t=e.default.lastIndexOf("/")+1,n=e.default.indexOf("."),a=e.default.substring(t,n);return Object(d.jsx)(o,{src:e.default,alt:a,id:a,handleClick:c},a)}));return Object(d.jsx)("div",{className:"card-container",children:a})};var f=function(e){var t=e.clickedImages,n=Object(c.useState)(0),a=Object(u.a)(n,2),r=a[0],i=a[1],s=Object(c.useState)(0),o=Object(u.a)(s,2),l=o[0],f=o[1];return Object(c.useEffect)((function(){i(t.length),f((function(e){return r>e?r:e}))}),[t,r]),Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("h1",{className:"mb-10 fs-40",children:"Family Guy Memory Game"}),Object(d.jsx)("p",{className:"fs-30",children:"Get points for clicking on an image but don't click on any image more than once."})]}),Object(d.jsxs)("div",{className:"scorecard",children:[Object(d.jsxs)("span",{children:["Score: ",r]}),Object(d.jsxs)("span",{children:["High Score: ",l]})]})]})};n(13);var j=function(e){var t=Object(c.useState)([]),a=Object(u.a)(t,2),r=a[0],i=a[1],o=Object(c.useState)([]),j=Object(u.a)(o,2),m=j[0],b=j[1];return Object(c.useEffect)((function(){var e,t=(e=n(14)).keys().map(e);return i(t),document.title="Memory Card Game",t}),[]),Object(d.jsxs)("div",{children:[Object(d.jsx)(f,{clickedImages:m}),Object(d.jsx)(l,{images:r,handleImageClick:function(e){!function(e){for(var t=Object(s.a)(e),n=t.length-1;n>0;n--){var c=Math.floor(Math.random()*n),a=t[n];t[n]=t[c],t[c]=a}i(t)}(r),m.some((function(t){return t===e}))?b([]):b((function(t){return[].concat(Object(s.a)(t),[e])}))}})]})};var m=function(){return Object(d.jsx)(j,{})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.c25d468f.chunk.js.map