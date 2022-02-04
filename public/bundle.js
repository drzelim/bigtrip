/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return+(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t)}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},m.$utils=function(){return O},m.isValid=function(){return!(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||$;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=O.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,f=n.months,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=n.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(n.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(n.weekdaysMin,this.$W,o,2),ddd:h(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:i};return r.replace(y,(function(t,e){return e||l[t]||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));

/***/ }),

/***/ "./node_modules/dayjs/plugin/duration.js":
/*!***********************************************!*\
  !*** ./node_modules/dayjs/plugin/duration.js ***!
  \***********************************************/
/***/ (function(module) {

!function(t,s){ true?module.exports=s():0}(this,(function(){"use strict";var t,s,n=1e3,i=6e4,e=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,h=2592e6,a=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,d={years:u,months:h,days:r,hours:e,minutes:i,seconds:n,milliseconds:1,weeks:6048e5},c=function(t){return t instanceof p},f=function(t,s,n){return new p(t,n,s.$l)},m=function(t){return s.p(t)+"s"},l=function(t){return t<0},$=function(t){return l(t)?Math.ceil(t):Math.floor(t)},y=function(t){return Math.abs(t)},g=function(t,s){return t?l(t)?{negative:!0,format:""+y(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}},p=function(){function l(t,s,n){var i=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),s)return f(t*d[m(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(s){i.$d[m(s)]=t[s]})),this.calMilliseconds(),this;if("string"==typeof t){var e=t.match(a);if(e){var r=e.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var y=l.prototype;return y.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,n){return s+(t.$d[n]||0)*d[n]}),0)},y.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=$(t/u),t%=u,this.$d.months=$(t/h),t%=h,this.$d.days=$(t/r),t%=r,this.$d.hours=$(t/e),t%=e,this.$d.minutes=$(t/i),t%=i,this.$d.seconds=$(t/n),t%=n,this.$d.milliseconds=t},y.toISOString=function(){var t=g(this.$d.years,"Y"),s=g(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var i=g(n,"D"),e=g(this.$d.hours,"H"),r=g(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=g(o,"S"),h=t.negative||s.negative||i.negative||e.negative||r.negative||u.negative,a=e.format||r.format||u.format?"T":"",d=(h?"-":"")+"P"+t.format+s.format+i.format+a+e.format+r.format+u.format;return"P"===d||"-P"===d?"P0D":d},y.toJSON=function(){return this.toISOString()},y.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,s){return s||String(i[t])}))},y.as=function(t){return this.$ms/d[m(t)]},y.get=function(t){var s=this.$ms,n=m(t);return"milliseconds"===n?s%=1e3:s="weeks"===n?$(s/d[n]):this.$d[n],0===s?0:s},y.add=function(t,s,n){var i;return i=s?t*d[m(s)]:c(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(n?-1:1),this)},y.subtract=function(t,s){return this.add(t,s,!0)},y.locale=function(t){var s=this.clone();return s.$l=t,s},y.clone=function(){return f(this.$ms,this)},y.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},y.milliseconds=function(){return this.get("milliseconds")},y.asMilliseconds=function(){return this.as("milliseconds")},y.seconds=function(){return this.get("seconds")},y.asSeconds=function(){return this.as("seconds")},y.minutes=function(){return this.get("minutes")},y.asMinutes=function(){return this.as("minutes")},y.hours=function(){return this.get("hours")},y.asHours=function(){return this.as("hours")},y.days=function(){return this.get("days")},y.asDays=function(){return this.as("days")},y.weeks=function(){return this.get("weeks")},y.asWeeks=function(){return this.as("weeks")},y.months=function(){return this.get("months")},y.asMonths=function(){return this.as("months")},y.years=function(){return this.get("years")},y.asYears=function(){return this.as("years")},l}();return function(n,i,e){t=e,s=e().$utils(),e.duration=function(t,s){var n=e.locale();return f(t,{$l:n},s)},e.isDuration=c;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,s){return c(t)&&(t=t.asMilliseconds()),r.bind(this)(t,s)},i.prototype.subtract=function(t,s){return c(t)&&(t=t.asMilliseconds()),o.bind(this)(t,s)}}}));

