import "./ExpenseForm.css"
import React , { useState } from "react";



const ExpenseForm = (props) => {
    

    const [enteredtitle , setEnteredTitle] = useState("");
    const [enteredamount , setEnteredAmount] = useState("");
    const [entereddate , setEnteredDate] = useState("");
    

    const TitleOnChangeHandler = (event) => {
        setEnteredTitle(event.target.value) ;
        };

    const AmountOnChangeHandler = (event) => {
        setEnteredAmount(event.target.value) ;
            };

    
    const DateOnChangeHandler = (event) => {
        setEnteredDate(event.target.value) ;
            };    
    


    const OnSbmitHandler = (event) => {
        
      event.preventDefault();
            
        const ExpenseData = {
        title: enteredtitle ,
        amount: enteredamount ,
        date: new Date(entereddate)
        };
        props.onSaveExpenseData(ExpenseData)
        setEnteredDate('');
        setEnteredTitle("");
        setEnteredAmount("");    
            };
        



    return (


    <form onSubmit={OnSbmitHandler}>
        <div className="new-expense__controls">
            
            <div className="new-expense__control">
                <label> عنوان خرید </label>
                <input type="text"  value={enteredtitle} onChange={TitleOnChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label> (ریال) قیمت خرید</label>
                <input type="number" min="0.00" step="1" value={enteredamount} onChange={AmountOnChangeHandler} />
            </div>

            <div className="new-expense__control">
                <label> تاریخ </label>
                <input type="date" min="2022-01-01" value={entereddate} onChange={DateOnChangeHandler} />
            </div>

        </div>

        <div className="new-expense__actions">
            <button type="submit">هزینه را اضافه کن</button>
            <button type="submit" onClick={props.onCancel}>cancel</button>

        </div>

    </form>
    )
}

export default ExpenseForm ; 