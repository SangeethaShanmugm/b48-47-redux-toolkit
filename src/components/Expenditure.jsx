import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addExp } from "../redux/expSlice"
function Expenditure() {
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const addNewExp = () => {
        const newExp = inputRef.current.value
        console.log("newExp", newExp)
        if (newExp !== "") {
            dispatch(addExp(newExp))
            inputRef.current.value = ""
        }
    }
    return (
        <div><h1>Expenditure</h1>
            <input type="text" placeholder='Add you expenditure' ref={inputRef} />
            <button onClick={addNewExp}>Add expenditure</button>
        </div>
    )
}

export default Expenditure