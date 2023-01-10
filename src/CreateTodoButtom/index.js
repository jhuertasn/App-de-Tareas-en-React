import React from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(props){

    //funcion que embuelve al alert para que no se ejecute solo (Encapsulamiento)
    const onClickButton = () =>{
        alert('Aquí debería ir el modal');
        };

    return(
        <button className="CreateTodoButton"
        onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButtom};