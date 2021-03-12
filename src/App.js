import "./styles.css";
import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={AllMeetupsPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/newmeetup" component={NewMeetupPage} />
      </Switch>
    </Layout>
  );
}
