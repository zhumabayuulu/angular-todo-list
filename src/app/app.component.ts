import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  todos: Todo[] = [];
  newTodo: string;

  saveTodo() {
    if (this.newTodo) {
      let todo = new Todo();
      todo.name = this.newTodo;
      todo.isCompleted = true
      this.todos.push(todo);
      this.newTodo = "";
    } else {
      alert('Please Enter Todo');
    }
  }


delete (id:number) {
  this.todos = this.todos.filter((v, i) => i !== id);
}

/**checkOR(id:number){
 this.todos[id].isCompleted = !this.todos[id].isCompleted;
 }*/

deleteAll() {
  this.todos = this.todos.filter((todos) => !todos.isCompleted);
}
  }