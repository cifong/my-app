import React from "react";

export default function Itemnav(props) {
    return (
        <div className="item-nav">
            <div className="item-pick"></div>
            <div className="item-list">
                {props.data}
            </div>
        </div>
    );
};