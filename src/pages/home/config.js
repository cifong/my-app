import React from "react";
export default function HomeConfig(props) {
    const crystalRef = React.useRef();
    const goldRef = React.useRef();
    const soulRef = React.useRef();
    //水晶: {props.crystal} 金錢:  {props.gold} 靈魂: {props.soul};
    React.useEffect(() => {
        crystalRef.current.animate([
            { '--num': props.oldResources.current.crystal },
            { '--num': props.newResources.crystal }
        ], {
            duration: 3000,
            fill: 'forwards',
            iterations: 1
        });
        goldRef.current.animate([
            { '--num': props.oldResources.current.gold },
            { '--num': props.newResources.gold }
        ], {
            duration: 3000,
            fill: 'forwards',
            iterations: 1
        });
        soulRef.current.animate([
            { '--num': props.oldResources.current.soul },
            { '--num': props.newResources.soul }
        ], {
            duration: 3000,
            fill: 'forwards',
            iterations: 1
        });
        props.oldResources.current = props.newResources;
    }, [props.newResources]);
    return (
        <div className="homeconfig">
            <div>
                <button onClick={() => props.handlePopClose(1)}>setup</button>
                <button onClick={() => props.handlePopClose(2)}>info</button>
            </div>
            <div className="config-resource">
                <div className="resource-number" ref={crystalRef}>水晶:</div>
                <div className="resource-number" ref={goldRef}>金錢:</div>
                <div className="resource-number" ref={soulRef}>靈魂:</div>
            </div>
        </div>
    );
};