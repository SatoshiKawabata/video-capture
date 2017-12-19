import React from 'react';
import { connect } from 'react-redux';
import './FileInput.css';
import ActionCreator from './../../../app/ActionCreator';

const FileInput = props => {
  console.log(props);
  return (
    <div className="FileInput">
      <h3>Import</h3>
      <input type="file" multiple onChange={onChange.bind(null, props)} accept='video/*' />
    </div>
  );
}

const onChange = (props, e) => {
  console.log('on change', e);
  const { files } = e.target;
    const videoInfos = [];
  for (let i = 0; i < files.length; i++) {
    videoInfos.push({
      src: URL.createObjectURL(files[i]),
      name: files[i].name,
    });
  }
  props.updateVideoInfos(videoInfos);
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    updateVideoInfos: videoInfos => {
      dispatch(ActionCreator.updateVideoInfos(videoInfos));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FileInput);
