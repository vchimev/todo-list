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

  addItem(title: string) {
    // console.log(title);
    // this.todoList.push({ title });
    // console.log(this.todoList);

    console.log(this.storage);
    return this.storage.post({ title });
  }

  getTodoList() {
    // return this.todoList;
    return this.storage.get();
  }

}
