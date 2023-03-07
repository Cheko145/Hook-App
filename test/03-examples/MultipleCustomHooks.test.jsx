import { fireEvent, render, renderHook, screen, act } from "@testing-library/react"
import {MultipleCustomHooks} from '../../src/03-examples/MultipleCustomHooks'
import { useCounter } from "../../src/Hooks";
import { useFetch } from "../../src/Hooks/useFetch";
jest.mock('../../src/Hooks/useCounter')
jest.mock('../../src/Hooks/useFetch')
describe('Pruebas en multipleCustomHooks', () => { 
        
    const mockIncrement=jest.fn();

    useCounter.mockReturnValue({
        counter:1,
        increment:mockIncrement
    });

    beforeEach(()=>{
        jest.clearAllMocks();
    });
    test('Debe de mostrar el componente por defecto', () => { 

        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null
            
        });

        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Breaking Bad Quotes'));

        const nextButton=screen.getByRole('button',{name:'Next Quote'});

        expect(nextButton).toBeTruthy();

        screen.debug();
     });

     test('Debe de mostrar un quote', () => { 
        

        useFetch.mockReturnValue({
            data:[{author:'Fernando',quote:'Hola Mundo'}],
            isLoading:false,
            hasError:null
            
        });

        render(<MultipleCustomHooks/>);
        screen.debug();
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Fernando')).toBeTruthy();

        const nextButton=screen.getByRole('button',{name:'Next Quote'});
        
        expect(nextButton.disabled).toBeFalsy();


      });

      test('Debe de llamar la funcion de incrementar', () => { 

       
        useFetch.mockReturnValue({
            data:[{author:'Fernando',quote:'Hola Mundo'}],
            isLoading:false,
            hasError:null
            
        });
       
        render(<MultipleCustomHooks/>);
        const nextButton=screen.getByRole('button',{name:'Next Quote'});
        fireEvent.click(nextButton);
        

        expect(mockIncrement).toHaveBeenCalled();


       })





 })