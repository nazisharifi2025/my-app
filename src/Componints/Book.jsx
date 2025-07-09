import bad from "./src/img/bad.jpg";
import fran from "./src/img/fran.jpg";
import bland from "./src/img/bland.jpg";
import talar from "./src/img/talar.jpg";
import muhakima from "./src/img/muhakima.jpg";
import salar from "./src/img/salar.jpg";
import Bok from "./Bok"
export default function Book(){
     const book =[
        {
            name : "بلندی های بادگیر",
            imgUrl : bland,
            price : 180
        },
         {
            name : "اثر مرکب",
            imgUrl : fran,
            price : 200,
        },
         {
            name : "قانون پنح ثانیه",
            imgUrl : bad,
            price : 150,
        },
         {
            name : "جنون",
            imgUrl : talar,
            price : 100,
        },
          {
            name : "محاکمه",
            imgUrl : muhakima,
            price : 180,
        },
          {
            name : "سالار",
            imgUrl : salar,
            price : 170,
        },
        ]
    return (
       
        <div className="h-screen w-full bg-gray-400 flex justify-between flex-wrap font-bold">
            {book.map(item=>(
                <Bok name ={book.name} imgUrl = {book.imgUrl} price = {book.price}/>
            ))}
        </div>
    )
}