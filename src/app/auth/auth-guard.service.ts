import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {Authservice} from "./authservice";

@Injectable()
export class AuthGuard implements  CanActivate{

  constructor(private  authService: Authservice){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    return this.authService.isAuthenticated();
  }
}