/***/ }),

/***/ "./src/mock/random-generator.js":
/*!**************************************!*\
  !*** ./src/mock/random-generator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "getRandomArrayElement": () => (/* binding */ getRandomArrayElement),
/* harmony export */   "getRandomArrayLength": () => (/* binding */ getRandomArrayLength)
/* harmony export */ });
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomArrayElement = (arr) => arr[getRandomInt(0, arr.length - 1)];

const getRandomArrayLength = (arr, min = 0, max = arr.length - 1) => arr.slice(0, getRandomInt(min, max));


/***/ }),

/***/ "./src/mock/random-point.js":
/*!**********************************!*\
  !*** ./src/mock/random-point.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offers": () => (/* binding */ offers),
/* harmony export */   "getRandomPoints": () => (/* binding */ getRandomPoints)
/* harmony export */ });
/* harmony import */ var _random_generator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random-generator.js */ "./src/mock/random-generator.js");


const pointType = [
  'Taxi',
  'Bus',
  'Train',
  'Ship',
  'Transport',
  'Drive',
  'Flight',
  'CheckIn',
  'Sightseeing',
  'Restaurant'
];

const cities = [
  'Moscow',
  'Sunja',
  'London',
  'New-York',
  'Amsterdam',
  'Paris',
  'Madrid'
];

const offers = [
  {id: 1, text: 'Order Uber', price: 20, type: (0,_random_generator_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(pointType)},
  {id: 2, text: 'Add luggage', price: 50},
  {id: 3, text: 'Switch to comfort', price: 80},
  {id: 4, text: 'Rent a car', price: 200},
  {id: 5, text: 'Add breakfast', price: 50},
  {id: 6, text: 'Lunch in city', price: 30},
  {id: 7, text: 'Book tickets', price: 40},
];

const decriptions = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.'
];

const startTime = [
  '2022-02-02T17:36:32.554Z',
  '2021-12-29T11:44:32.554Z',
  '2022-01-04T01:01:32.554Z',
  '2022-01-10T22:24:32.554Z',
  '2022-01-12T22:20:32.554Z',
  '2022-01-01T22:20:32.554Z',
  '2021-11-30T17:36:32.554Z',
  '2021-07-30T17:36:32.554Z',
  '2022-01-14T14:20:32.554Z'
];

const endTime = [
  '2022-02-02T18:46:32.554Z',
  '2021-12-29T12:44:32.554Z',
  '2022-01-04T02:01:32.554Z',
  '2022-01-10T22:54:32.554Z',
  '2022-01-12T22:20:32.554Z',
  '2022-01-01T22:55:32.554Z',
  '2021-11-30T19:20:32.554Z',
  '2021-07-30T18:15:32.554Z',
  '2022-02-16T16:20:32.554Z'
];

const getRandomPoint = () => {
  const randomIndex = (0,_random_generator_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, startTime.length - 1);
  return ({
    basePrice: (0,_random_generator_js__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(5, 20) * 10,
    type: (0,_random_generator_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(pointType),
    city: (0,_random_generator_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayElement)(cities),
    offers: (0,_random_generator_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayLength)(offers, 0, 4).map((item) => item.id),
    place: {
      decription: (0,_random_generator_js__WEBPACK_IMPORTED_MODULE_0__.getRandomArrayLength)(decriptions, 0, decriptions.length - 1),
      photo: `http://picsum.photos/248/152?r=${Math.random()}`
    },
    startTime: startTime[randomIndex],
    endTime: endTime[randomIndex],
    isFavorite: Math.random() > 0.5,
  });
};

const getRandomPoints = ((amount) => {
  const points = [];
  for(let i = 0; i < amount; i++) {
    points.push(getRandomPoint());
  }
  return points;
});


/***/ }),

