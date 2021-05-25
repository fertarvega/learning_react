import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Layout from './pages/Layout/Layout'
import Login from './pages/Login/Login';
import Main from './pages/main/Main'
import NewBadge from "./pages/NewBadge/NewBadge"

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
          <Route component={Error}></Route>
        </Switch>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
