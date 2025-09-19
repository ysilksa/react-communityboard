import './Card.css';

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imageLink} className="card-img"/>
            <h2>{props.name}</h2>
            <h5>{props.description}</h5>
            <p>{props.info}</p>
        </div>
    );
}

export default Card;