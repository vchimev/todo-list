import { Component, OnInit, Inject } from '@angular/core';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'todo-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  title = 'todo-list';

  todoList = [
    //   { title: 'install NodeJS' },
    //   { title: 'install Angular CLI' },
    //   { title: 'create app' },
    //   { title: 'serve app' },
    //   { title: 'develop app' },
    //   { title: 'deploy app' },
  ];

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  // addItem(title: string) {
  //   this.todoList.push({ title });
  // }

  addItem(title: string): void {
    this.todoListService.addItem(title);
  }

  // removeItem(title: string) {
  //   let index = this.todoList.indexOf({ title });
  //   if (index > -1) {
  //     this.todoList.splice(index, 1);
  //   }
  // }

}
