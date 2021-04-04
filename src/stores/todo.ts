import {action, makeObservable, observable} from "mobx";

export interface TodoItem {
    id: number;
    title: string;
    completed: boolean
}

export class TodoStoreImpl {
    todos: TodoItem[] = []

    constructor() {
        makeObservable(this, {
            todos: observable,
            addTodo: action
        })
    }

    addTodo(title: string) {
        const item: TodoItem = {
            id: Number(Math.random().toFixed(3)),
            title,
            completed: false
        }
        this.todos.push(item)
    }
}

export const TodoStore = new TodoStoreImpl()