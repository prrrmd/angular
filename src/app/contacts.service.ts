// 1. created service

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Avalliable at root level ie To All.
})
export class ContactsService {

  constructor() { }
  // tslint:disable-next-line: typedef
  getConstacts() // created method which return json array object. we can access these for any component
  {
    const contactList = [
      { id: 1, name: 'Pramod' },
      { id: 2, name: 'Shubhm' },
      { id: 3, name: 'Aakash' },
      { id: 4, name: 'Jayant'},
    ];
    return contactList;
  }

  getConstactsMethod2() // created method which return json array object. we can access these for any component
  {
    const contactList = [
      { id: 1, name: 'Pramod' },
      { id: 2, name: 'Shubhm' },
      { id: 3, name: 'Aakash' },
      { id: 4, name: 'Jayant'},
    ];
    console.log(contactList) ;
  }
}
