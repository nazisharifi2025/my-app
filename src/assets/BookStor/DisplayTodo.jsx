
export default function DisplayTodo(props){
    function hanelClick(name){
        props. 
    }
    return(
        <div className="h-fit w-full flex flex-col justify-center my-12 items-center ">
            <div className="w-[30%] h-fit flex justify-between items-center">
                <div className="flex gap-4">
                    <input type="checkbox" checked={props.todo.done} onClick ={()=>hanelClick(props.todo.todo)} className="form-control h-4 w-4 " />
                    <h1 className="font-bold text-2xl">{props.todo.todo}</h1>
                </div>
                <h1 className="text-2xl">🗑️</h1>
            </div>
           
        </div>
    )
}