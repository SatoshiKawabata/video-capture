import * as React from 'react';
import { connect } from 'react-redux';
import './FileInput.css';
import ActionCreator from './../../../app/ActionCreator';
import { Model, VideoInfo } from '../../../app/Models';

const FileInput = props => {
  return (
    <div className="FileInput">
      <h3>Import</h3>
      <input type="file" multiple={true} onChange={onChange.bind(null, props)} accept="video/*" disabled={props.isExporting} />
    </div>
  );
};

const onChange = (props, e) => {
  const { files } = e.target;
  const videoInfos: VideoInfo[] = [];
  for (let i = 0; i < files.length; i++) {
    videoInfos.push({
      src: URL.createObjectURL(files[i]),
      name: files[i].name,
    });
  }
  props.updateVideoInfos(videoInfos);
};

const mapStateToProps = (state: Model) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    updateVideoInfos: (videoInfos: VideoInfo[]) => {
      dispatch(ActionCreator.updateVideoInfos(videoInfos));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileInput);
