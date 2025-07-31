
export default function DisplayTodo({todo,settodos,items}){
    function hanelClick(name){
        const newTodos = items.map(item=>{
          return  item.todo === name ? {...item , done: !item.done}: item;
          });
          settodos(newTodos);
          console.log(newTodos);
    }
    function handelDelete(n){
     const newArray= items.filter(item=>{
          return item.todo !== n ;
      });
      settodos(newArray);
    }
    return(
            <div className="w-[40%] h-fit flex my-12 gap-24 justify-between">
                <div className="flex gap-4">
                    <input type="checkbox"  onClick ={()=>hanelClick(todo.todo)} checked={todo.done} className="form-control h-4 w-4 " />
                    <h1 className="font-bold text-2xl">{todo.todo}</h1>
                </div>
                <h1 onClick={()=>handelDelete(todo.todo)} className="text-2xl">🗑️</h1>
            </div> 
    )
}