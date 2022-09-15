import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebRequeestService {


  readonly ROOT_URL: any
  token:string =''
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000/api/v1'
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
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload)
  }

  updatejob(uri: string, payload: Object) {
    return this.http.patch(`${this.ROOT_URL}/${uri}`, payload)
  }

  deletejob(uri: string) {
    return this.http.delete(`${this.ROOT_URL}/${uri}`)
  }


}
