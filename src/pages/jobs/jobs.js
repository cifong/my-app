import React from "react";
import { Link } from "react-router-dom";
import Resources from "components/resource/resource";
import Itemnav from "components/itemnav/itemnav";
export default function Jobs(props) {
    const data = new Array(10).fill(0).map((v) => {
        console.log(v)
        return <div className="character-item">555</div>;
    })
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
                <div className="jobs-details-header">
                    <div className="jobs-details-headder-icon"></div>
                    <div className="jobs-details-header-info"></div>
                </div>
                <div className="jobs-details-value">
                    <div className="jobs-details-mhp"></div>
                    <div className="jobs-details-str"></div>
                    <div className="jobs-details-agi"></div>
                    <div className="jobs-details-int"></div>
                </div>
                <div className="jobs-details-other">
                    <div className="jobs-details-other-header">被動技能</div>
                    <div className="jobs-details-other-content"></div>
                </div>
                <div className="jobs-details-other">
                    <div className="jobs-details-other-header">主動技能</div>
                    <div className="jobs-details-other-content"></div>
                </div>
                <div className="jobs-details-other">
                    <div className="jobs-details-other-header">技能排組</div>
                    <div className="jobs-details-other-content"></div>
                </div>
            </div>
            <Itemnav data={data}/>
        </>
    );
};