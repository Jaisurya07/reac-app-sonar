import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'
const NewExpense = (props) =>{
    
    const [initialstate ,setInitialStae] = useState(true);
    const newExpenseDataHandler = (incomingData) =>{
        console.log(incomingData);
        const newExpenseData = {id:Math.floor((Math.random()*100)).toString(),...incomingData }
        // setExpenseData((prevState)=>{
        //     return {newExpenseData,...prevState}
        // })
        // const updatedExpenseData = {
        //     ...incomingData,
        //     id : Math.floor((Math.random()*100)).toString() 
        // }
        props.onAddExpenseData(newExpenseData);

        
 }
 const changeInitialState = () => setInitialStae(!initialstate)
 if(initialstate){
     return (
         <div className ="new-expense">
             <button onClick={changeInitialState}>Add Expense</button>
         </div>
     )
 }


    return (
        <div className="new-expense">
            <ExpenseForm onNewExpenseData={newExpenseDataHandler} onCancel={changeInitialState}/>
        </div>
    )
}
export default NewExpense