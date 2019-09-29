import React from 'react';
import { AppRoutes, history, ProfileContainer } from "./common"
import { Header, Tags, PopularPost, AuthForm } from "./common"
import { Router } from 'react-router-dom';
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginData: (payload) => {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload
      })
    }
  }
}

function mapStateToProps(state) {
  return ({ authData: state.authData })
}

export const App = connect(mapStateToProps, mapDispatchToProps)(function (props) {
  const { authData, setLoginData } = props;
  return (
    <Router history={history}>
      <div className="w3-content" style={{ maxWidth: "1400px" }}>
        <Header />
        <div className="w3-row">
          <div className="w3-col l8 s12">
            <AppRoutes />
          </div>
          <div className="w3-col l4">
            {authData ? <ProfileContainer authData={authData} /> : <AuthForm setLoginData={setLoginData} />}
            <Tags />
            <PopularPost />
          </div>
        </div>
      </div>
    </Router>

  );
})

export default App;
