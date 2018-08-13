import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

/* eslint react/prop-types: 0 */

export default class Wizard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {},
        };
    }

    updateForm = (key, value) => {
        const { form } = this.state;

        form[key] = value;
        this.setState({ form });
    }

    render() {
        return (
            <div className='container'>
                <div className='jumbotron'>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-6 offset-3'>
                            <StepWizard isLazyMount>
                                <First update={this.updateForm} />
                                <Second form={this.state.form} />
                                <Third />
                                <Fourth />
                            </StepWizard>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * Stats Component - to illustrate the possible functions
 * Could be used for nav buttons or overview
 */
const Stats = ({
    currentStep,
    nextStep,
    previousStep,
    totalSteps,
}) => (
    <div>
        <hr />
        { currentStep > 1 &&
            <Button variant="contained" color="primary" className='btn btn-default btn-block' onClick={previousStep}>Go Back</Button>
        }
        { currentStep < totalSteps ?
            <Button variant="contained" color="primary" className='btn btn-primary btn-block' onClick={nextStep}>Continue</Button>
            :
            <Button variant="contained" color="primary" className='btn btn-success btn-block' onClick={nextStep}>Finish</Button>
        }
        <hr />
        <div style={{ fontSize: '21px', fontWeight: '200' }}>
            <div>Current Step: {currentStep}</div>
            <div>Total Steps: {totalSteps}</div>
        </div>
    </div>
);

/** Steps */

class First extends Component {
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

class Second extends Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      };
    
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
      
    render() {
        return (
            <div>
                <form className="config-selector" noValidate autoComplete="off">
        <h2>Enter configuration variables</h2>
        <TextField label="MySQL hostname" placeholder="localhost" required id="mysql_ip" /><br/>
        <TextField label="MySQL port" placeholder="3306" required id="mysql_port" /><br/>
        <TextField label="MySQL user" placeholder="" required id="mysql_user" /><br/>
        <TextField label="MySQL password" placeholder="" required id="mysql_pass" /><br/>
        <TextField label="MySQL database" placeholder="" required id="mysql_database" /><br/>
        <TextField label="Node.js port" placeholder="3000" required id="node_port" /><br/>

        <TextField
          id="mysql_engine"
          select
          label="MySQL engine"
          value="value"
          SelectProps={{
            native: true,
          }}
          helperText="Select MySQL engine used in setup"
          margin="normal"
        >
        <option key="mysql_engine" value="innodb">
              InnoDB
        </option>
        <option key="mysql_engine" value="ndb">
              NDB
        </option>
        </TextField>
        <br/>
        <TextField
          id="node_cerftificates"
          select
          label="Certificates"
          value="value"
          SelectProps={{
            native: true,
          }}
          helperText="Do you want to use certificates?"
          margin="normal"
        >
        <option key="node_cerftificates" value="true">
              Yes
        </option>
        <option key="node_cerftificates" value="false">
              No
        </option>
        </TextField>




        
      </form>
                <Stats {...this.props} />
            </div>
        );
    }
}
class Third extends Component {
    render() {
        return (
            <div>
                <div className={'text-center'}>
                    <h2>Certificates configuration</h2>
                </div>
                <Stats {...this.props} />
            </div>
        );
    }
}

class Fourth extends Component {
    submit = () => {
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