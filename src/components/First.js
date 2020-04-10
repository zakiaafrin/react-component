import React, { Component } from 'react';

class First extends Component {

    render() {
        console.log(this.props);
        return (
            // component
            // ========
            // <div>
            //     <h3>My name is Zakia Afrin Jeme</h3>
            //     <p>I am a Full Stack Developer</p>
            // </div>

            // props
            // ========
            <div>
                <h3>Name : {this.props.name}</h3>
                <p>Email : {this.props.email}</p>
                <p>Address: {this.props.address}</p>
            </div>

        );
    }
}

export default First;