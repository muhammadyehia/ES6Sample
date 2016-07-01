"use strict";

var _templateObject = _taggedTemplateLiteral(["", " + ", " is ", ""], ["", " + ", " is ", ""]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

describe("Template  literals", function () {

	it("can easily combine literals and data", function () {

		var doWork = function doWork(name) {

			return "hello " + name;
		};
		var result = doWork("yehia");
		expect(result).toBe("hello yehia");
	});
	it("can help bulid url", function () {

		var category = "sports";
		var id = 11111;
		var url = "http://google/" + category + "/" + id;
		expect(url).toBe("http://google/sports/11111");
	});
	it("can use tag", function () {
		var upper = function upper(myString) {
			var result = "";
			for (var i = 0; i < myString.length; i++) {
				result += myString[i];
				if (i < arguments.length - 1) {
					result += arguments.length <= i + 1 ? undefined : arguments[i + 1];
				}
			}
			return result.toUpperCase();
		};
		var x = 1;
		var y = 2;

		var result = upper(_templateObject, x, y, x + y);

		expect(result).toBe("1 + 2 IS 3");
	});
});