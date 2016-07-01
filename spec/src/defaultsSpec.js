
describe("default parameters", function(){
		
it("provides default", function() {

let doWork=function (name="muhammad") {
	return name;
}
let result=doWork();
	expect(result).toBe("muhammad");		
});
it("Will  provides value for undefined", function() {

let doWork=function (a=1,b=2,c=3) {
	return [a,b,c];
}
let [a,b,c]=doWork(1,undefined);
	expect(a).toBe(1);	
		expect(b).toBe(2);		
			expect(c).toBe(3);			
});

it("Work With destructuring", function() {

let doWork=function (url,{data="eldata",type="eltype"}) {
		expect(type).toBe("new");
	return data;
}
let result=doWork("bla/bla",{type:"new"});

	expect(result).toBe("eldata");
		
        });

});