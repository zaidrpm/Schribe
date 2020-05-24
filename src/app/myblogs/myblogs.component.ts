import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {
user:any
posts:any[]=[];
  constructor() {
    this.user=firebase.auth().currentUser;
    this.getPosts();
   }
   onPostCreated() {
    console.log("Post created")
    this.posts=[] 
    this.getPosts()
   }
   getPosts() {
      firebase.firestore().collection("posts").get().then((result)=>{
        this.posts=result.docs
        console.log(result.docs)
      })
   }

  ngOnInit(): void {
  }

  onDelete() {
    this.onPostCreated()
  }

}
