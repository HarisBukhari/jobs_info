import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATAService } from 'src/app/data.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  @Input() job: any = {}
  islogin:boolean = false;
  constructor(private router: Router,private Data: DATAService) { }

  ngDoCheck(){
    this.job=this.Data.getjob()
    console.log(this.Data.isloggedIn$)
  }

  ngOnInit(): void {
  }

  deletejob(){
    this.Data.deletejob(this.job).subscribe(res=>{
    this.router.navigate([''])
  })
  }

}
