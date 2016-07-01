"use strict";

describe("Rest pramters", function () {

	it("Rest pramters", function () {

		var doWork = function doWork(name) {

			var result = 0;

			for (var _len = arguments.length, numbers = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				numbers[_key - 1] = arguments[_key];
			}

			numbers.forEach(function (n) {
				result += n;
			});
			return result;
		};
		var result = doWork("yehia", 1, 2, 3);
		expect(result).toBe(6);
		var result2 = doWork("yehia");
		expect(result2).toBe(0);
	});
});