"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
// Componets
var app_component_1 = require("./app.component");
var event_list_component_1 = require("./event/component/event-list.component");
var employee_list_component_1 = require("./employee/component/employee-list.component");
var employee_details_component_1 = require("./employee/component/employee-details.component");
var user_list_component_1 = require("./users/component/user-list.component");
var user_details_component_1 = require("./users/component/user-details.component");
var header_component_1 = require("./navigations/component/header.component");
//service
var event_service_1 = require("./event/services/event.service");
var employee_service_1 = require("./employee/services/employee.service");
var user_service_1 = require("./users/services/user.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, event_list_component_1.EventListComponent, employee_list_component_1.EmployeeListComponent, employee_details_component_1.EmployeeDetailsComponent, user_list_component_1.UserListComponent,
            user_details_component_1.UserDetailsComponent, header_component_1.HeaderComponent],
        exports: [],
        providers: [event_service_1.EventsService, employee_service_1.EmployeeService, user_service_1.UserService],
        bootstrap: [app_component_1.AppComponent] /// Root componet name
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map