// ANGULAR IMPORTS
// THIRD PARTY MODULES
// ANTD MODULES
// LOCAL MODULES AND COMPONENTS

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '' ,  
    children: 
    [
      { path: '' , redirectTo: '/home' , pathMatch: 'full' },
      { path: 'home' , loadChildren: () => import('./features/home/home.module').then( m => m.HomeModule) }
    ]
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
