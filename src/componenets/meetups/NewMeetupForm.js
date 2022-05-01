import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css'

import { useRef } from 'react';

function NewMeetupForm(props) {
    const titleInputRef = useRef();
    const imageInputRef= useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();
    
    function submitHander(event) {
        /** events object automatically get inject to the function 
         * from the onSubmit event from the form
        */
        event.preventDefault();

        const newTitle = titleInputRef.current.value;
        const newImage = imageInputRef.current.value;
        const newAddress = addressInputRef.current.value;
        const newDescription = descriptionInputRef.current.value;
        const meetupData = {
            title: newTitle,
            image: newImage,
            address: newAddress,
            description: newDescription
        }
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            testing
            <form className={classes.form} onSubmit={submitHander}>
                <div className={classes.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Image</label>
                    <input type='url' required id='image' ref={imageInputRef}></input>
                </div>
                <div className={classes.control}>
                    <label htmlFor='address'>Address</label>
                    <textarea required id='addredd' ref={addressInputRef}></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea type='text' required row='5' id='description' ref={descriptionInputRef}></textarea>
                </div>
                <div className={classes.control}>
                    <label htmlFor='image'>Submit</label>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}

export default NewMeetupForm;