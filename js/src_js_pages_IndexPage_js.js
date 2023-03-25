"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_IndexPage_js"],{

/***/ "./src/js/components/HeroSection.js":
/*!******************************************!*\
  !*** ./src/js/components/HeroSection.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var HeroSection = /*#__PURE__*/function () {
  function HeroSection() {
    _classCallCheck(this, HeroSection);
  }

  _createClass(HeroSection, [{
    key: "init",
    value: function init() {
      var $fadeElem = document.querySelector('.fadeElem');
    }
  }]);

  return HeroSection;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);

/***/ }),

/***/ "./src/js/components/InnovationSection.js":
/*!************************************************!*\
  !*** ./src/js/components/InnovationSection.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_innovation_section_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_innovation_section.scss */ "./src/scss/components/_innovation_section.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var InnovationSection = /*#__PURE__*/function () {
  function InnovationSection() {
    _classCallCheck(this, InnovationSection);
  }

  _createClass(InnovationSection, [{
    key: "init",
    value: function init() {}
  }]);

  return InnovationSection;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InnovationSection);

/***/ }),

/***/ "./src/js/components/Quote.js":
/*!************************************!*\
  !*** ./src/js/components/Quote.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_quote_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_quote.scss */ "./src/scss/components/_quote.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Quote = /*#__PURE__*/function () {
  function Quote() {
    _classCallCheck(this, Quote);
  }

  _createClass(Quote, [{
    key: "init",
    value: function init() {}
  }]);

  return Quote;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Quote);

/***/ }),

