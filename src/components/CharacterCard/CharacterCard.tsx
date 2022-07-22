import './characterCard.css';

export default function CharacterCard({...props}) {
    return (
        <article>
            <header>
                <h2>{props.name}</h2>
            </header>
            <img src={props.image} alt={"image of " + props.name}/>
            <p>{props.originName}</p>
            <div>
                <p>{props.gender}</p>
                <p>{props.status}</p>
            </div>
        </article>
    );
}