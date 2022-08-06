import React from "react";
export default function HomeConfig(props) {
    const crystalRef = React.useRef();
    const goldRef = React.useRef();
    const soulRef = React.useRef();
    //水晶: {props.crystal} 金錢:  {props.gold} 靈魂: {props.soul};
    React.useEffect(() => {
        if(props.oldResources.current.crystal !== props.newResources.crystal) {
            crystalRef.current.animate([
                { '--num': props.oldResources.current.crystal },
                { '--num': props.newResources.crystal }
            ], {
                duration: 3000,
                fill: 'forwards',
                iterations: 1
            });
        } else {
            crystalRef.current.style.setProperty('--num', props.newResources.crystal);
        }
        if(props.oldResources.current.gold !== props.newResources.gold) {
            goldRef.current.animate([
                { '--num': props.oldResources.current.gold },
                { '--num': props.newResources.gold }
            ], {
                duration: 3000,
                fill: 'forwards',
                iterations: 1
            });
        } else {
            goldRef.current.style.setProperty('--num', props.newResources.gold);
        }
        if(props.oldResources.current.soul !== props.newResources.soul) {     
            soulRef.current.animate([
                { '--num': props.oldResources.current.soul },
                { '--num': props.newResources.soul }
            ], {
                duration: 3000,
                fill: 'forwards',
                iterations: 1
            });
        } else {
            soulRef.current.style.setProperty('--num', props.newResources.soul);
        }
        props.oldResources.current = props.newResources;
    }, [props.newResources]); // eslint-disable-line react-hooks/exhaustive-deps
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