/***/ "./src/utils/render.js":
/*!*****************************!*\
  !*** ./src/utils/render.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RenderPosition": () => (/* binding */ RenderPosition),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "createElement": () => (/* binding */ createElement)
/* harmony export */ });
const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND:  'beforeend'
};

const render = (container, element, place = RenderPosition.BEFOREEND) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
};


/***/ }),

/***/ "./src/view/abstarct.js":
/*!******************************!*\
  !*** ./src/view/abstarct.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Abstract)
/* harmony export */ });
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/render.js */ "./src/utils/render.js");


class Abstract {
  constructor() {
    if (new.target === Abstract) {
      throw new Error('Can\'t instantiate AbstractComponent, only cocrete one.');
    }

    this._element = null;
  }

  getTemplate() {
    throw new Error('Abstarct nethod not implemented: getTemplate');
  }

  getElement() {
    if (!this._element) {
      this._element = (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }

}


/***/ }),

/***/ "./src/view/edit-point.js":
/*!********************************!*\
  !*** ./src/view/edit-point.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditPoint)
/* harmony export */ });
/* harmony import */ var _abstarct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstarct */ "./src/view/abstarct.js");


const getOffers = (point, offers) => {
  const arr = [];
  point.offers.forEach((item) => {
    offers.forEach((offer) => {
      if (item === offer.id) {
        arr.push(offer);
      }
    });
  });
  return arr;
};


const getOfferCheckbox = (offers) => {
  const arr = [];
  offers.forEach((offer) => (
    arr.push (
      `<div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}" type="checkbox" name="event-offer-${offer.id}" checked>
        <label class="event__offer-label" for="event-offer-${offer.id}">
          <span class="event__offer-title">${offer.text}</span>
          &plus;&euro;&nbsp;
          <span class="event__offer-price">${offer.price}</span>
        </label>
      </div>`
    ))
  );
  return arr;
};

const price = (offers) => {
  const sumPrice = offers.reduce((acc, offer) => (acc += offer.price), 0);
  return sumPrice;
};

const createEditPoint = (point, offers) => {
  const fullOffers = getOffers(point, offers);
  return (
    `<form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>

              <div class="event__type-item">
                <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
                <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
              </div>

              <div class="event__type-item">
                <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
              </div>
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            Flight
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${point.city}" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price(fullOffers)}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        <section class="event__section  event__section--offers">
          <h3 class="event__section-title  event__section-title--offers">Offers</h3>

          <div class="event__available-offers">
            ${getOfferCheckbox(fullOffers).join('\n')}
          </div>
        </section>

        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">C${point.place.decription.join(' ')}</p>
        </section>
      </section>
    </form>`
  );
};

class EditPoint extends _abstarct__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(point, offers) {
    super();

    this._point = point;
    this._offers = offers;
  }

  getTemplate() {
    return createEditPoint(this._point, this._offers);
  }
}


/***/ }),

/***/ "./src/view/list-filter.js":
/*!*********************************!*\
  !*** ./src/view/list-filter.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Filter)
/* harmony export */ });
/* harmony import */ var _abstarct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstarct */ "./src/view/abstarct.js");


const createFilter = () => (
  `<form class="trip-filters" action="#" method="get">
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
      <label class="trip-filters__filter-label" for="filter-everything">Everything</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">
      <label class="trip-filters__filter-label" for="filter-future">Future</label>
    </div>

    <div class="trip-filters__filter">
      <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" >
      <label class="trip-filters__filter-label" for="filter-past">Past</label>
    </div>

    <button class="visually-hidden" type="submit">Accept filter</button>
  </form>`
);

class Filter extends _abstarct__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createFilter();
  }
}


/***/ }),

