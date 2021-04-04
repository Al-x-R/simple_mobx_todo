import React from 'react';
import {TodoCreate} from "../TodoCreate/TodoCreate";
import {TodoStore} from "../../stores/todo";
import {TodoStoreImpl} from "../../stores/todo";
import {observer} from "mobx-react-lite";

interface TodoListProps {
    todoStore: TodoStoreImpl
}

export const TodoList: React.FC<TodoListProps> = observer(({todoStore}) => {
    return (
        <div>
            <p>todo list</p>
            <TodoCreate todoStore={TodoStore} />
            <ul>
                {todoStore.todos.map(t => {
                    return <li key={t.id}>{t.title}</li>
                })}
            </ul>
        </div>
    );
})