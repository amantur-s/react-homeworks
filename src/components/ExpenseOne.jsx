import './Expense.css';


function ExpenseOne (props) {
    return (
        <div className="expense-one">
            <div className='id'> {props.id} </div>
        </div>
    )
}

export default ExpenseOne