import classes from './MeetupsItem.module.css';
import Card from '../ui/Card';

function MeetupsItems(props) {
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.m.image} alt="" />
                </div>
                <div className={classes.content}>
                    <h3>{props.m.title}</h3>
                    <address>{props.m.address}</address>
                    <p>{props.m.description}</p>
                </div>
                <div className={classes.actions}>
                    <button>To Fav</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupsItems;