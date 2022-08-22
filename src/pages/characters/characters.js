import React from "react";
import { Link } from "react-router-dom";
import Resources from "components/resource/resource";
import Itemnav from "components/itemnav/itemnav";
import {charachersData} from "data/characters";
export default function Characters(props) {
    const data = charachersData.map((v) => {
        console.log(v)
        const style = {
            backgroundImage: `url(${v.headImage})`
        };
        return <div className="character-item" style={style}>{v.name}</div>;
    });
    console.log(charachersData)
    return (
        <>
            <div className="homeconfig">
                <Link to="/">X</Link>
                <Resources
                    oldResources={props.oldResources}
                    newResources={props.newResources}
                />
            </div>
            <div className="character-detail"> 
                <div className="character-picture"></div>
                <div className="character-skill"></div>
                <div className="character-skill"></div>
            </div>
            <Itemnav data={data}/>
        </>
    );
};