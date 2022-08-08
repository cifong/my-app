import React from "react";
import { Link } from "react-router-dom";
import Resources from "components/resource/resource";
export default function Characters(props) {
    return (
        <div className="character-wrapper">
            <div className="homeconfig">
                <Link to="/">X</Link>
                <Resources
                    oldResources={props.oldResources}
                    newResources={props.newResources}
                />
            </div>
            <div className="character-detail"> 
                123
            </div>
            <div className="character-list">
                456
            </div>
        </div>
    );
};