import { useState }  from "react";

function Counter (){
    const[ count, setCount]= useState(0);
    
    return (
        <div style={{ textAlign:'center', marginTop:'20px'}}>
         <p>Current Count: {count}</p>
         <button style={{backgroundColor:'#333', color:'#fff', padding:'10px', margin:'10px', borderRadius:'10px'}} onClick={() => setCount(count + 1)}>Increment</button>
         <button style={{backgroundColor:'#333', color:'#fff', padding:'10px', margin:'10px', borderRadius:'10px'}} onClick={() => setCount(count - 1)}>Decrement</button>
         <button style={{backgroundColor:'#333', color:'#fff', padding:'10px', margin:'10px', borderRadius:'10px'}} onClick={() => setCount(0)}>Reset</button>
       </div>
    )
}
export default Counter;