export default function Bok({name , imgUrl , price}){
    return(
        <div className="h-[350px] w-[330px]  bg-black shadow-md rounded-2xl shadow-gray-500 items-center  text-white flex justify-between">
        <h1>{name}</h1>
        <img src={imgUrl} alt="" />
        <h1>{price}</h1>
        </div>
    )
}