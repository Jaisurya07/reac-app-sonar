import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date" data-testid="expense Date">
      <div className="expense-date__month" data-testid="expense month">{month}</div>
      <div className="expense-date__year" data-testid="expense year" >{year}</div>
      <div className="expense-date__day" data-testid="expense date" >{day}</div>
    </div>
  );
}

export default ExpenseDate;