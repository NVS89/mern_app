import React from 'react';
import UserForm from '../components/Form/UserForm';
import UserList from '../components/List/UserList';

export default function Page() {
    return (
        <div className="layout">
            <UserForm />
            <UserList />
        </div>
    );
}
