"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe("object", function () {
    describe("is function", function () {
        it("should consider positiv and negative zero to be different ", function () {
            expect(-0 === 0).toBe(true);
            expect(Object.is(-0, 0)).toBe(false);
        });

        it("should consider NaN to be NaN", function () {
            expect(NaN === NaN).toBe(false);
            expect(Object.is(NaN, NaN)).toBe(true);
        });
    });

    describe("assign function", function () {
        it(' should apply mixing to objects', function () {
            var shark = {
                bite: function bite(target) {
                    target.hurt = true;
                }
            };
            var person = {};
            var laser1 = {
                pewpew1: function pewpew1(target) {
                    target.exploded1 = true;
                }
            };
            var laser2 = {
                pewpew2: function pewpew2(target) {
                    target.exploded2 = true;
                }
            };
            Object.assign(shark, laser1, laser2);
            shark.pewpew1(person);
            shark.pewpew2(person);
            expect(person.exploded1).toBe(true);
            expect(person.exploded2).toBe(true);
        });
        describe("property intializer shorthand", function () {
            it(" should create properties from local variables", function () {
                var model = 'ford';
                var year = 2016;
                var classic = {
                    model: model, year: year
                };
                expect(classic.model).toBe('ford');
                expect(classic.year).toBe(2016);
            });
        });

        describe("method  intializer shorthand", function () {

            it(' should create  method using  shorthand', function () {
                var server = {
                    getPort: function getPort() {
                        return 8080;
                    }
                };
                expect(server.getPort()).toBe(8080);
            });
        });

        describe("computed property names", function () {

            it(' should support variable for property names', function () {
                var createSimpleObject = function createSimpleObject(propertyName, propertyValue) {
                    return _defineProperty({}, propertyName, propertyValue);
                };
                var result = createSimpleObject('color', 'red');
                expect(result.color).toBe('red');
            });
            it(' should support concatenation', function () {
                var createTriumvirate = function createTriumvirate(first, second) {
                    var _ref2;

                    return _ref2 = {}, _defineProperty(_ref2, 'member_' + first.name, first), _defineProperty(_ref2, 'member_' + second.name, second), _ref2;
                };
                var muhammad = { name: "muhammad" };
                var yehia = { name: "yehia" };
                var result = createTriumvirate(muhammad, yehia);
                expect(result.member_muhammad).toBe(muhammad);
                expect(result.member_yehia).toBe(yehia);
            });
        });
    });
});