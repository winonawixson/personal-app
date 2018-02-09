import { Injectable } from '@angular/core';
import { ContactDetails } from './contact-details.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactService {

  constructor() { }

  saveContactDetails(details: ContactDetails): Observable<boolean> {
    console.log('details: ', details);

    return Observable.of(false);
  }

}
