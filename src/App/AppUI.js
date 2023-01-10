import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButtom } from "../CreateTodoButtom";

function AppUI({
  loading,
  error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo
}){
    return (
        <React.Fragment>
        <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <TodoList>
        {/* Mostramos un mensaje en caso de que ocurra algún error */}
        {error && <p>Desespérate, hubo un error...</p>}
        {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando los datos */}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

          {searchedTodos.map((todo) => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={()=> toggleCompleteTodo(todo.text)}
            onDelete={()=> deleteTodo(todo.text)}
             />
          ))}
        </TodoList>
        <CreateTodoButtom />
      </React.Fragment>
    );
}


export {AppUI};