import React from "react";
import {Link } from "react-router-dom";
import Resources from "components/resource/resource";
export default function Characters(props)  {
    return (
        <>
            <Link to="/">X</Link>
            <Resources 
                oldResources={props.oldResources}
                newResources={props.newResources}
            />
        </>
    );
};