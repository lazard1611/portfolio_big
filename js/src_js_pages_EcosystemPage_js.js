"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_EcosystemPage_js"],{

/***/ "./src/js/components/EcosystemSection.js":
/*!***********************************************!*\
  !*** ./src/js/components/EcosystemSection.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_ecosystem_section_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_ecosystem_section.scss */ "./src/scss/components/_ecosystem_section.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var EcosystemSection = /*#__PURE__*/function () {
  function EcosystemSection() {
    _classCallCheck(this, EcosystemSection);
  }

  _createClass(EcosystemSection, [{
    key: "init",
    value: function init() {}
  }]);

  return EcosystemSection;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EcosystemSection);

/***/ }),

/***/ "./src/js/components/Solutions.js":
/*!****************************************!*\
  !*** ./src/js/components/Solutions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var ScssComponents_solutions_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_solutions.scss */ "./src/scss/components/_solutions.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Solutions = /*#__PURE__*/function () {
  function Solutions() {
    _classCallCheck(this, Solutions);
  }

  _createClass(Solutions, [{
    key: "selectors",
    get: function get() {
      return {
        section: '.solutions',
        itemHover: '.itemHover',
        parentItem: '.solutions__list_item'
      };
    }
  }, {
    key: "mods",
    get: function get() {
      return {
        parentItem: {
          hover: 'solutions__list_item_state'
        }
      };
    }
  }, {
    key: "handleMouseOver",
    value: function handleMouseOver(event) {
      if (!event.target || !event.target.closest || !event.target.classList) return;
      if (!event.target.classList.contains(this.selectors.itemHover.slice(1))) return;
      var $parentItem = event.target.closest(this.selectors.parentItem);
      if (!$parentItem) return;
      $parentItem.classList.add(this.mods.parentItem.hover);
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut(event) {
      if (!event.target || !event.target.closest || !event.target.classList) return;
      if (!event.target.classList.contains(this.selectors.itemHover.slice(1))) return;
      var $parentItem = event.target.closest(this.selectors.parentItem);
      if (!$parentItem) return;
      $parentItem.classList.remove(this.mods.parentItem.hover);
    }
  }, {
    key: "init",
    value: function init() {
      var _this = this;

      // if (!Solutions.globalHandlersAdded) {
      // 	document.addEventListener('mouseover', (event) => this.handleMouseOver(event));
      // 	document.addEventListener('mouseout', (event) => this.handleMouseOut(event));
      // 	Solutions.globalHandlersAdded = true;
      // }
      var $itemsHover = document.querySelectorAll(this.selectors.itemHover);
      $itemsHover.forEach(function (item) {
        var itemHover = item;
        var parentItem = itemHover.closest(_this.selectors.parentItem);
        itemHover.addEventListener('mouseover', function () {
          parentItem.classList.add(_this.mods.parentItem.hover);
        });
        itemHover.addEventListener('mouseout', function () {
          parentItem.classList.remove(_this.mods.parentItem.hover);
        });
      });
    }
  }]);

  return Solutions;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Solutions);

/***/ }),

