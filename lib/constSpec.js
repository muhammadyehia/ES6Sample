"use strict";

describe("Using Const", function () {

	it("Will make variable read-only", function () {

		var Max_Size = 10;
		//Max_Size=12 // Syntax Error some times
		expect(Max_Size).toBe(10);
	});
	it("can shadow outer declaration", function () {

		var x = 12;
		var doWork = function doWork() {
			var x = 10;
			return x;
		};
		var result = doWork();
		expect(result).toBe(10);
		expect(x).toBe(12);
	});
});