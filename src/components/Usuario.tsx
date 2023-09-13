import React, { useState } from 'react'


interface User {
    uid: string;
    nombre: string;
}


const Usuario = () => {

    const [user, setUser] = useState<User>()

    const login = () => {
        setUser({
            uid: '123',
            nombre: 'Fernando'
        })
    }

  return (
    <div className="mt-5">
        <h3>
            Usuario: useState
        </h3>
        <button
            className="btn btn-outline-primary"
            onClick={ login }
        >
            Login
        </button>

        {/* <button
            className="btn btn-outline-danger"
            onClick={ () => setUser({ uid: '', nombre: ''}) }
        >
            Reset User
        </button> */}

        {
            (!user)
            ? <pre>No hay usuario</pre> : <pre>
            { JSON.stringify(user, null, 3) }
        </pre>
        }
    </div>
  )
}

export default Usuario