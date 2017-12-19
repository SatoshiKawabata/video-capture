import React from 'react';
import { connect } from 'react-redux';
import './Body.css';
import ActionCreator from './../../../app/ActionCreator';
import Controls from '../../molecules/Controls/Controls';
import VideoList from '../../molecules/VideoList/VideoList';

const Body = () => {
  return (
    <div className="Body">
      <Controls />
      <VideoList />
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

export default connect(mapStateToProps, mapDispatchToProps)(Body);
