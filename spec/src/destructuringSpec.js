
describe("destructuring", function(){

	it("can destructur arrays", function() {
        let x=2;
        let y=3;
	[x,y]=[y,x];
	expect(x).toBe(3);
	expect(y).toBe(2);
	});
	it("can destructur intialize", function() {

let	[x,y]=[2,3];
	expect(x).toBe(2);
	expect(y).toBe(3);
	});
	it("can destructur return from function", function() {
let doWork=function () {
return [2,3];
}

let	[x,y,z]=doWork();
	expect(x).toBe(2);
	expect(y).toBe(3);
	expect(z).toBeUndefined();
	});
    
    	it("can destructur object", function() {
let doWork=function () {
    return {
        firstName:"Muhammad",
        lastName:"Yehia",
	    	social:{
        facebook:"muhammad.yehia"}
    }
}
let{firstName:first,social:{facebook:facebook}}=doWork();
	expect(first).toBe("Muhammad");
		expect(facebook).toBe("muhammad.yehia");
        });
			it("can destructur object another Way", function() {
let doWork=function () {
    return {
        firstName:"Muhammad",
        lastName:"Yehia",
	    	social:{
        facebook:"muhammad.yehia"}
    }
}
let{firstName,social:{facebook}}=doWork();
	expect(firstName).toBe("Muhammad");
		expect(facebook).toBe("muhammad.yehia");
        });
		
it("Work With Parameters", function() {

let doWork=function (url,{data,type}) {
		expect(type).toBe("eltype");
	return data;
}
let result=doWork("bla/bla",{data:"eldata",type:"eltype"});

	expect(result).toBe("eldata");
		
        });

});