/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Metal+Mania:wght@300;400;600;700;800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Metal Mania\", sans-serif;\r\n}\r\n\r\n.todo-list {\r\n  box-sizing: border-box;\r\n  border-radius: 3px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  margin: 80px auto;\r\n  top: 0;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.todo-list .todo-list-header {\r\n  width: 100%;\r\n  height: 50px;\r\n  background: #fff;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.todo-list .todo-list-header h1 {\r\n  color: #545862;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  padding: 15px;\r\n  line-height: 20px;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .add-new-item {\r\n  width: 100%;\r\n  padding: 0;\r\n  background: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input {\r\n  width: 100%;\r\n  padding: 0 40px 0 1rem;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input::placeholder {\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n  font-weight: 300;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input:focus-visible {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-btn {\r\n  width: 40px;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: #c5c5c5;\r\n  transform: rotate(90deg);\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-btn:hover {\r\n  color: #545862;\r\n  transition: 0.3s;\r\n}\r\n\r\n.todo-list .todo-list-wrap {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item {\r\n  width: 100%;\r\n  padding: 0;\r\n  background: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 40px 0 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name .description-input {\r\n  width: 100%;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n}\r\n\r\n.todo-list\r\n  .todo-list-wrap\r\n  .list-item\r\n  .list-item-check-name\r\n  .description-input:focus-visible {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name .check-item {\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 2px;\r\n  border: 2px solid #c1c1c3;\r\n  background-color: transparent;\r\n  outline: none;\r\n  margin-right: 16px;\r\n  cursor: pointer;\r\n  margin-top: 1px;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .move-item {\r\n  width: 40px;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: #c5c5c5;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: move;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .move-item:hover {\r\n  cursor: alias;\r\n  color: #545862;\r\n  transition: 0.3s;\r\n}\r\n\r\n.todo-list .clear-all {\r\n  background-color: #f6f6f6;\r\n  width: 100%;\r\n  height: 50px;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  color: #545862;\r\n  font-weight: 300;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-list .clear-all:hover {\r\n  color: #000;\r\n  text-decoration: underline;\r\n  transition: 0.3s;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"AAEA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;EAClB,yCAAyC;EACzC,iBAAiB;EACjB,MAAM;EACN,gBAAgB;EAChB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,4CAA4C;AAC9C;;AAEA;EACE,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,4CAA4C;EAC5C,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,WAAW;EACX,sBAAsB;EACtB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,+CAA+C;EAC/C,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,wBAAwB;EACxB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,iBAAiB;EACjB,4CAA4C;EAC5C,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,+CAA+C;AACjD;;AAEA;;;;;EAKE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;EACzB,6BAA6B;EAC7B,aAAa;EACb,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,aAAa;EACb,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,0BAA0B;EAC1B,gBAAgB;AAClB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Metal+Mania:wght@300;400;600;700;800&display=swap\");\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: \"Metal Mania\", sans-serif;\r\n}\r\n\r\n.todo-list {\r\n  box-sizing: border-box;\r\n  border-radius: 3px;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n  margin: 80px auto;\r\n  top: 0;\r\n  max-width: 500px;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  overflow: hidden;\r\n}\r\n\r\n.todo-list .todo-list-header {\r\n  width: 100%;\r\n  height: 50px;\r\n  background: #fff;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n.todo-list .todo-list-header h1 {\r\n  color: #545862;\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  padding: 15px;\r\n  line-height: 20px;\r\n  margin: 0;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .add-new-item {\r\n  width: 100%;\r\n  padding: 0;\r\n  background: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input {\r\n  width: 100%;\r\n  padding: 0 40px 0 1rem;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input::placeholder {\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n  font-weight: 300;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-input:focus-visible {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-btn {\r\n  width: 40px;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: #c5c5c5;\r\n  transform: rotate(90deg);\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-list .add-new-item .add-new-btn:hover {\r\n  color: #545862;\r\n  transition: 0.3s;\r\n}\r\n\r\n.todo-list .todo-list-wrap {\r\n  list-style: none;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item {\r\n  width: 100%;\r\n  padding: 0;\r\n  background: white;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.08);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 0 40px 0 1rem;\r\n  width: 100%;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name .description-input {\r\n  width: 100%;\r\n  line-height: 50px;\r\n  height: 50px;\r\n  border: none;\r\n  font-weight: 300;\r\n  font-size: 15px;\r\n  font-family: \"Open Sans\", sans-serif !important;\r\n}\r\n\r\n.todo-list\r\n  .todo-list-wrap\r\n  .list-item\r\n  .list-item-check-name\r\n  .description-input:focus-visible {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .list-item-check-name .check-item {\r\n  width: 16px;\r\n  height: 16px;\r\n  border-radius: 2px;\r\n  border: 2px solid #c1c1c3;\r\n  background-color: transparent;\r\n  outline: none;\r\n  margin-right: 16px;\r\n  cursor: pointer;\r\n  margin-top: 1px;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .move-item {\r\n  width: 40px;\r\n  height: 50px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 12px;\r\n  color: #c5c5c5;\r\n  background: transparent;\r\n  border: none;\r\n  outline: none;\r\n  cursor: move;\r\n}\r\n\r\n.todo-list .todo-list-wrap .list-item .move-item:hover {\r\n  cursor: alias;\r\n  color: #545862;\r\n  transition: 0.3s;\r\n}\r\n\r\n.todo-list .clear-all {\r\n  background-color: #f6f6f6;\r\n  width: 100%;\r\n  height: 50px;\r\n  text-align: center;\r\n  font-size: 15px;\r\n  color: #545862;\r\n  font-weight: 300;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.todo-list .clear-all:hover {\r\n  color: #000;\r\n  text-decoration: underline;\r\n  transition: 0.3s;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/addRemove.js":
/*!**************************!*\
  !*** ./src/addRemove.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateInput": () => (/* binding */ updateInput),
