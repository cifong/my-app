import React from "react";
import { Link } from "react-router-dom";
import HomeConfig from "./config";
import Logo from "./logo";
import Popsettings from "./popsetting";
import Popinfo from "./popinfo";
import Popgameset from "./popgameset";
export default function Home() {
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
    return (
        <div className="homepage">
            <HomeConfig
                crystal={200}
                gold={30000}
                soul={9999999}
                handleClose={togglePopup}
            />
            <Logo />
            <div className="homegamecharacter">
                <div className="maincharacter">
                    <div className="atachcharacter"></div>
                </div>
            </div>
            <div className="homegameenter"><button onClick={() => togglePopup(3)}>button to enter game</button></div>
            <div className="homenav">
                <div><Link to="/characters">角色</Link></div>
                <div><Link to="/relics">遺物</Link></div>
                <div><Link to="/skill">技能</Link></div>
                <div><Link to="/market">購物</Link></div>
            </div>
            {Popelement}
        </div>
    );
};