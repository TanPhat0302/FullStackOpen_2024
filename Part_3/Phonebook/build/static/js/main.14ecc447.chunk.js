(this.webpackJsonpform=this.webpackJsonpform||[]).push([[0],{40:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var c=t(16),r=t.n(c),a=t(3),u=t(2),s=t(4),o=t.n(s),i="/api/persons",l={getAll:function(){return o.a.get(i).then((function(e){return e.data}))},create:function(e){return o.a.post(i,e).then((function(e){return e.data}))},terminate:function(e){return o.a.delete("".concat(i,"/").concat(e.id),e).then((function(e){return e.data}))},update:function(e){return o.a.put("".concat(i,"/").concat(e.id),e).then((function(e){return e.data}))}},j=t(0),d=function(e){var n=e.person;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("li",{children:[n.name," ",n.number,Object(j.jsx)("button",{onClick:function(){return window.confirm("Delete ".concat(n.name," ?"))?void l.terminate(n).catch((function(e){console.log(e)})):Object(j.jsx)(j.Fragment,{})},children:"Delete"})]})})},b=(t(40),function(e){var n=e.unsuscessMessage;return null===n?null:Object(j.jsx)("div",{className:"error",children:n})}),h=function(e){var n=e.suscessMessage;return null===n?null:Object(j.jsx)("p",{className:"suscess",children:n})},f=function(e){var n=e.newTerm,t=e.handles;return Object(j.jsxs)("p",{children:["Filter with: ",Object(j.jsx)("input",{value:n,onChange:function(e){return t[2](e)}})]})},m=function(e){var n=e.addPerson,t=e.handles,c=e.news;return Object(j.jsxs)("form",{onSubmit:n,children:[Object(j.jsxs)("div",{children:["Name: ",Object(j.jsx)("input",{value:c[0],onChange:t[0],required:!0})," ",Object(j.jsx)("br",{}),"Number: ",Object(j.jsx)("input",{value:c[1],onChange:t[1],required:!0})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{type:"submit",children:"add"})})]})},O=function(e){return e.persons.map((function(e){return Object(j.jsx)(d,{person:e},e.name)}))},p=function(e){var n=Object(u.useState)([]),t=Object(a.a)(n,2),c=t[0],r=t[1],s=Object(u.useState)(""),o=Object(a.a)(s,2),i=o[0],d=o[1],p=Object(u.useState)(""),x=Object(a.a)(p,2),v=x[0],g=x[1],w=Object(u.useState)(""),S=Object(a.a)(w,2),k=S[0],C=S[1],y=Object(u.useState)(null),N=Object(a.a)(y,2),T=N[0],D=N[1],M=Object(u.useState)(null),A=Object(a.a)(M,2),F=A[0],P=A[1];Object(u.useEffect)((function(){l.getAll().then((function(e){r(e)}))}),[]);var q=[function(e){d(e.target.value)},function(e){g(e.target.value)},function(e){C(e.target.value)}],E=[i,v,k],J=c.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return Object(j.jsxs)("div",{children:[Object(j.jsx)(h,{suscessMessage:T}),Object(j.jsx)(b,{unsuscessMessage:F}),Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{newTerm:k,handles:q}),Object(j.jsx)("h1",{children:"Add a new"}),Object(j.jsx)(m,{addPerson:function(e){e.preventDefault();var n={name:i,number:v};if(c.some((function(e){return e.name===i}))&&window.confirm("".concat(n.name," is already in the phonebook. Do you want to update the number ?"))){var t=c.filter((function(e){return e.name===i}));n.id=t[0].id,l.update(n).catch((function(e){console.log(e),P("".concat(n.name," has already been deleted")),setTimeout((function(){P(null)}),5e3)}))}n.name.length<3||n.number.length<8?l.create(n).catch((function(e){console.log(e.response.data),P(e.response.data),setTimeout((function(){P(null)}),5e3)})):l.create(n).then(D("".concat(n.name," added to the phone book"))).then(setTimeout((function(){D(null)}),5e3)).then(r(c.concat(n))),d(""),g("")},handles:q,news:E}),Object(j.jsx)("h1",{children:"Numbers"}),Object(j.jsx)(O,{persons:J})]})};r.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.14ecc447.chunk.js.map