import { useState } from "react";
export default function StateHook() {
    const [count, setCount] = useState(0);
    const [str, setStr] = useState("a");
    return (
        <>
            <p>
                Permite crear y cambiar el estado de manera sencilla
            </p>
            <button onClick={() => setCount(count + 1)}>{count}</button><br />
            <button onClick={() => setStr(str + "a")}>{str}</button>
        </>
    );
}