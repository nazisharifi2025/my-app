import SingelFrout from "./SingelFrout";
function Frout(){
   const frout =[
        {
            name : "Apple",
            emoji : "🍎",
            price : "120"
        },
        {
            name : "Banana",
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
        <div className="h-screen bg-pink-400 text-white  flex justify-between px-4 gap-7 items-center w-full">
           {frout.map(item=> (
                <SingelFrout name={item.name} emoji={item.emoji} price={item.price}/>
            ))}
        </div>
    )
}
export default Frout;