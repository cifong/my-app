import React from "react";
import { Link } from "react-router-dom";
import HomeConfig from "./config";
import Logo from "./logo";
import Popsettings from "./popsetting";
import Popinfo from "./popinfo";
import Popgameset from "./popgameset";
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
    const adcount = React.useRef(0);
    const addresource = () => {
        if(adcount.current === 6) return;
        if(adcount.current & 1) {
            props.handleResource('crystal', 3000);
        } else {
            props.handleResource('gold', 3000);
        }
        adcount.current = adcount.current + 1;
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
                <div className="maincharacter">
                    <div className="atachcharacter">
                        {adcount.current < 6 && <button onClick={addresource}>ad</button>}
                    </div>
                </div>
            </div>
            <div className="homegameenter"><button onClick={() => togglePopup(3)}>button to enter game</button></div>
            <div className="homenav">
                <Link to="/characters" className="nav-character"><div >角色</div></Link>
                <Link to="/relics" className="nav-relics"><div >遺物</div></Link>
                <Link to="/skill" className="nav-skill"><div >技能</div></Link>
                <Link to="/market" className="nav-markey"><div >購物</div></Link>
            </div>
            {Popelement}
        </div>
    );
};