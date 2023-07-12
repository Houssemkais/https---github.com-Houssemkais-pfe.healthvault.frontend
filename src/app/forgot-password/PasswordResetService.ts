import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {
  private apiUrl = '';

  constructor(private http: HttpClient) { }

  requestPasswordReset(email: string) {
    const requestBody = { email };
    return this.http.post(this.apiUrl, requestBody);
  }
}