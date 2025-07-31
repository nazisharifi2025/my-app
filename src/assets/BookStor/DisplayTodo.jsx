
export default function DisplayTodo({todo,settodos,items}){
    function hanelClick(name){
        const newTodos = items.map(item=>{
          return  item.todo === name ? {...item , done:true}: item;
          })
    }
    return(
        <div className="h-fit w-full flex flex-col justify-center my-12 items-center ">
            <div className="w-[30%] h-fit flex justify-between items-center">
                <div className="flex gap-4">
                    <input type="checkbox"  onClick ={()=>hanelClick(todo.todo)} className="form-control h-4 w-4 " />
                    <h1 className="font-bold text-2xl">{todo.todo}</h1>
                </div>
                <h1 className="text-2xl">🗑️</h1>
            </div>
           
        </div>
    )
}