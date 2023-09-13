import React, { useState, useEffect, useRef } from 'react'


type TimerArgs = {
    misilisegundos: number,
    segundos?: number
}

const Timer = ({misilisegundos}:TimerArgs) => {

    const [segundos, setSegundos] = useState(0)

    const ref = useRef<NodeJS.Timeout>()

    useEffect(() => {

        ref.current && clearInterval(ref.current)

        ref.current = setInterval(() => 
        setSegundos(s => s + 1) , misilisegundos)
    }, [misilisegundos])
    

  return (
    <>
    <h4>
        Timer: <small>{segundos}</small>
    </h4>
    </>
  )
}

export default Timer