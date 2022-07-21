import React,{useState} from "react";
import "./style.css";

export default function App() {
  let [value,setvalue] = useState(0)
  function SetCount(){
    setvalue(value+1);

  }
function setCount1(){
  setvalue(value-1);

}
 
  
  
  return (
    <div>
     <h1>State Button On clicked count = {value}</h1>
     <button onClick={SetCount}>Count +</button> <br/><br/>
     <button onClick={setCount1}>Count -</button>
    </div>
  );
}
