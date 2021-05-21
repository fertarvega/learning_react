import React from 'react';
import Layout from './pages/Layout/Layout'
import Main from './pages/main/Main'

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Main title={"Wellcome"}></Main>
      </Layout>
    </React.Fragment>
    
  );
}

export default App;
