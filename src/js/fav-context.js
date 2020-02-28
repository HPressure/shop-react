import React from "react";

const FavContext = React.createContext({
  fav: [],
  addToFav: () => {}
});
export default FavContext;
