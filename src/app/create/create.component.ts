import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
@Output('postCreated') pc=new EventEmitter();
title:string
content:string
db:any 
user:any
constructor() { 
    this.db=firebase.firestore()
    this.user=firebase.auth().currentUser.uid
  }

  createPost() {
    console.log(this.title,this.content)
    this.db.collection("posts").add({
      title:this.title,
      content:this.content,
      owner:this.user
    }).then((data) => {
      console.log("Doc written with id-"+data.id)
      this.pc.emit();
    }).catch((err)=> {
      console.log("failed -",err)
    })
  }
  
  ngOnInit(): void {
  }

}
