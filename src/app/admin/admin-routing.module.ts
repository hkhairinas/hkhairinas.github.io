import { AuthGuard } from './guards/auth.guard';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: AuthPageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard] },
  {
    path: 'messages',
    component: AdminMessagesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
