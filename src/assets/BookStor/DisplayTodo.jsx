export default function DisplayTodo(){
    return(
        <div className="h-fit w-full flex flex-col justify-center items-center ">
            <div className="w-[50%] h-fit flex justify-between items-center">
                <div className="flex">
                    <input type="checkbox" />
                    <h1 className="font-bold">BOOK</h1>
                </div>
                <h1>🗑️</h1>
            </div>
        </div>
    )
}