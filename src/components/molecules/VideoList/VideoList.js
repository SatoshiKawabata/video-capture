import React from 'react';
import { connect } from 'react-redux';
import './VideoList.css';
import ActionCreator from './../../../app/ActionCreator';
import {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
} from 'rmwc';

const VideoList = props => {
  console.log(props);
  return (
    <GridList>
      {props.videoInfos.map(videoInfo => {
        const { name, src } = videoInfo;
        return <GridTile key={src} className='VideoList__item'>
          <GridTilePrimary>
            <GridTilePrimaryContent>
              <video
                src={src}
                name={name}
                controls />
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
