import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'; // 3.1 import http & inject it

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient: HttpClient) { } // 3.2 injection in ctr

  getContacts()
  {
    // 3.3 get method
    // URL passed to get() Endpoint respose data.
    return this.httpClient.get('http://localhost:3000/contacts'); // this will always return a observable So we have to subscribe it
  }

  createContact(createResourse)
  {
    return this.httpClient.post('http://localhost:3000/contacts', createResourse);
  }

  updateContact(id, updateResourse)
  {
    return this.httpClient.put('http://localhost:3000/contacts/'+id, updateResourse);
  }

  deleteContact(id)
  {
    return this.httpClient.delete('http://localhost:3000/contacts/'+id);
  }

}
