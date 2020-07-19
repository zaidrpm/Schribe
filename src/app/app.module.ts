import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { SignupComponent } from './signup/signup.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component'

let firebaseConfig = {
  apiKey: "AIzaSyDmhIxQlJWM7WWOyA-H-ayuyLhB5I4TjoQ",
  authDomain: "schribe-fe05a.firebaseapp.com",
  databaseURL: "https://schribe-fe05a.firebaseio.com",
  projectId: "schribe-fe05a",
  storageBucket: "schribe-fe05a.appspot.com",
  messagingSenderId: "757655575625",
  appId: "1:757655575625:web:d9453d3bb1d96932b17398",
  measurementId: "G-F4ZZVR8PVS"
};
firebase.initializeApp(firebaseConfig)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MenuComponent,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