/***/ "./src/view/menu.js":
/*!**************************!*\
  !*** ./src/view/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SiteMenu)
/* harmony export */ });
/* harmony import */ var _abstarct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstarct */ "./src/view/abstarct.js");


const createMenu = () => (
  `<nav class="trip-controls__trip-tabs  trip-tabs">
    <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
    <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`
);

class SiteMenu extends _abstarct__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createMenu();
  }
}


/***/ }),

/***/ "./src/view/no-points.js":
/*!*******************************!*\
  !*** ./src/view/no-points.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoPoints)
/* harmony export */ });
/* harmony import */ var _abstarct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstarct.js */ "./src/view/abstarct.js");


const createNoPoints = () => (`<p class="trip-events__msg">Click New Event to create your first point</p>`);

// Значение отображаемого текста зависит от выбранного фильтра:
//   * Everthing – 'Click New Event to create your first point'
//   * Past — 'There are no past events now';
//   * Future — 'There are no future events now'.

class NoPoints extends _abstarct_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createNoPoints();
  }
}


/***/ }),

/***/ "./src/view/point-list.js":
/*!********************************!*\
  !*** ./src/view/point-list.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PointList)
/* harmony export */ });
/* harmony import */ var _abstarct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstarct.js */ "./src/view/abstarct.js");


const createPointsContainer = () => (
  `<ul class="trip-events__list">
  </ul>`
);

class PointList extends _abstarct_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createPointsContainer();
  }
}


/***/ }),

/***/ "./src/view/points.js":
/*!****************************!*\
  !*** ./src/view/points.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Point)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs/plugin/duration */ "./node_modules/dayjs/plugin/duration.js");
/* harmony import */ var dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _abstarct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstarct */ "./src/view/abstarct.js");



dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_duration__WEBPACK_IMPORTED_MODULE_1___default()));

const getOffersInfo = (point, offers) => {
  const arr = [];
  point.offers.forEach((item) => {
    offers.forEach((i) => {
      if (item === i.id) {
        arr.push(
          `<li class="event__offer">
            <span class="event__offer-title">${i.text}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${i.price}</span>
          </li>`
        );
      }
    });
  });
  return arr;
};

const getEventDuration = (dateFrom, dateTo) => {
  const to = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateTo);
  const from = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(dateFrom);
  const date = to.diff(from, 'minute');
  if (date < 60) {
    return `${dayjs__WEBPACK_IMPORTED_MODULE_0___default().duration(date, 'minute').format('mm')}M`;
  } else if (date >= 60 && date < 60 * 24) {
    return `${dayjs__WEBPACK_IMPORTED_MODULE_0___default().duration(date, 'minute').format('HH')}H ${dayjs__WEBPACK_IMPORTED_MODULE_0___default().duration(date, 'minute').format('mm')}M`;
  } else if (date >=  60 * 24) {
    return `${dayjs__WEBPACK_IMPORTED_MODULE_0___default().duration(date, 'minute').format('DD')}D ${dayjs__WEBPACK_IMPORTED_MODULE_0___default().duration(date, 'minute').format('HH')}H ${dayjs__WEBPACK_IMPORTED_MODULE_0___default().duration(date,  'minute').format('mm')}M`;
  }
};

const createPoint = (point, offers) => {
  const date = dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.startTime).format('MMM D');
  return (
    `<li class="trip-events__item">
      <div class="event">
        <time class="event__date" datetime="2019-03-18">${date}</time>
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${point.type} ${point.city}</h3>
        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.startTime).format('YYYY-MM-DDTHH:mm')}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.startTime).format('HH:mm')}</time>
            &mdash;
            <time class="event__end-time" datetime="${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.endTime).format('YYYY-MM-DDTHH:mm')}">${dayjs__WEBPACK_IMPORTED_MODULE_0___default()(point.endTime).format('HH:mm')}</time>
          </p>
          <p class="event__duration">${getEventDuration(point.startTime, point.endTime)}</p>
        </div>
        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${point.basePrice}</span>
        </p>
        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          ${getOffersInfo(point, offers).join(' ')}
        </ul>
        <button class="event__favorite-btn ${point.isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
          <span class="visually-hidden">Add to favorite</span>
          <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
            <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
          </svg>
        </button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`
  );
};

