import React from 'react';
import { Field, reduxForm } from 'redux-form';

let UserForm = props => {
    // const {hendleSubmit} = props
    return ( 
        <form>
            <div>
                <label htmlFor="firstName"></label>
                <Field name="firstName" component="input" type="text"/>
            </div>
            <div>
                <label htmlFor="lastName"></label>
                <Field name="lastName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="phone"></label>
                <Field name="phone" component="input" type="phone" />
            </div>
            <div>
                <label htmlFor="gender"></label>
                <Field name="gender" component="input" type="select" />
            </div>
            <div>
                <label htmlFor="age"></label>
                <Field name="age" component="input" type="number" />
            </div>
        </form>
    )
}

UserForm = reduxForm({
    form:'user'
})(UserForm)

export default UserForm;