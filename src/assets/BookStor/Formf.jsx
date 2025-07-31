import { useState } from "react";
export default function Formf({todos,settodos }){
    const [todo , settodo] = useState({todo:"" , done: false});
     function handelClick(e){
        e.preventDefault();
        settodos([...todos, todo ]);
        settodo({todo:"", done:false})
    }
    return(
        <div>
         <form onSubmit={handelClick}>
                <input type="text" name="Name" value={todo.todo}  onChange={(e)=>{settodo({todo: e.target.value, done: false})}} className="px-6 rounded-md outline-0 rounded-r-none border-r-0 py-4 border-2  border-black" />
                <button className="p-4 border-2 border-l-0 bg-gray-300 font-bold rounded-md rounded-l-none">Save</button>
            </form>
            </div>  
    )
}