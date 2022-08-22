import React from "react";
export default function Popinfo(props) {
    return (
        <div className="popup-box">
            <div className="box">
                <div className="close-icon" onClick={() => props.handleClose(-2)}>x</div>
                info
                Icon Art
                Barracks icon, Tower flag icon
                    by Delapouite https://delapouite.com/
                Sword and spade icon, Lightning saber
                    by Lorc https://lorcblog.blogspot.com/
                ジュエルセイバーFREE
                    https://jewel-s.jp/
            </div>
        </div>
    );
};