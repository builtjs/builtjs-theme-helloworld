/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/templates lazy recursive ^\\.\\/.*$":
/*!**************************************************************!*\
  !*** ./components/templates/ lazy ^\.\/.*$ namespace object ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./covers/cover-1/cover-1": [
		"./components/templates/covers/cover-1/cover-1.js",
		9,
		"components_templates_covers_cover-1_cover-1_js"
	],
	"./covers/cover-1/cover-1.js": [
		"./components/templates/covers/cover-1/cover-1.js",
		9,
		"components_templates_covers_cover-1_cover-1_js"
	],
	"./footers/footer-1/footer-1": [
		"./components/templates/footers/footer-1/footer-1.js",
		7,
		"components_templates_footers_footer-1_footer-1_js"
	],
	"./footers/footer-1/footer-1.js": [
		"./components/templates/footers/footer-1/footer-1.js",
		7,
		"components_templates_footers_footer-1_footer-1_js"
	],
	"./headers/header-1/header-1": [
		"./components/templates/headers/header-1/header-1.js",
		7,
		"components_templates_headers_header-1_header-1_js"
	],
	"./headers/header-1/header-1.js": [
		"./components/templates/headers/header-1/header-1.js",
		7,
		"components_templates_headers_header-1_header-1_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[2]).then(function() {
		return __webpack_require__.t(id, ids[1] | 16)
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = "./components/templates lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ })

});