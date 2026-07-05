import { Component, OnInit } from '@angular/core';
import { Card } from "../../card/card";
import { BookService } from '../../services/book';

@Component({
  selector: 'app-books',
  imports: [Card],
  templateUrl: './books.html',
  styleUrl: './books.css'
})
export class Books implements OnInit {

  books: any[] = [];

  constructor(private bookService: BookService) {}

 ngOnInit(): void {

  this.bookService.getBooks().subscribe({
    next: (res: any) => {
      console.log(JSON.stringify(res, null, 2));
      this.books = res.data.data;
    },
    error: (err) => {
      console.log(err);
    }
  });

}
}