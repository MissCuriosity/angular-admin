import { Component, OnInit, Input } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../reducer/root.store';

import { TodoCheckActions } from '../reducer/root.actions';

import { Todo } from '../data/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i: number;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TodoCheckActions
  ) { }

  ngOnInit() {
  }

  /**
   * todolist每行的单选
   * @param item todo
   */
  selectTodo(todo) {
    // todo.checked = !todo.checked;
    this.ngRedux.dispatch(this.actions.selectItem(todo));
  }

  /**
   * 删除待办事项
  */
  removeTodo(index) {
    console.log('remove todo', index);
    this.ngRedux.dispatch(this.actions.removeItem(index));
  }

}
