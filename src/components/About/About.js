import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './About.css'


class About extends Component {
    redirectPortfolio=() =>{
        this.props.history.push("/portfolio")
    }
    render() {
        return (
            <div>
            
            <div id="about">
                <h3>
                I'm a full-stack web developer based in Reston, Virginia. 
                I started to learn programming on my own and continue developing my 
                skills exploring the vast landscape of technologies. Driven and constantly 
                curious I’m ready to solve complex problems and create impactful and innovative 
                solutions. < br /> You can get in touch with me <Link id="hereContactsLink" to="/contact">here</Link>.
                </h3>
                <input onClick={this.redirectPortfolio} id="explore_button" type="button" value="EXPLORE WORK"></input>
            </div>
            </div>
        );
    }
}

export default About;