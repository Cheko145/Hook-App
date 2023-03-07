import { screen } from '@testing-library/react';
import {todoReducer} from '../../src/08-useReducer/todoReducer';



describe('Pruebas en todoReducer', () => { 
    const initialState=[{
        id:1,
        desciption:'Demo Todo',
        done:false,

    }]
    test('Debe de regresar el estado inicial', () => { 
        
        const newState= todoReducer(initialState,{});
        expect(newState).toBe(initialState);

     })

     test('Debe de agregar un TODO', () => { 
        const action={
            type:'[TODO] Add Todo',
            payload:{
                id:2,
                description:'Nuevo todo #2',
                done: false,

            }
        };

        const newState= todoReducer(initialState,action);
        expect(newState).toContain(action.payload);


      })
      test('Debe de eliminar un todo', () => { 

        
            const action={
                type:'[TODO] Remove Todo',
                payload:1,
            };
    
            const newState= todoReducer(initialState,action);
            expect(newState.length).toBe(0);
           
    
    
          





       })

       test('Debe de probar el toggle', () => { 


        
        const action={
            type:'[TODO] Toggle Todo',
            payload:1,
        };

        const newState= todoReducer(initialState,action);
        const {done}=newState;
        expect(newState[0].done).toBe(true);
        })

 })