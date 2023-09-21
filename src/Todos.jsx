import React, {useState} from "react"

const Todos = () => {
    const [value, setValue] = useState("")
    const [todo, setTodo] = useState([])
    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            {value}
        </div>
    )
}

export default Todos