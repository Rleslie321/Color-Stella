import './styles/App.css';
import React, {Component} from 'react';
import Horoscope from './Horoscope';
import Sign from './Sign';
import RinsArt from './RinsArt';

class App extends Component {

  constructor(){
    super();
    var curr = new Date();
    var date = curr.toISOString().substr(0,10);
    this.state = {
      sign: null,
      birth: date
    }
    this.astro_colors = [
      {sign:'Sagittarius', colors:['#A6606D', '#F2A341', '#F29544', '#F27D52', '#D97762']},
      {sign:'Capricorn', colors:['#E8DDCB', '#CDB380', '#2B6665', '#123649', '#031634']},
      {sign:'Aquarius', colors:['#409092', '#62D4CD', '#F4E94D', '#EC602F', '#73E29B']},  //orange is an interesting choice
      {sign:'Pisces', colors:['#C2BDF9', '#2CECDD', '#F8F99B', '#F6BCDF', '#CCCCFF']},
      {sign:'Leo', colors:['#408F8A', '#3C154F', '#E24263', '#ED6F31', '#F4B43C']},
      {sign:'Virgo', colors:['#979797', '#C3B0A0', '#E0CFBC', '#ED6F31', '#C699390']},
      {sign:'Libra', colors:['#F5C46C', '#FBEAE2', '#EF886D', '#B2DDDE', '#D9CDD6']},
      {sign:'Scorpio', colors:['#2C6556', '#609979', '#912635', '#531639', '#010734']},
      {sign:'Aries', colors:['#F63A3A', '#FFBC84', '#FFEE8A', '#BA1818', '#DD6A6A']},
      {sign:'Taurus', colors:['#27A930', '#008337', '#00693C', '#5A3C00', '#E4A5AE']},
      {sign:'Gemini', colors:['#DB8CF0', '#8BB1F2', '#F47676', '#F29C54', '#EAD13C']}, //gemini may be bad
      {sign:'Cancer', colors:['#B0D6E3', '#83B6D4', '#D2D6D8', '#EDBBC1', '#E57290']}
    ];// '#FFD6E9', '#FFBCDA', '#E1B09C', '#C79274', '#946656'
    // this.astro_signs = ['Sagittarius', 'Capricorn','Aquarius','Pisces','Leo','Virgo','Libra','Scorpio','Aries','Taurus','Gemini','Cancer'];

    this.astro_dates = [{month: '01', date: 20, signs:['Capricorn', 'Aquarius']}, {month: '02', date: 19, signs:['Aquarius', 'Pisces']}, {month: '03', date: 21, signs:['Pisces', 'Aries']}, {month: '04', date: 20, signs:['Aries', 'Taurus']}, {month: '05', date: 21, signs:['Taurus', 'Gemini']}, {month: '06', date: 22, signs:['Gemini', 'Cancer']}, {month: '07', date: 23, signs:['Cancer', 'Leo']}, {month: '08', date: 23, signs:['Leo', 'Virgo']}, {month: '09', date: 23, signs:['Virgo', 'Libra']}, {month: '10', date: 24, signs:['Libra', 'Scorpio']}, {month: '11', date: 22, signs:['Scorpio', 'Sagittarius']}, {month: '12', date: 22, signs:['Sagittarius', 'Capricorn']}];
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let birth = this.state.birth;
    let dash = birth.indexOf('-')+1;
    let dash2 = birth.lastIndexOf('-')+1;
    if(dash === -1){
      dash = birth.indexOf('/')+1;
      dash2 = birth.lastIndexOf('/')+1;
    }
    if(dash !== -1){
      // console.log(this.state.birth.slice(dash,dash2-1), this.state.birth.slice(dash2));
      let month = birth.slice(dash, dash2-1);
      let day = birth.slice(dash2);
      const date = this.astro_dates.filter(item =>{
        return item.month === month;
      })[0];
      let sign = null;
      if(day < date.date){
        sign = date.signs[0];
      }else{
        sign = date.signs[1];
      }
      this.setState({
        sign
      });
    }
    else{
      const warn = document.querySelector('#warning');
      warn.text = "Enter date as YYYY-MM-DD";
      warn.classList.toggle('show');
      setTimeout((warn)=>{
        warn.text = "";
        warn.classList.toggle('show');
      }, 3000);
    }
  }

  handleChange = (e) => {
    const {value, name} = e.target;
        this.setState({
            [name]: value
        });
  }

  render(){
    return (
      <div className="App">
        <header>
          <h1 className="birthHeader">Color Stella</h1>
          <div className="birthContainer">
            <form className="birthForm" onSubmit={this.handleSubmit}>
              <label>
                Birthday: <span> </span>
                <input 
                  type="date" 
                  name="birth" 
                  className="birth"
                  id="birth"
                  onChange={this.handleChange}
                  value={this.state.birth}
                  placeholder="YYYY-MM-DD"
                />
              </label>
              <p id="warning"></p>
              <button>Submit</button>
            </form>
          </div>
        </header>
        <Sign sign = {this.state.sign}/>
        <Horoscope sign = {this.state.sign}/>
        <RinsArt sign={this.state.sign}/>
      </div>
    );
  }
}

export default App;
