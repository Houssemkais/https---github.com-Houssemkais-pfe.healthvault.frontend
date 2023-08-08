import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { User } from 'src/api/models/user';
import { UserControllerService } from 'src/api/services';
import * as moment from 'moment';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit{
  user: User = {
    address: '',
    dateOfBirth: '',
    email: '',
    firstname: '',
    id: 0,
    lastname: '',
    password: '',
    commentaries:'',
    phone: '',
    sex: 'HOMME',
    userRole: 'ADMIN'
  };  errorMessage: string = '';

  @ViewChild('userForm', { static: true })
  userForm!: NgForm;
  constructor(private userControllerService: UserControllerService,
    private router: Router,    private dialogRef: MatDialogRef<CreateuserComponent>) {

     }
   
  ngOnInit() {}
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
      () => {
        this.dialogRef.close({ success: true });
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
      this.userForm.value.sexe &&
      this.userForm.value.userRole
    );
  }
}
