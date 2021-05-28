import React from 'react'

 function Child({childCounter,incrementChildCounter}) {
  


    console.log("render in child")
    return (
        <div>
            <h2>Child Counter: {childCounter}</h2>
            <button onClick={incrementChildCounter}>increment child counter</button>
        </div>
    )
}

export default React.memo(Child)


/* a=5;
b=5;
a===b true */

/* a={name:"ali"}
b={name:"ali"}
a===b false

function sum(){
    return 5
}
function substract(){
    return 5
}
let array1 = [1,2,3]
let array2=[1,2,3]
array1==array2  false

sum===substract  false
sum()===substract()   true */