import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = 'https://api.freeapi.app/api/v1/public/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getSingleBook(id: any): Observable<any> {
    return this.http.get(
      `https://api.freeapi.app/api/v1/public/books/${id}`
    );
  }
}