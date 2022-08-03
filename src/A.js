import { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '..';


class A extends Component {
  this.props.isUserLoading
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
