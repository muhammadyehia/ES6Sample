"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

describe("default parameters", function () {

	it("provides default", function () {

		var doWork = function doWork() {
			var name = arguments.length <= 0 || arguments[0] === undefined ? "muhammad" : arguments[0];

			return name;
		};
		var result = doWork();
		expect(result).toBe("muhammad");
	});
	it("Will  provides value for undefined", function () {

		var doWork = function doWork() {
			var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
			var b = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
			var c = arguments.length <= 2 || arguments[2] === undefined ? 3 : arguments[2];

			return [a, b, c];
		};

		var _doWork = doWork(1, undefined);

		var _doWork2 = _slicedToArray(_doWork, 3);

		var a = _doWork2[0];
		var b = _doWork2[1];
		var c = _doWork2[2];

		expect(a).toBe(1);
		expect(b).toBe(2);
		expect(c).toBe(3);
	});

	it("Work With destructuring", function () {

		var doWork = function doWork(url, _ref) {
			var _ref$data = _ref.data;
			var data = _ref$data === undefined ? "eldata" : _ref$data;
			var _ref$type = _ref.type;
			var type = _ref$type === undefined ? "eltype" : _ref$type;

			expect(type).toBe("new");
			return data;
		};
		var result = doWork("bla/bla", { type: "new" });

		expect(result).toBe("eldata");
	});
});