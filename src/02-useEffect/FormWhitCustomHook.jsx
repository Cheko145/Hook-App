import { useEffect, useState } from "react"
import { useForm } from "../Hooks/index";



export const FormWhitCustomHook = () => {
   
    const {onResetForm,formState,onInputChange,username,password,email}=useForm(
    {
        username:'',
        email:'',
        password:'',
    });
    
   





    
    // const{username,email,password}=formState;
    
    
    
    useEffect(()=>{
        // console.log('UseEffectCalled')

    },[]);
    useEffect(()=>{

        // console.log('formstate Changed')


    },[formState]);
    useEffect(()=>{
        // console.log('email changed')

    },[email]);



    return (
    <>
    
    
    
    <h1>Formulario con custom Hook</h1>
    <hr />

    <input type="username" 
    className="form-control"
    placeholder="Username"
    name="username"
    value={username}
    onChange={onInputChange}
    />

    <input type="email" 
    className="form-control mt-4"
    placeholder="JuanPacheco@google.com"
    name="email"
    value={email}
    onChange={onInputChange}
    />
    <input type="password" 
    className="form-control mt-4"
    placeholder="Contraseña"
    name="password"
    value={password}
    onChange={onInputChange}
    />
    <button onClick={onResetForm} className="btn btn-primary mt-3">Borrar</button>


    </>


  )
}
