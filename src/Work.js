import React, { Component } from "react";
import "./Work.css";
import SwipeableTextMobileStepper from "./Carousel";
import Fade from 'react-reveal/Fade';
import {FiHome} from "react-icons/fi";
import { Link } from "react-router-dom";


class Work extends Component {
    render(){
        return (
            <div className="Work">
                <Fade bottom>
                    <div className="Work-nav">
                        <h1 className="Work-title">Work</h1>
                    </div>

                    <Link to="/About">
                        <div className="Work-icon">
                            <FiHome />
                        </div>
                    </Link>

                    <div className="Work-videos">
                        <iframe className="Work-video1" title="video1" src="https://player.vimeo.com/video/23660736" width="320" height="180" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        <iframe className="Work-video2" title="video2" src="https://player.vimeo.com/video/23660736" width="320" height="180" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        <iframe className="Work-video3" title="video3" src="https://player.vimeo.com/video/23660736" width="320" height="180" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                    </div>
                    
                    <div className="Work-photography">
                    <SwipeableTextMobileStepper />
                    </div>
                </Fade>
            </div>
        )
    }
}

export default Work;