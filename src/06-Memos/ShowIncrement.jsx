import React from "react";

export const ShowIncrement =React.memo(({increment}) => {
  
  console.log('Me Volvi a Dibuja')
  
    return (


    <button
    className="btn btn-primary"
    onClick={()=>{
        increment( 5 );
    }}
    >Incrementar</button>
  )
})