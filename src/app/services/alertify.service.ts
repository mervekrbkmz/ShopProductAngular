import { Injectable } from '@angular/core';


declare let alertify:any;
@Injectable(
  // providedIn: 'root' //providerda servisimiz global olarak çağırdığımız için burdaki root kaldırdık.
) 
export class AlertifyService {

 constructor(){}

  success(message:string)
  {
  alertify.success("asdasdasd")
  }
}
