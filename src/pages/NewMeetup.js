import Card from "../componenets/ui/Card";
import NewMeetupForm from "../componenets/meetups/NewMeetupForm";

import { useNavigate } from 'react-router-dom';

function NewMeetup(){
    const navigate = useNavigate();
    function addMeetupHander(meetupData) {
        fetch(
            'https://react-backend-2deb8-default-rtdb.firebaseio.com/meetup.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            navigate('/');
        });
    }


    return (
        <Card>
            <NewMeetupForm onAddMeetup={addMeetupHander}/>
        </Card>
    );
}

export default NewMeetup;