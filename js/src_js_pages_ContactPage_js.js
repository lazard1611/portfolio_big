"use strict";
(self["webpackChunkglivera_webpack_template"] = self["webpackChunkglivera_webpack_template"] || []).push([["src_js_pages_ContactPage_js"],{

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

/***/ "./src/js/components/ContactSection.js":
/*!*********************************************!*\
  !*** ./src/js/components/ContactSection.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactSection)
/* harmony export */ });
/* harmony import */ var ScssComponents_contact_section_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ScssComponents/_contact_section.scss */ "./src/scss/components/_contact_section.scss");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var ContactSection = /*#__PURE__*/function () {
  function ContactSection() {
    _classCallCheck(this, ContactSection);
  }

  _createClass(ContactSection, [{
    key: "init",
    value: function init() {}
  }]);

  return ContactSection;
}();



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

/***/ "./src/js/pages/ContactPage.js":
/*!*************************************!*\
  !*** ./src/js/pages/ContactPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utils/constants */ "./src/js/utils/constants.js");
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils */ "./src/js/utils/index.js");
/* harmony import */ var _components_ContactSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContactSection */ "./src/js/components/ContactSection.js");
/* harmony import */ var _components_ContactPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContactPopup */ "./src/js/components/ContactPopup.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }






var ContactPage = /*#__PURE__*/function () {
  function ContactPage() {
    _classCallCheck(this, ContactPage);

    this.init = this.init.bind(this);
  }

  _createClass(ContactPage, [{
    key: "loadFunc",
    value: function loadFunc() {
      var contact = new _components_ContactSection__WEBPACK_IMPORTED_MODULE_2__["default"]();
      contact.init();
      var popup = new _components_ContactPopup__WEBPACK_IMPORTED_MODULE_3__["default"]();
      popup.init();
    }
  }, {
    key: "init",
    value: function init() {
      this.loadFunc();
    }
  }]);

  return ContactPage;
}();



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

/***/ "./src/scss/components/_contact_section.scss":
/*!***************************************************!*\
  !*** ./src/scss/components/_contact_section.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_js_pages_ContactPage_js.js.map