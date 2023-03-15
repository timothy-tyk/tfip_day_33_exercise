import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './components/add-task.component';
import { TaskListComponent } from './components/task-list.component';

@NgModule({
  declarations: [AppComponent, AddTaskComponent, TaskListComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
