import { useCounter, useFetch } from "../Hooks";
import { LoadingQuoute } from "../03-examples/LoadingQuoute";
import { Quote } from "../03-examples/Quote";



export const Layout = () => {
  
    const{counter,increment}=useCounter(1)
    const {data,isLoading,hasError } =useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);
    const {author,quote}=!!data && data[0];

 


  
  
    return (

    
    <>
    <h1>Breaking Bad Quotes</h1>
    <hr />
    {
        (isLoading)
        ?<LoadingQuoute/>
        :<Quote author={author} quote={quote}/>


    }
    
    <button className="btn btn-primary"onClick={ ()=>increment(1)} >Next Quote</button>
  </>
  )
}
