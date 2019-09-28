import React from "react";

export function PopularPost() {
    return (
        <div className="w3-card w3-margin">
            <div className="w3-container w3-padding" style={{ backgroundColor: '#f1f1f1' }}>
                <h4>Popular Posts</h4>
            </div>
            <ul className="w3-ul w3-hoverable w3-white">
                <li className="w3-padding-16">
                    <img src="https://www.w3schools.com/w3images/workshop.jpg" alt="popularpost" className="w3-left w3-margin-right" style={{ width: "50px" }} />
                    <span className="w3-large">Lorem</span><br />
                    <span>Sed mattis nunc</span>
                </li>
                <li className="w3-padding-16">
                    <img src="https://www.w3schools.com/w3images/gondol.jpg" alt="popularpost" className="w3-left w3-margin-right" style={{ width: "50px" }} />
                    <span className="w3-large">Ipsum</span><br />
                    <span>Praes tinci sed</span>
                </li>
                <li className="w3-padding-16">
                    <img src="https://www.w3schools.com/w3images/skies.jpg" alt="popularpost" className="w3-left w3-margin-right" style={{ width: "50px" }} />
                    <span className="w3-large">Dorum</span><br />
                    <span>Ultricies congue</span>
                </li>
                <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                    <img src="https://www.w3schools.com/w3images/rock.jpg" alt="popularpost" className="w3-left w3-margin-right" style={{ width: "50px" }} />
                    <span className="w3-large">Mingsum</span><br />
                    <span>Lorem ipsum dipsum</span>
                </li>
            </ul>
        </div>)
}