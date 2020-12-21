import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) {

  }

  getTotalUserCount(): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:3000/user/totalUsers')
  }

  getUsers(limit, offset): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:3000/user/all/' + limit + '/' + offset);
  }

  getFriends(userId: number, limit: number, offset: number): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:3000/user/' + userId + '/friends/' + limit + '/' + offset);
  }

  getTotalFriends(userId: number): Observable<any> {
    return this.httpClient.get("http://127.0.0.1:3000/user/" + userId + "/totalFriends")
  }
}
