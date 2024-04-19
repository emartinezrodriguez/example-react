import React, { useState } from "react"

const InputButton = () => {
    const [input, setInput] = useState('')

    const handleSave = () => {
        const tareasLocal = localStorage.getItem('tareas')
        if (tareasLocal !== null) {
            const arrTareas = JSON.parse(tareasLocal || '')
            const longitud = arrTareas.length
            const newTarea = {
                id: longitud,
                name: input
            }
            arrTareas.push(newTarea)
            const tareasParse = JSON.stringify(arrTareas)
            localStorage.setItem('tareas', tareasParse)
        } else {
            const arrayVacio = []
            const tareaCero = {
                id: 0,
                name: input
            }
            // @ts-ignore
            arrayVacio.push(tareaCero)
            const tareasParse = JSON.stringify(arrayVacio)
            localStorage.setItem('tareas', tareasParse)
        }
    }

    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => handleSave()}>Guardar</button>
        </div>
    )
}

export default InputButton