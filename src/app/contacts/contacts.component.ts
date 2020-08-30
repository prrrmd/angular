import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(public contactService: ContactsService) { }

  contactList: any;
  msgTrue = false;
  ngOnInit(): void {

    this.contactList = this.contactService.getContacts().subscribe(data => { // here subsribe the observable getContact()
      this.contactList = data;
    });
  }

  addNewContact()
  {
    const newFormData = { id: 5, firstname: 'Ajinkya', lastname: 'mhaske' };
    this.contactService.createContact(newFormData).subscribe(data => {
      console.log(data);
      this.msgTrue = true;
    });
  }

  UpdateContact(id)
  {
    const newFormData = { id: 5, firstname: 'Govinda', lastname: 'Patil' };
    this.contactService.updateContact(id, newFormData).subscribe(data => {
      console.log(data);
      this.msgTrue = true;
    });
  }
  deleteContact(id)
  {
    this.contactService.deleteContact(id).subscribe(data => {
      console.log(data);
      this.msgTrue = true;
    });
  }


}
