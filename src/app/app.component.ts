import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  title = 'hkhairinas';
  menuLink = [
    {title: 'About', url: '/about/', icon: 'person'},
    {title: 'Projects', url: '/project/', icon: 'book'},
  ];

  btnLink = [
    {title: 'My Linkedin', class: 'mdi mdi-linkedin', url: 'https://www.linkedin.com/in/hkhairinas/'},
    {title: 'My Twitter', class: 'mdi mdi-twitter', url: 'https://twitter.com/HKhairinas'},
  ];

  constructor(
    private router: Router,
    private observer: BreakpointObserver
    ) {
    let path = localStorage.getItem('path');
    if(path) {
      localStorage.removeItem('path');
      this.router.navigate([path]);
    }
  }

  ngAfterViewInit(): void {
    this.observer.observe(['(max-width: 768px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })

  }
}
