import "./Expenses.css"
import Soheil from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    
    const [filtredYear, setfiltredYear] = useState('August');


    const filterChangedHandler = (selectedYear) => {
        setfiltredYear(selectedYear);

    };
            
        //.items.filter((expense) => ( expense.date == filtredYear)) }

    const moz = props.items.filter(expense => {return expense.date.getMonth().toString() == filtredYear; });
            




    return (
        <div className="expenses" >
            <ExpenseFilter  selected={filtredYear} onChangeFilter={filterChangedHandler} />
        <ExpensesChart expenses={moz}></ExpensesChart>
       {moz.map((expense , index) => ( <Soheil
            key= {index + 1}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
        /> )) } 
       
        </div>
       
        );} 
      


export default Expenses;