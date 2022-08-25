import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';
import { CreateStockComponent } from './create-stock/create-stock.component';
import { StockDetailsComponent } from './stock-details/stock-details.component';

const routes: Routes = [
  {path: 'stock', component: StockListComponent},
  {path: 'create-stock', component: CreateStockComponent},
  {path: '', redirectTo: 'employees', pathMatch: 'full'},
  {path: 'stock-details/:stockTicker', component: StockDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
