import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, Observable, of, tap, throwError } from 'rxjs';
import { SearchResponse, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class GithubApiService {
  urlApi: string = 'https://api.github.com';
  // constructor(private http: HttpClient) { }

  http = inject(HttpClient);

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.urlApi}/users`);
  }

  searchUsers(search: string): Observable<User[]> {
    return this.http
      .get<SearchResponse>(`${this.urlApi}/search/users?q=${search}`)
      .pipe(
        map((res) => {
          if (res.items.length) {
            catchError(() => of('Not items to fetch!!!'));
          }
          return res.items;
        })
      );
  }
}
