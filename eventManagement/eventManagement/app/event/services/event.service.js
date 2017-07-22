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
var EventsService = (function () {
    function EventsService() {
        this.eventsData = [
            { eventId: 1,
                eventCode: "CEPJQ3",
                eventName: "Jquey seminor",
                description: "JQuey seminor 3",
                startDate: new Date(),
                endDate: new Date(),
                fees: 200,
                totalRegistration: 10,
                logo: "app/images/JQuery.png"
            },
            { eventId: 1,
                eventCode: "CEPAN4",
                eventName: "angular Seminor",
                description: "Angular seminor 4",
                startDate: new Date(),
                endDate: new Date(),
                fees: 200,
                totalRegistration: 10,
                logo: "app/images/angular.png"
            },
            { eventId: 1,
                eventCode: "CEPREACT",
                eventName: "React seminor",
                description: "React seminor",
                startDate: new Date(),
                endDate: new Date(),
                fees: 200,
                totalRegistration: 10,
                logo: "app/images/React.png"
            },
            { eventId: 1,
                eventCode: "CEPJAVA",
                eventName: "JAVA seminor",
                description: "JAVA seminor",
                startDate: new Date(),
                endDate: new Date(),
                fees: 200,
                totalRegistration: 10,
                logo: "app/images/java.png"
            },
            { eventId: 1,
                eventCode: "CEPC",
                eventName: "Seminor on C language",
                description: "Seminor on C language",
                startDate: new Date(),
                endDate: new Date(),
                fees: 200,
                totalRegistration: 10,
                logo: "app/images/java.png"
            }
        ];
    }
    EventsService.prototype.getAllEvents = function () {
        return this.eventsData;
    };
    return EventsService;
}());
EventsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=event.service.js.map