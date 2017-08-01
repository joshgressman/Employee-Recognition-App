import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { adminRouting } from './admin.routing';


import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddEmployeeComponent } from'./add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { CapitalizePipe  } from '../pipes/capitalize.pipe';

@NgModule({
  declarations: [AdminHomeComponent, AddEmployeeComponent, ViewEmployeeComponent, CapitalizePipe ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, adminRouting]
})

export class AdminModule {

}
