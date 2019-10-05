import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';


class RocketPage extends Component {
    
    render(){
        return(
            <div>
                <header className='main-header'>
                    <div className='title'>
                        Space Fleet Builder
                    </div>
                    <div className='nav-items'>
                        <Link to='/' className='nav-buttons'>HOME</Link>
                        {/* <Link to='/MyFleet' className='nav-buttons'>My Fleet</Link> */}
                        <Link to='/Learn' className='nav-buttons'>Learn</Link>
                        <Link to='/RocketPage' className='nav-buttons'>Design Your Fleet</Link>
                    </div>
                </header>
            </div>
        )
    }
}


export default RocketPage;