import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

  todoList = [
    { title: 'install NodeJS' },
    { title: 'install Angular CLI' },
    { title: 'create app' },
    { title: 'serve app' },
    { title: 'develop app' },
    { title: 'deploy app' },
  ];

  constructor() { }

  addItem(title: string): void {
    // console.log(title);
    this.todoList.push({ title });
    // console.log(this.todoList);
  }

  getTodoList() {
    return this.todoList;
  }

}
