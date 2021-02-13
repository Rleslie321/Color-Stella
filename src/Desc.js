import React, {Component} from 'react';

class Desc extends Component{
    constructor(){
        super();
        this.desc = [
            {sign: 'Aries', desc: 'Aries loves to be number one, so it’s no surprise that these audacious rams are the first sign of the zodiac. Bold and ambitious, Aries dives headfirst into even the most challenging situations.'},
            {sign: 'Taurus', desc: 'Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.'},
            {sign: 'Gemini', desc: 'Have you ever been so busy that you wished you could clone yourself just to get everything done? That’s the Gemini experience in a nutshell. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself.'},
            {sign: 'Cancer', desc: 'Cancer is a cardinal water sign. Represented by the crab, this crustacean seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces: For instance, Cancers can effortlessly pick up the energies in a room.'},
            {sign: 'Leo', desc: 'Roll out the red carpet because Leo has arrived. Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They’re delighted to embrace their royal status: Vivacious, theatrical, and passionate, Leos love to bask in the spotlight and celebrate themselves.'},
            {sign: 'Virgo', desc: 'Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo’s deep-rooted presence in the material world. Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.'},
            {sign: 'Libra', desc: `Libra is an air sign represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on balance and harmony. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life.`},
            {sign: 'Scorpio', desc: 'Scorpio is one of the most misunderstood signs of the zodiac. Because of its incredible passion and power, Scorpio is often mistaken for a fire sign. In fact, Scorpio is a water sign that derives its strength from the psychic, emotional realm.'},
            {sign: 'Sagittarius', desc: 'Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.'},
            {sign: 'Capricorn', desc: 'The last earth sign of the zodiac, Capricorn is represented by the sea goat, a mythological creature with the body of a goat and tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.'},
            {sign: 'Aquarius', desc: 'Despite the “aqua” in its name, Aquarius is actually the last air sign of the zodiac. Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign.'},
            {sign: 'Pisces', desc: `Pisces, a water sign, is the last constellation of the zodiac. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs.`},

        ];
    }

    componentDidUpdate(){
        const contentDiv = document.querySelector('.desc');
        if(contentDiv){
            setInterval(()=>{
                contentDiv.classList.toggle('starAnim');
            }, 7000);
        }
    }

    getTrait = (sign) =>{
        const desc = this.desc.filter((item)=>{
            return sign === item.sign;
        })[0].desc;
        return desc;
    }

    render(){
        return(
            <div className="descComp">
                {this.props.sign !== null &&
                <div className="desc" style= {{'borderColor': this.props.color}}>
                    <h1>{this.props.sign} Description</h1>
                    <p>{this.getTrait(this.props.sign)}</p>
                </div>}
            </div>
        );
    }
    
}

export default Desc;