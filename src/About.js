import React, {Component} from 'react';

class About extends Component{
    constructor(){
        super();
        this.about = [
            {sign: 'Aries', traits: ["No filter","Gets angry, then forgets why they were angry","Thinks everything is a game they can win","Will do anything on a dare","Easily bored"], celebs: ["Mariah Carey", "Jackie Chan", "Leonardo DaVinci", "Charles Baudelaire", "Harry Houdini", "Cesar Chavez", "Andrei Tarkovsky", "Ilana Glazer"]},
            {sign: 'Taurus', traits: ["Just wants to cuddle","Homebody","All or nothing, No in between","Wears the same outfit everyday","Hates big changes"], celebs: ["Karl Marx","Malcolm X","Audrey Hepburn","William Shakespeare","James Brown","Grace Jones","Mr. T","John Waters"] },
            {sign: 'Gemini', traits: ["Charismatic","Uses humor as a crutch","Could talk to a brick wall","Arguments as flirting","Knows a little about everything"], celebs: ["Kanye West","Kendrick Lamar","Jean-Paul Sartre","Allen Ginsberg","Thomas Mann","Prince","Laurie Anderson","Stevie Nicks"]},
            {sign: 'Cancer', traits: ["Very sensitive","Seeks comfort","Forgives but never forgets","Only has one boundary, but it is very firm","Takes on other people’s problems"], celebs: ["Ariana Grande","Frida Kahlo","Marcel Proust","Assata Shakur","Stokely Carmichael","Franz Kafka","Patrice Lumumba","Emma Goldman"]},
            {sign: 'Leo', traits: ["Exudes warmth and creativity","A little bit vain","Really big personality","Wants to stand out","Interested in luxury"], celebs: ["Kobe Bryant","James Baldwin","Kylie Jenner","Coco Chanel","Kate Bush","Lil Yachty","Duchamp","Charli XCX"]},
            {sign: 'Virgo', traits: ["Needs to feel useful","Has a quick fix for everything","Judgmental, but with good intentions","Exceptional spatial awareness","A million ideas per second"], celebs: ["Fred Hampton","Bernie Sanders","Agatha Christie","Mary Shelley","D. H. Lawrence","Georges Bataille","Antonin Artaud","Marsha P. Johnson"]},
            {sign: 'Libra', traits: ["Hates being alone","Really good aesthetics","Conflict avoidant","Sees every side","Prone to fantasy","Can’t make decisions"], celebs: ["Michel Foucault","Friedrich Nietzsche","Kim Kardashian","Donald Glover","Gwyneth Paltrow","Neil DeGrasse Tyson","Nico","Arthur Rimbaud"]},
            {sign: 'Scorpio', traits: ["Primary emotion is betrayal","Looks cool in a leather jacket","OK with uncomfortable silence","Can’t be sure if they’re serious or joking","Eyes that look into your soul"], celebs: ["Leonardo DiCaprio","Charles Manson","Marie Antoinette","Frank Ocean","Albert Camus","Fyodor Dostoevsky","Sylvia Plath","Björk"]},
            {sign: 'Sagittarius', traits: ["No indoor voice","Forms opinions off of pure emotion","Obsessed with self-improvement","Wields their truth like a blunt weapon","Friendliest person at the party"], celebs: ["Chadwick Boseman","Nicki Minaj","Jane Austen","Jean Michel Basquiat","Nostradamus","Emily Dickinson","Diego Rivera","Friedrich Engels"]},
            {sign: 'Capricorn', traits: ["Full grown adult since age six","The responsible friend","Motivated by duty","Takes a while to warm up to people","Represses any emotion that gets in the way of success"], celebs: ["Martin Luther King Jr.","Jeff Bezos","Timothee Chalamet","Michelle Obama","Dolly Parton","Mao Zedong","Hayao Miyazaki","Edgar Allan Poe"]},
            {sign: 'Aquarius', traits: ["Purposefully esoteric","Doesn’t ‘do’ feelings, just concepts","Actually believes in conspiracy theories","More in love with humanity as a whole than individuals","Always feels like an outcast","Fetishizes personal freedom"], celebs: ["Angela Davis","Virginia Woolf","Frederick Douglas","Michael Jordan","Yoko Ono","Grigori Rasputin","Huey P. Newton","James Joyce","Audre Lorde"]},
            {sign: 'Pisces', traits: ["Somehow both 5 and 50 years old at once","Thinks everything is a sign","Can’t remember if they dreamt it or it actually happened","Excessively romantic","Prone to fantasy","No boundaries"], celebs: ["Nina Simone","Pier Paolo Pasolini","Genesis P. Orridge","Gabriel Garcia Marquez","Anais Nin","Rihanna","Victor Hugo","Rosa Luxemburg"]},
        ];
    }
    getAbout = (sign) =>{
        return this.about.filter((item)=>{
            return sign === item.sign;
        })[0];
    }

    componentDidUpdate(){
        const contentDiv = document.querySelector('.about');
        if(contentDiv){
            setInterval(()=>{
                contentDiv.classList.toggle('starAnim');
            }, 13000);
        }
    }

    render(){
        let traits = [];
        let celebs = [];
        let key = 0;
        if(this.props.sign !== null){
            let about = this.getAbout(this.props.sign);
            traits = about.traits.map(item =>{
                return <li key={key++}>{item}</li>;
            });
            key = 0;
            celebs = about.celebs.map(item => {
                return <li key={key++}>{item}</li>;
            });
        }
        return(
            <div className="aboutComp">
                {this.props.sign !== null &&
                <div className="about" style= {{'borderColor': this.props.color}}>
                    <h1>About {this.props.sign}</h1>
                    <div className="aboutContainer">
                        <div className="aboutTraits">
                            <h3>Traits</h3>
                            <ul>{traits}</ul>
                        </div>
                        <div className="aboutCelebs">
                            <h3>Famous {this.props.sign}</h3>
                            <ul>{celebs}</ul>
                        </div>
                    </div>
                    
                </div>}
            </div>
        )
    }
}

export default About;