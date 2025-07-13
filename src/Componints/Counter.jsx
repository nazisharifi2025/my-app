import { useState } from "react";

export default function Counter(){
    const [countUp , counter] = useState(0);
    function Incermint(){
        counter(countUp + 1);
    }
    function Decrimint(){
        counter (countUp - 1);
    }
    return(
        <div className="w-full">
            <h1 className="w-full bg-gray-300 flex justify-center items-center py-6 font-bold text-2xl">the number is : {countUp}</h1>
            <div className="flex justify-between w-full p-4 gap-7">
            <button className="px-6 w-1/2 bg-green-500 text-white py-4 rounded-xl font-bold" onClick={Incermint}>Incermint</button>
            <button className="px-6 w-1/2 bg-red-500 text-white py-4 rounded-xl font-bold" onClick={Decrimint}>ِDecrimint</button>
        </div>
        </div>
    )
}