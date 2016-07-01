describe("how Let Work", function(){

	it("Will provide block scoping, unlike var", function() {

	var doWork=function (flag) {
		
		if(flag)
		{
			let x=3;
			return x;
		}
		
	}
	var result=doWork(true);
	expect(result).toBe(3);

	});

});