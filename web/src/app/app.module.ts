import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    TodoListModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
