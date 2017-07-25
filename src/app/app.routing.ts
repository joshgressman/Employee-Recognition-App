import { Routes, RouterModule } from '@angular/router';

import { ViewRewardsComponent } from './view-rewards/view-rewards.component';
import { GiveRewardsComponent } from './give-rewards/give-rewards.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'view', component: ViewRewardsComponent},
  {path: 'give', component: GiveRewardsComponent},
  // {path: 'admin', component: AdminComponent, loadChildren: './admin/admin.module#AdminModule'},
  {path: 'auth', component: AuthComponent},
  {path: 'admin', component: AdminComponent, loadChildren: './admin/admin.module#AdminModule'}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
