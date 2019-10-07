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

            displayFleet: [],

            captain: false,
            crew: false,
            rocket: false,
            destination: false,
            editCheck: [false, -1],

            captainInput: "",
            crewInput: "",
            rocketInput: "",
            destinationInput: "",
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
        // console.log(this.state)
    }

    delete = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.id)
        axios.delete(`http://localhost:4450/api/${e.target.name}/${e.target.id}`)
            .then(res => this.setState({ fleet: res.data }))
            .catch(err => console.log(err))

        // console.log(this.state.rocket)
    }

    add = (e, id) => {
        // console.log(e.target.index)
        axios.post(`/api/${e.target.name}/${id}`).then(res =>
            this.setState({
                data: res.data,
                input: ""
            }))

            // console.log(this.state.add)
    }

    addCaptain = (e) => {
        // console.log(e.target.name)
        axios.post(`/api/${e.target.name}/${e.target.id}`).then(res => {
            this.setState({
                displayFleet: res.data,
                input: ""
            })
        })
    }
    addCrew = (e) => {
        // console.log(e.target.name)
        axios.post(`/api/${e.target.name}/${e.target.id}`).then(res => {
            this.setState({
                displayFleet: res.data,
                input: ""
            })
        })
    }
    addRocket = (e) => {
        // console.log(e.target.name)
        axios.post(`/api/${e.target.name}/${e.target.id}`).then(res => {
            this.setState({
                displayFleet: res.data,
                input: ""
            })
        })
    }
    addDestination = (e) => {
        // console.log(e.target.name)
        axios.post(`/api/${e.target.name}/${e.target.id}`).then(res => {
            this.setState({
                displayFleet: res.data,
                input: ""
            })
        })
    }

    edit = (e) => {
        // console.log(e.target.id)
        this.setState({ editCheck: [true, e.target.id] })

    }

    save = (e) => {
        // console.log(e.target.name)
        const body = {
            [e.target.name]: this.state[e.target.name + "Input"]
        }

        // console.log(body)

        axios.put(`http://localhost:4450/api/${e.target.name}/${e.target.id}`, body)
            .then(res => this.setState({
                fleet: res.data,
                editCheck: [false, -1]
            }))
            .catch(err => console.log(err))

    }


    render() {
        // console.log(this.state)
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
                                    return <Mapped name="captain" id={index} delete={this.delete} handleChange={this.handleChange} element={element} edit={this.edit} editCheck={this.state.editCheck} save={this.save} handleChange={this.handleChange} add={this.add} />
                                })
                            }</div>) : (null)}
                    {this.state.crew ? (
                        <div>
                            {
                                this.state.fleet.crew.map((element, index) => {
                                    return <Mapped name="crew" id={index} delete={this.delete} element={element} edit={this.edit} editCheck={this.state.editCheck} save={this.save} handleChange={this.handleChange} add={this.add}/>
                                })
                            }</div>) : (null)}
                    {this.state.rocket ? (
                        <div>
                            {
                                this.state.fleet.rocket.map((element, index) => {
                                    return <Mapped name="rocket" id={index} delete={this.delete} element={element} edit={this.edit} editCheck={this.state.editCheck} save={this.save} handleChange={this.handleChange} add={this.add}/>
                                })
                            }</div>) : (null)}
                    {this.state.destination ? (
                        <div>
                            {
                                this.state.fleet.destination.map((element, index) => {
                                    return <Mapped name="destination" id={index} delete={this.delete} element={element} edit={this.edit} editCheck={this.state.editCheck} save={this.save} handleChange={this.handleChange} add={this.add}/>
                                })
                            }</div>) : (null)}
                </div>
                <div className='fleet-display'>
                    <MyFleet displayFleet={this.state.data}/>
                </div>
            </div>
        )
    }
}


export default RocketPage;