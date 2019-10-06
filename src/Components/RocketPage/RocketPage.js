import React, { Component } from 'react';
import '../../App.css';
import Header from '../MainHeader';
import axios from 'axios';
import Mapped from '../Mapped/Mapped';
import MyFleet from '../MyFleet/MyFleet';

class RocketPage extends Component {
    constructor() {
        super()

        this.state = {

            fleet: {
                captain: [],
                crew: [],
                rocket: [],
                destination: []
            },

            displayFleet:[],

            captain: false,
            crew: false,
            rocket: false,
            destination: false,
        }
    }


    componentDidMount = () => {
        axios.get('/api/data').then(res =>
            this.setState({
                fleet: res.data
            }))
    }


    captianChoice = () => {
        let test = this.state.captain
        this.setState({
            captain: !test
        })
    }

    crewChoice = () => {
        let crewTest = this.state.crew
        this.setState({
            crew: !crewTest
        })
    }

    rocketChoice = () => {
        let rocketTest = this.state.rocket
        this.setState({
            rocket: !rocketTest
        })
    }

    destinationChoice = () => {
        let destinationTest = this.state.destination
        this.setState({
            destination: !destinationTest
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <header>
                    <Header />
                </header>
                <div className='builder-intro'>
                    <p>Build Your Fleet</p>
                    <p>Begin By Selecting Each Item Below</p>
                </div>
                <div className='builder-box'>
                    <div className='fleet-picker' onClick={() => this.captianChoice()}>Captain</div>
                    <div className='fleet-picker' onClick={() => this.crewChoice()}>Crew</div>
                    <div className='fleet-picker' onClick={() => this.rocketChoice()}>Rocket</div>
                    <div className='fleet-picker' onClick={() => this.destinationChoice()}>Destination</div>
                </div>
                <div className='choice-preview'>
                    {this.state.captain ? (
                        <div>
                            {
                                this.state.fleet.captain.map((element, index) => {
                                    return <Mapped handleChange={this.handleChange} element={element} />
                                })
                            }<input type="text" name="captainInput" onChange={e => this.handleChange(e)}/><button>Add</button></div>) : (null)}
                    {this.state.crew ? (
                        <div>
                            {
                                this.state.fleet.crew.map((element, index) => {
                                    return <Mapped element={element} />
                                })
                            }</div>) : (null)}
                    {this.state.rocket ? (
                        <div>
                            {
                                this.state.fleet.rocket.map((element, index) => {
                                    return <Mapped element={element} />
                                })
                            }</div>) : (null)}
                    {this.state.destination ? (
                        <div>
                        {
                            this.state.fleet.destination.map((element, index) => {
                                return <Mapped element={element} />
                            })
                            }</div>) : (null)}
                </div>
                <div>
                    <MyFleet displayFleet={this.state.displayFleet}/>
                </div>
            </div>
        )
    }
}


export default RocketPage;