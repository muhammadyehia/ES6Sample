"use strict";

describe("how Let Work", function () {

	it("Will provide block scoping, unlike var", function () {

		var doWork = function doWork(flag) {

			if (flag) {
				var x = 3;
				return x;
			}
		};
		var result = doWork(true);
		expect(result).toBe(3);
	});
});