import React, { Component } from "react";
// import { Link } from "react-router-dom";
import MainHeader from '../MainHeader';
import '../../App.css';
import './learn.css';

import SpaceX from '../../spacexLogo.png';
import NASA from '../../NASALogo.png';
import BlueOrigin from '../../blue-origin-logo.png';
import VirginGalactic from '../../virgin-galactic-logo.jpg';


export default class Learn extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <div className='div-containers'>
                        <div className="Links">If you would like to see what SpaceX is up to check out here.<a href='https://www.spacex.com'><img src={SpaceX}/></a></div>
                        <div className="Links">If you would like to see what NASA is up to check out here.<a href='https://www.nasa.gov'><img src={NASA}/></a></div>
                        <div className="Links">If you would like to see what Blue Origin is up to check out here.<a href='https://www.blueorigin.com'><img src={BlueOrigin}/></a></div>
                        <div className="Links">If you would like to see what Virgin Galactic is up to check out here.<a href='https://www.virgingalactic.com'><img src={VirginGalactic}/></a></div>
                </div>
            </div>
        )
    }
}