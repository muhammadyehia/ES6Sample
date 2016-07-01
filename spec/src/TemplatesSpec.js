describe("Template  literals", function(){

	it("can easily combine literals and data", function() {

	let doWork=function (name) {

	return `hello ${name}`;	
	}
	let result=doWork("yehia");
	expect(result).toBe("hello yehia");

	});
	it("can help bulid url", function() {

	let category="sports";
	let id=11111;
	let url=`http://google/${category}/${id}`
	expect(url).toBe("http://google/sports/11111");

	});
	it("can use tag", function() {
let upper=function(myString,...values) {
	let result="";
	for(let i=0;i<myString.length;i++)
	{
		result+=myString[i];
		if(i<values.length)
		{
			result+=values[i];
		}
	}
	return result.toUpperCase();
}
let x=1;
let y=2;

let result=upper `${x} + ${y} is ${x+y}`;


	expect(result).toBe("1 + 2 IS 3");

	});

});