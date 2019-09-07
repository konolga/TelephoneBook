import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TextMaskModule } from 'angular2-text-mask';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { CreateComponent } from './contact/create/create.component';
import { DetailsComponent } from './contact/details/details.component';
import { HeaderComponent } from './header/header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MaterialModule} from './material.module';
import { AppRoutingModule } from './_routes/app-routing.module';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AlertifyService} from './_services/alertify.service';
import { AuthService} from './_services/auth.service';
import { AuthGuard} from './_guards/auth.guard';



const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2350528848532809')
  }
]);



@NgModule({
   declarations: [
      AppComponent,
      ContactsListComponent,
      CreateComponent,
      DetailsComponent,
      HeaderComponent,
      ContactsComponent,
      HomeComponent,
      SignupComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MaterialModule,
      FormsModule,
      HttpClientModule,
      TextMaskModule,
      CommonModule,
      FlexLayoutModule,
      ReactiveFormsModule,
      SocialLoginModule.initialize(config)
   ],
   providers: [
    AlertifyService,
    AuthService,
    AuthGuard
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
