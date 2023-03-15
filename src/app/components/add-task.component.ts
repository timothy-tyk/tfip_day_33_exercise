import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Task } from '../models';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit, OnChanges {
  addTaskForm!: FormGroup;
  @Output() onAddTask: Subject<Task> = new Subject<Task>();
  @Input() selectedTask: Task | null = null;
  @Output() onModifyTask: Subject<Task> = new Subject<Task>();

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.addTaskForm = this.createAddTaskForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.selectedTask != null) {
      const selected: Task = changes['selectedTask'].currentValue;
      const descriptionCtrl = this.addTaskForm.get(
        'description'
      ) as FormControl;
      const priorityCtrl = this.addTaskForm.get('priority') as FormControl;
      const dueCtrl = this.addTaskForm.get('due') as FormControl;
      descriptionCtrl.setValue(selected.description);
      priorityCtrl.setValue(selected.priority);
      dueCtrl.setValue(selected.due);
    }
  }

  createAddTaskForm(): FormGroup {
    return this.fb.group({
      description: this.fb.control<string>(''),
      priority: this.fb.control<string>(''),
      due: this.fb.control<Date>(new Date()),
    });
  }

  submitTask() {
    const newTask = {
      description: this.addTaskForm.get('description')?.value,
      priority: this.addTaskForm.get('priority')?.value,
      due: this.addTaskForm.get('due')?.value,
    };
    this.onAddTask.next(newTask);
    this.addTaskForm.reset();
  }

  modifyTask() {
    const updatedTask = {
      description: this.addTaskForm.get('description')?.value,
      priority: this.addTaskForm.get('priority')?.value,
      due: this.addTaskForm.get('due')?.value,
    };
    this.onModifyTask.next(updatedTask);
  }
}
