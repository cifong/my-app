import React from "react";
export default function HomeConfig(props) {

  
    return (
        <div className="homeconfig">
            <div>
                <button onClick={() => props.handleClose(1)}>setup</button>
                <button onClick={() => props.handleClose(2)}>info</button>
            </div>
            <div className="config-resource">
                水晶: {props.crystal} 金錢:  {props.gold} 靈魂: {props.soul}
            </div>
        </div>
    );
};