function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=r.parcelRequireb7cd;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},r.parcelRequireb7cd=o),o.register("27Lyk",function(t,r){e(t.exports,"register",()=>n,e=>n=e),e(t.exports,"resolve",()=>a,e=>a=e);var n,a,o={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)o[t[r]]=e[t[r]]},a=function(e){var t=o[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),o("27Lyk").register(JSON.parse('{"f9fpV":"index.3e70264a.js","9oAJN":"sprite.d008d379.svg"}'));/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,a=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var i,c,s=Object.create((r&&r.prototype instanceof m?r:m).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
a(s,"_invoke",{value:(i=new j(o||[]),c=f,function(r,a){if(c===h)throw Error("Generator is already running");if(c===g){if("throw"===r)throw a;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return M()}for(i.method=r,i.arg=a;;){var o=i.delegate;if(o){var s=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function e(r,n){var a=n.method,o=r.iterator[a];if(t===o)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===a&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==a&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+a+"' method")),p);var i=d(o,r.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var c=i.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,p):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,p)}(o,i);if(s){if(s===p)continue;return s}}if("next"===i.method)// function.sent implementation.
i.sent=i._sent=i.arg;else if("throw"===i.method){if(c===f)throw c=g,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);c=h;var u=d(e,n,i);if("normal"===u.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=i.done?g:"suspendedYield",u.arg===p)continue;return{value:u.arg,done:i.done}}"throw"===u.type&&(c=g,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
i.method="throw",i.arg=u.arg)}})}),s)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",h="executing",g="completed",p={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function m(){}function y(){}function v(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var w={};u(w,i,function(){return this});var _=Object.getPrototypeOf,b=_&&_(_(O([])));b&&b!==r&&n.call(b,i)&&// of the polyfill.
(w=b);var E=v.prototype=m.prototype=Object.create(w);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function L(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
a(this,"_invoke",{value:function(a,o){function i(){return new t(function(r,i){!function r(a,o,i,c){var s=d(e[a],e,o);if("throw"===s.type)c(s.arg);else{var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(l).then(function(e){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
u.value=e,i(u)},function(e){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",e,i,c)})}}(a,o,r,i)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(i,// invocations of the iterator.
i):i()}})}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function O(e){if(e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}// Return an iterator with no values.
return{next:M}}function M(){return{value:t,done:!0}}// Regardless of whether this script is executing as a CommonJS module
// or not, return the runtime object so that we can declare the variable
// regeneratorRuntime in the outer scope, which allows this module to be
// injected easily by `bin/regenerator --include-runtime script.js`.
return y.prototype=v,a(E,"constructor",{value:v,configurable:!0}),a(v,"constructor",{value:y,configurable:!0}),y.displayName=u(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,s,"GeneratorFunction")),e.prototype=Object.create(E),e},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
e.awrap=function(e){return{__await:e}},L(x.prototype),u(x.prototype,c,function(){return this}),e.AsyncIterator=x,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new x(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i// If outerFn is a generator, return the full iterator.
:i.next().then(function(e){return e.done?e.value:i.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
L(E),u(E,s,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
u(E,i,function(){return this}),u(E,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
e.done=!0,e)}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return c.type="throw",c.arg=e,r.next=n,a&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return a("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else if(u){if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&// location outside the try/catch block.
(o=null);var i=o?o.completion:{};return(i.type=e,i.arg=t,o)?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=t),p}},e}({});try{regeneratorRuntime=i}catch(e){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}const c="https://api.giphy.com/v1/gifs/",s="api_key=qANODRlaZcrZr25RYKCLbpAG61Znj0dK",u=async function(e){try{let t=fetch(e),r=await Promise.race([t,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 15 second"))},15e3)})]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}},l={randomImage:{},finder:{query:"",results:[],page:1,resultsPerPage:20},trending:[]},d=function(e){if(e&&0!==Object.keys(e.images.downsized).length)return{id:e.id,url:e.url,imageOriginal:e.images.original,imageDownsized:e.images.downsized}},f=async function(){try{let e=await u(`${c}random?${s}`);l.randomImage=d(e.data)}catch(e){throw e}},h=async function(e="bucks"){try{let t=await u(`${c}search?${s}&q=${e}`);if(0===t.data.length)throw Error("No results");l.finder.page=1,l.finder.query=e,l.finder.results=[],t.data.forEach(e=>l.finder.results.push(d(e)))}catch(e){throw e}},g=async function(){try{let e=await u(`${c}trending?${s}&limit=10`);e.data.forEach(e=>l.trending.push(d(e)))}catch(e){throw e}},p=function(e=l.finder.page){l.finder.page=e;let t=(e-1)*l.finder.resultsPerPage,r=e*l.finder.resultsPerPage;//0;
return l.finder.results.slice(t,r)};var m={};m=new URL(o("27Lyk").resolve("9oAJN"),import.meta.url).toString();class y{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
      <div class="loading"></div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let r=`
        <div class="error">
            <div>
            <svg>
                <use href="src/img/${/*@__PURE__*/t(m)}#icon-alert-triangle"></use>
            </svg>
            </div>
            <p>${e}</p>
        </div>
    `;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}}class v extends y{_inputForm=document.querySelector(".finder-form");_parentElement=document.querySelector(".finder-images");_errorMessage="There was an error loading your images...";addHandlerForm(e){this._inputForm.addEventListener("submit",function(t){t.preventDefault();let r=t.target.children[0].value;r&&e(r)})}_generateMarkup(){let e="";return this._data.forEach(t=>{t&&(e+=`<a target="_blank" href="${t.imageDownsized.url}"><img
        src="${t.imageDownsized.url}"
        alt="Trending Image"
        /></a>
        `)}),e}}var w=new v;class _ extends y{_parentElement=document.querySelector(".random-image--container");_nextImageElement=document.querySelector(".random-image--btn");_errorMessage="There was an error loading your image...";addHandlerNextImage(e){this._nextImageElement.addEventListener("click",function(t){e()})}_generateMarkup(){return`
      <img
        src="${this._data.imageDownsized.url}"
        alt="Random Image"
        width="250px"
        height="250px"
      />
    `}}var b=new _;class E extends y{_parentElement=document.querySelector(".trending-images");_errorMessage="There was an error loading your images...";_generateMarkup(){let e="";return this._data.forEach(t=>{e+=`<img
        src="${t.imageDownsized.url}"
        alt="Trending Image"
        />
        `}),e}}var L=new E;class x extends y{_parentElement=document.querySelector(".pagination");_message="";addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".pagination__btn");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);return(//Page 1 and there are other pages
1===e&&t>1?this._generateMarkupButton("next",e):e===t&&t>1?this._generateMarkupButton("prev",e):e<t?this._generateMarkupButton("prev",e)+this._generateMarkupButton("next",e):"")}_generateMarkupButton(e,r){return`
        <button data-goto="${"prev"===e?r-1:r+1}" class="pagination__btn pagination__${e}">
            <svg class="pagination__icon">
            <use href="${/*@__PURE__*/t(m)}#icon-arrow-${"prev"===e?"left":"right"}"></use>
            </svg>
        </button>
    `}}var k=new x;new class{constructor(){let e=document.querySelector(".navbar"),t=document.querySelectorAll(".navbar--item"),r=[document.querySelector(".random"),document.querySelector(".finder"),document.querySelector(".trending")];e.addEventListener("click",function(e){let n=e.target.closest(".navbar--item");if(!n)return;t.forEach(e=>e.classList.remove("navbar--item-active")),r.forEach(e=>e.classList.remove("active")),n.classList.add("navbar--item-active");let a=document.querySelector(`.${n.dataset.tab}`);a.classList.add("active")})}};const S=document.querySelector(".random-image"),j=async function(){try{b.renderSpinner(S),await f(),b.render(l.randomImage)}catch(e){b.renderError()}},O=async function(){try{L.renderSpinner(),await g(),L.render(l.trending)}catch(e){L.renderError()}},M=async function(e){try{w.renderSpinner(),await h(e),w.render(p()),k.render(l.finder)}catch(e){w.renderError()}},T=function(e){w.render(p(e)),k.render(l.finder)},q=async function(){j(),O(),b.addHandlerNextImage(j),w.addHandlerForm(M),k.addHandlerClick(T)};q();//# sourceMappingURL=index.3e70264a.js.map

//# sourceMappingURL=index.3e70264a.js.map
