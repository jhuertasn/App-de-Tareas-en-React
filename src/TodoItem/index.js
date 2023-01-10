import React from 'react';
import './TodoItem.css';

function TodoItem(props) {

  //const onComplete =() =>{
  //  alert('Ya completaste el ToDo '+props.text);
  //};

  //const onDelete =() =>{
  //  alert('Eliminaste el ToDo '+props.text);
  //};


  return (
    <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      //llamando a la funcion onComplete de app.js
      onClick={props.onComplete}
      >
      <i class="fa-regular fa-circle-check"></i>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete"
      //llamando al metodo onDelete
      onClick={props.onDelete}
      >
      <i class="fa-solid fa-trash"></i>
      </span>
    </li>
  );
}

export { TodoItem };