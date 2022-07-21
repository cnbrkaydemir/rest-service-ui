import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users.model';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = new Users();
  userProfile=new Users;
  
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.user = JSON.parse(<string>sessionStorage.getItem('userdetails'));


  }

}