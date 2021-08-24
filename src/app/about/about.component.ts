import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  btnLink = [
    {title: 'My Linkedin', class: 'mdi mdi-linkedin', url: 'https://www.linkedin.com/in/hkhairinas/'},
    {title: 'My Instagram', class: 'mdi mdi-instagram', url: 'http://www.instagram.com/hkhairinnas'},
    {title: 'My Twitter', class: 'mdi mdi-twitter', url: 'https://twitter.com/HKhairinas'},
    {title: 'My Facebook', class: 'mdi mdi-facebook', url: 'https://www.facebook.com/hkhairinas'},
  ];

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }
}
