import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { DATAService } from './data.service';
import { WebRequeestService } from './web-requeest.service';

declare var window: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jobs_info';
  issave = false

  constructor(public HttpData: WebRequeestService,public Data: DATAService,private http:HttpClient){}

  ngOnInit(): void {
  }

  logout(){
    this.Data.logout()
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('username:password')); 
  }

  check(){
    const token = ""+localStorage.getItem('bearer')
    console.log(token)
    const headers = new HttpHeaders().set('Content-Type','application/json; charset=utf-8').set('Authorization', 'Bearer ' + token)
    this.http.get('http://localhost:3000/api/v1/jobs',{'headers':headers})
    .subscribe((res)=>{
      console.log(res)
    },(err)=>{
      console.log(err)
    }) 
  }

  save(){
    this.issave=true
    console.log(this.issave)
  }

}
