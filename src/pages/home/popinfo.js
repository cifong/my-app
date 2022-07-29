import React from "react";
export default function Popinfo(props) {
    return (
        <div className="popup-box">
            <div className="box">
                <div className="close-icon" onClick={() => props.handleClose(-2)}>x</div>
                info
            </div>
        </div>
    );
};