import { Component, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import {Contact} from '../../_models/contact';
import { ContactsService } from '../../_services/contacts.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit, OnDestroy {
contacts: Contact[] = [];
private contactsSub: Subscription;
filteredContacts: Contact[] = [];

@Output() contactWasSelected = new EventEmitter<Contact>();

constructor(public contactsService: ContactsService) { }

private _searchTerm: string;
get searchTerm(): string {
  return this._searchTerm;
}
set searchTerm(value: string) {
this._searchTerm = value;
this.filteredContacts = this.contactsService.filterContacts(value);
}



ngOnInit() {

  this.contactsService.getContacts();
  this.contactsSub = this.contactsService.getContactsUpdateListener()
      .subscribe((contacts: Contact[]) => {
        if (this.searchTerm) { this.contacts = this.filteredContacts; } else {this.contacts = contacts;}
      });
}



onSelected(contact: Contact) {
  this.contactWasSelected.emit(contact);
}



ngOnDestroy() {
 this.contactsSub.unsubscribe();
}


}
