import React, { useState, useEffect } from "react";
import { envConstants, apiUrls } from "../env.constants";
import { Loader, Error, None } from "../common";
import { PlaceCard } from "../place-card"

export function PlaceTagsAll(props) {
    const { params: { tag } } = props.match;
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [place, setPlace] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
        const placeDetailsUrls = `${envConstants.BASE_URL}${apiUrls.PLACE_TAGS_ALL}${tag}`;
        setIsError(false);
        setIsLoading(true);
        setPlace([]);
        fetch(placeDetailsUrls).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Something went wrong');
            }
        }).then(response => {
            setIsError(false);
            setIsLoading(false);
            setPlace(response.places || []);
        }).catch(err => {
            setIsError(true);
            setIsLoading(false);
            setPlace([]);
        })
    }, [tag]);

    if (isLoading) {
        return (
            <React.Fragment>
                <h3>Showing all results for Tag:&nbsp;<span className="w3-tag w3-light-grey">{tag}</span></h3>
                <Loader />
            </React.Fragment>
        )
    }
    else if (isError) {
        return (
            <React.Fragment>
                <h3>Showing all results for Tag:&nbsp;<span className="w3-tag w3-light-grey">{tag}</span></h3>
                <Error />
            </React.Fragment>
        )
    } else if (place.length === 0) {
        return (
            <React.Fragment>
                <h3>Showing all results for Tag:&nbsp;<span className="w3-tag w3-light-grey">{tag}</span></h3>
                <None />
            </React.Fragment>
        )
    } else {

        return (
            <React.Fragment>
                <h3>Showing all results for Tag:&nbsp;<span className="w3-tag w3-light-grey">{tag}</span></h3>
                {place.map((p, index) => <PlaceCard place={p} key={index} />)}
            </React.Fragment>
        )

    }

}