/***/ "./src/js/components/animation/HomepageAnim.js":
/*!*****************************************************!*\
  !*** ./src/js/components/animation/HomepageAnim.js ***!
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







var HomepageAnim = /*#__PURE__*/function () {
  function HomepageAnim() {
    _classCallCheck(this, HomepageAnim);

    this.init();
  }

  _createClass(HomepageAnim, [{
    key: "heroAnim",
    value: function heroAnim() {
      var $hero = document.querySelector('.hero');
      if (!$hero) return;
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      console.log("safari: ".concat(isSafari));
      var $heroBg = $hero.querySelector('.heroBgDesktop');
      var $heroBgSvgBlur = $heroBg.querySelector('.heroBg1 feGaussianBlur');
      var $heroBgSvgLetter = $heroBg.querySelector('.hero__bg_svg_letter');
      var $heroBgCover = $heroBg.querySelector('.heroBg1');
      var $heroBgCover2 = $heroBg.querySelector('.heroBg2');
      var $heroIcons = $hero.querySelectorAll('.heroDecor');
      var $heroTitle = $hero.querySelector('.heroTitle');
      var $heroSubtitle = $hero.querySelector('.heroSubtitle');
      var heroTl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        delay: 0.2
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set([$heroBgCover, $heroBgCover2], {
        // x: '52.8vh',
        x: gsap__WEBPACK_IMPORTED_MODULE_3__["default"].utils.wrap(['40vw', 0]),
        opacity: gsap__WEBPACK_IMPORTED_MODULE_3__["default"].utils.wrap([1, 0])
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($heroBgSvgBlur, {
        attr: {
          stdDeviation: '0 0'
        }
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set([$heroTitle], {
        opacity: 0,
        filter: 'blur(2px)'
      });

      if ($heroIcons.length) {
        gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($heroIcons, {
          opacity: 0,
          filter: 'blur(2px)'
        });
      }

      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($heroSubtitle, {
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($heroIcons, {
        opacity: 0
      });
      var subtitleLines = new (_vendors_SplitText__WEBPACK_IMPORTED_MODULE_2___default())($heroSubtitle, {
        type: 'lines'
      });
      var splitData;

      if (subtitleLines && subtitleLines.lines && subtitleLines.lines.length) {
        splitData = subtitleLines.lines.map(function (line) {
          var _SplitText = new (_vendors_SplitText__WEBPACK_IMPORTED_MODULE_2___default())(line, {
            type: 'chars'
          }),
              chars = _SplitText.chars;

          chars.forEach(function (char, index) {
            if (index !== 0) {
              if (char) {
                gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set(char, {
                  opacity: 0
                });
              }
            }
          });
          chars.splice(0, 1);
          return chars;
        });
      }

      heroTl.addLabel('start').to($heroBg, {
        x: 0,
        duration: 1,
        ease: 'power2.out'
      }, 'start').to($heroBgCover, {
        x: 0,
        duration: 1.2,
        ease: 'power2.out'
      }, 'start').addLabel('blurs');

      if (isSafari) {
        heroTl.to([$heroBgCover, $heroBgCover2], {
          opacity: gsap__WEBPACK_IMPORTED_MODULE_3__["default"].utils.wrap([0, 1]),
          delay: gsap__WEBPACK_IMPORTED_MODULE_3__["default"].utils.wrap([0.5, 0]),
          duration: 0.6,
          ease: 'none'
        }, 'blurs');
      } else {
        heroTl.to($heroBgSvgBlur, {
          attr: {
            stdDeviation: '12 0'
          },
          duration: 0.6
        }, 'blurs');
      }

      heroTl.to([$heroTitle], {
        opacity: 1,
        duration: 1.3,
        ease: 'power1.out'
      }, 'blurs').to([$heroTitle], {
        filter: 'blur(0px)',
        duration: 1.7,
        ease: 'power1.inOut'
      }, 'blurs').addLabel('split').to($heroSubtitle, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.inOut'
      }, 'blurs+=1.2');

      if ($heroIcons.length) {
        heroTl.to($heroIcons, {
          opacity: 1,
          duration: 1,
          ease: 'power1.out'
        }, 'blurs').to($heroIcons, {
          filter: 'blur(0px)',
          duration: 1.4,
          ease: 'power1.inOut'
        }, 'blurs');
      }

      if (!splitData.length) return;
      splitData.forEach(function (charsArr, index) {
        if (!charsArr.length || !charsArr[0]) return null;
        heroTl.to(charsArr, {
          opacity: 1,
          stagger: 0.04
        }, index === 0 ? 'split+=0.3' : '-=.3');
        return null;
      });
    }
  }, {
    key: "quoteAnim",
    value: function quoteAnim() {
      var $quote = document.querySelector('.quote');
      if (!$quote) return;
      var $quoteHead = $quote.querySelector('.quoteHead');
      var $quoteContent = $quote.querySelector('.quoteContent');
      var $quoteIcon = $quote.querySelector('.quoteIcon');
      var $quotePicture = $quote.querySelector('.quotePicture');
      var $quoteSign = $quote.querySelector('.quoteSign');
      var quoteTl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        paused: true
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($quotePicture, {
        opacity: 0,
        y: 150
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($quoteContent, {
        opacity: 0,
        y: 70
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($quoteHead, {
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($quoteSign, {
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($quoteIcon, {
        scaleY: 0,
        transformOrigin: 'top'
      });
      quoteTl.addLabel('start').to($quotePicture, {
        y: 0,
        ease: 'Power1.in',
        duration: 0.8
      }, 'start').to($quotePicture, {
        opacity: 1,
        ease: 'Power1.inOut',
        duration: 1.4
      }, 'start').to($quoteContent, {
        y: 0,
        ease: 'Power1.in',
        duration: 0.8
      }, 'start').to($quoteIcon, {
        scaleY: 1,
        ease: 'Power1.inOut',
        duration: 0.4
      }, '-=.6').to($quoteSign, {
        opacity: 1,
        duration: 1.6
      }).addLabel('end');

      if ($quoteContent) {
        quoteTl.to($quoteContent, {
          opacity: 1,
          ease: 'Power1.inOut',
          duration: 1
        }, 'start');
      }

      if ($quoteHead) {
        quoteTl.to($quoteHead, {
          opacity: 1,
          ease: 'Power1.inOut',
          duration: 1
        }, 'start');
      }

      var leaveTl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline();

      var handleEnter = function handleEnter() {
        quoteTl.play();
      };

      var handleLeave = function handleLeave() {
        leaveTl.addLabel('start').to($quotePicture, {
          y: -150
        }, 'start').to($quoteContent, {
          y: -100
        }, 'start').to($quoteSign, {
          y: -100
        }, 'start').to($quoteHead, {
          y: -100
        }, 'start');
      };

      var handleBack = function handleBack() {
        leaveTl.addLabel('start').to($quotePicture, {
          y: 0
        }, 'start').to($quoteContent, {
          y: 0
        }, 'start').to($quoteSign, {
          y: 0
        }, 'start').to($quoteHead, {
          y: 0
        }, 'start');
      };

      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"].create({
        trigger: $quote,
        start: 'center-=20% center',
        end: 'center top',
        onEnter: handleEnter,
        onLeave: handleLeave,
        onEnterBack: handleBack
      });
    }
  }, {
    key: "innovationAnim",
    value: function innovationAnim() {
      var $innovation = document.querySelector('.innovation');
      if (!$innovation) return;
      var $innovationTitle = $innovation.querySelectorAll('.innovationTitle');
      var $innovationSubtitle = $innovation.querySelectorAll('.innovationSubtitle');
      var $innovationIcon = $innovation.querySelector('.innovationIcon');
      var innovationTl = gsap__WEBPACK_IMPORTED_MODULE_3__["default"].timeline({
        paused: true
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($innovationTitle, {
        opacity: 0,
        y: 100
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($innovationSubtitle, {
        opacity: 0,
        y: 50
      });
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].set($innovationIcon, {
        scaleY: 0,
        transformOrigin: 'top'
      });
      innovationTl.addLabel('start').to([$innovationTitle], {
        opacity: 1,
        ease: 'Power1.inOut',
        duration: 0.6
      }, '+=0.1').to([$innovationTitle], {
        y: 0,
        ease: 'Power1.inOut',
        duration: 0.72
      }, '-=0.6').to([$innovationSubtitle], {
        opacity: 1,
        ease: 'Power1.inOut',
        duration: 0.6
      }, '+=0.1').to([$innovationSubtitle], {
        y: 0,
        ease: 'Power1.inOut',
        duration: 0.72
      }, '-=0.6').to($innovationIcon, {
        scaleY: 1,
        ease: 'Power1.inOut',
        duration: 0.4
      }).addLabel('end');

      var handleEnter = function handleEnter() {
        innovationTl.play();
      };

      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"].create({
        trigger: $innovation,
        start: 'center+=30% bottom',
        end: 'botton top',
        onEnter: handleEnter
      });
    }
  }, {
    key: "init",
    value: function init() {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)().windowWidth < _utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1) return;
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].registerPlugin((_vendors_SplitText__WEBPACK_IMPORTED_MODULE_2___default()));
      gsap__WEBPACK_IMPORTED_MODULE_3__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_4__["default"]);
      this.heroAnim();
      this.quoteAnim();
      this.innovationAnim();
    }
  }]);

  return HomepageAnim;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepageAnim);

/***/ }),

/***/ "./src/js/pages/IndexPage.js":
/*!***********************************!*\
  !*** ./src/js/pages/IndexPage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ IndexPage)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _components_HeroSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeroSection */ "./src/js/components/HeroSection.js");
/* harmony import */ var _components_Quote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Quote */ "./src/js/components/Quote.js");
/* harmony import */ var _components_InnovationSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InnovationSection */ "./src/js/components/InnovationSection.js");
/* harmony import */ var _components_animation_HomepageAnim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/animation/HomepageAnim */ "./src/js/components/animation/HomepageAnim.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }








var IndexPage = /*#__PURE__*/function () {
  function IndexPage() {
    _classCallCheck(this, IndexPage);

    this.init = this.init.bind(this);
  }

  _createClass(IndexPage, [{
    key: "loadFunc",
    value: function loadFunc() {
      console.log('index page load');
      var homepageAnim = new _components_animation_HomepageAnim__WEBPACK_IMPORTED_MODULE_5__["default"]();
      var heroSection = new _components_HeroSection__WEBPACK_IMPORTED_MODULE_2__["default"]().init();
      var qoute = new _components_Quote__WEBPACK_IMPORTED_MODULE_3__["default"]().init();
      var innovationSection = new _components_InnovationSection__WEBPACK_IMPORTED_MODULE_4__["default"]().init();
    }
  }, {
    key: "init",
    value: function init() {
      this.loadFunc();
    }
  }]);

  return IndexPage;
}();



/***/ }),

/***/ "./src/scss/components/_innovation_section.scss":
/*!******************************************************!*\
  !*** ./src/scss/components/_innovation_section.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_quote.scss":
/*!*****************************************!*\
  !*** ./src/scss/components/_quote.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_IndexPage_js.js.map