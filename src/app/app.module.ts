import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { CreateComponent } from './contact/create/create.component';
import { DetailsComponent } from './contact/details/details.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import {MaterialModule} from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { ContactsUploadComponent } from './contacts/contacts-upload/contacts-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ContactsListComponent,
    CreateComponent,
    DetailsComponent,
    HeaderComponent,
    ContactsComponent,
    ContactsUploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
