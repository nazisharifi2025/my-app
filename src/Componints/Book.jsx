import bad from "../img/bad.jpg";
import fran from "../img/fran.jpg";
import bland from "../img/bland.jpg";
import talar from "../img/talar.jpg";
import muhakima from "../img/muhakima.jpg";
import salar from "../img/salar.jpg";
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
       
        <div className="h-screen w-full bg-gray-400 flex justify-between gap-6 overflow-y-scroll p-6 flex-wrap font-bold">
            {book.map(item=>(
                <Bok name ={book.name} imgUrl = {book.imgUrl} price = {book.price}/>
            ))}
        </div>
    )
}