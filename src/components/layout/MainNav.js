import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNav.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNav = () => {

const {totalFavorites} =  useContext(FavoritesContext)

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites <span className={classes.badge}>{totalFavorites}</span></Link>
          </li>
          <li>
            <Link to="/newmeetup">NewMeetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNav;
