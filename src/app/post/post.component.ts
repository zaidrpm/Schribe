import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input('post') post:any;
@Output('onDelete') od=new EventEmitter();
postdata:any={}; //empty json obj
user:any={};
  constructor() { }

  ngOnInit(): void {
    this.postdata=this.post.data();
    this.user=firebase.auth().currentUser
  }
delete() {
firebase.firestore().collection("posts").doc(this.post.id).delete().then(()=>{
  this.od.emit();
})
}
}
