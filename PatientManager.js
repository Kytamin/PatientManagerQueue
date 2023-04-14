"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientManager = void 0;
var PatientManager = /** @class */ (function () {
    function PatientManager() {
        this.patientList = [];
        this.listHealed = [];
        this.size = 0;
    }
    PatientManager.prototype.addPatient = function (item) {
        this.size++;
        this.patientList.push(item);
    };
    PatientManager.prototype.sortPatientCode = function () {
        this.patientList.sort(function (a, b) {
            return a.getCode() - b.getCode();
        });
    };
    PatientManager.prototype.displayPatientList = function () {
        return this.patientList;
    };
    PatientManager.prototype.healing = function () {
        this.listHealed.push(this.patientList.shift());
        return this.listHealed;
    };
    return PatientManager;
}());
exports.PatientManager = PatientManager;
