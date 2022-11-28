import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebRequeestService {


  readonly ROOT_URL: any
  token:string =''
  constructor(private http: HttpClient) {
    this.ROOT_URL = environment.URL
    console.log(environment.URL)
  }

  publicjobs(uri: string): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/${uri}`)
  }

  login(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload)
  }

  register(uri: string, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload)
  }

  getjobs(uri: string) {
    return this.http.get(`${this.ROOT_URL}/${uri}`)
  }

  alljob(uri: string) {
    this.token = ""+localStorage.getItem('bearer')
    const headers = new HttpHeaders({'bearer': this.token})
    return this.http.get(`${this.ROOT_URL}/${uri}`,{headers:headers})
  }

  createjob(uri: string, payload: Object) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('bearer')}`
    })
    return this.http.post(`${this.ROOT_URL}/${uri}`,payload,{headers:headers})
  }

  updatejob(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload)
  }

  deletejob(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`)
  }


}
