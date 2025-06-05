import { useCounter } from "./useCounter"

export const Contador = () => {
    
    const { counter, sumar, reset, restar } = useCounter(0)
    
    return (
    <div className='m-5'>
        <h1>Contador / CounterHook</h1>
        <h4>La cuenta es {counter}</h4>
        <button className='btn btn-light me-4' onClick={() => sumar()}>Sumar</button>
        <button className='btn btn-light m-4' onClick={() => reset()}>Reset</button>
        <button className='btn btn-light m-4' onClick={() => restar()}>Restar</button>
    </div>
  )
}
