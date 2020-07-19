import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, FormBuilder,Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myform:FormGroup
  message:string=""
  constructor(public fgb:FormBuilder, public as:AuthService) { 
    this.myform= this.fgb.group({
      fn:['',[Validators.required]],
      ln:['',[Validators.required]],
      email:['',[Validators.required]],
      pswd:[''],
      cpswd:['']
    })
  }
  submit()
{
  let email:string= this.myform.value.email
  let pswd:string=this.myform.value.pswd
  let name:string=this.myform.value.fn + " " + this.myform.value.ln
  this.as.signup(name,email,pswd).then(()=>{
    this.message="You have signed up sucessfully!"
  }).catch((err)=>{this.message=err.message })  
}

  ngOnInit(): void {
  }

}
