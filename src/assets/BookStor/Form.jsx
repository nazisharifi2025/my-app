import Form2 from "../../Componints/Form2"
export default function Form(){
    return(
        <div className="w-full h-screen overflow-y-scroll">
        <div className="h-20 w-full static bg-gray-400 shadow-md shadow-gray-900 text-white font-bold flex justify-center items-center">
            <h1 className="font-bold text-4xl shadow-md shadow-black px-4 py-2"><span class="material-symbols-outlined ml-2 text-blue-300">
menu_book
</span>LIBRARY<span class="material-symbols-outlined text-5xl mr-4 text-blue-300">
menu_book
</span></h1>
        </div>                              
        <Form2/>
        </div> 
    )
}