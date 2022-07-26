import React from "react";

export default function HomeConfig(props)  {
    /*
    crystal={200}
                    gold={30000}
                    soul={9999999}*/
    return (
        <>
            <div>
                <button>setup</button>
                <button>info</button>
            </div>
            <div className="config-resource">
                    水晶: {props.crystal} 金錢:  {props.gold} 靈魂: {props.soul}
            </div>
        </>
    );
};