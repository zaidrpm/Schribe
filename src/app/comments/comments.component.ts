import { Component, OnInit,Input} from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comment:string=""
comments:any[]=[];
user:any
loggedin:boolean=false
@Input("postid") pid:string
  constructor() { 
    firebase.auth().onAuthStateChanged((tmp) => {
      if(tmp) {
      this.user=tmp
      this.loggedin=true
      }
      else
      this.loggedin=false
    })
  }
  getComments(){
    firebase.firestore().collection("comments")
    .where("postid","==",this.pid).get().then((data)=>{
      data.docs.forEach((row) =>{
        this.comments.push(row.data())
      })
    }).catch((err)=>{
      console.log(err)
    })
  }
  ngOnInit(): void {
    this.getComments()
    console.log(this.comments)
  }
  postcomment() {
    firebase.firestore().collection("comments").add({
      text:this.comment,
      postid:this.pid,
      ownername:this.user.displayName,
      owner:this.user.uid
    }).then((d)=>{
      console.log("posted")
    }).catch((er)=>{
      console.log(er)
    })
  }

}
