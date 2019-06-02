import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsUploadComponent } from './contacts-upload.component';

describe('ContactsUploadComponent', () => {
  let component: ContactsUploadComponent;
  let fixture: ComponentFixture<ContactsUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
