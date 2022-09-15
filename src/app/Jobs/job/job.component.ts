import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DATAService } from 'src/app/data.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  @Input() job: any = {}
  @Output() view = new EventEmitter<any>()

  constructor(private Data: DATAService) { }

  ngOnInit(): void {
  }

  view_job_details(){
    this.view.emit(this.job)
    this.Data.setjob(this.job)

}

}
