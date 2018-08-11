import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';

/* eslint react/prop-types: 0 */

/**
 * A basic demonstration of how to use the step wizard
 */
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
                <h2>AWARE server configuration wizard</h2>

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
    firstStep,
    goToStep,
    lastStep,
    nextStep,
    previousStep,
    totalSteps,
}) => (
    <div>
        <hr />
        { currentStep > 1 &&
            <button className='btn btn-default btn-block' onClick={previousStep}>Go Back</button>
        }
        { currentStep < totalSteps ?
            <button className='btn btn-primary btn-block' onClick={nextStep}>Continue</button>
            :
            <button className='btn btn-success btn-block' onClick={nextStep}>Finish</button>
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
    render() {
        return (
            <div>
                <form className="config-selector">
        <h2>Enter configuration variables</h2>
        <input type="text" required placeholder="mysql_ip" /><br/>
        <input type="text" required placeholder="mysql_port" /><br/>
        <input type="text" required placeholder="mysql_user" /><br/>
        <input type="text" required placeholder="mysql_pass" /><br/>
        <input type="text" required placeholder="mysql_database" /><br/>
        <input type="text" required placeholder="mysql_engine" /><br/>
        <input type="text" required placeholder="node_cerftificates" /><br/>
        <input type="text" required placeholder="node_port" /><br/>
        <button type="submit">Create config →</button>
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