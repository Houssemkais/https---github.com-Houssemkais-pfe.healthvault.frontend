/* tslint:disable */
/* eslint-disable */
export interface AppointmentCreateModel {
  date: string;
  doctor_id: number;
  patient_id: number;
  reason: string;
  status: 'PLANIFIE' | 'EN_COURS' | 'TERMINE' | 'ANNULE';
}
