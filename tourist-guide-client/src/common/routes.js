import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { AllPlaces, PlaceTagsAll } from "../all-place";
import { PlaceDetails } from "../place-details"


const ProtectedRoute = ({ component: Comp, authData, path, ...rest }) => {
    return (
        <Route path={path} {...rest} render={props => {
            return authData ? <Comp {...props} authData={authData} /> : <Redirect to="/" />;
        }} />
    );
};

const Home = props => {
    console.log("home props:", props)
    return <h1>Home</h1>
}

export function AppRoutes(props) {
    const { authData } = props;
    return (
        <React.Fragment>
            <Route path="/" exact component={AllPlaces} />
            <Route path="/details/:id" component={PlaceDetails} />
            <Route path="/tags/:tag" component={PlaceTagsAll} />
            <ProtectedRoute path="/home" authData={authData} component={Home} />
        </React.Fragment>
    )
}