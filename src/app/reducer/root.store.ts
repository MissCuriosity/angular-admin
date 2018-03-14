/**
 * define root reducer
 */
import { Action } from 'redux';

import { TodoCheckActions } from './root.actions';

import { TODO_LIST } from '../mock/todo-list';
import { element } from 'protractor';

export interface IAppState {
    isAllChecked: boolean;
    todoList: object;
    unselectedTodoCount: number;
}

export const INITIAL_STATE: IAppState = {
    isAllChecked: false,
    todoList: TODO_LIST,
    unselectedTodoCount: 0
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
    console.log(999, action);
    let isAllChecked, todoList, unselectedTodoCount;

    switch (action.type) {
        case TodoCheckActions.CHECK_ALL:
            isAllChecked = !lastState.isAllChecked;
            todoList = setTodoList(lastState.todoList, !lastState.isAllChecked );
            unselectedTodoCount = getUnselectedTodoCount(todoList, isAllChecked);
            return { isAllChecked: isAllChecked, todoList: todoList, unselectedTodoCount: unselectedTodoCount };
        case TodoCheckActions.CHECK_ITEM:
            setTodoChecked(getTodo(action));
            isAllChecked = filterIsAllChecked(lastState.todoList);
            todoList = lastState.todoList;
            unselectedTodoCount = getUnselectedTodoCount(todoList, isAllChecked);
            return { isAllChecked: isAllChecked, todoList: todoList, unselectedTodoCount: unselectedTodoCount };
        case TodoCheckActions.REMOVE_ITEM:
            todoList = removeTodo(lastState.todoList, getIndex(action));
            isAllChecked = filterIsAllChecked(lastState.todoList);
            unselectedTodoCount = getUnselectedTodoCount(todoList, isAllChecked);
            return { isAllChecked: isAllChecked, todoList: todoList, unselectedTodoCount: unselectedTodoCount };
    }

    lastState.unselectedTodoCount = getUnselectedTodoCount(lastState.todoList, lastState.isAllChecked); // initialized calculated

    return lastState;
}

/**
 * 点击todo时判断isAllChecked的值
*/
function filterIsAllChecked(todoList) {
    return todoList.filter(todo => todo.checked).length === todoList.length;
}

/**
 * 全选控制todo的checked值
 * @param todoList todoList
 * @param isAllChecked isAllChecked
 */
function setTodoList(todoList, isAllChecked) {
    todoList.forEach(todo => todo.checked = isAllChecked);
    return todoList;
}

function getTodo(obj: any) {
    return obj.todo || {};
}

function setTodoChecked(todo: any) {
    todo.checked = !todo.checked;
}

function getIndex(obj: any) {
    return obj.index;
}

function removeTodo(todoList, index) {
    todoList.splice(index, 1);
    return todoList;
}

function getUnselectedTodoCount(todoList, isAllChecked) {
    return todoList.length - todoList.filter(todo => todo.checked).length;
}
