import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { deleteExp } from '../redux/expSlice'
function ExpenditureList() {
    const dispatch = useDispatch()
    //useSelector((state)=> state.reducerName.expSliceName)
    const expenditureData = useSelector((state) => state.myExpenditure.expenditure)
    console.log("expenditureData", expenditureData)
    const deleteExpenditure = (id) => {
        dispatch(deleteExp(id))
    }

    return (
        <div><h6>List of expenditure</h6>
            <ol>
                {expenditureData.map((exp) => (
                    <li key={exp.id}>{exp.category}
                        <button onClick={() => deleteExpenditure(exp.id)}>Delete</button>
                    </li>
                ))}
            </ol>


        </div>
    )
}

export default ExpenditureList