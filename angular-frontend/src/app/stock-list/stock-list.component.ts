import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock'
import { StockService } from '../stock.service'
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  stocks:string[];
  searchText: string;
  constructor(private stockService: StockService,
              private location:Location,
              private router: Router) { }

  ngOnInit(): void {
    this.getStocks();
  }
  goBack(): void {
    this.location.back();
  }
  private getStocks(){
    this.stockService.getStocksList().subscribe(data => {
      this.stocks =Array.from(new Set(data.map(x => x.stockTicker)));
    });
  }

  stockDetails(stockticker: string){
    console.log(stockticker);
    this.router.navigate(['stock-details', stockticker]);
  }

}
