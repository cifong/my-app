import React from "react";
export default function Popsettings(props) {
    return (
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={() => props.handleClose(-1)}>x</span>
                setting
            </div>
        </div>
    );
};