/* harmony export */   "removeItem": () => (/* binding */ removeItem),
/* harmony export */   "addNewItem": () => (/* binding */ addNewItem),
/* harmony export */   "clearAll": () => (/* binding */ clearAll)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dragOverAndDrop.js */ "./src/dragOverAndDrop.js");
/* harmony import */ var _dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkItem_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkItem.js */ "./src/checkItem.js");
/* harmony import */ var _inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inputsFocus.js */ "./src/inputsFocus.js");
/* eslint-disable import/no-cycle */





const listWrap = document.querySelector('.todo-list-wrap');
const addNewInput = document.querySelector('.add-new-input');
// UPDATE ITEM
const updateInput = (item) => {
  const newArr = JSON.parse(localStorage.getItem('myToDos'));
  const updateItem = newArr.filter((item2) => item2.index === Number(item.dataset.key))[0];
  const indexOfNewItem = newArr.indexOf(updateItem);
  newArr[indexOfNewItem].description = item.value;
  localStorage.setItem('myToDos', JSON.stringify(newArr));
};
// REMOVE ITEM
const removeItem = (item, arr, container) => {
  const newArr = JSON.parse(localStorage.getItem('myToDos'));
  const removedItem = newArr.filter((item2) => item2.index === Number(item.dataset.key))[0];
  const removedIndex = newArr.indexOf(removedItem);
  newArr.splice(removedIndex, 1);
  container.innerHTML = '';
  localStorage.setItem('myToDos', JSON.stringify(newArr));
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setToDoArr)(newArr);
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.implementToDoItems)(newArr);
  const toDoDescriptionsInputs = [...document.querySelectorAll('.list-item .description-input')];
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusin', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusout', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('input', () => updateInput(item)));
  arr = [...document.querySelectorAll('.list-item')];
  arr.forEach((item) => {
    item.addEventListener('mouseover', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOver)(event, item));
    item.addEventListener('mouseout', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOut)(event, item));
    item.addEventListener('dragstart', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragStart)(event, item));
    item.addEventListener('drop', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragEnd)(event, item, arr, listWrap));
  });
  const removeBtns = document.querySelectorAll('.remove-item');
  removeBtns.forEach((item) => item.addEventListener('click', () => removeItem(item, arr, container)));
  const toDoChecksInputs = [...document.querySelectorAll('.list-item .check-item')];
  toDoChecksInputs.forEach((item) => item.addEventListener('change', () => (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(item)));
};
// ADD NEW ITEM
const addNewItem = (event, arr, items, container) => {
  event.preventDefault();
  const description = addNewInput.value;
  const index = arr.length + 1;
  const newItem = document.createElement('li');
  newItem.classList.add('list-item');
  newItem.dataset.key = index;
  newItem.draggable = true;
  newItem.innerHTML = `<div class="list-item-check-name">
                          <input type="checkbox" class="check-item" data-key="${index}">
                          <input class="description-input" type="text" value="${description}">
                        </div>
                        <button type="button" data-key="${index}" class="move-item"><i class="fas fa-ellipsis-v"></i></button>
                        <button type="button" data-key="${index}" class="remove-item"><i class="far fa-trash-alt"></i></button>`;
  container.insertBefore(newItem, container.children[0]);
  const newArr = [];
  items = [...document.querySelectorAll('.list-item')];
  items.forEach((item2, i) => {
    const description = item2.querySelector('.description-input').value;
    let completed = true;
    if (item2.classList.contains('completed-item')) {
      completed = true;
    } else {
      completed = false;
    }
    const index = i + 1;
    newArr.push({ description, completed, index });
  });
  container.innerHTML = '';
  localStorage.setItem('myToDos', JSON.stringify(newArr));
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setToDoArr)(newArr);
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.implementToDoItems)(newArr);
  const toDoDescriptionsInputs = [...document.querySelectorAll('.list-item .description-input')];
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusin', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusout', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('input', () => updateInput(item)));
  arr = [...document.querySelectorAll('.list-item')];
  arr.forEach((item) => {
    item.addEventListener('mouseover', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOver)(event, item));
    item.addEventListener('mouseout', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOut)(event, item));
    item.addEventListener('dragstart', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragStart)(event, item));
    item.addEventListener('drop', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragEnd)(event, item, arr, listWrap));
  });
  const removeBtns = document.querySelectorAll('.remove-item');
  removeBtns.forEach((item) => item.addEventListener('click', () => removeItem(item, arr, container)));
  const toDoChecksInputs = [...document.querySelectorAll('.list-item .check-item')];
  toDoChecksInputs.forEach((item) => item.addEventListener('change', () => (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(item)));
  addNewInput.value = '';
};
// CLEAR ALL
const clearAll = (container) => {
  let newArr = JSON.parse(localStorage.getItem('myToDos'));
  newArr = newArr.filter((item) => item.completed === false);
  const newSorteredArr = [];
  newArr.forEach((item, i) => {
    const { description, completed } = item;
    const index = i + 1;
    newSorteredArr.push({ description, completed, index });
  });
  container.innerHTML = '';
  localStorage.setItem('myToDos', JSON.stringify(newSorteredArr));
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setToDoArr)(newSorteredArr);
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.implementToDoItems)(newSorteredArr);
  const toDoDescriptionsInputs = [...document.querySelectorAll('.list-item .description-input')];
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusin', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusout', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_3__["default"])(event, item)));
  toDoDescriptionsInputs.forEach((item) => item.addEventListener('input', () => updateInput(item)));
  const arr = [...document.querySelectorAll('.list-item')];
  arr.forEach((item) => {
    item.addEventListener('mouseover', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOver)(event, item));
    item.addEventListener('mouseout', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onMouseOut)(event, item));
    item.addEventListener('dragstart', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragStart)(event, item));
    item.addEventListener('drop', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_1__.onDragEnd)(event, item, arr, listWrap));
  });

  const removeBtns = document.querySelectorAll('.remove-item');
  removeBtns.forEach((item) => item.addEventListener('click', () => removeItem(item, arr, container)));
  const toDoChecksInputs = [...document.querySelectorAll('.list-item .check-item')];
  toDoChecksInputs.forEach((item) => item.addEventListener('change', () => (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_2__["default"])(item)));
};

