import { inject, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { Task } from '../classes/task';
import { Subject } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class TaskmangerOperationsService {
    private tasksUpdated = new Subject<Task[]>();
    tasks: Task[] = [];
    httpClient = inject(HttpClient);

    constructor() {}

    addTask(taskName: string) {
        let task = new Task(taskName);
        this.tasks.push(task);
        this.httpClient.post('http://localhost:3000/api/task', {taskName : task.getName() , date : task.getDate() , isFulfiled : task.getIsFulfiled()}, {withCredentials: true}).subscribe((res: any) => {
            console.log(res);
        });
        this.tasksUpdated.next([...this.tasks]);
    }
    initializedTasks() {
        this.httpClient
            .get('http://localhost:3000/api/login', { withCredentials: true })
            .subscribe({
                next: (res: any) => {
                    console.log(res);
                    this.tasks = Object.values(res).map(
                        (item: any) =>
                            new Task(item.taskName, item.date, item.isFulfiled)
                    );
                    // console.log(Object.values(res).map(
                    //     (item: any) =>
                    //         new Task(item.taskName, item.date, item.isFulfiled)
                    // ))
                    this.tasksUpdated.next([...this.tasks]);
                    console.log('Initialized Tasks:', this.tasks);
                },
                error: (err) => {
                    console.error('Error fetching tasks:', err);
                },
            });
    }

    getTasks() {
        return [...this.tasks];
    }
    getTasksUpdateListener() {
        return this.tasksUpdated.asObservable();
    }
    deleteTask(taskName: string) {
        const index = this.tasks.findIndex((t) => t.getName() === taskName);
        console.log(index);
        if (index >= 0) {
            this.tasks.splice(index, 1);
            this.httpClient.delete("http://localhost:3000/api/task/"+index,{withCredentials: true}).subscribe((res: any) => {
                console.log(res);
            });
            this.tasksUpdated.next([...this.tasks]);
        }
    }
    toggleTaskStatus(taskName: string) {
        let index = this.tasks.findIndex((t) => t.getName() === taskName);
        if (index >= 0) {
            this.tasks[index].toggleStatus();
            this.httpClient.patch("http://localhost:3000/api/task/"+index, {taskName : taskName , date : this.tasks[index].getDate() , isFulfiled : this.tasks[index].getIsFulfiled() }, {withCredentials: true}).subscribe((res: any) => {
                console.log(res);
            });
            this.tasksUpdated.next([...this.tasks]);
        }
    }
    updateTask(taskName: string, newName: string) {
        let index = this.tasks.findIndex((t) => t.getName() === taskName);
        if (index >= 0) {
            this.tasks[index].setName(newName);
            this.httpClient.patch("http://localhost:3000/api/task/"+index, {taskName : newName , date : this.tasks[index].getDate() , isFulfiled : this.tasks[index].getIsFulfiled() }, {withCredentials: true}).subscribe((res: any) => {
                console.log(res);
            });
            this.tasksUpdated.next([...this.tasks]);
        }
    }
}
