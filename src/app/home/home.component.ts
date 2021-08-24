import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sList = [
    {name: 'PHP', power: '70', icon: 'php'},
    {name: 'Javascript', power: '70', icon: 'js'},
    {name: 'SQL', power: '80', icon: 'sql'},
    {name: 'C#', power: '60', icon: 'cs'},
    {name: 'Java', power: '60', icon: 'java'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
