import React from "react";
import {Link } from "react-router-dom";
import HomeConfig from "./config";
import Logo from "./logo";
export default function Home()  {
    return (
        <div className="homepage">
            <div className="homeconfig"><HomeConfig /></div>
            <div className="homelogo"><Logo /></div>
            <div className="homegamecharacter">character area show the hero which is ready to go</div>
            <div className="homegameenter">button to enter game</div>
            <div className="homenav">
                <div><Link to="/characters">角色</Link></div>
                <div><Link to="/relics">遺物</Link></div>
                <div><Link to="/skill">技能</Link></div>
                <div><Link to="/market">購物</Link></div>
            </div>
        </div>
    );
};