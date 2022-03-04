import React, { useEffect, useState } from 'react';
export default function FunctionHook() {
    const [count, setCount] = useState(0);
    const [str, setStr] = useState("a");
    useEffect(() => {
        console.log(`Efecto del count. Count: ${count}`)
        return () => {
            console.log(`Desmontado por cambio en el count. Count: ${count}`);
        }
    }, [count])

    useEffect(() => {
        console.clear();
        console.log("Efecto del componente")
        return () => {
            console.log("Desmontado por cambio global");
        }
    }, [])

    return (
        <>
            <p>
                Permite reaccionar al ciclo de vida de la interfaz así como reaccionar de distinta manera dependiendo de qué haya disparado el cambio
            </p>
            <button onClick={() => setCount(count + 1)}>{count}</button><br />
            <button onClick={() => setStr(str + "a")}>{str}</button>
        </>
    )
}