import { Component, ViewChild } from '@angular/core';
import { UserService } from './user.service';
import { FormControl, Validators,FormGroup, NgForm } from '@angular/forms';
import { User } from 'src/api/models/user';
import { UserControllerService } from 'src/api/services';
import { Router } from '@angular/router';
import { CreateuserComponent } from '../Admin/User/createuser/createuser.component';
import { MatDialogRef } from '@angular/material/dialog';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationStatus: string | null = null;
   goToLoginPage() {
     // Redirection vers la page de connexion
    window.location.href = "";
  }



  
 
  
  user: User = {
    address: '',
    dateOfBirth: '',
    email: '',
    firstname: '',
    id: 0,
    lastname: '',
    password: '',
    phone: '',
    sex: 'HOMME',
    userRole: 'PATIENT'
  };  errorMessage: string = '';
 
  @ViewChild('userForm', { static: true })
  userForm: FormGroup = new FormGroup({
    // ... other form controls
    email: new FormControl('', [Validators.required, Validators.email])
  });
  constructor(private userControllerService: UserControllerService,
    private router: Router,  private snackBar: MatSnackBar) {
  
  
     }
    
   
  ngOnInit() {
  
  }

  formatDate(date: string): string {
    const momentDate = moment(date, 'YYYY-MM-DD'); // Conversion de la chaîne en objet Moment
    return momentDate.format('YYYY-MM-DD');
  }
  addUser() {
    if (!this.isFormValid()) {
      return;
    }

    const formattedDate = this.formatDate(this.user.dateOfBirth);
    this.user.dateOfBirth = formattedDate;

    this.userControllerService.create({ body: this.user }).subscribe(
      response => {
              this.registrationStatus = 'Utilisateur enregistré avec succès';
              console.log('Utilisateur enregistré avec succès', response);
              this.snackBar.open('User registered successfully', 'Close', {
                duration: 3000
              });
              setTimeout(() => {
                this.goToLoginPage();
              }, 3000); 
            },
      (error) => {
        if (error.status === 400) {
          this.errorMessage = 'Email already exists.';
        } else {
          this.errorMessage = 'Error adding user.';
        }
        console.error('Error adding user:', error);
      }
    );
  }
  isFormValid(): boolean {
    // Check if all required fields are filled and the form is valid
    return (
      this.userForm.valid &&
      this.userForm.value.firstname &&
      this.userForm.value.lastname &&
      this.userForm.value.email &&
      this.userForm.value.address &&
      this.userForm.value.dateOfBirth &&
      this.userForm.value.password &&
      this.userForm.value.phone &&
      this.userForm.value.sexe 

    );
  }
}


