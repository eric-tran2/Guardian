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

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById('canvas');\n  var ctx = canvas.getContext('2d');\n  canvas.height = '900';\n  canvas.width = '1900'; // global variables\n\n  var cellSize = 100;\n  var cellGap = 3;\n  var gameGrid = []; // ctx.fillStyle = 'blue';\n  // ctx.fillRect(0,0,250,250)\n\n  var controlsBar = {\n    height: cellSize,\n    width: canvas.width\n  };\n\n  var Cell = /*#__PURE__*/function () {\n    function Cell(x, y) {\n      _classCallCheck(this, Cell);\n\n      this.x = x;\n      this.y = y;\n      this.width = cellSize;\n      this.height = cellSize;\n    }\n\n    _createClass(Cell, [{\n      key: \"draw\",\n      value: function draw() {\n        ctx.strokeStyle = 'black';\n        ctx.strokeRect(this.x, this.y, this.width, this.height);\n      }\n    }]);\n\n    return Cell;\n  }();\n\n  function createGrid() {\n    for (var y = cellSize; y < canvas.height; y += cellSize) {\n      for (var x = 0; y < canvas.width; x += cellSize) {\n        gameGrid.push(new Cell(x, y));\n      }\n    }\n  }\n\n  createGrid();\n\n  function handleGameGrid() {\n    for (var i = 0; i < gameGrid.length; i++) {\n      gameGrid[i].draw();\n    }\n  }\n\n  console.log(gameGrid);\n\n  function animate() {\n    ctx.fillStyle = 'blue';\n    ctx.fillRect(0, 0, controlsBar.width, controlsBar.height);\n    handleGameGrid();\n    requestAnimationFrame(animate);\n  }\n\n  animate();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HdWFyZGlhbi8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImhlaWdodCIsIndpZHRoIiwiY2VsbFNpemUiLCJjZWxsR2FwIiwiZ2FtZUdyaWQiLCJjb250cm9sc0JhciIsIkNlbGwiLCJ4IiwieSIsInN0cm9rZVN0eWxlIiwic3Ryb2tlUmVjdCIsImNyZWF0ZUdyaWQiLCJwdXNoIiwiaGFuZGxlR2FtZUdyaWQiLCJpIiwibGVuZ3RoIiwiZHJhdyIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBRWxELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ0ksTUFBUCxHQUFnQixLQUFoQjtBQUNBSixFQUFBQSxNQUFNLENBQUNLLEtBQVAsR0FBZSxNQUFmLENBTGtELENBT2xEOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxHQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLE1BQU1DLFFBQVEsR0FBRyxFQUFqQixDQVZrRCxDQVlsRDtBQUNBOztBQUVBLE1BQU1DLFdBQVcsR0FBRztBQUNsQkwsSUFBQUEsTUFBTSxFQUFFRSxRQURVO0FBRWxCRCxJQUFBQSxLQUFLLEVBQUVMLE1BQU0sQ0FBQ0s7QUFGSSxHQUFwQjs7QUFma0QsTUFvQjVDSyxJQXBCNEM7QUFxQmhELGtCQUFZQyxDQUFaLEVBQWNDLENBQWQsRUFBZ0I7QUFBQTs7QUFDZCxXQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxXQUFLQyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxXQUFLUCxLQUFMLEdBQWFDLFFBQWI7QUFDQSxXQUFLRixNQUFMLEdBQWNFLFFBQWQ7QUFDRDs7QUExQitDO0FBQUE7QUFBQSxhQTJCaEQsZ0JBQU07QUFDSkosUUFBQUEsR0FBRyxDQUFDVyxXQUFKLEdBQWtCLE9BQWxCO0FBQ0FYLFFBQUFBLEdBQUcsQ0FBQ1ksVUFBSixDQUFlLEtBQUtILENBQXBCLEVBQXVCLEtBQUtDLENBQTVCLEVBQStCLEtBQUtQLEtBQXBDLEVBQTJDLEtBQUtELE1BQWhEO0FBQ0Q7QUE5QitDOztBQUFBO0FBQUE7O0FBaUNsRCxXQUFTVyxVQUFULEdBQXFCO0FBQ25CLFNBQUssSUFBSUgsQ0FBQyxHQUFHTixRQUFiLEVBQXVCTSxDQUFDLEdBQUdaLE1BQU0sQ0FBQ0ksTUFBbEMsRUFBMENRLENBQUMsSUFBSU4sUUFBL0MsRUFBeUQ7QUFDdkQsV0FBSyxJQUFJSyxDQUFDLEdBQUcsQ0FBYixFQUFnQkMsQ0FBQyxHQUFHWixNQUFNLENBQUNLLEtBQTNCLEVBQWtDTSxDQUFDLElBQUlMLFFBQXZDLEVBQWlEO0FBQy9DRSxRQUFBQSxRQUFRLENBQUNRLElBQVQsQ0FBYyxJQUFJTixJQUFKLENBQVNDLENBQVQsRUFBV0MsQ0FBWCxDQUFkO0FBQ0Q7QUFDRjtBQUNGOztBQUNERyxFQUFBQSxVQUFVOztBQUNWLFdBQVNFLGNBQVQsR0FBeUI7QUFDdkIsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHVixRQUFRLENBQUNXLE1BQTdCLEVBQXFDRCxDQUFDLEVBQXRDLEVBQXlDO0FBQ3ZDVixNQUFBQSxRQUFRLENBQUNVLENBQUQsQ0FBUixDQUFZRSxJQUFaO0FBQ0Q7QUFDRjs7QUFFREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlkLFFBQVo7O0FBRUEsV0FBU2UsT0FBVCxHQUFrQjtBQUNoQnJCLElBQUFBLEdBQUcsQ0FBQ3NCLFNBQUosR0FBZ0IsTUFBaEI7QUFDQXRCLElBQUFBLEdBQUcsQ0FBQ3VCLFFBQUosQ0FBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQmhCLFdBQVcsQ0FBQ0osS0FBN0IsRUFBb0NJLFdBQVcsQ0FBQ0wsTUFBaEQ7QUFDQWEsSUFBQUEsY0FBYztBQUNkUyxJQUFBQSxxQkFBcUIsQ0FBQ0gsT0FBRCxDQUFyQjtBQUNEOztBQUVEQSxFQUFBQSxPQUFPO0FBQ1IsQ0F6REQiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGNhbnZhcy5oZWlnaHQgPSAnOTAwJztcbiAgY2FudmFzLndpZHRoID0gJzE5MDAnO1xuXG4gIC8vIGdsb2JhbCB2YXJpYWJsZXNcbiAgY29uc3QgY2VsbFNpemUgPSAxMDA7XG4gIGNvbnN0IGNlbGxHYXAgPSAzO1xuICBjb25zdCBnYW1lR3JpZCA9IFtdO1xuXG4gIC8vIGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG4gIC8vIGN0eC5maWxsUmVjdCgwLDAsMjUwLDI1MClcblxuICBjb25zdCBjb250cm9sc0JhciA9IHtcbiAgICBoZWlnaHQ6IGNlbGxTaXplLFxuICAgIHdpZHRoOiBjYW52YXMud2lkdGgsXG4gIH1cblxuICBjbGFzcyBDZWxsIHtcbiAgICBjb25zdHJ1Y3Rvcih4LHkpe1xuICAgICAgdGhpcy54ID0geDtcbiAgICAgIHRoaXMueSA9IHk7XG4gICAgICB0aGlzLndpZHRoID0gY2VsbFNpemU7XG4gICAgICB0aGlzLmhlaWdodCA9IGNlbGxTaXplO1xuICAgIH1cbiAgICBkcmF3KCl7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnYmxhY2snO1xuICAgICAgY3R4LnN0cm9rZVJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgICB9XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIGNyZWF0ZUdyaWQoKXtcbiAgICBmb3IgKGxldCB5ID0gY2VsbFNpemU7IHkgPCBjYW52YXMuaGVpZ2h0OyB5ICs9IGNlbGxTaXplKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeSA8IGNhbnZhcy53aWR0aDsgeCArPSBjZWxsU2l6ZSkge1xuICAgICAgICBnYW1lR3JpZC5wdXNoKG5ldyBDZWxsKHgseSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjcmVhdGVHcmlkKCk7XG4gIGZ1bmN0aW9uIGhhbmRsZUdhbWVHcmlkKCl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lR3JpZC5sZW5ndGg7IGkrKyl7XG4gICAgICBnYW1lR3JpZFtpXS5kcmF3KCk7XG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coZ2FtZUdyaWQpO1xuXG4gIGZ1bmN0aW9uIGFuaW1hdGUoKXtcbiAgICBjdHguZmlsbFN0eWxlID0gJ2JsdWUnO1xuICAgIGN0eC5maWxsUmVjdCgwLDAsY29udHJvbHNCYXIud2lkdGgsIGNvbnRyb2xzQmFyLmhlaWdodCk7XG4gICAgaGFuZGxlR2FtZUdyaWQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gIH1cblxuICBhbmltYXRlKCk7XG59KSJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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