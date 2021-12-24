import { useState } from 'react';
import Cards from '../UI/Cards';
import './Expenses.css'
import ExpenseItem  from './Expenseitem';
import ExpenseFilter from '../NewExpenses/ExpenseFilter'
import ExpenseList from './ExpenseList';
function Expenses(props){

  const [year,setYear] = useState('2021')

   const onYearSelectionHandler = yearData =>{
        setYear(yearData)
       
      }
      const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear().toString() === year)
      console.log('filtered expenses is',filteredExpenses)
    
  return (
    <li>
   <Cards className="expenses">
   <ExpenseFilter selectedYear={year} onYearSelected={onYearSelectionHandler}/>
      <ExpenseList expenses={filteredExpenses}/>
      </Cards>
    </li>
    
  )
    
}

export default Expenses;