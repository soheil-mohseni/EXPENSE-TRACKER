import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import React , { useState } from "react";



const Soheil = (props) => {
    
console.log(props)
   // const [title , setTitle] = useState(props.title);
    
    const clickHandler = () => {

        setTimeout(() => {
        document.getElementById("expense-item").remove()
        },5000)

        };
    
    return (
        <div id="expense-item" className="expense-item" >
            
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
            
            <h2>{props.title} </h2>

            <h1>{props.id}</h1>
            
            <div className="expense-item__price"> {props.amount}</div>
            
            </div>

            <button onClick={clickHandler} id = "deletehandler"> <h5>  پاک کردن  </h5>  </button>
        </div>
    )
}

export default Soheil ; 