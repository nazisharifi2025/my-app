import { useState } from "react"

export default function(){
    const [todo , settodo] = useState("");
    const [todos , settodos]= useState([]);
    function handelClick(e){
        e.preventDefault();
        settodos([...todos, todo ])
    }
    return(
        <div className="h-screen w-full flex flex-col justify-center items-center">
            <form onSubmit={handelClick}>
                <input type="text" name="Name" value={todo}  onChange={(e)=>{settodo(e.target.value)}} className="px-6 rounded-md outline-0 rounded-r-none border-r-0 py-4 border-2  border-black" />
                <button className="p-4 border-2 border-l-0 bg-gray-300 font-bold rounded-md rounded-l-none">Save</button>
            </form>
            {todos.map(item=>{
               return <h1 className="bg-white px-3 py-2 rounded-md text-2xl font-bold text-center mx-auto" key={item}>{item}</h1>
            })}
          
        </div>
    )
}