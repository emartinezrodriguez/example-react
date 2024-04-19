import React from "react"

const List = ({ tareas }) => {
    const deleteTarea = (id) => {
        const tareasLocal = localStorage.getItem('tareas')
        const arrTareas = JSON.parse(tareasLocal || '')
        arrTareas.splice(id, 1)
        const tareasParse = JSON.stringify(arrTareas)
        localStorage.setItem('tareas', tareasParse)
    }

    return (
        <div>
            {Array.isArray(tareas) && tareas.map(({id, name}) => (
                <li key={id}>{name} <button onClick={() => deleteTarea(id)}>eliminar</button></li>
            ))}
        </div>
    )
}

export default List