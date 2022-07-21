import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order.model';
import { Users } from '../model/users.model';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  user = new Users();
  orders:Order[] = new Array();

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    this.user = JSON.parse(<string>sessionStorage.getItem('userdetails'));
    if(this.user){
      this.mainService.getOrders(this.user).subscribe(
        responseData => {
          console.log(responseData);
          
        this.orders = <any> responseData.body;
        }, error => {
          console.log(error);
        });
    }
  }

}