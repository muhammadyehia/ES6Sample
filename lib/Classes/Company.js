"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Company = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Employee = require("./Employee");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Company = exports.Company = function () {
    function Company() {
        _classCallCheck(this, Company);
    }

    _createClass(Company, [{
        key: "hire",
        value: function hire() {
            for (var _len = arguments.length, names = Array(_len), _key = 0; _key < _len; _key++) {
                names[_key] = arguments[_key];
            }

            this.Employees = names.map(function (n) {
                return new _Employee.Employee(n);
            });
        }
    }, {
        key: "doWork",
        value: function doWork() {
            var result = "";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.Employees[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var e = _step.value;

                    result += e.doWork();
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

            return result;
        }
    }]);

    return Company;
}();