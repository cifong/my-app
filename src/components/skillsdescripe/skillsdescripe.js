import React from "react";
import {passiveSkills, activeSkills, skills, activeSkillsEffect} from "data/characters";
export default function Skillsdescripe(props) {
    const [skillsindex, setSkillsIndex] = React.useState(0);
    let skilldata, skilldatadetail;
    if(props.skillstype === 0) {
        skilldata = passiveSkills;
        skilldatadetail = skills;
    } else {
        skilldata = activeSkills;
        skilldatadetail = activeSkillsEffect;
    }
    const data = 0 < props.data.length ? skilldata[props.data[skillsindex]] : skilldata[0];
    return (
        <div className="character-skill">
            <div>{data.name}</div>
            <div>{data.list.map(sidx => skilldatadetail[sidx].name)}</div>
        </div>
    );
};