import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../model/api.reponse';
import { Observable } from 'rxjs';
import { User } from '../model/user-model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:8080/user'; 

  

  findAll() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  findByid(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  create(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  update(id: number, user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  delete(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
