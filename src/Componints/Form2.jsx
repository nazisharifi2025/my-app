import { useState } from "react"
import DisplayTodo from "../assets/BookStor/DisplayTodo";
import Formf from "../assets/BookStor/Formf.jsx";
export default function(){
    
    const [todos , settodos]= useState([]);
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <Formf/>
            {todos.map(item=>{
               return <h1 className="bg-white px-3 py-2 rounded-md text-2xl font-bold text-center mx-auto" key={item}>{item}</h1>
            })}
          <DisplayTodo/>
        </div>
    )
}