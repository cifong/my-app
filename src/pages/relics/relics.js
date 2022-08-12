import React from "react";
import { Link } from "react-router-dom";
import Resources from "components/resource/resource";
export default function Relics(props) {
    return (
        <>
            <div className="homeconfig">
                <Link to="/">X</Link>
                <Resources
                    oldResources={props.oldResources}
                    newResources={props.newResources}
                />
            </div>
            <div className="relics-list">

                <div className="relics-list-wrapper">
                    <div className="relics-list-header"></div>
                    <div className="relics-list-body">

                    </div>
                    <div className="relics-list-foot">

                    </div>
                </div>
            </div>
            <div className="relics-select">

            </div>
        </>
    );
};