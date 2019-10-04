import React, { Component } from "react";
// import { Link } from "react-router-dom";
import MainHeader from '../MainHeader';

export default class Home extends Component {
    render() {
        return (
            <div>
                <MainHeader />
                <div className='builder-intro-home'>
                    <p>Welcome</p>
                    <p>To begin please select an option in the directory above^</p>
                    <p></p>
                </div>
            </div>
        )
    }
}