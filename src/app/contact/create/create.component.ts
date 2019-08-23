import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactsService } from '../../_services/contacts.service';
import { NgForm } from '@angular/forms';
import {Contact} from '../../_models/contact';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  mask: any[] = ['(', /[0-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  wasCreated: Boolean;
  isLoading = false;
  contactCreated: Contact;
  public contact: Contact;
  private mode = 'create';
  private contactId: string;
  constructor(public contactsService: ContactsService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('contactId')) {
        this.mode = 'edit';
        this.contactId = paramMap.get('contactId');
        this.isLoading = true;
        this.contactsService.getContact(this.contactId).subscribe(data => {
          this.isLoading = false;
          this.contact = {id: data._id, name: data.name, telephone: data.telephone};
        });
      } else {
        this.mode = 'create';
        this.contactId = null;
      }
    });
  }

  onSaveContact(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === 'create') {
    this.contactsService.addContact(form.value.name, form.value.telephone);
    this.wasCreated = true;
    this.contactCreated = {id: null, name: form.value.name, telephone: form.value.telephone}
    } else {
    this.contactsService.updateContact(
      this.contactId,
      form.value.name,
      form.value.telephone
    );
  }
    form.resetForm();

  }

  onFormValidation(form: NgForm) {

    return form.invalid;

  }

}
