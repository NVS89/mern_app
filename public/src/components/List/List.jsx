import React, { Component } from 'react';
import Record  from '../Record/Record'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../../actions/user.actions';

class UserList extends Component {

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        this.props.userActions.getUsersRequest();
    }

    render(){
        const { items } = this.props;
        return ( 
            <Record items={items}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.users.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);