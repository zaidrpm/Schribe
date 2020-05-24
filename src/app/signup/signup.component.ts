import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup, FormBuilder,Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
    this.message="You have signed up sexessfully"
  }).catch((err)=>{this.message=err.message })
  /*
  firebase.auth().createUserWithEmailAndPassword(email,pswd).then((response) => {
    console.log(response)
    response.user.updateProfile({
      displayName:name,
      photoURL:"https://api.adorable.io/avatars/123"
    })
    this.message="You have been registered successfully"
  }).catch((error) => {
    this.message="Failed-" + error.message
    console.log(error)
  })*/
  
}

  ngOnInit(): void {
  }

}
