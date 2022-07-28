import React from "react";
import { Link } from "react-router-dom";
import HomeConfig from "./config";
import Logo from "./logo";
import Popsettings from "./popsetting";
import Popinfo from "./popinfo";
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
    }
    return (
        <div className="homepage">
            <div className="homeconfig">
                <HomeConfig
                    crystal={200}
                    gold={30000}
                    soul={9999999}
                    handleClose={togglePopup}
                />
            </div>
            <div className="homelogo"><Logo /></div>
            <div className="homegamecharacter">character area show the hero which is ready to go</div>
            <div className="homegameenter">button to enter game</div>
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