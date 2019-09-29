import React from "react";
import { history } from "../common";

function doLogout(func) {
    typeof func === "function" && func();
    history.push("/");
}

function showPreference() {
    history.push("/home");
}

export function ProfileContainer(props) {
    const { authData, setLogout } = props;
    if (!authData) return;
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding" style={{ backgroundColor: '#f1f1f1' }}>
                <h4>Profile Information</h4>
                <span className="w3-tag" onClick={showPreference} style={{ cursor: 'pointer' }}>My Preferences</span>
                &nbsp;&nbsp;
                <span className="w3-tag" style={{ cursor: 'pointer' }}>Edit Profile</span>
                &nbsp;&nbsp;
                <span className="w3-tag" onClick={() => doLogout(setLogout)} style={{ cursor: 'pointer' }}>Logout</span>
            </div>
            <div className="w3-container w3-white">
                <p><b>Name:&nbsp;</b>{authData.name}</p>
                <p><b>Email:&nbsp;</b>{authData.email}</p>
                <p>
                    <b>Tags:&nbsp;</b>{authData.tags.map((tag, index) => <span key={index} style={{ marginRight: '3px' }} className="w3-tag w3-light-grey w3-small w3-margin-bottom">
                        {tag}
                    </span>)}
                </p>

            </div>
        </div>
    )
}