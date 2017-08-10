import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { NgUploaderModule } from 'ngx-uploader';
import { ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ViewRewardsComponent } from './view-rewards/view-rewards.component';
import { GiveRewardsComponent } from './give-rewards/give-rewards.component';
import { EmployeeService } from './services/employee.service';
import { AwardsService } from './services/awards.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    ViewRewardsComponent,
    GiveRewardsComponent,
    AdminComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule

  ],
  providers: [EmployeeService, AwardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
