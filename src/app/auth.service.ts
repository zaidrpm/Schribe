import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth'



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email:string, pswd:string)
  {
    return firebase.auth().signInWithEmailAndPassword(email,pswd)
  }
  
  login_status():any{
  let user=firebase.auth().currentUser //return null if not signed in else an object
  if(user)
  return true
  else
  return false
  }
  
  signup(name:string,email:string,pswd:string)
  {
    return new Promise((resolve,reject)=>{
      firebase.auth().createUserWithEmailAndPassword(email,pswd).then((response)=>{
        response.user.updateProfile({
          displayName:name,
          photoURL:"https://api.adorable.io/avatars/123"
        }).then(()=>{ resolve() }).catch((error)=>{reject(error) })
      }).catch((error)=>{reject(error)})
    })
  }
}
