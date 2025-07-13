export default function Bok({name , imgUrl , price}){
    return(
        <div className="h-[350px] w-[330px] flex-col bg-gray-200 text-black shadow-md rounded-2xl shadow-gray-500 items-center   flex justify-center">
        <h1 className="font-bold text-2xl text-shadow-gray-800">{name}</h1>
        <h1>{price}</h1>
        <img src={imgUrl} alt="" /> 
        </div>
    )
}