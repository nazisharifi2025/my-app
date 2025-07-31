import DisplayTodo from "./DisplayTodo";
export default function Todo({todos , settodos}){
    return(
        <div className="w-full flex justify-center">
        {todos.map(item=>{
          return  <DisplayTodo key={item.todo} todo={item} settodos= {settodos} items = {todos}/>
            //    return <h1 className="bg-white px-3 py-2 rounded-md text-2xl font-bold text-center mx-auto" key={item}>{item}</h1>
            })}
            </div>
    )
}