"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_PartnersPage_js"],{

/***/ "./src/js/components/ArticleSection.js":
/*!*********************************************!*\
  !*** ./src/js/components/ArticleSection.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_article_section_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_article_section.scss */ "./src/scss/components/_article_section.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var ArticleSection = /*#__PURE__*/function () {
  function ArticleSection() {
    _classCallCheck(this, ArticleSection);
  }

  _createClass(ArticleSection, [{
    key: "init",
    value: function init() {}
  }]);

  return ArticleSection;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArticleSection);

/***/ }),

/***/ "./src/js/components/ContactPopup.js":
/*!*******************************************!*\
  !*** ./src/js/components/ContactPopup.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactPopup)
/* harmony export */ });
/* harmony import */ var ScssComponents_contact_popup_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_contact_popup.scss */ "./src/scss/components/_contact_popup.scss");
/* harmony import */ var ScssComponents_contact_form_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ScssComponents/_contact_form.scss */ "./src/scss/components/_contact_form.scss");
/* harmony import */ var _initPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initPopup */ "./src/js/components/initPopup.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var ContactPopup = /*#__PURE__*/function () {
  function ContactPopup() {
    _classCallCheck(this, ContactPopup);
  }

  _createClass(ContactPopup, [{
    key: "changeHeight",
    value:
    /* change height when form container is full */
    function changeHeight() {
      var $popup = document.querySelector('.contactPopup');
      var $content = document.querySelector('.contactPopupContent');
      var padding = 20 * 2;
      if (!$popup || !$content) return;

      if ($content.clientHeight > $popup.clientHeight - padding) {
        $content.classList.add('contact_popup__in--height_mod');
      } else {
        $content.classList.remove('contact_popup__in--height_mod');
      }
    }
  }, {
    key: "init",
    value: function init() {
      (0,_initPopup__WEBPACK_IMPORTED_MODULE_2__["default"])('.contactOpenPopup', '.contactPopup', '.contactPopupContent', '.contactClosePopup');
      this.changeHeight();
    }
  }]);

  return ContactPopup;
}();



/***/ }),

/***/ "./src/js/components/ContactSectionV2.js":
/*!***********************************************!*\
  !*** ./src/js/components/ContactSectionV2.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactSectionV2)
/* harmony export */ });
/* harmony import */ var ScssComponents_contact_section_v2_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_contact_section_v2.scss */ "./src/scss/components/_contact_section_v2.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var ContactSectionV2 = /*#__PURE__*/function () {
  function ContactSectionV2() {
    _classCallCheck(this, ContactSectionV2);
  }

  _createClass(ContactSectionV2, [{
    key: "init",
    value: function init() {}
  }]);

  return ContactSectionV2;
}();



/***/ }),

/***/ "./src/js/components/animation/PartnersAnim.js":
/*!*****************************************************!*\
  !*** ./src/js/components/animation/PartnersAnim.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/js/utils/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var _vendors_SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vendors/SplitText */ "./src/js/vendors/SplitText.js");
/* harmony import */ var _vendors_SplitText__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vendors_SplitText__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







