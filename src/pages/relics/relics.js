import React from "react";
import {Link } from "react-router-dom";
import Resources from "components/resource/resource";
export default function Relics(props)  {
    return (
        <>
            <div className="homeconfig">
                <Link to="/">X</Link>
                <Resources
                    oldResources={props.oldResources}
                    newResources={props.newResources}
                />
            </div>
        </>
    );
};