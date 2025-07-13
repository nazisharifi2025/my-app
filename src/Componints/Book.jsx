import bad from "../assets/img/bad.jpg";
import fran from "../assets/img/fran.jpg";
import bland from "../assets/img/bland.jpg";
import talar from "../assets/img/talar.jpg";
import muhakima from "../assets/img/muhakima.jpg";
import salar from "../assets/img/salar.jpg";
import Bok from "./Bok"
export default function Book(){
     const book =[
        {
            name : "بلندی های بادگیر",
            imgUrl : bland,
            price : 180
        },
         {
            name : "فرانگشتان",
            imgUrl : fran,
            price : 200
        },
         {
            name : "بادبدک باز",
            imgUrl : bad,
            price : 150
        },
         {
            name : "تالار گرگ",
            imgUrl : talar,
            price : 100
        },
          {
            name : "محاکمه",
            imgUrl : muhakima,
            price : 180
        },
          {
            name : "سالار مگس ها",
            imgUrl : salar,
            price : 170
        },
        ]
    return (
       
        <div className="h-screen w-full bg-gray-400 flex justify-between gap-6 overflow-y-scroll p-6 flex-wrap font-bold">
            {book.map(item=>(
                <Bok name ={item.name} imgUrl = {item.imgUrl} price = {item.price}/>
            ))}
        </div>
    )
}