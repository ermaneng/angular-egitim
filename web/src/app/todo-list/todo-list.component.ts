import { Component, Input } from '@angular/core';
import { TodoListItemInterface } from './todo-list-item/todo-list-item.interface';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() items: TodoListItemInterface[] = [
    {
      userId: 1,
      id: 1,
      title: 'Todo List Item 1',
      completed: false
    },
    {
      userId: 1,
      id: 2,
      title: 'Todo List Item 2',
      completed: false
    },
    {
      userId: 1,
      id: 3,
      title: 'Todo List Item 3',
      completed: false
    }
  ];

  onItemComplete(id:number){
    //complete item
    alert (`${id} completed`);
  }

}
