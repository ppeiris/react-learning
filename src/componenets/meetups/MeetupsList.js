import MeetupsItems from "./MeetupsItems";

function MeetupsList(props) {
    return (
        <ul>
            {props.meetups.map((meetup) => {
                return <MeetupsItems m={meetup}/>
            })}
        </ul>
    );
}

export default MeetupsList;