class Point extends _abstarct__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor(point, offers) {
    super();

    this._point = point;
    this._offers = offers;
  }

  getTemplate() {
    return createPoint(this._point, this._offers);
  }
}


/***/ }),

/***/ "./src/view/sort.js":
/*!**************************!*\
  !*** ./src/view/sort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sort)
/* harmony export */ });
/* harmony import */ var _abstarct_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstarct.js */ "./src/view/abstarct.js");


const createSort = () => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">
      <label class="trip-sort__btn" for="sort-day">Day</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--time">
      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">
      <label class="trip-sort__btn" for="sort-time">Time</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--price">
      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>
      <label class="trip-sort__btn" for="sort-price">Price</label>
    </div>

    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
      <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form>`
);

class Sort extends _abstarct_js__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getTemplate() {
    return createSort();
  }
}


/***/ }),

/***/ "./src/view/trip-cost.js":
/*!*******************************!*\
  !*** ./src/view/trip-cost.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripCost)
/* harmony export */ });
/* harmony import */ var _abstarct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./abstarct */ "./src/view/abstarct.js");


const totalPrice = (points) => points.reduce((acc, point) => (acc += point.basePrice), 0);

const createTripCost = (points) => (
  `<p class="trip-info__cost">
    Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalPrice(points)}</span>
  </p>`
);

class TripCost extends _abstarct__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor (points) {
    super();

    this._points = points;
  }

  getTemplate() {
    return createTripCost(this._points);
  }
}


/***/ }),

/***/ "./src/view/trip-info.js":
/*!*******************************!*\
  !*** ./src/view/trip-info.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TripInfo)
/* harmony export */ });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _abstarct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstarct */ "./src/view/abstarct.js");



const cities = (points) => {
  const arr = points.map((point) => point.city);
  const cityList = Array.from(new Set(arr));
  return cityList;
};

const getStartAndDate = (points) => {
  const startTime = points.map((point) => point.startTime);
  const endTime = points.map((point) => point.endTime);
  startTime.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });

  endTime.sort((a, b) => {
    if (a < b) {
      return 1;
    }
    if (a > b) {
      return -1;
    }
    return 0;
  });
  const startAndEndDate = [startTime[0], endTime[0]];

  return startAndEndDate.map((item) => {
    if (dayjs__WEBPACK_IMPORTED_MODULE_0___default()(startTime[0]).format('YYYY') !==  dayjs__WEBPACK_IMPORTED_MODULE_0___default()(endTime[0]).format('YYYY')) {
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item).format('DD MMM YY');
    }
    return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(item).format('MMM DD');
  });
};


const createTripInfo = (points) => {
  const cityLits = cities(points);
  return (
    `<section class="trip-main__trip-info trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${cityLits.length <= 3 ? cityLits.join(' &mdash; ') : [cityLits[0], cityLits[cityLits.length - 1]].join(' &mdash;...&mdash; ')}</h1>

        <p class="trip-info__dates">${getStartAndDate(points).join('&nbsp;&mdash;&nbsp;')}</p>
      </div>
    </section>`
  );
};

class TripInfo extends _abstarct__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor (points) {
    super();

    this._points = points;
  }

  getTemplate() {
    return createTripInfo(this._points);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_random_point_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock/random-point.js */ "./src/mock/random-point.js");
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/render.js */ "./src/utils/render.js");
/* harmony import */ var _view_edit_point_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/edit-point.js */ "./src/view/edit-point.js");
/* harmony import */ var _view_list_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/list-filter.js */ "./src/view/list-filter.js");
/* harmony import */ var _view_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view/menu.js */ "./src/view/menu.js");
/* harmony import */ var _view_point_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/point-list */ "./src/view/point-list.js");
/* harmony import */ var _view_points_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/points.js */ "./src/view/points.js");
/* harmony import */ var _view_sort_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/sort.js */ "./src/view/sort.js");
/* harmony import */ var _view_trip_cost_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/trip-cost.js */ "./src/view/trip-cost.js");
/* harmony import */ var _view_trip_info_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/trip-info.js */ "./src/view/trip-info.js");
/* harmony import */ var _view_no_points_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/no-points.js */ "./src/view/no-points.js");













const POINT_COUNT = 20;
const pageBody = document.querySelector('.page-body');
const points = (0,_mock_random_point_js__WEBPACK_IMPORTED_MODULE_0__.getRandomPoints)(POINT_COUNT);
console.log(points);

const renderPoints = (container, point, data) => {

  const pointComponent = new _view_points_js__WEBPACK_IMPORTED_MODULE_6__["default"](point, data);
  const editPointComponent = new _view_edit_point_js__WEBPACK_IMPORTED_MODULE_2__["default"](point, data);

  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(container, pointComponent.getElement());

  const openEditBtn = pointComponent.getElement().querySelector('.event__rollup-btn');
  const saveFormBtn = editPointComponent.getElement();
  const closeEditBtn = editPointComponent.getElement().querySelector('.event__rollup-btn');

  const closeEditFormOnEsc = (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      container.replaceChild(
        pointComponent.getElement(),
        editPointComponent.getElement()
      );
      document.removeEventListener('keydown', closeEditFormOnEsc);
    }
  };

  const replacePointComponent = () => {
    container.replaceChild( editPointComponent.getElement(), pointComponent.getElement());
    saveFormBtn.addEventListener('submit', (evt) => {
      evt.preventDefault();
      container.replaceChild(pointComponent.getElement(), editPointComponent.getElement());
      document.removeEventListener('keydown', closeEditFormOnEsc);
    });

    closeEditBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      container.replaceChild( pointComponent.getElement(), editPointComponent.getElement());
      document.removeEventListener('keydown', closeEditFormOnEsc);
    });

    document.addEventListener('keydown', closeEditFormOnEsc);
  };

  openEditBtn.addEventListener('click', replacePointComponent);
};

const tripMainContainer = pageBody.querySelector('.trip-main');

const navContainer = pageBody.querySelector('.trip-controls__navigation');
(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(navContainer, new _view_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"]().getElement());

const filterContainer = pageBody.querySelector('.trip-controls__filters');
(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(filterContainer, new _view_list_filter_js__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement());

const pointsContainer = pageBody.querySelector('.trip-events');

if (points.length === 0) {
  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(pointsContainer, new _view_no_points_js__WEBPACK_IMPORTED_MODULE_10__["default"]().getElement());
} else {
  const tripInfoComponent = new _view_trip_info_js__WEBPACK_IMPORTED_MODULE_9__["default"](points);
  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(tripMainContainer, tripInfoComponent.getElement(), _utils_render_js__WEBPACK_IMPORTED_MODULE_1__.RenderPosition.AFTERBEGIN);

  const tripCostContainer = tripInfoComponent.getElement();
  const tripCostComponent = new _view_trip_cost_js__WEBPACK_IMPORTED_MODULE_8__["default"](points);
  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(tripCostContainer, tripCostComponent.getElement());

  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(pointsContainer, new _view_sort_js__WEBPACK_IMPORTED_MODULE_7__["default"]().getElement());

  const pointListComponent = new _view_point_list__WEBPACK_IMPORTED_MODULE_5__["default"]();
  (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_1__.render)(pointsContainer, pointListComponent.getElement());

  points.forEach((point) => {
    renderPoints(pointListComponent.getElement(), point, _mock_random_point_js__WEBPACK_IMPORTED_MODULE_0__.offers);
  });
}

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map