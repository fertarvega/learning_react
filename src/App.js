import React from 'react';
import Layout from './pages/Layout/Layout'
import Login from './pages/Login/Login';
import Main from './pages/main/Main'
import NewBadge from "./pages/NewBadge/NewBadge"

function App() {
  return (
    <React.Fragment>
      <Layout>
        {/* <Main title={"Wellcome"}></Main> */}
        <NewBadge></NewBadge>
        {/* <Login></Login> */}
        
      </Layout>
    </React.Fragment>
    
  );
}

export default App;
