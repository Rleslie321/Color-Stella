import React, {Component} from 'react';


class RinsArt extends Component {

    componentDidUpdate(){
        const contentDiv = document.querySelector('.artContainer');
        if(contentDiv){
            setInterval(()=>{
                contentDiv.classList.toggle('starAnim');
            }, 10000);
        }
    }
    render(){
        let rinsVars = {};
        if(this.props.sign !== null){
            rinsVars = {
                'backgroundImage': `var(--rins${this.props.sign.toLowerCase()})`,
            };
        }
        return(
            <div className="artComp">
                {this.props.sign !== null && 
                    <div className="artContainer" style= {{'borderColor': this.props.color}}>
                        {/* <h1>{this.props.sign} Art</h1> */}
                        <div className="art" style={rinsVars}></div>
                        <a href="https://www.etsy.com/shop/carinascanvas">Etsy Link</a>
                    </div>
                }
            </div>
        );
    }
}

export default RinsArt;