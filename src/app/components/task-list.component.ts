import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Task } from '../models';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  @Input() tasks!: Task[];
  @Output() onDelete: Subject<number> = new Subject<number>();
  @Output() onSelectTask: Subject<number> = new Subject<number>();

  selectTask(idx: number) {
    console.log(this.tasks[idx]);
    this.onSelectTask.next(idx);
  }
  deleteTask(idx: number) {
    this.onDelete.next(idx);
  }
}
