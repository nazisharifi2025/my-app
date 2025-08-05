
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
        <div className="w-[35%] h-fit flex flex-col  mt-6 shadow-md shadow-gray-900">
            <img src={todo.img} alt="" />
            <div className=" py-4 px-6 flex gap-24 mx-auto justify-between">
                <div className="flex gap-4 items-center">
                    <input type="checkbox"  onClick ={()=>hanelClick(todo.todo)} checked={todo.done} className="form-control h-4 w-4 " />
                    <h1 className="font-bold text-2xl">{todo.todo}</h1>
                </div>
                <h1 onClick={()=>handelDelete(todo.todo)} className="text-2xl"><span class="material-symbols-outlined">
delete
</span></h1>
            </div> 
            </div>
    )
}