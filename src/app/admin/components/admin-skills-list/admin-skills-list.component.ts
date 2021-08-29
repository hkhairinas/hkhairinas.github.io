import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IFormFields } from '../../interfaces/form-fields.interface';
import { IFormModal } from '../../interfaces/form-modal.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin-skills-list',
  templateUrl: './admin-skills-list.component.html',
  styleUrls: ['./admin-skills-list.component.css'],
})
export class AdminSkillsListComponent implements OnInit {
  skillCollectionRef = this.dataService.createCollection('skills-list');
  $skills: Observable<any[]>;

  formFields: Array<IFormFields> = [
    {
      label: 'Skill Name',
      formControlName: 'skillName',
      placeholder: '',
    },
    {
      label: 'Skill Level',
      formControlName: 'skillLevel',
      placeholder: '',
    },
    {
      label: 'Skill Image Url',
      formControlName: 'skillImgUrl',
      placeholder: '',
    },
    {
      label: 'Skill Icon Style',
      formControlName: 'style',
      placeholder: '',
    },
  ];

  formModalContent: IFormModal = {
    title: ' Try adding a new skill to this list',
    buttonText: 'Add a new skill',
    isVisible: false,
    isEditing: false,
    formFields: this.formFields,
  };

  private itemId: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.$skills = this.dataService.getData(this.skillCollectionRef);
  }

  public addSkill($event) {
    const { skillName, skillLevel, skillImgUrl, style } = $event;
    this.skillCollectionRef.add({ skillName, skillLevel, skillImgUrl, style });
  }

  public editSkill($event) {
    const { skillName, skillLevel, skillImgUrl, style } = $event;
    this.skillCollectionRef
      .doc(this.itemId)
      .update({ skillName, skillLevel, skillImgUrl, style });
  }

  public removeSkill(id: string) {
    this.skillCollectionRef.doc(id).delete();
  }

  public resetModalContent() {
    this.formModalContent.isEditing = false;
    this.formModalContent.title = 'Try adding a new item';
    this.formModalContent.buttonText = 'Add a new skill';
  }

  public showModal() {
    this.resetModalContent();
    this.formModalContent.isVisible = true;
  }

  public editModal(skill: any) {
    this.formModalContent.isEditing = true;
    this.formModalContent.isVisible = true;
    this.formModalContent.title = 'Try editing this item';
    this.formModalContent.buttonText = 'Edit skill';
    this.itemId = skill.id;
  }
}
