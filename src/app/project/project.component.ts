import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  links = ['Projects', 'Applications'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  listProjects = [
    {title: 'AplikasiDB', url:'https://github.com/hkhairinas/AplikasiDB', icon: 'book', color: 'green'},
    {title: 'Buku Toko', url:'/buku-toko/', icon: 'book', color: 'blue'},
    {title: 'Decision Support System', url:'https://github.com/hkhairinas/DSSFinalProject', icon: 'book', color: 'green'},
    // {title: 'Inventory Toko', url:'project', icon: 'book', color: 'red'},
    // {title: 'JelajahStudies', url:'project', icon: 'book', color: 'red'},
    {title: 'RF Autoloot', url:'https://github.com/hkhairinas/RFAutoLoot', icon: 'book', color: 'green'},
  ];

  listApps = [
    {title: 'Buku Toko', url:'/buku-bunda/'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
