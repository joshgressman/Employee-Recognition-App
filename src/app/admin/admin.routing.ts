import { Routes, RouterModule } from '@angular/router';


import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const AUTH_ROUTES: Routes = [

 {path: '', redirectTo: 'admin-home', pathMatch: 'full'},
 {path: 'admin-home', component: AdminHomeComponent},
 {path: 'add-employee', component: AddEmployeeComponent},
];

export const adminRouting = RouterModule.forChild(AUTH_ROUTES);
