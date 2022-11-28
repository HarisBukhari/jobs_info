import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { auth } from 'src/app/auth.model';
import { DATAService } from 'src/app/data.service';
import { user } from 'src/app/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  @ViewChild('form') myform: NgForm;
  obj: user = {
    name: '',
    email: '',
    password: ''
  }

  constructor(private router: Router, private Data: DATAService) { }

  ngOnInit(): void {

  }
  onSubmit(form: NgForm) {
    if(this.obj.email&&this.obj.name&&this.obj.password){
      this.Data.register(this.obj).subscribe(res=>{
      this.router.navigate([''])
    })
    }else{
      alert("Please Add Data")
    }
  }

  add() {
  }
}
