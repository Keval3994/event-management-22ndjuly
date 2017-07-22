"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = (function () {
    function EmployeeService() {
        this.employeesDate = [
            {
                employeeId: 5,
                employeeName: "Keval",
                employeeAddress: "kolhapur",
                salary: 24000
            },
            {
                employeeId: 4,
                employeeName: "sulochana",
                employeeAddress: "kannur",
                salary: 34000
            },
            {
                employeeId: 7,
                employeeName: "Keval kurade",
                employeeAddress: "kolhapur maharashtra",
                salary: 24000
            }
        ];
    }
    EmployeeService.prototype.getAllEmployess = function () {
        console.log(this.employeesDate);
        return this.employeesDate;
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map