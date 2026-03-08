function EventCard(props){
    return(
        <div>
        <h3>{props.name}</h3>
        <p> Date : {props.date}</p>
        <p>Location : {props.location}</p>
        <button>Register</button>
        </div>
    );
}


export default EventCard;