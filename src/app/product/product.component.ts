import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';
import { Product } from './product';
import swal from 'sweetalert';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService] //lokal tanımlama yapmak istersek buraya gelip yazıyoruz.
})
export class ProductComponent implements OnInit {
  //oninitin implemente edilmesiyle ngonInit oluşur.
  constructor(private alertifyService: AlertifyService, private productService: ProductService) { }
  title = "Ürün Listesi"
  filterText = "";
  products: Product[];
  //burayı apiden gelen datayla doldurdum.
  //component açıldığında ngonİnit çalışır.
  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data
    });
  }
  addToCard(product: Product) {

    swal({
      text: "Sepete Eklendi : " + product.name,
      icon: "success",
    });
    this.alertifyService.success(product.name + "Added")

  }
}
