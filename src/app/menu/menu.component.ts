import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
loginflag:boolean=false
user:any  
constructor() { 
  this.user=firebase.auth().currentUser //return null if not signed in else an object
  if(this.user)
  this.loginflag=true
  else
  this.loginflag=false
  //Below func executes automatically everytime when login status of user is changed
  firebase.auth().onAuthStateChanged((usr) => {
    if(usr)
    this.loginflag=true
    else
    this.loginflag=false
  })
}

signout() {
  firebase.auth().signOut()
}
  ngOnInit(): void {
  }

}
