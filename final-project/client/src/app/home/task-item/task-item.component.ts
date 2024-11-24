import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../../classes/task';
import { FormsModule } from '@angular/forms';
import { TaskmangerOperationsService } from '../../../../services/taskmanger-operations.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss'
})
export class TaskItemComponent implements OnInit {
  @Input() item?: Task;
  taskName?: string;
  taksDate?: string;
  taskIsFulfiled?: boolean;
  constructor(private taskMangerOpService : TaskmangerOperationsService) {}

  ngOnInit() {
    if(!this.item) return;

    this.taskName = this.item?.getName();
    console.log(this.taskName)
    this.taksDate = this.item?.getDate();
    this.taskIsFulfiled = this.item?.getIsFulfiled();
  }

  deleteTask(taskLabel : HTMLLabelElement) {
    console.log(this.taskName);
    console.log(taskLabel.textContent);
    this.taskMangerOpService.deleteTask(taskLabel.textContent || '');
   this.item = undefined;
  }
  updateTask(taskLabel : HTMLLabelElement) {
    let newName : string = prompt('Enter new task name') || ''
    this.taskMangerOpService.updateTask(taskLabel.textContent || '', newName);
    this.taskName = this.item?.getName();
    
  }
  toggleStatus(){
    this.taskMangerOpService.toggleTaskStatus(this.taskName || '');
  }

}