/***/ }),

/***/ "./src/checkItem.js":
/*!**************************!*\
  !*** ./src/checkItem.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkItem = (btn) => {
    const newArr = JSON.parse(localStorage.getItem('myToDos'));
    const arrElement = newArr.filter((item) => item.index === Number(btn.dataset.key))[0];
    const indexOfArrElement = newArr.indexOf(arrElement);
    if (btn.checked) {
      btn.parentElement.parentElement.classList.add('completed-item');
      btn.parentElement.parentElement.style.backgroundColor = '#fff';
      newArr[indexOfArrElement].completed = true;
    } else {
      btn.parentElement.parentElement.classList.remove('completed-item');
      btn.parentElement.parentElement.style.backgroundColor = '#fff';
      newArr[indexOfArrElement].completed = false;
    }
    localStorage.setItem('myToDos', JSON.stringify(newArr));
  };
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkItem);

/***/ }),

/***/ "./src/dragOverAndDrop.js":
/*!********************************!*\
  !*** ./src/dragOverAndDrop.js ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setToDoArr": () => (/* binding */ setToDoArr),
/* harmony export */   "implementToDoItems": () => (/* binding */ implementToDoItems)
/* harmony export */ });
/* harmony import */ var _checkItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkItem.js */ "./src/checkItem.js");
/* harmony import */ var _inputsFocus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inputsFocus.js */ "./src/inputsFocus.js");
/* harmony import */ var _dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dragOverAndDrop.js */ "./src/dragOverAndDrop.js");
/* harmony import */ var _dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _addRemove_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addRemove.js */ "./src/addRemove.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* eslint-disable import/no-cycle */






// SET TODO ARR
let toDoArr = [];
const setToDoArr = () => {
  if (JSON.parse(localStorage.getItem('myToDos'))) {
    toDoArr = JSON.parse(localStorage.getItem('myToDos'));
  } else {
    toDoArr = [];
  }
};
setToDoArr();
const listWrap = document.querySelector('.todo-list-wrap');
// IMPLEMENT TO DO ITEMS TO SCREEN
const implementToDoItems = (arr) => {
  arr.forEach((item) => {
    let isCompleted = '';
    let completedClass = '';
    if (item.completed) {
      isCompleted = 'checked';
      completedClass = 'completed-item';
    }
    listWrap.innerHTML += `<li class="list-item ${completedClass}" data-key="${item.index}" draggable="true">
      <div class="list-item-check-name">
        <input type="checkbox" class="check-item" data-key="${item.index}" ${isCompleted}>
  <input class="description-input" data-key="${item.index}" type="text" value="${item.description}">
      </div>
      <button type="button" data-key="${item.index}" class="move-item"><i class="fas fa-ellipsis-v"></i></button>
      <button type="button" data-key="${item.index}" class="remove-item"><i class="far fa-trash-alt"></i></button>
    </li>`;
  });
};
implementToDoItems(toDoArr);
// CHECK ITEMS
const toDoChecksInputs = [...document.querySelectorAll('.list-item .check-item')];
toDoChecksInputs.forEach((item) => item.addEventListener('change', () => (0,_checkItem_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item)));
// FOCUS ITEMS
const toDoDescriptionsInputs = [...document.querySelectorAll('.list-item .description-input')];
toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusin', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event, item)));
toDoDescriptionsInputs.forEach((item) => item.addEventListener('focusout', (event) => (0,_inputsFocus_js__WEBPACK_IMPORTED_MODULE_1__["default"])(event, item)));
// DRAG AND DROP FUNCTIONS
const toDoItems = [...document.querySelectorAll('.list-item')];
toDoItems.forEach((item) => {
  item.addEventListener('mouseover', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__.onMouseOver)(event, item));
  item.addEventListener('mouseout', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__.onMouseOut)(event, item));
  item.addEventListener('dragstart', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__.onDragStart)(event, item));
  item.addEventListener('drop', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__.onDragEnd)(event, item, toDoItems, listWrap));
});
listWrap.addEventListener('dragover', (event) => (0,_dragOverAndDrop_js__WEBPACK_IMPORTED_MODULE_2__.onDragOver)(event, listWrap));
// ADD ITEM
const addNewButton = document.querySelector('.add-new-btn');
addNewButton.addEventListener('click', (event) => (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.addNewItem)(event, toDoArr, toDoItems, listWrap));
// CLEAR ALL
const clearAllBtn = document.querySelector('.clear-all');
clearAllBtn.addEventListener('click', () => (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.clearAll)(listWrap));
// UPDATE ITEMS
toDoDescriptionsInputs.forEach((item) => item.addEventListener('input', () => (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.updateInput)(item)));
// REMOVE ITEM
const removeBtns = document.querySelectorAll('.remove-item');
removeBtns.forEach((item) => item.addEventListener('click', () => (0,_addRemove_js__WEBPACK_IMPORTED_MODULE_3__.removeItem)(item, toDoArr, listWrap)));


