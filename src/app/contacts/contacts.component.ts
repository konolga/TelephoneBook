import { Component, OnInit, Input} from '@angular/core';
import {Contact} from '../_models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
@Input() selectedContact: Contact;


  constructor() { }
  ngOnInit() {

  }
}
