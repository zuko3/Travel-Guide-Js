import React from "react";
import { Route, Redirect } from 'react-router-dom';
import { AllPlaces, PlaceTagsAll } from "../all-place";
import { PlaceDetails } from "../place-details"

export function AppRoutes() {
    return (
        <React.Fragment>
            <Route path="/" exact component={AllPlaces} />
            <Route path="/details/:id" component={PlaceDetails} />
            <Route path="/tags/:tag" component={PlaceTagsAll} />
            <Redirect to="/" />
        </React.Fragment>
    )
}