/***/ "./src/js/components/animation/EcosystemAnim.js":
/*!******************************************************!*\
  !*** ./src/js/components/animation/EcosystemAnim.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/js/utils/index.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/js/utils/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var EcosystemAnim = /*#__PURE__*/function () {
  function EcosystemAnim() {
    _classCallCheck(this, EcosystemAnim);

    this.init();
  }

  _createClass(EcosystemAnim, [{
    key: "articleAnim",
    value: function articleAnim() {
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      var $article = document.querySelector('.ecosystemArticle');
      if (!$article) return;
      var $articleTitle = $article.querySelector('.ecosystemArticleTitle');
      var $articleDecor = $article.querySelector('.ecosystemArticleDecor');
      var $articleFade = $article.querySelectorAll('.ecosystemArticleFade p');
      var $articleContent = $article.querySelector('.ecosystemQuoteContent');
      var $articleBg = $article.querySelector('.ecosystemQuoteBg');
      var $articleBg2 = $article.querySelector('.ecosystemQuoteBg2');
      var $articleBgPng = $article.querySelector('.ecosystemQuoteBgPng');
      var $articleBgPng2 = $article.querySelector('.ecosystemQuoteBgPng2');
      var $articleBgWrap = $article.querySelector('.ecosystemQuoteBgWrap');
      var $articleBgWrapIn = $article.querySelector('.ecosystemQuoteBgWrapIn');
      var $articleQuoteDecor = $article.querySelector('.ecosystemQuoteDecor');
      var articleTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline({
        delay: 0.2
      });
      var quoteTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set($articleTitle, {
        opacity: 0,
        filter: 'blur(2px)'
      }); // gsap.set($articleBgWrap, {
      // 	clipPath: 'polygon(99% 0, 100% 0, 100% 100%, 99% 100%)',
      // });

      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set([$articleBgWrap, $articleBgWrapIn], {
        xPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([100, -100])
      });

      if (isSafari) {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set([$articleBg, $articleBg2], {
          opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 0])
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set([$articleBgPng, $articleBgPng2], {
          opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([1, 0])
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set([$articleBg, $articleBg2], {
          opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([1, 0])
        });
        gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set([$articleBgPng, $articleBgPng2], {
          opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 0])
        });
      }

      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set($articleContent, {
        x: 100,
        opacity: 0
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set([$articleQuoteDecor, $articleDecor], {
        scaleY: 0,
        transformOrigin: 'top'
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set($articleFade, {
        opacity: 0,
        y: 25
      });
      articleTl.addLabel('start').to($articleTitle, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.inOut'
      }, 'start').to($articleTitle, {
        filter: 'blur(0px)',
        duration: 0.4,
        ease: 'power2.inOut'
      }, 'start').addLabel('fade').to($articleFade, {
        opacity: 1,
        duration: 0.4,
        stagger: 0.4,
        ease: 'power1.inOut'
      }, 'fade').to($articleFade, {
        y: 0,
        duration: 0.4,
        stagger: 0.4,
        ease: 'power1.inOut'
      }, 'fade').to($articleDecor, {
        scaleY: 1,
        duration: 0.4,
        ease: 'power1.inOut'
      }).addLabel('end');

      var handleEnter = function handleEnter() {
        if (isSafari) {
          quoteTl // .to($articleBgWrap, {
          // 	clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          // 	duration: 0.7,
          // 	ease: 'power1.inOut',
          // })
          .to([$articleBgWrap, $articleBgWrapIn], {
            xPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 0]),
            duration: 0.7,
            ease: 'power1.inOut'
          }).to([$articleBgPng, $articleBgPng2], {
            opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 1]),
            duration: 0.8,
            ease: 'none'
          }, '-=0.2').addLabel('content').to($articleContent, {
            opacity: 1,
            duration: 0.4,
            ease: 'power1.inOut'
          }, 'content-=.2').to($articleContent, {
            x: 0,
            duration: 0.6,
            ease: 'power1.inOut'
          }, 'content-=.3').to($articleQuoteDecor, {
            scaleY: 1,
            duration: 0.4,
            ease: 'power1.inOut'
          }).addLabel('end');
        } else {
          quoteTl // .to($articleBgWrap, {
          // 	clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          // 	duration: 0.7,
          // 	ease: 'power1.inOut',
          // })
          .to([$articleBgWrap, $articleBgWrapIn], {
            xPercent: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 0]),
            duration: 0.7,
            ease: 'power1.inOut'
          }).to([$articleBg, $articleBg2], {
            opacity: gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.wrap([0, 1]),
            duration: 0.8,
            ease: 'none'
          }, '-=0.2').addLabel('content').to($articleContent, {
            opacity: 1,
            duration: 0.4,
            ease: 'power1.inOut'
          }, 'content-=.2').to($articleContent, {
            x: 0,
            duration: 0.6,
            ease: 'power1.inOut'
          }, 'content-=.3').to($articleQuoteDecor, {
            scaleY: 1,
            duration: 0.4,
            ease: 'power1.inOut'
          }).addLabel('end');
        }
      };

      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["default"].create({
        trigger: $articleBgWrap,
        start: 'center bottom',
        onEnter: handleEnter
      });
    }
  }, {
    key: "solutionsAnim",
    value: function solutionsAnim() {
      var $solutions = document.querySelector('.solutions');
      if (!$solutions) return;
      var $solutionsItemTop = document.querySelectorAll('.solutionsItemTop');
      var $solutionsItemArrow = document.querySelectorAll('.solutionsItemArrow');
      var solutionsTl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set($solutionsItemTop, {
        opacity: 0,
        y: 35
      });
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].set($solutionsItemArrow, {
        opacity: 0,
        x: -8
      });

      var handleEnter = function handleEnter() {
        solutionsTl.to($solutionsItemTop, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.5,
          ease: 'power1.inOut'
        }).to($solutionsItemArrow, {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.4,
          ease: 'power1.inOut'
        });
      };

      gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["default"].create({
        trigger: $solutions,
        start: 'top+=20% bottom',
        onEnter: handleEnter
      });
    }
  }, {
    key: "init",
    value: function init() {
      if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.getWindowSize)().windowWidth < _utils_constants__WEBPACK_IMPORTED_MODULE_1__.GLOBAL_VARS.mediaPoint1) return;
      gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__["default"]);
      this.articleAnim();
      this.solutionsAnim();
    }
  }]);

  return EcosystemAnim;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EcosystemAnim);

/***/ }),

/***/ "./src/js/pages/EcosystemPage.js":
/*!***************************************!*\
  !*** ./src/js/pages/EcosystemPage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EcosystemPage)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _components_Solutions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Solutions */ "./src/js/components/Solutions.js");
/* harmony import */ var _components_EcosystemSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EcosystemSection */ "./src/js/components/EcosystemSection.js");
/* harmony import */ var _components_animation_EcosystemAnim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/animation/EcosystemAnim */ "./src/js/components/animation/EcosystemAnim.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }







var EcosystemPage = /*#__PURE__*/function () {
  function EcosystemPage() {
    _classCallCheck(this, EcosystemPage);

    this.init = this.init.bind(this);
  }

  _createClass(EcosystemPage, [{
    key: "loadFunc",
    value: function loadFunc() {
      console.log('Ecosystem Page load');
      var ecosystemAnim = new _components_animation_EcosystemAnim__WEBPACK_IMPORTED_MODULE_4__["default"]();
      var solutions = new _components_Solutions__WEBPACK_IMPORTED_MODULE_2__["default"]().init();
      var ecosystemSection = new _components_EcosystemSection__WEBPACK_IMPORTED_MODULE_3__["default"]().init();
    }
  }, {
    key: "init",
    value: function init() {
      this.loadFunc();
    }
  }]);

  return EcosystemPage;
}();



/***/ }),

/***/ "./src/scss/components/_ecosystem_section.scss":
/*!*****************************************************!*\
  !*** ./src/scss/components/_ecosystem_section.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scss/components/_solutions.scss":
/*!*********************************************!*\
  !*** ./src/scss/components/_solutions.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_EcosystemPage_js.js.map