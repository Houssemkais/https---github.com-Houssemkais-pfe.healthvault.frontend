import { Component, OnInit, Inject,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserControllerService } from 'src/api/services';
import { ApiResponse } from 'src/app/model/api.reponse';
import { User } from 'src/api/models/user';
import { UserserviceService } from 'src/app/service/userservice.service';
import * as moment from 'moment';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  user:User;
  date: Date = new Date();
  @ViewChild('userForm', { static: true }) userForm!: NgForm;

  constructor(
    private userControllerService: UserControllerService,
    private router: Router,
    private dialogRef: MatDialogRef<UpdateuserComponent>,
    @Inject(MAT_DIALOG_DATA) private data: User,
  ){
    this.user = { ...data };
    this.date = new Date(this.user.dateOfBirth);

  }
  formatDate2(date: string): string {
    const momentDate = moment(date, 'YYYY-MM-DD'); // Conversion de la chaîne en objet Moment
    return momentDate.format('YYYY-MM-DD');
  }

  formatDate(date: Date): string {
    const momentDate = moment(date); // Conversion de la date en objet Moment
    return momentDate.format('YYYY-MM-DD');
  }

  ngOnInit(): void {

  }
  updateUser() {
    if (this.userForm.invalid) {
      return;
      const formattedDate = this.formatDate(this.date);
    }
  
    const updatedUser: User = {
      id: this.user.id,
      firstname: this.userForm.value.firstname,
      lastname: this.userForm.value.lastname,
      email: this.userForm.value.email,
      address: this.userForm.value.address,
      dateOfBirth: this.formatDate(this.date),
      password: this.userForm.value.password,
      phone: this.userForm.value.phone,
      sex: this.userForm.value.sexe,
      userRole: this.userForm.value.userRole,
      commentaries:this.userForm.value.commentaries,
    };
  
    console.log(this.user);
    console.log(updatedUser);
  console.log(updatedUser.id);
    this.userControllerService.update({id:updatedUser.id,body: updatedUser}).subscribe(
      () => {
        this.dialogRef.close({ success: true });
      },
      (error) => {
        console.error('Error updating user:', error);
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