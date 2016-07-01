/*
describe("Proxies", function () {

	it("Should let you intercept gets", function () {

	let unicorn={
        legs:4,
        color:'brown',
       horn:true
         }
let proxyUnicorn=new Proxy(unicorn,{
get:function (target,property){
  if(property==='color')
  {
    return 'awesome  '+target[property];
  }
  else
  {
        return target[property];
  }
}  
 
});
 	expect(proxyUnicorn.legs).toBe(4);
     	expect(proxyUnicorn.color).toBe('awesome  '+proxyUnicorn.color);
	});

});
*/
"use strict";