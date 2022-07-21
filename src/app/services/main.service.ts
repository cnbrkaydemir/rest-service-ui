import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppConstants } from '../constants/constants';
import { Users } from '../model/users.model';
import { Order} from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http:HttpClient) { }

  getProfileDetails(user : Users){
    return this.http.post(environment.rooturl + AppConstants.PROFILE_API_URL,user,{ observe: 'response',withCredentials: true });
  }

  getOrders(user : Users){
    return this.http.post(environment.rooturl + AppConstants.MYORDERS_API_URL,user,{ observe: 'response',withCredentials: true });
  }

  saveUser(user : Users){
    return this.http.post(environment.rooturl + AppConstants.SIGNUP_API_URL,user,{ observe: 'response',withCredentials: true });
  }

  newOrder(order : Order,user:Users){
    return this.http.post(environment.rooturl + AppConstants.NEWORDER_API_URL,order,{ observe: 'response',withCredentials: true });
  }



}
