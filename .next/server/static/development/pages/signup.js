module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\jspar\\Downloads\\my-practice-project\\pages\\signup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SignUp = () => {
  const {
    0: userInfo,
    1: setUserInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    id: "",
    password: "",
    name: "",
    email: "",
    sex: "",
    age: "",
    errors: {
      id: "",
      password: "",
      name: "",
      email: "",
      age: ""
    }
  }); // the event callback function happens when input value changes

  const handleChangeInput = (name, value) => {
    setUserInfo(_objectSpread(_objectSpread({}, userInfo), {}, {
      [name]: value
    }));
  }; // check the validation of inputs in a form


  const validateInput = (name, value) => {
    let errors = userInfo.errors;
    let idRegx = RegExp(/^[a-z]+[a-z0-9]{5,19}$/g);
    let emailRegx = RegExp(/^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i);
    let nameRegx = RegExp(/^[가-힣]{1,4}$/); // 한글 이름

    switch (name) {
      case "id":
        errors.id = idRegx.test(value) ? "" : "Id must start with english letters and numbers and from 6 letters to 20 letters";
        break;

      case "password":
        errors.password = value.length < 8 ? "Password must be 8 characters long!" : "";
        break;

      case "name":
        errors.name = nameRegx.test(value) ? "" : "Name must be Korean letter and from 2 letters to 5 letters";
        break;

      case "email":
        errors.email = emailRegx.test(value) ? "" : "Email is not valid!";
        break;

      case "age":
        errors.age = value < 1 || value === null ? "Age must be more than 0." : "";
        break;

      default:
        break;
    }
  };

  const handleClick = e => {
    setUserInfo(_objectSpread(_objectSpread({}, userInfo), {}, {
      sex: e.target.value
    }));
  }; // the event callback function happens when clicks signup button


  const handleSubmit = () => {
    if (validateForm(userInfo.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }

    saveUserInfo(userInfo);
  };

  const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  const saveUserInfo = data => {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      url: "https://tutorial.team-everywhere.com/api/user",
      method: "post",
      data: data
    }).then(res => {
      console.log(res);
      localStorage.setItem("userInfo", JSON.stringify(res.data.result));
      console.log("Sign up Complete");
    }).catch(err => {
      console.log(err);
    });
  };

  return __jsx("div", {
    className: "wrapper signup-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "form signup-form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, "Sign up"), __jsx("p", {
    className: "subtitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, "Don't have an account? Let's go ahead and get you signed up.")), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }
  }, __jsx("form", {
    className: "signup-information",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "inputTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, "ID"), __jsx("input", {
    required: true,
    type: "text",
    className: "signup-input",
    id: "idInput",
    name: "id",
    onChange: e => {
      handleChangeInput(e.target.name, e.target.value);
      validateInput(e.target.name, e.target.value);
    },
    noValidate: true,
    autoComplete: "off",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "idInput",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 15
    }
  }, "ID"), userInfo.errors.id.length > 0 && __jsx("span", {
    className: "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 17
    }
  }, userInfo.errors.id)), __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "inputTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, "Password"), __jsx("input", {
    required: true,
    type: "password",
    className: "signup-input",
    id: "pwdInput",
    name: "password",
    onChange: e => {
      handleChangeInput(e.target.name, e.target.value);
      validateInput(e.target.name, e.target.value);
    },
    noValidate: true,
    autoComplete: "off",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "pwdInput",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }, "******"), userInfo.errors.password.length > 0 && __jsx("span", {
    className: "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, userInfo.errors.password)), __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "inputTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 15
    }
  }, "Username"), __jsx("input", {
    required: true,
    type: "text",
    className: "signup-input",
    id: "nameInput",
    name: "name",
    onChange: e => {
      handleChangeInput(e.target.name, e.target.value);
      validateInput(e.target.name, e.target.value);
    },
    noValidate: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "nameInput",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, "Username"), userInfo.errors.name.length > 0 && __jsx("span", {
    className: "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, userInfo.errors.name)), __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "inputTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }, "Email"), __jsx("input", {
    required: true,
    type: "email",
    className: "signup-input",
    id: "emailInput",
    name: "email",
    onChange: e => {
      handleChangeInput(e.target.name, e.target.value);
      validateInput(e.target.name, e.target.value);
    },
    noValidate: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "emailInput",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 15
    }
  }, "email@example.com"), userInfo.errors.email.length > 0 && __jsx("span", {
    className: "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, userInfo.errors.email)), __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "inputTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 15
    }
  }, "Gender"), __jsx("span", {
    className: "gender__male",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 15
    }
  }, __jsx("input", {
    type: "radio",
    name: "sex",
    value: "0",
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  }), " ", "Male"), __jsx("span", {
    className: "gender__female",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 15
    }
  }, __jsx("input", {
    type: "radio",
    name: "sex",
    value: "1",
    onClick: handleClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }), " ", "Female")), __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "inputTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 15
    }
  }, "Age"), __jsx("input", {
    required: true,
    type: "number",
    className: "signup-input",
    id: "ageInput",
    name: "age",
    onChange: e => {
      handleChangeInput(e.target.name, e.target.value);
      validateInput(e.target.name, e.target.value);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 15
    }
  }), __jsx("label", {
    htmlFor: "ageInput",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 15
    }
  }, "AGE"), userInfo.errors.age.length > 0 && __jsx("span", {
    className: "error",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 17
    }
  }, userInfo.errors.age)))), __jsx("footer", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "field",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "checkbox",
    name: "terms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }
  }), __jsx("label", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, "I agree to the Terms and Conditions")), __jsx("div", {
    className: "actions",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 11
    }
  }, __jsx("input", {
    type: "button",
    name: "commit",
    value: "Sign up",
    className: "btn signup-btn",
    onClick: () => {
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/signin");
      handleSubmit();
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SignUp);

/***/ }),

