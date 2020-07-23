import React, {Component} from "react"; 
import "./Home.css";
import Miscreant from "./images/miscreant.mp4";
import Logo from "./images/logo.PNG";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

class Home extends Component {
    render(){
        return (
            <div className="Home">
                <video className="Home-video" autoPlay loop muted>
                    <source src={Miscreant} type="video/mp4" />
                </video>
                <Fade top>
                <img className="Home-logo" src={Logo} alt="Logo"/>
                </Fade>
                <Link to="/About">
                    <Fade bottom>
                        <h2 className="Home-link">Enter</h2>
                    </Fade>
                </Link>

            </div>
        )
    }
}

export default Home;