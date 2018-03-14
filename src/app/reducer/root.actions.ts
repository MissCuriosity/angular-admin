import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class TodoCheckActions {
    static CHECK_ALL = 'CHECK_ALL'; // 点击全选
    static CHECK_ITEM = 'CHECK_ITEM'; // 点击单行item
    static REMOVE_ITEM = 'REMOVE_ITEM'; // 删除单行item

    selectAll(): Action {
        return { type: TodoCheckActions.CHECK_ALL };
    }

    selectItem(todo): Action {
        return Object.assign({}, { type: TodoCheckActions.CHECK_ITEM, todo: todo });
    }

    removeItem(index): Action {
        return Object.assign({}, { type: TodoCheckActions.REMOVE_ITEM, index: index });
    }
}
