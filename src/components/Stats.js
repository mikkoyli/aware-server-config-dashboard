import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

export const Stats = ({
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