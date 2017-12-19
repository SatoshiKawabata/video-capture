import React from 'react';
import { connect } from 'react-redux';
import './Template.css';
import ActionCreator from './../../../app/ActionCreator';

const Template = props => {
  console.log(props);
  return (
    <div className="Template">
      This is Template.
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {
      dispatch(ActionCreator.fuga());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);
