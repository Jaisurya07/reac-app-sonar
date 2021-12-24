import { screen, render  } from "@testing-library/react";
import ExpenseDate from "./ExpenseDate";
import '@testing-library/jest-dom'

it('should render Expense Date Component properly',()=>{
    const date = new Date(2021,11,17);
    render(<ExpenseDate date={date}/>)
    const dateElement = screen.getByTestId("expense Date")
    expect(dateElement).toBeInTheDocument()
})

it('should render date properly',()=>{
    const date = new Date(2021,11,17);
    render(<ExpenseDate date={date}/>)
    const dateElement = screen.getByTestId("expense date")
    expect(dateElement).toHaveTextContent('17');
})
it('should render month properly',()=>{
    const date = new Date(2021,10,17);
    render(<ExpenseDate date={date}/>)
    const dateElement = screen.getByTestId("expense month")
    expect(dateElement).toHaveTextContent('November');
})
it('should render year properly',()=>{
    const date = new Date(2021,11,17);
    render(<ExpenseDate date={date}/>)
    const dateElement = screen.getByTestId("expense year")
    expect(dateElement).toHaveTextContent('2021');
})