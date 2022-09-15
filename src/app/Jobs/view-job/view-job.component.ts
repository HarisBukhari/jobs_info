import { Component, Input, OnInit } from '@angular/core';
import { DATAService } from 'src/app/data.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent implements OnInit {
  @Input() job: any = {}
  islogin:boolean = false;
  constructor(private Data: DATAService) { }


  ngOnInit(): void {
    this.Data.isloggedIn$.subscribe(res=>{
      this.islogin=res
      this.job = this.Data.getjob()
      console.log(this.job)
    })
  }

  deletejob(){
    this.Data.delete()
  }


}
