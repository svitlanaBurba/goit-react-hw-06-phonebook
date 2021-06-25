(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[0],{30:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a,r,c,o,i,s,b=n(0),l=n.n(b),d=n(12),u=n.n(d),j=(n(30),n(13)),m=n(14),p=n(17),h=n(15),O=n(4),f=n(7),x=n(3),g=Object(x.b)("contacts/Add"),y=Object(x.b)("contacts/Delete"),C=n(8),v=n(9),k=v.a.form(a||(a=Object(C.a)(["\n  width: 50vw;\n  padding: 16px;\n  border: 2px solid grey;\n  border-radius: 4px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),w=v.a.input(r||(r=Object(C.a)(["\n  display: block;\n  min-width: 300px;\n  padding: 5px 10px;\n  margin-bottom: 15px;\n  border: 1px solid lightgrey;\n  border-radius: 4px;\n  :focus {\n    outline: none;\n    border: 3px solid lightblue;\n  }\n"]))),A=v.a.label(c||(c=Object(C.a)(["\n  display: block;\n  margin-bottom: 5px;\n  font-size: 18px;\n"]))),z=v.a.button(o||(o=Object(C.a)(["\n  padding: 2px 10px;\n  border: 1px solid lightgrey;\n  border-radius: 4px;\n  background-color: white;\n  font-size: 16px;\n  cursor: pointer;\n  transition-duration: 0.4s;\n  :hover {\n    background-color: lightblue;\n    color: white;\n    border-color: lightblue;\n  }\n"]))),S=n(1),F=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.handleChange=function(t){e.setState(Object(O.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log("Adding new"),console.dir(e.props),e.props.contacts.some((function(t){return t.name===e.state.name}))?alert("".concat(e.state.name," is already in contacts.")):e.props.addNewContact({name:e.state.name,number:e.state.number})},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(S.jsxs)(k,{onSubmit:this.handleSubmit,children:[Object(S.jsx)(A,{htmlFor:"name",children:"Name"}),Object(S.jsx)(w,{type:"text",id:"name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,value:this.state.name}),Object(S.jsx)(A,{htmlFor:"number",children:"Number"}),Object(S.jsx)(w,{type:"tel",id:"number",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,value:this.state.value}),Object(S.jsx)(z,{type:"submit",children:"Add contact"})]})}}]),n}(b.Component),N=Object(f.b)((function(e){return{contacts:e.contacts.contacts}}),(function(e){return{addNewContact:function(t){return e(g(t))}}}))(F),L=Object(x.b)("filter/handleChange"),D={handleChange:L},I=Object(f.b)((function(e){return{filter:e.filter}}),D)((function(e){e.filter;var t=e.handleChange;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(A,{htmlFor:"filter",children:"Find contacts by name"}),Object(S.jsx)(w,{id:"filter",type:"text",onChange:function(e){return t(e.target.value)},name:"filter"})]})})),J=n(40),T=v.a.li(i||(i=Object(C.a)(["\n  margin-bottom: 10px;\n  .contactListItemText {\n    display: inline-block;\n    margin-right: 10px;\n    font-size: 18px;\n  }\n"]))),Z=function(e){var t=e.name,n=e.number,a=e.deleteContact;return Object(S.jsxs)(T,{children:[Object(S.jsxs)("p",{className:"contactListItemText",children:[t,": ",n]}),Object(S.jsx)(z,{type:"button",onClick:a,children:"Delete"})]})},q={deleteContact:y},B=Object(f.b)((function(e){return{contacts:(t=e.contacts.contacts,n=e.filter.filter,t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())})))};var t,n}),q)((function(e){var t=e.contacts,n=e.deleteContact;return Object(S.jsx)("ul",{children:t.map((function(e){return Object(S.jsx)(Z,{name:e.name,number:e.number,deleteContact:function(){return n(e.id)}},Object(J.a)())}))})})),E=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"Phonebook"}),Object(S.jsx)(N,{}),Object(S.jsx)("h2",{children:"Contacts"}),Object(S.jsx)(I,{}),Object(S.jsx)(B,{})]})}}]),n}(b.Component),M=n(16),H=n(2),K=n(5),P=Object(x.c)({contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]},(s={},Object(O.a)(s,g,(function(e,t){t.type;var n=t.payload;return Object(K.a)(Object(K.a)({},e),{},{contacts:[].concat(Object(M.a)(e.contacts),[Object(K.a)({id:Object(J.a)()},n)])})})),Object(O.a)(s,y,(function(e,t){t.type;var n=t.payload;return Object(K.a)(Object(K.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==n}))})})),s)),R=Object(x.c)({filter:""},Object(O.a)({},L,(function(e,t){return Object(K.a)(Object(K.a)({},e),{},{filter:t.payload})}))),$=Object(H.b)({contacts:P,filter:R}),G=n(6),Q=n(23),U=n.n(Q),V=Object(M.a)(Object(x.d)({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})),W={key:"contacts",storage:U.a,blacklist:["filter"]},X=Object(x.a)({reducer:Object(G.g)(W,$),middleware:V,devTools:!1}),Y={store:X,persistor:Object(G.h)(X)},_=n(24);u.a.render(Object(S.jsx)(l.a.StrictMode,{children:Object(S.jsx)(f.a,{store:Y.store,children:Object(S.jsx)(_.a,{loading:null,persistor:Y.persistor,children:Object(S.jsx)(E,{})})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0b8cd141.chunk.js.map