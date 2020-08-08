(this.webpackJsonp01=this.webpackJsonp01||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},,function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t.n(c),i=t(6),s=t(9),m=t(1),o=t(16),u=t.n(o),_=(t(23),function(){return l.a.createElement("header",{className:"header"},l.a.createElement(i.b,{to:"/"},l.a.createElement("h1",{className:"header__title"},l.a.createElement("img",{src:u.a,alt:"Rick and Morty logo"}))))}),p=(t(29),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("small",null,"2020\xa9 Sonia Sanz Vivas"))}),f=(t(30),function(e){var a=function(a){a.preventDefault(),e.handleFilterCharacters({key:a.currentTarget.id,value:a.currentTarget.value})};return l.a.createElement("form",{className:"filters"},l.a.createElement("label",{htmlFor:"name",className:"filters__label"},l.a.createElement("span",{className:"filters__name"},"Search by name: "),l.a.createElement("input",{id:"name",type:"text",onChange:a,className:"filters__input",value:e.filterName})),l.a.createElement("label",{htmlFor:"species",className:"filters__label"},l.a.createElement("span",{className:"filters__name"}," Search by species: "),l.a.createElement("select",{id:"species",value:e.filterSpecies,className:"filters__input",onChange:a},l.a.createElement("option",{value:"All"},"All"),l.a.createElement("option",{value:"Human"},"Human"),l.a.createElement("option",{value:"Alien"},"Alien"),l.a.createElement("option",{value:"Humanoid"},"Humanoid"),l.a.createElement("option",{value:"Unknown"},"Unknown"))))}),d=(t(31),function(e){var a=e.id,t=e.name,n=e.image,c=e.species,r=e.speciesType,s=e.gender,m="Human"===c?"Female"===s?"\ud83d\udc71\ud83c\udffc\u200d\u2640\ufe0f":"\ud83e\uddd4\ud83c\udffd":"\ud83d\udc7d",o=""!==r?"-".concat(r,"-"):"";return l.a.createElement("article",{className:"article"},l.a.createElement("span",{className:"article__icon"},m),l.a.createElement(i.b,{to:"/character/".concat(a)},l.a.createElement("img",{className:"article__img",src:n,alt:t})),l.a.createElement("div",{className:"article__name"},l.a.createElement("h2",null,t)),l.a.createElement("div",{className:"article__species"},l.a.createElement("p",null,c,l.a.createElement("span",null,o))),l.a.createElement(i.b,{className:"article__button",to:"/character/".concat(a)},l.a.createElement("div",null),l.a.createElement("p",null,"More info...")))}),E=(t(32),t(33),function(){return l.a.createElement("section",{className:"section__warning"},l.a.createElement("p",null,l.a.createElement("span",null,"The character you were")," ",l.a.createElement("span",null,"looking for doesn't exist")),l.a.createElement("img",{src:"https://media.giphy.com/media/QuPFL61aiRYZOtPrTI/giphy.gif",alt:"Rick and Morty gif"}))}),g=function(e){var a=e.characters.length,t=e.characters.map((function(e){return l.a.createElement(d,{key:e.id,id:e.id,name:e.name,species:e.species,speciesType:e.speciesType,image:e.image,gender:e.gender})})),n=0===a?l.a.createElement(E,null):l.a.createElement("section",{className:"section__list"},t);return l.a.createElement(l.a.Fragment,null,n)},h=function(){return fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json().then((function(e){return e.results.map((function(e){return{id:e.id,image:e.image,name:e.name,species:e.species,speciesType:e.type,planet:e.origin.name,episodes:e.episode.length,status:e.status,gender:e.gender}}))}))}))},N=(t(34),function(e){console.log(e);var a=e.name,t=e.species,n=e.image,c=e.planet,r=e.episodes,s=e.status,m=e.gender,o="Human"===t?"Female"===m?"\ud83d\udc71\ud83c\udffc\u200d\u2640\ufe0f":"\ud83e\uddd4\ud83c\udffd":"\ud83d\udc7d";return l.a.createElement(i.b,{to:"/"},l.a.createElement("article",{className:"detail"},l.a.createElement("div",{className:"detail__card",onClick:function(e){e.preventDefault()}},l.a.createElement("div",{className:"detail__card__img"},l.a.createElement("img",{src:n,alt:a})),l.a.createElement("div",{className:"detail__card__info"},l.a.createElement(i.b,{to:"/",className:"detail__card__info__link"},l.a.createElement("span",null,l.a.createElement("i",{class:"fas fa-arrow-left"})," Back")),l.a.createElement("div",{className:"detail__card__info__content"},l.a.createElement("h3",null,l.a.createElement("span",{className:"detail__card__info__content__title"},"Name:")," ",l.a.createElement("span",{className:"detail__card__info__content__result"}," ",a)),l.a.createElement("p",null,l.a.createElement("span",{className:"detail__card__info__content__title"},"Species:"),l.a.createElement("span",{className:"detail__card__info__content__result"}," ",t)," ",l.a.createElement("span",null,o)),l.a.createElement("p",null,l.a.createElement("span",{className:"detail__card__info__content__title"},"Life situation:"),l.a.createElement("span",{className:"detail__card__info__content__result"}," ",s," "),l.a.createElement("span",null,"Alive"===s?"\ud83d\udc99":"Dead"===s?"\ud83d\udc80":"unknown"===s?"\u2753":void 0)),l.a.createElement("p",null,l.a.createElement("span",{className:"detail__card__info__content__title"},"Origin:"),l.a.createElement("span",{className:"detail__card__info__content__result"}," ",c)),l.a.createElement("p",null,l.a.createElement("span",{className:"detail__card__info__content__title"},"N\xba episodes:"),l.a.createElement("span",{className:"detail__card__info__content__result"}," ",r)))))))});t(35);h();var v=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),o=i[0],u=i[1],d=Object(n.useState)("All"),v=Object(s.a)(d,2),b=v[0],y=v[1];Object(n.useEffect)((function(){h().then((function(e){return c(e.sort((function(e,a){return e.name.toLowerCase().localeCompare(a.name.toLowerCase())})))}))}),[]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("filter"));e&&u(e)}),[]),Object(n.useEffect)((function(){localStorage.setItem("filter",JSON.stringify(o))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(_,null),l.a.createElement("main",null,l.a.createElement(m.a,{exact:!0,path:"/"},l.a.createElement(f,{handleFilterCharacters:function(e){"name"===e.key&&u(e.value),"species"===e.key&&y(e.value)},filterName:o,filterSpecies:b}),l.a.createElement(g,{characters:t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})).filter((function(e){return"All"===b||e.species===b}))})),l.a.createElement(m.c,null,l.a.createElement(m.a,{exact:!0,path:"/character/:id",render:function(e){var a=e.match.params.id,n=t.find((function(e){return e.id===parseInt(a)}));return n?l.a.createElement(N,{name:n.name,image:n.image,status:n.status,species:n.species,gender:n.gender,planet:n.planet,episodes:n.episodes}):l.a.createElement(E,null)}}))),l.a.createElement(p,null))};t(36);r.a.render(l.a.createElement(i.a,null,l.a.createElement(v,null)),document.querySelector("#root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.614586ae.chunk.js.map