import React, { Component } from 'react';
import axios from 'axios';
import {Stats} from "./Stats";

const fs = require('fs');
const config_file = 'config.json';

let config_contents = {  
    mysql_ip: 'localhost',
    mysql_port: 3306, 
    mysql_user: 'user',
    mysql_pass: 'pass',
    mysql_database: 'user_db',
    node_port: '3000',
    mysql_engine: 'innodb',
    node_cerftificates: 'true' 
};

export default class Fourth extends Component {
    submit = () => {
              let data = JSON.stringify(config_contents);

              axios.post('/config_data', data)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });

              alert('Finished') // eslint-disable-line
    }
    render() {
        return (
            <div>
                <div className={'text-center'}>
                    <h2>Finished!</h2>
                </div>
                <Stats {...this.props} nextStep={this.submit.bind(this)} />
            </div>
        );
    }
}