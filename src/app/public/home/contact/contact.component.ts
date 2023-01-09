import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  isSubmit : boolean = false;

  contactForm = new FormGroup({
    nom: new FormControl('',[
      Validators.required
    ]),
    prenom: new FormControl('',[
      Validators.required
    ]),
    mail: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    message: new FormControl('',[
      Validators.required
    ])
  });

  submit(){
    this.isSubmit = true;
    setTimeout(() => {this.contactForm.reset(); 
                      this.isSubmit = false;}, 5000);    
  }

  get mail(): any {
    return this.contactForm.get('mail');
  }

}
