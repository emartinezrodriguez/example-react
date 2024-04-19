import React, { useEffect, useState } from "react"
import List from "./List"
import InputButton from "./InputButton"

const TodoList = () => {
    const [tareas, setTareas] = useState<any>()

    useEffect(() => {
        const tareasLocal = localStorage.getItem('tareas')
        if (tareasLocal !== null) {
            const arrTareas = JSON.parse(tareasLocal || '')
            setTareas(arrTareas)
        }
    }, [])
    return (
        <div>
            TODOlist
            <InputButton />
            <List tareas={tareas} />
        </div>
    )
}

export default TodoList