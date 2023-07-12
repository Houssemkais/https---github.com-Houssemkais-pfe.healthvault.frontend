import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/user'; 
  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post(this.baseUrl, user)
  }
  getUsers(page: number, searchQuery: string): Observable<any> {
    const url = `${this.baseUrl}/findAll?page=${page}&searchQuery=${searchQuery}`;
    return this.http.get<any>(url);
  }
}
