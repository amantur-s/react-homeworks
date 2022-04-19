import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
        <div>
          <img src={props.img} alt="" />
          <div> {props.title} </div>
          <div> {props.price} </div>
        </div>
    </div>
  );
}

export default ExpenseItem;
