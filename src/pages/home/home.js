import React from "react";
import { Link } from "react-router-dom";
import HomeConfig from "./config";
import Logo from "./logo";
import Popsettings from "./popsetting";
export default function Home() {
    const [isOpen, setIsOpen] = React.useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
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
            {isOpen && <Popsettings
                content={<>
                    <b>Design your Popup</b>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <button>Test button</button>
                </>}
                handleClose={togglePopup}
            />}
        </div>
    );
};