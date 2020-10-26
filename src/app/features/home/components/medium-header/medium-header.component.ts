import { Component, OnInit } from '@angular/core';

interface NavLinkModel {

}

@Component({
  selector: 'app-medium-header',
  templateUrl: './medium-header.component.html',
  styleUrls: ['./medium-header.component.scss']
})
export class MediumHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  navLinks() {
    return [
      { Name : 'Home' , path: '/home' },
      { Name : 'Movies' , path: '/movies' },
      { Name : 'Shows' , path: '/Shows' },
      { Name : 'Login' , path: '/signin' },
      { Name : 'Sign-Up' , path: '/signup' },

    ]
  }

 

}
