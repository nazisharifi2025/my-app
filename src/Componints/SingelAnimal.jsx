function SingelAnimal({ name, emoji, price }){
    return(
        <div className="Py-12 h-[180px] w-[180px] flex flex-col justify-center text-2xl gap-3 items-center bg-white shadow-md shadow-gray-700 rounded-2xl text-black">
            <h1 className="bg-gray-700 rounded-4xl mt-6">{emoji}</h1>
            <h1>{name}</h1>
            <h1>{price}</h1>
        </div>
    )
}
export default SingelAnimal;