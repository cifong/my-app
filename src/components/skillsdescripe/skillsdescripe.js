import React from "react";
import {passiveSkills, skills} from "data/characters";
export default function Skillsdescripe(props) {
    const [skillsindex, setSkillsIndex] = React.useState(0);
    console.log(props)
    const data = 0 < props.data.length ? passiveSkills[props.data[skillsindex]] : passiveSkills[0];
    return (
        <div className="character-skill">
            <div>{data.name}</div>
            <div>{data.list.map(sidx => skills[sidx].name)}</div>
        </div>
    );
};