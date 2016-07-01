"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

describe("destructuring", function () {

	it("can destructur arrays", function () {
		var x = 2;
		var y = 3;
		var _ref = [y, x];
		x = _ref[0];
		y = _ref[1];

		expect(x).toBe(3);
		expect(y).toBe(2);
	});
	it("can destructur intialize", function () {
		var x = 2;
		var y = 3;

		expect(x).toBe(2);
		expect(y).toBe(3);
	});
	it("can destructur return from function", function () {
		var doWork = function doWork() {
			return [2, 3];
		};

		var _doWork = doWork();

		var _doWork2 = _slicedToArray(_doWork, 3);

		var x = _doWork2[0];
		var y = _doWork2[1];
		var z = _doWork2[2];

		expect(x).toBe(2);
		expect(y).toBe(3);
		expect(z).toBeUndefined();
	});

	it("can destructur object", function () {
		var doWork = function doWork() {
			return {
				firstName: "Muhammad",
				lastName: "Yehia",
				social: {
					facebook: "muhammad.yehia" }
			};
		};

		var _doWork3 = doWork();

		var first = _doWork3.firstName;
		var facebook = _doWork3.social.facebook;

		expect(first).toBe("Muhammad");
		expect(facebook).toBe("muhammad.yehia");
	});
	it("can destructur object another Way", function () {
		var doWork = function doWork() {
			return {
				firstName: "Muhammad",
				lastName: "Yehia",
				social: {
					facebook: "muhammad.yehia" }
			};
		};

		var _doWork4 = doWork();

		var firstName = _doWork4.firstName;
		var facebook = _doWork4.social.facebook;

		expect(firstName).toBe("Muhammad");
		expect(facebook).toBe("muhammad.yehia");
	});

	it("Work With Parameters", function () {

		var doWork = function doWork(url, _ref2) {
			var data = _ref2.data;
			var type = _ref2.type;

			expect(type).toBe("eltype");
			return data;
		};
		var result = doWork("bla/bla", { data: "eldata", type: "eltype" });

		expect(result).toBe("eldata");
	});
});