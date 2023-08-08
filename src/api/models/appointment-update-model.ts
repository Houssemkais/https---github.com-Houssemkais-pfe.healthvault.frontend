/* tslint:disable */
/* eslint-disable */
import { LocalTime } from './local-time';
export interface AppointmentUpdateModel {
  available?: boolean;
  date: string;
  doctor_id: number;
  endTime?: LocalTime;
  reason: string;
  startTime: LocalTime;
  status: 'EN_COURS' | 'ANNULE';
}
