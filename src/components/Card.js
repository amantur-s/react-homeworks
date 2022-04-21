import "./Card.css";

function Card(props) {
  return (
    <div className="card" >
      <img className="img" src={props.pic} alt="" />
      <div className="name" >
        {props.name} {props.id}
      </div>
      <div className="about"> About </div>
      <div className="info">{props.info}</div>
      <div></div>
    </div>
  );
}
export default Card;
