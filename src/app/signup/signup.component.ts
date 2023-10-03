import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
   @Input() user: User | null = null;
   @Output() form = new EventEmitter<User>();

   submit(form: NgForm){
    this.form.emit(form.value)
   }
}
