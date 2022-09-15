import { Component, Input, OnInit,AfterViewInit } from '@angular/core';
import { DATAService } from 'src/app/data.service';

@Component({
  selector: 'app-job-view',
  templateUrl: './job-view.component.html',
  styleUrls: ['./job-view.component.css']
})
export class JobViewComponent implements OnInit {
  @Input() job: any = {}
  constructor(private Data: DATAService) { }

  ngOnInit(): void {
  }

  ngDoCheck(){
    this.job=this.Data.getjob()
  }

}
