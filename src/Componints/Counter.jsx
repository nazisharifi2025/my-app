import { useState } from "react";

export default function Counter(){
    let number = 0 ;
    const [countUp , counter] = useState(0);
    function Incermint(){
        counter(countUp + 1);
    }
    function Decrimint(){
        counter (countUp - 1);
    }
    return(
        <div >
            <h1 className="w-full bg-gray-300 flex justify-center items-center py-6 font-bold text-2xl">the number is : {number}</h1>
            <div className="flex justify-between p-4">
            <button className="px-6 bg-green-500 text-white py-4 rounded-2xl" onClick={Incermint}>Incermint</button>
            <button className="px-6 bg-red-500 text-white py-4 rounded-2xl" onClick={Decrimint}>ِDecrimint</button>
        </div>
        </div>
    )
}