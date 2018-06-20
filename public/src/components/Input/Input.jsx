import React from 'react';
import './input.styl';

export default function InputControl(props) {
    const{    
        input,
        label,
        type,
        labelClass,
        containerClass,
        meta: { touched, error}
    } = props;
    return(
        <div className={containerClass}>
            <label className={labelClass} htmlFor={name}> {label} </label>
            <input {...input} placeholder={label} type={type} />
            {touched && (error && <span>{error}</span>)}
        </div>
    )
}