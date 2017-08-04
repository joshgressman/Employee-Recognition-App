import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../employee.model';
// import { CapitalizePipe } from '../../pipes/capitalize.pipe';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css'],
})

export class ViewEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  company = "Sample Company"
  edit = true;
  editEmployee: Employee;
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

  onEdit(employee: Employee){
    if(this.edit === true){
      this.edit = false
    } else if(this.edit == false){
      this.edit = true;
    }
    this.editEmployee = employee;
    console.log('edit employee', this.editEmployee);
  }

  onEditBack(){
    this.edit = true;
  }

}
