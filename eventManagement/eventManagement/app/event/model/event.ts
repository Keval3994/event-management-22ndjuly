export class Event{
    constructor( public eventId?:number, public eventCode?:string,
                 public eventName?:string, public description?:string,
                 public startDate?:Date, public endDate?:Date,
                 public fees?:number, public totalRegistration?: number,
                 public logo?:string ){

    }

}
