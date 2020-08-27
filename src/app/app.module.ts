import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { HoverEffectPipe } from './hover-effect.pipe';
import { TasksComponent } from './tasks/tasks.component';
import { FormsModule } from '@angular/forms';
import { HighlightPipe } from './highlight.pipe';

@NgModule({
  // All component
  declarations: [
    AppComponent,
    HoverEffectPipe,
    TasksComponent,
    HighlightPipe
  ],

  // All imported modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TodoModule
  ],

  // All services
  providers: [],

  // Starting point
  bootstrap: [AppComponent]
})
export class AppModule { }
