import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProjectsListComponent } from './admin-projects-list.component';

describe('AdminProjectsListComponent', () => {
  let component: AdminProjectsListComponent;
  let fixture: ComponentFixture<AdminProjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProjectsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
