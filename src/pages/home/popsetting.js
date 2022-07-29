import React from "react";
export default function Popsettings(props) {
    return (
        <div className="popup-box">
            <div className="box">
                <div className="close-icon" onClick={() => props.handleClose(-1)}>x</div>
                setting
            </div>
        </div>
    );
};