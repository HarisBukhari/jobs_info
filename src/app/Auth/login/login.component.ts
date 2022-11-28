import { Component, OnInit } from '@angular/core';
import { auth } from 'src/app/auth.model';
import { Router } from '@angular/router';
import { DATAService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  obj: auth = {
    email: '',
    password: ''
  }

  constructor(private router: Router, private Data: DATAService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.obj.email==""&&this.obj.password==""){
      this.obj.email = "HarisBukhari@gmail.com"
      this.obj.password="monkey"
    }
    this.Data.login(this.obj).subscribe((res)=>{
    this.router.navigate(['']);
    })
  }
}
