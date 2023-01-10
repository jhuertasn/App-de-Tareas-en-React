import React from "react";
import "./TodoCounter.css";

function TodoCounter({total,completed}){
 
    return(
        <h2 className="TodoCounter">
            <span style ={{
                color: "purple",
                position: "relative",
                left:"-15px"
                }}>
             <i class="fa-solid fa-thumbtack"></i>
             </span>
             To do Machine
             <br></br>
            Jordan: Has completado {completed} de {total} de Tus Tareas Pendientes 
        </h2> 
                
    );
}

export {TodoCounter};