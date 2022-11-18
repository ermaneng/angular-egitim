import { Component, Input, OnInit } from '@angular/core';
import { TodoListItemInterface } from './todo-list-item/todo-list-item.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  
  @Input() items: TodoListItemInterface[] = [];

  ngOnInit(){
    //fetch('https://jsonplaceholder.typicode.com/error/501') //error test
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json:TodoListItemInterface[]) => {
        console.log(json);
        this.items = json.slice(0,10)
      })
      .catch(function(error:any){
        console.log('Request failed-->',error)
      })
  }

  onItemComplete(id:number){
    //complete item
    alert (`${id} completed`);
  }

}
