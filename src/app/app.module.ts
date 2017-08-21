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

//Firebase for image storage
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBr4QdsUMAb03gvselxOHki-u4IbtxuRxw",
  authDomain: "",
  databaseURL: "https://recognize-6397d.firebaseio.com/",
  storageBucket: "gs://recognize-6397d.appspot.com/uploads",
  messagingSenderId: ""
};

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
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  providers: [EmployeeService, AwardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
