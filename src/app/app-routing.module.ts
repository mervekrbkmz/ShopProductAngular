import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Product } from './product/product';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
{path:'products',component:ProductComponent}, //route tanımlaması yaptım.
{path:'',redirectTo:'products',pathMatch: 'full'} //hiçbir path verilmemişse productsa redirect(yönlendirilme) edildi.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] //dışarıdan kullanıalbiir demek.
})
export class AppRoutingModule { }
