import { useState } from "react"
// import Desplay from "./Desplay.jsx";
import Formf from "../assets/BookStor/Formf.jsx";
import Todo from "../assets/BookStor/Todo.jsx";
export default function(){
    const [todos , settodos]= useState([]);
   const newTodos=  todos.filter(item=>{
      return  item.done === true ;
    })
    return(
        <div className="h-screen w-full flex flex-col items-center my-7">
            <Formf todos = {todos} settodos= {settodos}/>
            <Todo todos = {todos} settodos={settodos} />
            {/* <Desplay/> */}
                <div className="w-full absolute bottom-0 left-0 h-fit py-4 bg-gray-400 text-2xl px-2 right-0 text-white flex justify-between items-center font-bold">
             <div className="font-bold text-center"><span class="material-symbols-outlined text-blue-300">
select_all
</span>Number Of Books {todos.length}</div>
            <div className="font-bold text-center"><span class="material-symbols-outlined text-blue-300">
done_all
</span>Complited Number Of Books {newTodos.length}</div>
        </div>
        </div>
    )
}