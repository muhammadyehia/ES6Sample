
describe("Last", function(){
it("classes", function() {
class Person
{
  constructor(name="yehia")
  {
    this.Name=name;
  }
  get Name()
  {
    return this._name;
  }
  set Name(value){
    this._name=value;
  }
  doWork()
  {
    return "Do Work Fn from Person" ;
  }
}

class Employee extends Person
{
  constructor(name="Employee",title="Mr")
  {
    super(name);
      this.Title=title;
  }
    
  
  get Title()
  {
    return this._title;
  }
  set Title(value){
    this._title=value;
  }
   doWork()
  {
   return "Do Work Fn from Employee";
  }
}
let em =new Employee("muhammad","el pop");
let p =new Person();
let doWork=function(...paramenter)
{
let result="";
  for(let i=0;i<paramenter.length;i++)
  {
    if(paramenter[i] instanceof Person)
    {
   result+=   paramenter[i].doWork();
    }
  }
  return result;
}
let result=doWork(em,p,{});
	expect(result).toBe("Do Work Fn from EmployeeDo Work Fn from Person");

	});
	
	
	
	
	it("arrow function", function() {
		let a=()=>  "a";
		expect(a()).toBe("a");
		let add=(x,y)=> x+y;
        let double=x=>x*2;
        	expect(add(1,2)).toBe(3);
			expect(double(4)).toBe(8);	
			
			let arr=[1,2,3];
           let sum=0;
           arr.forEach(n=> sum+=n);
           expect(sum).toBe(6);
		   let d=arr.map(n=>double(n));
		     expect(d).toEqual([2,4,6]);
	});
	
	
		it("iterators", function() {
	let arr=[2,3,4,5];

let sum=0;
for(let i in arr)
{
   sum+=arr[i];
}
expect(sum).toBe(14);
sum=0;

 let iterator=arr[Symbol.iterator]();
 let next=iterator.next();
while(!next.done)
{
  sum+=next.value;
  next=iterator.next();
}
expect(sum).toBe(14);
	});
	
it(" inplememt  iterators", function() {
	class cat
   {
     constructor(...names)
     {
       this.Names=[];
       this.Names=this.Names.concat(names);
     }
     [Symbol.iterator]()
     {
       return new ArrayIterator(this.Names);
     }
   }
   class ArrayIterator
   {
     constructor(values)
     {
       this.Items=values;
       this.Index=0;
     }
     next()
     {
       let result={value: undefined , done:true};
       if(this.Index<this.Items.length)
       {
         result={value: this.Items[this.Index] , done:false};
         this.Index++;
       }
       return result;
     }
     
   }
let c=new cat("cat1","cat2","cat3","cat4","cat5","cat6","cat7");
let allCat="";
for(let i of c)
{
  allCat+=i;
}
expect(allCat).toBe("cat1cat2cat3cat4cat5cat6cat7");	
})


it(" Numbers", function() {

let octal=0o71;
expect(octal).toBe(57);	
octal=Number("0o71");
expect(octal).toBe(57);	
let binary=0b1101;
expect(binary).toBe(13);
binary=Number("0b1101");
expect(binary).toBe(13);	
});



it(" Arrayes", function() {

let arr=[1,2,3,4,5,6,7];
let result=  arr.fill('a');

expect(result).toEqual(['a','a','a','a','a','a','a']);
 arr=[1,2,3,4,5,6,7];
result=arr.fill('a',2,5);
expect(result).toEqual([1, 2, "a", "a", "a", 6, 7]);
 arr=[1,2,3,4,5,6,7];
result=arr.copyWithin(0,-4);
expect(result).toEqual([4, 5, 6, 7, 5, 6, 7]);




});


it(" set", function() {

let set=new Set();

expect(set.size).toBe(0);	
set.add("mohamed");
set.add("yehia");
expect(set.size).toBe(2);	

let s=new Set();
let key={};
s.add(key);
expect(s.has(key)).toBe(true);
expect(s.has({})).toBe(false);
});



it(" map", function() {

let m=new Map();
expect(m.size).toBe(0);
m.set("age",25);
expect(m.size).toBe(1);
expect(m.get("age")).toBe(25);

let n=new Map([["fname","mohamed"],["lname","yehia"],["age",25]]);
expect(n.has("age")).toBe(true);
expect(n.get("lname")).toBe("yehia");

});




it(" WeakSet", function() {

var ws = new WeakSet();
var obj={name:"ali"};
 ws.add(obj);
 var obj2={name:"ali"};
 ws.add(obj2);
expect(ws.has(obj)).toBe(true);
ws.delete(obj);
expect(ws.has(obj)).toBe(false);
});
it(" WeakMap", function() {


var wm = new WeakMap();
 var obj={name:"ali"};
  var obj2={name:"ali"};
 wm.set(obj,obj2);
expect(wm.get(obj).name).toBe("ali");
});


});



