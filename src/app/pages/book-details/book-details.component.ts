import { Component, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
styleUrl: './book-details.component.css'
})
export class BookDetailsComponent {

  id:any;

  bookData:any={};

  constructor(
    private route:ActivatedRoute,
   private bookService: BookService,
   private cdr: ChangeDetectorRef
  ){

    this.route.params.subscribe((res)=>{

      this.id=res['id'];

      this.getBook();

    });

  }
getBook() {
this.bookService.getSingleBook(this.id).subscribe({

    next: (res: any) => {

      console.log(res);

      this.bookData = res.data;

      this.cdr.markForCheck();

    },

    error: (err) => {

      console.log(err);

    }

  });

}
 

}