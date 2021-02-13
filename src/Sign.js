import React, {Component} from 'react';

class Sign extends Component {

    componentDidUpdate(){
        const contentDiv = document.querySelector('.signContainer');
        if(contentDiv){
            setInterval(()=>{
                contentDiv.classList.toggle('starAnim');
            }, 4000);
        }
    }
    render(){
        let signVars = {};
        if(this.props.sign !== null){
            // let url = `./styles/images/${this.props.sign.toLowerCase()}.png`;
            signVars = {
                'backgroundImage': `var(--${this.props.sign.toLowerCase()})`,
                'borderColor': this.props.color
            };
        }
        return(
            <div className="signComp">
                {/* {props.sign !== null &&
                <div className={props.sign}></div>} */}
                {this.props.sign !== null &&
                <div style={signVars} className="signContainer" ></div>}
            </div>
            
        )
    }
}

export default Sign;