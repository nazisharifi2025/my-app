import Animals from "./Componints/Animals";
import Frout from "./Componints/Frout";
// import Book from "./Componints/Book";
// import Counter from "./Componints/Counter";
import Form from "./Componints/Form";
// import TodoApp from "./Componints/TodoApp";
function App(){
  let natiga = "Frout";
  // return natiga ==="Animal"? <Animals/> : <Frout/>
  // book
  //   return(
  //  <Book/>
  //  )
  //  counter
  return(
    <div>
      {/* <Counter/> */}
      <Form/>
    </div>
  )
  // if (natiga==="Animals") {
  //    return(
  //   <div className="w-full  flex justify-center flex-col">
  //     <Animals   />
  //   </div>
  // )
  // }
  //  else{
  //      return(
  //   <div className="w-full  flex justify-center flex-col">
  //     <Frout/>
  //   </div>
  // )
  //  }
 
}
export default App;