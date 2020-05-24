import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate {
  constructor(public au:AuthService, public r:Router) {}
  //Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    let f=this.au.login_status();
    return new Promise((resolve,reject)=>{
      if(f)
      resolve(true)
      else
      this.r.navigate(['/login'])
      resolve(false)
    })
    
  }
  
}
