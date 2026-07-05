import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http: HttpClient) {}

  getSingleBook(id: any) {
    return this.http.get(
      `https://api.freeapi.app/api/v1/public/books/${id}`
    );
  }

}