import { Component, OnInit, Input} from '@angular/core';
import {Contact} from '../../_models/contact';
import { ContactsService } from '../../_services/contacts.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() contact: Contact;

  constructor(public contactsService: ContactsService) { }

  ngOnInit() {
  }

  onDelete(contactId: string) {
    this.contactsService.deleteContact(contactId);
    this.contact = null;
  }

}