/***/ 6:
/*!*******************************!*\
  !*** multi ./pages/signup.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jspar\Downloads\my-practice-project\pages\signup.js */"./pages/signup.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvc2lnbnVwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlNpZ25VcCIsInVzZXJJbmZvIiwic2V0VXNlckluZm8iLCJ1c2VTdGF0ZSIsImlkIiwicGFzc3dvcmQiLCJuYW1lIiwiZW1haWwiLCJzZXgiLCJhZ2UiLCJlcnJvcnMiLCJoYW5kbGVDaGFuZ2VJbnB1dCIsInZhbHVlIiwidmFsaWRhdGVJbnB1dCIsImlkUmVneCIsIlJlZ0V4cCIsImVtYWlsUmVneCIsIm5hbWVSZWd4IiwidGVzdCIsImxlbmd0aCIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldCIsImhhbmRsZVN1Ym1pdCIsInZhbGlkYXRlRm9ybSIsImNvbnNvbGUiLCJpbmZvIiwiZXJyb3IiLCJzYXZlVXNlckluZm8iLCJ2YWxpZCIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJ2YWwiLCJkYXRhIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJ0aGVuIiwicmVzIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJjYXRjaCIsImVyciIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFF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REYsQ0FQRixFQTJJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxRQUFJLEVBQUMsVUFBWjtBQUF1QixRQUFJLEVBQUMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FGRixDQURGLEVBS0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFFBQUksRUFBQyxRQUZQO0FBR0UsU0FBSyxFQUFDLFNBSFI7QUFJRSxhQUFTLEVBQUMsZ0JBSlo7QUFLRSxXQUFPLEVBQUUsTUFBTTtBQUNidUMsd0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLFNBQVo7QUFDQTFCLGtCQUFZO0FBQ2IsS0FSSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FMRixDQTNJRixDQURGLENBREY7QUFrS0QsQ0EzUUQ7O0FBNlFldkIscUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IFNpZ25VcCA9ICgpID0+IHtcclxuICBjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBzZXg6IFwiXCIsXHJcbiAgICBhZ2U6IFwiXCIsXHJcbiAgICBlcnJvcnM6IHtcclxuICAgICAgaWQ6IFwiXCIsXHJcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICBlbWFpbDogXCJcIixcclxuICAgICAgYWdlOiBcIlwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgLy8gdGhlIGV2ZW50IGNhbGxiYWNrIGZ1bmN0aW9uIGhhcHBlbnMgd2hlbiBpbnB1dCB2YWx1ZSBjaGFuZ2VzXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlSW5wdXQgPSAobmFtZSwgdmFsdWUpID0+IHtcclxuICAgIHNldFVzZXJJbmZvKHtcclxuICAgICAgLi4udXNlckluZm8sXHJcbiAgICAgIFtuYW1lXTogdmFsdWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyBjaGVjayB0aGUgdmFsaWRhdGlvbiBvZiBpbnB1dHMgaW4gYSBmb3JtXHJcbiAgY29uc3QgdmFsaWRhdGVJbnB1dCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG4gICAgbGV0IGVycm9ycyA9IHVzZXJJbmZvLmVycm9ycztcclxuICAgIGxldCBpZFJlZ3ggPSBSZWdFeHAoL15bYS16XStbYS16MC05XXs1LDE5fSQvZyk7XHJcbiAgICBsZXQgZW1haWxSZWd4ID0gUmVnRXhwKFxyXG4gICAgICAvXigoW148PigpXFxbXFxdLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXS4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChbXjw+KClbXFxdLiw7Olxcc0BcIl0rXFwuKStbXjw+KClbXFxdLiw7Olxcc0BcIl17Mix9KSQvaVxyXG4gICAgKTtcclxuICAgIGxldCBuYW1lUmVneCA9IFJlZ0V4cCgvXlvqsIAt7Z6jXXsxLDR9JC8pOyAvLyDtlZzquIAg7J2066aEXHJcblxyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgIGNhc2UgXCJpZFwiOlxyXG4gICAgICAgIGVycm9ycy5pZCA9IGlkUmVneC50ZXN0KHZhbHVlKVxyXG4gICAgICAgICAgPyBcIlwiXHJcbiAgICAgICAgICA6IFwiSWQgbXVzdCBzdGFydCB3aXRoIGVuZ2xpc2ggbGV0dGVycyBhbmQgbnVtYmVycyBhbmQgZnJvbSA2IGxldHRlcnMgdG8gMjAgbGV0dGVyc1wiO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcInBhc3N3b3JkXCI6XHJcbiAgICAgICAgZXJyb3JzLnBhc3N3b3JkID1cclxuICAgICAgICAgIHZhbHVlLmxlbmd0aCA8IDggPyBcIlBhc3N3b3JkIG11c3QgYmUgOCBjaGFyYWN0ZXJzIGxvbmchXCIgOiBcIlwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIm5hbWVcIjpcclxuICAgICAgICBlcnJvcnMubmFtZSA9IG5hbWVSZWd4LnRlc3QodmFsdWUpXHJcbiAgICAgICAgICA/IFwiXCJcclxuICAgICAgICAgIDogXCJOYW1lIG11c3QgYmUgS29yZWFuIGxldHRlciBhbmQgZnJvbSAyIGxldHRlcnMgdG8gNSBsZXR0ZXJzXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICBlcnJvcnMuZW1haWwgPSBlbWFpbFJlZ3gudGVzdCh2YWx1ZSkgPyBcIlwiIDogXCJFbWFpbCBpcyBub3QgdmFsaWQhXCI7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiYWdlXCI6XHJcbiAgICAgICAgZXJyb3JzLmFnZSA9XHJcbiAgICAgICAgICB2YWx1ZSA8IDEgfHwgdmFsdWUgPT09IG51bGwgPyBcIkFnZSBtdXN0IGJlIG1vcmUgdGhhbiAwLlwiIDogXCJcIjtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgc2V0VXNlckluZm8oe1xyXG4gICAgICAuLi51c2VySW5mbyxcclxuICAgICAgc2V4OiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIHRoZSBldmVudCBjYWxsYmFjayBmdW5jdGlvbiBoYXBwZW5zIHdoZW4gY2xpY2tzIHNpZ251cCBidXR0b25cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBpZiAodmFsaWRhdGVGb3JtKHVzZXJJbmZvLmVycm9ycykpIHtcclxuICAgICAgY29uc29sZS5pbmZvKFwiVmFsaWQgRm9ybVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIEZvcm1cIik7XHJcbiAgICB9XHJcbiAgICBzYXZlVXNlckluZm8odXNlckluZm8pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9IChlcnJvcnMpID0+IHtcclxuICAgIGxldCB2YWxpZCA9IHRydWU7XHJcbiAgICBPYmplY3QudmFsdWVzKGVycm9ycykuZm9yRWFjaCgodmFsKSA9PiB2YWwubGVuZ3RoID4gMCAmJiAodmFsaWQgPSBmYWxzZSkpO1xyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNhdmVVc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIHVybDogXCJodHRwczovL3R1dG9yaWFsLnRlYW0tZXZlcnl3aGVyZS5jb20vYXBpL3VzZXJcIixcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgZGF0YTogZGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlckluZm9cIiwgSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEucmVzdWx0KSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTaWduIHVwIENvbXBsZXRlXCIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIgc2lnbnVwLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtIHNpZ251cC1mb3JtXCI+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNpZ24gdXA8L2gyPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cclxuICAgICAgICAgICAgRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBMZXQncyBnbyBhaGVhZCBhbmQgZ2V0IHlvdSBzaWduZWQgdXAuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJzaWdudXAtaW5mb3JtYXRpb25cIj5cclxuICAgICAgICAgICAgey8qIGlkIGlucHV0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImlucHV0VGl0bGVcIj5JRDwvaDM+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2lnbnVwLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwiaWRJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUlucHV0KGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGVJbnB1dChlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaWRJbnB1dFwiPklEPC9sYWJlbD5cclxuICAgICAgICAgICAgICB7dXNlckluZm8uZXJyb3JzLmlkLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj57dXNlckluZm8uZXJyb3JzLmlkfTwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBwYXNzd29yZCBpbnB1dCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbnB1dFRpdGxlXCI+UGFzc3dvcmQ8L2gzPlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWdudXAtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwd2RJbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUlucHV0KGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGVJbnB1dChlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicHdkSW5wdXRcIj4qKioqKio8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIHt1c2VySW5mby5lcnJvcnMucGFzc3dvcmQubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvclwiPnt1c2VySW5mby5lcnJvcnMucGFzc3dvcmR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIG5hbWUgaW5wdXQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW5wdXRUaXRsZVwiPlVzZXJuYW1lPC9oMz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaWdudXAtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUlucHV0KGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGVJbnB1dChlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lSW5wdXRcIj5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAge3VzZXJJbmZvLmVycm9ycy5uYW1lLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj57dXNlckluZm8uZXJyb3JzLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIGVtYWlsIGlucHV0ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImlucHV0VGl0bGVcIj5FbWFpbDwvaDM+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZ251cC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVDaGFuZ2VJbnB1dChlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlSW5wdXQoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxJbnB1dFwiPmVtYWlsQGV4YW1wbGUuY29tPC9sYWJlbD5cclxuICAgICAgICAgICAgICB7dXNlckluZm8uZXJyb3JzLmVtYWlsLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZXJyb3JcIj57dXNlckluZm8uZXJyb3JzLmVtYWlsfTwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBnZW5kZXIgaW5wdXQgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiaW5wdXRUaXRsZVwiPkdlbmRlcjwvaDM+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZ2VuZGVyX19tYWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNleFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBNYWxlXHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImdlbmRlcl9fZmVtYWxlXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNleFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICBGZW1hbGVcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIGFnZSBpbnB1dCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJpbnB1dFRpdGxlXCI+QWdlPC9oMz5cclxuICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpZ251cC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImFnZUlucHV0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJhZ2VcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNoYW5nZUlucHV0KGUudGFyZ2V0Lm5hbWUsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgdmFsaWRhdGVJbnB1dChlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhZ2VJbnB1dFwiPkFHRTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAge3VzZXJJbmZvLmVycm9ycy5hZ2UubGVuZ3RoID4gMCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJlcnJvclwiPnt1c2VySW5mby5lcnJvcnMuYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ0ZXJtc1wiIC8+XHJcbiAgICAgICAgICAgIDxsYWJlbD5JIGFncmVlIHRvIHRoZSBUZXJtcyBhbmQgQ29uZGl0aW9uczwvbGFiZWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICBuYW1lPVwiY29tbWl0XCJcclxuICAgICAgICAgICAgICB2YWx1ZT1cIlNpZ24gdXBcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBzaWdudXAtYnRuXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9zaWduaW5cIik7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25VcDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==