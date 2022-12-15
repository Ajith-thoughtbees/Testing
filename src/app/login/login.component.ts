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
  role:any;
  loginForm!: FormGroup;
  eId: any;
  formData: any;

  constructor(private  api:ApiService , private route : Router, private formBuilder:FormBuilder ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  });
}

login() {
  this.formData = this.loginForm.value;  console.log(this.loginForm.value);

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
