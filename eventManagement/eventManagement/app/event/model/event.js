"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Event = (function () {
    function Event(eventId, eventCode, eventName, description, startDate, endDate, fees, totalRegistration, logo) {
        this.eventId = eventId;
        this.eventCode = eventCode;
        this.eventName = eventName;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.fees = fees;
        this.totalRegistration = totalRegistration;
        this.logo = logo;
    }
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.js.map