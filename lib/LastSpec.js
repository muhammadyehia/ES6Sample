"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

describe("Last", function () {
  it("classes", function () {
    var Person = function () {
      function Person() {
        var name = arguments.length <= 0 || arguments[0] === undefined ? "yehia" : arguments[0];

        _classCallCheck(this, Person);

        this.Name = name;
      }

      _createClass(Person, [{
        key: "doWork",
        value: function doWork() {
          return "Do Work Fn from Person";
        }
      }, {
        key: "Name",
        get: function get() {
          return this._name;
        },
        set: function set(value) {
          this._name = value;
        }
      }]);

      return Person;
    }();

    var Employee = function (_Person) {
      _inherits(Employee, _Person);

      function Employee() {
        var name = arguments.length <= 0 || arguments[0] === undefined ? "Employee" : arguments[0];
        var title = arguments.length <= 1 || arguments[1] === undefined ? "Mr" : arguments[1];

        _classCallCheck(this, Employee);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Employee).call(this, name));

        _this.Title = title;
        return _this;
      }

      _createClass(Employee, [{
        key: "doWork",
        value: function doWork() {
          return "Do Work Fn from Employee";
        }
      }, {
        key: "Title",
        get: function get() {
          return this._title;
        },
        set: function set(value) {
          this._title = value;
        }
      }]);

      return Employee;
    }(Person);

    var em = new Employee("muhammad", "el pop");
    var p = new Person();
    var doWork = function doWork() {
      var result = "";

      for (var _len = arguments.length, paramenter = Array(_len), _key = 0; _key < _len; _key++) {
        paramenter[_key] = arguments[_key];
      }

      for (var i = 0; i < paramenter.length; i++) {
        if (paramenter[i] instanceof Person) {
          result += paramenter[i].doWork();
        }
      }
      return result;
    };
    var result = doWork(em, p, {});
    expect(result).toBe("Do Work Fn from EmployeeDo Work Fn from Person");
  });

  it("arrow function", function () {
    var a = function a() {
      return "a";
    };
    expect(a()).toBe("a");
    var add = function add(x, y) {
      return x + y;
    };
    var double = function double(x) {
      return x * 2;
    };
    expect(add(1, 2)).toBe(3);
    expect(double(4)).toBe(8);

    var arr = [1, 2, 3];
    var sum = 0;
    arr.forEach(function (n) {
      return sum += n;
    });
    expect(sum).toBe(6);
    var d = arr.map(function (n) {
      return double(n);
    });
    expect(d).toEqual([2, 4, 6]);
  });

  it("iterators", function () {
    var arr = [2, 3, 4, 5];

    var sum = 0;
    for (var i in arr) {
      sum += arr[i];
    }
    expect(sum).toBe(14);
    sum = 0;

    var iterator = arr[Symbol.iterator]();
    var next = iterator.next();
    while (!next.done) {
      sum += next.value;
      next = iterator.next();
    }
    expect(sum).toBe(14);
  });

  it(" inplememt  iterators", function () {
    var cat = function () {
      function cat() {
        _classCallCheck(this, cat);

        this.Names = [];

        for (var _len2 = arguments.length, names = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          names[_key2] = arguments[_key2];
        }

        this.Names = this.Names.concat(names);
      }

      _createClass(cat, [{
        key: Symbol.iterator,
        value: function value() {
          return new ArrayIterator(this.Names);
        }
      }]);

      return cat;
    }();

    var ArrayIterator = function () {
      function ArrayIterator(values) {
        _classCallCheck(this, ArrayIterator);

        this.Items = values;
        this.Index = 0;
      }

      _createClass(ArrayIterator, [{
        key: "next",
        value: function next() {
          var result = { value: undefined, done: true };
          if (this.Index < this.Items.length) {
            result = { value: this.Items[this.Index], done: false };
            this.Index++;
          }
          return result;
        }
      }]);

      return ArrayIterator;
    }();

    var c = new cat("cat1", "cat2", "cat3", "cat4", "cat5", "cat6", "cat7");
    var allCat = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = c[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        allCat += i;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    expect(allCat).toBe("cat1cat2cat3cat4cat5cat6cat7");
  });

  it(" Numbers", function () {

    var octal = 57;
    expect(octal).toBe(57);
    octal = Number("0o71");
    expect(octal).toBe(57);
    var binary = 13;
    expect(binary).toBe(13);
    binary = Number("0b1101");
    expect(binary).toBe(13);
  });

  it(" Arrayes", function () {

    var arr = [1, 2, 3, 4, 5, 6, 7];
    var result = arr.fill('a');

    expect(result).toEqual(['a', 'a', 'a', 'a', 'a', 'a', 'a']);
    arr = [1, 2, 3, 4, 5, 6, 7];
    result = arr.fill('a', 2, 5);
    expect(result).toEqual([1, 2, "a", "a", "a", 6, 7]);
    arr = [1, 2, 3, 4, 5, 6, 7];
    result = arr.copyWithin(0, -4);
    expect(result).toEqual([4, 5, 6, 7, 5, 6, 7]);
  });

  it(" set", function () {

    var set = new Set();

    expect(set.size).toBe(0);
    set.add("mohamed");
    set.add("yehia");
    expect(set.size).toBe(2);

    var s = new Set();
    var key = {};
    s.add(key);
    expect(s.has(key)).toBe(true);
    expect(s.has({})).toBe(false);
  });

  it(" map", function () {

    var m = new Map();
    expect(m.size).toBe(0);
    m.set("age", 25);
    expect(m.size).toBe(1);
    expect(m.get("age")).toBe(25);

    var n = new Map([["fname", "mohamed"], ["lname", "yehia"], ["age", 25]]);
    expect(n.has("age")).toBe(true);
    expect(n.get("lname")).toBe("yehia");
  });

  it(" WeakSet", function () {

    var ws = new WeakSet();
    var obj = { name: "ali" };
    ws.add(obj);
    var obj2 = { name: "ali" };
    ws.add(obj2);
    expect(ws.has(obj)).toBe(true);
    ws.delete(obj);
    expect(ws.has(obj)).toBe(false);
  });
  it(" WeakMap", function () {

    var wm = new WeakMap();
    var obj = { name: "ali" };
    var obj2 = { name: "ali" };
    wm.set(obj, obj2);
    expect(wm.get(obj).name).toBe("ali");
  });
});