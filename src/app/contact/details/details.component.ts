import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange} from '@angular/core';
import {Contact} from '../../_models/contact';
import { ContactsService } from '../../_services/contacts.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  animations: [
    trigger ('state', [
      state('normal', style({
        backgroundColor: 'white'
      })),
      state('highlighted', style({
        backgroundColor: '#3f51b5'
      })),
      transition('highlighted=>normal', animate(1500))
    ])
  ]
})
export class DetailsComponent implements OnInit {
  @Input() contact: Contact;
  state = 'normal';
  constructor(public contactsService: ContactsService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const contact: SimpleChange = changes.contact;
    this.state === 'highlighted' ? this.state = 'normal' : this.state = 'highlighted';
  }
  animationEnded() {
   this.state = 'normal';
  }

  onDelete(contactId: string) {
    this.contactsService.deleteContact(contactId);
    this.contact = null;
  }

}
