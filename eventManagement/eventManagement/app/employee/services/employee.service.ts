import {Injectable} from '@angular/core';

import {Employeee} from '../models/employee';



@Injectable()
export class EmployeeService{
constructor(){}

    private employeesDate: Employee[]=[
    {
          employeeId : 5,
          employeeName :"Keval",
          employeeAddress : "kolhapur",
          salary : 24000
    },
    {
          employeeId : 4,
          employeeName :"sulochana",
          employeeAddress : "kannur",
          salary : 34000
    },
    {
          employeeId : 7,
          employeeName :"Keval kurade",
          employeeAddress : "kolhapur maharashtra",
          salary : 24000
    }
    ]
    getAllEmployess() : Employee[]{
      console.log(this.employeesDate)
        return this.employeesDate;
    }
}
