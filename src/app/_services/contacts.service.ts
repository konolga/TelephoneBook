import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Contact } from '../_models/contact';
import { environment } from '../../environments/environment';
const BACKEND_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class ContactsService {
  private contacts: Contact[] = [];
  private contactsUpdated = new Subject<Contact[]>();

  constructor(private http: HttpClient, private router: Router) {}

  getContacts() {
    this.http
      .get<{contacts: any}>(
        BACKEND_URL + 'api/contacts'
      )
      .pipe(map((data) => {
        return data.contacts.map(contact => {
          return {
            name: contact.name,
            telephone: contact.telephone,
            id: contact._id
          };
        });
      }))
      .subscribe(transformedContacts => {
        this.contacts = transformedContacts;
        this.contactsUpdated.next([...this.contacts]);
      });
  }

  filterContacts(searchString: string){
    this.getContacts();
    return  this.contacts.filter(contact => contact.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1 )

  }


  getContactsUpdateListener() {
    return this.contactsUpdated.asObservable();
  }

  addContact(name: string, telephone: string) {
    const contact: Contact = {id: null, name: name, telephone: telephone };
    this.http
      .post<{ message: string, contactId: string }>(BACKEND_URL + 'api/contacts', contact)
      .subscribe(responseData => {
        const id = responseData.contactId;
        contact.id = id;
        this.contacts.push(contact);
        this.contactsUpdated.next([...this.contacts]);
        this.router.navigate(['/']);
      });
  }

  deleteContact(contactId: string) {
    this.http.delete(BACKEND_URL + 'api/contacts/' + contactId)
      .subscribe(() => {
        const contactsUpdated = this.contacts.filter(contact => contact.id !== contactId);
        this.contacts = contactsUpdated;
        this.contactsUpdated.next([...this.contacts]);
      });
  }


  getContact(id: string) {
    return this.http.get<{ _id: string; name: string; telephone: string }>(
      BACKEND_URL + 'api/contacts/' + id
    );
  }


  updateContact(id: string, name: string, telephone: string) {
    const contact: Contact = { id: id, name: name, telephone: telephone };
    this.http
      .put(BACKEND_URL + 'api/contacts/' + id, contact)
      .subscribe(response => {
        const updatedContacts = [...this.contacts];
        const oldContactIndex = updatedContacts.findIndex(p => p.id === contact.id);
        updatedContacts[oldContactIndex] = contact;
        this.contacts = updatedContacts;
        this.contactsUpdated.next([...this.contacts]);
        this.router.navigate(['/']);
      });
  }

}
