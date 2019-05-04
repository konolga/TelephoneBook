import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import {Contact} from '../../contact/contact.model';
import { ContactsService } from '../../contacts/contacts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit, OnDestroy {
contacts: Contact[] = [];
private contactsSub: Subscription;
@Output() contactWasSelected = new EventEmitter<Contact>();

constructor(public contactsService: ContactsService) { }

  ngOnInit() {
    this.contactsService.getContacts();
    this.contactsSub = this.contactsService.getContactsUpdateListener()
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
      });
}


onSelected(contact: Contact) {
  this.contactWasSelected.emit(contact);
}



ngOnDestroy() {
 this.contactsSub.unsubscribe();
}

}
