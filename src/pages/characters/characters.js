import React from "react";
import { Link } from "react-router-dom";
import Resources from "components/resource/resource";
import Itemnav from "components/itemnav/itemnav";
import Skillsdescripe from "components/skillsdescripe/skillsdescripe";
import {charachersData} from "data/characters";
export default function Characters(props) {
    const [characterIndex, setCharacterInfex] = React.useState(props.selecterIndex);
    const character = charachersData[characterIndex];
    const data = charachersData.map((v, i) => {
        const style = {
            backgroundImage: `url(${v.headImage})`
        };
        return <div className="character-item" style={style} data-index={i} onClick={(e) => setCharacterInfex(+e.target.dataset.index)}>{v.name}</div>;
    });
    const chacterStyle = {
        backgroundImage: `url(${character.fullImage})`
    };
    React.useEffect(() => {
        props.handleCharacters(characterIndex);
    }, [characterIndex]); // eslint-disable-line react-hooks/exhaustive-deps
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
                <div className="character-picture" style={chacterStyle}></div>
                <Skillsdescripe data={character.passiveSkill}/>
                <Skillsdescripe data={character.passiveSkill}/>
            </div>
            <Itemnav data={data} selectHeadImage={character.headImage} isfavorate={false}/>
        </>
    );
};