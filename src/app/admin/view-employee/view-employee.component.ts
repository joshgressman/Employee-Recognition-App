import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']

})

export class ViewEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  
  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
   this.employeeService.getEmployees()
   .subscribe(
     (response) => {
       this.employees = response;
       console.log("employees", this.employees)
     }
   )
  }

}
