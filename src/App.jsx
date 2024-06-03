import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Newsboard from "./components/Newsboard";
export const App = () => {
  const [category,setCategory]=useState("general");
  return (
    <div >
    <Navbar setCategory={setCategory}></Navbar>
    <Newsboard category={category}></Newsboard>
    </div>
    

  )
}
export default App;
