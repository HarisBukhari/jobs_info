import { Component, Input, OnInit } from '@angular/core';
import { DATAService } from '../data.service';


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  requests: any;
  @Input() job: any = {}


  constructor(private Data: DATAService) { }

  ngOnInit(): void {
    this.Data.publicjob()
      .subscribe(
        data => {
          this.requests = data.jobs
          this.Data.setjob(this.requests[0])
        }
      )
  }

  
}
