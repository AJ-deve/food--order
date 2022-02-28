(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__1d8Fi",summary:"CartItem_summary__2CYeo",price:"CartItem_price__3-E5j",amount:"CartItem_amount__1N4k_",actions:"CartItem_actions__r4wfl"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3PzuK",total:"Cart_total__35cpG",actions:"Cart_actions__2xrdB","button--alt":"Cart_button--alt__2-V4B",button:"Cart_button__3isNG"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__17Ygt",icon:"HeaderCartButton_icon__3bZwR",badge:"HeaderCartButton_badge__2enPR",bump:"HeaderCartButton_bump__39lvr"}},,function(e,t,n){e.exports={meal:"MealItem_meal__3D9-N",description:"MealItem_description__1ZUzP",price:"MealItem_price__1sOBh"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__1wsR7",modal:"Modal_modal__VrA7z","slide-down":"Modal_slide-down__ZwU_J"}},,function(e,t,n){e.exports={header:"Header_header__MFyG-","main-image":"Header_main-image__2J1cG"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__3-UJ2"}},function(e,t,n){e.exports={card:"Card_card__24bUy"}},function(e,t,n){e.exports={input:"Input_input__oAuux"}},function(e,t,n){e.exports={form:"MealItemForm_form__2rsoT"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1cTS5","meals-appear":"AvailableMeals_meals-appear__3HTnj"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(6),c=n.n(a),i=(n(24),n(3)),r=n(1),s=n.n(r),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=s.a.createContext({item:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),d=n(8),m=n.n(d),j=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useContext)(u).items,d=s.reduce((function(e,t){return e+t.amount}),0),j="".concat(m.a.button," ").concat(a?m.a.bump:"");return Object(r.useEffect)((function(){if(0!==s.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s]),Object(o.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(o.jsx)("span",{className:m.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:m.a.badge,children:d})]})},b=n.p+"static/media/meals.56b89681.jpg",x=n(13),O=n.n(x),p=function(e){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsxs)("header",{className:O.a.header,children:[Object(o.jsx)("h1",{children:"ReactMeals"}),Object(o.jsx)(j,{onClick:e.onClick})]}),Object(o.jsx)("div",{className:O.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},h=n(15),_=n.n(h),f=function(){return Object(o.jsxs)("section",{className:_.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(16),C=n.n(v),g=function(e){return Object(o.jsx)("div",{className:C.a.card,children:e.children})},N=n(2),A=n(17),y=n.n(A),I=s.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:y.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(N.a)({ref:t},e.input))]})})),w=n(18),M=n.n(w),k=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],s=Object(r.useRef)();return Object(o.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(I,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},B=n(10),H=n.n(B),F=function(e){var t=Object(r.useContext)(u),n="$".concat(e.price);return Object(o.jsxs)("li",{className:H.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:H.a.description,children:e.description}),Object(o.jsx)("div",{className:H.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(k,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},R=n(19),T=n.n(R),D=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],E=function(){var e=D.map((function(e){return Object(o.jsx)(F,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:T.a.meals,children:Object(o.jsx)(g,{children:Object(o.jsx)("ul",{children:e})})})},S=function(){return Object(o.jsxs)(r.Fragment,{children:[Object(o.jsx)(f,{}),Object(o.jsx)(E,{})]})},z=n(11),P=n.n(z),G=function(e){return Object(o.jsx)("div",{className:P.a.backdrop,onClick:e.onClose})},J=function(e){return Object(o.jsx)("div",{className:P.a.modal,children:Object(o.jsx)("div",{className:P.a.content,children:e.children})})},V=document.getElementById("overlays"),U=function(e){return Object(o.jsxs)(r.Fragment,{children:[c.a.createPortal(Object(o.jsx)(G,{onClose:e.onClose}),V),c.a.createPortal(Object(o.jsx)(J,{children:e.children}),V)]})},Y=n(4),Z=n.n(Y),$=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:Z.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:Z.a.summary,children:[Object(o.jsx)("span",{className:Z.a.price,children:t}),Object(o.jsxs)("span",{className:Z.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:Z.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},q=n(5),K=n.n(q),L=function(e){var t=Object(r.useContext)(u),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(N.a)(Object(N.a)({},e),{},{amount:1}))},s=Object(o.jsx)("ul",{className:K.a["cart-items"],children:t.items.map((function(e){return Object(o.jsx)($,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(o.jsxs)(U,{onClose:e.onClose,children:[s,Object(o.jsxs)("div",{className:K.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:n})]}),Object(o.jsxs)("div",{className:K.a.actions,children:[Object(o.jsx)("button",{className:K.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(o.jsx)("button",{className:K.a.button,children:"Order"})]})]})},Q=n(14),W={items:[],totalAmount:0},X=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(N.a)(Object(N.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Q.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(N.a)(Object(N.a)({},l),{},{amount:l.amount-1});(s=Object(Q.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return W},ee=function(e){var t=Object(r.useReducer)(X,W),n=Object(i.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(o.jsx)(u.Provider,{value:s,children:e.children})};var te=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(ee,{children:[n&&Object(o.jsx)(L,{onClose:function(){a(!1)}}),Object(o.jsx)(p,{onClick:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(S,{})})]})};c.a.render(Object(o.jsx)(te,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.a27786ac.chunk.js.map