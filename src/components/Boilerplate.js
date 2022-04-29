import React, { Component } from 'react';
import Form from './Forms';

class Boilerplate extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div id="formContainer">
                <Form/>
            </div>
        )
    }
}

export default Boilerplate;