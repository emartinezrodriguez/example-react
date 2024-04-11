import React, { useState } from "react";
const UseStateComponent = () => {
    // permite almacenar valores que luego de forma dinámica se actualizaran en pantalla.
    // useState retorna un arreglo con dos valores
    // primer valor restorna la variable de estado
    // segundo valor es una funcion que nos sirve para actualizar la variable de estado.
    // String Boolean Number Array Object Undefined
    const [numero, setNumero] = useState(0);
    const generarAleatorio = () => {
      const v = Math.trunc(Math.random() * 10);
      setNumero(v)
    }
    return (
        <div>
          <p className="text-base text-red-700">Número aleatorio: {numero}</p>
          <button onClick={generarAleatorio}>Generar número aleatorio</button>
        </div>
    )
}

export default UseStateComponent