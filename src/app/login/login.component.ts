import { Component, OnInit } from '@angular/core';


import { JwtControllerService } from '../../api/services/jwt-controller.service';
import { JwtRequestModel, JwtResponseModel } from 'src/api/models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username!: string;
  password!: string;
  passwordHidden: boolean = true;
  loginError: boolean = false;
  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;}

  constructor(private jwtControllerService: JwtControllerService,private router: Router) {}

  isUsernameEmpty(): boolean {
    return !this.username || this.username.trim() === '';
  }
  isPasswordEmpty(): boolean {
    return !this.password || this.password.trim() === '';
  }

  login(): void {
    // Validate that username and password are not empty
    if (this.isUsernameEmpty() || this.isPasswordEmpty()) {
      console.error('Username and password are required.');
      return;
    }

    const jwtRequestModel: JwtRequestModel = {
      username: this.username,
      password: this.password
    };

    this.jwtControllerService.createToken({ body: jwtRequestModel }).subscribe(
      (token: JwtResponseModel) => {
        // Handle the successful response here
        console.log('Token:', token.token);

        // Store the token in localStorage
        localStorage.setItem('token', token.token);

        // Redirect to the dashboard admin page
        this.router.navigate(['/admin']);

        // You can also decode the token to get user information if needed
        const decodedToken = this.decodeToken(token.token);
        console.log('User Info:', decodedToken);
      },
      (error: any) => {
        // Handle the error here
        console.error('Login error:', error);
        // Show an error message or perform any necessary actions
        this.loginError = true;
      }
    );
  }

  // Helper method to decode the token (optional, if needed)
  decodeToken(token: string): any {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const decodedToken = JSON.parse(window.atob(base64));

  // Extract the user information
  const userInfo = {
    firstName: decodedToken.firstName,
    lastName: decodedToken.lastName,
    dateOfBirth: decodedToken.dateOfBirth,
    // Add any other properties you need
  };

  return userInfo;

 }}

  

 


