import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private readonly apiUrl = 'http://localhost:3001/articles';

  http = inject(HttpClient);

  all(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl);
  }

  save(data: Article): Observable<Article> {
    return this.http.post<Article>(this.apiUrl, data);
  }

  get(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`);
  }

  update(id: number, data: Article): Observable<Article> {
    return this.http.put<Article>(`${this.apiUrl}/${id}`, data);
  }

  destroy(id: number): Observable<Article> {
    return this.http.delete<Article>(`${this.apiUrl}/${id}`);
  }
}
