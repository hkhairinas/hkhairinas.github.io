import { Component, OnInit, Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css'],
})
export class SkillListComponent implements OnInit {
  $skills: Observable<any[]>;
  constructor(
    private dataService: DataService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.$skills = this.dataService.createCollection('skills-list');
  }
}
