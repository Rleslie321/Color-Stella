import React, {Component} from 'react';

class Horoscope extends Component {
    constructor(props){
        super(props);
        this.state = {
            sign: this.props.sign
        }
    }

    callAPI = () => {
        return 'placeholder';
    }

    render(){
        return(
            <div>
                {this.props.sign !== null && 
                <div className="horoscopeContainer">
                    <h1>{`${this.props.sign} Horoscope`}</h1>
                    <p>{this.callAPI()}</p>
                </div>
                }
            </div>
        );
    }
}

export default Horoscope;