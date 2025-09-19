import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imageLink} className="card-img"/>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;