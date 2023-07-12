/* tslint:disable */
/* eslint-disable */
import { Admin } from './admin';
import { Doctor } from './doctor';
import { Patient } from './patient';
import { Secretary } from './secretary';
import { User } from './user';
export interface Appointment {
  createdBy?: (User | Admin | Doctor | Patient | Secretary);
  date?: string;
  doctor?: Doctor;
  id?: number;
  patient?: Patient;
  reason?: string;
  statut: 'PLANIFIE' | 'EN_COURS' | 'TERMINE' | 'ANNULE';
}
