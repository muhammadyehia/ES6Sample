"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = exports.Employee = function () {
    function Employee(name) {
        _classCallCheck(this, Employee);

        this._name = name;
    }

    _createClass(Employee, [{
        key: "doWork",
        value: function doWork() {
            return this.name + " is working";
        }
    }, {
        key: "name",
        get: function get() {
            return this._name;
        }
    }]);

    return Employee;
}();

var muhammadEm = exports.muhammadEm = new Employee("muhammad");