// todo.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private STORAGE_KEY = 'todos';

  getTodos(): any[] {
    const todosString = localStorage.getItem(this.STORAGE_KEY);
    return todosString ? JSON.parse(todosString) : [];
  }

  saveTodos(todos: any[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
  }
}
