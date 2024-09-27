import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PasswordForgotControllerService } from 'src/api/services';
import { PasswordForgotDto } from 'src/api/models';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email:string = '';
  constructor(
    private passwordResetService:PasswordForgotControllerService ,
    private router: Router
  ) {}

  resetPassword(): void {
    const passwordForgotDto: PasswordForgotDto = {
      email: this.email
    };

    this.passwordResetService.processForgotPasswordForm({ body: passwordForgotDto }).subscribe(
      () => {
        // Password reset request successful
        // You can perform any necessary actions here, such as displaying a success message
        // and redirecting the user to a confirmation page
        this.router.navigate(['/password-reset-success']);
      },
      (error) => {
        // Handle error responses from the server
        // You can display an error message or perform any necessary actions
        console.error('An error occurred:', error);
      }
    );
  }

}
