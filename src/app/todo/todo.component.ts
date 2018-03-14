import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { TODO_LIST } from '../mock/todo-list';

import { IAppState } from '../reducer/root.store';
import { TodoCheckActions } from '../reducer/root.actions';

// import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  // todoList = TODO_LIST;

  @select() isAllChecked$: Observable<boolean>;
  @select() todoList$: Observable<object>;
  @select() unselectedTodoCount$: Observable<number>;

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: TodoCheckActions
  ) {
  }

  ngOnInit() {
  }

  /**
   * todolist的全选
  */
  selectAllTodo() {
    this.ngRedux.dispatch(this.actions.selectAll());
  }

}
