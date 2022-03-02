import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
 title= "Ürün Listesi"
 //fazla ürün istediğim için dizi olarak tutucam
 //any: hangi tip gelirse gelsin anlamında. .
products:any[]=[
// {id:1,name:"Laptop",price:2500,categoryId:1,description:"X Marka"},
// {id:2,name:"Mouse",price:25,categoryId:2,description:"A4 Tech"}
 ]
  ngOnInit(): void {
  }

}
