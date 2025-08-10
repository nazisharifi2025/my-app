export default function LogIn(){
    return(
        <div class="h-[80%] w-40% mx-auto border border-gray-400 rounded-2xl flex flex-col gap-2.5 ">
            <h1 class="font-bold text-3xl">LOG IN</h1>
            <input type="text" class="py-2 px-4 w-full bg-gray-300 shadow-md shadow-black" />
            <input type="text"  class="py-2 px-4 w-full bg-gray-300 shadow-md shadow-black"/>
            <div class="font-bold text-xl flex items-center justify-between">
                <h1 class="">FOrget your password?</h1>
                <h1 class="">Creat new acount</h1>
            </div>
            <button class="py-2 px-4 bg-blue-100">Send</button>
        </div>
    )
}