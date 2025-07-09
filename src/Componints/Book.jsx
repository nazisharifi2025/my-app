import Bok from "./Bok"
export default function Book(){
     const book =[
        {
            name : "بلندی های بادگیر",
            imgUrl ,
            price : 180
        },
         {
            name : "اثر مرکب",
            imgUrl,
            price : 200,
        },
         {
            name : "قانون پنح ثانیه",
            imgUrl,
            price : 150,
        },
         {
            name : "جنون",
            imgUrl,
            price : 100,
        },
        ]
    return (
       
        <div className="h-screen w-full bg-gray-400 flex justify-between flex-wrap font-bold">
            {book.map(item=>(
                <Bok name ={book.name} imgUrl = {book.imgUrl}/>
            ))}
        </div>
    )
}