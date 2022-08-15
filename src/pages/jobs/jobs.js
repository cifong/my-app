import React from "react";
import { Link } from "react-router-dom";
import Resources from "components/resource/resource";
export default function Jobs(props) {
    return (
        <>
            <div className="homeconfig">
                <Link to="/">X</Link>
                <Resources
                    oldResources={props.oldResources}
                    newResources={props.newResources}
                />
            </div>
            <div className="jobs-details">
                <div className="jobs-details-header"></div>
                <div className="jobs-details-value"></div>
                <div className="jobs-details-passiveskill"></div>
                <div className="jobs-details-ablity"></div>
                <div className="jobs-details-ablities"></div>
            </div>
            <div className="jobs-nav">
                <div className="jobs-pick"></div>
                <div className="jobs-list"></div>
            </div>
        </>
    );
};