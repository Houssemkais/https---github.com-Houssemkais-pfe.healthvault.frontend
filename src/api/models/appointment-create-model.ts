/* tslint:disable */
/* eslint-disable */
import { LocalTime } from './local-time';
export interface AppointmentCreateModel {
  available?: boolean;
  date: string;
  doctor_id: number;
  endTime?: LocalTime;
  patient_id: number;
  reason: string;
  startTime: LocalTime;
  status: 'EN_COURS' | 'ANNULE';
}
