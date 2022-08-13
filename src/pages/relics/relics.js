import React from "react";
import { Link } from "react-router-dom";
import Resources from "components/resource/resource";
export default function Relics(props) {
    const [relicstab, setRelicstab] = React.useState(0);
    let tabcontain;
    const tempdata = new Array(20).fill(0);
    
    if(relicstab === 0) {
        const t = tempdata.map(() => <div>123</div> );
        tabcontain = <div className="relics-list-body-contain">{t}</div>
    } else {
        const t = tempdata.map(() => <div>456</div> );
        tabcontain = <div className="relics-list-body-contain">{t}</div>
    }
    console.log('render');
    const switchtab = (tab) => {
        if(tab === relicstab) return;
        setRelicstab(tab);
    };
    return (
        <>
            <div className="homeconfig">
                <Link to="/">X</Link>
                <Resources
                    oldResources={props.oldResources}
                    newResources={props.newResources}
                />
            </div>
            <div className="relics-list">

                <div className="relics-list-wrapper">
                    <div className="relics-list-header">Relics</div>
                    <div className="relics-list-body">
                        <div className="relics-list-body-tab-btn">
                            <button onClick={() => switchtab(0)}>Relics</button>
                            <button onClick={() => switchtab(1)}>Fragment</button>
                        </div>
                        {tabcontain}
                    </div>
                    <div className="relics-list-foot">

                    </div>
                </div>
            </div>
            <div className="relics-select">

            </div>
        </>
    );
};