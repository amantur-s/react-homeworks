import "./CardLayout.css";

function CardLayout(props) {
  let title = "Online Users 875/2,452";
  let watch = "Watch users";
  return (
    <div>
      <h1>{title}</h1>
      <h3>{watch}</h3>
      <div className="wrapper">{props.children}</div>
    </div>
  );
}
export default CardLayout;
