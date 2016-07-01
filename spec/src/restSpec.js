describe("Rest pramters", function () {

	it("Rest pramters", function () {

		var doWork = function (name, ...numbers) {

			let result = 0;
			numbers.forEach(function (n) {
				result += n;
			});
			return result;
		}
		let result = doWork("yehia", 1, 2, 3);
		expect(result).toBe(6);
		let result2 = doWork("yehia");
		expect(result2).toBe(0);
	});

});