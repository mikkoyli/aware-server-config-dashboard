import React, { Component } from 'react';
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import StepWizard from 'react-step-wizard';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#33B5E5' },
    },
  });

/* eslint react/prop-types: 0 */

export default class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mysql_ip: '',
            mysql_port: '',
            mysql_user: '',
            mysql_pass: '',
            mysql_database: '',
            node_port: '',
            mysql_engine: '',
            node_cerftificates: '',
          };
    }

    updateForm = (key, event) => {
console.info(key , event);
        console.info(event.target.value)
        this.setState({ [key]: event.target.value });
    }

    render() {
        return (
            <div className='container'>
            <MuiThemeProvider theme={theme}>
                <div className='jumbotron'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 offset-3'>
                            <StepWizard isLazyMount>
                                <First />
                                <Second update={this.updateForm} form={this.state} />
                                <Third />
                                <Fourth />
                            </StepWizard>
                        </div>
                    </div>
                </div>
                </MuiThemeProvider>
            </div>
        );
    }
}