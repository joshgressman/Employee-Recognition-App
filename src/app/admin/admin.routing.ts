import { Routes, RouterModule } from '@angular/router';


import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddAwardsComponent } from './add-awards/add-awards.component';

const AUTH_ROUTES: Routes = [

 {path: '', redirectTo: 'admin-home', pathMatch: 'full'},
 {path: 'admin-home', component: AdminHomeComponent},
 {path: 'add-employee', component: AddEmployeeComponent},
 {path: 'view-employee', component: ViewEmployeeComponent},
 {path: 'add-awards', component: AddAwardsComponent}
];

export const adminRouting = RouterModule.forChild(AUTH_ROUTES);
