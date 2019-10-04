import React, {Component} from 'react';
import '../../App.css';
import Header from '../MainHeader';


class RocketPage extends Component {
    constructor(){
        super() 

        this.state ={

            fleet: [],

            captain: false,
            crew: false,
            rocket: false,
            destination: false,
        }
    }

    captianChoice = () => {

    }
    
    render(){
        return(
            <div>
                <header>
                    <Header/>
                </header>
                <div className='builder-box'>
                    <div className='fleet-picker'>Captain</div>
                    <div className='fleet-picker'>Crew</div>
                    <div className='fleet-picker'>Rocket</div>
                    <div className='fleet-picker'>Destination</div>
                </div>
                <div className='choice-preview'>
                    <div>Test
                        {/* {${}} */}
                    </div>
                    <div>Test
                        {}
                    </div>
                    <div>Test
                        {}
                    </div>
                    <div>Test
                        {}
                    </div>
                </div>
            </div>
        )
    }
}


export default RocketPage;