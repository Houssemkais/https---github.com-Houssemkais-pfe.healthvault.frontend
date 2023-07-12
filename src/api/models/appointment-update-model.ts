/* tslint:disable */
/* eslint-disable */
export interface AppointmentUpdateModel {
  date: string;
  reason: string;
  status: 'PLANIFIE' | 'EN_COURS' | 'TERMINE' | 'ANNULE';
}
