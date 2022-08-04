import React from "react";
import {Link } from "react-router-dom";
export default function Characters(props)  {
    const crystalRef = React.useRef();
    const goldRef = React.useRef();
    const soulRef = React.useRef();
    //水晶: {props.crystal} 金錢:  {props.gold} 靈魂: {props.soul};
    React.useEffect(() => {
        crystalRef.current.animate([
            { '--num': props.oldResources.crystal },
            { '--num': props.newResources.crystal }
        ], {
            duration: 3000,
            fill: 'forwards',
            iterations: 1
        });
        goldRef.current.animate([
            { '--num': props.oldResources.gold },
            { '--num': props.newResources.gold }
        ], {
            duration: 3000,
            fill: 'forwards',
            iterations: 1
        });
        soulRef.current.animate([
            { '--num': props.oldResources.soul },
            { '--num': props.newResources.soul }
        ], {
            duration: 3000,
            fill: 'forwards',
            iterations: 1
        });
    }, [props.newResources]);
    return (
        <>
            <Link to="/">Home</Link>
            <h1>Characters</h1>
            <div className="config-resource">
                <div className="resource-number" ref={crystalRef}>水晶:</div>
                <div className="resource-number" ref={goldRef}>金錢:</div>
                <div className="resource-number" ref={soulRef}>靈魂:</div>
            </div>
        </>
    );
};