import {Component,Input} from '@angular/core';
import {Employee} from '../models/employee'




@Component({
    selector : 'employee-details',
    templateUrl : 'app/employee/views/employee-details.component.html'
})
export class EmployeeDetailsComponent{
@Input() employee : Employee;

}
