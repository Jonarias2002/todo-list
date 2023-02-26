import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } =React.useContext(TodoContext);
    return (
        <header>
        <h2 className="TodoCounter">Completaste {completedTodos} de {totalTodos} TODOs</h2>
        </header>
    );
};

export { TodoCounter };