import React from "react";
import './EmptyTodos.css';

function EmptyTodos (){
    return <div className="AgregaTodos">
        <span>
        <i class="fa-solid fa-octagon-plus"></i>
        </span>
        
        <p>!Crea tu primer Todo!</p>
        </div>
}

export {EmptyTodos};