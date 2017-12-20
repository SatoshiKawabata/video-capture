import * as React from 'react';
import { connect } from 'react-redux';
import './Controls.css';
import ActionCreator from './../../../app/ActionCreator';
import FileInput from '../../atoms/FileInput/FileInput';
import ExportForm from '../../atoms/ExportForm/ExportForm';
import Download from '../../atoms/Download/Download';
import { Model } from './../../../app/Models';

const Controls = () => {
  return (
    <div className="Controls">
      <FileInput />
      <ExportForm />
      <Download />
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

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
