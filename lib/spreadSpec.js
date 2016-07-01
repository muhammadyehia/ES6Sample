"use strict";

describe("The  Spread", function () {

	it("can spread an array across prameters", function () {

		var doWork = function doWork(x, y, z) {

			return x + y + z;
		};
		var result = doWork.apply(undefined, [1, 2, 3]);
		expect(result).toBe(6);
	});

	it("can build an arrays", function () {
		var a = [4, 5, 6];
		var b = [1, 2, 3].concat(a, [7, 8, 9]);

		expect(b).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
	});
});