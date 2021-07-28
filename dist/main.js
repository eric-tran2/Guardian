/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById('canvas');\n  var ctx = canvas.getContext('2d');\n  canvas.height = 700;\n  canvas.width = 2100; // global variables\n\n  var cellSize = 70;\n  var cellGap = 3;\n  var gameGrid = []; // ctx.fillStyle = 'blue';\n  // ctx.fillRect(0,0,250,250)\n  // const controlsBar = {\n  //   height: cellSize,\n  //   width: canvas.width,\n  // }\n\n  var Cell = /*#__PURE__*/function () {\n    function Cell(x, y) {\n      _classCallCheck(this, Cell);\n\n      this.x = x;\n      this.y = y;\n      this.width = cellSize;\n      this.height = cellSize;\n    }\n\n    _createClass(Cell, [{\n      key: \"draw\",\n      value: function draw() {\n        ctx.strokeStyle = 'white';\n        ctx.strokeRect(this.x, this.y, this.width, this.height);\n      }\n    }]);\n\n    return Cell;\n  }();\n\n  function createGrid() {\n    for (var y = 0; y < canvas.height; y += cellSize) {\n      for (var x = 0; x < canvas.width; x += cellSize) {\n        gameGrid.push(new Cell(x, y));\n      }\n    }\n  }\n\n  createGrid();\n\n  function handleGameGrid() {\n    for (var i = 0; i < gameGrid.length; i++) {\n      gameGrid[i].draw();\n    }\n  }\n\n  console.log(gameGrid);\n\n  function animate() {\n    // ctx.fillStyle = 'blue';\n    // ctx.fillRect(0,0,controlsBar.width, controlsBar.height);\n    handleGameGrid();\n    requestAnimationFrame(animate);\n  }\n\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HdWFyZGlhbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpZHRoIiwiY2VsbFNpemUiLCJjZWxsR2FwIiwiZ2FtZUdyaWQiLCJDZWxsIiwieCIsInkiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJjcmVhdGVHcmlkIiwicHVzaCIsImhhbmRsZUdhbWVHcmlkIiwiaSIsImxlbmd0aCIsImRyYXciLCJjb25zb2xlIiwibG9nIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFFbEQsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0YsTUFBTSxDQUFDRyxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQUgsRUFBQUEsTUFBTSxDQUFDSSxNQUFQLEdBQWdCLEdBQWhCO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQ0ssS0FBUCxHQUFlLElBQWYsQ0FMa0QsQ0FPbEQ7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCLENBVmtELENBWWxEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFsQmtELE1Bb0I1Q0MsSUFwQjRDO0FBcUJoRCxrQkFBWUMsQ0FBWixFQUFjQyxDQUFkLEVBQWdCO0FBQUE7O0FBQ2QsV0FBS0QsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsV0FBS0MsQ0FBTCxHQUFTQSxDQUFUO0FBQ0EsV0FBS04sS0FBTCxHQUFhQyxRQUFiO0FBQ0EsV0FBS0YsTUFBTCxHQUFjRSxRQUFkO0FBQ0Q7O0FBMUIrQztBQUFBO0FBQUEsYUEyQmhELGdCQUFNO0FBQ0pKLFFBQUFBLEdBQUcsQ0FBQ1UsV0FBSixHQUFrQixPQUFsQjtBQUNBVixRQUFBQSxHQUFHLENBQUNXLFVBQUosQ0FBZSxLQUFLSCxDQUFwQixFQUF1QixLQUFLQyxDQUE1QixFQUErQixLQUFLTixLQUFwQyxFQUEyQyxLQUFLRCxNQUFoRDtBQUNEO0FBOUIrQzs7QUFBQTtBQUFBOztBQWlDbEQsV0FBU1UsVUFBVCxHQUFxQjtBQUNuQixTQUFLLElBQUlILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdYLE1BQU0sQ0FBQ0ksTUFBM0IsRUFBbUNPLENBQUMsSUFBSUwsUUFBeEMsRUFBa0Q7QUFDaEQsV0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVixNQUFNLENBQUNLLEtBQTNCLEVBQWtDSyxDQUFDLElBQUlKLFFBQXZDLEVBQWlEO0FBQy9DRSxRQUFBQSxRQUFRLENBQUNPLElBQVQsQ0FBYyxJQUFJTixJQUFKLENBQVNDLENBQVQsRUFBV0MsQ0FBWCxDQUFkO0FBQ0Q7QUFDRjtBQUNGOztBQUVERyxFQUFBQSxVQUFVOztBQUVWLFdBQVNFLGNBQVQsR0FBeUI7QUFDdkIsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVCxRQUFRLENBQUNVLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQXlDO0FBQ3ZDVCxNQUFBQSxRQUFRLENBQUNTLENBQUQsQ0FBUixDQUFZRSxJQUFaO0FBQ0Q7QUFDRjs7QUFFREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVliLFFBQVo7O0FBRUEsV0FBU2MsT0FBVCxHQUFrQjtBQUNoQjtBQUNBO0FBQ0FOLElBQUFBLGNBQWM7QUFDZE8sSUFBQUEscUJBQXFCLENBQUNELE9BQUQsQ0FBckI7QUFDRDs7QUFFREEsRUFBQUEsT0FBTztBQUNSLENBM0REIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjYW52YXMuaGVpZ2h0ID0gNzAwO1xuICBjYW52YXMud2lkdGggPSAyMTAwO1xuXG4gIC8vIGdsb2JhbCB2YXJpYWJsZXNcbiAgY29uc3QgY2VsbFNpemUgPSA3MDtcbiAgY29uc3QgY2VsbEdhcCA9IDM7XG4gIGNvbnN0IGdhbWVHcmlkID0gW107XG5cbiAgLy8gY3R4LmZpbGxTdHlsZSA9ICdibHVlJztcbiAgLy8gY3R4LmZpbGxSZWN0KDAsMCwyNTAsMjUwKVxuXG4gIC8vIGNvbnN0IGNvbnRyb2xzQmFyID0ge1xuICAvLyAgIGhlaWdodDogY2VsbFNpemUsXG4gIC8vICAgd2lkdGg6IGNhbnZhcy53aWR0aCxcbiAgLy8gfVxuXG4gIGNsYXNzIENlbGwge1xuICAgIGNvbnN0cnVjdG9yKHgseSl7XG4gICAgICB0aGlzLnggPSB4O1xuICAgICAgdGhpcy55ID0geTtcbiAgICAgIHRoaXMud2lkdGggPSBjZWxsU2l6ZTtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gY2VsbFNpemU7XG4gICAgfVxuICAgIGRyYXcoKXtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gICAgICBjdHguc3Ryb2tlUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuICAgIH1cbiAgfVxuICBcbiAgZnVuY3Rpb24gY3JlYXRlR3JpZCgpe1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgY2FudmFzLmhlaWdodDsgeSArPSBjZWxsU2l6ZSkge1xuICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCBjYW52YXMud2lkdGg7IHggKz0gY2VsbFNpemUpIHtcbiAgICAgICAgZ2FtZUdyaWQucHVzaChuZXcgQ2VsbCh4LHkpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjcmVhdGVHcmlkKCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlR2FtZUdyaWQoKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVHcmlkLmxlbmd0aDsgaSsrKXtcbiAgICAgIGdhbWVHcmlkW2ldLmRyYXcoKTtcbiAgICB9XG4gIH1cblxuICBjb25zb2xlLmxvZyhnYW1lR3JpZCk7XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZSgpe1xuICAgIC8vIGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG4gICAgLy8gY3R4LmZpbGxSZWN0KDAsMCxjb250cm9sc0Jhci53aWR0aCwgY29udHJvbHNCYXIuaGVpZ2h0KTtcbiAgICBoYW5kbGVHYW1lR3JpZCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfVxuXG4gIGFuaW1hdGUoKTtcbn0pIl0sImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HdWFyZGlhbi8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;