import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ContactDetails } from './contact-details.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  successfulSave = false;

  constructor(private fb: FormBuilder,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(250),
        Validators.pattern(/^[a-zA-Z &\/.\(\)-,']+$/)]
      )],
      email: ['', Validators.compose([
        Validators.required,
        Validators.email]
      )],
      message: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(1000),
        Validators.pattern(/^[a-zA-Z &\/.\(\)-,']+$/)]
      )]
    });
  }

  saveContactDetails(event: any) {
    const contactDetails = <ContactDetails>{
      name: this.contactForm.controls.name.value,
      email: this.contactForm.controls.email.value,
      message: this.contactForm.controls.message.value
    };

    this.contactService.saveContactDetails(contactDetails)
    .subscribe(result => {
      if (result) {
        this.successfulSave = true;
        this.initializeForm();
      }
    });
  }

}
