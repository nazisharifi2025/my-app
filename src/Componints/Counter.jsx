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
            <h1 className="w-full bg-gray-300 flex justify-center items-center py-6 font-bold text-2xl">The number is : {countUp}</h1>
            <div className="flex justify-between w-full p-4 gap-7">
            <button className="px-6 w-1/2 bg-green-500 text-white py-4 rounded-xl font-bold" onClick={Incermint}>Incearmint</button>
            <button className="px-6 w-1/2 bg-red-500 text-white py-4 rounded-xl font-bold" onClick={Decrimint}>Dicreamint</button>
        </div>
        <div className="w-full flex justify-between">
            <div className="w-[45%] flex flex-col gap-7">
                <p className="font-bold text-2xl bg-gray-300 w-full"></p>
                <p className="font-bold text-2xl bg-gray-300 w-full"></p>
                <p className="font-bold text-2xl bg-gray-300 w-full"></p>
                <p className="font-bold text-2xl bg-gray-300 w-full"></p>
                <p className="font-bold text-2xl bg-gray-300 w-full"></p>
                <p className="font-bold text-2xl bg-gray-300 w-full"></p>
                <p className="font-bold text-2xl bg-gray-300 w-full"></p>

            </div>
        </div>
        </div>
    )
}