import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { contactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { DeleteComponent } from './contact/delete/delete.component';
import { UpdateComponent } from './contact/update/update.component';
import { CreateComponent } from './contact/create/create.component';
import { SearchComponent } from './search/search.component';
import { DetailsComponent } from './contact/details/details.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    contactsListComponent,
    DeleteComponent,
    UpdateComponent,
    CreateComponent,
    DetailsComponent,
    SearchComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
