import { render,act, renderHook } from "@testing-library/react"
import {useForm} from '../../src/Hooks/useForm';
describe('Pruebas sobre UseForm ', () => { 
    const initialForm={
        name:'Juan',
        email:'Marconi@google.com'


    }
    // test('debe de regresar los valores por defecto', () => { 

    //     const {result}=renderHook(()=>useForm(initialForm));
    //     expect(result.current).toEqual({
    //             onInputChange: expect.any(Function),
    //             formState: initialForm,
    //             name:initialForm.name,
    //             email:initialForm.email,
    //             onResetForm: expect.any(Function),
              
    //         })

    //     });
        test('Debe de cambiar el nombre del formulario', () => {
            const newValue='Arthas';
            const {result}=renderHook(()=>useForm(initialForm));
            const{onInputChange}=result.current;
            act(()=>{

                onInputChange({target:{name:'name',value:newValue}});

    
            });
           
            expect(result.current.name).toBe(newValue);
            expect(result.current.formState.name).toBe(newValue);
         })

         test('Debe de realizar el reset del formulario', () => {
            const newValue='Arthas';
            const {result}=renderHook(()=>useForm(initialForm));
            const{onResetForm,onInputChange}=result.current;
            act(()=>{

                onInputChange({target:{name:'name',value:newValue}});
                onResetForm();
    
            });
           
            expect(result.current.name).toBe(initialForm.name);
            expect(result.current.formState.name).toBe(initialForm.name);
         })


     })









