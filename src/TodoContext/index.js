import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props){
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      // Traemos nuestros TODOs almacenados
      // const localStorageTodos = localStorage.getItem("TODOS_V1");
      // let parsedTodos;
    
      // if (!localStorageTodos) {
      //   // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
      //   localStorage.setItem("TODOS_V1", JSON.stringify([]));
      //   parsedTodos = [];
      // } else {
      //   // Si existen TODOs en el localStorage los regresamos como nuestros todos
      //   parsedTodos = JSON.parse(localStorageTodos);
      // }
    
      // Guardamos nuestros TODOs del localStorage en nuestro estado
      //se cambio de defaultTodos a parsedTodos
      //const [todos, setTodos] = React.useState(parsedTodos);
    
      const [openModal, setOpenModal] = React.useState(false);

      const [searchValue, setSearchValue] = React.useState("");
      //todos completados
      const completedTodos = todos.filter((todo) => !!todo.completed).length;
      //total de Todos
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        searchedTodos = todos.filter((todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          //que todo muestra y cuales no en nuestra lista
          return todoText.includes(searchText);
        });
      }
    
      //   // Creamos la función en la que actualizaremos nuestro localStorage
      // const saveTodos = (newTodos) => {
      //   // Convertimos a string nuestros TODOs
      //   const stringifiedTodos = JSON.stringify(newTodos);
      //   // Los guardamos en el localStorage
      //   localStorage.setItem('TODOS_V1', stringifiedTodos);
      //   // Actualizamos nuestro estado
      //   setTodos(newTodos);
      // };
    
    
      const toggleCompleteTodo = (text) => {
        //Buscar y encontrar ese todo mediente findIndex
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        //newTodos es igual a todos los todos
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        //recibir la nueva lista de todo con completed como true
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        //que todo queremos eliminar y cuantos todo eliminaremos
        newTodos.splice(todoIndex, 1);
        //llamando a todos los todo con el todo eliminado
        saveTodos(newTodos);
      };

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider};
