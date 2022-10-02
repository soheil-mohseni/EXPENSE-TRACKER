import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm ";
import React , { useState } from "react";


const NewExpense = (props) => {
    
  

  //  const saveExpenseDataHandler = (expensedata) => {
        
        const expenseData = (enteredExpenseData) => {
            const expenseData = {
                ...enteredExpenseData,
                //id: Math.random().toString()
              };
            props.onAddExpense(expenseData);
        }


        const [isediting , setIsediting] = useState(false);

        const clickformhandler = () => {
            setIsediting(true) 
        }
  
        const stopEditingHandler = () => {
            setIsediting(false) 
        }
        

    return (
        <div className="new-expense" >
            {!isediting && <button on onClick={clickformhandler}> هزینه جدید میخوام اضافه کنم</button> }
       {isediting && <ExpenseForm isediting  onSaveExpenseData={expenseData} onCancel={stopEditingHandler}/> }

        </div>
    )
}

export default NewExpense ; 