import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Employee } from '../employee.model';
import { Router } from '@angular/router'; //to navigate

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  myForm: FormGroup;

  constructor(private employeeService: EmployeeService) { }

  onSubmit(){
    // console.log(this.myForm);
    const employee = new Employee(
      this.myForm.value.firstName,
      this.myForm.value.lastName,
      this.myForm.value.company,
      this.myForm.value.email,
      this.myForm.value.password,
      this.myForm.value.points = 0
    );
    console.log('employee', employee);
    this.employeeService.addEmployee(employee)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.myForm.reset();
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      company: new FormControl(null, Validators.required),
      email: new FormControl(null, [ Validators.required, Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
      password: new FormControl(null, Validators.required),
      points: new FormControl(null)

  });
}

}
