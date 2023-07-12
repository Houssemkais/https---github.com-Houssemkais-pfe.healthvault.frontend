import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PasswordResetService } from './PasswordResetService';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email:string = '';
  resetPassword(){
    this.passwordResetService.requestPasswordReset(this.email)
    .subscribe(() => {
      console.log('Demande de réinitialisation de mot de passe soumise avec succès.');
      // Ajoutez ici votre logique de redirection ou d'affichage de messages à l'utilisateur
    });
  }

  constructor(private passwordResetService: PasswordResetService) { }

}
