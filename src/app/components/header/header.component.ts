import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  resumeDownloadLink = '#'; //Add Download Link here
  LinkedinLink = 'https://www.linkedin.com/in/hkhairinas/'; // Add Linkedin Link here
  GithubLink = 'https://github.com/hkhairinas'; // Add Github Link here
  TwitterLink = 'https://twitter.com/HKhairinas'; // Add Linkedin Link here

  constructor() {}

  ngOnInit(): void {}
}
