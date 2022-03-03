import { Component, OnInit } from '@angular/core';
import { Product } from './product';

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
products:Product[]=[
{id:1,name:"Coffee",price:25,categoryId:1,description:"Perfect",imageUrl:"https://images.unsplash.com/photo-1646257861487-60fa89bef25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
{id:2,name:"Province",price:6500,categoryId:2,description:"",imageUrl:"https://images.unsplash.com/photo-1613591723536-65e664a9ebac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
{id:3,name:"Notebook",price:6500,categoryId:3,description:"Macbook Pro",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
{id:4,name:"City",price:10000,categoryId:4,description:"Super",imageUrl:"https://images.unsplash.com/photo-1645621760780-a486038186ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
{id:8,name:"Build",price:8500,categoryId:8,description:"Dangerous",imageUrl:"https://images.unsplash.com/photo-1645902912432-c6f872feb95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
{id:1,name:"Coffee",price:25,categoryId:1,description:"Perfect",imageUrl:"https://images.unsplash.com/photo-1646257861487-60fa89bef25f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
{id:2,name:"Province",price:6500,categoryId:2,description:"",imageUrl:"https://images.unsplash.com/photo-1613591723536-65e664a9ebac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"},
{id:3,name:"Notebook",price:6500,categoryId:3,description:"Macbook Pro",imageUrl:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bm90ZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"},
{id:4,name:"City",price:10000,categoryId:4,description:"Super",imageUrl:"https://images.unsplash.com/photo-1645621760780-a486038186ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
{id:8,name:"Build",price:8500,categoryId:8,description:"Dangerous",imageUrl:"https://images.unsplash.com/photo-1645902912432-c6f872feb95b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}
 ]
  ngOnInit(): void {
  }

}
