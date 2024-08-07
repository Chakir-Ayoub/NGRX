import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  urlApi: string = 'https://api.github.com/users';
  // constructor(private http: HttpClient) { }

  http = inject(HttpClient);

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.urlApi);
  }
}
