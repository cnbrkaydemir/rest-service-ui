export class Order{

    public orderId: number|undefined;
    public orderItem: string|undefined;
    public orderPrice: number|undefined;
    
    constructor(id?: number,name?: string, price?: number){
          this.orderId = id;
          this.orderItem = name;
          this.orderPrice = price;
          
    }
  
    
}