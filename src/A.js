import { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '..';

// import map from `lodash/lib/map`;

import { combineReducers } from 'redux';


const rootReducer = combineReducers([
  userReducer,
])

export default rootReducer;

class A extends Component {
  this.props.addUser(user);
}


function A ({ isUserLoading, addUser }) {

}

const mapStateToProps = state => ({
  isUserLoading: state.users.loadingUser,
});

const mapDispatchToProps = dispatch => ({
  addUser: () => dispatch(addUser()),
})

connect(mapStateToProps, mapDispatchToProps)(A);
