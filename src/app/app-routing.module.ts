import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { CreateComponent } from './contact/create/create.component';

const routes: Routes = [
  { path: '', component: ContactsComponent },
  { path: 'create', component: CreateComponent },
  { path: 'edit/:contactId', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
