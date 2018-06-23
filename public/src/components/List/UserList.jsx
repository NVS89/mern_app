import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Record from '../Record/Record';
import { userActions } from '../../actions/user.actions';


class UserList extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        this.props.userActions.getUsersRequest();
    }

    handleDelete(id) {
        this.props.userActions.deleteUserRequest(id);
    }

    render() {
        const { items } = this.props;
        return (
            <Record items={items} handleDelete={this.handleDelete} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.users.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
