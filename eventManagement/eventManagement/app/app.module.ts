import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from "@angular/http";

// Componets
import {AppComponent} from './app.component';
import {EventListComponent} from './event/component/event-list.component';
import {EmployeeListComponent} from './employee/component/employee-list.component';
import {EmployeeDetailsComponent} from './employee/component/employee-details.component';
import {UserListComponent} from './users/component/user-list.component';
import {UserDetailsComponent} from './users/component/user-details.component';
import {HeaderComponent} from './navigations/component/header.component';


//service
import {EventsService} from './event/services/event.service';
import {EmployeeService} from './employee/services/employee.service';
import {UserService} from './users/services/user.service';





@NgModule({
    imports:[BrowserModule,HttpModule], /// Other modules
    declarations:[AppComponent,EventListComponent,EmployeeListComponent,EmployeeDetailsComponent,UserListComponent,
    UserDetailsComponent,HeaderComponent], // Pipes, directives, components
    exports:[],  //what u can access out side the module
    providers:[EventsService,EmployeeService,UserService], // Services
    bootstrap:[AppComponent] /// Root componet name
})
export class AppModule{

}
