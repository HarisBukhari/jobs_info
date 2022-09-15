import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './Jobs/jobs.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { ViewJobComponent } from './Jobs/view-job/view-job.component';
import { FormsModule } from '@angular/forms';
import { JobComponent } from './Jobs/job/job.component';
import { EditJobComponent } from './Jobs/edit-job/edit-job.component';
import { JobViewComponent } from './Jobs/job-view/job-view.component';

import {HttpClientModule} from '@angular/common/http';
import { CreateJobComponent } from './Jobs/create-job/create-job.component'


@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    JobComponent,
    ViewJobComponent,
    LoginComponent,
    RegisterComponent,
    EditJobComponent,
    JobViewComponent,
    CreateJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
