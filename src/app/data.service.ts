import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { WebRequeestService } from './web-requeest.service';


@Injectable({
  providedIn: 'root'
})
export class DATAService {

  job: any = {}

  private _isloggedIn$ = new BehaviorSubject<boolean>(false)
  private _canEdit$ = new BehaviorSubject<boolean>(false)
  isloggedIn$ = this._isloggedIn$.asObservable()
  canEdit$ = this._canEdit$.asObservable()


  constructor(private webRequestService: WebRequeestService) {
    const token = localStorage.getItem('bearer')
    this._isloggedIn$.next(!!token)
  }

  getjob(){
    return this.job
  }

  setjob(job:any){
    this.job=job
  }

  delete(){
    console.log("Delete")
  }

  login(obj: any) {
    return this.webRequestService.login('auth/login', obj).pipe(
      tap((res: any) => {
        localStorage.setItem('bearer', res.token)
        console.log(localStorage.getItem('bearer'))
        this._isloggedIn$.next(true)
      })
    )
  }

  logout() {
    localStorage.removeItem('bearer')
    this._isloggedIn$.next(false)
  }



  register(obj:any) {
    return this.webRequestService.login('auth/login', obj).pipe(
      tap((res: any) => {
        localStorage.setItem('bearer', res.token)
        console.log(localStorage.getItem('bearer'))
        this._isloggedIn$.next(true)
      })
    )
  }

  publicjob() {
    return this.webRequestService.publicjobs('public')
  }

  alljob() {
    return this.webRequestService.alljob('jobs').pipe(
      tap((res: any) => {
      })
    )
  }

  createjob(obj:any) {
    // return this.webRequestService.createjob('jobs',obj).pipe(
    //   tap((res: any) => {
    //     res.setHeaders('Authorization', 'Bearer ' + localStorage.getItem('bearer'))
    //   })
    // )
    console.log("Created New Job")
  }

  updatejob(obj:any) {
    return this.webRequestService.updatejob('jobs',obj).pipe(
      tap((res: any) => {
        res.setHeaders('Authorization', 'Bearer ' + localStorage.getItem('bearer'))
      })
    )
  }

  
  deletejob() {
    return this.webRequestService.deletejob('public')
  }

}
