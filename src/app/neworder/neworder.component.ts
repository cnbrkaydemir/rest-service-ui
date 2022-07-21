import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../model/order.model';
import { Users } from '../model/users.model';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-neworder',
  templateUrl: './neworder.component.html',
  styleUrls: ['./neworder.component.css']
})
export class NeworderComponent implements OnInit {
  user= new Users;
  model=new Order();

  constructor(private mainService:MainService) { }

  ngOnInit(): void {


  }

  createOrder(orderForm: NgForm) {
    this.mainService.newOrder(this.model,this.user).subscribe(
      responseData => {
        this.model = <any> responseData.body;
        orderForm.resetForm();
      }, error => {
        console.log(error);
      });

  }

}
