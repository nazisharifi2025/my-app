import SingelFrout from "./SingelFrout";
function Frout(){
   const frout =[
        {
            name : "Apple",
            emoji : "🍎",
            price : "120"
        },
        {
            name : "Bnana",
            emoji : "🍌",
            price : "200"
        },
        {
            name : "mango",
            emoji : "🥭",
            price : "190"
        },
        {
            name : "Oringe",
            emoji : "🍊",
            price : "190"
        },
    ]
    return(
        <div className="h-screen bg-pink-400 text-white  flex justify-center items-center w-full">
           {frout.map(item=> (
                <SingelFrout/>
            ))}
        </div>
    )
}
export default Frout;