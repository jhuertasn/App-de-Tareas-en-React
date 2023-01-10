import React from "react";
import { AppUI } from "./AppUI";
//import logo from './logo.svg';
//import './App.css';

// const defaultTodos = [
//   { text: "Cortar manzanas", completed: true },
//   { text: "Tomar el curso de React en Platzi", completed: false },
//   { text: "Practicar 2 horas de dibujo anime", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {
  // Creamos el estado inicial para nuestros errores y carga
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
  // Simulamos un segundo de delay de carga 
    setTimeout(() => {
      // Manejamos la tarea dentro de un try/catch por si ocurre algún error
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
      } catch(error) {
      // En caso de un error lo guardamos en el estado
        setError(error);
      } finally {
        // También podemos utilizar la última parte del try/cath (finally) para terminar la carga
        setLoading(false);
      }
    }, 1000);
  });
  
  const saveItem = (newItem) => {
    // Manejamos la tarea dentro de un try/catch por si ocurre algún error
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      // En caso de algún error lo guardamos en el estado
      setError(error);
    }
  };

  // Para tener un mejor control de los datos retornados, podemos regresarlos dentro de un objeto
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {

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

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodo={toggleCompleteTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
