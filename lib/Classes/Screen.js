"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var s_name = Symbol();

var Screen = exports.Screen = function () {
    function Screen(name) {
        _classCallCheck(this, Screen);

        this[s_name] = name;
    }

    _createClass(Screen, [{
        key: "doWork",
        value: function doWork() {
            return this.name + " is Running";
        }
    }, {
        key: "name",
        get: function get() {
            return this[s_name];
        }
    }]);

    return Screen;
}();