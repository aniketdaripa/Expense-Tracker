import ExpenseForm from "./ExpenseForm"
import React, { useState } from "react";
import './NewExpense.css';
const NewExpense = (props)=>{
    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };
    const [isNewExpense, setIsNewExpense] = useState(false); 
    const handleClick=()=>{
        setIsNewExpense(true);
    }
    const cancelHandler=(isCancel)=>{
        if(isCancel === true){
            setIsNewExpense(false);
        }
        else{
            setIsNewExpense(true);
        }

    }
    if(isNewExpense === false){
        return(
            <button onClick={handleClick}>Add</button>
        )
    }
    return(
        <div>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>
        </div>
    );
}

export default NewExpense;