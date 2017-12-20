import * as React from 'react';
import { connect } from 'react-redux';
import './ExportForm.css';
import ActionCreator from './../../../app/ActionCreator';
import { ExportConfig, Model } from '../../../app/Models';
const {
  FormField,
  Button,
} = require('rmwc');

const ExportForm = props => {
  const { isExporting } = props;
  const { width, height } = props.exportConfig as ExportConfig;
  return (
    <FormField className="ExportForm">
      <h3>Export</h3>
      <ul className="ExportForm__list">
        <li>
          <label htmlFor="export-width">width: </label>
          <input type="number" value={width} id="export-width" onChange={onChangeWidth.bind(null, props.updateExportConfig)}/>
        </li>
        <li>
          <label htmlFor="export-height">height: </label>
          <input
            type="number"
            value={height}
            id="export-height"
            onChange={onChangeHeight.bind(null, props.updateExportConfig)}
          />
        </li>
        <li>
          <Button raised={true} onClick={onClickExport.bind(null, props)} disabled={props.videoInfos.length < 1 || isExporting}>Export</Button>
        </li>
      </ul>
    </FormField>
  );
};

const onClickExport = props => {
  props.export();
};

const onChangeWidth = (updateExportConfig, e) => {
  updateExportConfig({ width: e.target.value });
};

const onChangeHeight = (updateExportConfig, e) => {
  updateExportConfig({ height: e.target.value });
};

const mapStateToProps = (state: Model) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    updateExportConfig: (exportConfig: ExportConfig) => {
      dispatch(ActionCreator.updateExportConfig(exportConfig));
    },
    export: () => {
      dispatch(ActionCreator.export());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExportForm);
