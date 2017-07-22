import { Component,OnInit} from '@angular/core';
import {Event} from '../model/event';
import {EventsService} from '../services/event.service';


@Component({
  selector : 'event-list',
  templateUrl : 'app/event/views/event-list.component.html'
})
export class EventListComponent{

events:Event[]=[];
constructor(private eventService:EventsService){
        //this.event=new Event(1, 'JQTRN', 'jquery seminar', 'seminar on jquery 3 new features', new Date(), new Date(),200, 45, 'images/jquery.png')
    }
ngOnInit():void{
       this.events=this.eventService.getAllEvents();
   }
}
