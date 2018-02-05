import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {

  // todoList = [
  //   { title: 'install NodeJS' },
  //   { title: 'install Angular CLI' },
  //   { title: 'create app' },
  //   { title: 'serve app' },
  //   { title: 'develop app' },
  //   { title: 'deploy app' },
  // ];

  constructor(private storage: TodoListStorageService) { }

  addItem(item) {
    // console.log(title);
    // this.todoList.push({ title });
    // console.log(this.todoList);
    return this.storage.post(item);
  }

  getTodoList() {
    return this.storage.get();
  }

}
