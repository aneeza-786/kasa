import "../styles/Card.css";

function Card({ image, title }){
  return (
    <div className="card">
      <img src={image} alt="" className="card-img" />
      <h2 className="card-title">{title}</h2>
    </div>
  );
};

export default Card;