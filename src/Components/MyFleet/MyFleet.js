import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import MainHeader from '../MainHeader';

export default class MyFleet extends Component {
    render() {
        console.log(this.props.displayFleet)
        return (
            <div>
                {/* <MainHeader /> */}
                <div className='fleet'>
                    <div className='fleet-title'>Fleet Title:<input name={this.props.name + "Input"} onChange={this.props.handleChange}></input><button name={this.props.name} onClick={this.props.edit}>Submit</button></div>
                    <div className='fleet-items'>
                        {this.props.displayFleet ? (<div>{this.props.displayFleet.captain}</div>) : (null)}
                        {this.props.displayFleet ? (<div>{this.props.displayFleet.crew}</div>) : (null)}
                        {this.props.displayFleet ? (<div>{this.props.displayFleet.rocket}</div>) : (null)}
                        {this.props.displayFleet ? (<div>{this.props.displayFleet.destination}</div>) : (null)}

                    </div>
                </div>
            </div>
        )
    }
}