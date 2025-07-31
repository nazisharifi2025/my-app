import { useState } from "react"
// import DisplayTodo from "../assets/BookStor/DisplayTodo";
import Formf from "../assets/BookStor/Formf.jsx";
import Todo from "../assets/BookStor/Todo.jsx";
export default function(){
    
    
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <Formf/>
            <Todo/>
          <DisplayTodo/>
        </div>
    )
}