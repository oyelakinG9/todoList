/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const Tasks = [\r\n    {\r\n      description: \"Do the list\",\r\n      completion: false,\r\n      index: 0,\r\n    },\r\n    {\r\n      description: \"Study hard before the class\",\r\n      completion: false,\r\n      index: 1,\r\n    },\r\n    {\r\n      description: \"Do the project\",\r\n      completion: false,\r\n      index: 2,\r\n    },\r\n  ];\r\n  \r\n  const workList = document.querySelector(\".todoList\");\r\n  \r\n  function chore() {\r\n    Tasks.forEach((task) => {\r\n      workList.innerHTML += `<li class=\"item-list\" data-key=\"${task.index}\">\r\n          <div class=\"checkList\">\r\n              <input type=\"checkbox\" name=\"checkbox\" id=\"checkbox\" data-key=\"${task.index}\">\r\n              <input type=\"text\" id=\"inputList\"  value=\"${task.description}\">\r\n              <button data-key=\"${task.index}\" class=\"move-item\"><i class=\"fas fa-ellipsis-v\"></i></button>\r\n          </div>\r\n      </li>`;\r\n    });\r\n  }\r\n  \r\n  chore();\r\n  \n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;