var PartnersAnim = /*#__PURE__*/function () {
  function PartnersAnim() {
    _classCallCheck(this, PartnersAnim);

    this.init();
  }

  _createClass(PartnersAnim, [{
    key: "articleAnim",
    value: function articleAnim() {
      var $article = document.querySelector('.article_section');
      if (!$article) return;
      var $articleTitle = $article.querySelectorAll('.articleTitle');
      var $articleSubtitle = $article.querySelectorAll('.articleSubtitle');
      var $articleIcon = $article.querySelector('.articleIcon');
      var articleTl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        delay: 0.2
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($articleTitle, {
        opacity: 0,
        filter: 'blur(2px)'
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($articleSubtitle, {
        opacity: 0,
        x: 40
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($articleIcon, {
        scaleY: 0,
        transformOrigin: 'top'
      });
      articleTl.addLabel('start').to($articleTitle, {
        opacity: 1,
        duration: 1,
        ease: 'power1.out'
      }, 'start').to($articleTitle, {
        filter: 'blur(0px)',
        duration: 1.4,
        ease: 'power1.inOut'
      }, 'start').to($articleSubtitle, {
        opacity: 1,
        scale: 1,
        ease: 'Power1.inOut',
        duration: 0.4,
        stagger: 0.6
      }, 'start+=.86').to($articleSubtitle, {
        x: 0,
        ease: 'Power2.inOut',
        duration: 0.6,
        stagger: 0.6
      }, 'start+=.86').to($articleIcon, {
        scaleY: 1,
        ease: 'Power1.inOut',
        duration: 0.4
      }).addLabel('end');
    }
  }, {
    key: "contactAnim",
    value: function contactAnim() {
      var $contact = document.querySelector('.contact_section_v2');
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      if (!$contact) return;
      var $contactBg = $contact.querySelector('.contactBg');
      var $partnerBgBlur = $contact.querySelector('.partnerBg feGaussianBlur');
      var $partnerBg = $contact.querySelector('.partnerBg');
      var $partnerBgPng = $contact.querySelector('.partnerBgPng');
      var $partnerBgPng2 = $contact.querySelector('.partnerBgPng2');
      var $contactBgOverlay = $contact.querySelector('.contactBgOverlay');
      var $contactTitle = $contact.querySelector('.contactTitle');
      var $contactBtn = $contact.querySelector('.contactBtn');
      var contactTl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        paused: true
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($contactBg, {
        x: '90vw'
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($contactBgOverlay, {
        x: '90vw'
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($contactTitle, {
        opacity: 0,
        x: 120
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($contactBtn, {
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set([$partnerBgPng, $partnerBgPng2], {
        opacity: gsap__WEBPACK_IMPORTED_MODULE_3__["default"].utils.wrap([1, 0])
      });
      contactTl.addLabel('start').to([$contactBg, $contactBgOverlay], {
        x: 0,
        duration: 0.5,
        ease: 'none'
      }, 'start').addLabel('blurs');

      if (isSafari) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($partnerBg, {
          opacity: 0
        });
        contactTl.to([$partnerBgPng, $partnerBgPng2], {
          opacity: gsap__WEBPACK_IMPORTED_MODULE_3__["default"].utils.wrap([0, 1]),
          delay: gsap__WEBPACK_IMPORTED_MODULE_3__["default"].utils.wrap([0.4, 0]),
          duration: 0.5,
          ease: 'none'
        }, 'blurs');
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($partnerBgPng, {
          opacity: 0
        });
        contactTl.to($partnerBgBlur, {
          attr: {
            stdDeviation: '14 0'
          },
          duration: 0.5
        }, 'blurs+=0.1');
      }

      contactTl.to($contactTitle, {
        x: 0,
        opacity: 1,
        duration: 0.34,
        ease: 'power1.out'
      }, '-=0.2').to($contactBtn, {
        opacity: 1,
        duration: 0.4,
        ease: 'power1.inOut'
      }, '+=.4');

      var handleEnter = function handleEnter() {
        contactTl.play();
      };

      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"].create({
        trigger: $contact,
        start: 'center bottom',
        end: 'bottom top',
        onEnter: handleEnter
      });
    }
  }, {
    key: "init",
    value: function init() {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)().windowWidth < _utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1) return;
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"]);
      this.articleAnim();
      this.contactAnim();
    }
  }]);

  return PartnersAnim;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PartnersAnim);

/***/ }),

/***/ "./src/js/components/initPopup.js":
/*!****************************************!*\
  !*** ./src/js/components/initPopup.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var initPopup = function initPopup(btn, popup, content, close) {
  var $btn = document.querySelectorAll(btn);
  var $popup = document.querySelector(popup);
  var $close = document.querySelectorAll(close);
  var $body = document.body;
  var $lockPadding = document.querySelectorAll('.lockPadding'); // this class is added for visible objects with property "position: fixed;"

  var unlock = true;
  var timeout = 300; // miliseconds value must match "transition" in _project_extends.scss

  function bodyLock() {
    var lockPaddingValue = window.innerWidth - document.body.offsetWidth;

    if ($lockPadding.length > 0) {
      $lockPadding.forEach(function (item) {
        var el = item;
        el.style.paddingRight = "".concat(lockPaddingValue, "px");
      });
    }

    $body.style.paddingRight = "".concat(lockPaddingValue, "px");
    $body.classList.add('body--popup_open');
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if ($lockPadding.length > 0) {
        $lockPadding.forEach(function (item) {
          var el = item;
          el.style.paddingRight = '0px';
        });
      }

      $body.style.paddingRight = '0px';
      $body.classList.remove('body--popup_open');
    }, timeout);
    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  } // Closing popup


  function popupClose(popupActive) {
    var doUnlock = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    if (unlock) {
      popupActive.classList.remove('active_state');

      if (doUnlock) {
        bodyUnLock();
      }
    }
  } // Closing the popup when pressing Esc


  document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      var popupActive = document.querySelector('.active_state');
      popupClose(popupActive);
    }
  }); // Popup opening

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      var popupActive = document.querySelector('.active_state');

      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
        curentPopup.classList.add('active_state');
      } // Closing when clicking on a dark area


      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest(content)) {
          popupClose(e.target.closest(popup)); // bodyClass(false);
        }
      });
    }
  }

  if (!$btn.length && !$popup) return null;
  $btn.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      popupOpen($popup);
    });
  });
  if (!$close) return null;
  $close.forEach(function (item) {
    item.addEventListener('click', function () {
      popupClose(item.closest(popup));
    });
  });
  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initPopup);

/***/ }),

/***/ "./src/js/pages/PartnersPage.js":
/*!**************************************!*\
  !*** ./src/js/pages/PartnersPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PartnersPage)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _components_ContactSectionV2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactSectionV2 */ "./src/js/components/ContactSectionV2.js");
/* harmony import */ var _components_ContactPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContactPopup */ "./src/js/components/ContactPopup.js");
/* harmony import */ var _components_ArticleSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ArticleSection */ "./src/js/components/ArticleSection.js");
/* harmony import */ var _components_animation_PartnersAnim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/animation/PartnersAnim */ "./src/js/components/animation/PartnersAnim.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }








