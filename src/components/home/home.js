import React from "react";
import '../../assets/home.css';
import {Link } from "react-router-dom";
export default function Home()  {
    return (
        <div className="homepage">
            <div className="homeconfig">function area</div>
            <div className="homelogo">logo</div>
            <div className="homegamecharacter">character area show the hero which is ready to go</div>
            <div className="homegameenter">button to enter game</div>
            <div className="homenav">
                <div><Link to="/skill">技能</Link></div>
                <div><Link to="/skill">技能</Link></div>
                <div><Link to="/skill">技能</Link></div>
                <div><Link to="/skill">技能</Link></div>
            </div>
        </div>
    );
};