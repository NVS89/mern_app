import React from 'react';
import PropTypes from 'prop-types';
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

Button.defaultProps = {
    className: '',
    form: '',
    children: {},
    disabled: '',
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    form: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
};
