describe("The  Spread", function(){

	it("can spread an array across prameters", function() {

	let doWork=function (x,y,z) {

	return x+y+z;	
	}
	let result=doWork(...[1,2,3]);
	expect(result).toBe(6);

	});
	
	it("can build an arrays", function() {
let a=[4,5,6];
let b=[1,2,3,...a,7,8,9];
	
	expect(b).toEqual([1,2,3,4,5,6,7,8,9]);

	});

});