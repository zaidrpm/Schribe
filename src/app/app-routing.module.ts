import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import {MyguardGuard} from './myguard.guard';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:"full"},
  {path:'myblogs',component:MyblogsComponent,canActivate:[MyguardGuard]},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'profile',component:ProfileComponent},
  {path:'view/:postid',component:ViewComponent},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
