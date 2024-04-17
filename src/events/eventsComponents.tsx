import React, { useEffect, useState } from "react"

const eventsComponents= () => {
    const handleClick = () => console.log('Click en el boton')
    const handleClickSecond = (message) => console.log(message)
    const [valueInput, setValueInput] = useState('')
    const [inputText, setInputText] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [color, setColor] = useState('black')

    useEffect(() => {
        const nameLocalStorage = localStorage.getItem('tareas')
        if(nameLocalStorage) {
            const nameParse = JSON.parse(nameLocalStorage)
            console.log("🚀 ~ useEffect ~ nameParse:", nameParse)
            if (nameParse) setValueInput(nameParse[0].tarea)
        }
    }, [])

    const handleChange = (event) => {
        console.log(event)
        setValueInput(event.target.value)
    }
    const onSaveClick = () => {
        const tareaLocalStorage = JSON.stringify([{ tarea: valueInput}])
        localStorage.setItem('tareas', tareaLocalStorage)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`usuario: ${inputText} password: ${inputPassword}`)
    }

    return (
        <>
            {/* <button onClick={handleClick}>Click</button>
            <br />
            <button onClick={() => handleClickSecond('hola')}>otro boton</button>
            <br /> */}
            <input
                type="email"
                value={valueInput}
                placeholder="Escribe algo.."
                onChange={handleChange}
            />
            <button onClick={onSaveClick}>guardar</button>
            {/*<form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                    type="text"
                    value={inputText}
                    placeholder="Escribe algo.."
                    onChange={(event) => setInputText(event?.target?.value)}
                />
                <input
                    type="password"
                    value={inputPassword}
                    placeholder="Escribe algo.."
                    onChange={(event) => setInputPassword(event?.target?.value)}
                />
                <button type="submit">Enviar formulario</button>
            </form>
            <div
                onMouseEnter={() => setColor('red')}
                onMouseLeave={() => setColor('blue')}
                className="mt-10 ml-5 h-12 w-[100%] border-black border-2"
                style={{ backgroundColor: color }}>
            </div>*/}
        </>
    )
}

export default eventsComponents