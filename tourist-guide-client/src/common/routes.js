import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { AllPlaces } from "../all-place";
import { PlaceDetails } from "../place-details"

export function AppRoutes() {
    return (
        <React.Fragment>
            <Route path="/" exact component={AllPlaces} />
            <Route path="/details/:id" component={PlaceDetails} />
            <Redirect to="/" />
        </React.Fragment>
    )
}