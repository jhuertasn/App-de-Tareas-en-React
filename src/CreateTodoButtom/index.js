import React from "react";
import './CreateTodoButton.css';

function CreateTodoButtom(props){

    //funcion que embuelve al alert para que no se ejecute solo (Encapsulamiento)
    const onClickButton = () =>{
        props.setOpenModal(prevState => !prevState);
        };

    return(
        <button className="CreateTodoButton"
        onClick={onClickButton}
        >+</button>
    );
}

export { CreateTodoButtom};