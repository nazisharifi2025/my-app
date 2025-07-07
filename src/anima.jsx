function Anima(){
      const animals =[
        {
            name : "Cat",
            emoji : "😺",
            price : "120"
        },
          {
            name : "Dog",
            emoji : "🐶",
            price : "2000"
        },
        {
            name : "Monky",
            emoji : "🙊",
            price : "190"
        },
        {
            name : "Mouse",
            emoji : "🐭",
            price : "90"
        },
      
    ]
 
    return (
          <div className=" w-full h-screen bg-pink-400 ">
            {/* {animals.map(item=> (
                <SingelAnimal name={item.name} emoji={item.emoji} price={item.price}/>
            ))}
        </div> */}
    )
}
export default Anima