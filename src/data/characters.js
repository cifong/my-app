import Character1 from "assets/characters/1.png";
import Character1Head from "assets/characters/1-head.png";
import Character2 from "assets/characters/2.png";
import Character2Head from "assets/characters/2-head.png";
const charachersData = [
    {id: 1, name: 'dog', defaultHP: 10, defaultStr: 10, defaultAgi: 10, defaultInt: 10, fullImage: Character1, headImage: Character1Head, passiveSkill: 0},
    {id: 2, name: 'cat', defaultHP: 10, defaultStr: 10, defaultAgi: 10, defaultInt: 10, fullImage: Character2, headImage: Character2Head, passiveSkill: 1}
];

const passiveSkills = [
    {name: 'test1'},
    {name: 'test3'}
];

const siklls = [
    {name: 'park'}
];

export {charachersData, passiveSkills, siklls};