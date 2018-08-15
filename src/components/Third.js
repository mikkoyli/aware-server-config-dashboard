import React, { Component } from 'react';
import {Stats} from "./Stats";

export default class Third extends Component {
    submit = () => {
        alert('Finished') // eslint-disable-line
    }
    render() {
        return (
            <div>
                <div className={'text-center'}>
                    <h2>CERTS!</h2>
                </div>
                <Stats {...this.props} />
            </div>
        );
    }
}