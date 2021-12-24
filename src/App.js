import { useState } from 'react';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpense';
function App() {
  const initialExpenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [expenses,setExpenses] = useState(initialExpenses);
  // let items;
  // let filteredItems;
  const addExpenseDataHandler = (expenseData) =>{
    console.log(expenseData)
    setExpenses((prevState)=>{
      const updateData = [expenseData,...prevState]
      console.log(updateData);
      return updateData
    })
  }
  
   
  
  // items = filteredItems?filteredItems:expenses;
  // console.log(items)
  return (
    <div>
      <NewExpense onAddExpenseData={addExpenseDataHandler}/>
     <Expenses
        expenses={expenses}
      />
    </div>
  );
   
}

export default App;
