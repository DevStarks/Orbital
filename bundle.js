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
	
	var Display = __webpack_require__(3);
	var NOTES = ["A", "C", "D", "E", "A2"];
	var NOTE_COLORS = ["#ffff00", "#ff0000", "#e14c14", "#00ff00", "#3399ff"];
	var CENTER_X = 365,
	    CENTER_Y = 365;
	
	document.addEventListener("DOMContentLoaded", function () {
	  var stage = new createjs.Stage("canvas");
	  var display = new Display(stage);
	
	  display.drawOrbits();
	
	  // createjs.Ticker.addEventListener("tick", stage.update());
	
	  stage.update();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _require = __webpack_require__(2);
	
	var Planet = _require.Planet;
	
	var CENTER_X = 365,
	    CENTER_Y = 365;
	
	var OrbitRing = exports.OrbitRing = function () {
	  function OrbitRing(_ref) {
	    var stage = _ref.stage;
	    var radius = _ref.radius;
	    var color = _ref.color;
	    var BPM = _ref.BPM;
	    var MEASURES = _ref.MEASURES;
	
	    _classCallCheck(this, OrbitRing);
	
	    this.stage = stage;
	    this.color = color;
	    this.x = CENTER_X;
	    this.y = CENTER_Y;
	    this.radius = radius;
	    this.BPM = BPM;
	    this.MEASURES = MEASURES;
	  }
	
	  _createClass(OrbitRing, [{
	    key: "draw",
	    value: function draw() {
	      var ring = new createjs.Shape();
	      ring.graphics.setStrokeStyle(2).beginStroke("DeepSkyBlue").drawCircle(this.x, this.y, this.radius);
	      this.stage.addChild(ring);
	      this.createButton();
	      this.rotatePlanets();
	    }
	  }, {
	    key: "rotatePlanets",
	    value: function rotatePlanets() {
	      var _this = this;
	
	      createjs.Ticker.addEventListener("tick", function () {
	        return _this.stage.update();
	      });
	    }
	  }, {
	    key: "createButton",
	    value: function createButton() {
	      this.button = new OrbitButton({
	        stage: this.stage,
	        ring: this,
	        color: this.color
	      });
	      this.button.draw();
	    }
	  }]);
	
	  return OrbitRing;
	}();
	
	var OrbitButton = exports.OrbitButton = function () {
	  function OrbitButton(_ref2) {
	    var stage = _ref2.stage;
	    var ring = _ref2.ring;
	    var color = _ref2.color;
	
	    _classCallCheck(this, OrbitButton);
	
	    this.stage = stage;
	    this.ring = ring;
	    this.color = color;
	  }
	
	  _createClass(OrbitButton, [{
	    key: "draw",
	    value: function draw() {
	      var _this2 = this;
	
	      this.createButton();
	      this.buttonShape.on('click', function () {
	        _this2.createPlanet();
	      });
	    }
	  }, {
	    key: "createButton",
	    value: function createButton() {
	      this.buttonShape = new createjs.Shape();
	      this.buttonShape.graphics.beginFill(this.color).beginStroke("black").setStrokeStyle(2).drawCircle(this.ring.x, this.ring.y + this.ring.radius, 22);
	      this.stage.addChild(this.buttonShape);
	    }
	  }, {
	    key: "createPlanet",
	    value: function createPlanet() {
	      var planet = new Planet({
	        stage: this.stage,
	        ring: this.ring,
	        color: this.color
	      });
	      planet.draw();
	    }
	  }]);

	  return OrbitButton;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Planet = exports.Planet = function () {
	  function Planet(_ref) {
	    var stage = _ref.stage;
	    var ring = _ref.ring;
	    var color = _ref.color;
	
	    _classCallCheck(this, Planet);
	
	    this.stage = stage;
	    this.ring = ring;
	    this.color = color;
	  }
	
	  _createClass(Planet, [{
	    key: "draw",
	    value: function draw() {
	      var _this = this;
	
	      var planet = new createjs.Shape();
	      planet.graphics.beginFill(this.color).drawCircle(0, 0, 7);
	
	      var angle = 1.57;
	      setInterval(function () {
	        planet.x = _this.ring.x + Math.cos(angle) * _this.ring.radius;
	        planet.y = _this.ring.y + Math.sin(angle) * _this.ring.radius;
	
	        var degrees = 360 / (_this.ring.BPM / 60 * (_this.ring.MEASURES * 4)) / 60;
	        angle -= degrees * Math.PI / 180;
	      }, 16.66666666);
	
	      this.stage.addChild(planet);
	    }
	  }]);

	  return Planet;
	}();

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _require = __webpack_require__(1);
	
	var OrbitRing = _require.OrbitRing;
	var OrbitButton = _require.OrbitButton;
	
	var _require2 = __webpack_require__(2);
	
	var Planet = _require2.Planet;
	
	
	var NOTES = ["A", "C", "D", "E", "A2"];
	var NOTE_COLORS = ["#ffff00", "#ff0000", "#e14c14", "#00ff00", "#3399ff"];
	var BPM = 160;
	var MEASURES = 1;
	
	var Display = exports.Display = function () {
	  function Display(stage) {
	    _classCallCheck(this, Display);
	
	    this.stage = stage;
	  }
	
	  _createClass(Display, [{
	    key: "drawOrbits",
	    value: function drawOrbits() {
	      var radius = 90;
	
	      for (var i = 0; i < NOTES.length; i++) {
	        // const note = NOTES[i];
	        var color = NOTE_COLORS[i];
	
	        var orbitRing = new OrbitRing({
	          stage: this.stage,
	          BPM: BPM,
	          MEASURES: MEASURES,
	          radius: radius,
	          color: color
	        });
	        orbitRing.draw();
	
	        radius += 50;
	      }
	    }
	  }]);
	
	  return Display;
	}();
	
	module.exports = Display;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map