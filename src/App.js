import React, { useState,useCallback,useMemo } from "react";
import Child from "./Child"
//React.memo
//useMemo
//useCallback

function App() {
  const [parentCounter, setParentCounter] = useState(0);
  const [childCounter, setChildCounter] = useState(0);
  const [numbers,setNumbers]=useState([1,2,5,7,32,34,56,78,98,34,102])


  const MaxNumber=()=> {
    console.log("Max number running")
    return Math.max(...numbers)
  }
 
  const memorizedValue = useMemo(MaxNumber,[numbers])  //useMemo returns  a value
  // const MemorizeCallback = useCallback(incrementChildCounter,[childCounter])  //useCallback returns a callback

/*   console.log("render Parent component") */

 /*  const incrementParentCounter=()=>{
    setParentCounter(parentCounter+1)
  } */


  const incrementChildCounter=()=>{
      // setChildCounter(prevState=>prevState+1)
     /*  setChildCounter(0+1) */
      setChildCounter(childCounter+1)
  }
  
//dont recreate that function
  const MemorizeCallback = useCallback(incrementChildCounter,[childCounter]) 



 

  return (
    <div className="App">
      <h1>React.memo useMemo useCallback Hook</h1>

      <div className="parent">
        <h1>Parent Counter: {parentCounter}</h1>
        <button /* onClick={incrementParentCounter} */>increment parent counter</button>
      </div>

      <Child childCounter={childCounter} incrementChildCounter={MemorizeCallback}/>

      <h2> Largest Number in Array: {memorizedValue} </h2>
      <button onClick={()=>setNumbers([200,300,400,2,1,5])}>change number array</button>
    </div>
   
  );
}

export default App;
