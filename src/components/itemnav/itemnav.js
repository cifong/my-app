import React from "react";

export default function Itemnav(props) {
    const pickStyle = {
        backgroundImage: `url(${props.selectHeadImage})`
    };
    return (
        <div className="item-nav">
            <div className="item-pick" style={pickStyle}>
                <div className="item-pick-lock"></div>
                <div className="item-pick-return"></div>
            </div>
            <div className="item-list">
                {props.data}
            </div>
        </div>
    );
};