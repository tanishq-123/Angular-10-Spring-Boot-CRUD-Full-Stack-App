import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-stock-details',
  templateUrl: './stock-details.component.html',
  styleUrls: ['./stock-details.component.css']
})
export class StockDetailsComponent implements OnInit {

  stockTicker: string
  stocks: Stock[] = []
  constructor(private route: ActivatedRoute, private stockService: StockService,private location:Location) { }

  ngOnInit(): void {
    this.stockTicker = this.route.snapshot.params['stockTicker'];

    this.stockService.getStockByStockTicker(this.stockTicker).subscribe( data => {
      this.stocks = data;
    });
  }
  
  goBack(): void {
    this.location.back();
  }

}
