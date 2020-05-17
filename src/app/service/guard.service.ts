import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate{
  private logeado: boolean = false;

  constructor(private router: Router) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    if(!this.logeado) {
      this.router.navigate(['login']);
    }
    return this.logeado;
  }

  login() {
    this.logeado = true;
  }

  logout() {
    this.logeado = false;
  }
}
