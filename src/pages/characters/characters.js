import React from "react";
import { Link } from "react-router-dom";
import Resources from "components/resource/resource";
export default function Characters(props) {
    const data = new Array(10).fill(0).map((v) => {
        console.log(v)
        return <div className="character-item">555</div>;
    })
    console.log(data)
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
                <div className="character-picture"></div>
                <div className="character-skill"></div>
                <div className="character-skill"></div>
            </div>
            <div className="character-nav">
                <div className="character-pick"></div>
                <div className="character-list">
                    {data}
                </div>
            </div>
        </div>
    );
};