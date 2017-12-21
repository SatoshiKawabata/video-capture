import * as React from 'react';
import { connect } from 'react-redux';
import './Template.css';
import ActionCreator from './../../../app/ActionCreator';
import { Model } from './../../../app/Models';

const Template = props => {
  console.log(props);
  return (
    <div className="Template">
      This is Template.
    </div>
  );
};

const mapStateToProps = (state: Model) => {
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
