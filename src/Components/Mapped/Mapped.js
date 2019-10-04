import React from 'react';

class Mapped extends React.Component {



    render(){
        return(
            <div>
                {this.props.element}
                <button>Add</button>
            </div>
        )
    }
}

export default Mapped;