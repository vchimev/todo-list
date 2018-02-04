import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todoItem: any;

  constructor() { }

  ngOnInit() {
  }

}
