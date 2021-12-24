import {render , screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

it('should render the App component',()=>{
    render(<App/>);
    const buttonElement = screen.getByText(/Add Expense/i);
    expect(buttonElement).toBeInTheDocument();
})