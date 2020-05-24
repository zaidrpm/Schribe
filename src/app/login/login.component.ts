import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
myform:FormGroup
msg:string=""
  constructor(public fb:FormBuilder, public as:AuthService, public r:Router) { 
    this.myform=fb.group({
      email:['',[Validators.required,Validators.email]],
      pswd:['',Validators.required]
    })
  }
submit() {
  let email=this.myform.value.email;
  let pswd=this.myform.value.pswd;
  this.as.login(email,pswd).then((response)=> {
    this.msg="You have logged in sucker!"
  }).catch((error)=>{this.msg=error.message})
this.r.navigate(['/myblogs'])
}
  ngOnInit(): void {
  }

}
