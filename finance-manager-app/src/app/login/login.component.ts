import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Properties for user credentials
  username: string = '';
  password: string = '';

  // Method to handle login
  login() {
    // Logic for user authentication goes here
  }
}