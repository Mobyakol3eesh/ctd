import { Component, inject, OnInit, ViewChildren } from '@angular/core';
import { TaskAdderComponent } from './task-adder/task-adder.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskmangerOperationsService } from '../../../services/taskmanger-operations.service';
import { Task } from '../../../classes/task';
import { Subscription } from 'rxjs';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import { LogoutService } from '../../../services/logout.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [TaskAdderComponent, TaskItemComponent, NgFor],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
    constructor(private taskMangerOpService: TaskmangerOperationsService , private router : Router
      ,private logoutService : LogoutService , private authService : AuthService
    ) {}
    tasks?: Task[];

    private tasksSub: Subscription = new Subscription();
    httpClient = inject(HttpClient);
    ngOnInit() {
        this.taskMangerOpService.initializedTasks();
        this.tasks = this.taskMangerOpService.getTasks();
        this.tasksSub = this.taskMangerOpService
            .getTasksUpdateListener()
            .subscribe((tasks: Task[]) => {
                this.tasks = tasks;
                console.log(this.tasks);
            });
           
    }
    ngOnDestroy() {
        this.tasksSub.unsubscribe();
    }
    logout() {
         this.logoutService.logout();     
    }
}
