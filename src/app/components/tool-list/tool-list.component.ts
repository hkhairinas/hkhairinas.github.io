import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.component.html',
  styleUrls: ['./tool-list.component.css'],
})
export class ToolListComponent implements OnInit {
  $tools: Observable<any>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.$tools = this.dataService.createCollection('tools-list');
  }
}
