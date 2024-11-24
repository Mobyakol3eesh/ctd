import { Component } from '@angular/core';
import { Task } from '../../../../classes/task';
import { TaskmangerOperationsService } from '../../../../services/taskmanger-operations.service';


@Component({
  selector: 'app-task-adder',
  standalone: true,
  imports: [],
  templateUrl: './task-adder.component.html',
  styleUrl: './task-adder.component.scss'
})
export class TaskAdderComponent {
  constructor(private taskMangerOperationsService : TaskmangerOperationsService) {
    
  }
  addTask(taskName : string) {
    this.taskMangerOperationsService.addTask(taskName);
    taskName = '';

  }

}
