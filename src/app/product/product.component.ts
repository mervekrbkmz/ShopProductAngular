import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { Product } from './product';
// import swal from 'sweetalert';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [AlertifyService] //lokal tanımlama yapmak istersek buraya gelip yazıyoruz.
})
export class ProductComponent implements OnInit {
  //oninitin implemente edilmesiyle ngonInit oluşur.

  constructor(private alertifyService: AlertifyService, private http: HttpClient) { }
  title = "Ürün Listesi"
  filterText = "";

  products: Product[];
  //burayı apiden gelen datayla doldurdum.
  path = "http://localhost:3344/products";


  //component açıldığında ngonİnit çalışır.
  ngOnInit(): void {
    //product nesnesinin product tipinde olduğunu map ettim.
    this.http.get<Product[]>(this.path)
      .subscribe(data => { //dataya n'apıcağımı yazdım. dataya subscribe oldum.
        this.products = data;
      }); //subscribe ile ilgili datayı istediğimizi belirtir.

  }
  addToCard(product: Product) {

    // swal({
    //   text:"Sepete Eklendi : "+ product.name,
    //   icon: "success",
    // });
    this.alertifyService.success(product.name + "Added")

  }

}
