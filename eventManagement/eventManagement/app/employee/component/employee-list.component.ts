import {Component,OgInit} from '@angular/core';
import {Employee} from '../models/employee';
import {EmployeeService} from '../services/employee.service';
@Component({
  selector : 'employee-list',
  templateUrl : 'app/employee/views/employee-list.component.html'
})
export class EmployeeListComponent{

employees : Employee;
selectedSingleEmployee : Employee;
constructor(private employeeService : EmployeeService){

}
ngOnInit(){
      this.employees = this.employeeService.getAllEmployess();
      console.log(this.employees)
}
selectedEmployee(employee : Employee): void{
console.log(employee)
  this.selectedSingleEmployee=employee;
}
closeTheDetails() : void{
  this.selectedSingleEmployee="";
}
}
