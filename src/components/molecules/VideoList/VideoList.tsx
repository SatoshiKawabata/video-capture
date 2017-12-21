import * as React from 'react';
import { connect } from 'react-redux';
import './VideoList.css';
import ActionCreator from './../../../app/ActionCreator';
import { Model, VideoInfo } from './../../../app/Models';
import { lifecycle } from 'recompose';
const {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
} = require('rmwc');

let VideoList = props => {
  const { videoInfos } = props;
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

VideoList = lifecycle({
  componentDidMount() {
    this.props.eventEmitter.on('on-export', () => {
      const { videoInfos } = this.props;
      const wrapper = document.querySelector('#video-list');
      if (wrapper) {
        const { width, height } = this.props.exportConfig;
        const videos = wrapper.querySelectorAll('video') as NodeListOf<HTMLVideoElement>;
        getVideoFrames(videoInfos, videos, width, height).then(infos => {
          forceDownload(infos);
        });
      }
    });
  }
})(VideoList);

const getVideoFrames = (
  videoInfos: VideoInfo[] ,
  videos: NodeListOf<HTMLVideoElement>,
  w: number,
  h: number): Promise<VideoInfo[]> => {
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
    if (ctx) {
      ctx.drawImage(v, 0, 0, c.width, c.height);
    }
    c.toBlob(b => {
      const url = URL.createObjectURL(b);
      info.frameSrc = url;
      res(info);
    });
  });
};

const forceDownload = (infos: VideoInfo[]) => {
  infos.forEach(info => {
    const a = document.createElement('a');
    a.href = info.frameSrc;
    a.download = name;
    a.click();
  });
};

const mapStateToProps = (state: Model) => {
  const { videoInfos, exportConfig, eventEmitter } = state;
  return { videoInfos, exportConfig, eventEmitter };
};

const mapDispatchToProps = dispatch => {
  return {
    updateVideoInfos: (infos: VideoInfo[]) => {
      dispatch(ActionCreator.updateVideoInfos(infos));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