/***/ }),

/***/ "./src/inputsFocus.js":
/*!****************************!*\
  !*** ./src/inputsFocus.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const descriptionOnFocus = (event, item) => {
    if (event.type === 'focusin') {
      item.parentElement.parentElement.classList.add('uncompleted-item');
      item.parentElement.parentElement.style.backgroundColor = '#fffeca';
      item.parentElement.nextElementSibling.style.display = 'none';
      [...item.parentElement.parentElement.childNodes][5].style.display = 'flex';
    } else if (event.type === 'focusout') {
      item.parentElement.parentElement.classList.remove('uncompleted-item');
      item.parentElement.parentElement.style.backgroundColor = '#fff';
      setTimeout(() => {
        [...item.parentElement.parentElement.childNodes][5].style.display = 'none';
        item.parentElement.nextElementSibling.style.display = 'flex';
      }, 1000);
    }
  };
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (descriptionOnFocus);

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVU7QUFDekQsZ0RBQWdELGdFQUFXO0FBQzNELDJDQUEyQyw4REFBUztBQUNwRCxDQUFDO0FBQ0QsaURBQWlELCtEQUFVO0FBQzNEO0FBQ0E7QUFDQSxrREFBa0QseURBQVU7QUFDNUQ7QUFDQTtBQUNBLDRDQUE0Qyx1REFBUTtBQUNwRDtBQUNBLDhFQUE4RSwwREFBVztBQUN6RjtBQUNBO0FBQ0Esa0VBQWtFLHlEQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsRUFBRSxpRUFBZSxrQkFBa0I7Ozs7OztVQ2ZuQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmNzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5jc3M/Y2ZlNCIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2FkZFJlbW92ZS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jaGVja0l0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvZHJhZ092ZXJBbmREcm9wLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2lucHV0c0ZvY3VzLmpzIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWV0YWwrTWFuaWE6d2dodEAzMDA7NDAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXRhbCBNYW5pYVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3Qge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgbWFyZ2luOiA4MHB4IGF1dG87XFxyXFxuICB0b3A6IDA7XFxyXFxuICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC1oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC1oZWFkZXIgaDEge1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLmFkZC1uZXctaXRlbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLmFkZC1uZXctaXRlbSAuYWRkLW5ldy1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgNDBweCAwIDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLmFkZC1uZXctaXRlbSAuYWRkLW5ldy1pbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctaW5wdXQ6Zm9jdXMtdmlzaWJsZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctYnRuIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiAjYzVjNWM1O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctYnRuOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC50b2RvLWxpc3Qtd3JhcCAubGlzdC1pdGVtIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wOCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAgLmxpc3QtaXRlbSAubGlzdC1pdGVtLWNoZWNrLW5hbWUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHggMCAxcmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1jaGVjay1uYW1lIC5kZXNjcmlwdGlvbi1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0XFxyXFxuICAudG9kby1saXN0LXdyYXBcXHJcXG4gIC5saXN0LWl0ZW1cXHJcXG4gIC5saXN0LWl0ZW0tY2hlY2stbmFtZVxcclxcbiAgLmRlc2NyaXB0aW9uLWlucHV0OmZvY3VzLXZpc2libGUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAgLmxpc3QtaXRlbSAubGlzdC1pdGVtLWNoZWNrLW5hbWUgLmNoZWNrLWl0ZW0ge1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxyXFxuICBib3JkZXI6IDJweCBzb2xpZCAjYzFjMWMzO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC50b2RvLWxpc3Qtd3JhcCAubGlzdC1pdGVtIC5tb3ZlLWl0ZW0ge1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgY29sb3I6ICNjNWM1YzU7XFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLm1vdmUtaXRlbTpob3ZlciB7XFxyXFxuICBjdXJzb3I6IGFsaWFzO1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5jbGVhci1hbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgY29sb3I6ICM1NDU4NjI7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAuY2xlYXItYWxsOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDAwO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxyXFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsTUFBTTtFQUNOLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsK0NBQStDO0VBQy9DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLCtDQUErQztBQUNqRDs7QUFFQTs7Ozs7RUFLRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1ldGFsK01hbmlhOndnaHRAMzAwOzQwMDs2MDA7NzAwOzgwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWV0YWwgTWFuaWFcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gIG1hcmdpbjogODBweCBhdXRvO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC50b2RvLWxpc3QtaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgYmFja2dyb3VuZDogI2ZmZjtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC50b2RvLWxpc3QtaGVhZGVyIGgxIHtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIHBhZGRpbmc6IDE1cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA4KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHggMCAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC5hZGQtbmV3LWl0ZW0gLmFkZC1uZXctaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAuYWRkLW5ldy1pdGVtIC5hZGQtbmV3LWlucHV0OmZvY3VzLXZpc2libGUge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAuYWRkLW5ldy1pdGVtIC5hZGQtbmV3LWJ0biB7XFxyXFxuICB3aWR0aDogNDBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBjb2xvcjogI2M1YzVjNTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAuYWRkLW5ldy1pdGVtIC5hZGQtbmV3LWJ0bjpob3ZlciB7XFxyXFxuICBjb2xvcjogIzU0NTg2MjtcXHJcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAgLmxpc3QtaXRlbSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1jaGVjay1uYW1lIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMCA0MHB4IDAgMXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC50b2RvLWxpc3Qtd3JhcCAubGlzdC1pdGVtIC5saXN0LWl0ZW0tY2hlY2stbmFtZSAuZGVzY3JpcHRpb24taW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBsaW5lLWhlaWdodDogNTBweDtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIk9wZW4gU2Fuc1xcXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdFxcclxcbiAgLnRvZG8tbGlzdC13cmFwXFxyXFxuICAubGlzdC1pdGVtXFxyXFxuICAubGlzdC1pdGVtLWNoZWNrLW5hbWVcXHJcXG4gIC5kZXNjcmlwdGlvbi1pbnB1dDpmb2N1cy12aXNpYmxlIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLnRvZG8tbGlzdC13cmFwIC5saXN0LWl0ZW0gLmxpc3QtaXRlbS1jaGVjay1uYW1lIC5jaGVjay1pdGVtIHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiAxNnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcclxcbiAgYm9yZGVyOiAycHggc29saWQgI2MxYzFjMztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG1hcmdpbi10b3A6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1saXN0LXdyYXAgLmxpc3QtaXRlbSAubW92ZS1pdGVtIHtcXHJcXG4gIHdpZHRoOiA0MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGNvbG9yOiAjYzVjNWM1O1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IC50b2RvLWxpc3Qtd3JhcCAubGlzdC1pdGVtIC5tb3ZlLWl0ZW06aG92ZXIge1xcclxcbiAgY3Vyc29yOiBhbGlhcztcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAuY2xlYXItYWxsIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGNvbG9yOiAjNTQ1ODYyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWxpc3QgLmNsZWFyLWFsbDpob3ZlciB7XFxyXFxuICBjb2xvcjogIzAwMDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IHsgaW1wbGVtZW50VG9Eb0l0ZW1zLCBzZXRUb0RvQXJyIH0gZnJvbSAnLi9pbmRleC5qcyc7XHJcbmltcG9ydCB7XHJcbiAgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXQsIG9uRHJhZ1N0YXJ0LCBvbkRyYWdFbmQsXHJcbn0gZnJvbSAnLi9kcmFnT3ZlckFuZERyb3AuanMnO1xyXG5pbXBvcnQgY2hlY2tJdGVtIGZyb20gJy4vY2hlY2tJdGVtLmpzJztcclxuaW1wb3J0IGRlc2NyaXB0aW9uT25Gb2N1cyBmcm9tICcuL2lucHV0c0ZvY3VzLmpzJztcclxuXHJcbmNvbnN0IGxpc3RXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC13cmFwJyk7XHJcbmNvbnN0IGFkZE5ld0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1uZXctaW5wdXQnKTtcclxuLy8gVVBEQVRFIElURU1cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZUlucHV0ID0gKGl0ZW0pID0+IHtcclxuICBjb25zdCBuZXdBcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRvRG9zJykpO1xyXG4gIGNvbnN0IHVwZGF0ZUl0ZW0gPSBuZXdBcnIuZmlsdGVyKChpdGVtMikgPT4gaXRlbTIuaW5kZXggPT09IE51bWJlcihpdGVtLmRhdGFzZXQua2V5KSlbMF07XHJcbiAgY29uc3QgaW5kZXhPZk5ld0l0ZW0gPSBuZXdBcnIuaW5kZXhPZih1cGRhdGVJdGVtKTtcclxuICBuZXdBcnJbaW5kZXhPZk5ld0l0ZW1dLmRlc2NyaXB0aW9uID0gaXRlbS52YWx1ZTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb0RvcycsIEpTT04uc3RyaW5naWZ5KG5ld0FycikpO1xyXG59O1xyXG4vLyBSRU1PVkUgSVRFTVxyXG5leHBvcnQgY29uc3QgcmVtb3ZlSXRlbSA9IChpdGVtLCBhcnIsIGNvbnRhaW5lcikgPT4ge1xyXG4gIGNvbnN0IG5ld0FyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9Eb3MnKSk7XHJcbiAgY29uc3QgcmVtb3ZlZEl0ZW0gPSBuZXdBcnIuZmlsdGVyKChpdGVtMikgPT4gaXRlbTIuaW5kZXggPT09IE51bWJlcihpdGVtLmRhdGFzZXQua2V5KSlbMF07XHJcbiAgY29uc3QgcmVtb3ZlZEluZGV4ID0gbmV3QXJyLmluZGV4T2YocmVtb3ZlZEl0ZW0pO1xyXG4gIG5ld0Fyci5zcGxpY2UocmVtb3ZlZEluZGV4LCAxKTtcclxuICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ215VG9Eb3MnLCBKU09OLnN0cmluZ2lmeShuZXdBcnIpKTtcclxuICBzZXRUb0RvQXJyKG5ld0Fycik7XHJcbiAgaW1wbGVtZW50VG9Eb0l0ZW1zKG5ld0Fycik7XHJcbiAgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uc0lucHV0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtIC5kZXNjcmlwdGlvbi1pbnB1dCcpXTtcclxuICB0b0RvRGVzY3JpcHRpb25zSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIChldmVudCkgPT4gZGVzY3JpcHRpb25PbkZvY3VzKGV2ZW50LCBpdGVtKSkpO1xyXG4gIHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChldmVudCkgPT4gZGVzY3JpcHRpb25PbkZvY3VzKGV2ZW50LCBpdGVtKSkpO1xyXG4gIHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHVwZGF0ZUlucHV0KGl0ZW0pKSk7XHJcbiAgYXJyID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWl0ZW0nKV07XHJcbiAgYXJyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGV2ZW50KSA9PiBvbk1vdXNlT3ZlcihldmVudCwgaXRlbSkpO1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChldmVudCkgPT4gb25Nb3VzZU91dChldmVudCwgaXRlbSkpO1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IG9uRHJhZ1N0YXJ0KGV2ZW50LCBpdGVtKSk7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCAoZXZlbnQpID0+IG9uRHJhZ0VuZChldmVudCwgaXRlbSwgYXJyLCBsaXN0V3JhcCkpO1xyXG4gIH0pO1xyXG4gIGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWl0ZW0nKTtcclxuICByZW1vdmVCdG5zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW1vdmVJdGVtKGl0ZW0sIGFyciwgY29udGFpbmVyKSkpO1xyXG4gIGNvbnN0IHRvRG9DaGVja3NJbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbSAuY2hlY2staXRlbScpXTtcclxuICB0b0RvQ2hlY2tzSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gY2hlY2tJdGVtKGl0ZW0pKSk7XHJcbn07XHJcbi8vIEFERCBORVcgSVRFTVxyXG5leHBvcnQgY29uc3QgYWRkTmV3SXRlbSA9IChldmVudCwgYXJyLCBpdGVtcywgY29udGFpbmVyKSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGFkZE5ld0lucHV0LnZhbHVlO1xyXG4gIGNvbnN0IGluZGV4ID0gYXJyLmxlbmd0aCArIDE7XHJcbiAgY29uc3QgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgbmV3SXRlbS5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcclxuICBuZXdJdGVtLmRhdGFzZXQua2V5ID0gaW5kZXg7XHJcbiAgbmV3SXRlbS5kcmFnZ2FibGUgPSB0cnVlO1xyXG4gIG5ld0l0ZW0uaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW0tY2hlY2stbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrLWl0ZW1cIiBkYXRhLWtleT1cIiR7aW5kZXh9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZGVzY3JpcHRpb24taW5wdXRcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJHtkZXNjcmlwdGlvbn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEta2V5PVwiJHtpbmRleH1cIiBjbGFzcz1cIm1vdmUtaXRlbVwiPjxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLXZcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEta2V5PVwiJHtpbmRleH1cIiBjbGFzcz1cInJlbW92ZS1pdGVtXCI+PGkgY2xhc3M9XCJmYXIgZmEtdHJhc2gtYWx0XCI+PC9pPjwvYnV0dG9uPmA7XHJcbiAgY29udGFpbmVyLmluc2VydEJlZm9yZShuZXdJdGVtLCBjb250YWluZXIuY2hpbGRyZW5bMF0pO1xyXG4gIGNvbnN0IG5ld0FyciA9IFtdO1xyXG4gIGl0ZW1zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWl0ZW0nKV07XHJcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbTIsIGkpID0+IHtcclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaXRlbTIucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uLWlucHV0JykudmFsdWU7XHJcbiAgICBsZXQgY29tcGxldGVkID0gdHJ1ZTtcclxuICAgIGlmIChpdGVtMi5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbXBsZXRlZC1pdGVtJykpIHtcclxuICAgICAgY29tcGxldGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgaW5kZXggPSBpICsgMTtcclxuICAgIG5ld0Fyci5wdXNoKHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCwgaW5kZXggfSk7XHJcbiAgfSk7XHJcbiAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdteVRvRG9zJywgSlNPTi5zdHJpbmdpZnkobmV3QXJyKSk7XHJcbiAgc2V0VG9Eb0FycihuZXdBcnIpO1xyXG4gIGltcGxlbWVudFRvRG9JdGVtcyhuZXdBcnIpO1xyXG4gIGNvbnN0IHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbSAuZGVzY3JpcHRpb24taW5wdXQnKV07XHJcbiAgdG9Eb0Rlc2NyaXB0aW9uc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCAoZXZlbnQpID0+IGRlc2NyaXB0aW9uT25Gb2N1cyhldmVudCwgaXRlbSkpKTtcclxuICB0b0RvRGVzY3JpcHRpb25zSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoZXZlbnQpID0+IGRlc2NyaXB0aW9uT25Gb2N1cyhldmVudCwgaXRlbSkpKTtcclxuICB0b0RvRGVzY3JpcHRpb25zSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB1cGRhdGVJbnB1dChpdGVtKSkpO1xyXG4gIGFyciA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtJyldO1xyXG4gIGFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudCkgPT4gb25Nb3VzZU92ZXIoZXZlbnQsIGl0ZW0pKTtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZXZlbnQpID0+IG9uTW91c2VPdXQoZXZlbnQsIGl0ZW0pKTtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgKGV2ZW50KSA9PiBvbkRyYWdTdGFydChldmVudCwgaXRlbSkpO1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiBvbkRyYWdFbmQoZXZlbnQsIGl0ZW0sIGFyciwgbGlzdFdyYXApKTtcclxuICB9KTtcclxuICBjb25zdCByZW1vdmVCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZS1pdGVtJyk7XHJcbiAgcmVtb3ZlQnRucy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVtb3ZlSXRlbShpdGVtLCBhcnIsIGNvbnRhaW5lcikpKTtcclxuICBjb25zdCB0b0RvQ2hlY2tzSW5wdXRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWl0ZW0gLmNoZWNrLWl0ZW0nKV07XHJcbiAgdG9Eb0NoZWNrc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGNoZWNrSXRlbShpdGVtKSkpO1xyXG4gIGFkZE5ld0lucHV0LnZhbHVlID0gJyc7XHJcbn07XHJcbi8vIENMRUFSIEFMTFxyXG5leHBvcnQgY29uc3QgY2xlYXJBbGwgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgbGV0IG5ld0FyciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9Eb3MnKSk7XHJcbiAgbmV3QXJyID0gbmV3QXJyLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgPT09IGZhbHNlKTtcclxuICBjb25zdCBuZXdTb3J0ZXJlZEFyciA9IFtdO1xyXG4gIG5ld0Fyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQgfSA9IGl0ZW07XHJcbiAgICBjb25zdCBpbmRleCA9IGkgKyAxO1xyXG4gICAgbmV3U29ydGVyZWRBcnIucHVzaCh7IGRlc2NyaXB0aW9uLCBjb21wbGV0ZWQsIGluZGV4IH0pO1xyXG4gIH0pO1xyXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb0RvcycsIEpTT04uc3RyaW5naWZ5KG5ld1NvcnRlcmVkQXJyKSk7XHJcbiAgc2V0VG9Eb0FycihuZXdTb3J0ZXJlZEFycik7XHJcbiAgaW1wbGVtZW50VG9Eb0l0ZW1zKG5ld1NvcnRlcmVkQXJyKTtcclxuICBjb25zdCB0b0RvRGVzY3JpcHRpb25zSW5wdXRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0LWl0ZW0gLmRlc2NyaXB0aW9uLWlucHV0JyldO1xyXG4gIHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2ZW50KSA9PiBkZXNjcmlwdGlvbk9uRm9jdXMoZXZlbnQsIGl0ZW0pKSk7XHJcbiAgdG9Eb0Rlc2NyaXB0aW9uc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKGV2ZW50KSA9PiBkZXNjcmlwdGlvbk9uRm9jdXMoZXZlbnQsIGl0ZW0pKSk7XHJcbiAgdG9Eb0Rlc2NyaXB0aW9uc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdXBkYXRlSW5wdXQoaXRlbSkpKTtcclxuICBjb25zdCBhcnIgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpXTtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZXZlbnQpID0+IG9uTW91c2VPdmVyKGV2ZW50LCBpdGVtKSk7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiBvbk1vdXNlT3V0KGV2ZW50LCBpdGVtKSk7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldmVudCkgPT4gb25EcmFnU3RhcnQoZXZlbnQsIGl0ZW0pKTtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudCkgPT4gb25EcmFnRW5kKGV2ZW50LCBpdGVtLCBhcnIsIGxpc3RXcmFwKSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJlbW92ZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWl0ZW0nKTtcclxuICByZW1vdmVCdG5zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW1vdmVJdGVtKGl0ZW0sIGFyciwgY29udGFpbmVyKSkpO1xyXG4gIGNvbnN0IHRvRG9DaGVja3NJbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbSAuY2hlY2staXRlbScpXTtcclxuICB0b0RvQ2hlY2tzSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gY2hlY2tJdGVtKGl0ZW0pKSk7XHJcbn07IiwiY29uc3QgY2hlY2tJdGVtID0gKGJ0bikgPT4ge1xyXG4gICAgY29uc3QgbmV3QXJyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXlUb0RvcycpKTtcclxuICAgIGNvbnN0IGFyckVsZW1lbnQgPSBuZXdBcnIuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ID09PSBOdW1iZXIoYnRuLmRhdGFzZXQua2V5KSlbMF07XHJcbiAgICBjb25zdCBpbmRleE9mQXJyRWxlbWVudCA9IG5ld0Fyci5pbmRleE9mKGFyckVsZW1lbnQpO1xyXG4gICAgaWYgKGJ0bi5jaGVja2VkKSB7XHJcbiAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGVkLWl0ZW0nKTtcclxuICAgICAgYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcbiAgICAgIG5ld0FycltpbmRleE9mQXJyRWxlbWVudF0uY29tcGxldGVkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJ0bi5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGVkLWl0ZW0nKTtcclxuICAgICAgYnRuLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcbiAgICAgIG5ld0FycltpbmRleE9mQXJyRWxlbWVudF0uY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbXlUb0RvcycsIEpTT04uc3RyaW5naWZ5KG5ld0FycikpO1xyXG4gIH07XHJcbiAgZXhwb3J0IGRlZmF1bHQgY2hlY2tJdGVtOyIsIiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgY2hlY2tJdGVtIGZyb20gJy4vY2hlY2tJdGVtLmpzJztcclxuaW1wb3J0IGRlc2NyaXB0aW9uT25Gb2N1cyBmcm9tICcuL2lucHV0c0ZvY3VzLmpzJztcclxuaW1wb3J0IHtcclxuICBvbk1vdXNlT3Zlciwgb25Nb3VzZU91dCwgb25EcmFnU3RhcnQsIG9uRHJhZ0VuZCwgb25EcmFnT3ZlcixcclxufSBmcm9tICcuL2RyYWdPdmVyQW5kRHJvcC5qcyc7XHJcbmltcG9ydCB7XHJcbiAgYWRkTmV3SXRlbSwgY2xlYXJBbGwsIHVwZGF0ZUlucHV0LCByZW1vdmVJdGVtLFxyXG59IGZyb20gJy4vYWRkUmVtb3ZlLmpzJztcclxuaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcblxyXG4vLyBTRVQgVE9ETyBBUlJcclxubGV0IHRvRG9BcnIgPSBbXTtcclxuZXhwb3J0IGNvbnN0IHNldFRvRG9BcnIgPSAoKSA9PiB7XHJcbiAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ215VG9Eb3MnKSkpIHtcclxuICAgIHRvRG9BcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdteVRvRG9zJykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b0RvQXJyID0gW107XHJcbiAgfVxyXG59O1xyXG5zZXRUb0RvQXJyKCk7XHJcbmNvbnN0IGxpc3RXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdC13cmFwJyk7XHJcbi8vIElNUExFTUVOVCBUTyBETyBJVEVNUyBUTyBTQ1JFRU5cclxuZXhwb3J0IGNvbnN0IGltcGxlbWVudFRvRG9JdGVtcyA9IChhcnIpID0+IHtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgbGV0IGlzQ29tcGxldGVkID0gJyc7XHJcbiAgICBsZXQgY29tcGxldGVkQ2xhc3MgPSAnJztcclxuICAgIGlmIChpdGVtLmNvbXBsZXRlZCkge1xyXG4gICAgICBpc0NvbXBsZXRlZCA9ICdjaGVja2VkJztcclxuICAgICAgY29tcGxldGVkQ2xhc3MgPSAnY29tcGxldGVkLWl0ZW0nO1xyXG4gICAgfVxyXG4gICAgbGlzdFdyYXAuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJsaXN0LWl0ZW0gJHtjb21wbGV0ZWRDbGFzc31cIiBkYXRhLWtleT1cIiR7aXRlbS5pbmRleH1cIiBkcmFnZ2FibGU9XCJ0cnVlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW0tY2hlY2stbmFtZVwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNoZWNrLWl0ZW1cIiBkYXRhLWtleT1cIiR7aXRlbS5pbmRleH1cIiAke2lzQ29tcGxldGVkfT5cclxuICA8aW5wdXQgY2xhc3M9XCJkZXNjcmlwdGlvbi1pbnB1dFwiIGRhdGEta2V5PVwiJHtpdGVtLmluZGV4fVwiIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9XCIke2l0ZW0uZGVzY3JpcHRpb259XCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWtleT1cIiR7aXRlbS5pbmRleH1cIiBjbGFzcz1cIm1vdmUtaXRlbVwiPjxpIGNsYXNzPVwiZmFzIGZhLWVsbGlwc2lzLXZcIj48L2k+PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEta2V5PVwiJHtpdGVtLmluZGV4fVwiIGNsYXNzPVwicmVtb3ZlLWl0ZW1cIj48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIj48L2k+PC9idXR0b24+XHJcbiAgICA8L2xpPmA7XHJcbiAgfSk7XHJcbn07XHJcbmltcGxlbWVudFRvRG9JdGVtcyh0b0RvQXJyKTtcclxuLy8gQ0hFQ0sgSVRFTVNcclxuY29uc3QgdG9Eb0NoZWNrc0lucHV0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1pdGVtIC5jaGVjay1pdGVtJyldO1xyXG50b0RvQ2hlY2tzSW5wdXRzLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gY2hlY2tJdGVtKGl0ZW0pKSk7XHJcbi8vIEZPQ1VTIElURU1TXHJcbmNvbnN0IHRvRG9EZXNjcmlwdGlvbnNJbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbSAuZGVzY3JpcHRpb24taW5wdXQnKV07XHJcbnRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgKGV2ZW50KSA9PiBkZXNjcmlwdGlvbk9uRm9jdXMoZXZlbnQsIGl0ZW0pKSk7XHJcbnRvRG9EZXNjcmlwdGlvbnNJbnB1dHMuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIChldmVudCkgPT4gZGVzY3JpcHRpb25PbkZvY3VzKGV2ZW50LCBpdGVtKSkpO1xyXG4vLyBEUkFHIEFORCBEUk9QIEZVTkNUSU9OU1xyXG5jb25zdCB0b0RvSXRlbXMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpc3QtaXRlbScpXTtcclxudG9Eb0l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChldmVudCkgPT4gb25Nb3VzZU92ZXIoZXZlbnQsIGl0ZW0pKTtcclxuICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGV2ZW50KSA9PiBvbk1vdXNlT3V0KGV2ZW50LCBpdGVtKSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXZlbnQpID0+IG9uRHJhZ1N0YXJ0KGV2ZW50LCBpdGVtKSk7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2ZW50KSA9PiBvbkRyYWdFbmQoZXZlbnQsIGl0ZW0sIHRvRG9JdGVtcywgbGlzdFdyYXApKTtcclxufSk7XHJcbmxpc3RXcmFwLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2ZW50KSA9PiBvbkRyYWdPdmVyKGV2ZW50LCBsaXN0V3JhcCkpO1xyXG4vLyBBREQgSVRFTVxyXG5jb25zdCBhZGROZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLW5ldy1idG4nKTtcclxuYWRkTmV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiBhZGROZXdJdGVtKGV2ZW50LCB0b0RvQXJyLCB0b0RvSXRlbXMsIGxpc3RXcmFwKSk7XHJcbi8vIENMRUFSIEFMTFxyXG5jb25zdCBjbGVhckFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1hbGwnKTtcclxuY2xlYXJBbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbGVhckFsbChsaXN0V3JhcCkpO1xyXG4vLyBVUERBVEUgSVRFTVNcclxudG9Eb0Rlc2NyaXB0aW9uc0lucHV0cy5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gdXBkYXRlSW5wdXQoaXRlbSkpKTtcclxuLy8gUkVNT1ZFIElURU1cclxuY29uc3QgcmVtb3ZlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtaXRlbScpO1xyXG5yZW1vdmVCdG5zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW1vdmVJdGVtKGl0ZW0sIHRvRG9BcnIsIGxpc3RXcmFwKSkpO1xyXG4iLCJjb25zdCBkZXNjcmlwdGlvbk9uRm9jdXMgPSAoZXZlbnQsIGl0ZW0pID0+IHtcclxuICAgIGlmIChldmVudC50eXBlID09PSAnZm9jdXNpbicpIHtcclxuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndW5jb21wbGV0ZWQtaXRlbScpO1xyXG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZmVjYSc7XHJcbiAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgWy4uLml0ZW0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkTm9kZXNdWzVdLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdmb2N1c291dCcpIHtcclxuICAgICAgaXRlbS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndW5jb21wbGV0ZWQtaXRlbScpO1xyXG4gICAgICBpdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2ZmZic7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIFsuLi5pdGVtLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZE5vZGVzXVs1XS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIGl0ZW0ucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBleHBvcnQgZGVmYXVsdCBkZXNjcmlwdGlvbk9uRm9jdXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9