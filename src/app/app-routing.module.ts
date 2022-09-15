import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { EditJobComponent } from './Jobs/edit-job/edit-job.component';
import { CreateJobComponent } from './Jobs/create-job/create-job.component';
import { JobsComponent } from './Jobs/jobs.component';
import { JobViewComponent } from './Jobs/job-view/job-view.component';

const routes: Routes = [
  { path: '', component: JobsComponent, children:[
    { path: '', component: JobViewComponent },
    { path: 'edit-job', component: EditJobComponent },
    { path: 'create-job', component: CreateJobComponent},
  ]},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
