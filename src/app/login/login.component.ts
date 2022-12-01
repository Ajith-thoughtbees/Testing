import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  username : string = '';
  password : string = '';
  role:string="";
  loginForm!: FormGroup;
  eId: any;

  constructor(private  api:ApiService , private route : Router, private formBuilder:FormBuilder ) {

  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],

  });
}
get f() { return this.loginForm.controls; }

login() {
  this.api.getlogins().subscribe({ next:(res)=>{
        const adm = res.find((a:any)=>{
          return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password && a.role === "Admin"
        });
        if(adm){
        this.loginForm.reset();
        this.route.navigate(['/dashboard'])
      }
     else{
          this.loginForm.reset();
           this.route.navigate(['/errorpage'])
    }
    }})
  }
}
