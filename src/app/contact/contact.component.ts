import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder
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

  saveContactMessage(event: any) {
    console.log('saving... ', event);
    console.log(this.contactForm.controls.name.value);
    console.log(this.contactForm.controls.email.value);
    console.log(this.contactForm.controls.message.value);

  }

}
