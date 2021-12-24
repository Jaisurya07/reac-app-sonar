import { screen, render  } from "@testing-library/react";
import ExpenseItem from "./Expenseitem";
import '@testing-library/jest-dom'

it('should render Expense Item Component properly',()=>{
    const date = new Date(2021,11,17);
    render(<ExpenseItem date={date} title={"Medicine"} amount={"$12"}/>)
    const dateElement = screen.getByRole("heading")
    expect(dateElement).toBeInTheDocument()
})