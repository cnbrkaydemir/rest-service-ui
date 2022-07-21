import { Order } from "./order.model";

export class Users{

    public userId: number|undefined;
    public userEmail : string|undefined;
    public userPassword: string|undefined;
    public userName: string|undefined;
    public userCity:string|undefined;
    public userPhone: string|undefined;
    public role : string|undefined;
    public authStatus : string|undefined;
    public orders : Object[]|undefined;
    
   

    constructor(id?: number,name?: string, mobileNumber?: string, email?: string,  password?: string,role?: string,
         authStatus?:string, city?:string,orders?:Object[]){
          this.userId = id;
          this.userName = name;
          this.userPhone = mobileNumber;
          this.userEmail = email;
          this.userPassword = password;
          this.role = role;
          this.authStatus = authStatus;
          this.userCity=city;
          this.orders=orders;
    }
  


}