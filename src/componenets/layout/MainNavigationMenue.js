import { Link } from 'react-router-dom';
/* Import the css styles from the Navigation.module.css file
 - All the items in the css files will be loaded to javascript object 
 - All the css items can be access as a property of the js object dynamically
 */
import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
    <header className={classes.header}>
        <div className={classes.logo}>OrbitalScan</div>
        <nav>
            <ul>
                <li><Link to='/'>All</Link></li>
                <li><Link to='/new'>New</Link></li>
                <li><Link to='/fav'>Fav</Link></li>
            </ul>
        </nav>

    </header>
    );
}
export default MainNavigation