var PartnersPage = /*#__PURE__*/function () {
  function PartnersPage() {
    _classCallCheck(this, PartnersPage);

    this.init = this.init.bind(this);
  }

  _createClass(PartnersPage, [{
    key: "loadFunc",
    value: function loadFunc() {
      var partnersAnim = new _components_animation_PartnersAnim__WEBPACK_IMPORTED_MODULE_5__["default"]();
      var articleSection = new _components_ArticleSection__WEBPACK_IMPORTED_MODULE_4__["default"]().init();
      var contactSection = new _components_ContactSectionV2__WEBPACK_IMPORTED_MODULE_2__["default"]();
      contactSection.init();
      var popup = new _components_ContactPopup__WEBPACK_IMPORTED_MODULE_3__["default"]();
      popup.init();
    }
  }, {
    key: "init",
    value: function init() {
      this.loadFunc();
    }
  }]);

  return PartnersPage;
}();



/***/ }),

/***/ "./src/scss/components/_article_section.scss":
/*!***************************************************!*\
  !*** ./src/scss/components/_article_section.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_contact_form.scss":
/*!************************************************!*\
  !*** ./src/scss/components/_contact_form.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_contact_popup.scss":
/*!*************************************************!*\
  !*** ./src/scss/components/_contact_popup.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_contact_section_v2.scss":
/*!******************************************************!*\
  !*** ./src/scss/components/_contact_section_v2.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_PartnersPage_js.js.map