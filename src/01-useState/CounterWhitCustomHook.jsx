import { useCounter } from "../Hooks/useCounter"


export const CounterWhitCustomHook = () => {
  
  
  const {counter,increment,decrement,reset} =useCounter();
  
  
  
  
  
  
    return (
    <>

    <h1>Counter Whit Hook:{counter} </h1>
    <hr />
    
    <button className="btn btn-primary" onClick={ ()=>increment(2)}>+1</button>
    <button className="btn btn-neutral"onClick={reset}>Reset</button>
    <button className="btn btn-danger"onClick={()=>decrement(2)}>-1</button>


    </>
  )
}
