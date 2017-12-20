import * as React from 'react';
import { connect } from 'react-redux';
import './ExportForm.css';
import ActionCreator from './../../../app/ActionCreator';
const {
  FormField,
  Button,
} = require('rmwc');

const ExportForm = exportConfig => {
  const { width, height, updateExportConfig } = exportConfig;
  return (
    <FormField className="ExportForm">
      <h3>Export</h3>
      <ul className="ExportForm__list">
        <li>
          <label htmlFor="export-width">width: </label>
          <input type="number" value={width} id="export-width" onChange={onChangeWidth.bind(null, updateExportConfig)}/>
        </li>
        <li>
          <label htmlFor="export-height">height: </label>
          <input
            type="number"
            value={height}
            id="export-height"
            onChange={onChangeHeight.bind(null, updateExportConfig)}
          />
        </li>
        <li>
          <Button raised={true} onClick={onClickExport}>Export</Button>
        </li>
      </ul>
    </FormField>
  );
};

const onClickExport = () => {
  /* tslint:disable:no-console */
  console.log('export');
};

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
