import React from 'react';
import { AppRoutes, history } from "./common"
import { Header, Tags, PopularPost } from "./common"
import { Router } from 'react-router-dom';

function App() {
  return (
    <Router history={history}>
      <div className="w3-content" style={{ maxWidth: "1400px" }}>
        <Header />
        <div className="w3-row">
          <div className="w3-col l8 s12">
            <AppRoutes />
          </div>
          <div className="w3-col l4">
            <Tags />
            <PopularPost />
          </div>
        </div>
      </div>
    </Router>

  );
}

export default App;
