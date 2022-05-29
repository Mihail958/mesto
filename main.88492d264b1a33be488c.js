!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"resetValidation",(function(){o._disableSubmitButton(),o._inputList.forEach((function(e){o._hideInpuyError(e)}))})),t(this,"_showImputError",(function(e,t){var n=o._settings,r=n.inputErrorClass,i=n.errorvisibleClass,a=o._form.querySelector("#error-".concat(e.id));console.log(a),e.classList.add(r),a.textContent=t,a.classList.add(i)})),t(this,"_hideInpuyError",(function(e){var t=o._settings,n=t.inputErrorClass,r=t.errorvisibleClass,i=o._form.querySelector("#error-".concat(e.id));e.classList.remove(n),i.classList.remove(r),i.textContent=""})),t(this,"_checkInputValidity",(function(e){e.validity.valid?o._hideInpuyError(e):o._showImputError(e,e.validationMessage)})),t(this,"_hasInvalidInput",(function(){return o._inputList.some((function(e){return!e.validity.valid}))})),t(this,"_disableSubmitButton",(function(){var e=o._settings.inactiveButtonClass;o._buttonElement.classList.add(e),o._buttonElement.disabled=!0})),t(this,"_enableSubmitButton",(function(){var e=o._settings.inactiveButtonClass;o._buttonElement.classList.remove(e),o._buttonElement.disabled=!1})),t(this,"_toggleButtonState",(function(){o._hasInvalidInput()?o._disableSubmitButton():o._enableSubmitButton()})),this._form=r,this._settings=e,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._form.querySelector(this._settings.submitButtonSelector)}var r,o;return r=n,(o=[{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}(),r={formSelector:".popup__form",inputSelector:".popup__input",errorSelector:".popup__error",inputErrorClass:"popup__input_type_error",errorvisibleClass:"popup__error_visible",inactiveButtonClass:"popup__button_disabled",submitButtonSelector:".popup__button"};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r,o,i){var a=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._alt=t.name,this._likes=t.likes,this._id=t._id,this._userId=t.userId,this._ownerId=t.ownerId,this._cardsTemplate=n,this._handleCardClick=a,this._handleDeleteClick=o,this._handleLikeClick=i}var t,n;return t=e,n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardsTemplate).content.querySelector(".element").cloneNode(!0)}},{key:"isLiked",value:function(){var e=this,t=this._likes.find((function(t){return t._id===e._userId}));return t}},{key:"setLikes",value:function(e){this._likes=e,this._likeNumber.textContent=this._likes.length,this.isLiked()?this._addLikeCard():this._removeLikeCard()}},{key:"_addLikeCard",value:function(){this._buttonLike.classList.add("element__like_active")}},{key:"_removeLikeCard",value:function(){this._buttonLike.classList.remove("element__like_active")}},{key:"generateCard",value:function(){return this._card=this._getTemplate(),this._setEventListeners(),this._card.querySelector(".element__card-header").textContent=this._name,this._cardImage.src=this._link,this._cardImage.alt=this._name,this.setLikes(this._likes),this._ownerId!==this._userId&&(this._card.querySelector(".elements__button-delete").style.display="none"),this._card}},{key:"deleteCard",value:function(){this._card.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._buttonLike=this._card.querySelector(".element__like"),this._buttonDelete=this._card.querySelector(".elements__button-delete"),this._likeNumber=this._card.querySelector(".element__like-number"),this._cardImage=this._card.querySelector(".element__img"),this._buttonDelete.addEventListener("click",(function(){e._handleDeleteClick(e._id)})),this._buttonLike.addEventListener("click",(function(){e._handleLikeClick(e._id)})),this._cardImage.addEventListener("click",this._handleCardClick)}}],n&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._initialCards=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),s(this,"_closePopupByClickOverlay",(function(e){e.target.classList.contains("popup")&&n.close()})),this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_visible"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._closePopupByClickOverlay)}},{key:"close",value:function(){this._popup.classList.remove("popup_visible"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._closePopupByClickOverlay)}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__closed").addEventListener("click",(function(){e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function y(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=b(r);if(o){var n=b(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__open-image"),t._name=t._popup.querySelector(".popup__image-caption"),t}return t=a,(n=[{key:"open",value:function(e,t){h(b(a.prototype),"open",this).call(this),this._image.src=e,this._image.alt=t,this._name.textContent=t}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(){return g="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},g.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function E(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function a(e,t){var n,r,o,c,u=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c=function(){return n._formValues={},n._inputs.forEach((function(e){return n._formValues[e.name]=e.value})),n._formValues},(o="_getInputValues")in(r=O(n=i.call(this,e)))?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._handleFormSubmit=u,n._form=n._popup.querySelector(".popup__form"),n._inputs=n._form.querySelectorAll(".popup__input"),n._buttonsSave=n._form.querySelector(".popup__save-button"),n}return t=a,(n=[{key:"changeSubmitHandler",value:function(e){this._handleFormSubmit=e}},{key:"close",value:function(){g(L(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._buttonsSave.textContent=e?"Сохранение...":"Сохранить"}},{key:"setEventListeners",value:function(){var e=this;g(L(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(){return I="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},I.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function q(e,t){return q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},q(e,t)}function T(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"setFormSubmitHandler",value:function(e){this._handleFormSubmit=e}},{key:"setEventListeners",value:function(){var e=this;I(B(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit()}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){var n=t.nameInputSelector,r=t.jobInputSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._job=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._job.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._name.textContent=e,this._job.textContent=t,this._avatar.src="".concat(n)}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_checkReponse",value:function(e){return e.ok?e.json():Promise.reject(e.status)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkReponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkReponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkReponse)}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkReponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkReponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkReponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkReponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkReponse)}}])&&V(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-41",headers:{authorization:"bd9d59c4-e0ff-4259-a84f-b978a98d9164","Content-Type":"application/json"}});function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var N,H=document.querySelector(".popup_type_profile-edit").querySelector(".popup__container").querySelector(".popup__form"),J=H.querySelector(".popup__input_type_name"),M=H.querySelector(".popup__input_type_profession"),z=document.querySelector(".profile__avatar-change"),$=document.querySelector(".profile__button-add"),G=document.querySelector(".profile__button-edit"),K=document.querySelector(".popup_type_change-avatar"),Q=document.querySelector(".popup__form_type_edit"),W=document.querySelector(".popup__form_type_add-card");Promise.all([A.getProfile(),A.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];ne.setUserInfo(o.name,o.about,o.avatar),N=o._id,i.forEach((function(e){ie(e,0,ee)}))})).catch(console.log);var X=new n(r,Q),Y=new n(r,W),Z=new n(r,K);Y.enableValidation(),X.enableValidation(),Z.enableValidation();var ee=new c({items:[],renderer:function(e){ie(e,0,ee)}},".elements"),te=new C(".popup_type_add-cards",{handleFormSubmit:function(e){te.renderLoading(!0),A.addNewCard(e.nameplace,e.photolink).then((function(e){ie(e,0,ee),te.close()})).catch(console.log).finally((function(){te.renderLoading(!1)}))}}),ne=new D({nameInputSelector:".profile__name",jobInputSelector:".profile__profession",avatarSelector:".profile__avatar"}),re=new C(".popup_type_profile-edit",{handleFormSubmit:function(e){re.renderLoading(!0),A.editProfile(e.name,e.job).then((function(e){ne.setUserInfo(e.name,e.about,e.avatar),re.close()})).catch(console.log).finally((function(){re.renderLoading(!1)}))}}),oe=new C(".popup_type_change-avatar",{handleFormSubmit:function(e){oe.renderLoading(!0),A.changeAvatar(e.avatar).then((function(e){ne.setUserInfo(e.name,e.about,e.avatar),oe.close()})).catch(console.log).finally((function(){oe.renderLoading(!1)}))}});function ie(e,t,n){var r=new i({name:e.name,link:e.link,likes:e.likes,_id:e._id,userId:N,ownerId:e.owner._id},".card-template",{handleCardClick:function(){return ae.open(e.link,e.name)}},(function(e){ce.open(),ce.setFormSubmitHandler((function(){console.log(e),A.deleteCard(e).then((function(e){console.log("res",e),r.deleteCard(),ce.close()})).catch(console.log)}))}),(function(e){r.isLiked()?A.deleteLike(e).then((function(e){r.setLikes(e.likes)})).catch(console.log):A.putLike(e).then((function(e){r.setLikes(e.likes)})).catch(console.log)})),o=r.generateCard();n.addItem(o)}var ae=new v(".popup_type_image"),ce=new U(".popup_type_confirmation");re.setEventListeners(),ae.setEventListeners(),te.setEventListeners(),oe.setEventListeners(),ce.setEventListeners(),z.addEventListener("click",(function(){Z.resetValidation(),oe.open()})),$.addEventListener("click",(function(){te.open(),Y.resetValidation()})),G.addEventListener("click",(function(){re.open();var e=ne.getUserInfo();J.value=e.name,M.value=e.about}))}();