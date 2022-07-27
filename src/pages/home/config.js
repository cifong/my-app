import React from "react";
export default function HomeConfig(props) {

  
    return (
        <>
            <div>
                <button  onClick={props.handleClose}>setup</button>
                <button>info</button>
            </div>
            <div className="config-resource">
                水晶: {props.crystal} 金錢:  {props.gold} 靈魂: {props.soul}
            </div>
        </>
    );
};