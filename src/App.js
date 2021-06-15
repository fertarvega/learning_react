import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Login from "./pages/Login/Login";
import Main from "./pages/main/Main"
import Register from "./pages/Register/Register"
import NewBadge from "./pages/NewBadge/NewBadge"
import Badges from "./pages/Badges/Badges"
import BadgeDetails from "./components/BadgeDetails"
import Error from "./pages/Error/Error"
import EditBadge from "./pages/EditBadge/EditBadge";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/badges" component={Badges}></Route>
          <Route exact path="/:badgeId" component={BadgeDetails}></Route>
          <Route exact path="/:badgeId/edit" component={EditBadge}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
