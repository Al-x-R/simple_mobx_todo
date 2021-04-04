import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList/TodoList";
import {TodoStore} from "./stores/todo";

function App() {
    return (
        <div className="App">
            <TodoList todoStore={TodoStore}/>
        </div>
    );
}

export default App;
