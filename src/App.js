import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from "./pages/Layout/Layout"
import Login from "./pages/Login/Login";
import Main from "./pages/main/Main"
import Register from "./pages/Register/Register"
import NewBadge from "./pages/NewBadge/NewBadge"
import Error from "./pages/Error/Error"

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {/* <Main title={"Wellcome"}></Main> */}
        {/* <NewBadge></NewBadge> */}
        {/* <Login></Login> */}
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/new" component={NewBadge}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
