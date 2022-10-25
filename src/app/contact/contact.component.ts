import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  contactForm = new FormGroup({
    email: new FormControl(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    subject: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  get email() {
    return this.contactForm.get('email');
  }
  get subject() {
    return this.contactForm.get('subject');
  }

  get body() {
    return this.contactForm.get('body');
  }

  submit() {
    let body = this.contactForm.get('body');
    let subject = this.contactForm.get('subject');
    if (body == null || subject == null) {
      return;
    }
    window.location.href =
      'mailto:williambsong@gmail.com?subject=' +
      subject.value +
      ' &body=' +
      body.value +
      '\r\n';
  }
  ngOnInit(): void {}
}
