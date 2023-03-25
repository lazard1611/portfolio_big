"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_PhilosophyPage_js"],{

/***/ "./src/js/components/AboutSection.js":
/*!*******************************************!*\
  !*** ./src/js/components/AboutSection.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_about_section_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_about_section.scss */ "./src/scss/components/_about_section.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var AboutSection = /*#__PURE__*/function () {
  function AboutSection() {
    _classCallCheck(this, AboutSection);
  }

  _createClass(AboutSection, [{
    key: "init",
    value: function init() {}
  }]);

  return AboutSection;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutSection);

/***/ }),

/***/ "./src/js/components/QuoteHero.js":
/*!****************************************!*\
  !*** ./src/js/components/QuoteHero.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// import 'ScssComponents/_quote_hero.scss';
var QuoteHero = /*#__PURE__*/function () {
  function QuoteHero() {
    _classCallCheck(this, QuoteHero);
  }

  _createClass(QuoteHero, [{
    key: "init",
    value: function init() {}
  }]);

  return QuoteHero;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QuoteHero);

/***/ }),

/***/ "./src/js/components/animation/PhilosophyAnim.js":
/*!*******************************************************!*\
  !*** ./src/js/components/animation/PhilosophyAnim.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhilosophyAnim)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/js/utils/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/js/utils/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var PhilosophyAnim = /*#__PURE__*/function () {
  function PhilosophyAnim() {
    _classCallCheck(this, PhilosophyAnim);

    this.isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    this.$quoteBg = document.querySelector(this.SELECTORS.quoteBg);
    this.$quoteImg = document.querySelector(this.SELECTORS.quoteImg);
    this.$quoteText = document.querySelector(this.SELECTORS.quoteText);
    this.$quoteDecor = document.querySelector(this.SELECTORS.quoteDecor);
    this.$quoteBackstage = document.querySelector(this.SELECTORS.quoteBackstage);
    this.$aboutTextBg = document.querySelectorAll(this.SELECTORS.aboutTextBg);
    this.$aboutText = document.querySelectorAll("".concat(this.SELECTORS.aboutText, " p"));
    this.$aboutGradient = document.querySelector(this.SELECTORS.aboutGradient);
    this.$aboutBlur = document.querySelector(this.SELECTORS.aboutBlur);
    this.$aboutBlurBg = document.querySelector(this.SELECTORS.aboutBlurSvg);
    this.$aboutBlurBg2 = document.querySelector(this.SELECTORS.aboutBlurSvg2);
    this.$aboutContent = document.querySelector(this.SELECTORS.aboutContent);
    this.$gausBlur = document.querySelector(this.SELECTORS.aboutTextBlur);
    this.$gausBlurBg = document.querySelector(this.SELECTORS.aboutTextSvg);
    this.$gausBlurBg2 = document.querySelector(this.SELECTORS.aboutTextSvg2);
  }

  _createClass(PhilosophyAnim, [{
    key: "SELECTORS",
    get: function get() {
      return {
        quoteBg: '.quoteBg',
        quoteImg: '.quoteImg',
        quoteText: '.quoteText',
        quoteDecor: '.quoteDecor',
        quoteBackstage: '.quoteBackstage',
        aboutTextBg: '.aboutTextBg',
        aboutText: '.aboutText',
        aboutTextBlur: '.aboutTextBlur feGaussianBlur',
        aboutTextSvg: '.aboutTextBlur',
        aboutTextSvg2: '.aboutTextBlur2',
        aboutGradient: '.aboutGradient',
        aboutBlur: '.aboutBlur feGaussianBlur',
        aboutBlurSvg: '.aboutBlur',
        aboutBlurSvg2: '.aboutBlur2',
        aboutContent: '.aboutContent'
      };
    }
  }, {
    key: "CLASSNAMES",
    get: function get() {
      return {
        quoteBackstageHideState: 'quote_hero__block_info_backstage--hide_state'
      };
    }
  }, {
    key: "quoteAnim",
    value: function quoteAnim(timeline) {
      var _this = this;

      timeline.from(this.$quoteBg, {
        xPercent: 100,
        duration: 0.5
      }).from(this.$quoteImg, {
        xPercent: 10,
        opacity: 0,
        duration: 0.46,
        ease: 'power1.inOut'
      }).from(this.$quoteText, {
        xPercent: 10,
        opacity: 0,
        duration: 0.48
      }).from(this.$quoteDecor, {
        yPercent: -100,
        duration: 0.4
      }).to(this.$quoteBackstage, {
        xPercent: 100,
        duration: 0.6,
        onComplete: function onComplete() {
          _this.$quoteBackstage.classList.add(_this.CLASSNAMES.quoteBackstageHideState);
        }
      });
    }
  }, {
    key: "aboutTextAnim",
    value: function aboutTextAnim(timeline) {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set([this.$gausBlurBg, this.$gausBlurBg2], {
        opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([1, 0])
      });
      timeline.from(this.$aboutText, {
        y: 150,
        duration: 0.6,
        stagger: {
          from: 'top',
          amount: 0.6
        }
      });

      if (this.isSafari) {
        timeline.to([this.$gausBlurBg, this.$gausBlurBg2], {
          opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 1]),
          duration: 0.3,
          ease: 'none'
        });
      } else {
        timeline.fromTo(this.$gausBlur, 0.3, {
          attr: {
            stdDeviation: '0 0'
          }
        }, {
          attr: {
            stdDeviation: '14 0'
          }
        });
      }
    }
  }, {
    key: "aboutAnim",
    value: function aboutAnim(timeline) {
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set([this.$aboutBlurBg, this.$aboutBlurBg2], {
        opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([1, 0])
      });
      timeline.from(this.$aboutGradient, {
        xPercent: 100,
        duration: 0.5
      });

      if (this.isSafari) {
        timeline.to([this.$aboutBlurBg, this.$aboutBlurBg2], {
          opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 1]),
          duration: 0.3,
          ease: 'none'
        });
      } else {
        timeline.fromTo(this.$aboutBlur, 0.3, {
          attr: {
            stdDeviation: '0 0'
          }
        }, {
          attr: {
            stdDeviation: '14 0'
          }
        });
      }

      timeline.from(this.$aboutContent, {
        xPercent: 20,
        opacity: 0,
        duration: 0.55
      });
    }
  }, {
    key: "init",
    value: function init() {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)().windowWidth < _utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1) return;
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["default"]);
      var quoteTimeline = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        scrollTrigger: {
          trigger: this.$quoteBg,
          start: 'top center'
        }
      });
      this.quoteAnim(quoteTimeline);
      var aboutTextTimeline = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        scrollTrigger: {
          trigger: this.$aboutTextBg,
          start: 'top+=40% bottom'
        }
      });
      this.aboutTextAnim(aboutTextTimeline);
      var aboutTimeline = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        scrollTrigger: {
          trigger: this.$aboutGradient,
          start: 'center bottom'
        }
      });
      this.aboutAnim(aboutTimeline);
    }
  }]);

  return PhilosophyAnim;
}();



