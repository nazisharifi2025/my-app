export default function Bok({name , imgUrl , price}){
    function  Control(){
        console.log("hi")
    }
    return(
        <div className="h-[380px] w-[330px] flex-col bg-gray-200 text-black shadow-md rounded-2xl shadow-gray-500 items-center   flex justify-center gap-3">
        <h1 className="font-bold text-2xl text-shadow-gray-800">{name}</h1>
        <h1>{price}</h1>
        <img src={imgUrl} alt="" /> 
        <button className="px-4 py-2 bg-white rounded-md" onClick={Control}>نمایش جزیات</button>
        </div>
    )
}