import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, } from '@angular/forms';

@Component({
  selector: 'app-signup-account',
   standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup-account.component.html',
  styleUrl: './signup-account.component.scss'
})
export class SignupAccountComponent {
   title ="signup-account works!"
   signupForm: FormGroup;

   tite(){
   return this.title
   }
   constructor(){
    this.signupForm = new FormGroup({

    })
   }

   onSubmit(){
    this.signupForm

   }
}

