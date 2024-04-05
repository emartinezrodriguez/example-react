import React, { useEffect } from "react";
const UseEffectComponent = ({ userName }) => {
    // la funcion useEffect tiene dos parametros:
    // primero es una función que corre cuando el componente se renderiza
    // segundo un array cuyos valores seran variables de las cuales dependa.
    // useEffect se ejecuta en cada renderizado.
    // useEffect(() => {
    //     Codigo a correr cuando el componente se renderice
    // }, [dependencias])
    // Cuando el segundo es un array vacio, el useEffect se ejecutara una sola vez
    useEffect(() => {
        console.log('entro al useEffect')
        document.title = `Hello ${userName}`;
      }, [userName]);
    return (
        <>
          <h1>Hello {userName}</h1>
        </>
      );
}

export default UseEffectComponent