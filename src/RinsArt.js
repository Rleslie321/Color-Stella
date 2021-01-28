import React from 'react';


const RinsArt = (props) =>{
    let rinsVars = {};
    if(props.sign !== null){
        rinsVars = {
            'background': `var(--rins${props.sign.toLowerCase()})`,
            'backgroundColor': ''
        };
    }
    return(
        <div>
            {props.sign !== null && 
                <div className="artContainer">
                    <div className="art" style={rinsVars}></div>
                    <a href="biteme.com">Etsy Link</a>
                </div>
            }
        </div>
    );
}

export default RinsArt;