import React from 'react'
import Timer from './Timer'
import { useState } from 'react'

const TimerPadre = () => {

    const [milisegundos, setMilisegundos] = useState(1000)

  return (
    <>
    <span>
        Milisegundos {milisegundos}
        <br />

        <button
        className='btn btn-outline-success'
        onClick={() => setMilisegundos(1000)}
        >
            1000
        </button>

        <button
        className='btn btn-outline-success'
        onClick={() => setMilisegundos(2000)}
        >
            2000
        </button>
         
        <Timer misilisegundos={milisegundos}/>
    </span>
    </>
  )
}

export default TimerPadre