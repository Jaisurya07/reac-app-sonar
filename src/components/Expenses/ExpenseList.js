import './ExpenseList.css'
import ExpenseItem from './Expenseitem'
const ExpenseList = (props) =>{
    
 if(!props.expenses.length){
    return <h1 className="expenses-list__fallback">No Expenses Found!</h1>
 }   
return (
    <ui className="expenses-list">
        {props.expenses.map(expense =><ExpenseItem date={expense.date} title={expense.title} amount={expense.amount}/>)}
    </ui>
)
}
export default ExpenseList;