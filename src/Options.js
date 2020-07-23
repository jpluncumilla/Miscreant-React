import React, { Component } from "react";
import "./Options.css";
import MLogo from "./images/mlogo.jpg";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import {FiTwitter, FiInstagram, FiMail} from "react-icons/fi";

class Options extends Component {
    render(){
        return (
            <div className="Options">
                <Fade top>
                <img className="Options-image" src={MLogo} alt="M-Logo"/>
                </Fade>
                <Fade bottom>
                <p className="Options-paragraph">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus fermentum, nibh at iaculis ultrices, mi eros tincidunt enim, vitae vehicula lectus odio a ipsum. Aliquam erat volutpat. Fusce id nisl sit amet diam iaculis pulvinar. Sed ultrices ullamcorper ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis mi arcu, porta ut elementum et, ullamcorper sed eros. In euismod tellus sed ipsum adipiscing suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac magna dui. Aenean nec leo libero. Pellentesque lacinia dolor a dui lacinia consectetur. Mauris euismod porta magna, non dignissim orci adipiscing malesuada. Phasellus nunc sapien, consectetur nec vestibulum ac, euismod a ipsum.
                </p>
                <div className="Options-links">
                    <Link to="/Work">
                        <h3>Our Work</h3>
                    </Link>
                    <h3>Contact us:</h3>
                    <div className="Options-icons">
                        <a target="_blank" rel="noopener noreferrer" href="mailto:miscreantproductions@yahoo.com"><FiMail /></a> <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mis.cre.ant/"><FiInstagram /></a> <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/miscreant305"><FiTwitter /></a>
                    </div>
                </div>
                </Fade>
                <p className="Options-jp">
                    Powered by: <a target="_blank" rel="noopener noreferrer" href="https://react-portfolio-65435.firebaseapp.com/">JP Luncumilla</a>
                </p>
            </div>
        )
    }
}

export default Options;