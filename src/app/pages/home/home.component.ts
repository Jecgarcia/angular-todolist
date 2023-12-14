import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from '../../models/task.model'
import { title } from 'process';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks = signal<Task[]>(
    [
      {
        id: 1, 
        title: 'Instalar Angular CLI',  
        completed: false
      },
      {
        id: 2, 
        title: 'Crear proyecto',  
        completed: false
      },
      {
        id: 3, 
        title: 'Crear compponente',  
        completed: false
      },
      {
        id: 4, 
        title: 'Crear servicio',  
        completed: false
      } 
    ]
  ); 

  changeHandler (event: Event) {
    const input = event.target as HTMLInputElement; 
    const newTask = input.value; 
    this.addTask(newTask); 
  }

  addTask (title:string) {
    const newTask = {
      id: Date.now(), 
      title, 
      completed: false, 
    }; 
    this.tasks.update((tasks) => [...tasks, newTask]);  
  }

  deleteTask (index:number) {
    this.tasks.update(tasks => tasks.filter((task, position) => position !== index)); 
  }
}
