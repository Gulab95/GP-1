import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  movieList = [
    { Title: 'Jumanji' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTh9KhOxPtUBG6cQ_Fz7xbdqNQK_4EdT3SGGQ&usqp=CAU'},
    { Title : 'Into The Woods' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUiO4knU4d_NIpb77LeD5Uwqqug1HalEcNmg&usqp=CAU'},
    { Title : 'The Departed' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRSnlMeY2_mg-pmnTgQskuhDbAzt2BkUg2Xw&usqp=CAU'},
    { Title : 'Mogli' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjszvLOHVmLOtcT5h16d-2X9cnBDHQEhUx9w&usqp=CAU'},
    { Title : 'X-Man' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8T3IZ9TbN2U1W6opjg6_E86gf_CWsHXsFOw&usqp=CAU'},
    { Title : 'The Dictator' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqCqim-up7TUPpRYS0no1DAyO-4cFOe0WLPA&usqp=CAU'},
    { Title : 'Venum' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSRy1eg4I5BHr_YQWl3AI-PnSdYA5PmgV0zGg&usqp=CAU'},
    { Title : 'J&D' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2Ei8V3wukaLAtlrSaOYC14RlPya14y9XHeg&usqp=CAU'},
    { Title : 'C-One' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQplJDzjCKkJicfj0aQ1jygE-4vwJ0XRLHsg&usqp=CAU'},
    { Title : 'C-Two' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdhQwGaTAx6omPqX75SrSL-yiTwmD2c-Sfbw&usqp=CAU'},
    { Title : 'Mogli' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjszvLOHVmLOtcT5h16d-2X9cnBDHQEhUx9w&usqp=CAU'},
    { Title : 'X-Man' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8T3IZ9TbN2U1W6opjg6_E86gf_CWsHXsFOw&usqp=CAU'},
    { Title : 'The Dictator' , imgPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqCqim-up7TUPpRYS0no1DAyO-4cFOe0WLPA&usqp=CAU'},
  ];

}
