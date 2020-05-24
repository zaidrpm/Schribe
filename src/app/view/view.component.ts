import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  post:any=false
  postid:any=0
  constructor(public ar:ActivatedRoute) { 
    this.postid=this.ar.snapshot.paramMap.get('postid')
    firebase.firestore().collection("posts").doc(this.postid).get().then((data)=> {
      this.post=data.data()
      console.log(this.post)
    })
  }

  ngOnInit(): void {
  }

}
