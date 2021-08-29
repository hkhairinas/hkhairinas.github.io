import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  $projects: Observable<any[]>;
  constructor(
    private dataService: DataService,
    private sanitize: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.$projects = this.dataService.createCollection('projects-list');
  }
  public getSanitize(url: string): SafeHtml {
    return this.sanitize.bypassSecurityTrustUrl(url);
  }
}
