import React from 'react';

class Mapped extends React.Component {



    render() {
        // return(
            // console.log(this.props)

        if (this.props.editCheck[0] && +this.props.editCheck[1] === +this.props.id) {
            return (
                <div>
                    <input name={this.props.name + "Input"} defaultValue={this.props.element} onChange={e => this.props.handleChange(e)}></input>
                    <button name={this.props.name} id={this.props.id} onClick={e => this.props.save(e)}>Submit</button>
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.element}
                    <div>
                        <button name={this.props.name} onClick={e => this.props.add(e,this.props.id)}>Add</button>
                        <button name={this.props.name} id={this.props.id} onClick={e => this.props.edit(e)}>Edit</button>
                        <button name={this.props.name} id={this.props.id} onClick={e => this.props.delete(e)}>Delete</button>
                    </div>
                </div>
            )
        }
        // console.log(this.props.add)
    }
}

export default Mapped;