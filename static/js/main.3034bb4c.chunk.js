(this["webpackJsonpreact_clock-hooks"]=this["webpackJsonpreact_clock-hooks"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(4),o=c.n(n),r=c(2),a=c(1),s=(c(9),c(0)),i=function(e){var t=e.clockName,c=Object(a.useState)(new Date),n=Object(r.a)(c,2),o=n[0],i=n[1];return Object(a.useEffect)((function(){var e=window.setInterval((function(){i(new Date),console.info(o.toUTCString().slice(-12,-4))}),1e3);return function(){return clearInterval(e)}}),[o]),Object(s.jsxs)("div",{className:"Clock",children:[Object(s.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(s.jsx)("span",{className:"Clock__time",children:o.toUTCString().slice(-12,-4)})]})};var l=function(){var e=Object(a.useState)("Clock-0"),t=Object(r.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(!0),l=Object(r.a)(o,2),u=l[0],j=l[1];return document.addEventListener("contextmenu",(function(e){e.preventDefault(),j(!1)})),document.addEventListener("click",(function(e){e.preventDefault(),j(!0)})),Object(a.useEffect)((function(){var e=window.setInterval((function(){n(function(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}())}),3300);return function(){return window.clearInterval(e)}})),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"React clock"}),u&&Object(s.jsx)(i,{clockName:c})]})};o.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.3034bb4c.chunk.js.map