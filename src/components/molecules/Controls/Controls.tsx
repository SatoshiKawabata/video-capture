import * as React from 'react';
import { connect } from 'react-redux';
import './Controls.css';
import ActionCreator from './../../../app/ActionCreator';
import FileInput from '../../atoms/FileInput/FileInput';
import ExportForm from '../../atoms/ExportForm/ExportForm';

const Controls = () => {
  return (
    <div className="Controls">
      <FileInput />
      <ExportForm />
    </div>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
