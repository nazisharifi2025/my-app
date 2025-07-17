import { useState } from "react"

export default function(){
    const [todo , settodo] = useState("");
    function handelClick(e){
        e.preventDefault();
    }
    return(
        <div className="h-screen w-full bg-gray-600 flex justify-center items-center">
            <form onSubmit={handelClick}>
                <input type="text" name="Name" value={todo}  onChange={(e)=>{settodo(e.target.value)}} className="px-6 rounded-md outline-0 rounded-r-none border-r-0 py-4 border-2  border-black" />
                <button className="p-4 border-2 border-l-0 bg-gray-300 font-bold rounded-md rounded-l-none">Save</button>
            </form>
        </div>
    )
}