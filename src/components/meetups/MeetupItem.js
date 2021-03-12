import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = ({ data }) => {
  console.log(data);
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(data.id);
  // const removeFavorite = favoritesCtx.removeFavorite(data.id);
  // const addFavorite = favoritesCtx.addFavorite(data.id);

  function handleFavoriteStatus() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(data.id);
    } else
      favoritesCtx.addFavorite({
        id: data.id,
        title: data.title,
        description: data.description,
        address: data.address,
        image: data.image
      });
  }

  return (
    <>
      <Card>
        <div className={classes.content}>
          <h2>{data.title}</h2>
          <p> {data.description}</p>
          <img className={classes.image} src={data.image} alt={data.title} />
          <address>{data.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleFavoriteStatus}>
            {itemIsFavorite ? "Remove From Favorite" : "Add To Favorite"}
          </button>
        </div>
      </Card>
    </>
  );
};

export default MeetupItem;
