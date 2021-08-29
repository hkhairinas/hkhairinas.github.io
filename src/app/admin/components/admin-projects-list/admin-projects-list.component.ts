import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { DataService } from 'src/app/services/data.service';
import { DataService } from '../../services/data.service';
import { IFormFields } from '../../interfaces/form-fields.interface';
import { IFormModal } from '../../interfaces/form-modal.interface';

@Component({
  selector: 'app-admin-projects-list',
  templateUrl: './admin-projects-list.component.html',
  styleUrls: ['./admin-projects-list.component.css'],
})
export class AdminProjectsListComponent implements OnInit {
  projectCollectionRef = this.dataService.createCollection('projects-list');
  $projects: Observable<any[]>;

  formFields: Array<IFormFields> = [
    {
      label: 'Project Name',
      formControlName: 'projectName',
      placeholder: '',
    },
    {
      label: 'Project Url',
      formControlName: 'projectUrl',
      placeholder: '',
    },
    {
      label: 'Project Icon Url',
      formControlName: 'projectIconUrl',
      placeholder: '',
    },
  ];

  formModalContent: IFormModal = {
    title: ' Try adding a new project to this list',
    buttonText: 'Add a new project',
    isVisible: false,
    isEditing: false,
    formFields: this.formFields,
  };

  private itemId: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.$projects = this.dataService.getData(this.projectCollectionRef);
  }

  public addProject($event) {
    const { projectName, projectUrl, projectIconUrl } = $event;
    this.projectCollectionRef.add({ projectName, projectUrl, projectIconUrl });
  }

  public editProject($event) {
    const { projectName, projectUrl, projectIconUrl } = $event;
    this.projectCollectionRef
      .doc(this.itemId)
      .update({ projectName, projectUrl, projectIconUrl });
  }

  public removeProject(id: string) {
    this.projectCollectionRef.doc(id).delete();
  }

  public editModal(project: any) {
    this.formModalContent.isEditing = true;
    this.formModalContent.isVisible = true;
    this.formModalContent.title = 'Try editing this item';
    this.formModalContent.buttonText = 'Edit Project';
    this.itemId = project.id;
  }

  public showModal() {
    this.resetModalContent();
    this.formModalContent.isVisible = true;
  }

  public resetModalContent() {
    this.formModalContent.isEditing = false;
    this.formModalContent.title = 'Try adding a new project to this list';
    this.formModalContent.buttonText = 'Add a new project';
  }
}
