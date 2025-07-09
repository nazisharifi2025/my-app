export default function Bok({name , imgUrl , price}){
    return(
        <div className="h-full w-full bg-black shadow-md rounded-2xl shadow-gray-500 items-center gap-6 text-white flex justify-center">
        <h1>{name}</h1>
        <img src={imgUrl} alt="" />
        <h1>{price}</h1>
        </div>
    )
}