import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Stock } from './stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseURL = "http://stocks-dockermysql-stocks-dockermysql.icgpune2-linux35.conygre.com/";

  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type':'application/json'},
      
      ),
    };
  
  constructor(private httpClient: HttpClient) { }
  
  getStocksList(): Observable<Stock[]>{
    const getstocks=this.baseURL+"getstocks";
    return this.httpClient.get<Stock[]>(getstocks);
  }

  createStock(stock: Stock): Observable<Stock>{
    const putstocks="http://stocks-dockermysql-stocks-dockermysql.icgpune2-linux35.conygre.com/addstocks";
    return this.httpClient.post<Stock>(putstocks,stock,this.httpOptions);
  }

  getStockByStockTicker(stockticker: string): Observable<Stock[]>{
    let baseURL="http://stocks-dockermysql-stocks-dockermysql.icgpune2-linux35.conygre.com/orderDetails";
    const url=`${baseURL}/${stockticker}`;;

    return this.httpClient.get<Stock[]>(url);
  }
}
