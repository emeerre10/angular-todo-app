import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-todo-app';

  filter: 'all' | 'todo' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
  ];

  get Items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) => this.filter === "done" ? item.done : !item.done);
  }

  addItem(description: string) {
    if (!description) return;
    this.allItems.push({ description: description, done: false });
  }

  removeItem(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
