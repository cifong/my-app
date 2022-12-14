import React from "react";
import { Link } from "react-router-dom";
import HomeConfig from "./config";
import Logo from "./logo";
import Popsettings from "./popsetting";
import Popinfo from "./popinfo";
import Popgameset from "./popgameset";
import {charachersData} from "data/characters";
export default function Home(props) {
    const [OpenPopnumber, setIsOpen] = React.useState(0);
    const togglePopup = (num) => { 
        setIsOpen(prestate => prestate + num);
    }
    let Popelement;
    if(OpenPopnumber === 1) {
        Popelement = <Popsettings
            handleClose={togglePopup}
        />;
    } else if(OpenPopnumber === 2) {
        Popelement = <Popinfo
            handleClose={togglePopup}
        />;
    } else if(OpenPopnumber === 3) {
        Popelement = <Popgameset
            handleClose={togglePopup}
        />;
    }
    const character = charachersData[props.selecterIndex];
    const mainstyle = {
        backgroundImage: `url(${character.fullImage})`
    };
    return (
        <div className="homepage">
            <HomeConfig
                newResources={props.resource}
                oldResources={props.oldResources}
                handlePopClose={togglePopup}
            />
            <Logo />
            <div className="homegamecharacter">
                <div className="maincharacter" style={mainstyle}>
                    <div className="atachcharacter">
                       
                    </div>
                </div>
                {props.showadbtn && <button onClick={props.handleAdResource}>ad</button>}
            </div>
            <div className="homegameenter"><button onClick={() => togglePopup(3)}>button to enter game</button></div>
            <div className="homenav">
                <Link to="/characters" className="nav-character"><div >角色</div></Link>
                <Link to="/relics" className="nav-relics"><div >遺物</div></Link>
                <Link to="/jobs" className="nav-skill"><div >職業</div></Link>
                <Link to="/market" className="nav-markey"><div >購物</div></Link>
            </div>
            {Popelement}
        </div>
    );
};