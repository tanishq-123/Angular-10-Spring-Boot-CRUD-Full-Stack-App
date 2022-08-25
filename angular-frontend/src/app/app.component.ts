import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio Management System';
  stock;
  
  constructor(private router: Router){}

  stockDetails(stockticker: string){
    console.log("hello");
  }
}
