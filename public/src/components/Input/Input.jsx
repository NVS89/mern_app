import React from 'react';
import PropTypes from 'prop-types';
import './input.styl';

export default function InputControl(props) {
    const {
        input,
        label,
        type,
        labelClass,
        containerClass,
        meta: { touched, error },
    } = props;
    return (
        <div className={containerClass}>
            <label className={labelClass} htmlFor={name}> {label}: </label>
            <input {...input} placeholder={label} type={type} className={`input-control${touched && error ? ' error' : ''}`} />
        </div>
    );
}

InputControl.defaultProps = {
    label: '',
    labelClass: '',
    containerClass: '',
};

InputControl.propTypes = {
    type: PropTypes.string.isRequired,
    label: PropTypes.string,
    labelClass: PropTypes.string,
    containerClass: PropTypes.string,
};