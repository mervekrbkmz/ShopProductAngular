import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  // datayı değiştirme,dönüştürme
  //product olarak yazdığımız şey dönüş tipi product demektir.
  transform(value: Product[], filterText: string):Product[] {
  // Arama ifadesi kullanıcı yazdığında ifadeyi küçük harfe çevirir.
  filterText=filterText?filterText.toLocaleLowerCase():""//arama ifadesi varsa(?) küçük harfe çevir
  return filterText?value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)==-1):value; //her p için pnini ismini küçük harfe çevir. İçerisinde arama ifadesi var mı diye bak.
  }
  
}
      null?5:9                                                                         