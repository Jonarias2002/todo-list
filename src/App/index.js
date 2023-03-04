import React from "react";
import { useTodos } from "./useTodos.js";
import { TodoCounter } from '../TodoCounter/index.js';
import { TodoHeader } from '../TodoHeader/index.js'
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from '../TodoList/index.js'
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from "../Modal/index.js";
import { TodosLoading } from "../TodosLoading/index.js";
import { TodosError } from "../TodosError/index.js";
import { EmptyTodos } from "../EmptyTodos/index.js";
import { TodoForm } from "../TodoForm/index.js";


function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <React.Fragment>
            <TodoHeader>

        	    <TodoCounter
          		    totalTodos={totalTodos}
          		    completedTodos={completedTodos}
        	    />
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

            </TodoHeader>
            
            <TodoList
              onError={() => <TodosError />}
              onLoading={() => <TodosLoading />}
              onEmptyTodos={() => <EmptyTodos />}
              render={ todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed ={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo (todo.text)}
                />
              )}
            />
            
            {!!openModal && (
                <Modal>
                    <TodoForm 
                    addTodo={addTodo}
                    setOpenModal={setOpenModal}
                    />
                </Modal>
            )}

            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
    </React.Fragment>
    );
}

export default App;
