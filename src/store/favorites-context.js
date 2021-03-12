import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritemeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);
  // const [loading, setLoading] = useState(false)

  const handleAddFavorite = (favoritemeetup) => {
    // setUserFavorites(userFavorites.concat(favoritemeetup))

    // There is a latency in loading the latest state
    // this quarantee that we work with the latest snapshot
    // this is a better way to update the state if it depends on the previous sersion
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.concat(favoritemeetup)
    );
  };

  const handleRemoveFavorite = (meetupId) => {
    setUserFavorites((prevUserFavorites) =>
      prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const handleItemIsFavorite = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: handleAddFavorite,
    removeFavorite: handleRemoveFavorite,
    itemIsFavorite: handleItemIsFavorite
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
