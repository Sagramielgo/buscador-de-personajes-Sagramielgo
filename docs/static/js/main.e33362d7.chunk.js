(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{12:function(e,c,t){},13:function(e,c,t){},14:function(e,c,t){},28:function(e,c,t){"use strict";t.r(c);var a=t(8),n=(t(12),t(13),t(14),t(1)),r=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{className:"card__container-img",children:Object(n.jsx)("img",{className:"card__img",src:e.characterInfo.image,alt:"".concat(e.characterInfo.name,"'s portrait")})}),Object(n.jsxs)("div",{className:"card__text",children:[Object(n.jsx)("h3",{className:"card__text-title",children:e.characterInfo.name}),Object(n.jsx)("p",{className:"card__text-paragraph",children:e.characterInfo.specie}),Object(n.jsx)("p",{className:"card__text-paragraph",children:e.characterInfo.planet})]})]})},s=function(e){var c=e.charactersInfo.map((function(e){return Object(n.jsx)(r,{className:"characterCard",characterInfo:e},e.id)}));return Object(n.jsx)("section",{children:Object(n.jsx)("ul",{className:"charactersList",children:Object(n.jsx)("li",{className:"card",children:c})})})},i=function(){return fetch("//rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,specie:e.species,planet:e.location.name,status:e.status,episodes:e.episode}}))}))},l=function(e){return Object(n.jsxs)("label",{className:"form__label",htmlFor:"searchField",children:[Object(n.jsx)("input",{className:"form__input",type:"text",name:"searchField",id:"searchField",placeholder:"Insert character name",onChange:function(c){e.handleFilter({key:"name",value:c.target.value.toUpperCase()})}}),Object(n.jsx)("span",{className:"icon iconInput fas fa-undo"})]})},j=function(e){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("label",{children:"Especie:"}),Object(n.jsxs)("select",{className:"form__input-text",name:"species",id:"species",onChange:function(c){e.handleFilter({key:"species",value:c.target.value})},children:[Object(n.jsx)("option",{value:"All",children:"All"}),Object(n.jsx)("option",{value:"Alien",children:"Alien"}),Object(n.jsx)("option",{value:"Human",children:"Human"})]})]})},o=function(e){return Object(n.jsx)("section",{children:Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(n.jsx)("h1",{children:" en marcha!"}),Object(n.jsx)(l,{handleFilter:e.handleFilter}),Object(n.jsx)(j,{})]})})},u=t(0),h=function(){var e=Object(u.useState)([]),c=Object(a.a)(e,2),t=c[0],r=c[1],l=Object(u.useState)(""),j=Object(a.a)(l,2),h=j[0],d=j[1];Object(u.useEffect)((function(){i().then((function(e){return r(e)}))}),[]);var m=t.filter((function(e){return e.name.toUpperCase().includes(h)}));return console.log(m),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsx)("header",{className:"app__header",children:Object(n.jsx)(o,{handleFilter:function(e){"name"===e.key&&d(e.value)}})}),Object(n.jsx)("main",{className:"app__main",children:Object(n.jsx)(s,{charactersInfo:m})})]})},d=t(9),m=t.n(d),p=t(11);m.a.render(Object(n.jsx)(p.a,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.e33362d7.chunk.js.map