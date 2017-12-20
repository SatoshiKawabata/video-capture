import * as React from 'react';
import { connect } from 'react-redux';
import './Download.css';
import ActionCreator from './../../../app/ActionCreator';
import { Model } from './../../../app/Models';

const Download = props => {
  console.log(props);
  const ready = !props.videoInfos.some(info => !info.frameSrc);
  if (props.isExporting && ready) {
    console.log('ダウンロード', props.videoInfos);
    props.exportEnd();
  }
  return (
    <div className="Download">
      This is Download.
    </div>
  );
};

const mapStateToProps = (state: Model) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    exportEnd: () => {
      dispatch(ActionCreator.exportEnd());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Download);
