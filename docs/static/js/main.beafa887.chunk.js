(this["webpackJsonpare-you-hooked"]=this["webpackJsonpare-you-hooked"]||[]).push([[0],{11:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(6),r=(n(11),n(3)),s=n.n(r),o=n(5),i=n(2),l=n(0),u="https://codecoolfrontendapi.herokuapp.com/",j=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),j=Object(i.a)(r,2),d=j[0],h=j[1],b=Object(a.useState)(d),p=Object(i.a)(b,2),O=p[0],f=p[1],x=Object(a.useState)(""),v=Object(i.a)(x,2),g=v[0],m=v[1],y=Object(a.useState)(""),w=Object(i.a)(y,2),k=w[0],S=w[1],C=Object(a.useState)(""),N=Object(i.a)(C,2),D=N[0],I=N[1];Object(a.useEffect)((function(){(function(){var e=Object(o.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(u+"employees");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,h(n),f(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var A=function(e,t){(function(){var n=Object(o.a)(s.a.mark((function n(){var a,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(u+"update/"+e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({salary:d.find((function(t){return t.id===parseInt(e)})).salary+t})});case 2:return a=n.sent,n.next=5,a.json();case 5:(c=n.sent)&&(h(c),f(c));case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()},P=function(e){e.preventDefault(),A(parseInt(e.target.dataset.id,10),-20)},E=function(e){e.preventDefault(),A(parseInt(e.target.dataset.id,10),20)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"logo",children:"Are you Hooked?"})})}),Object(l.jsx)("section",{children:Object(l.jsxs)("div",{className:"container",children:[g?Object(l.jsx)("p",{className:"error",children:g}):null,Object(l.jsx)("input",{type:"password",onChange:function(e){e.preventDefault();var t=[e.target.value.length<8,null===e.target.value.match(/[0-9]+/g),null===e.target.value.match(/[a-z]+/g),null===e.target.value.match(/[A-Z]+/g),null===e.target.value.match(/[!"#$%&'()*+,./:;<=>?@\[\]^_`{\|}~-]+/g)],n=["at least 8 characters","digits","lowercase characters","uppercase characters","special characters"],a=n.filter((function(e,n){return t[n]}));a.length?m(a.length===n.length?"":"Password should contain "+a.join(", ")):m(""),S(e.target.value)},value:k,placeholder:"Enter your password"}),Object(l.jsx)("input",{type:"password",onChange:function(e){e.preventDefault(),m(k!==e.target.value?"Passwords do not match":""),I(e.target.value)},value:D,placeholder:"Verify your password"})]})}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{onClick:function(){return c(!0)},onBlur:function(){return c(!1)},children:n?Object(l.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Name...",onChange:function(e){e.preventDefault(),f(e.target.value.length?d.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})):d),m("")}}):"Name"}),Object(l.jsx)("th",{children:"Age"}),Object(l.jsx)("th",{children:"Salary"})]})}),Object(l.jsx)("tbody",{children:O.map((function(e){var t=e.id,n=e.name,a=e.age,c=e.salary;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:t}),Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:a}),Object(l.jsxs)("td",{children:[Object(l.jsx)("button",{"data-id":t,onClick:P,children:"-"}),Object(l.jsx)("span",{children:c}),Object(l.jsx)("button",{"data-id":t,onClick:E,children:"+"})]})]},t)}))})]})})}),Object(l.jsx)("footer",{children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("p",{children:["API provided by"," ",Object(l.jsx)("a",{href:"http://www.dummy.restapiexample.com/",children:"Dummy sample REST API"})]})})})]})};Object(c.render)(Object(l.jsx)(a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.beafa887.chunk.js.map