import React, {Component} from 'react';

class Sign extends Component {
    render(){
        let signVars = {};
        if(this.props.sign !== null){
            signVars = {
                'backgroundImage': `var(--${this.props.sign.toLowerCase()})`,
                'backgroundPosition': 'center',
                'backgroundRepeat': 'no-repeat',
                'backgroundSize': 'cover',
                'backgroundColor': ''
            };
        }
        return(
            <div>
                {/* {props.sign !== null &&
                <div className={props.sign}></div>} */}
                {this.props.sign !== null &&
                <div style={signVars} className="signContainer" ></div>}
            </div>
            
        )
    }
}

export default Sign;