import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {

  stock: Stock = new Stock();
  constructor(private StockService: StockService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveStock(){
    console.log(this.stock);
    this.StockService.createStock(this.stock).subscribe( data =>{
      console.log(data);
      this.goToStockList();
    },
    error => console.log(error));
  }

  goToStockList(){
    this.router.navigate(['/stock']);
  }
  
  onSubmit(){
    this.saveStock();
  }
}
