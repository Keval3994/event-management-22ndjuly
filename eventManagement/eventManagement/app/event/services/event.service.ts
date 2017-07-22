import {Injectable} from "@angular/core";

import{Event} from "../model/event";
@Injectable()
export class EventsService{
    constructor(){

    }
    private eventsData:Event[]=[
        {   eventId:1,
            eventCode:"CEPJQ3",
            eventName:"Jquey seminor" ,
            description:"JQuey seminor 3",
            startDate:new Date(),
            endDate:new Date(),
            fees:200,
            totalRegistration:10,
            logo:"app/images/JQuery.png"
        },
        {   eventId:1,
            eventCode:"CEPAN4",
            eventName:"angular Seminor" ,
            description:"Angular seminor 4",
            startDate:new Date(),
            endDate:new Date(),
            fees:200,
            totalRegistration:10,
            logo:"app/images/angular.png"
        },
        {   eventId:1,
            eventCode:"CEPREACT",
            eventName:"React seminor" ,
            description:"React seminor",
            startDate:new Date(),
            endDate:new Date(),
            fees:200,
            totalRegistration:10,
            logo:"app/images/React.png"
        },
        {   eventId:1,
            eventCode:"CEPJAVA",
            eventName:"JAVA seminor" ,
            description:"JAVA seminor",
            startDate:new Date(),
            endDate:new Date(),
            fees:200,
            totalRegistration:10,
            logo:"app/images/java.png"
        },
        {   eventId:1,
            eventCode:"CEPC",
            eventName:"Seminor on C language" ,
            description:"Seminor on C language",
            startDate:new Date(),
            endDate:new Date(),
            fees:200,
            totalRegistration:10,
            logo:"app/images/java.png"
        }
    ];

    getAllEvents():Event[]{
        return this.eventsData;
    }
}
