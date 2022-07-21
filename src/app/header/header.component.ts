import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Users } from '../model/users.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user=new Users();

  

  constructor(private cdRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    let userDetails = JSON.parse(<string>window.sessionStorage.getItem('userdetails'));
    if(userDetails){
      this.user = JSON.parse(<string>window.sessionStorage.getItem('userdetails'));
    }
  }

}