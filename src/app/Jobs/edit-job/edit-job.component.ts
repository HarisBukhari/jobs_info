import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATAService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  job: any = {}
  constructor(private router: Router,private Data: DATAService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.job=this.Data.getjob()
  }

  onSubmit(){
    this.router.navigate(['']);
  }

}
