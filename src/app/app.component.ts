import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Task } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'todolist';
  taskList: Task[] = [];
  selectedTask!: Task;
  selectedTaskIdx!: number;
  @ViewChild('modifyButton') modifyBtnRef!: ElementRef;

  constructor() {}
  ngOnInit(): void {}

  addToTaskList(e: any) {
    const newTask: Task = e;
    this.taskList.push(newTask);
  }
  deleteFromTaskList(e: any) {
    this.taskList.splice(e, 1);
  }
  selectTask(e: any) {
    this.selectedTaskIdx = e;
    this.selectedTask = this.taskList[e];
  }
  updateTask(e: any) {
    console.log(e);
    this.taskList[this.selectedTaskIdx] = e;
  }

  ngAfterViewInit(): void {}
}
