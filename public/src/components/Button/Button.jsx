import React from 'react';
import PropTypes from 'prop-types';
import './button.styl';

export default function Button(props) {
    const {
        type,
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
    type: 'button',
    className: '',
    form: '',
    children: {},
    onClick: null,
    disabled: false,
};

Button.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string,
    form: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};
