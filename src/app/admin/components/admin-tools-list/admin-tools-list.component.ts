import { Component, OnInit } from '@angular/core';
import { IFormFields } from '../../interfaces/form-fields.interface';
import { IFormModal } from '../../interfaces/form-modal.interface';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-admin-tools-list',
  templateUrl: './admin-tools-list.component.html',
  styleUrls: ['./admin-tools-list.component.css'],
})
export class AdminToolsListComponent implements OnInit {
  toolCollectionRef = this.dataService.createCollection('tools-list');
  $tools: Observable<any[]>;

  formFields: Array<IFormFields> = [
    {
      label: 'Tools Name',
      formControlName: 'toolsName',
      placeholder: '',
    },
    {
      label: 'Tools Image Url',
      formControlName: 'ToolsImgUrl',
      placeholder: '',
    },
  ];

  formModalContent: IFormModal = {
    title: ' Try adding a new tools to this list',
    buttonText: 'Add a new tools',
    isVisible: false,
    isEditing: false,
    formFields: this.formFields,
  };

  private itemId: string;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.$tools = this.dataService.getData(this.toolCollectionRef);
  }

  public addTool($event) {
    const { toolsName, toolsImgUrl } = $event;
    this.toolCollectionRef.add({ toolsName, toolsImgUrl });
  }

  public editTool($event) {
    const { toolsName, toolsImgUrl } = $event;
    this.toolCollectionRef.doc(this.itemId).update({ toolsName, toolsImgUrl });
  }

  public removeTool(id: string) {
    this.toolCollectionRef.doc(id).delete();
  }

  public resetModalContent() {
    this.formModalContent.isEditing = false;
    this.formModalContent.title = 'Try adding a new item';
    this.formModalContent.buttonText = 'Add a new tools';
  }

  public showModal() {
    this.resetModalContent();
    this.formModalContent.isVisible = true;
  }

  public editModal(tools: any) {
    this.formModalContent.isEditing = true;
    this.formModalContent.isVisible = true;
    this.formModalContent.title = 'Try editing this item';
    this.formModalContent.buttonText = 'Edit tools';
    this.itemId = tools.id;
  }
}
