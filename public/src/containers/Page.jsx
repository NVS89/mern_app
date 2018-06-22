import React, { Component } from 'react';
import UserForm from '../components/Form/UserForm';
import UserList from '../components/List/List';

export default class Page extends Component {
    render() {
        return (
            <div className="layout">
                <UserForm />
                <UserList />
            </div>
        )
    }
}