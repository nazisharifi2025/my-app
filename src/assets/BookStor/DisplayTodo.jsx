export default function DisplayTodo(){
    return(
        <div className="h-fit w-full flex flex-col justify-center my-12 items-center ">
            <div className="w-[30%] h-fit flex justify-between items-center">
                <div className="flex gap-4">
                    <input type="checkbox" />
                    <h1 className="font-bold text-2xl">BOOK</h1>
                </div>
                <h1 className="text-2xl">🗑️</h1>
            </div>
        </div>
    )
}