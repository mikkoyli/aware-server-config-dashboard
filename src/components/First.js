import React, { Component } from 'react';
import {Stats} from "./Stats";

export default class First extends Component {
    update = (e) => {
        this.props.update(e.target.name, e.target.value);
    }

    render() {
        if (!this.props.isActive) return null;

        return (
            <div>
                <h3 className='text-center'>Welcome to AWARE server configuration wizard!</h3>
                <Stats {...this.props} />
            </div>
        );
    }
}