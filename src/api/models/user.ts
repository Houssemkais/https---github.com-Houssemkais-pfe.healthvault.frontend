/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from './granted-authority';
export interface User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  address: string;
  authorities?: Array<GrantedAuthority>;
  createdAt?: string;
  credentialsNonExpired?: boolean;
  dateOfBirth: string;
  email: string;
  enabled?: boolean;
  firstname: string;
  id: number;
  lastname: string;
  password: string;
  phone: string;
  sex: 'HOMME' | 'FEMME';
  updatedAt?: string;
  userRole: 'ADMIN' | 'PATIENT' | 'DOCTOR' | 'SECRETARY';
  username?: string;
}
