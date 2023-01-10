import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButtom } from "../CreateTodoButtom";
import { TodoContext } from "../TodoContext";
import {Modal} from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";

function AppUI() {
  const { error, 
          loading, 
          searchedTodos, 
          toggleCompleteTodo, 
          deleteTodo,
          openModal,
          setOpenModal } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {/* Mostramos un mensaje en caso de que ocurra algún error */}
        {error && <TodosError error={error}/>}
        {/* // Mostramos un mensaje de cargando, cuando la aplicación está cargando los datos */}
        {loading && <TodosLoading/>}
        {/* // Si terminó de cargar y no existen TODOs, se muestra un mensaje para crear el primer TODO */}
        {!loading && !searchedTodos.length && <EmptyTodos/>}

        {searchedTodos.map((todo) => (
          <TodoItem
            //llamando a todos los Todos
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButtom
      setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
