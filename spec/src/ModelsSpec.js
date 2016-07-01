import {Employee,muhammadEm} from './Classes/Employee';
import factory from './Classes/Car';
import {Screen}  from './Classes/Screen';
import {Company} from "./Classes/Company"
describe("Models ES6", function () {

	it("first Model", function () {		

        let e=new Employee("yehia");
		expect(e.name).toBe("yehia");
	    expect(muhammadEm.name).toBe("muhammad");
	});
		it("use default", function () {		

        let f=new factory("BMW");
		expect(f.name).toBe("BMW");
	});
	/*	it("use module", function () {		

        let s=new m.Screen("LED");
		expect(s.name).toBe("LED");
	});
*/
	it("use Sympole", function () {		

        let s=new Screen("LED");
		expect(s.name).toBe("LED");
	});
		it("compine  modules", function () {		

       let c=new Company();
	   let m=new Employee("muhammad");
	     let y=new Employee("yehia");
		   let e=new Employee("elsayed");
	   c.hire("muhammad","yehia","elsayed");
	   let result=c.doWork();
	  expect(result).toBe(m.doWork()+y.doWork()+e.doWork());
	});
});