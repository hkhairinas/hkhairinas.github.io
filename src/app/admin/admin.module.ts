import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ComponentsComponent } from './components/components.component';
import { GuardsComponent } from './guards/guards.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { PagesComponent } from './pages/pages.component';
import { ServicesComponent } from './services/services.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { AdminAboutMeComponent } from './components/admin-about-me/admin-about-me.component';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';
import { AdminProjectsListComponent } from './components/admin-projects-list/admin-projects-list.component';
import { AdminSkillsListComponent } from './components/admin-skills-list/admin-skills-list.component';
import { AdminToolsListComponent } from './components/admin-tools-list/admin-tools-list.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    GuardsComponent,
    InterfacesComponent,
    PagesComponent,
    ServicesComponent,
    AdminPageComponent,
    AuthPageComponent,
    MessagesPageComponent,
    AdminMessagesComponent,
    AdminProjectsListComponent,
    AdminSkillsListComponent,
    AdminToolsListComponent,
    FormModalComponent,
    HeaderComponent,
    AdminAboutMeComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, ReactiveFormsModule],
})
export class AdminModule {}
