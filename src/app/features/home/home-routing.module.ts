import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


import { HomeComponent } from './containers/home/home.component';
import { PathwayComponent } from './containers/pathway/pathway.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';

const routes: Routes =
 [
   { 
    path: '' , component: HomeComponent ,
    children: 
    [
      { 
        path: 'pathway', component: PathwayComponent
      }

    ]
  },

  { path: 'movies' , component: MoviesListComponent },

  { path: 'Shows' , component: ShowsListComponent },

  { path: 'signin' , component: LoginFormComponent },

  { path: 'signup' , component: SignUpComponent },
  {
    path: 'welcome' , component: WelcomeComponent
  }
 ];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
