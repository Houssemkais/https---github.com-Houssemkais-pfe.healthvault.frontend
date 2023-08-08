/* tslint:disable */
/* eslint-disable */
import { Admin } from './admin';
import { Doctor } from './doctor';
import { LocalTime } from './local-time';
import { Patient } from './patient';
import { Secretary } from './secretary';
import { User } from './user';
export interface Appointment {
  createdBy?: (User | Admin | Doctor | Patient | Secretary);
  date: string;
  doctor: Doctor;
  endTime?: LocalTime;
  id: number;
  patient: Patient;
  reason: string;
  startTime: LocalTime;
  status: 'EN_COURS' | 'ANNULE';
}
