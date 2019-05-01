import { Component, OnInit } from '@angular/core';
import {Contact} from '../../contact/contact.model'

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class contactsListComponent implements OnInit {
contacts: Contact[] = [
  new Contact("test name", 123456789)
];
  constructor() { }

  ngOnInit() {
  }

}
