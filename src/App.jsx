import Animals from "./Componints/Animals";
import Frout from "./Componints/Frout";
function App(){
  let natiga = "Frout";
  // return natiga ==="Animal"? <Animals/> : <Frout/>
  if (natiga==="Animals") {
     return(
    <div className="w-full  flex justify-center flex-col">
      <Animals   />
    </div>
  )
  }
   else{
       return(
    <div className="w-full  flex justify-center flex-col">
      <Frout/>
    </div>
  )
   }
}
export default App;