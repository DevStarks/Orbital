/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _require = __webpack_require__(1);
	
	var OrbitRing = _require.OrbitRing;
	var OrbitButton = _require.OrbitButton;
	
	var _require2 = __webpack_require__(2);
	
	var Planet = _require2.Planet;
	
	
	var NOTES = ["A", "C", "D", "E", "A2"];
	
	var NOTE_COLORS = ["#ffff00", "#ff0000", "#e14c14", "#00ff00", "#3399ff"];
	
	document.addEventListener("DOMContentLoaded", function () {
	  var stage = new createjs.Stage("canvas");
	
	  drawOrbits(stage);
	
	  drawPlanets(stage);
	
	  stage.update();
	});
	
	var drawOrbits = function drawOrbits(stage) {
	  var radius = 90;
	  NOTES.forEach(function (note, i) {
	    var color = NOTE_COLORS[i];
	    stage.addChild(new OrbitRing(365, 365, radius));
	    stage.addChild(new OrbitButton(365, 365, radius, color));
	    radius += 50;
	  });
	};
	
	var drawPlanets = function drawPlanets(stage) {
	  var ringX = 365;
	  var ringY = 365;
	  var ringRadius = 90;
	
	  var planet = new Planet(ringX, ringY, ringRadius);
	  stage.addChild(planet);
	
	  var angle = 0;
	  var draw = function draw() {
	    requestAnimationFrame(draw);
	
	    planet.x = 365 + Math.cos(angle) * ringRadius;
	    planet.y = 365 + Math.sin(angle) * ringRadius;
	    // console.log(angle);
	    stage.update();
	    angle -= .1;
	  };
	  draw();
	};
	
	// const movePlanet(planet) => {
	//
	// }

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var OrbitRing = exports.OrbitRing = function OrbitRing(x, y, radius) {
	  var orbit = new createjs.Shape();
	  orbit.graphics.setStrokeStyle(2).beginStroke("DeepSkyBlue").drawCircle(x, y, radius);
	  return orbit;
	};
	
	var OrbitButton = exports.OrbitButton = function OrbitButton(ringX, ringY, ringRadius, color) {
	  var button = new createjs.Shape();
	  button.graphics.beginFill(color).beginStroke("black").setStrokeStyle(2).drawCircle(ringX, ringY + ringRadius, 22);
	  return button;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var Planet = exports.Planet = function Planet(ringX, ringY, ringRadius) {
	  var planet = new createjs.Shape();
	  planet.graphics.beginFill("white").drawCircle(0, 0, 5);
	
	  return planet;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map