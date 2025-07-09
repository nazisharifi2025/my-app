export default function Bok({name , imgUrl , price}){
    return(
        <div className="h-full w-full bg-black shadow-md shadow-gray-500 text-white">
        <h1>{name}</h1>
        <img src={imgUrl} alt="" />
        <h1>{price}</h1>
        </div>
    )
}