/***/ }),

/***/ "./src/js/pages/PhilosophyPage.js":
/*!****************************************!*\
  !*** ./src/js/pages/PhilosophyPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PhilosophyPage)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _components_QuoteHero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QuoteHero */ "./src/js/components/QuoteHero.js");
/* harmony import */ var _components_AboutSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AboutSection */ "./src/js/components/AboutSection.js");
/* harmony import */ var _components_animation_PhilosophyAnim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/animation/PhilosophyAnim */ "./src/js/components/animation/PhilosophyAnim.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




 // anim components



var PhilosophyPage = /*#__PURE__*/function () {
  function PhilosophyPage() {
    _classCallCheck(this, PhilosophyPage);

    this.init = this.init.bind(this);
  }

  _createClass(PhilosophyPage, [{
    key: "loadFunc",
    value: function loadFunc() {
      console.log('Philosophy Page load');
      var qouteHero = new _components_QuoteHero__WEBPACK_IMPORTED_MODULE_2__["default"]().init();
      var aboutSection = new _components_AboutSection__WEBPACK_IMPORTED_MODULE_3__["default"]().init(); // animation

      var pageAnim = new _components_animation_PhilosophyAnim__WEBPACK_IMPORTED_MODULE_4__["default"]().init();
    }
  }, {
    key: "init",
    value: function init() {
      this.loadFunc();
    }
  }]);

  return PhilosophyPage;
}();



/***/ }),

/***/ "./src/scss/components/_about_section.scss":
/*!*************************************************!*\
  !*** ./src/scss/components/_about_section.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_PhilosophyPage_js.js.map