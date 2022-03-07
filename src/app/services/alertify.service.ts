import { Injectable } from '@angular/core';
declare let alertify:any;
// servicin service olabilmesi için Injectable'dan alıyor olması lazım,servide global anlamda eklemek için.
//global: her yerde kullanabiliriz demek.
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  //succes fonksiyonun içine message parametresi açtık. tip güvenliği olsun diye message:string yazdık. Sadece mesage yazabilirdik.
  success(message:string)
  {
  alertify.success(message)
  }
}
