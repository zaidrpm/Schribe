import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:any
  constructor() {
  this.user=firebase.auth().currentUser;  
   }

  ngOnInit(): void {
  }

}
