import { CheckoutComponent } from './checkout/checkout.component';
import { SigninComponent } from './signin/signin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminGuardGuard } from './admin-guard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'checkout', pathMatch: 'full' },
  { path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard] },
  { path: 'signin', component: SigninComponent }, // Template driven form
  { path: 'checkout', component: CheckoutComponent}, // Reactive form
  // { path: 'products', component: ProductsComponent },
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      { path: 'product-view', component: ProductViewComponent },
      { path: 'product-edit', component: ProductEditComponent },
      { path: 'product/:id', component: ProductIdComponent },
    ]
  },

  { path: 'order/:id', component: OrderViewComponent },
  { path: 'search', component: SearchComponent }, // http://localhost:4200/search?type=mobile&country=india
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }, // created by lazy loading.
  { path: '**', component: PageNotFoundComponent} // Always added to last bcoz it is just like default case in switch
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
