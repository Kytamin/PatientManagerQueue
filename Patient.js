"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(name, code) {
        this.name = name;
        this.code = code;
    }
    Patient.prototype.getName = function () {
        return this.name;
    };
    Patient.prototype.setName = function (value) {
        this.name = value;
    };
    Patient.prototype.getCode = function () {
        return this.code;
    };
    Patient.prototype.setCode = function (value) {
        this.code = value;
    };
    return Patient;
}());
exports.Patient = Patient;
