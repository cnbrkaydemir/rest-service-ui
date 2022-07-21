import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user= new Users();

  constructor() { }

  ngOnInit(): void {
    this.user=JSON.parse(<string>sessionStorage.getItem('userdetails'));
  }

}
