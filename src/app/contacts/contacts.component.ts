import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service'; // 2.import service

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  constructor(public contactService: ContactsService) { } // 3.inject service
  // 4. create the one array & at initialization get all contacts reurning by getContact method of service in it

  contactList = [];
  ngOnInit(): void {
    this.contactList = this.contactService.getConstacts();
  }

}
