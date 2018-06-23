import React from 'react';

import './button.styl';

export default function Button(props) {
    const {
        type = 'button',
        className,
        form,
        children,
        onClick,
        disabled,
    } = props;
    return (
        <button
            type={type}
            className={`btn ${className}`}
            form={form}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
