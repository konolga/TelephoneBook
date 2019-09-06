import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { CreateComponent } from '../contact/create/create.component';
import { AuthGuard } from '../_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '',
  runGuardsAndResolvers: 'always',
  canActivate: [AuthGuard],
  children: [
    { path: 'create', component: CreateComponent },
    { path: 'edit/:contactId', component: CreateComponent },
    { path: 'upload', component: CreateComponent },
    { path: 'contacts', component: ContactsComponent }
  ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
