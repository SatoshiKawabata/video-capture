import React from 'react';
import { connect } from 'react-redux';
import './ExportForm.css';
import ActionCreator from './../../../app/ActionCreator';
import {
  FormField,
  Button,
} from 'rmwc';

const ExportForm = exportConfig => {
  const { width, height, name, updateExportConfig } = exportConfig;
  console.log(exportConfig);
  return (
    <FormField className="ExportForm">
      <h3>Export</h3>
      <ul className='ExportForm__list'>
        <li>
          <label htmlFor='export-width'>width: </label>
          <input type='number' value={width} id='export-width' onChange={onChangeWidth.bind(null, updateExportConfig)}/>
        </li>
        <li>
          <label htmlFor='export-height'>height: </label>
          <input type='number' value={height} id='export-height' onChange={onChangeHeight.bind(null, updateExportConfig)}/>
        </li>
        <li>
          <Button raised onClick={onClickExport}>Export</Button>
        </li>
      </ul>
    </FormField>
  );
}

const onClickExport = () => {

}

const onChangeWidth = (updateExportConfig, e) => {
  updateExportConfig({ width: e.target.value });
};

const onChangeHeight = (updateExportConfig, e) => {
  updateExportConfig({ height: e.target.value });
};

const mapStateToProps = state => {
  return state.exportConfig;
};

const mapDispatchToProps = dispatch => {
  return {
    updateExportConfig: exportConfig => {
      dispatch(ActionCreator.updateExportConfig(exportConfig));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExportForm);
