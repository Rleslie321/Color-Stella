import React, {Component} from 'react';

class Horoscope extends Component {
    constructor(props){
        super(props);
        this.state = {
            sign: this.props.sign
        }
    }

    componentDidUpdate(){
        const contentDiv = document.querySelector('.horoscopeContainer');
        if(contentDiv){
            setInterval(()=>{
                contentDiv.classList.toggle('starAnim');
            }, 16000);
        }
    }

    callAPI = () => {
        // return 'placeholder';
        return `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et tortor at risus viverra. Eu turpis egestas pretium aenean pharetra magna. Nam aliquam sem et tortor. Elementum nibh tellus molestie nunc non blandit massa. Enim ut sem viverra aliquet. Volutpat ac tincidunt vitae semper quis lectus nulla. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Ultricies tristique nulla aliquet enim tortor at. Suspendisse faucibus interdum posuere lorem ipsum dolor sit amet consectetur.`;
    }

    render(){
        return(
            <div className="horoscopeComp">
                {this.props.sign !== null && 
                <div className="horoscopeContainer" style= {{'borderColor': this.props.color}}>
                    <h1>{`${this.props.sign} Horoscope`}</h1>
                    <p>{this.callAPI()}</p>
                </div>
                }
            </div>
        );
    }
}

export default Horoscope;