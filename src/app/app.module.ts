import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { ServicesComponent } from './services/services.component';
import { PagesComponent } from './pages/pages.component';
import { ComponentsComponent } from './components/components.component';
import { SuiModalModule, SuiModule } from 'ng2-semantic-ui';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { ToolListComponent } from './components/tool-list/tool-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { SanitizeHtmlDirective } from './sanitize-html.directive';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    InterfacesComponent,
    ServicesComponent,
    PagesComponent,
    ComponentsComponent,
    AboutMeComponent,
    ContactFormComponent,
    HeaderComponent,
    ProjectListComponent,
    SkillListComponent,
    ToolListComponent,
    SanitizeHtmlDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
