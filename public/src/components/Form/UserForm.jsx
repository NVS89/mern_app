import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { InputControl } from '../Input';
import { Button } from '../Button';
import { userActions } from '../../actions/user.actions';

import './form.styl';

const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.lengh > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.lengh > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }
    if (!values.phone) {
        errors.phone = 'Required';
    } else if (values.phone.lengh > 11) {
        errors.lastName = 'Must be 11 characters or less';
    }
    if (!values.gender) {
        errors.gender = 'Required';
    }
    if (!values.age) {
        errors.age = 'Required';
    } else if (values.age <= 10 || values.age >= 90) {
        errors.age = 'Please, enter valid age';
    }
    return errors;
};

function UserForm(props) {
    const { pristine, submitting, handleSubmit } = props;
    const submitHandler = (values) => {
        props.userActions.saveUserRequest(values);
    };
    return (
        <div className="form-wrapper">
            <form className="form" id="user" onSubmit={handleSubmit(submitHandler)} autoComplete="off">
                <Field
                    className="form_field"
                    name="firstName"
                    component={InputControl}
                    type="text"
                    placeholder="Please enter your First Name"
                    labelClass="form_label"
                    label="First Name"
                    containerClass="field-container"
                />
                <Field
                    className="form_field"
                    name="lastName"
                    component={InputControl}
                    type="text"
                    placeholder="Please enter your Last Name"
                    labelClass="form_label"
                    label="Last Name"
                    containerClass="field-container"
                />
                <Field
                    className="form_field"
                    name="phone"
                    component={InputControl}
                    type="phone"
                    placeholder="Please enter your Phone"
                    labelClass="form_label"
                    label="Phone"
                    containerClass="field-container"
                />
                <Field
                    className="form_field"
                    name="age"
                    component={InputControl}
                    type="number"
                    placeholder="Please enter your Age"
                    labelClass="form_label"
                    label="Age"
                    containerClass="field-container"
                />
                <div className="button-container">
                    <Button type="submit" className="submit" form="user" disabled={pristine || submitting}>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    };
}

export default reduxForm({ form: 'user', validate })(connect(null, mapDispatchToProps)(UserForm));
