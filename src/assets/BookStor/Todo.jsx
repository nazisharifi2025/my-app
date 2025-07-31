export default function Todo({todos}){
    return(
        <div>
        {todos.map(item=>{
               return <h1 className="bg-white px-3 py-2 rounded-md text-2xl font-bold text-center mx-auto" key={item}>{item}</h1>
            })}
            </div>
    )
}