import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-component-with-signup-form-master-angular';

  user: User | null = null

  submitHandler(user: User){
    console.log(user);
  }

}
