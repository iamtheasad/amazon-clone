(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(47),l=a.n(r),i=(a(58),a(4)),o=(a(59),a(10)),s=a(5),m=(a(60),a(48)),u=a.n(m),d=a(49),p=a.n(d),E=Object(n.createContext)(),h=function(e){var t=e.reducer,a=e.initialState,r=e.children;return c.a.createElement(E.Provider,{value:Object(n.useReducer)(t,a)},r)},_=function(){return Object(n.useContext)(E)},g=a(32),v=a.n(g),b=(v.a.initializeApp({apiKey:"AIzaSyD1MiGfS2vEwidNrgzG8C1YAqF5RAtF56E",authDomain:"clone-3e9c3.firebaseapp.com",databaseURL:"https://clone-3e9c3.firebaseio.com",projectId:"clone-3e9c3",storageBucket:"clone-3e9c3.appspot.com",messagingSenderId:"782645067839",appId:"1:782645067839:web:ed0bc4a3648fc31008788a",measurementId:"G-2PSS1CHWEP"}).firestore(),v.a.auth());var f=function(){var e=_(),t=Object(i.a)(e,1)[0],a=t.basket,n=t.user;return c.a.createElement("nav",{className:"header"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG25.png",alt:"Amazon Logo"})),c.a.createElement("div",{className:"header__search"},c.a.createElement("input",{type:"text",className:"header__searchInput"}),c.a.createElement(u.a,{className:"header__searchIcon"})),c.a.createElement("div",{className:"header__nav"},c.a.createElement(o.b,{to:!n&&"/login",className:"header__link"},c.a.createElement("div",{onClick:function(){n&&b.signOut()},className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Hello ",n?null===n||void 0===n?void 0:n.email:"Guest"),c.a.createElement("span",{className:"header__optionLineTwo"},n?"Sign Out":"Sign In"))),c.a.createElement(o.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Returns"),c.a.createElement("span",{className:"header__optionLineTwo"},"& Orders"))),c.a.createElement(o.b,{to:"/",className:"header__link"},c.a.createElement("div",{className:"header__option"},c.a.createElement("span",{className:"header__optionLineOne"},"Your"),c.a.createElement("span",{className:"header__optionLineTwo"},"Prime"))),c.a.createElement(o.b,{className:"header__link",to:"/checkout"},c.a.createElement("div",{className:"header__optionBasket"},c.a.createElement(p.a,null),c.a.createElement("span",{className:"header__optionLineTwo header__basketCount"},null===a||void 0===a?void 0:a.length)))))},N=(a(76),a(28)),k=a.n(N),O=(a(77),function(e){var t=e.id,a=e.title,r=e.image,l=e.price,o=e.rating,s=_(),m=Object(i.a)(s,2),u=(m[0].basket,m[1]);return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"product"},c.a.createElement("div",{className:"product__info"},c.a.createElement("p",null,a),c.a.createElement("p",{className:"product__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,l)),c.a.createElement("div",{className:"product__rating"},Array(o).fill().map((function(e){return c.a.createElement("p",null,c.a.createElement(k.a,null))})))),c.a.createElement("img",{src:r,alt:"Product Image"}),c.a.createElement("button",{onClick:function(){u({type:"ADD_TO_BASKET",item:{id:t,title:a,image:r,price:l,rating:o}})}},"Add to basket")))}),y=function(){return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"home"},c.a.createElement("img",{className:"home__image",src:"https://cdn.pixabay.com/photo/2015/05/31/13/10/girl-791686__340.jpg",alt:"Banner Image"}),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{id:"1",title:"Sennheiser HD 300 Closed Back, Around Ear Headphone",image:"https://cdn.pixabay.com/photo/2017/05/11/11/15/workplace-2303851__340.jpg",price:11.96,rating:5}),c.a.createElement(O,{id:"2",title:"50MM Drivers Studio Headphones MAONO AU-MH601 Over Ear Stereo Monitor Closed Back Headphones..",image:"https://cdn.pixabay.com/photo/2017/01/18/17/14/girl-1990347__340.jpg",price:39.95,rating:4})),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{id:"3",title:"COWIN E7 Active Noise Cancelling Headphones Bluetooth Headphones with Microphone..",image:"https://cdn.pixabay.com/photo/2016/11/29/09/08/headphone-1868612__340.jpg",price:59.99,rating:5}),c.a.createElement(O,{id:"4",title:"Sony MDRZX110/BLK ZX Series Stereo Headphones (Black)",image:"https://cdn.pixabay.com/photo/2015/01/20/12/51/mobile-605422__340.jpg",price:11.96,rating:5}),c.a.createElement(O,{id:"5",title:"Sony Noise Cancelling Headphones WHCH710N: Wireless Bluetooth..",image:"https://cdn.pixabay.com/photo/2018/09/17/14/27/headphones-3683983__340.jpg",price:199.99,rating:5})),c.a.createElement("div",{className:"home__row"},c.a.createElement(O,{id:"6",title:"HOTCOK H37 Kids Headphones for Girls Boys Foldable Adjustable On Ear Headphones..",image:"https://cdn.pixabay.com/photo/2015/07/31/15/01/girl-869213__340.jpg",price:17.5,rating:5}))))},j=(a(78),a(79),function(e){var t=e.id,a=e.title,n=e.image,r=e.price,l=e.rating,o=_(),s=Object(i.a)(o,2),m=(s[0].basket,s[1]);return c.a.createElement("div",{className:"chekcoutProduct"},c.a.createElement("img",{className:"checkoutProduct__image",src:n,alt:"checkout image"}),c.a.createElement("div",{className:"checkoutProduct__info"},c.a.createElement("p",{className:"checkoutProduct__title"},a),c.a.createElement("p",{className:"checkoutProduct__price"},c.a.createElement("small",null,"$"),c.a.createElement("strong",null,r)),c.a.createElement("div",{className:"checkoutProduct__rating"},Array(l).fill().map((function(e){return c.a.createElement("p",null,c.a.createElement(k.a,null))}))),c.a.createElement("button",{onClick:function(){m({type:"REMOVE_FROM_BASKET",id:t})}},"Remove From Basket")))}),S=a(29),w=a.n(S),A=(a(81),a(36)),C=a(20),x=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},B=function(e,t){switch(t.type){case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:t.user});case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(A.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=Object(A.a)(e.basket),n=e.basket.findIndex((function(e){return e.id===t.id}));return n>=0?a.splice(n,1):console.warn("Can't remove product (id: ".concat(t.id,") as its own ")),Object(C.a)(Object(C.a)({},e),{},{basket:a});default:return e}},T=function(){var e=Object(s.f)(),t=_(),a=Object(i.a)(t,2),n=a[0].basket;a[1];return c.a.createElement("div",{className:"subtotal"},c.a.createElement(w.a,{renderText:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Subtotal (",n.length," items): ",c.a.createElement("strong",null,e)),c.a.createElement("small",{className:"subtotal__gift"},c.a.createElement("input",{type:"checkbox"})," This order contains"))},decimalScale:2,value:x(n),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{onClick:function(t){return e.push("/payment")}},"Procced to Checkout "))},P=function(){var e=_(),t=Object(i.a)(e,2),a=t[0],n=a.basket,r=a.user;t[1];return c.a.createElement("div",{className:"checkout"},c.a.createElement("div",{className:"checkout__left"},c.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:"Add Image",className:"checkout__ad"}),0===(null===n||void 0===n?void 0:n.length)?c.a.createElement("div",null,c.a.createElement("h2",null,null===r||void 0===r?void 0:r.email,"  Your Shopping Basket Empty"),c.a.createElement("p",null,' You have no items in your basket. To buy one or more items, click "Add to basket" next to the item')):c.a.createElement("div",null,c.a.createElement("h2",null,"User Email: ",null===r||void 0===r?void 0:r.email),c.a.createElement("h2",{className:"checkout__title"},"Your Shopping Basket"),n.map((function(e){return c.a.createElement(j,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),n.length>0&&c.a.createElement("div",{className:"checkout__right"},c.a.createElement(T,null)))},I=a(22),H=a.n(I),M=a(35),D=(a(83),a(19)),z=a(50),L=a.n(z).a.create({baseURL:"..."}),R=function(){var e=_(),t=Object(i.a)(e,2),a=t[0],r=a.basket,l=a.user,m=(t[1],Object(s.f)()),u=Object(n.useState)(),d=Object(i.a)(u,2),p=d[0],E=d[1],h=Object(n.useState)(!1),g=Object(i.a)(h,2),v=g[0],b=g[1],f=Object(n.useState)(null),N=Object(i.a)(f,2),k=N[0],O=N[1],y=Object(n.useState)(!0),S=Object(i.a)(y,2),A=S[0],C=S[1],B=Object(n.useState)(!0),T=Object(i.a)(B,2),P=T[0],I=T[1],z=Object(D.useStripe)(),R=Object(D.useElements)();Object(n.useEffect)((function(){(function(){var e=Object(M.a)(H.a.mark((function e(){var t;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"post",url:"/payments/create?total=?{getBasketTotal(basket) * 100}"});case 2:t=e.sent,I(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]);var F=function(){var e=Object(M.a)(H.a.mark((function e(t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),e.next=4,z.confirmCardPayment(P,{payment_method:{card:R.getElement(D.CardElement)}}).then((function(e){b(!0),O(null),E(!1),m.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"payment"},c.a.createElement("div",{className:"payment__container"},c.a.createElement("h1",null,"Checkout (",c.a.createElement(o.b,{to:"/checkout"},null===r||void 0===r?void 0:r.length," items"),")"),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Delivery Address")),c.a.createElement("div",{className:"payment__address"},c.a.createElement("p",null,null===l||void 0===l?void 0:l.email),c.a.createElement("p",null,"786 React Lane"),c.a.createElement("p",null,"Savar, Dhaka, Bangladesh-1200"))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Review Items and Delivery")),c.a.createElement("div",{className:"payment__items"},r.map((function(e){return c.a.createElement(j,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})})))),c.a.createElement("div",{className:"payment__section"},c.a.createElement("div",{className:"payment__title"},c.a.createElement("h3",null,"Payment Method")),c.a.createElement("div",{className:"payment__details"},c.a.createElement("form",{onSubmit:F},c.a.createElement(D.CardElement,{onChange:function(e){C(e.empty),O(e.error?e.error.message:"")}}),c.a.createElement("div",{className:"payment__priceContainer"},c.a.createElement(w.a,{renderText:function(e){return c.a.createElement("h3",null,"Order Total: ",e)},decimalScale:2,value:x(r),displayType:"text",thousandSeparator:!0,prefix:"$"}),c.a.createElement("button",{disabled:p||A||v},c.a.createElement("span",null,p?c.a.createElement("p",null,"Processing"):"Buy Now"))),k&&c.a.createElement("div",null,k)))))))},F=(a(100),function(){var e=Object(s.f)(),t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],l=a[1],m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],p=u[1];return c.a.createElement("div",{className:"login"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",alt:"Login Page Logo"})),c.a.createElement("div",{className:"login__container"},c.a.createElement("h1",null,"Sign In"),c.a.createElement("form",{action:""},c.a.createElement("h5",null,"Email"),c.a.createElement("input",{value:r,onChange:function(e){return l(e.target.value)},type:"email",name:"email",id:""}),c.a.createElement("h5",null,"Password"),c.a.createElement("input",{value:d,onChange:function(e){return p(e.target.value)},type:"password",name:"password",id:""}),c.a.createElement("button",{onClick:function(t){t.preventDefault(),b.signInWithEmailAndPassword(r,d).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton"},"Sign In"),c.a.createElement("p",null,"By signing-in you are agree to Amazon's Conditions of Use & Sale. Please Notice, our Cookies Notices and our Interest-Based Ads Notice."),c.a.createElement("button",{onClick:function(t){t.preventDefault(),b.createUserWithEmailAndPassword(r,d).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton"},"Create your Amazon Account"))))}),K=a(51),U=Object(K.a)("pk_test_51HV61WAFwfxKmvAM5R36izcHAE9pKe3PVSwgir3pcWshZJ4GvD7UDVKjmWbbL9a6cLTV62bAEX5ZL1yg8gDvjQjF00zMyMXxz4");var W=function(){var e=_(),t=Object(i.a)(e,2),a=(t[0].user,t[1]);return Object(n.useEffect)((function(){var e=b.onAuthStateChanged((function(e){a(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/checkout"},c.a.createElement(f,null),c.a.createElement(P,null)),c.a.createElement(s.a,{path:"/payment"},c.a.createElement(f,null),c.a.createElement(D.Elements,{stripe:U},c.a.createElement(R,null))),c.a.createElement(s.a,{path:"/login"},c.a.createElement(F,null)),c.a.createElement(s.a,{path:"/"},c.a.createElement(f,null),c.a.createElement(y,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,{initialState:{basket:[],user:null},reducer:B},c.a.createElement(W,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t,a){e.exports=a(102)},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){},83:function(e,t,a){}},[[53,1,2]]]);
//# sourceMappingURL=main.c6b4ee1f.chunk.js.map