import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  providers: [TodoService]
})
export class TodosComponent implements OnInit {

  todos!: Todo[];

  inputTodo:string = "";

  constructor(private todoService: TodoService){}

  ngOnInit(): void{
    this.todos = [];
    this.loadTodos();
  }

  loadTodos(): void{
    this.todos = this.todoService.getTodos();
  }

  saveTodos(): void{
    this.todoService.saveTodos(this.todos);
  }


  toggleDone(index: number){
    this.todos[index].completed = !this.todos[index].completed;

    this.saveTodos();
  }

  deleteTodo(id: number): void{
    this.todos = this.todos.filter((v, i) => i !==id);

    this.saveTodos();
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = "";

    this.saveTodos();
  }
}
