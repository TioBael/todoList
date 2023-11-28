import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../models/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {


  todos!: Todo[];

  inputTodo:string = "";

  constructor(){}

  ngOnInit(): void{
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: true
      }
    ]
  }

  toggleDone(id: number):void{
    this.todos.map((v, i) =>{
      if (i=id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo(id: number): void{
    this.todos = this.todos.filter((v, i) => i !==id);
  }

  addTodo(){
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })

    this.inputTodo = "";
  }
}
