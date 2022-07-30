import React from "react";
export default function Popgameset(props) {
    return (
        <div className="popup-box">
            <div className="box">
                <div className="close-icon" onClick={() => props.handleClose(-3)}>x</div>
                Popgameset
            </div>
        </div>
    );
};