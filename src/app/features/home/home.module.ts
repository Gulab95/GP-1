import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { PathwayComponent } from './containers/pathway/pathway.component';
import { WelcomeComponent } from './containers/welcome/welcome.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { MediumHeaderComponent } from './components/medium-header/medium-header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ShowsListComponent } from './components/shows-list/shows-list.component';
import { ReactiveFormsModule } from '@angular/forms';






@NgModule({

  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: 
  [
    HomeComponent,
    PathwayComponent,
    WelcomeComponent,
    MediumHeaderComponent,
    LoginFormComponent,
    SignUpComponent,
    MoviesListComponent,
    ShowsListComponent,
 
  ],
  exports:
  [
    MediumHeaderComponent,
    WelcomeComponent
  ]
  
})
export class HomeModule { }
