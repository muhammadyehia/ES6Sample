'use strict';

var _Employee = require('./Classes/Employee');

var _Car = require('./Classes/Car');

var _Car2 = _interopRequireDefault(_Car);

var _Screen = require('./Classes/Screen');

var _Company = require('./Classes/Company');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("Models ES6", function () {

	it("first Model", function () {

		var e = new _Employee.Employee("yehia");
		expect(e.name).toBe("yehia");
		expect(_Employee.muhammadEm.name).toBe("muhammad");
	});
	it("use default", function () {

		var f = new _Car2.default("BMW");
		expect(f.name).toBe("BMW");
	});
	/*	it("use module", function () {		
 
        let s=new m.Screen("LED");
 	expect(s.name).toBe("LED");
 });
 */
	it("use Sympole", function () {

		var s = new _Screen.Screen("LED");
		expect(s.name).toBe("LED");
	});
	it("compine  modules", function () {

		var c = new _Company.Company();
		var m = new _Employee.Employee("muhammad");
		var y = new _Employee.Employee("yehia");
		var e = new _Employee.Employee("elsayed");
		c.hire("muhammad", "yehia", "elsayed");
		var result = c.doWork();
		expect(result).toBe(m.doWork() + y.doWork() + e.doWork());
	});
});