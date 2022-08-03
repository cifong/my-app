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
    const [Resources, setResources] = React.useState({
        crystal: 2000,
        gold: 300000,
        soul: 99999999
    });
    const oldResources = React.useRef(Resources);
    React.useEffect(() => {
        oldResources.current = Resources; 
    })
    const addresource = () => {
        setResources(oldstate => {
            return {
                ...oldstate,
                gold: oldstate.gold + 500,
                crystal: oldstate.crystal + 99999
            }
        });
    }
    return (
        <div className="homepage">
            <HomeConfig
                newResources={Resources}
                oldResources={oldResources.current}
                handlePopClose={togglePopup}
            />
            <Logo />
            <div className="homegamecharacter">
                <div className="maincharacter">
                    <div className="atachcharacter">
                        <button onClick={addresource}>ad</button>
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