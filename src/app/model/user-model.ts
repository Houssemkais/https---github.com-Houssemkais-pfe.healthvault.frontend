export class User{
    id!: number;
    firstname!: string;
    lastname!: string;
    email!: string;
    password!: string;
 dateOfBirth!: Date;
    phone!: string;
    sexe!: string;
    userRole!: UserRole;
    address!: string;
}
export enum UserRole{
  ADMIN,
  PATIENT,
  DOCTOR,
  SECRETARY, 
}