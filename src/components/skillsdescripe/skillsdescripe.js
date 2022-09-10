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
    const data = props.data.length ? skilldata[props.data[skillsindex]] : skilldata[0];
    const turnPage = (num) => setSkillsIndex(prestate => prestate + num);
    const turnPageLeft = () => turnPage(-1);
    const turnPageRight = () => turnPage(1);
    return (
        <div className="character-skill">
            <div className="character-skill-header">{data.name}</div>
            <div className="character-skill-body">
                {skillsindex > 0 ? <div className="skill-page-btn" onClick={turnPageLeft}>&lt;</div> : <div className="skill-page-btn"></div>}
                <div className="skill-page-content">{data.list.map(sidx => skilldatadetail[sidx].name)}</div>
                {skillsindex < props.data.length - 1 ? <div className="skill-page-btn" onClick={turnPageRight}>&gt;</div> : <div className="skill-page-btn"></div>}
                
            </div>
        </div>
    );
};