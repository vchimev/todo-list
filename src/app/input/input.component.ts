import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  title: string = 'todo-item';

  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
    // console.log('- constructor start -');
    // console.log('title: ', this.title);
    // this.changeTitle('Constructor Title!');
    // console.log('title: ', this.title);
    // console.log('- constructor end -');
  }

  // ngOnInit() {
  //   console.log('- ngOnInit start -');
  //   console.log('title: ', this.title);
  //   this.changeTitle('NgOnInit Title!');
  //   console.log('title: ', this.title);
  //   console.log('- ngOnInit end -');
  // }

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.title = "NgOnInit Title!";
  //   }, 3000);
  // }

  ngOnInit() {
  }

  // changeTitle(newTitle: string): void {
  //   this.title = newTitle;
  // }

  // changeTitle(event): void {
  //   console.log(event);
  //   this.title = event.target.value;
  // }

  // changeTitle(inputElementReference): void {
  //   console.log(inputElementReference);
  //   this.title = inputElementReference.value;              
  // }

  // generateTitle(): string {
  //   return "Generated Title!";
  // }

  submitValue(title: string): void {
    this.submit.emit(title);
    this.title = title;
  }

}
