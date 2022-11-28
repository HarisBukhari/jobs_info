import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATAService } from 'src/app/data.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent implements OnInit {

  job: any = {}
  constructor(private router: Router,private Data: DATAService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.job)
    if(this.job.company&&this.job.description&&this.job.position){
      this.Data.createjob(this.job).subscribe(res=>{
      this.router.navigate([''])
    })
    }else{
      alert("Please Add Data")
    }
  }

}
