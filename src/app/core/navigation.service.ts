import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  defaultNavigationExtrans: NavigationExtras;

  ROUTES = {
    Home: '/home',
    Example: '/example',
    Shows: '/Shows',
    Movies: '/movies',
    Login: '/signin',
    SignUp: '/signup'

  }
  constructor( private router: Router) { }

  goToLoginPage() {
    console.log('default extras :', this.defaultNavigationExtrans);
    const url = `${ this.ROUTES.Login }`;
    this.router.navigate([ url ], this.defaultNavigationExtrans)
  }

  goToSignUpPage() {
    console.log('default extras :', this.defaultNavigationExtrans);
    const url = `${ this.ROUTES.SignUp }`;
    this.router.navigate([ url ], this.defaultNavigationExtrans)
  }

}
