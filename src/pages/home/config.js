import React from "react";
import Resources from "components/resource/resource";

export default function HomeConfig(props) {
    return (
        <div className="homeconfig">
            <div>
                <button onClick={() => props.handlePopClose(1)}>setup</button>
                <button onClick={() => props.handlePopClose(2)}>info</button>
            </div>
            <Resources 
                oldResources={props.oldResources}
                newResources={props.newResources}
            />
        </div>
    );
};