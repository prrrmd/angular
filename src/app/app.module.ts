import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { HoverEffectPipe } from './hover-effect.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './highlight.pipe';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

@NgModule({
  // All component
  declarations: [
    AppComponent,
    HoverEffectPipe,
    TasksComponent,
    HighlightPipe,
    ProductsComponent,
    ProductViewComponent,
    ProductEditComponent,
    ProductIdComponent,
    OrderViewComponent,
    SearchComponent,
    PageNotFoundComponent,
    AdminHomeComponent
  ],

  // All imported modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TodoModule
  ],

  // All services
  providers: [ ],

  // Starting point
  bootstrap: [AppComponent]
})
export class AppModule { }
