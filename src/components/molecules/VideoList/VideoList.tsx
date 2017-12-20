import * as React from 'react';
import { connect } from 'react-redux';
import './VideoList.css';
import ActionCreator from './../../../app/ActionCreator';
const {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
} = require('rmwc');

const VideoList = props => {
  return (
    <GridList>
      {props.videoInfos.map(videoInfo => {
        const { src } = videoInfo;
        return <GridTile key={src} className="VideoList__item">
          <GridTilePrimary>
            <GridTilePrimaryContent>
              <video
                src={src}
                controls={true}
              />
            </GridTilePrimaryContent>
          </GridTilePrimary>
        </GridTile>;
      })}
    </GridList>
  );
};

const mapStateToProps = state => {
  const { videoInfos } = state;
  return { videoInfos };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: () => {
      dispatch(ActionCreator.fuga());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
