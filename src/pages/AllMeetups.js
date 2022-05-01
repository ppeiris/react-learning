import { useState, useEffect } from "react";
import MeetupsList from "../componenets/meetups/MeetupsList";

function AllMeetupsPage(){
    /* load the data from the database */
    const [isLoading, setIsLoading] = useState(true);
    const [loadMeetups, setLoadMeetups] = useState([]);

    useEffect(() => {
      setIsLoading(true);
      /* this get the data using api, GET method */
      fetch(
        'https://react-backend-2deb8-default-rtdb.firebaseio.com/meetup.json'
      ).then((response) => {
        const resp = response.json();
        return resp
      }
      ).then((data) => {
        /** we get data as an object and need to conver to array */
        const meetups = [];
        for (const key in data){
          const meetup = {
            id: key,
            ...data[key]
          }
          meetups.push(meetup)
        }
        setIsLoading(false);
        setLoadMeetups(meetups);
      }
      );  
    }, [])

    if (isLoading) {
      return (
        <div>
          Loading...
        </div>
      );
    }



    return <section>
        <MeetupsList meetups={loadMeetups}/>
    </section>
}

export default AllMeetupsPage