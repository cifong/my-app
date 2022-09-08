import Character1 from "assets/characters/1.png";
import Character1Head from "assets/characters/1-head.png";
import Character2 from "assets/characters/2.png";
import Character2Head from "assets/characters/2-head.png";
const charachersData = [
    {id: 1, name: 'dog', defaultHP: 10, defaultStr: 10, defaultAgi: 10, defaultInt: 10, fullImage: Character1, headImage: Character1Head, passiveSkill: [1, 2]},
    {id: 2, name: 'cat', defaultHP: 10, defaultStr: 10, defaultAgi: 10, defaultInt: 10, fullImage: Character2, headImage: Character2Head, passiveSkill: []}
];

const passiveSkills = [
    {name: 'None', list:[]},
    {name: 'test1', list:[0, 1]},
    {name: 'test3', list:[2, 3]}
];

const skills = [
    {name: 'effect1'},
    {name: 'effect2'},
    {name: 'effect3'},
    {name: 'effect4'}
];

export {charachersData, passiveSkills, skills};