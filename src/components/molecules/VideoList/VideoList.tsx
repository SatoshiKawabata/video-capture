import * as React from 'react';
import { connect } from 'react-redux';
import './VideoList.css';
import ActionCreator from './../../../app/ActionCreator';
import { Model, VideoInfo } from './../../../app/Models';
const {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
} = require('rmwc');

const VideoList = props => {
  const { videoInfos, exportConfig, isExporting } = props;
    const wrapper = document.querySelector('#video-list');
  if (wrapper && isExporting) {
    const { width, height } = exportConfig;
    const videos = wrapper.querySelectorAll('video') as NodeListOf<HTMLVideoElement>;
    getVideoFrames(videoInfos, videos, width, height).then(infos => {
      props.updateVideoInfos(infos);
      props.exportEnd();
    });
  }
  return (
    <GridList id="video-list">
      {videoInfos.map(videoInfo => {
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

const getVideoFrames = (videoInfos: VideoInfo[] ,videos: NodeListOf<HTMLVideoElement>, w: number, h: number): Promise<VideoInfo[]> => {
  const proms: Promise<VideoInfo>[] = [];
  for (let i = 0; i < videos.length; i++) {
    const v = videos[i];
    const info = videoInfos[i];
    proms.push(getVideoFrame(info, v, w, h));
  }
  return Promise.all(proms);
};

const getVideoFrame = (info: VideoInfo, v: HTMLVideoElement, w: number, h: number): Promise<VideoInfo> => {
  return new Promise(res => {
    const c = document.createElement('canvas');
    c.width = w ? w : v.videoWidth;
    c.height = h ? h : v.videoHeight;
    const ctx = c.getContext('2d');
    ctx && ctx.drawImage(v, 0, 0, c.width, c.height);
    c.toBlob(b => {
      const url = URL.createObjectURL(b);
      info.frameSrc = url;
      res(info);
    });
  });
};

const mapStateToProps = (state: Model) => {
  const { videoInfos, isExporting, exportConfig } = state;
  return { videoInfos, isExporting, exportConfig };
};

const mapDispatchToProps = dispatch => {
  return {
    updateVideoInfos: (infos: VideoInfo[]) => {
      dispatch(ActionCreator.updateVideoInfos(infos));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
